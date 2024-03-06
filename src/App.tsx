import "./App.css";
import Card from "./Card";
import CardHeader from "./CardHeader";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useModal,
  ModalContent,
  ModalOverlay,
  Button,
} from "./core/uikit";

function App() {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <div className="App">
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay onClose={onClose} />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <p>İçerik</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Tamam</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Card>
        <CardHeader>Card Başlık</CardHeader>

        <figure>
          <img
            src="https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek-724x394.webp"
            width={100}
            alt=""
          />
        </figure>

        <figcaption>Lorem ipsum dolor, sit amet consectetur</figcaption>
      </Card>
    </div>
  );
}

export default App;
