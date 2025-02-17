import { useState } from "react";

type UseModalReturnType = [boolean, () => void, () => void];

export const useModal = (): UseModalReturnType => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return [isModalOpen, openModal, closeModal];
};
