import Section from "@/components/widget/section";
import ImageBookTable from "@/assets/images/png/book-table.png";
import ContactForm from "../../pages/home/contact-form";

export default function Reservation() {
  return (
    <Section.Root className="col-full-width content-grid bg-primary-100">
      <div className="col-content h-full w-full">
        <div className="flex flex-1 flex-col lg:flex-row w-full h-full">
          <div className="flex flex-1 justify-center items-center ">
            <div className="max-w-[28.5rem] max-h-[42.5rem] rounded-t-full overflow-hidden">
              <img
                src={ImageBookTable}
                alt="imageBookTable"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col w-full h-full bg-cover lg:px-10">
            <h2 className="text-[2.8125rem] lg:text-[3.75rem] text-brown-500 title-font">
              Make a Reservation
            </h2>
            <ContactForm />
            <div className="mt-15 space-y-5 flex flex-col items-center lg:items-start">
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
