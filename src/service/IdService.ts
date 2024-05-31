import { useEffect, useState } from "react";

type UseIdReturnType = [number, () => void];

export const useIdService = (): UseIdReturnType => {
    const [idService, setIdService] = useState(() => {
        const savedId = localStorage.getItem('idService');
        return savedId ? parseInt(savedId, 10) : 1;
    });

    useEffect(() => {
        localStorage.setItem('idService', idService.toString());
    }, [idService]);

    function incrementId() {
        setIdService(prevIdService => {
            const newId = prevIdService + 1;
            localStorage.setItem('idService', newId.toString());
            return newId;
        });
    }


    return [idService, incrementId];
};