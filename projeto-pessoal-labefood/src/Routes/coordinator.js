export const goToLogin =(navigate) =>{
    navigate("/login")
}

export const goToFeed =(navigate) =>{
    navigate("/")
}

export const goToSignUp =(navigate) =>{
    navigate("/signUp")
}

export const goToSignUpAdress =(navigate) =>{
    navigate("/signUp/adress")
}

//  export const goToAdressEdit = (navigate, id) =>{
//     navigate(`/feed/${id}`)
// }

export const goToRestaurant = (navigate, id) =>{
    navigate(`/feed/${id}`)
}

export const goToBack = (navigate) =>{
    navigate(-1)
}

export const goToCart = (navigate) =>{
    navigate("/cart")
}

export const goToProfile = (navigate) =>{
    navigate("/profile")
}

