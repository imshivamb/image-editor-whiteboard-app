import LoginForm from "@/components/loginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className='text-center text-black'>
      <p className='text-[14px]'>Log in to</p>
      <h4 className='mb-5 text-xl font-bold md:text-2xl'>Image Editor</h4>

      <LoginForm />
      <div className='mt-4'>
        <span className='text-[14px] text-gray-700'>
          {" "}
          Forgot Password ?
          <Link href='#' className='ml-1 font-semibold text-orange-500'>
            Click Here
          </Link>
        </span>
      </div>
      <div className='mt-2'>
        <span className='text-[14px] text-gray-700'>
          Don&apos;t have an account?{" "}
          <Link href='/signup' className='ml-1 font-semibold text-orange-500'>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
