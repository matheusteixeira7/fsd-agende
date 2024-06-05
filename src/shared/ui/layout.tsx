type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex md:items-center bg-white md:bg-gray-200 md:h-screen">
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
                    <div className="bg-blue-500 md:bg-white rounded-b-[40px] px-6 py-12 md:shadow md:rounded-lg sm:px-12">
                        <img
                            src="/src/shared/assets/vitta-logo-white.png"
                            alt="Logo da Vitta"
                            className="h-8 mb-6 block md:hidden"
                        />
                        {children}
                    </div>
                </div>

                <p className="block md:hidden text-center mt-2 text-sm">
                    2024 - Vitta Tecnologia em Saúde S.A. - ANS 42259-2
                </p>
            </section>
        </div>
    )
}
