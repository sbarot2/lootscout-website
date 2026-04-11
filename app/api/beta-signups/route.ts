import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function appendLocalSignupLog(email: string): Promise<boolean> {
  if (process.env.VERCEL) return false;
  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    const line = `${new Date().toISOString()}\t${email}\n`;
    await appendFile(path.join(dir, "beta-signups.txt"), line, "utf8");
    return true;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const website = typeof o.website === "string" ? o.website.trim() : "";
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.BETA_LEADS_EMAIL;
  const from =
    process.env.BETA_EMAIL_FROM?.trim() || "LootScout <onboarding@resend.dev>";

  const hasEmailConfig = !!(apiKey && notifyTo);
  let emailed = false;

  if (hasEmailConfig) {
    const subject = `[LootScout] Beta signup (enterprise beta access)`;
    const text = `Email: ${email}\nRequested: free beta access to enterprise features\nTime: ${new Date().toISOString()}`;
    const html = `<p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Requested:</strong> free beta access to enterprise features</p><p><strong>Time:</strong> ${escapeHtml(
      new Date().toISOString()
    )}</p>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [notifyTo],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    emailed = res.ok;
    if (!emailed) {
      let detail = "Email delivery failed";
      try {
        const err = (await res.json()) as { message?: string };
        if (err?.message) detail = err.message;
      } catch {
        /* ignore */
      }
      const filedFallback = await appendLocalSignupLog(email);
      if (filedFallback) {
        return NextResponse.json({ ok: true });
      }
      return NextResponse.json({ error: detail }, { status: 502 });
    }
  }

  const filed = await appendLocalSignupLog(email);

  if (emailed || filed) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      error:
        "Beta signup is not configured. Set RESEND_API_KEY and BETA_LEADS_EMAIL for email, or run on a server with a writable disk for a local log file.",
    },
    { status: 503 }
  );
}
