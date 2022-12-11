import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Main, Menu } from "./styled";
import MenuProfilePage from '../../Components/Menu/menu'


const Profile = () => {
    return(
        <Main>
            <Header title={"Meu perfil"} />
            Profile
            <MenuProfilePage page={'profile'}/>
        </Main>
    )
}
export default Profile