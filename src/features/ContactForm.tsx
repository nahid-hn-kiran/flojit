import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/shared/Button";

const ContactForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    // Handle form submission logic here
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-heading">
        We are here to <span className="text-flogit-orange">help you</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input placeholder="Name" {...field} />}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input type="email" placeholder="Email" {...field} />
          )}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field }) => (
            <Input placeholder="Company Name" {...field} />
          )}
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input type="tel" placeholder="Phone Number" {...field} />
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Textarea placeholder="Describe your ideas" rows={5} {...field} />
          )}
        />
        <div>
          <Button size="lg" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
