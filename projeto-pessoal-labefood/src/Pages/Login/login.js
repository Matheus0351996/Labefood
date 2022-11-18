import React, { useState } from "react";
import { Main, Form, ButtonStyled, InputMaterial, DivPassword } from "./styled";
import  IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { BASE_URL } from "../../Constants/url";
import { useNavigate } from "react-router-dom";
import { goToFeed } from "../../Routes/coordinator";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [checkErrEmail, setCheckErrEmail] = useState(false);
    const [checkErrPassword, setCheckErrPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const navigate = useNavigate()

    const onSubmitLogin = (event) => {
        event.preventDefault();

        const userLogin = {
            email,
            password
        }
        loginApi(userLogin)
    }


    const loginApi = async(body) => {
        await axios.post(`${BASE_URL}/login`, body)
        .then((res)=>{
            console.log(res.data);
            setEmail("");
            setPassword("");
            setErrEmail("");
            setErrPassword("");
            setCheckErrEmail(false);
            setCheckErrPassword(false);
            localStorage.setItem("token", res.data.token);
            alert(`Boas vindas! ${res.data.user.name}`)
            goToFeed(navigate);
        })
        .catch((err)=>{
            if(err.response.data.message.includes('Senha incorreta')){
                setErrPassword(err.response.data.message);
                setCheckErrPassword(true);
            }else{
                setErrEmail(err.response.data.message)
                setCheckErrEmail(true);
            }
            console.log(err.response.data.message);
        })
    }


    return(
        <Main>
            <p>Entrar</p>
            <Form onSubmit={onSubmitLogin}>
            <InputMaterial 
            error={checkErrEmail}
            helperText={checkErrEmail ? errEmail : ''}
            id="outlined-basic"
            label="Email"
            type={'email'}
            value = {email}
            variant="outlined" 
            placeholder={'Email'}
            onChange={(event)=>setEmail(event.target.value)}
            required
            />

            <DivPassword>
            <InputMaterial 
            error={checkErrPassword}
            helperText={checkErrPassword ? errPassword : ''}
            id="outlined-basic" 
            label="Password"
            type={showPassword ? 'password' : 'text'}
            value = {password}
            variant="outlined"
            placeholder={'Mínimo 6 caracteres'}
            inputProps={{pattern:'.{6,}', title:'Mínimo 6 caracteres'}}
            onChange={(event)=>setPassword(event.target.value)}
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

             <ButtonStyled type='submit'>Entrar</ButtonStyled>
            </Form>
        </Main>
    )
}
export default Login