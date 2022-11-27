import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../Routes/coordinator"
import { BoxInformTimePrice, ContainerCardRestaurantDetails, ImageRestaurant, Inform, InformTimePrice, NameRestaurant } from "./styled"


const CardRestaurantDetails = ({restaurant}) => {
    const navigate = useNavigate()

    return(
        <ContainerCardRestaurantDetails onClick={() =>goToRestaurant(navigate, restaurant.id)}>
            <ImageRestaurant src={restaurant.logoUrl}/>
            <NameRestaurant>{restaurant.name}</NameRestaurant>
            <Inform>{restaurant.category}</Inform>
            <BoxInformTimePrice>
                <Inform>{restaurant.deliveryTime}</Inform>
                <Inform>{restaurant.shipping}</Inform>
            </BoxInformTimePrice>
            <Inform>{restaurant.address}</Inform>  
        </ContainerCardRestaurantDetails>
    )
}
export default CardRestaurantDetails

