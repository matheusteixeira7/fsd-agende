import { Footer } from './Footer'
import { LoginForm } from './LoginForm'

export const LoginContent = () => {
    return (
        <>
            <h2 className="text-3xl font-medium leading-9 tracking-tight text-white md:text-blue-500">
                Que bom ter você conosco!
            </h2>

            <p className="text-white md:text-gray-600">
                Para começar, identifique-se com a sua conta de acesso utilizada
                no Aplicativo Vitta!
            </p>

            <LoginForm />
            <Footer />
        </>
    )
}
