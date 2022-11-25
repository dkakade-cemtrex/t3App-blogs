import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                {/* <meta charset="utf-8"/> */}
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Paper blogs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
                <meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
                <meta name="author" content="freehtml5.co" />

                <meta property="og:title" content="" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="" />
                <meta property="og:description" content="" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:url" content="" />
                <meta name="twitter:card" content="" />

                <script src="../../public/modernizr-2.6.2.min.js" async></script>

                <script src="../../public/respond.min.js" async></script>

            </Head>
            <body>
                <Main />
                <NextScript />
                <script src="../../public/js/jquery.min.js" async></script>
                <script src="../../public/js/jquery.easing.1.3.js" async></script>
                <script src="../../public/js/bootstrap.min.js" async></script>
                <script src="../../public/js/jquery.waypoints.min.js" async></script>
                <script src="../../public/js/jquery.flexslider-min.js" async></script>
                <script src="../../public/js/jquery.magnific-popup.min.js" async></script>
                <script src="../../public/js/magnific-popup-options.js" async></script>
                <script src="../../public/js/main.js" async></script>
            </body>
        </Html>
    )
}