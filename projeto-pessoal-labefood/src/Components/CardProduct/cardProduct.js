import { useState } from "react"
import { useGlobal } from "../../Context/Global/globalStateContext"
import ModalSelectQuantity from "../ModalSelectQuantity/modalSelectQuantity"
import { ButtonAddToCart } from "../ModalSelectQuantity/styled"
import { 
        BoxInform,
        BoxInformPriceButton,
        BoxNameQuantity,
        ContainerCardProduct,
        ImageProduct,
        InformAddItemButton,
        InformButton,
        InformDescription,
        InformPrice,
        InformRemoveItemButton,
        NameProduct, 
        QuantityProduct} 
    from "./styled"

 
const CardProduct = ({product, restaurant }) => {
    const [showModal, setShowModal] = useState(false)
    const {requests, states } = useGlobal()
    const { addToCart, removeToCart } = requests
    const { cart } = states

    const choiceQuantity = (quantity) => {
        addToCart(product, quantity, restaurant)
        setShowModal(false)
    }

    const productInCart = cart.find((productCart) => productCart.id === productCart.id)
    
    return <ContainerCardProduct>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
            { productInCart && <QuantityProduct>{productInCart.quantity}</QuantityProduct>}
            </BoxNameQuantity>
            <InformDescription>
                {product.description}
            </InformDescription>
            <BoxInformPriceButton>
                <InformPrice>
                    {product.price}
                </InformPrice>
            {    productInCart ?
                <InformRemoveItemButton onClick={() =>removeToCart(product.id)}>
                    Remover
                </InformRemoveItemButton>
                :
            <InformAddItemButton onClick={() =>setShowModal(true)}>
                    Adicionar
                </InformAddItemButton>}
            </BoxInformPriceButton>

            <ModalSelectQuantity choiceQuantity={choiceQuantity} 
            open={showModal} 
            setOpen={setShowModal}/>
        </BoxInform>
    </ContainerCardProduct>
}
export default CardProduct