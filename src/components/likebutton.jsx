import { useState } from "react"

export default function Button({isLiked}){
    const [liked,setLiked]=useState(isLiked)

    const style={
        backgroundColor:liked? 'red' : 'black',
        color: liked? 'blue': 'white'
    }


    return(
        <>
        <button style={style} onClick={()=>setLiked(!liked)}>
            {liked? "Liked" : "Like"}
        </button>
        </>
    )
}