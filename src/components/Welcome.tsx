import React from "react"
interface welcomeProps {
    name : string,
}

function Welcome({name}:welcomeProps){
    return(
        <>
        <h1>Welcome {name}</h1>
        </>
    )
}

export default Welcome;