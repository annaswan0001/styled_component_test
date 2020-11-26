import React from "react";
import {
  ServiceContainer,
  ServiceH1,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
} from "./ServicesElements";

export default function Services({ services }) {
//   console.log(props);
  return (
    <ServiceContainer id="services">
      <ServiceH1>Our Services</ServiceH1>
      <ServiceWrapper>
        {services.map((el) => {
          return (
            <ServiceCard key={el.icon}>
              <ServiceIcon src={el.icon} />
              <ServiceH2>{el.title}</ServiceH2>
              <ServiceP>{el.text}</ServiceP>
            </ServiceCard>
          );
        })}
      </ServiceWrapper>
    </ServiceContainer>
  );
}
