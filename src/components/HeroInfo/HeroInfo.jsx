import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const HeroInfo = () => {
  const allHeroes = useSelector((store) => store.heroes);

  // useEffect(() => {

  // }, [])

  return (
    <div>
      {allHeroes.length > 0 &&
        allHeroes.map((el, i) => {
          <>
            <div key={i}></div>
            <div className="hero-img">
              <img src={el.image.url} alt="hero-img" />
            </div>
            <div className="hero-name">
                {el.name}
            </div>
          </>;
        })}
    </div>
  );
};

export default HeroInfo;
