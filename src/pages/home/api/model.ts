import { z } from 'zod'

export const formSchema = z.object({
  document: z.string().min(11, 'CPF inválido').max(11),
  password: z.string().min(6, 'A senha precisa ter ao menos 6 caracteres'),
})

export type FormSchema = z.infer<typeof formSchema>
