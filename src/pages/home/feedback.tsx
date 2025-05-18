import Section from "@/components/widget/section";

const testimonials = [
  {
    title: "A Symphony of Flavors",
    content:
      "The portions were generous, and the prices were reasonable. I'll be recommending this restaurant to all my foodie friends. It's a must-visit!",
    author: "Christina Hardy",
  },
  {
    title: "Where Quality Meets Perfection",
    content:
      "My recent visit to Grand Restaurant exceeded all expectations. The menu had a fantastic variety of options, and I was blown away by the quality of ingredients and presentation",
    author: "Jane Bennett",
  },
  {
    title: "A Hidden Gem!",
    content:
      "The service was impeccable, and the food was out of this world. I couldn't get enough of their signature dish, which was bursting with flavor. The staff was friendly and attentive, making our evening truly special.",
    author: "Jessica Lee",
  },
];

export default function FeedBack() {
  return (
    <Section.Root className="col-full-width content-grid pt-0 bg-primary-100">
      <div className="flex flex-col w-screen">
        <div className="text-center my-15">
          <h2 className="text-[2.5rem] lg:text-[5rem] title-font text-[#C9A581]">
            Tesimonials
          </h2>
          <p className="text-base uppercase tracking-[0.3em] text-white mt-2">
            From our customers
          </p>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row w-full justify-between gap-y-10 lg:gap-20 px-4">
          {testimonials.map(({ title, content, author }) => (
            <div key={author} className="text-center flex flex-1 flex-col">
              <p className="text-special1-font text-[32px] text-brown-500">
                {title}
              </p>
              <p className="text-[15px] text-gray-500 my-5">{content}</p>
              <p className="text-white text-[13px] uppercase">{author}</p>
            </div>
          ))}
        </div>
      </div>
    </Section.Root>
  );
}
