import * as React from 'react';
import Modal from '@mui/material/Modal';

import { BoxModal, ButtonAddToCart, SelectQuantity, TitleModal } from './styled';
import { useState } from 'react';



const ModalSelectQuantity = ({open, setOpen, choiceQuantity}) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <>
      
      <Modal
        open={open}
        onClose={() =>setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        
          <BoxModal>
            <TitleModal>
                Selecione a quantidade desejada
            </TitleModal>
            <SelectQuantity onChange={(e) => setQuantity(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>

            </SelectQuantity>
            <ButtonAddToCart onClick={() => choiceQuantity(Number(quantity))}>
                Adicionar ao carrinho
            </ButtonAddToCart>
          </BoxModal>
      </Modal>
    </>
  );
}
export default ModalSelectQuantity