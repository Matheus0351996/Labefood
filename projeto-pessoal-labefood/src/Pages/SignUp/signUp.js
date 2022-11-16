import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import {DivPassword, Form, InputMaterial, Main} from './styled'
import  IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);


    

    const {form,onChange,cleanFields} = useForm({
        
            "name": "",
            "email": "",
            "cpf": "",
            "password": ""
        
    })

    
    const cpfMask = (value) => {
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
        cleanFields()
    }

    return(
        <Main>
            <p>Cadastrar</p>
            <Form onSubmit={onSubmitForm}>
            <InputMaterial 
            id="outlined-basic"
            label={"Nome"}
            name={"name"}
            type={"text"}
            placeholder={"Digite seu nome"}
            variant="outlined"
            value={form.name}
            onChange={onChange}
            required
            />
            <InputMaterial 
            id="outlined-basic"
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Digite seu email"}
            variant="outlined"
            value={form.email}
            onChange={onChange}
            required
            />

            <InputMaterial 
            id="outlined-basic"
            label={"Cpf"}
            name={"cpf"}
            type={"text"}
            placeholder={"Digite seu cpf"}
            variant="outlined"
            value={cpfMask(form.cpf)}
            onChange={onChange}
            required
            />

            <DivPassword>
            <InputMaterial 
            id="outlined-basic"
            label={"Senha"}
            name={"password"}
            type={showPassword ? 'password' : 'text'}
            placeholder={"Digite a sua senha"}
            variant="outlined"
            value={form.password}
            onChange={onChange}
            inputProps={{pattern:'.{6,}', title:'Mínimo 6 caracteres'}}
            required
            />
            <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
            >
            { showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </DivPassword>

           
            </Form>
        </Main>
    )
}
export default SignUp