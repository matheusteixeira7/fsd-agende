import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { onSubmit } from '../api/action'
import { FormSchema, formSchema } from '../api/model'
import { Button } from '@/shared/ui/button'

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
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
                        type="number"
                        maxLength={14}
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        {...register('document')}
                    />
                    {errors.document && (
                        <span className="text-white md:text-red-500 mt-0.5 block">
                            {errors.document.message}
                        </span>
                    )}
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
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                        {...register('password')}
                    />
                    {errors.password && (
                        <span className="text-white md:text-red-500 mt-0.5 block">
                            {errors.password.message}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full">
                    Entrar
                </Button>
                <Button type="button" variant="outline" className="w-full">
                    Cadastrar-se pelo aplicativo Vitta
                </Button>
                {/* <button
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
                </button> */}
            </div>
        </form>
    )
}
