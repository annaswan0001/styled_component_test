import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoSectionElements";
import { Button } from "../Button/ButtonElements";

export default function Data({
  id,
  lightBg,
  dark,
  primary,
  imgStart,
  topLine,
  headLine,
  description,
  img,
  alt,
  buttonLabel,
  lightText,
  darkText,
}) {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine> {topLine}</TopLine>
              <Heading lightText={lightText}> {headLine}</Heading>
              <Subtitle darkText={darkText}> {description} </Subtitle>
              <BtnWrap>
                <Button
                  duration={5000}
                  smooth={true}
                  spy={true}
                  to="/"
                  dark={dark}
                  offset={-80}
                  primary={primary}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
          <Column2></Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
}
