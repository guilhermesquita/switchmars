import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

interface Data {
    name: string,
    lotNumber: string,
    planet: string,
    id: number
}

export const Address = (data: Data) => {
    const navigate = useNavigate()

    const changePage = () => {
        navigate(`/Edit/${data.id}/${data.name}/${data.planet}/${data.lotNumber}`)
    }

    const removeAddress = () => {
        let storedData = localStorage.getItem('data');
        if (storedData) {
            let jsonData = JSON.parse(storedData) as Data[];
            jsonData = jsonData.filter(item => item.id !== data.id);
            console.log(storedData)
            localStorage.setItem('data', JSON.stringify(jsonData));
            window.location.reload();
        }
    }

    return (
        <section className="w-full border-4 border-[#545153] h-48 rounded-2xl p-5 flex 
        flex-col gap-7">
            <article className="flex justify-between">
                <p className="font-IBM font-bold text-[#8C7E7E] text-xl">{data.planet}</p>
                <article className="flex gap-2">
                    <button onClick={changePage}>
                        <FontAwesomeIcon icon={faPen} style={{ color: "#000000", }} />
                    </button>
                    <button>
                        <FontAwesomeIcon onClick={removeAddress}
                            icon={faTrash} style={{ color: "#CB3131", }} />
                    </button>
                </article>
            </article>

            <article className="flex">
                <p className="font-IBM font-bold text-6xl">{data.name}<span className="text-xl
                text-[#8C7E7E]">
                    {data.lotNumber}
                </span></p>
            </article>
        </section>
    )
}