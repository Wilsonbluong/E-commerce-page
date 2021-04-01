import React, { useState, useEffect } from "react";
import data from "./data";
import { Header, Prev, Next, Headline } from "./styles/Slider";

const Slider = () => {
  const [announcements, setAnnouncements] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = announcements.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, announcements]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <Header>
        {announcements.map((announcement, slideIndex) => {
          const { id, headline } = announcement;
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === announcement.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <Headline key={id} className={position}>
              {headline}
            </Headline>
          );
        })}
        <Prev onClick={() => setIndex(index - 1)} />
        <Next onClick={() => setIndex(index + 1)} />
      </Header>
    </>
  );
};

export default Slider;
