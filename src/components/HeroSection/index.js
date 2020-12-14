import React from 'react'
import Image from '../images/AdobeStock_226112855.png'
import {HeroContainer, HeroBg, ImageBg,
        HeroContent, HeroH1, HeroH2, Span, HeroBtnWrapper} from './HeroSectionElements'
import {Button} from '../ButtonElements'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Image} type='image/png' /> 
            </HeroBg>
            <HeroContent>
                <HeroH2>Welcome to</HeroH2>
                <HeroH1><Span>O</Span>ptomeye</HeroH1>
                <HeroH1><Span>E</Span>YEWear</HeroH1>
                <HeroBtnWrapper>
                    <Button to="book">Book Now</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
