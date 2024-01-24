import React from "react";
import Banner from '../components/banner';
import Card from '../components/cards'
import Footerbanner from '../components/footerbanner';
import Herocard from '../components/herocard';
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Herocard/>
      <Card/>
      <Banner/>
      <Footerbanner/>
    </div>
  );
}

export default Home;
