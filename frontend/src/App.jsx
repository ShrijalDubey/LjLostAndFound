import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import TopBrand from "./components/TopBrand";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div>
      <TopBrand />
      <Navbar />
      <ItemList />
      <Footer />
    </div>
  );
}
