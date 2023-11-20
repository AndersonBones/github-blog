import styled from "styled-components";

export const CardContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -5rem;
    width: 100%;
    max-height: 15rem;
    border-radius: 6px;
    padding: 2rem;
    background-color: ${props=>props.theme["blue-700"]};
    display: flex;
    
    gap: 2rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media (max-width: 900px) {
        
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        width: auto;
        max-height: 35rem;
    }
`

export const AvatarContainer = styled.div`
    width: 15rem;
    
    border-radius:6px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }

`

export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    
    
    .card-header{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;


        h2{
            margin: 0;
            font-size: 1.5rem;
        }

        a{
            font-size: .8rem;
            font-weight: 600;
            color: ${props=>props.theme["sky-blue"]};
            display: inline-flex;
            align-items: center;
            align-content: flex-start;
            gap: .2rem;
            text-decoration: none;
        }

        @media (max-width: 900px) {
            flex-direction: column;
            align-items: center;
            gap: .7rem;
        }
    }

    article{
        @media (max-width: 900px) {
            text-align: center;
        }
    }

    article > p{
        color: ${props=>props.theme["blue-100"]};
    }

    .card-footer{
        display: flex;
        align-items: center;
        gap: 1rem;

        p{
            margin: auto 0;
        }

        span:first-child{
            color: ${props=>props.theme["icon-blue"]};
        }

        span:last-child{
            color: ${props=>props.theme["blue-100"]};
        }

        a{
            
            text-decoration:none;
            span:last-child{
                color: ${props=>props.theme["sky-blue"]};
            }

            &:focus{
      
                box-shadow: none;
            }

        }

        @media (max-width: 900px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    

`