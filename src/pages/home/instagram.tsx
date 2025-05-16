import Section from "@/components/widget/section";
import InstagramOne from "@/assets/images/png/instagram-one.png";
import InstagramTwo from "@/assets/images/png/instagram-two.png";
import InstagramThree from "@/assets/images/png/instagram-three.png";
import InstagramFour from "@/assets/images/png/instagram-four.png";
import InstagramFive from "@/assets/images/png/instagram-five.png";
import InstagramSix from "@/assets/images/png/instagram-six.png";

const images = [
  InstagramOne,
  InstagramTwo,
  InstagramThree,
  InstagramFour,
  InstagramFive,
  InstagramSix,
];

export default function Instagram() {
  return (
    <Section.Root className="col-full-width content-grid pt-0 bg-primary-100">
      <div className="col-content place-items-center">
        <div className="text-center my-15">
          <h2 className="text-[40px] lg:text-[80px] title-font text-[#C9A581]">
            Instagram
          </h2>

          <p className="text-base uppercase tracking-[0.3em] text-white mt-2">
            @GrandRestaurant
          </p>
        </div>

        <div className="w-full mt-10">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-10 w-max">
              {images.map((src, index) => (
                <div
                  className="w-[200px] h-[300px] rounded-t-[9999px] overflow-hidden bg-amber-300"
                  key={index}
                >
                  <img
                    key={index}
                    src={src}
                    alt={`Instagram ${index + 1}`}
                    className="object-cover w-full h-full bg-amber-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
