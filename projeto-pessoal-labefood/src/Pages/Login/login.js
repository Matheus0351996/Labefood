import React, { useState } from "react";
import { Main, Form, ButtonStyled, InputMaterial, DivPassword } from "./styled";
import  IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log({email, password});
    }


    return(
        <Main>
            <p>Entrar</p>
            <Form onSubmit={onSubmitLogin}>
            <InputMaterial 
            id="outlined-basic"
            label="Email"
            type={'email'}
            variant="outlined" 
            placeholder={'Email'}
            onChange={(event)=>setEmail(event.target.value)}
            required
            />

            <DivPassword>
            <InputMaterial 
            id="outlined-basic" 
            label="Password"
            type={showPassword ? 'password' : 'text'}
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