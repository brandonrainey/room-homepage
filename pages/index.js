import React, { useState } from "react";
import DesktopMenu from "../components/DesktopMenu";
import MobileMenu from "../components/MobileMenu";
import Head from "next/head"

export default function Home() {
  const [heroImg, setHeroImg] = useState(0);

  const [menuToggle, setMenuToggle] = useState(false);

  const textData = [
    {
      img: "hero-1",
      title: "Discover innovative ways to decorate",
      description:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      img: "hero-2",
      title: "We are available all across the globe",
      description:
        "With  stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      img: "hero-3",
      title: "Manufactured with the best materials",
      description:
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  function leftClick() {
    if (heroImg != 0) {
      setHeroImg(heroImg - 1);
    }
  }

  function rightClick() {
    if (heroImg != 2) {
      setHeroImg(heroImg + 1);
    }
  }
  return (
    <div className="mainContainer">
      <Head>
        <meta name="description" content="Room homepage."/>
        <title>room Homepage</title>
      </Head>
      {menuToggle ? (
        <MobileMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      ) : (
        ""
      )}

      <div className={`cell-1 ${textData[heroImg].img}`}>
        <div className="navIcon" onClick={() => setMenuToggle(true)}>
          <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="title">room</div>
        <DesktopMenu />
        <div className="heroNavMobile">
          <button className="leftButton" aria-label="left nav" onClick={() => leftClick()}>
            <svg
              width="14"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -10 10 40"
            >
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="rightButton" aria-label="right nav" onClick={() => rightClick()}>
            <svg
              width="14"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -10 10 40"
            >
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <section className="cell-2">
        <header className="mainHeader">{textData[heroImg].title}</header>
        <p className="description">{textData[heroImg].description}</p>
        <a className="shopButton">
          SHOP NOW
          <span>
            <svg
              width="40"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              className="arrowIcon"
            >
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </span>
        </a>
        <div className="heroNavDesktop">
          <button className="leftButton" aria-label="left nav" onClick={() => leftClick()}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 0L1 12l12 12"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className="rightButton" aria-label="right nav" onClick={() => rightClick()}>
            <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 0l12 12L1 24"
                stroke="#FFF"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="cell-3"></section>
      <section className="cell-4">
        <header className="subHeader"> ABOUT OUR FURNITURE</header>
        <p className="description">
          Our multifunctional collection blends desgin and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contenporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </section>
      <section className="cell-5"></section>
    </div>
  );
}
