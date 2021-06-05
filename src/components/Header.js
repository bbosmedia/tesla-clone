import React, { useState } from 'react'
import styled from 'styled-components'
import {IoMenuSharp} from 'react-icons/io5'
import { selectCars } from '../features/carSlice'
import { useSelector } from 'react-redux';




function Header() {
    const cars = useSelector(selectCars);
    const [sidebar, setsidebar] = useState(false)
    console.log(sidebar)
    return (
        <Container>
            <a href="#"><img src="images/logo.svg" alt="" /></a>
            <Menu>
                {cars.map(car => (<p><a href="#">{car}</a></p>))}
                <p><a href="#">Solar Roof</a></p>
                <p><a href="#">Solar Panels</a></p>
            </Menu>
            <RightMenu>
                <p><a href="#">Shop</a></p>
                <p><a href="#">Account</a></p>
                <p><a><IoMenuSharp onClick={() => setsidebar(true)} className="menubar" /></a></p>
            </RightMenu>
            <BurgerNav sidebarM={sidebar}>
                <div className="burgerMenu" onClick={() => setsidebar(false)}>
                    <div className="close">X</div>
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
z-index: 1;
position: fixed;
min-height: 60px;
align-items: center;
display: flex;
padding: 0 20px;
top: 0;
left: 0;
right: 0;

.menubar{
    cursor: pointer;
}
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
width: 350px;
overflow-y: scroll;
background-color: #fff;
bottom: 0;
transform: ${props => props.sidebarM ? `translateX(0)` : `translateX(100%)`};
transition: all 0.3s ease;

.burgerMenu{
    padding-top: 75px;
    padding-left: 20px;
    position: relative;
    width: 100%;
    height: 100%;
    .close{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }


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
