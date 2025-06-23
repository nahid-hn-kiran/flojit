import RegisterForm from "@/features/RegisterForm";
import MainLayout from "@/layouts/MainLayout";
import { constants } from "@/lib/constants";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-full bg-surface flex items-center justify-center py-20 bg-flogit-blurOrange">
        {/* Global styles for the page, including the orange checkbox */}
        <style>{`.checkbox-accent[data-state="checked"] { background-color: var(--color-brand-orange); border-color: var(--color-brand-orange); color: white; }`}</style>
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl">
          <div className="card w-full max-w-md mx-auto p-8 md:p-10 bg-flogit-white rounded-lg space-y-8">
            <div className="text-center">
              <div className="inline-block">
                <img src={constants.siteLogo} alt="Site Logo" />
              </div>
              <p className="text-body mt-3">
                Welcome Flogit.je Please enter your details.
              </p>
            </div>
            <RegisterForm />
            <div>
              <p className="text-center text-sm text-body">
                If you have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-flogit-orange hover:underline"
                >
                  Sign in now!
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img src={constants.formBidHammer} alt="Form Bid Hammer" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
