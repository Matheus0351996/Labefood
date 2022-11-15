import React, { useState } from "react";
import { Main, Form, ButtonStyled, InputMaterial } from "./styled";
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

    return(
        <Main>
            <p>Entrar</p>
            <Form>
            <InputMaterial 
            id="outlined-basic"
            label="Email"
            type={'email'}
            variant="outlined" 
            />

            <divPassword>
            <InputMaterial 
            id="outlined-basic" 
            label="Password"
            type={showPassword ? 'password' : 'text'}
            variant="outlined" 
             
             />
            <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
            >
            { showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </divPassword>

             <ButtonStyled type='submit'>Entrar</ButtonStyled>
            </Form>
        </Main>
    )
}
export default Login