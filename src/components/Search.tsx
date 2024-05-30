import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Search = () => {
    return (
        <div className="w-3/5 flex border-2 
        border-[#F0E9ED] items-center gap-2 pl-5 duration-500 hover:border-black rounded-2xl h-16">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#B9AFB5", fontWeight: "bold"}} />
            <input type="text" placeholder="encontre um endereço" className="w-full h-full 
            placeholder:font-IBM placeholder:font-bold
            rounded-2xl outline-0"/>
        </div>
       
    )
}