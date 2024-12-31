import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Food Delivery App",
    img: "/food.png",
    desc: "I used HTML SCSS and Javascript Tailwind and Context API for state management.",
    link: "https://01d241fb.fooddelivery-9aw.pages.dev/",
  },
  {
    id: 2,
    title: "React Evo Gym App",
    img: "/evogym.png",
    desc: "I used HTML - SCSS - Typescript - Tailwind",
    link: "https://evogym-5bm.pages.dev/",
  },
  {
    id: 3,
    title: "React GPT-3 App",
    img: "/gpt-3.png",
    desc: "I apply design from figma design to HTML - SCSS - Javascript - Tailwind",
    link: "https://chtgpt3.surge.sh/",
  },
  {
    id: 4,
    title: "React Hotel App",
    img: "/hotels.png",
    desc: "I link this app with firebase ",
    link: "https://firebasehotel.surge.sh/",
  },
  {
    id: 5,
    title: "Next Car Store App",
    img: "/carstore.png",
    desc: "I used Typescript - RapidAPI - ImaginAPI - Next framework - Headless UI - Tailwind ",
    link: "https://car-store-next.pages.dev/",
  },
  {
    id: 6,
    title: "Angular Cash App",
    img: "/cashbox.png",
    desc: "I was working with team on this project, backend and frontend, I was working on frontend with my teammate At BA Company",
    link: "https://cashbox.ba-tech.tech/login",
  },
  {
    id: 7,
    title: "HR Project (Private)",
    img: "/1.png",
    desc: "I was working with team on this project, backend and frontend, I was working on frontend with my teammate At BA Company, using (Angular - Ngrx - Rxjs - Multi Language - Velzon - SignalR - Bootstrap - SCSS) ",
    link: "https://drive.google.com/drive/folders/1w35D6HDPVdY3bJh5rHFSMs9QIx3jjwXo?usp=drive_link",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
