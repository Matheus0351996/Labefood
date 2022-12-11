import { useNavigate } from "react-router-dom"
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator"
import { AvatarStyled, CartStyled, HomeStyled, MenuContainer, MenuContainerSpace } from "./styled"


const Menu = ({page}) =>{
    const navigate = useNavigate()
    return(
        <>
        <MenuContainer>
            <HomeStyled pageCurrent={page === "feed"} onClick={() =>goToFeed(navigate)} />
            <CartStyled pageCurrent={page === "cart"} onClick={() =>goToCart(navigate)}/>
            <AvatarStyled pageCurrent={page === "profile"} onClick={() =>goToProfile(navigate)}/>
        </MenuContainer>
        <MenuContainerSpace/>
        </>
    )
}

export default Menu