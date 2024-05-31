import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { ErrorPage } from "../pages/ErrorPage"
import { EditPage } from "../pages/EditPage"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Edit/:id/:name/:planet/:lotNumber" element={<EditPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}