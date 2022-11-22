import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/cardRestaurant";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { InputMaterial, Main, WrapperCardsRestaurant } from "./styled";

const Feed = () => {
    const [restaurants, setRestaurants] = useState([])


    const getRestaurants = () => {
        axios.get (`${BASE_URL}/restaurants`, {
            headers:{
                auth: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data);
            setRestaurants(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getRestaurants()
    }, [])
    

    useProtectedPage()
    return(
        <Main>
            {/* <InputMaterial 
                id="outlined-basic"
                name='restaurants'   
                type={'text'}
                // value = {restaurants}
                variant="outlined" 
                placeholder={'Restaurante'}
                onChange={(event)=>setRestaurants(event.target.value)}
            /> */}

            <WrapperCardsRestaurant>
                {
                    restaurants.map((restaurant)=>{
                        return(
                            <CardRestaurant
                            restaurant={restaurant}
                            
                            />
                        )
                    })
                }
            </WrapperCardsRestaurant>
        </Main>
    )
}
export default Feed