import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "../Pages/Cart/cart"
import Feed from "../Pages/Feed/feed"
import Login from "../Pages/Login/login"
import Profile from "../Pages/Profile/profile"
import Restaurants from "../Pages/Restaurants/restaurants"
import SignUp from "../Pages/SignUp/signUp"
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress"

 
 const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/signUp/adress" element={<SignUpAdress/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/feed/:restaurantsId" element={<Restaurants/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>


            </Routes>
        </BrowserRouter>
            
    )
 }
 export default Router