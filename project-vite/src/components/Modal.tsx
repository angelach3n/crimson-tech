import { useState } from 'react';
import { createPortal } from 'react-dom';

// Get the root element for the modal
const modalRoot = document.getElementById('modal');

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed

  // State to track the modal's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal's open/closed status
  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {
        // TODO: handle button click to change state
      }
      <button onClick={toggleModal}>Click Me!</button>

      {
        // TODO: conditionally show this based on open state
      }
      {isOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            height: '20rem',
            width: '20rem',
            border: '1px solid',
            padding: '1rem',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Modal content
          <button onClick={toggleModal}>Close</button>
        </div>,
        modalRoot as Element,
      )}
    </>
  );
}
