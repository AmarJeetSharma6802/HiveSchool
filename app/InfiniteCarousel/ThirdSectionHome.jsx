"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import style from "../style/home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
function ThirdSectionHome() {
  const logos = [
    "https://framerusercontent.com/images/Crvkg6AlDq3ralxdCLcy1lpBQdQ.png",
    "https://framerusercontent.com/images/xGulU8k9K62HptlLA4XghjQ3g.png",
    "https://framerusercontent.com/images/M5HEP0Zcf3uMXHeYUqlejOnmkw.png",
    "https://framerusercontent.com/images/oBwcB0qKne7hxdm5CPSSCOPJI8E.png",
    "https://framerusercontent.com/images/HLXSRKlsOUzXCOdBhZtLIFjJ4.png",
    "https://framerusercontent.com/images/oBwcB0qKne7hxdm5CPSSCOPJI8E.png",
    "https://framerusercontent.com/images/HLXSRKlsOUzXCOdBhZtLIFjJ4.png",
    "https://framerusercontent.com/images/Crvkg6AlDq3ralxdCLcy1lpBQdQ.png",
  ];
  const logo = [
    "https://framerusercontent.com/images/ZSX4H39iRoMPInmwfIrrf7jGotc.png",
    "https://framerusercontent.com/images/P21FPBoD4EftMmWWA4tjnHMrh50.png",
    "https://framerusercontent.com/images/smArzSxCnZhjnJpLCpQuqueuNw.jpg",
    "https://framerusercontent.com/images/CS7yCUBCBzxF26W0smxVG0nBvXQ.png",
    "https://framerusercontent.com/images/E9jfdCTBukB0imaoXZ2LuSLyg4.png",
    "https://framerusercontent.com/images/v0Hm6EU28c7T2eObH3vH42Nmm7E.jpg",
    "https://framerusercontent.com/images/v9Cz3Va4UIKGTy3eEPI4De8fjU.png",
    "https://framerusercontent.com/images/coti5Qu1PLCfFyge1P6vBou8R0g.png"
   
  ];
  const tags = [
    "Founding BDR's",
    "Founder's Office",
    "Growth and Revenue",
    "Demand & Growth Specialist",
    "Partnerships Specialist",
    "Founding Team",
  ];

  const scores = [
    { value: "15.3 LPA", label: "Average Package" },
    { value: "30 LPA",   label: "Highest Package" },
    { value: "15 LPA",   label: "Median Package" },
  ];
  const scoreRefs = useRef([]);
  const scoreTrigger = useRef(null);

  useLayoutEffect(() => {
    // initial state
    gsap.set(scoreRefs.current, {
      opacity: 0,
    //   y: 40,
      filter: "blur(10px)",
    });

    // animation
    gsap.to(scoreRefs.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.6,
      stagger: { amount: 0.6, ease: "power1.out" },
      scrollTrigger: {
        trigger: scoreTrigger.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);
  return (
    <>
      <div className={style.third_Section_home}>
        <div className={style.third_Section_home_center}>
        <div className={style.third_Section_home_left}>
          <div className={style.career_success}>
            <p className={style.career_success_para}>
              <span>Fast Track </span>your career to success
            </p>
          </div>
          <div ref={scoreTrigger} className={style.placementScore}>
        {scores.map((s, i) => (
          <div
            key={i}
            ref={(el) => (scoreRefs.current[i] = el)}
            className={`${style.scoreItem} ${i === 1 ? style.bordered : ""} `}
          >
            <p className={style.scoreValue}>{s.value}</p>
            <p className={`${style.scoreLabel} ${i ===1 ? style.bgGold :""}`}>{s.label}</p>
          </div>
        ))}
      </div>
          <div className={style.scrollerSection}>
            {/* First Line */}
            <div className={style.scrollerWrapper}>
              <div className={style.scroller}>
                {logos.map((logo, index) => (
                  <div key={`first1-${index}`} className={style.logoContainer}>
                    <Image src={logo} alt="Logo" width={100} height={100} className={style.third_section_Home_logo_img} />
                  </div>
                ))}
                {logos.map((logo, index) => (
                  <div key={`second1-${index}`} className={style.logoContainer}>
                    <Image src={logo} alt="Logo" width={100} height={100}  className={style.third_section_Home_logo_img} />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Line */}
            <div className={style.scrollerWrapper}>
              <div className={`${style.scroller} ${style.reverse}`}>
                {logo.map((logo, index) => (
                  <div key={`first2-${index}`} className={style.logoContainer}>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                  </div>
                ))}
                {logo.map((logo, index) => (
                  <div key={`second2-${index}`} className={style.logoContainer}>
                    <Image src={logo} alt="Logo" width={100} height={100} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={style.third_Section_home_right}>
          <p className={style.third_Section_home_right_para}>
            Experience one-on-one mentorship, coaching and guidance from <span> CXO’s
            across industries.</span>
          </p>
          <div className={style.iframe_third_setion}>
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/1bunBze83QM?si=eXgFvv7QXiIOCxVd"
            title="YouTube video player"
            frameBorder="0" // CamelCase
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" // CamelCase
            allowFullScreen // Boolean prop
          />
          </div>
        </div>

       
      </div>
      <div className={style.tags_center}>
      <div className={style.scrollerWrapperTag}>
      <div className={style.scrollerTag}>
        {[...tags, ...tags].map((tag, idx) => (
          <span key={idx} className={style.tag}>
            {tag}
          </span>
        ))}
      </div>
      </div>
    </div>
      </div>
      
    </>
  );
}

export default ThirdSectionHome;
