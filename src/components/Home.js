import React from 'react'
import styled from 'styled-components'
import Section from './Section'




function Home() {
    return (
        <Container>
            <Section id="0" title="Model S" description="Order Online for Touchless Delivery" images="model-s.jpg" leftBtn="Custom Order" rightBtn="Existing Inventory" downarrow={true} />
            <Section id="1" title="Model 3" description="Order Online for Touchless Delivery" images="model-3.jpg" leftBtn="Custom Order" rightBtn="Existing Inventory"/>
            <Section id="2" title="Model X" description="Order Online for Touchless Delivery" images="model-x.jpg" leftBtn="Custom Order" rightBtn="Existing Inventory"/>
            <Section id="3" title="Model Y" description="Order Online for Touchless Delivery" images="model-y.jpg" leftBtn="Custom Order" rightBtn="Existing Inventory"/>
            <Section id="4" title="Model YLowest Cost Solar Panels in America" description="Money-back guarantee" images="solar-panel.jpg" leftBtn="Order Now" rightBtn="Learn More"/>
            <Section id="5" title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" images="solar-roof.jpg" leftBtn="Order Now" rightBtn="Learn More"/>
            <Section id="6" title="Accessories"  images="accessories.jpg" leftBtn="Shop Now"/>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100%;
`

export default Home
