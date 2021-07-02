import { Modals } from '../../components/Modals'
import { useModalsContext } from '../../hooks/useModals';

export function ForgotPassword()
{

  const { isModalOpen, handleOpenModal, handleCloseModal} = useModalsContext();

  return (
    <>
      <h5 onClick={handleOpenModal}>Esqueceu a senha?</h5>
      <Modals isOpen={isModalOpen} onRequestClose={handleCloseModal}>

        <button onClick={handleCloseModal}>X</button>
        <h2>Modal</h2>

      </Modals>
    </>
  );
}