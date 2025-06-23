import LoginForm from "@/features/LoginForm";
import MainLayout from "@/layouts/MainLayout";
import { constants } from "@/lib/constants";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-full bg-surface flex items-center justify-center py-20 bg-flogit-blurOrange">
        {/* Global styles for the page, including the orange checkbox */}
        <style>{`.checkbox-accent[data-state="checked"] { background-color: var(--color-brand-orange); border-color: var(--color-brand-orange); color: white; }`}</style>
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl">
          <div className="card w-full max-w-md mx-auto p-8 md:p-10 bg-flogit-white rounded-lg space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-heading text-center">
                Welcome back
              </h2>
              <p className="text-body mt-2 text-center">
                Welcome back! Please enter your details.
              </p>
            </div>
            <LoginForm />
            <div>
              <p className="text-center text-sm text-body">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-flogit-orange hover:underline"
                >
                  Sign up fo free!
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

export default Login;
