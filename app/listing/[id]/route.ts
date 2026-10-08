import { redirect } from "next/navigation";

/** Same contract as /shop/[id]/route.ts — see the note there. */
export function GET(_req: Request, { params }: { params: { id: string } }) {
  redirect(`https://app.lootscout.io/listing/${encodeURIComponent(params.id)}`);
}
