import NavBar from "./NavBar";
import Header from "./Header";
import About from "./About";
import Collection from "./Collection";
import FindUs from "./FindUs";
import Contact from "./Contact";
import { Element } from "react-scroll";
import React from "react";
import BNavBar from "./BNavBar";

const components = [
  [Header, "Home"],
  [About, "About"],
  [Collection, "Products"],
  [FindUs, "Find Us"],
  [Contact, "Contact Us"],
  [BNavBar, "Bottom Nav Bar"],
];
export default class PageSetup extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <NavBar />
        {components.map(([Comp, name], index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-r m-6">
              <Element name={name}>
                <Comp />
              </Element>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
