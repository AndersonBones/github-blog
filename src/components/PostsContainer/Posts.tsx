import { Post } from "../post/Post"
import { NavCardLink, PostsContainer } from "./styles"
import { GithubContext } from "../../contexts/GithubContext"
import { useContext } from 'react'
import { Spinner } from "../Spinner/Spinner"


export const Posts = () => {
    const { issues, isLoading } = useContext(GithubContext)



    return (
        <PostsContainer>

            {isLoading == true && (
                <div className="spinnerContainer">
                    <Spinner></Spinner>
                </div>
            )}


            {isLoading == false && issues.map((item) => {

                return (
                    <NavCardLink key={item.number}  to={`/posts/${item.number}`}>
                        <Post key={item.number} item={item}></Post>
                    </NavCardLink>

                )
            })}

        </PostsContainer>
    )
}