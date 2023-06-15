"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavigationBar() {
  const [activeBurger, setActiveBurger] = useState(false);

  const handleClick = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <nav className={"navbar is-fixed-top is-dark is-spaced"}>
      <div className={"container"}>
        <div className={"navbar-brand"}>
          <NavigationBarItem itemName={"webdevfor.me"} itemLink={""} />
          <span className={"tag is-primary navbar-item"}>DEMO</span>
          <button
            className={`navbar-burger${activeBurger ? " is-active" : ""}`}
            onClick={handleClick}
            style={{ position: "absolute", right: 0 }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id={"navigationBar"}
          className={`navbar-menu ${activeBurger ? "is-active" : ""}`}
        >
          <div className={"navbar-start"}>
            <NavigationBarItem itemName={"Home"} itemLink={"/"} />
            <NavigationBarItem itemName={"About Me"} itemLink={"about"} />
            <NavigationBarItem itemName={"Contact"} itemLink={"contact"} />
            <NavigationBarItem itemName={"Learn"} itemLink={"learn/intro"} otherClassNames={"has-text-info"} />
          </div>
          <div className="navbar-end">
            <NavigationBarItem itemName={"Sign in"} itemLink={""} />
            <NavigationBarItem itemName={"Sign up"} itemLink={""} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavigationBarItem({
  itemName,
  itemLink,
  otherClassNames,
}: {
  itemName: string;
  itemLink: string;
  otherClassNames?: string;
}) {
  return (
    <Link href={`/${itemLink}`} className={"navbar-item" + (otherClassNames ? ` ${otherClassNames}` : "")}>
      {itemName}
    </Link>
  );
}
