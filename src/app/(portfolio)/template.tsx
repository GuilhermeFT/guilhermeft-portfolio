import { FloatToggleMenu } from '@/components/float-toggle-menu'
import { Footer } from './components/footer'
import { MobileNavbar } from '@/app/(portfolio)/components/navbar/mobile-navbar'

type TemplateProps = {
  children: React.ReactNode
}

export default function PortfolioTemplate({ children }: TemplateProps) {
  return (
    <>
      <FloatToggleMenu />
      <MobileNavbar />
      {children}
      <Footer />
    </>
  )
}
