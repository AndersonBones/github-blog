
import styled from "styled-components";

export const PostPageContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5rem ;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: 767.98px){
        max-width: 100%;
        padding: 0 1rem;
    }
`

export const PostPageCard = styled.div`
    width: 100%;
    height: 11.8rem;
    display: flex;
    flex-direction: column;
    
    gap: 1rem;
    margin-top: -5rem;
    background-color: ${props=>props.theme["blue-700"]};
    padding: 2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 6px;

    .header-post{
        display: flex;
        justify-content: space-between;
       
        a{
            color: ${props=>props.theme["sky-blue"]};
            text-decoration: none;
            font-weight: 600;
            font-size:.8rem;
            
            display: flex;
            align-items: center;
            gap: .2rem;
        }
    }

    @media (max-width: 767.98px){
        width: 100%;
        justify-content: center;
    }
`


export const PostContent = styled.article`

    max-width: 900px;
    @media (max-width: 767.98px){
        width: 100%;
    }

    margin: 0 auto;
    img{
        width: 100%;
    }

    color: ${props=>props.theme["blue-100"]};
    h1{
        font-weight: 500;
    }

    .spinnerContainer {
        grid-column: span 2;
        margin-top: 6rem;
    }
    
`

export const ToHomeButton = styled.a`
    text-decoration: none;
    cursor: pointer;
`

export const TitleCard = styled.div`


`

export const PostInfo = styled.div`
    display: flex;
    gap: 1rem;
    color: ${props=>props.theme["blue-100"]};

    @media (max-width: 767.98px){
        span{
            font-size: .7rem;
        }
    }
`