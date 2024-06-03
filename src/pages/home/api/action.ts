import { cpf } from 'cpf-cnpj-validator'
import { FormSchema } from './model'
import axios from '@/shared/api/client'

export function onSubmit(payload: FormSchema) {
    return axios.post('/login', {
        document: cpf.strip(payload.document),
        password: payload.password,
    })
}
