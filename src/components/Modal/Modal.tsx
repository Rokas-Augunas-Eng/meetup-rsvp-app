import ReactModal from 'react-modal';

export type ModalProps = {
  isModalOpen: boolean;
  title: string;
  text: string;
  confirmButton: { text: string; onPrimaryAction: () => void };
  cancelButton: { text: string; onClose: () => void };
};

export const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  title,
  text,
  confirmButton,
  cancelButton,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={cancelButton.onClose}
      contentLabel="Unsaved Changes"
      ariaHideApp={false}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          width: '30%',
          position: 'initial',
          boxShadow:
            '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          borderRadius: ' 0.375rem',
        },
      }}
    >
      <div className="bg-white rounded p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{text}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={confirmButton.onPrimaryAction}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            {confirmButton.text}
          </button>
          <button
            onClick={cancelButton.onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            {cancelButton.text}
          </button>
        </div>
      </div>
    </ReactModal>
  );
};
