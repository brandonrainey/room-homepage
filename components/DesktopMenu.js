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
        <a className="desktopMenuItem" onClick={handleHomeClick}>
          home
        </a>
        <div className={`${navItem === 0 ? "homeSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleShopClick}>
          shop
        </a>
        <div className={`${navItem === 1 ? "shopSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleAboutClick}>
          about
        </a>
        <div className={`${navItem === 2 ? "aboutSelected" : ""}`}></div>
      </div>
      <div className="navWrapper">
        <a className="desktopMenuItem" onClick={handleContactClick}>
          contact
        </a>
        <div className={`${navItem === 3 ? "contactSelected" : ""}`}></div>
      </div>
    </nav>
  );
}
