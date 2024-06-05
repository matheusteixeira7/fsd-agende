import { HomePage } from '@/pages/home'
import { FunctionComponent } from 'react'
import { Route, Routes } from 'react-router-dom'

export const Router: FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}
