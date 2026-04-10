'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormValues } from '@/lib/schema'
import { toast } from 'sonner'

interface ContactFormProps {
  onSubmit: (data: ContactFormValues) => void
  submitButtonText: string
  submitButtonClassName?: string
}

export function ContactForm({
  onSubmit,
  submitButtonText,
  submitButtonClassName = 'bg-accent hover:bg-primary',
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  })

  const onFormSubmit = async (data: ContactFormValues) => {
    try {
      onSubmit(data)
      reset()
      toast.success('Mensagem enviada com sucesso')

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      toast.error('Erro ao enviar mensagem')
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-muted-foreground block text-sm font-medium"
        >
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          placeholder="Guilherme Trindade"
          {...register('name')}
          className="border-border bg-background focus:border-accent focus:ring-accent text-foreground w-full rounded-lg border p-3 focus:ring-1 focus:outline-none"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-muted-foreground block text-sm font-medium"
        >
          Telefone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(11) 99999-9999"
          {...register('phone')}
          className="border-border bg-background focus:border-accent focus:ring-accent text-foreground w-full rounded-lg border p-3 focus:ring-1 focus:outline-none"
          onChange={(e) => {
            let value = e.target.value

            value = value.replace(/\D/g, '')

            value = value.slice(0, 11)

            if (value.length >= 11) {
              value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
            } else if (value.length >= 7) {
              value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
            } else if (value.length >= 2) {
              value = `(${value.slice(0, 2)}) ${value.slice(2)}`
            }

            e.target.value = value
          }}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-muted-foreground block text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          {...register('email')}
          className="border-border bg-background focus:border-accent focus:ring-accent text-foreground w-full rounded-lg border p-3 focus:ring-1 focus:outline-none"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-lg py-3 font-medium text-white transition-colors disabled:opacity-70 ${submitButtonClassName}`}
        >
          {isSubmitting ? 'Enviando...' : submitButtonText}
        </button>
      </div>
    </form>
  )
}
