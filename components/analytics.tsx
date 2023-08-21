import Script from "next/script";

function Analytics() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-3KR3VSHNZ1" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3KR3VSHNZ1');
        `}
      </Script>
    </div>
  );
}

export default Analytics;
