
import { Issues } from "../../contexts/GithubContext"
import { PostContainer } from "./styles"
import { formatDistanceToNow } from "date-fns"
import ptBR from 'date-fns/locale/pt-BR'
import removeMarkdown from 'remove-markdown'

interface PostProps{
    item:Issues
}


export const Post = ({item}:PostProps) => {


    return (
        <PostContainer>
            <div className="header-post">
                <p>{item.title}</p>
                <span>{formatDistanceToNow(new Date(item.created_at),{
                    addSuffix:true,
                    locale:ptBR
                })}</span>
            </div>

            <p className="post-content ">
                {removeMarkdown(item.body)}
            </p>
        </PostContainer>
    )
}
