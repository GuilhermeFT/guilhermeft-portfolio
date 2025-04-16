'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ContactForm } from '@/components/contact-form'
import { ContactFormValues } from '@/lib/schema'

interface WhatsAppModalProps {
  whatsappNumber: string
}

export function WhatsAppModal({ whatsappNumber }: WhatsAppModalProps) {
  const handleSubmit = (data: ContactFormValues) => {
    // Format message for WhatsApp
    const message = encodeURIComponent(
      `Olá, meu nome é ${data.name}. Gostaria de mais informações sobre os serviços do Guilhermeft Studio.\n\nTelefone: ${data.phone}\nEmail: ${data.email}`,
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-medium text-white transition-colors hover:bg-green-700">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945l-1.688 6.163 6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0z" />
        </svg>
        Contato via WhatsApp
      </DialogTrigger>
      <DialogContent className="bg-g-background border-g-dark-gray text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">
            Contato via WhatsApp
          </DialogTitle>
          <DialogDescription className="text-g-light-gray">
            Preencha seus dados para prosseguir com o contato
          </DialogDescription>
        </DialogHeader>
        <ContactForm
          onSubmit={handleSubmit}
          submitButtonText="Prosseguir para WhatsApp"
          submitButtonClassName="bg-green-600 hover:bg-green-700"
        />
      </DialogContent>
    </Dialog>
  )
}
