import { Button } from "@mui/material";
import React, {useState} from "react";
import CardCart from '../../Components/CardCart/cardCart'
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import { CartConfig, Main, MainCart, InfoProfile, CartInfo, Payment, InfoRestaurant, EmptyCart, Freight, Total, Form, Header } from "./styled";

const Cart = () => {


    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPayment] = useState([])
    const [paymentMethod, setPaymentMethod] = useState({
        'money': false,
        'creditcard':false
    })

    const mockData = [
        {
        name:'Stencil',
        price:40,
        photoUrl:'https://i.pinimg.com/474x/bc/db/d1/bcdbd1fcd7c6710dd5651b023ed72195.jpg',
        amount:2,
        description:'Pão,carne, queijo, Cebola roxa, alface e molho'
    },
    {
        name:'Other Thing',
        price:10,
        photoUrl:'https://i.pinimg.com/474x/bc/db/d1/bcdbd1fcd7c6710dd5651b023ed72195.jpg',
        amount:10,
        description:'Outras coisas'
    }
    ]


    const onChangePayment = (event) => {
        const newCheck = {...paymentMethod}
        newCheck[event.target.name] = event.target.checked

        const result = Object.keys(newCheck).filter((pay) => {
            if(newCheck[pay]) {
                return [pay, ...payment]
            }
    })
    setPayment(result)
    setPaymentMethod(newCheck)
}
    
    console.log(payment);



    return(
        <Main>
            {/* <MainCart>
                    <p>Meu carrinho</p>
            </MainCart> */}
            <Header title={'Meu carrinho'} back />
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
                <InfoRestaurant>
                    <p>Nome do restaurante</p>
                    <p>Rua do restaurante</p>
                    <p> 30 - 45 min</p>
                </InfoRestaurant>
                <CartInfo>
                    {mockData.length > 0 ? mockData.map((data) => {
                        return(
                            <CardCart
                            name={data.name}
                            price={data.price}
                            photoUrl={data.photoUrl}
                            amount={data.amount}
                            description={data.description}
                            />
                        )
                    }) : <EmptyCart>Carrinho Vazio</EmptyCart>}
                </CartInfo>
                <Payment>
                    <Freight> Frete {new Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                        }).format(6)}</Freight>
                        <Total>
                            <p>SUBTOTAL</p>
                            <p>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(10)}</p>
                        </Total>
                        <h1>Forma de pagamento</h1>
                        <hr />
                        <Form>
                            {Object.keys(paymentMethod).map ((key) =>{
                                const checked = paymentMethod[key]
                                return(
                                    <div key={key}>
                                        <input  
                                            checked={checked}
                                            name={key}
                                            id={key}
                                            type={'checkbox'}
                                            onChange={onChangePayment}
                                        />
                                        <label>{key}</label>
                                    </div>
                                )
                            })}
                            <Button>Confirmar</Button>
                        </Form>
                </Payment>
            </CartConfig>
        </Main>
              
    )
}
export default Cart