import {
    createContext,
    ReactNode,
    useContext,
    useState
} from 'react';

interface ModalsContextData {
    isModalOpen: boolean;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalsContext = createContext({} as ModalsContextData);

export function ModalProvider({ children }: ModalProviderProps) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <ModalsContext.Provider value={{ isModalOpen, handleOpenModal, handleCloseModal: handleCloseModal }}>
            {children}
        </ModalsContext.Provider>
    )

}


export function useModalsContext() {
    return useContext(ModalsContext);
}