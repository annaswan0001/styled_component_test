import React, {useState}from "react";
import {VideoBg,HeroContainer,HeroBg, HeroContent,HeroP,HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'
import {Button } from '../Button/ButtonElements'
import video from '../../videos/video.mp4'



export default function Hero() {
    let [hover, serHover] = useState(false);

    const handleHover = ()=>{
        serHover(!hover)
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} autoPlay loop muted type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Sign up for a new account today 
                and recieve $250 in credit towards your next payments
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                onMouseEnter = {handleHover} 
                onMouseLeave= {handleHover} 
                primary={true}
                dark={true}
                to="sign-up">
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
}
