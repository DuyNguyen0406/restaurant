import { Fragment } from "react";
import Hero from "./hero";
import Menu from "../home/menu";
import Reservation from "./reservation";

function About() {
  return (
    <Fragment>
      <Hero />
      <Menu />
      <Reservation />
    </Fragment>
  );
}

export default About;
