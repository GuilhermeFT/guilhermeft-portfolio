import { Images } from './images'

export const navLinks = [
  {
    href: '/',
    label: 'Início',
  },
  {
    href: '/#all-projects',
    label: 'Projetos',
  },
  {
    href: '/#about-me',
    label: 'Sobre mim',
  },
  {
    href: '/articles',
    label: 'Blog',
  },
]

export const companies = [
  {
    logo: Images.SinalizeWebLogo,
    alt: 'Logo da Sinalize Web',
    url: 'https://sinalizeweb.com.br/',
    className:
      'h-12 w-auto grayscale transition-all ease-in hover:grayscale-0 hover:scale-105',
  },
  {
    logo: Images.IpaLogo,
    alt: 'Logo da Igreja Presbiteriana de Anápolis',
    url: 'https://ipbanapolis.org.br/',
    className:
      'h-12 w-auto grayscale transition-all ease-in brightness-75 hover:grayscale-0 hover:brightness-100 hover:scale-105',
  },
  {
    logo: Images.FuerzaLogo,
    alt: 'Logo da Fuerza Studio',
    url: 'https://fuerzastudio.com.br/',
    className:
      'h-12 w-auto grayscale transition-all ease-in hover:grayscale-0 hover:scale-105',
  },
  {
    logo: Images.MwvLogo,
    alt: 'Logo da MWV',
    url: 'https://www.grupomwv.com.br/',
    className:
      'h-17 w-auto grayscale transition-all ease-in hover:grayscale-0 hover:scale-105',
  },
]
