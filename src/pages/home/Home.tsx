import { Posts } from "../../components/PostsContainer/Posts"
import { SearchPost } from "../../components/SearchPost/SearchPost"
import { Card } from "../../components/card/Card"
import { HomeContainer } from "./styles"

export const Home = ()=>{
    return (
        <HomeContainer>
            <Card></Card>
            <SearchPost></SearchPost>
            <Posts></Posts>
        </HomeContainer>
       
    )
}