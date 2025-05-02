import * as z from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
    .max(50, { message: 'Nome não pode ter mais de 50 caracteres' }),
  phone: z
    .string()
    .min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' })
    .max(15, { message: 'Telefone não pode ter mais de 15 dígitos' }),
  email: z
    .string()
    .email({ message: 'Email inválido' })
    .min(5, { message: 'Email deve ter pelo menos 5 caracteres' })
    .max(100, { message: 'Email não pode ter mais de 100 caracteres' }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
