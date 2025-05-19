import { Fragment } from "react";
import Hero from "./hero";
import About from "./about";
import Menu from "../../components/widget/our-menu";
import Instagram from "@/components/widget/instagram";
import FeedBack from "./feedback";
import Reservation from "@/components/widget/reservation";

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
