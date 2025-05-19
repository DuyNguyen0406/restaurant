import { Fragment } from "react";
import Hero from "./hero";
import Menu from "../../components/widget/our-menu";
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
