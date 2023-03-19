import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import "@/styles/globals.css";
import { StoreProvider } from "@/Utils/Store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <Header />
        <Component {...pageProps} />
      </StoreProvider>
      <Footer />
    </>
  );
}
