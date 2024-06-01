import { z } from 'zod'

export const formSchema = z.object({
  cpf: z.string().min(11).max(11),
  password: z.string(),
})

export type FormSchema = z.infer<typeof formSchema>
