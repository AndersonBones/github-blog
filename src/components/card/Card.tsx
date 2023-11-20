import { AvatarContainer, CardContainer, CardBody } from "./styles"
import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { useContext } from "react"
import { GithubContext } from "../../contexts/GithubContext"
import { Spinner } from "../Spinner/Spinner"

export const Card = () => {

    const { user, isLoading } = useContext(GithubContext)

    return (
        <CardContainer>

            {isLoading == true && (
                <div className="spinnerContainer">
                    <Spinner></Spinner>
                </div>
            )}

            {isLoading == false && (
                <>
                    <AvatarContainer>
                        <img src={user.avatar_url} alt="" />
                    </AvatarContainer>

                    <CardBody>
                        <div className="card-header">
                            <h2>{user.login}</h2>
                            <a target="_blank" href="https://github.com/AndersonBones"><span>GITHUB</span> <span><ArrowSquareOut size={20}></ArrowSquareOut></span></a>
                        </div>

                        <article>
                            <p>{user.bio}</p>
                        </article>

                        <div className="card-footer">
                            <p><span><GithubLogo size={20}></GithubLogo></span> <span>{user.login}</span></p>
                            <a target="_blank" href="https://linkzin.net/"><span><Buildings weight="fill" size={20}></Buildings></span> <span>{user.blog}</span></a>
                            <p><span><Users weight="fill" size={20}></Users></span> <span>{user.followers} seguidores</span></p>
                        </div>
                    </CardBody>
                </>
            )}




        </CardContainer>
    )
}