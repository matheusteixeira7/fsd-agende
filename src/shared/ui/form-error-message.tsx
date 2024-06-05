import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

type FormErrorMessageProps = {
    children: React.ReactNode
}

export const FormErrorMessage = ({ children }: FormErrorMessageProps) => {
    return (
        <span className="text-yellow-400 md:text-red-500 mt-1 flex items-center gap-2">
            <ExclamationCircleIcon className="size-4" />
            {children}
        </span>
    )
}
