import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

interface FormData {
    id: number;
    name: string;
    planet: string;
    lotNumber: string;
}

export const EditPage = () => {
    const navigate = useNavigate();
    const { id, name, planet, lotNumber } = useParams<{ id: string; name: string; planet: string; lotNumber: string }>();
    const { register, handleSubmit } = useForm<FormData>({
        defaultValues: { name, planet, lotNumber }
    });

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        const storedData: FormData[] = JSON.parse(localStorage.getItem('data') || '[]');
        const updatedData = storedData.map(d =>
            d.id === Number(id) ? { ...d, ...formData } : d
        );
        localStorage.setItem('data', JSON.stringify(updatedData));
        navigate('/');
    };

    return (
        <main className="w-full flex flex-col items-center">
            <article className="flex gap-2 w-full p-10 items-center">
                <Link to='/' className="w-16 h-12 rounded-lg border-2 border-[#BEBEBE] flex
                justify-center items-center">
                    <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#000000", height: '30px' }} />
                </Link>
                <h1 className="text-3xl font-IBM font-bold">Editar endereço</h1>
            </article>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full justify-center items-center gap-5 w-2/4">
                <article className="w-full">
                    <label className="font-IBM font-bold text-3xl">nome</label>
                    <input type="text" placeholder="nome da estação"
                        {...register("name", { required: true })}
                        className="w-full h-12 placeholder:font-IBM placeholder:font-bold rounded-2xl outline-0 border-2 items-center gap-2 pl-5 duration-500 border-black h-16"
                    />
                </article>
                <article className="w-full flex justify-between items-center gap-10">
                    <article className="flex flex-col w-full gap-2">
                        <label className="font-IBM font-bold text-3xl">Lote</label>
                        <input type="text" placeholder="Lote de 4 dígitos"
                            className="outline-0 w-3/5 border-b-2 border-black"
                            {...register("lotNumber")}
                        />
                    </article>
                    <article className="w-full pt-10">
                        <label className="font-IBM font-bold text-3xl">Planeta</label>
                        <select
                            {...register("planet")}
                            className="bg-[#D9D9D9] w-full h-10 rounded-xl text-center text-3xl font-IBM font-bold">
                            <option className="text-xl font-IBM font-bold"
                                value={planet}
                            >{planet}</option>
                            <option className="text-xl font-IBM font-bold"
                                value={planet === "Terra" ? "Marte" : "Terra"}
                            >{planet === "Terra" ? "Marte" : "Terra"}</option>
                        </select>
                    </article>
                </article>
                <article className="flex gap-5">
                    <button type="submit" className="font-IBM font-bold text-xl hover:text-[#484040] text-[#141212]">
                        avançar
                    </button>
                </article>
            </form>
        </main>
    )
}
