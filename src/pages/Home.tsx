import React, { useEffect, useState } from "react";
import { Address } from "../components/Address";
import { ButtonAddress } from "../components/ButtonAddress";
import { NoReturn } from "../components/NoReturn";
import { Search } from "../components/Search";
import { Modal } from "../components/Modal";
import { useModal } from "../service/ModalService";

export type Data = {
    id: number;
    name: string;
    lotNumber: string;
    planet: string;
}[];

export const Home = () => {
    const [data, setData] = useState<Data | null>(null);
    const [isModalOpen, openModal, closeModal] = useModal();

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData) as Data);
        }
    }, []);

    return (
        <main className="flex w-4/6 color-white pt-10 flex-col gap-10 pb-5">
            <section className="w-full flex flex-row gap-5 justify-between">
                {/* <Search /> */}
                <ButtonAddress openModal={openModal} />
                <Modal isOpen={isModalOpen} closeModal={closeModal} />
            </section>
            {data ? (
                data.map((dat) => (
                    <Address key={dat.id} name={dat.name} lotNumber={dat.lotNumber} planet={dat.planet} id={dat.id}/>
                ))
            ) : (
                <section className="pt-20 text-center">
                    <NoReturn />
                </section>
            )}
        </main>
    );
};
