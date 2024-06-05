import { FunctionComponent } from 'react'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router } from './providers/router-provider'
import { BrowserRouter } from 'react-router-dom'
const client = new QueryClient()

export const App: FunctionComponent = () => {
    return (
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <Router />
                <Toaster richColors />
            </BrowserRouter>
        </QueryClientProvider>
    )
}
