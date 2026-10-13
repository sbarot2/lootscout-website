import { redirect } from "next/navigation";

/**
 * Same contract as /shop/[id]/route.ts — see the note there.
 *
 * THE QUERY STRING IS LOAD-BEARING HERE. Printed listing QR codes encode
 * `https://lootscout.io/listing/{id}?shopId={uuid}&source=qr`, and the app
 * gates its pickup-cart chrome on exactly those two params. A visitor WITH the
 * app never reaches this route (the App Link / Universal Link claim hands the
 * URL straight to the app, params intact); a visitor WITHOUT it lands here, so
 * forwarding the search string verbatim is what keeps the two paths equivalent.
 */
export function GET(req: Request, { params }: { params: { id: string } }) {
  const { search } = new URL(req.url);
  redirect(`https://app.lootscout.io/listing/${encodeURIComponent(params.id)}${search}`);
}
