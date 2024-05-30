import { useEffect, useState } from "react"
import { Address } from "../components/Address"
import { ButtonAddres } from "../components/ButtonAddress"
import { NoReturn } from "../components/NoReturn"
import { Search } from "../components/Search"


type Data = [
    {
        name: string,
        lotNumber: string,
        planet: string
    }
]

export const Home = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData) as Data);
        }
    }, []);
    return (
        <main className="flex w-4/6 color-white pt-10 flex-col gap-10 pb-5">
            <section className="w-full flex flex-row gap-5 justify-between">
                <Search />
                <ButtonAddres />
            </section>
            {
                data ? data.map(dat =>

                    <Address name={dat.name} lotNumber={dat.lotNumber} planet={dat.planet} />

                )
                    :
                    <section className="pt-20 text-center">
                        <NoReturn />
                    </section>
            }
        </main>
    )
}