import { useParams } from "react-router-dom"

export const EditPage = () => {
    const { id } = useParams()
    return(
        <h1>Edit Page. {id}</h1>
    )
}