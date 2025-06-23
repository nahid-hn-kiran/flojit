import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import PasswordInput from "@/components/shared/PasswordInput";

/**
 * The Login Form component, styled to match the design, using react-hook-form without zod.
 * This version uses the Controller component for robust integration with UI libraries.
 */
const LoginForm = () => {
  // Initialize react-hook-form, getting the 'control' object
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    // You can see the form data here on submission
    console.log("Login form submitted:", data);
    // Handle your login API call or logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                {...field}
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="login-password">Password</Label>
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <PasswordInput
                id="login-password"
                placeholder="••••••••••"
                {...field}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="remember-me"
                  className="checkbox-accent"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            <Label htmlFor="remember-me" className="font-normal text-body">
              Remember me
            </Label>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-body hover:text-primary hover:underline"
          >
            Forgot password
          </a>
        </div>
        <div className="space-y-3 pt-4">
          <Button type="submit" className="w-full">
            Log in
          </Button>
          <Button variant="outline" type="button" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
