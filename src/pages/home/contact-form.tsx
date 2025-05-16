import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/form";
import { Button } from "@/components/ui";
import { FormField } from "@/components/form/form-field";

const schema = z.object({
  name: z.string().min(1, "Please fill out this field."),
  email: z
    .string()
    .min(1, "Please enter an email address.")
    .email("Invalid email address."),

  phone: z.string().optional(),
  eventType: z.string().optional(),
  guests: z.string().optional(),
  date: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function ReservationForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <FormField control={control} name="name" label="Your name">
          <Input />
        </FormField>

        <FormField control={control} name="email" label="Your email">
          <Input />
        </FormField>

        <FormField control={control} name="phone" label="Phone Number">
          <Input />
        </FormField>

        <FormField control={control} name="eventType" label="Type of Event">
          <select className="w-full bg-transparent border border-gray-600 focus:ring-brown-500 focus:ring text-white px-4 h-12 appearance-none text-start focus:outline-none">
            <option value="">— Please choose an option —</option>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
          </select>
        </FormField>

        <FormField control={control} name="guests" label="Number of Guests">
          <select className="w-full bg-transparent border border-gray-600 focus:ring-brown-500 focus:ring text-white px-4 h-12 appearance-none text-start focus:outline-none">
            <option value="">— Please choose an option —</option>
            <option value="1-10">1-10</option>
            <option value="11-20">11-20</option>
          </select>
        </FormField>

        <FormField control={control} name="date" label="Date of Event">
          <Input type="date" className="text-white" />
        </FormField>
      </div>
      <div className="mt-8">
        <Button
          type="submit"
          className="border border-brown-500 px-6 py-2 text-white uppercase cursor-pointer rounded-none"
        >
          Submit
        </Button>
      </div>
      {isSubmitted && Object.keys(errors).length > 0 && (
        <p className="text-gray-500 text-[17px] px-4 py-2 mt-4 border border-brown-600">
          One or more fields have an error. Please check and try again.
        </p>
      )}
    </form>
  );
}
