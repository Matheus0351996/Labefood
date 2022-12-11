import React, { useState } from "react";
import { ButtonStyled, Header, InputMaterial, Main } from "./styled";
import useForm from '../../Hooks/useForm'
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";


const SignUpAdress = () => {
    const [logradouro, setLogradouro] =useState('');


    const navigate = useNavigate()

    const { form, onChange, cleanFields} = useForm ({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": "",
        "state": "",
        "complement": ""
    })

    const onSubmitFormAdress = (event) => {
        event.preventDefault()
        addAdress()
        goToFeed(navigate)
    }



    const addAdress = async () =>{
        const token = localStorage.getItem('token')
        console.log(form);
        await axios.put(`${BASE_URL}/address`,form,{
            headers:{
            auth:token
            }
        })
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }


    return(
        <Main>
            <Header back />
            <p>Meu Endereço</p>
            <form onSubmit={onSubmitFormAdress}>
            <InputMaterial 
                id="outlined-basic"
                name='street'
                type={'text'}
                value = {form.street}
                variant="outlined" 
                placeholder={'Rua/Av'}
                onChange={onChange}
                required
            />
            <InputMaterial 
                id="outlined-basic"
                label={"Numero"}
                name='number'
                type={'number'}
                value = {form.number}
                variant="outlined" 
                placeholder={'Número'}
                onChange={onChange}
                required
            />
            <InputMaterial 
                id="outlined-basic"
                label={"Complemento"}
                name='complement'
                type={'text'}
                value = {form.complement}
                variant="outlined" 
                placeholder={'Apto/Bloco'}
                onChange={onChange}
            />
    
            <InputMaterial 
                id="outlined-basic"
                label={"Bairro"}
                name='neighbourhood'
                type={'text'}
                value = {form.neighbourhood}
                variant="outlined" 
                placeholder={'Bairro'}
                onChange={onChange}
                required
            />
            <InputMaterial 
                id="outlined-basic"
                label={"Cidade"}
                name='city'
                type={'text'}
                value = {form.city}
                variant="outlined" 
                placeholder={'Cidade'}
                onChange={onChange}
                required
            />
            <InputMaterial 
                id="outlined-basic"
                label={"Estado"}
                name='state'
                type={'text'}
                value = {form.state}
                variant="outlined" 
                placeholder={'Estado'}
                onChange={onChange}
                required
            />
              <ButtonStyled type="submit">Entrar</ButtonStyled>
            </form>

        </Main>
    )
}
export default SignUpAdress