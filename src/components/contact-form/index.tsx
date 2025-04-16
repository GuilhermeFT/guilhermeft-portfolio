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
  submitButtonClassName = 'bg-g-blue hover:bg-g-dark-blue',
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
          className="text-g-light-gray block text-sm font-medium"
        >
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="border-g-dark-gray bg-g-background/50 focus:border-g-blue focus:ring-g-blue w-full rounded-lg border p-3 text-white focus:ring-1 focus:outline-none"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-g-light-gray block text-sm font-medium"
        >
          Telefone
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="border-g-dark-gray bg-g-background/50 focus:border-g-blue focus:ring-g-blue w-full rounded-lg border p-3 text-white focus:ring-1 focus:outline-none"
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-g-light-gray block text-sm font-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="border-g-dark-gray bg-g-background/50 focus:border-g-blue focus:ring-g-blue w-full rounded-lg border p-3 text-white focus:ring-1 focus:outline-none"
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
