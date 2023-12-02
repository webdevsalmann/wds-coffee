import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { DataProvider } from "@/context/DataContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "wds-coffee",
  description: "Coffee Booking Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <DataProvider>
          <Header />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
