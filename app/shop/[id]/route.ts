import { redirect } from "next/navigation";

/**
 * Share links point at lootscout.io/shop/{id} so installed apps intercept them
 * (Android App Links + iOS Universal Links claim /shop/* on this host). Anyone
 * WITHOUT the app falls through to this route; send them to the public web app
 * page. 307 keeps crawlers from indexing a bare marketing-site 404.
 *
 * The query string is forwarded VERBATIM. Nothing on /shop/* needs it today,
 * but dropping it silently is what broke /listing/* (its printed QR codes carry
 * `shopId` + `source=qr`), so both routes preserve it by default.
 */
export function GET(req: Request, { params }: { params: { id: string } }) {
  const { search } = new URL(req.url);
  redirect(`https://app.lootscout.io/shop/${encodeURIComponent(params.id)}${search}`);
}
