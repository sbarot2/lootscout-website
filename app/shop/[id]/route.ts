import { redirect } from "next/navigation";

/**
 * Share links point at lootscout.io/shop/{id} so installed apps intercept them
 * (Android App Links + iOS Universal Links claim /shop/* on this host). Anyone
 * WITHOUT the app falls through to this route; send them to the public web app
 * page. 307 keeps crawlers from indexing a bare marketing-site 404.
 */
export function GET(_req: Request, { params }: { params: { id: string } }) {
  redirect(`https://app.lootscout.io/shop/${encodeURIComponent(params.id)}`);
}
