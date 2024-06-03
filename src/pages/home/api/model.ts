import { z } from 'zod'
import { cpf } from 'cpf-cnpj-validator'

export const formSchema = z.object({
    document: z
        .string()
        .refine((document) => {
            return cpf.isValid(document)
        }, 'Por favor, insira um CPF válido')
        .transform((document) => {
            return cpf.format(document)
        }),
    password: z.string().min(8, 'A senha precisa ter ao menos 8 caracteres'),
})

export type FormSchema = z.infer<typeof formSchema>
