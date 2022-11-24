import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Header from '../components/header'

const progress = new ProgressBar({
  size: 2,
  color: "#652e87",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function PortfolioApp({ Component, pageProps }) {
  return (<>
    <Header/>
    <Component {...pageProps} />
  </>)
}

export default PortfolioApp
