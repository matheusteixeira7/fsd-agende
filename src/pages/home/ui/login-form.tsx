import { AxiosError } from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { ReloadIcon } from '@radix-ui/react-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignIn } from '../api/action'
import { FormSchema, schema } from '../api/model'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FormErrorMessage } from '@/shared/ui/form-error-message'

export const LoginForm = () => {
    const { mutate, isPending, error } = useSignIn()
    const onSubmit = (data: FormSchema) => mutate(data)
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            document: '',
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
                    <Controller
                        control={control}
                        name="document"
                        render={({ field }) => {
                            return (
                                <Input
                                    type="text"
                                    placeholder="000.000.000-00"
                                    inputMode="numeric"
                                    pattern="[0-9.-]*"
                                    title="Apenas números e pontuação são permitidos"
                                    maxLength={14}
                                    className="bg-white md:bg-transparent"
                                    {...field}
                                    onChange={(e) =>
                                        field.onChange(
                                            e.target.value
                                                .replace(/\D/g, '')
                                                .replace(/(\d{3})(\d)/, '$1.$2')
                                                .replace(/(\d{3})(\d)/, '$1.$2')
                                                .replace(
                                                    /(\d{3})(\d{1,2})$/,
                                                    '$1-$2',
                                                ),
                                        )
                                    }
                                />
                            )
                        }}
                    />
                    {errors.document && (
                        <FormErrorMessage>
                            {errors.document.message}
                        </FormErrorMessage>
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
                    <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="********"
                        className="bg-white md:bg-transparent"
                        {...register('password')}
                    />
                    {errors.password && (
                        <FormErrorMessage>
                            {errors.password.message}
                        </FormErrorMessage>
                    )}
                    {error &&
                        (error as AxiosError).response?.status === 401 && (
                            <FormErrorMessage>
                                CPF ou senha incorreta. Tente novamente
                            </FormErrorMessage>
                        )}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                        <>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Entrando
                        </>
                    ) : (
                        'Entrar'
                    )}
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="w-full bg-white md:bg-transparent"
                >
                    <a
                        href="https://seja.vitta.com.br/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Cadastrar-se pelo aplicativo Vitta
                    </a>
                </Button>
            </div>
        </form>
    )
}
