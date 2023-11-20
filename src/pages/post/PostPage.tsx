import { GithubContext } from "../../contexts/GithubContext"
import { PostContent, PostPageCard, PostPageContainer, ToHomeButton, TitleCard, PostInfo } from "./styles"
import { useContext, useEffect } from 'react'
import { ArrowCircleLeft, ArrowSquareOut } from "phosphor-react"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import { GithubLogo, Calendar, ChatCircleDots } from 'phosphor-react'
import { Spinner } from "../../components/Spinner/Spinner"
import { useNavigate } from "react-router-dom"


type ParamsId = {
    id: string
}
export const PostPage = () => {

    const navigate = useNavigate();

    const { id } = useParams<ParamsId>();
    const { getIssuesId, isLoading, issuesId } = useContext(GithubContext)


    useEffect(() => {


        getIssuesId(Number(id))


    }, [])



    return (
        <PostPageContainer >

            <PostPageCard>

                {isLoading == true && (
                    <div className="spinnerContainer">
                        <Spinner></Spinner>
                    </div>
                )}

                {isLoading == false && (
                    <>
                        <div className="header-post">
                            <ToHomeButton onClick={() => { navigate(-1) }}>
                                <span><ArrowCircleLeft size={20}></ArrowCircleLeft></span> <span>Voltar</span>
                            </ToHomeButton>

                            <a href=""><span>GITHUB</span> <span><ArrowSquareOut size={20}></ArrowSquareOut></span></a>
                        </div>


                        <TitleCard>
                            <h2>{issuesId.title}</h2>
                        </TitleCard>

                        <PostInfo>
                            <span><GithubLogo size={20}></GithubLogo> {issuesId.login}</span>
                            <span><Calendar weight="fill" size={20}></Calendar> {issuesId.created_at} </span>
                            <span><ChatCircleDots weight="fill" size={20}></ChatCircleDots> {issuesId.comments} comentários</span>
                        </PostInfo>
                    </>
                )}

            </PostPageCard>




            <PostContent>

                {isLoading == true && (
                    <div className="spinnerContainer">
                        <Spinner></Spinner>
                    </div>
                )}

                {isLoading == false && (
                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                        {issuesId.body}
                    </ReactMarkdown>
                )}


            </PostContent>
        </PostPageContainer>
    )
}