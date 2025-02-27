import Button from "./likebutton"

export default function Postcard({post}){
    return(
        <>
        <img src={post.profileImage} alt={post.id} height="250px" width="250px"></img>
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <Button isLiked={post.isLiked}/>
        <br/>
        </>
    )
}