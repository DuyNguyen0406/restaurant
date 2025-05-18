import { Fragment } from "react";
import Hero from "./hero";
import Menu from "./menu";
import Instagram from "../../components/widget/instagram";

function OurMenu() {
  return (
    <Fragment>
      <Hero />
      <Menu />
      <Instagram isTitle={false} />
    </Fragment>
  );
}

export default OurMenu;
