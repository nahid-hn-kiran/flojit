import React, { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

/**
 * A reusable password input component with a visibility toggle.
 * It's designed to be used with react-hook-form's Controller.
 */
const PasswordInput = React.forwardRef((props, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toggleVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <div className="relative">
      <Input
        ref={ref}
        type={isPasswordVisible ? "text" : "password"}
        className="pr-10"
        {...props}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-body hover:text-heading"
      >
        {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
