"use client"
import React, { useState } from "react";
import style from "../style/navbar.module.css";

function Navbar() {
  const [activeNav,setNavActive] = useState(false)
  const handleNav =()=>{
    setNavActive( prev => !prev)
  }
  return (
    <div>
      <header className={style.header}>
        <label className={style.label}>
          <img
            src="https://framerusercontent.com/images/uDWOSo0lmeOFjXxWs5p1H3zfmBw.png?scale-down-to=512"
            className={style.Logo_img}
          />
        </label>
        <nav className={style.navbar}>
          <ul className={`${style.navbar_ul} ${activeNav ? `${style.active}`:""}`}>
            <li className={`${style.navbar_li} ${style.navbar_li_hover}`}>
              <a href="#">Offline PGP Program</a>
              <div className={style.inner_ofline_div}>
                <div className={style.inner_offline_flex_div}>
                  <ul className={style.inner_offline_flex_div_ul}>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p className={style.span_name}>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          color="rgb(255, 255, 255)"
                          fill="rgb(255, 255, 255)"
                          width={34}
                          height={34}
                        >
                          <g color="rgb(255, 255, 255)" weight="bold">
                            <path d="M228,128a12,12,0,0,1-12,12H128a12,12,0,0,1,0-34h88A12,12,0,0,1,228,128ZM128,76h88a12,12,0,0,0,0-34H128a12,12,0,0,0,0,34Zm88,104H128a12,12,0,0,0,0,34h88a12,12,0,0,0,0-34ZM79.51,39.51,56,63l-7.51-7.52a12,12,0,0,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Zm0,64L56,127l-7.51-7.52a12,12,0,1,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Zm0,64L56,191l-7.51-7.52a12,12,0,1,0-17,17l16,16a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Z" />
                          </g>
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={`${style.inner_offline_flex_div} ${style.inner_offline_flex_div_iframe}`}>
                  <div className={style.inner_offline_flex_div_video}>
                    <p>Check out the new Hive Campus</p>
                    <p>Watech</p>
                  </div>
                  <iframe
                    width="280"
                    className={style.iframe}
                    height="200"
                    src="https://www.youtube.com/embed/zsSW_duvUA0?si=H6-TKqWr3v0Tiy1_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </li>
            <li className={`${style.navbar_li} ${style.navbar_li_hover}`}>
              <a href="">Online Launchpad Program</a>
              <div className={style.inner_ofline_div}>
                <div className={style.inner_offline_flex_div}>
                  <ul className={style.inner_offline_flex_div_ul}>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                    <li className={style.inner_offline_flex_div_ul_li}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          className={style.icon}
                          width={34}
                          height={34}
                        >
                          <path
                            fill="white"
                            d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H234a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.34,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-34H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,34,0V60.8A92,92,0,0,1,215.66,134H200a12,12,0,0,0,0,34h19.9c.06,1.33.1,2.66.1,4Z"
                          />
                        </svg>
                      </span>
                      <span>
                        <p>Highlights</p>
                        <p className={style.moblie_view_hide}>Duration, Cohort Size & More</p>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={`${style.inner_offline_flex_div} ${style.inner_offline_flex_div_iframe}`}>
                  <div className={style.inner_offline_flex_div_video}>
                    <p>Check out the new Hive Campus</p>
                    <p>Watech</p>
                  </div>
                  <iframe
                    width="280"
                    height="200"
                    src="https://www.youtube.com/embed/yWVCLWHGvGI?si=bh_ETl1IIzWPH7AD"
                    title="YouTube video player"
                    frameBorder="0" // ✅ Correct camelCase for JSX
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </li>
            
            <li className={`${style.navbar_li} ${style.navbar_li_hide}`}>
              <a href="">Career</a>
            </li>
            <li className={`${style.navbar_li} ${style.navbar_li_hide}`}>
              <a href="">Alumni</a>
            </li>
            <div className={style.nav_li_moblie_view}>
            <a href="">Career</a>
            <a href="">Alumni</a>
            </div>
          </ul>
        </nav>
        <div className={style.navbar_button}>
          <button className={style.startBtn}> Start your journey</button>
          <button className={style.navbar_button_icon} onClick={handleNav}>
           {activeNav ?   <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
