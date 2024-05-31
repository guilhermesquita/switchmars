import {Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home"
import { ErrorPage } from "../pages/ErrorPage"

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            {/* <Route path="/blbba" element={<Home />} /> */}
        </Routes>
    )
}