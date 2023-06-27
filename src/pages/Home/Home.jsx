import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/RouterConfig";
import Header from "../../components/Button/Header";
import Aboutpg from "../../components/Button/Aboutpg";
import Product from "../../components/Button/Product";
import Works from "../../components/Button/Works";
import Contact from "../../components/Button/Contact";


const Home = () => {
  const navigate = useNavigate();

  const changeDir = (dir) => {
    navigate(dir);
  };

  return (
    <div className="Home">
      <Header />
      <Aboutpg />
      <Product/>
      <Works/>
      <Contact/>
      {/* <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[#3498db]`} onClick={()=>{changeDir(ROUTES.About)}}>Go To About</button> */}
    </div>
  );
};

export default Home;
