import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="font-latoBold relative h-screen overflow-hidden py-20 px-12 lg:px-25">
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
