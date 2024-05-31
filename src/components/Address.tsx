import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

interface Data {
    name: string,
    lotNumber: string,
    planet: string,
    id: number
  }

export const Address = (data: Data) => {
    return (
        <section className="w-full border-4 border-[#545153] h-48 rounded-2xl p-5 flex 
        flex-col gap-7">
            <article className="flex justify-between">
                <p className="font-IBM font-bold text-[#8C7E7E] text-xl">{data.planet}</p>
                <article className="flex gap-2">
                    <Link to={`/Edit/${data.id}`}>
                        <FontAwesomeIcon icon={faPen} style={{ color: "#000000", }} />
                    </Link>
                    <button>
                        <FontAwesomeIcon icon={faTrash} style={{ color: "#CB3131", }} />
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