import Section from "@/components/widget/section";
import ImageBookTable from "@/assets/images/png/book-table.png";
import ContactForm from "../../pages/home/contact-form";
import { Github, LinkedIn, Slack, Twitter } from "@/components/icons";

const socials = [
  {
    label: "linked in",
    icon: <LinkedIn className="text-gray-500" />,
    href: "",
  },
  {
    label: "twitter",
    icon: <Twitter className="text-gray-500" />,
    href: "",
  },
  {
    label: "github",
    icon: <Github className="text-gray-500" />,
    href: "",
  },
  {
    label: "slack",
    icon: <Slack className="text-gray-500" />,
    href: "",
  },
];

export default function Reservation() {
  return (
    <Section.Root className="col-full-width content-grid py-0">
      <div className="col-content h-full w-full">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex flex-1 w-full h-[18.75rem] md:h-auto">
            <img
              src={ImageBookTable}
              alt="imageBookTable"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col w-full h-full bg-cover pt-15 lg:pt-[220px] lg:px-10">
            <h2 className="text-[2.5rem] md:text-[3.125rem] lg:text-[5rem] text-brown-500 title-font">
              Make a Reservation
            </h2>
            <ContactForm />
            <div className="mt-15 space-y-5 flex flex-col items-center lg:items-start">
              <p className="text-sm text-white">Follow Us</p>
              <div className="flex flex-row gap-x-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className={`flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-sm text-white">Reservation by Phone</p>
              <div>
                <p className="text-[2.5rem] lg:text-[3.125rem] text-gray-500 title-font leading-none">
                  +56 3435 8936
                </p>
                <p className="text-[2.5rem] lg:text-[3.125rem] text-gray-500 title-font leading-none">
                  +56 3435 8937
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
