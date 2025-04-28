import React from "react";
import InfiniteCarousel from "./InfiniteCarousel/page";
import style from "./style/navbar.module.css"
import HomePage from './InfiniteCarousel/HomePage'
import ThirdSectionHome from "./InfiniteCarousel/ThirdSectionHome"
import FourtSectionHome from "./InfiniteCarousel/FourthSectionHome"


function App() {
  const images = [
    "https://framerusercontent.com/images/Hcq4K69d3mLl5hwv8OXQtByw1VM.png",
    "https://framerusercontent.com/images/crnRqzkJHOgjPfLLMKFdd664r8.png",
    "https://framerusercontent.com/images/Hcq4K69d3mLl5hwv8OXQtByw1VM.png",
    "https://framerusercontent.com/images/crnRqzkJHOgjPfLLMKFdd664r8.png",
    "https://framerusercontent.com/images/KgaaHCfaCZtWMJvLIKKu7lw3Gw.png",
    "https://framerusercontent.com/images/EoXL7HjnVqVnwfKrhEXl69s.png",
  ];

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", background:"black", position:"relative" ,zIndex:-1 }}>
      <InfiniteCarousel images={images} direction="left" speed={20} />
      <InfiniteCarousel images={images} direction="right" speed={25} />
      <InfiniteCarousel images={images} direction="left" speed={30} />
      <InfiniteCarousel images={images} direction="right" speed={35} />
    </div>
   
    <div className={style.top_content }>
      <p className={style.sharkTank}>Went to Shark Tank America</p>
      <div className={style.first_marting}>
        <p>India's first.
        Marketing School</p>
      </div>
      <p className={style.zero}>Zero classes, only challenges</p>
      <div className={style.apply_placement}>
        <button className={style.apply_btn}>Apply now</button>
        <p className={style.download_report}>Download placement report  <span><i className="fa-solid fa-arrow-right"></i></span> </p>
      </div>
      <p className={style.svg_handpiking}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    focusable="false"
    color="var(--token-b180feb0-2545-4848-a97b-fd8cf92292c7, rgb(146, 150, 159))"
    width={24}  
    height={24} 
    fill="var(--token-b180feb0-2545-4848-a97b-fd8cf92292c7, rgb(146, 150, 159))"
  >
    <g color="var(--token-b180feb0-2545-4848-a97b-fd8cf92292c7, rgb(146, 150, 159))">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
    </g>
  </svg>
  Handpicking 40 Folks
</p>

    </div>
    <HomePage/>
    <ThirdSectionHome/>
    <FourtSectionHome />
    </>
  );
}

export default App;
