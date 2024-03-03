import React from "react";
import Link from "next/link";
import SignupForm from "@/components/signupForm";

const SignUpPage = () => {
  return (
    <div className="text-black text-center">
      <p className="text-[14px]">Sign up to</p>
      <h4 className="text-xl md:text-2xl font-bold mb-5">Image Editor</h4>

      <SignupForm />

      <div className="mt-4">
        <span className="text-[14px] text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="ml-1 text-orange-500 font-semibold">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
