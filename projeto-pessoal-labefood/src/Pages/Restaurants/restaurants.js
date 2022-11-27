import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/cardRestaurantDetails";
import { BASE_URL } from "../../Constants/url";
import { CardRestaurant, ContainerRestaurant} from "./styled"

const Restaurant = () => {
    const {restaurantsId} = useParams()
    const [restaurant, setRestaurant] = useState({})


    
    const getRestaurant = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantsId}`,{
            headers:{
                auth: window.localStorage.getItem('token')
            }
        })
        .then((res)=>{
            setRestaurant(res.data.restaurant)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    useEffect(() => {
        getRestaurant()
    }, []) 
    
    return(
        <ContainerRestaurant>
            <CardRestaurant>
             <CardRestaurantDetails    restaurant={restaurant}/>
            </CardRestaurant>
        </ContainerRestaurant>
    )
}
export default Restaurant