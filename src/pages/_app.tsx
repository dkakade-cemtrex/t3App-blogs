import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/layout";

import '../../public/css/animate.css';
import '../../public/css/bootstrap.css';
import '../../public/css/flexslider.css';
import '../../public/css/icomoon.css';
import '../../public/css/magnific-popup.css';
import '../../public/css/style.css';

// import '../../public/js/jquery.min.js';
// import '../../public/js/main.js';
// import '../../public/js/bootstrap.min.js';
// import '../../public/js/jquery.easing.1.3.js';
// import '../../public/js/jquery.flexslider-min.js';
// import '../../public/js/jquery.magnific-popup.min.js';
// import '../../public/js/jquery.waypoints.min.js';
// import '../../public/js/magnific-popup-options.js';
// import '../../public/js/modernizr-2.6.2.min.js';
// import '../../public/js/respond.min.js';


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
