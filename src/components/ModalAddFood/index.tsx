import { useRef } from 'react';
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

interface modalAddFoodProps {
  handleAddFood: (data: foodProps) => Promise<void>;
  setIsOpen: () => void;
  isOpen: boolean;
}

const ModalAddFood = ({ handleAddFood, setIsOpen, isOpen }: modalAddFoodProps) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = async (data: foodProps) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />
        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />
        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;