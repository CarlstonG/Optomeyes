import React from 'react'
import { InfoContainer, SecondInfoContainer, ThirdInfoContainer, InfoWrapper, InforRow, Column1, Column2, TextWrapper, TopLine, TopLine2, Heading, HeroBtnWrapper, Img, ImgWrap } from './InfoElements'
import {Button} from '../ButtonElements'
import Image from '../images/img1.jpg'
import Image2 from '../images/img2.JPG'
import Image3 from '../images/img3.JPG'

export const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InforRow>
                        <Column1>
                            <TextWrapper>
                            <Heading>ORTHOKERATOLOGY</Heading>
                            <hr />
                            <TopLine>Orthokeratology is a treatment option that has been around for more than 50 years. It is based on the principles of reshaping the cornea (front surface of the eye). This allows people to see clearly without using glasses or contact lenses during the day.</TopLine>
                               
                            <HeroBtnWrapper>
                        <Button to="book">Learn More</Button>
                        </HeroBtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={Image} type='image/png' />
                        </ImgWrap>
                        </Column2>
                    </InforRow>
                    
                </InfoWrapper>
                </InfoContainer>
                <SecondInfoContainer >
                <InfoWrapper>
                    <InforRow>
                        <Column2>
                            <TextWrapper>
                            <Heading>OCT TECHNOLOGY</Heading>
                            <hr />
                            <TopLine2>Taking photographs of the inside of your eye has always been important. With OCT technology we are now able to perform 3D scans of the eye. This enables us to monitor eye health changes more efficiently. This is now available at Optomeyes Eyewear.</TopLine2>
                               
                            <HeroBtnWrapper>
                        <Button to="book">Learn More</Button>
                        </HeroBtnWrapper>
                            </TextWrapper>
                        </Column2>
                        <Column1>
                        <ImgWrap>
                        <Img src={Image2} type='image/png' />
                        </ImgWrap>
                        </Column1>
                    </InforRow>
                    
                </InfoWrapper>
                </SecondInfoContainer>
                <ThirdInfoContainer>
                <InfoWrapper>
                    <InforRow>
                        <Column1>
                            <TextWrapper>
                            <Heading className>COMPREHENSIVE EYE TESTS</Heading>
                            <hr />
                            <TopLine>Sight is a privilege. Approximately 80% of vision is preventable. This is why we recommend for most people to have a comprehensive eye check every two years. Those over the age of 50 & those with a family history of eye disease are encourage to have annual comprehensive eye test.</TopLine>
                               
                            <HeroBtnWrapper>
                        <Button to="book">Learn More</Button>
                        </HeroBtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={Image3} type='image/png' />
                        </ImgWrap>
                        </Column2>
                    </InforRow>
                    
                </InfoWrapper>
                </ThirdInfoContainer>
        </>
    )
}

