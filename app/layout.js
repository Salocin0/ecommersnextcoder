import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { MyProvider } from "./Componentes/UseContext";
import Head from "next/head"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Ecommerce with Next.js coder',
  description: 'Un Ecommerce hecho con Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', "eccomerce"],
  image: "/logo.jpeg",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <link rel="icon" href={metadata.icons.icon} sizes="32x32" />
      </Head>
      <body className="flex flex-col h-screen vsc-initialized">
        <MyProvider>
          <Header />
          <main className="flex-grow">
            <div className="container mx-auto">{children}</div>
          </main>
          <Footer />
        </MyProvider>
      </body>
    </>
  );
}
