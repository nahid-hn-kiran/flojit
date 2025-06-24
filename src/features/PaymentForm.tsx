import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * A form component for entering payment details.
 */
const PaymentForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      cardType: "visa",
      cardNumber: "123451888**45",
    },
  });

  const onSubmit = (data) => {
    console.log("Payment details submitted:", data);
    // Handle payment processing logic here
  };

  return (
    <div className="card w-full max-w-md p-8 md:p-10 shadow-card-shadow">
      <h1 className="text-3xl font-bold text-heading mb-8">Payment Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="cardType">Select your card</Label>
          <Controller
            name="cardType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id="cardType">
                  <SelectValue placeholder="Select a card type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visa">Visa</SelectItem>
                  <SelectItem value="mastercard">Mastercard</SelectItem>
                  <SelectItem value="amex">American Express</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Type your card number</Label>
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <Input
                id="cardNumber"
                placeholder="**** **** **** ****"
                {...field}
              />
            )}
          />
        </div>

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full">
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
