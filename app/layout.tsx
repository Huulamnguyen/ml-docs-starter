import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="ml-docs-v1" dismissible={false}>
    🚀 This document is being developed by{" "}
    <Link href="https://github.com/Huulamnguyen">LamPhD</Link> as part of an
    effort to build and support Machine Learning Community{" "}
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <>
        {
          <img
            src="/images/general/mldocs_icon.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        }
        <span
          style={{
            marginLeft: ".2em",
            fontWeight: 800,
            fontSize: "1.6em",
          }}
        >
          MLDocs
        </span>
      </>
    }
  />
);
const footer = (
  <Footer>Lam Nguyen PhD {new Date().getFullYear()} © NYIT.</Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/mldocs_icon.svg" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Huulamnguyen/ml-docs-starter/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
