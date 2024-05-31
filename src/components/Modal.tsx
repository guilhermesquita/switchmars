import React from 'react';

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
    if (isOpen) {
        return (
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-bgModal z-[10]">
                <div className="fixed top-2/4 left-2/4" style={{ transform: 'translate(-50%, -50%)' }}>
                    <section className="bg-[#FFFFFF] flex flex-col w-[32rem] p-5 gap-5">
                        <h3 className="font-IBM font-bold text-4xl">Adicionar Endereço</h3>
                        <form className="flex flex-col w-full justify-center items-center gap-5">
                            <input type="text" placeholder="nome da estação" className="w-full h-12 placeholder:font-IBM placeholder:font-bold rounded-2xl outline-0 border-2 items-center gap-2 pl-5 duration-500 border-black h-16" />
                            <article className="w-full flex justify-between items-center gap-10">
                                <input type="text" placeholder="Lote de 4 dígitos" className="outline-0 w-3/5 border-b-2 border-black" />
                                <select className="bg-[#D9D9D9] w-2/5 h-10 rounded-xl text-center text-3xl font-IBM font-bold">
                                    <option className="text-xl font-IBM font-bold">Terra</option>
                                    <option className="text-xl font-IBM font-bold">Marte</option>
                                </select>
                            </article>
                            <article className="flex gap-5">
                                <button className="font-IBM font-bold text-xl hover:text-[#484040] text-[#141212]">avançar</button>
                                <button type="button" onClick={closeModal} className="font-IBM font-bold text-xl text-[#656161]">cancelar</button>
                            </article>
                        </form>
                    </section>
                </div>
            </div>
        );
    }
    return null;
};
