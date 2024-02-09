import React,{useState} from "react";
import { Hero } from "../component/Home/Hero";
import { Statistic } from "../component/Home/Statistic";
import { Aboutus } from "../component/Home/about";
import { Hospitals } from "../component/Home/hospitals";
import { CareTakker } from "../component/Home/caretakker";
import { Contact } from "../component/Home/contact";

export const Home = () => {
  const [state, setState] = useState(""); 
  const [city, setCity] = useState(""); 
  const handleFindHospital = (state, city) => {
    setState(state);
    setCity(city);
  };

  return (
    <>
      <Hero onFindHospital={handleFindHospital} />
      <Statistic />
      <Aboutus />
      <Hospitals state={state} city={city}/>
      <CareTakker state={state} city={city}/>
      <Contact />
    </>
  );
};
