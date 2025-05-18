import Section from "@/components/widget/section";
import Logo from "@/assets/images/logo.png";

const scheduleData = [
  {
    title: "Lunch",
    lines: ["Monday-Wednesday: 11a-9p", "Thursday-Saturday: 11a-10p"],
    isMiddle: false,
  },
  {
    title: "Dinner",
    lines: ["Dinner Monday-Sunday", "18p – 11p"],
    isMiddle: true,
  },
  {
    title: "Buffet",
    lines: ["Lunch & Dinner Monday-Sunday", '""'],
    isMiddle: false,
    lastLinePrimary: true,
  },
];

export default function Footer() {
  return (
    <Section.Root className="col-full-width content-grid">
      <div className="flex flex-col flex-1 col-content">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {scheduleData.map((item) => (
            <div
              key={item.title}
              className={`flex flex-1 flex-col items-center space-y-3 p-8 border-b border-b-brown-500 w-full
                ${
                  item.isMiddle
                    ? "md:border-x md:border-x-brown-500 md:border-b-0"
                    : "md:border-none"
                }
              `}
            >
              <p className="text-[22px] md:text-[1.875rem] text-white title-font uppercase">
                {item.title}
              </p>
              {item.lines.map((line, i) => (
                <p
                  key={i}
                  className={`text-[0.9375rem] md:text-[1.0625remm] ${
                    item.lastLinePrimary && i === item.lines.length - 1
                      ? "text-primary"
                      : "text-gray-500"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-center w-full my-6">
          <div className="flex-grow border-t border-brown-500" />
          <img
            src={Logo}
            alt="Logo"
            className="md:w-[10.625rem] md:h-[3.375rem] w-[8.125rem] h-[2.5625rem] mx-6"
          />
          <div className="flex-grow border-t border-brown-500" />
        </div>

        <div className="flex flex-col md:flex-row flex-1 items-center justify-between mt-2 space-y-2">
          <p className="text-gray-500 text-sm md:text-base">
            © Grand Restaurant WordPress theme
          </p>
          <p className="text-gray-500 text-sm md:text-base">
            A WordPress theme by ThemeGoods
          </p>
        </div>
      </div>
    </Section.Root>
  );
}
