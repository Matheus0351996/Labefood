import styled from "styled-components";
import { Button } from '@mui/material'
import  TextField from "@mui/material/TextField";


export const InputMaterial = styled(TextField)`

`

export const Main = styled.main`
    padding:10px;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    p{
        font-size:1rem;
    }
`

export const Form = styled.form`
display:flex;
flex-direction:column;
height:30%;
width:80%;
justify-content:space-between;
`

export const ButtonStyled = styled(Button)`
 &&{
    color:#000;
    background-color:#E8222E;
 }
`

export const DivPassword = styled.div`
display:flex;
width:80%;
align-items: center;
justify-content: space-between;
`