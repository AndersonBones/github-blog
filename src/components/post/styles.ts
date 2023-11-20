import styled from "styled-components";

export const PostContainer = styled.article`
    
    width: 100%;
   
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-height: 16.25rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    flex: 1;
    border: 2px solid transparent;
    
    background-color: ${props=>props.theme["blue-300"]};

    .header-post{
        display: flex;
        justify-content: space-between;

        p{
            color: ${props=>props.theme.white};
            font-weight: 500;
            font-size: 1.1rem;
        }
        span{
            color: ${props=>props.theme["blue-100"]};
            font-size: .8rem;
        }
    }
    

    .post-content{
        color: ${props=>props.theme["blue-100"]};
    
        display: -webkit-box;
        max-width: 25rem;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        
    
    }

    &:hover{
        border: 2px solid  ${props=>props.theme['blue-label']};
        transition: border .2s  ease;
    }
`