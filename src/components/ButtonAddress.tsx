export const ButtonAddress = ({ openModal }: { openModal: () => void }) => {
    const handleOpenModal = (): void => {
        openModal();
    };

    return (
        <button className="w-2/6 flex border-4 
        hover:border-[#F0E9ED] hover:text-white text-black hover:bg-black
        items-center gap-2 duration-500 font-IBM font-bold 
        border-black rounded-2xl h-16 justify-center"
        onClick={handleOpenModal}
        >
            adicionar um endereço
        </button>
    );
};
