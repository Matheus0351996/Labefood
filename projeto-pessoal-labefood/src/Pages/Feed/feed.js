import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/cardRestaurant";
import { BASE_URL } from "../../Constants/url";
import Header from "../../Header/header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { ContainerFeed, InputSearch, WrapperCardsRestaurant } from "./styled";

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
        <ContainerFeed>
            <Header title={"Rappi4"}/>

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
            <InputSearch
                placeholder="Restaurante"
            />
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
        </ContainerFeed>
    )
}
export default Feed