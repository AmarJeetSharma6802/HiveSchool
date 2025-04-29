"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "../style/home.module.css";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const wordsRef = useRef([]);
  const placementRef = useRef([]);
  const triggerRef1 = useRef(null);
  const triggerRef2 = useRef(null);

  const words = ["HiveSchool", "in", "Shark", "Tank", "India", "Season - 4"];
  const placement = ["P", "l", "a", "c", "e", "m", "e", "n", "t", " ", "R", "e", "p", "o", "r", "t"];

  useLayoutEffect(() => {
    const animateWords = (targets, trigger) => {
      gsap.set(targets, { opacity: 0, filter: "blur(10px)" });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        stagger: { amount: 0.5, ease: "power1.out" },
        scrollTrigger: {
          trigger: trigger,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    };

    animateWords(wordsRef.current, triggerRef1.current);
    animateWords(placementRef.current, triggerRef2.current);
  }, []);

  return (
    <>
      {/* === Shark Tank Section === */}
      <div className={style.waveText}>
        <div className={style.wave_text_width}>
          <div>
            <div ref={triggerRef1} className={style.wave_text}>
              {words.map((w, i) => (
                <span
                  key={i}
                  ref={(el) => (wordsRef.current[i] = el)}
                  className={`${style.word} ${w === "Season - 4" ? style.yellowText : ""}`}
                >
                  {w}
                </span>
              ))}
            </div>
            <p className={style.wevetext_para}>
              Hiveschool proudly stands as the only Indian B-school that has gone
              to Shark Tank India, showcasing its innovative approach to education
              and entrepreneurship on a national stage.
            </p>
          </div>

          <div className={style.sharkTank_img}>
            <img
              src="https://framerusercontent.com/images/xkDc3LvvQUJANZtwZu2v7FB80.png"
              alt=""
            />
          </div>
          <div className={style.sharkTank_img}>
            <img
              src="https://framerusercontent.com/images/EoXL7HjnVqVnwfKrhEXl69s.png"
              alt=""
            />
          </div>
          <div className={style.sharkTank_img}>
            <img
              src="https://framerusercontent.com/images/fzAUG4yIefrScqWPpNEllyxmxe8.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* === Placement Report Section === */}
      <div className={style.placement_report}>
        <div className={style.placemnet_top_space}>
        <div className={style.placemnet_report_flex}>
        <div ref={triggerRef2} className={style.child_Report_flex_left}>
          {placement.map((char, i) => (
            <span
              key={i}
              ref={(el) => (placementRef.current[i] = el)}
              className={`${style.word} ${style.words}`}
            >
              {char}
            </span>
          ))}
          <p className={style.placement_para}>Gain insights into career trajectories, success stories, and real outcomes that showcase our impact!</p>
          <button className={style.placement_view_now}>View Now <span><i className="fa-solid fa-arrow-right"></i></span></button>
        </div>
        <div className={style.child_Report_flex_right}>
          <img src="https://framerusercontent.com/images/KgaaHCfaCZtWMJvLIKKu7lw3Gw.png" alt="" className={style.placement_img} />
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
