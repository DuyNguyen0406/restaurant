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

export default function MealSessions() {
  return (
    <Section.Root className="col-full-width content-grid pt-0">
      <div className="flex flex-col md:flex-row flex-1 col-content items-center justify-between">
        <div className="flex flex-1 flex-col items-center space-y-3 p-8">
          <p className="text-[22px] md:text-[30px] text-white title-font uppercase">
            Lunch
          </p>
          <p className="text-[15px] md:text-[17px] text-gray-500">
            Monday-Wednesday: 11a-9p
          </p>
          <p className="text-[15px] md:text-[17px] text-gray-500">
            Thursday-Saturday: 11a-10p
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-3 p-8 border md:border-r-brown-500 md:border-l-brown-500">
          <p className="text-[22px] md:text-[30px] text-white title-font uppercase">
            Dinner
          </p>
          <p className="text-[15px] md:text-[17px] text-gray-500">
            Dinner Monday-Sunday
          </p>
          <p className="text-[15px] md:text-[17px] text-gray-500">18p – 11p </p>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-3 p-8">
          <p className="text-[22px] md:text-[30px] text-white title-font uppercase">
            Buffet
          </p>
          <p className="text-[15px] md:text-[17px] text-gray-500">
            Lunch & Dinner Monday-Sunday
          </p>
          <p className="text-[15px] md:text-[17px] text-primary">""</p>
        </div>
      </div>
    </Section.Root>
  );
}
