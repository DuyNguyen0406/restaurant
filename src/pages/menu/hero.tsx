import Section from "@/components/widget/section";
import HeroVideo from "@/assets/video/hero-first.mp4";
import Steak from "@/assets/images/png/menu-steak.png";
import Alcohol from "@/assets/images/png/menu-alcohol.png";

export default function Hero() {
  return (
    <Section.Root className="col-full-width content-grid pt-[12rem]">
      <div className="col-content flex flex-col items-center justify-center w-full max-w-[71.25rem] mx-auto">
        <h2 className="text-[2.5rem] lg:text-[5rem] title-font text-[#C9A581]">
          Our Menus
        </h2>
        <div className="flex flex-1 flex-col-reverse md:flex-row w-full gap-x-15 lg:gap-x-25 mt-15">
          <div className="flex flex-1 flex-col justify-center items-center md:items-start w-full pt-10 md:pt-0">
            <p className="text-white text-2xl uppercase">Heart of Our Bistro</p>
            <p className="text-gray-500 text-[1.0625rem] pt-5 pb-10 leading-[170%] text-center md:text-start">
              We take pride in creating an inviting atmosphere that feels like a
              home away from home. Whether you’re here for a leisurely brunch, a
              romantic dinner, or a glass of wine with friends, you’ll find that
              our warm, attentive service and cozy ambiance make every visit
              special.
            </p>
            <p className="text-[2.375rem] md:text-[4.25rem] text-brown-500 text-special1-font">
              Bistro
            </p>
          </div>
          <div className="flex flex-1  aspect-[5/6] overflow-hidden rounded-t-full">
            <video
              src={HeroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="items-center relative flex flex-1 flex-col md:flex-row w-full mt-15">
          <div className="flex flex-1 md:mr-25">
            <div className="flex flex-1 aspect-[5/6] overflow-hidden rounded-t-full">
              <img
                alt="Steak"
                src={Steak}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center md:items-start w-full pt-10 md:pt-0">
            <p className="text-gray-500 text-2xl uppercase">ESTD - 1990</p>
            <p className="text-gray-500 text-[1.0625remm] py-5 leading-[170%] text-center md:text-start">
              Our bistro is also a place where the community comes together.
              We’re proud to support local farmers, artisans, and winemakers,
              and we strive to reflect the spirit of [Your Location] in
              everything we do.
            </p>
            <p className="text-white text-[1.0625rem] leading-[170%] text-center md:text-start">
              Nestled in the heart of [Your Location], our bistro is a
              celebration of simple, elegant cuisine crafted with the freshest
              ingredients and a passion for culinary excellence.
            </p>
          </div>

          <div className="md:absolute md:bottom-0 md:right-0 w-[8.125rem] h-[12.1875rem] overflow-hidden leaf-shape  mt-6">
            <img
              src={Alcohol}
              alt="Alcohol"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
