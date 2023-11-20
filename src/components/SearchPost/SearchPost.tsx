import { SearchPostContainer } from "./styles"
import { useContext} from 'react'
import { GithubContext } from "../../contexts/GithubContext"

export const SearchPost = ()=>{

    const {issues, handleSearch} = useContext(GithubContext)



    return(
        <SearchPostContainer>
            <div className="header-search">
                <p>Publicações</p>

                <span>{issues.length} publicações</span>
            </div>
            <input onChange={(e)=>{handleSearch(e.target.value)}} type="text" placeholder="Buscar conteúdo" required/>
        </SearchPostContainer>
    )
}