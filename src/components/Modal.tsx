import { useForm } from "react-hook-form";
import { useIdService } from "../service/IdService";

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
    const { register, handleSubmit } = useForm()
    const [serviceId, incrementId] = useIdService();

    const onSubmit = (data: any) => {
        incrementId()
        if (!localStorage.getItem('data')) {
            const newData = [{
                id: serviceId,
                ...data
            }];            
            const jsonData = JSON.stringify(newData);
            localStorage.setItem('data', jsonData);
        }else{
            const newData = {
                id: serviceId,
                ...data
            };            
            let storedData = localStorage.getItem('data') || '[]';
            const localData = JSON.parse(storedData);
            localData.push(newData);
            localStorage.setItem('data', JSON.stringify(localData));
        }
    };



    if (isOpen) {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-bgModal z-[10]">
                <div className="fixed top-2/4 left-2/4" style={{ transform: 'translate(-50%, -50%)' }}>
                    <section className="bg-[#FFFFFF] flex flex-col w-[32rem] p-5 gap-5">
                        <h3 className="font-IBM font-bold text-4xl">Adicionar Endereço</h3>
                        <form
                            className="flex flex-col w-full justify-center items-center gap-5">

                            <input type="text" placeholder="nome da estação"
                                {...register("name", { required: true })}
                                className="w-full h-12 placeholder:font-IBM placeholder:font-bold rounded-2xl outline-0 border-2 items-center gap-2 pl-5 duration-500 ${
                                border-black h-16"/>

                            <article className="w-full flex justify-between items-center gap-10">
                                <input type="text" placeholder="Lote de 4 dígitos"
                                    className="outline-0 w-3/5 border-b-2 border-black"
                                    {...register("lotNumber")}
                                />
                                <select
                                    {...register("planet")}
                                    className="bg-[#D9D9D9] w-2/5 h-10 rounded-xl text-center text-3xl font-IBM font-bold">
                                    <option className="text-xl font-IBM font-bold"
                                        value="Terra"
                                    >Terra</option>
                                    <option className="text-xl font-IBM font-bold"
                                        value="Marte"
                                    >Marte</option>
                                </select>
                            </article>
                            <article className="flex gap-5">
                                <button className="font-IBM font-bold text-xl hover:text-[#484040] text-[#141212]"
                                    onClick={() => handleSubmit(onSubmit)()}
                                >avançar</button>
                                <button type="button"
                                    onClick={closeModal} className="font-IBM font-bold text-xl text-[#656161]">cancelar</button>
                            </article>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
    return null;
};
