import { FC, useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface foodProps {
  id: number;
  name: string;
  description: string;
  price: string | number;
  available: boolean;
  image: string
}

interface modalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: foodProps | undefined;
  handleUpdateFood: (data: foodProps) => Promise<void>
}

const ModalEditFood: FC<modalEditFoodProps> = ({ isOpen, setIsOpen, editingFood, handleUpdateFood }) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: foodProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
