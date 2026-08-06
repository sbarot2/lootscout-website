import Script from "next/script";

/**
 * Meta advertising pixel.
 *
 * ENV-GATED ON PURPOSE. Renders nothing unless `NEXT_PUBLIC_META_PIXEL_ID` is
 * set in the Vercel project, so this code can ship before the dataset exists —
 * and so the pixel can be switched off again by clearing one variable rather
 * than by a revert.
 *
 * ⚠️ DO NOT SET THAT VARIABLE UNTIL THE AMENDED PRIVACY POLICY IS DEPLOYED.
 * The policy previously stated in bold that we do not share personal
 * information for cross-context behavioral advertising. A Meta pixel is
 * exactly that, so switching this on ahead of the policy would make a
 * published privacy statement false. The amendment ships in the same commit as
 * this file; the env var is the deliberate last step.
 *
 * Getting the ID: Ads Manager → hamburger → Events Manager → Connect data →
 * Web → name the dataset → copy the dataset ID (a long number). Verify with
 * the Meta Pixel Helper Chrome extension once deployed.
 *
 * `afterInteractive` rather than `beforeInteractive`: the pixel is not needed
 * for first paint and must never block it.
 */
export function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');
        `}
      </Script>
      {/*
        <noscript> fallback so a JS-disabled visit is still counted. Next's
        Image component would rewrite this, so it is a plain <img>.
      */}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
