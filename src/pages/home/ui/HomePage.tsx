import { UserForm } from './UserForm'

export const HomePage = () => {
  return (
    <div className="relative h-screen flex items-center bg-blue-500 md:bg-gray-200">
      <img
        alt="Background image"
        className="absolute hidden h-full w-full object-cover object-center md:block"
        src="/src/shared/assets/login-background-img.jpg"
      />

      <section className="z-50 md:ml-10">
        <img
          src="/src/shared/assets/vitta-logo-white.png"
          alt="Logo da Vitta"
          className="h-8 mb-6 hidden md:block"
        />
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-transparent md:bg-gray-200 px-6 py-12 md:shadow sm:rounded-lg sm:px-12">
            <h2 className="text-3xl font-medium leading-9 tracking-tight text-white md:text-blue-500">
              Que bom ter você conosco!
            </h2>
            <p className="text-white md:text-gray-600">
              Para começar, identifique-se com a sua conta de acesso utilizada
              no Aplicativo Vitta!
            </p>

            <UserForm />

            <div className="text-white md:text-gray-600">
              <p className="text-center block mt-5">Disponível para:</p>
              <img
                alt="Logomarca das empresas disponíveis"
                className="mx-auto mt-2"
                src="/src/shared/assets/empresas.png"
              />
              <p className="text-center block mt-2 text-sm">
                2024 - Vitta Tecnologia em Saúde S.A. - ANS 42259-2
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
