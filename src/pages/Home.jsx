import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Services from "../components/Services";
import { serviceData } from "../components/Services/data";
import Footer from "../components/Footer";
import ScrollToTop from './../ScrollToTop'
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <ScrollToTop/>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}  />
      <Hero/>
      <InfoSection {...homeObjOne}/>

      <InfoSection {...homeObjTwo}/>
      <Services services={serviceData}/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
    </>
  );
}
