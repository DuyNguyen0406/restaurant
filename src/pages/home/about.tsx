import Section from "@/components/widget/section";
import Chef from "@/assets/images/png/about-chef.png";
import ChefSignature from "@/assets/images/png/about-chef-signature.png";
const About = () => {
  return (
    <Section.Root
      id="about"
      className="col-full-width content-grid py-0 lg:pt-20 pb-0"
    >
      <div className="flex justify-center items-center flex-1 flex-row bg-primary-100 col-full-width h-full lg:h-8/10 py-15 lg:py-0">
        <div className="col-content overflow-hidden">
          <div className="flex flex-col md:flex-row gap-x-16 items-center">
            <div className="overflow-hidden flex flex-[0.45] lg:rounded-tl-[15.625rem] lg:rounded-br-[15.625rem] rounded-tl-[9.375rem] rounded-br-[9.375rem]">
              <img
                src={Chef}
                alt="Chef Jose Osuna"
                className="w-full h-full bg-cover bg-center"
              />
            </div>

            <div className="flex flex-[0.55] flex-col">
              <p className="text-end md:text-center -rotate-15 text-brown-500 text-special-font text-[2rem] lg:text-[4.5rem] italic mt-6 lg:mt-0">
                Jose Osuna
              </p>
              <h2 className="title-font text-brown-500 text-center md:text-start text-[2.5rem] md:text-[4.375rem]">
                <span className="inline md:block">Jose</span>
                <span className="inline md:block"> Osuna</span>
              </h2>

              <div className="mt-4">
                <p className="text-white w-full lg:w-[70%] text-[1.0625rem] leading-7 text-center md:text-start">
                  We take pride in creating an inviting atmosphere that feels
                  like a home away from home. Whether you’re here for a
                  leisurely brunch, a romantic dinner, or a glass of wine with
                  friends, you’ll find that our warm, attentive service and cozy
                  ambiance make every visit special.
                </p>
              </div>
              <div className="text-center md:text-right pt-[1.875rem] md:pr-[1.875rem]">
                <img
                  src={ChefSignature}
                  alt="Chef signature"
                  className="inline-block max-w-[12.5rem] rounded-bl-[3.125rem] rounded-tr-[3.125rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
};

export default About;
