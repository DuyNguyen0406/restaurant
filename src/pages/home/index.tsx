import { Fragment } from "react";
import Hero from "./hero";
import About from "./about";
import Menu from "./menu";
import Instagram from "./instagram";
import FeedBack from "./feedback";
import Reservation from "./reservation";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Menu />
      <Instagram />
      <FeedBack />
      <Reservation />
    </Fragment>
  );
}

export default HomePage;
