import styled from "styled-components";

export const HomeContainer = styled.main`
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 0 5rem ;

    @media (max-width: 900px) {
       width: 100%;
       padding: 0 1rem;
    }
`