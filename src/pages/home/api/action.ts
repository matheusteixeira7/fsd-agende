import { FormSchema } from './model'
import axios from '@/shared/api/client'

export function onSubmit(values: FormSchema) {
  return axios.post('/login', {
    ...values,
  })
}
