import styled from "styled-components";

export const SearchPostContainer = styled.form`
    padding: 3rem 0;
    width: 100%;
    .header-search{
        display: flex;
        justify-content: space-between;

        p{
            font-weight: 500;
            color: ${props=>props.theme['sub-titulo']};
        }

        span{
            color: ${props=>props.theme['base-span']};
        }
    }

    input{
        width: 100%;
        background-color: ${props=>props.theme["blue-900"]};
        padding: .7rem;
        border-radius: 6px;
        border: none;
        color: ${props=>props.theme['blue-100']};
        border: 1px solid ${props=>props.theme["blue-border"]};
    }

    input::placeholder{
        color: ${props=>props.theme['blue-label']};
    }

    input[type]:focus{
      
        box-shadow: none;
    }


`