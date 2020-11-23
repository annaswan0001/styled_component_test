import React, { useState, useCallback } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}  />
      <Hero/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </>
  );
}
