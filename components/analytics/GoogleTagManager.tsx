import Script from "next/script";

/** Google Tag Manager container ID. Override via NEXT_PUBLIC_GTM_ID if needed. */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MDDMXJ9T";

/** Google Consent Mode v2 defaults - MUST run before GTM loads.
 *  Everything non-essential starts denied (UK GDPR/PECR); the cookie banner
 *  flips it to granted on accept. A returning visitor's prior choice is restored
 *  immediately so they aren't re-gated. */
export function ConsentModeDefault() {
  return (
    <Script id="consent-default" strategy="beforeInteractive">
      {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){dataLayer.push(arguments);};
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{if(localStorage.getItem('tp_consent')==='granted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}
gtag('set','url_passthrough',true);`}
    </Script>
  );
}

/** The GTM <script> - load as early as practical after hydration. */
export function GoogleTagManager() {
  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** The GTM <noscript> fallback - must sit immediately after the opening <body>. */
export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
