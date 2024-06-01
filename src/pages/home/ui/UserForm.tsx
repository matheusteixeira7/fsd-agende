import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { onSubmit } from '../api/action'
import { FormSchema, formSchema } from '../api/model'

export const UserForm = () => {
  const { register, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: '',
      password: '',
    },
  })

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="cpf"
          className="block text-sm font-medium leading-6 text-white md:text-gray-900 mt-6"
        >
          CPF
        </label>
        <div className="mt-2">
          <input
            id="cpf"
            type="string"
            required
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            {...register('cpf')}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white md:text-gray-900"
          >
            Senha
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            {...register('password')}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="transition-all mb-2 flex w-full justify-center rounded-md bg-emerald-500 md:bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-400 md:hover:bg-blue-500-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Entrar
        </button>

        <button
          type="submit"
          className="transition-all border-2 border-white md:border-blue-500 hover:border-transparent flex w-full justify-center rounded-md bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-white md:text-blue-500 hover:text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Cadastrar-se pelo aplicativo Vitta
        </button>
      </div>
    </form>
  )
}
