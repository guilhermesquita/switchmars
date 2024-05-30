import { ButtonAddres } from "../components/ButtonAddress"
import { Search } from "../components/Search"

export const Home = () => {
    return (
        <div className="w-full flex w-8/12 color-white pt-10">
            <section className="w-full flex flex-row gap-5 justify-between">
                <Search />
                <ButtonAddres/>
            </section>
        </div>
    )
}