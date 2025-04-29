import React from "react";
import style from "../style/home.module.css"
import Image from "next/image";
import { img, span } from "framer-motion/client";

function FourthSectionHome() {
  const challageImage = [
   {
    img:"https://framerusercontent.com/images/76FoyBk1A3qUYnyCXAyYHkC8iwQ.png",
    p1:"Salespreneur:",
    p2:"HiveSchool’s Shark Tank",
    p3:"Turn your ideas into reality and pitch to ",
    p4:"50+ Sales leaders, VCs & Angel Investors",
    challange:"Challange 1"
   },
   {
    img:"https://framerusercontent.com/images/lZK5IBAunfJrpkUaJJf6AtJqHAA.png",
    p1:"Founder’s Statement:",
    p2:"Solve for Founders",
    p3:"How do I expand my business in the US Market? ",
    p4:"Build an entire GTM strategy around this.",
    p5:"Go on the field, research and come up with the most viable solution.",
    challange:"Challange 2 "
   },
   {
    img:"https://framerusercontent.com/images/ACAnIjSEr9KwxWWreIz9wTKsyA.png",
    p1:"HiveSchool Squid Game:",
    p2:"The last team standing",
   p:"Imagine a",
   span:"3 Days Hackathon.",
   span2:"you hardly sleep. With each round, teams get eliminated. The last team standing wins.",
    challange:"Challange 3"
   },
  ]
  return (
    <>
      <div className={style.fourth_section_Home}>
        <div className={style.three_Box}>
          <p className={style.offline_box}>Offline</p>
          <div className={style.BOx}>
            <div className={style.boxcontent}>
              <div className={style.box_content_iframe}>
                <iframe
                  width="400"
                  height="280"
                  src="https://www.youtube.com/embed/Q_2uGbe7mOY?si=zepclEXpEgCIJO25"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className={style.box_content_details}>
                <div className={style.Entrepreneurship}>
                <p>PGP: Sales , tech & Entrepreneurship</p>
                <button className={style.new_btn}>New</button>
                </div>
                <div className={style.duration_months}>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Location: Gurugram</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                </div>
                <button className={style.box_apply}>Apply now <span>↗</span></button>
              </div>
            </div>
          </div>
          <div className={style.BOx}>
            <div className={style.boxcontent}>
              <div className={style.box_content_iframe}>
                <iframe
                  width="400"
                  height="280"
                  src="https://www.youtube.com/embed/Q_2uGbe7mOY?si=zepclEXpEgCIJO25"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className={style.box_content_details}>
                <div className={style.Entrepreneurship}>
                <p>PGP: Sales , tech & Entrepreneurship</p>
                <button className={style.new_btn}>New</button>
                </div>
                <div className={style.duration_months}>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Location: Gurugram</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                    <p className={style.duratio_para}><span><i className="fa-solid fa-check"></i></span>Duration: 9 Months</p>
                </div>
                <button className={style.box_apply}>Apply now <span>↗</span></button>
              </div>
            </div>
          </div>
          <div className={style.BOx_form}>
            <div className={style.box_apply_form_content}>
            <p>Need Assistance? </p>
            <p>Contact us directly</p>
            </div>
            <form className={style.box_apply_form}>
              <label htmlFor="" className={style.box_apply_label}>Name</label>
              <input type="text" placeholder="enter your name" className={style.box_apply_input} />
              <label htmlFor="" className={style.box_apply_label}>Phone</label>
              <input type="text" placeholder="enter your phone number" className={style.box_apply_input}/>
              <button className={style.BOx_form_btn}> Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className={style.challenge}>
        <div className={style.challenge_center}>
          <p className={style.challenge_para}>Learn uniquely with a <span> zero classes</span> approach</p>
          <p className={style.challenge_para_second}>No lectures, just real world challenges</p>
          <div className={style.challange_three}>
            <p className={style.Persona_para}>Build Founder’s Persona</p>
            <p className={style.Persona_para_second}>Challenge 1  <span><i className="fa-solid fa-arrow-right"></i></span> 3</p>
          </div>
          <div className={style.challlange_flex_box}>
            {
              challageImage.map((item, index) => {
                return (
                  <div key={index} className={style.boxes}>
                    <Image src={item.img} width={200} height={200} alt="Challenge Image" className={style.boxes_img} />
                   <div className={style.boxes_para_p1_p2}>
                   <p className={style.boxes_para_p1_p2_blue}>{item.p1}</p>
                   <p className={style.boxes_para_p1_p2_second}>{item.p2}</p>
                   </div>
                   <p className={style.boxes_para_p3_p4_p5}>{item.p3}</p>
                   <p className={style.boxes_para_p3_p4_p5_second}>{item.p4} <span className={style.boxes_para_p3_p4_p5}>{item.p5}</span> <span>{item.p6}</span></p>
                   <p className={style.boxes_para_p3_p4_p5_second_span}>{item.p} <span className={style.boxes_para_p3_p4_p5_second_span_white}>{item.span}</span> <span>{item.span2}</span> </p>
                   <p className={style.challange_postion_Top}>{item.challange}</p>
                  </div>
                )
              })
            }
          </div> 
        </div>
      </div>
    </>
  );
}

export default FourthSectionHome;
