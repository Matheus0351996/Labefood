import React, { useState } from "react";
import useForm from "../../Hooks/useForm";
import {ButtonStyled, DivPassword, Form, InputMaterial, Main} from './styled'
import  IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToSignUpAdress } from "../../Routes/coordinator";

const SignUp = () => {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCheckPassword, setShowCheckPassword] = useState(false);
    const [checkErrPassword, setCheckErrPassword] = useState(false);

    const navigate = useNavigate();


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

    const handleClickShowCheckPassword = () => {
        setShowCheckPassword(!showCheckPassword);
    }

    const onSubmitForm = (event) =>{
        event.preventDefault()
        if(form.password!==confirmPassword){
            setCheckErrPassword(true);
        }else{
            setCheckErrPassword(false);
            
        }
        cleanFields()
    }

        const signUpPerson = async () =>{
            await axios.post(`${BASE_URL}/signup`, form)
            .then((res)=>{
                localStorage.setItem("token", res.data.token);
                alert(`Boas vindas! ${res.data.user.name}`)
                goToSignUpAdress(navigate)
            })
            .catch((err)=>{
                
                alert('Email ou CPF já cadastrados')
                cleanFields()
                setConfirmPassword('')
            })
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
            id="outlined-adornment-password"
            label={"Password"}
            name={"password"}
            type={showPassword ? 'password' : 'text'}
            placeholder={"Mínimo 6 caracteres"}
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
            <DivPassword>
            <InputMaterial
            error={checkErrPassword}
            helperText={checkErrPassword ? 'Deve ser a mesma que a anterior' : ''}
            id="outlined-adornment-password"
            label={"Confirmar"}
            type={showCheckPassword ? 'password' : 'text'}
            placeholder={"Mínimo 6 caracteres"}
            inputProps={{pattern:'.{6,}', title:'Mínimo 6 caracteres'}}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
            />
                <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowCheckPassword}
                     edge="end"
            >
            { showCheckPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </DivPassword>
              <ButtonStyled type="submit">Entrar</ButtonStyled>
            </Form>
        </Main>
    )
}
export default SignUp