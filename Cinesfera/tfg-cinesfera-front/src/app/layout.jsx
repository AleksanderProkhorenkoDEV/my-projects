import ScrollTraker from "@/components/Header/parts"
import { Footer } from "@/components/Footer/index"
import { Header } from "@/components/Header/index"
import { montserrat } from "@/assets/Fonts"
import '../assets/styles/global_app.css'
import { Toaster } from "sonner"

export const metadata = {
  title: 'CineSfera',
  description: 'Page to watch trailers and movie and series releases',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ScrollTraker>
          <Header />
        </ScrollTraker>
        {children}
        <Footer />
        <Toaster
          richColors
          position={"bottom-left"}
          theme={"dark"}
          offset={"40px"}
          closeButton  />
      </body>
    </html>
  )
}