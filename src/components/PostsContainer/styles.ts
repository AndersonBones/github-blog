import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostsContainer = styled.div`
    width:100%;

    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    .spinnerContainer {
        grid-column: span 2;
        margin-top: 6rem;
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);


    }
`

export const NavCardLink = styled(Link)`
    text-decoration: none;
`