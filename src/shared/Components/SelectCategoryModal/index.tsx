import { Modal } from "flowbite-react";

function SelectCategoryModal({
  openModal,
  setOpenModal,
  title,
  children,
}: {
  openModal: boolean;
  setOpenModal: any;
  title: string;
  children: any;
}) {
  return (
    <Modal
      size="3xl"
      show={openModal}
      onClose={() => {
        setOpenModal(!openModal);
      }}
    >
      <Modal.Header>
        <>{title}</>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/*     <Modal.Footer>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className={
            "ml-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
        >
          Select
        </button>
      </Modal.Footer>*/}
    </Modal>
  );
}
export default SelectCategoryModal;
