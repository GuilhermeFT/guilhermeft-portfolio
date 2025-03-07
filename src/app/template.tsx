import { FloatToggleMenu } from '@/components/float-toggle-menu'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { MobileNavbar } from '@/components/navbar/mobile-navbar'

type TemplateProps = {
  children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <FloatToggleMenu />
      <MobileNavbar />
      <Header />
      {children}
      <Footer />
    </>
  )
}
