import React, { useState } from "react";

export default function DesktopMenu() {
  const [navItem, setNavItem] = useState();

  function handleHomeClick() {
    if (navItem === 0) {
      setNavItem("");
    } else {
      setNavItem(0);
    }
  }

  function handleShopClick() {
    if (navItem === 1) {
      setNavItem("");
    } else {
      setNavItem(1);
    }
  }

  function handleAboutClick() {
    if (navItem === 2) {
      setNavItem("");
    } else {
      setNavItem(2);
    }
  }

  function handleContactClick() {
    if (navItem === 3) {
      setNavItem("");
    } else {
      setNavItem(3);
    }
  }

  return (
    <nav className="desktopMenu">
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleHomeClick} href='https://the-room-homepage.netlify.app/'>
          Home-Mac
        </a>
        <div className={`${navItem === 0 ? "homeSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleShopClick} href='https://the-room-homepage.netlify.app/'>
          About-Mac
        </a>
        <div className={`${navItem === 1 ? "shopSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleAboutClick} href='https://the-room-homepage.netlify.app/'>
          Shop-Mac
        </a>
        <div className={`${navItem === 2 ? "aboutSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleContactClick} href='https://the-room-homepage.netlify.app/'>
          Contact-Mac
        </a>
        <div className={`${navItem === 3 ? "contactSelected" : ""}`}></div>
      </div>
    </nav>
  );
}
