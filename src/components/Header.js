import React from 'react'
import styled from 'styled-components'
import {IoMenuSharp} from 'react-icons/io5'




function Header() {
    const scrollTo = () =>{
        window.scrollY(500)
    }
    return (
        <Container>
            <a href="#"><img src="images/logo.svg" alt="" /></a>
            <Menu>
                <p><a href="#">Model S</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">Solar Roof</a></p>
                <p><a href="#">Solar Panels</a></p>
            </Menu>
            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Account</a></p>
                <p><a><IoMenuSharp onClick={scrollTo} /></a></p>
            </RightMenu>
            <BurgerNav>
                <div>
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Power Wall</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utulities</a></li>
                    <li><a href="#">Test Drive</a></li>
                </div>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
position: fixed;
min-height: 60px;
align-items: center;
display: flex;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

p{
    padding: 0 10px;
    flex-wrap: nowrap;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
    padding: 0 10px;
    flex-wrap: nowrap;
}
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
right: 0;
width: 400px;
background-color: #fff;
height: 100vh;

div{
    padding-top: 75px;
    padding-left: 20px;
    position: relative;
    width: 100%;
    li{
    list-style: none;
    padding-bottom: 20px;
    a{
        font-size: 14px;
        font-weight: 500;
        color: #555;
    }
}
}


`
