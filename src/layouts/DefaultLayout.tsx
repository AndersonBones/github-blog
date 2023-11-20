import { HeaderContainer } from "../components/header/Header";
import {Outlet} from 'react-router-dom'
import { LayoutContainer } from "./styles"

export const DefaultLayout = ()=>{
    return(
        <LayoutContainer>
            <HeaderContainer></HeaderContainer>
            <Outlet></Outlet>
        </LayoutContainer>
    )
}