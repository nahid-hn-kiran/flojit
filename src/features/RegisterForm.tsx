import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import PasswordInput from "@/components/shared/PasswordInput";

/**
 * The Sign Up Form component, styled to match the design.
 */
const RegisterForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
      terms: false,
      privacy: false,
      age: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Sign Up form submitted:", data);
    // Handle your registration API call or logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Alias Full name</Label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input id="fullName" placeholder="John Doe" {...field} />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Alias Username *</Label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                id="username"
                placeholder="e.g. jersey_seller90"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number *</Label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input id="address" placeholder="Enter your address" {...field} />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password *</Label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                id="password"
                placeholder="••••••••••"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password *</Label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <PasswordInput
                id="confirmPassword"
                placeholder="••••••••••"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-3 pt-4">
          {["terms", "privacy", "age"].map((id) => (
            <div key={id} className="flex items-start space-x-3">
              <Controller
                name={id}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={id}
                    className="checkbox-accent mt-0.5"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor={id} className="text-body text-sm font-normal">
                {id === "terms" && "I accept the Terms & Conditions *"}
                {id === "privacy" &&
                  "I accept the Privacy Policy / GDPR Notice *"}
                {id === "age" && "I'm 18 years or older *"}
              </Label>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Button type="submit" className="w-full">
            Register now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
