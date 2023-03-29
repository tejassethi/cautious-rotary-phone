import "./globals.css";
import NextNProgress from "nextjs-progressbar";
import { GoogleAnalytics } from "nextjs-google-analytics";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.googleAnalyticsID) {
      // Checks for GA ID and only turns on GA in production
      ReactGA.initialize(process.env.googleAnalyticsID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  });
  return (
    <>
      <NextNProgress
        color="#EB4899"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
