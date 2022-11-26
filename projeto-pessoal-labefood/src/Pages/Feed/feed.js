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
    const [categoryRestaurant, setCategoryRestaurant] = useState([])
    const [valueCategory, setValueCategory] = useState("")


    console.log(valueCategory);

    const getRestaurants = () => {
        axios.get (`${BASE_URL}/restaurants`, {
            headers:{
                auth: localStorage.getItem('token')
            }
        })
        .then((res)=>{
            console.log(res.data);
            setRestaurants(res.data.restaurants)
            filterCategory(res.data.restaurants)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getRestaurants()
    }, [])

    const filterCategory = (restaurants) =>{
        const arrayAux = []
        restaurants.map((res)=>{
            arrayAux.push(res.category)
        })
        const takeOutRepeat = [...new Set(arrayAux)]
        const changeObjectArray = [];
        takeOutRepeat.map((category)=>{
            const insertObject = {category, select:false}
            changeObjectArray.push(insertObject)
        })
        setCategoryRestaurant(changeObjectArray)
        console.log(changeObjectArray);
    }


    
    const filterRestaurant = restaurants
    .filter((restaurant)=>
       inputText ? restaurant.name.toLowerCase().includes(inputText.toLowerCase()): true )
    .filter((restaurant)=>
        valueCategory ? restaurant.category.toLowerCase().includes(valueCategory.toLowerCase()) : true )
    
    .map((restaurant, index)=>{
        return <CardRestaurant restaurant={restaurant} key={index} />
    })


    const changeCategory = (category) =>{
        setValueCategory(category)
        
        const result = categoryRestaurant.map((cat)=>{
            if(cat.category === category){
                return {
                    ...cat,
                    select:true
                }
            }else{
                return{
                    ...cat,
                    select:false
                }
            }
        })
        setCategoryRestaurant(result);
    }

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
            <MenuItem
            onClick={()=>setValueCategory("")}
                 >
             Todos
            </MenuItem>

                {
                    categoryRestaurant.map((category,index) =>{
                    
                        return (<MenuItem
                             select={category.select}
                             onClick={()=>changeCategory(category.category)}
                             >
                                 {category.category}
                               </MenuItem>)

                    })
                }

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