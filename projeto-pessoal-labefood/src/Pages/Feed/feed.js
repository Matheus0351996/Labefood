import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/cardRestaurant";
import { BASE_URL } from "../../Constants/url";
import Header from "../../Header/header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BoxInputSearch, ContainerFeed, InputSearch, Menu, MenuItem, WrapperCardsRestaurant } from "./styled";

const Feed = () => {
    const [restaurants, setRestaurants] = useState([])
    const [inputText, setInputText] = useState("")



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
    
    const filterRestaurant = restaurants.filter((restaurant)=>
       inputText ? restaurant.name.toLowerCase().includes(inputText.toLowerCase()):true
    ).map((restaurant, index)=>{
        return <CardRestaurant restaurant={restaurant} key={index} />
    })


    console.log(filterRestaurant);

    useProtectedPage()
    return(
        <ContainerFeed>
            <Header title={"Rappi4"}/>
            <BoxInputSearch>
            <InputSearch
                placeholder="Restaurante"
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}
            />
            </BoxInputSearch>
            <Menu>
                <MenuItem select={true}>Burguer</MenuItem>
                <MenuItem select={false}>Asiática</MenuItem>
                <MenuItem select={false}>Massas</MenuItem>
                <MenuItem select={false}>Saudáveis</MenuItem>
                <MenuItem select={false}>Burguer</MenuItem>
                <MenuItem select={false}>Burguer</MenuItem>
            </Menu>
            <WrapperCardsRestaurant>
                {
                 filterRestaurant
                }
            </WrapperCardsRestaurant>
        </ContainerFeed>
    )
}
export default Feed






     {/* <InputMaterial 
                id="outlined-basic"
                name='restaurants'   
                type={'text'}
                // value = {restaurants}
                variant="outlined" 
                placeholder={'Restaurante'}
                onChange={(event)=>setRestaurants(event.target.value)}
            /> */}