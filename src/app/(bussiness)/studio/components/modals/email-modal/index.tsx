'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ContactForm } from '@/app/(bussiness)/studio/components/contact-form'
import { ContactFormValues } from '@/lib/schema'

interface EmailModalProps {
  emailAddress: string
}

export function EmailModal({ emailAddress }: EmailModalProps) {
  const handleSubmit = (data: ContactFormValues) => {
    // Format message for Email
    const subject = encodeURIComponent('Contato via site - GTDEV')
    const body = encodeURIComponent(
      `Olá,\n\nMeu nome é ${data.name}.\nGostaria de mais informações sobre os serviços do GTDEV.\n\nTelefone: ${data.phone}\nEmail: ${data.email}\n\nAguardo retorno.`,
    )
    window.open(
      `mailto:${emailAddress}?subject=${subject}&body=${body}`,
      '_blank',
    )
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-g-blue hover:bg-g-dark-blue flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-white transition-colors">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        Contato via Email
      </DialogTrigger>
      <DialogContent className="bg-g-background border-g-dark-gray text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Contato via Email
          </DialogTitle>
          <DialogDescription className="text-g-light-gray">
            Preencha seus dados para prosseguir com o contato
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          onSubmit={handleSubmit}
          submitButtonText="Prosseguir para Email"
          submitButtonClassName="bg-g-blue hover:bg-g-dark-blue"
        />
      </DialogContent>
    </Dialog>
  )
}
