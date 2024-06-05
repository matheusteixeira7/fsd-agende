import { cpf } from 'cpf-cnpj-validator'
import { FormSchema } from './model'
import axios from '@/shared/api/client'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export function useSignIn() {
    return useMutation({
        mutationFn: (payload: FormSchema) => {
            return axios.post('/login', {
                document: cpf.strip(payload.document),
                password: payload.password,
            })
        },

        onError(error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 401) return

                return toast.error(
                    'Houve um erro ao tentar acessar. Por favor, tente novamente mais tarde.',
                )
            }
        },
    })
}
