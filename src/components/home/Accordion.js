import React, { useState } from "react";

import "./accordion.css";

const Accordion = () => {
  const [accordingOpen1, setAccordingOpen1] = useState(false);
  const [accordingOpen2, setAccordingOpen2] = useState(false);
  const [accordingOpen3, setAccordingOpen3] = useState(false);
  const [accordingOpen4, setAccordingOpen4] = useState(false);

  const handleAccording1 = () => {
    setAccordingOpen1(!accordingOpen1);
  };
  const handleAccording2 = () => {
    setAccordingOpen2(!accordingOpen2);
  };
  const handleAccording3 = () => {
    setAccordingOpen3(!accordingOpen3);
  };

  const handleAccording4 = () => {
    setAccordingOpen4(!accordingOpen4);
  };
  return (
    <div>
      <div className="accordion">
        <div className={`item ${accordingOpen1 ? "open" : ""}`}>
          <p className="number">01</p>
          <p className="text">
            Who is the photographer and what is their background in photography?
          </p>
          <button onClick={handleAccording1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`${accordingOpen1 ? "hidden-box " : "hidden-box-none"}`}
          >
            <p>
              I am [Photographer Name], a passionate photographer specializing
              in baby and newborn photography. With [number of years] years of
              experience, I have a unique approach to capturing memories through
              my lens.
            </p>
            <ul>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>

        <div className={`item ${accordingOpen2 ? "open" : ""}`}>
          <p className="number">02</p>
          <p className="text">
            What type of photography services do we offer (e.g. baby, newborn,
            family, event, etc.)?
          </p>
          <button onClick={handleAccording2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`${accordingOpen2 ? "hidden-box " : "hidden-box-none"}`}
          >
            <p>
              I offer a wide range of photography services, including baby and
              newborn photography, family photography, and event photography. My
              goal is to create timeless, beautiful images that will bring joy
              for years to come.
            </p>
            <ul>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>

        <div className={`item ${accordingOpen3 ? "open" : ""}`}>
          <p className="number">03</p>
          <p className="text">
            What is our approach to capturing memories through photography?
          </p>
          <button onClick={handleAccording3}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`${accordingOpen3 ? "hidden-box " : "hidden-box-none"}`}
          >
            <p>
              What sets my photography apart is my focus on creating unique
              themes and designs. From Halloween to winter, desert to new year,
              I have a wide range of themes to choose from. I also have a
              special talent for capturing the innocence and beauty of newborn
              babies, making each photo session truly special and memorable.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
            </ul>
          </div>
        </div>

        <div className={`item ${accordingOpen4 ? "open" : ""}`}>
          <p className="number">04</p>
          <p className="text">
            Do we have any specialties or unique themes they focus on?
          </p>
          <button onClick={handleAccording4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`${accordingOpen4 ? "hidden-box " : "hidden-box-none"}`}
          >
            <p>
              What sets my photography apart is my focus on creating unique
              themes and designs. From Halloween to winter, desert to new year,
              I have a wide range of themes to choose from. I also have a
              special talent for capturing the innocence and beauty of newborn
              babies, making each photo session truly special and memorable.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
