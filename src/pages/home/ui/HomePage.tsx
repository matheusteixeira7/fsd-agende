import { LoginContent } from './LoginContent'

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
                        <LoginContent />
                    </div>
                </div>
            </section>
        </div>
    )
}
