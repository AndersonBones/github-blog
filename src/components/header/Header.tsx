import { Header } from "./styles"
import logo from '../../assets/Logo.svg'

export const HeaderContainer = ()=>{
    return (
        <Header>
            <img src={logo} alt="" width={'150px'}/>
        </Header>
    )
}