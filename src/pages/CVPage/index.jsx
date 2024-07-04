// @packages
import { useState } from 'react';

// @app
import { Modal } from '../../components';
import { CVView } from '../../views';


// @own
import './styles.scss';

const CVPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='cv-page'>
      <header className='header'>
        <div className='container'>
          <h1 className='header-title'>Claro Video</h1>
        </div>
      </header>

      <main className='main'>
        <div className='container'>
          <button className='show-epg' onClick={handleOpenModal}>Mostrar EPG</button>
        </div>
      </main>

      <Modal show={openModal} onClose={handleCloseModal}>
        <CVView />
      </Modal>
    </div>
  );
}

export default CVPage;
