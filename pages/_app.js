import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import '@/styles/globals.css'

import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>);
}
