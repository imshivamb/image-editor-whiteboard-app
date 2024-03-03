"use client";

import React, { useState } from "react";
import { ZodError } from "zod";
import { signupSchema } from "@/utils/schema";
import Button from "./button";
import { Mail, Key } from "lucide-react";
import Link from "next/link";
import MainButton from "./button";
import { useRouter } from "next/navigation";

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data using the updated Zod schema
      signupSchema.parse({
        email,
        password,
        confirmPassword,
      });

      // If validation passes, you can proceed with signup logic here
      console.log("Signup successful!");
      router.push("/editor");

      // Clear errors if any
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle the validation error by updating the state with error messages
        const errorMessages: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            errorMessages[err.path.join(".")] = err.message;
          }
        });
        setErrors(errorMessages);
      }
    }
  };

  return (
    <form>
      <div className='relative'>
        <input
          className='shadow-xs min-w-[275px] rounded-lg border border-gray-200 bg-gray-100 py-2 pl-9 text-[15px]'
          type='email'
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Mail
          width={18}
          height={18}
          className='absolute left-3 top-3 text-gray-500'
        />
        {errors.email && (
          <div className='mt-1 text-start text-xs text-red-500'>
            {errors.email}
          </div>
        )}
      </div>
      <br />
      <div className='relative'>
        <input
          className='shadow-xs min-w-[275px] rounded-lg border border-gray-200 bg-gray-100 py-2 pl-9 text-[15px]'
          type='password'
          value={password}
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Key
          width={18}
          height={18}
          className='absolute left-3 top-3 text-gray-500'
        />
        {errors.password && (
          <div className='mt-1 text-start text-xs text-red-500'>
            {errors.password}
          </div>
        )}
      </div>
      <br />
      <div className='relative'>
        <input
          className='shadow-xs min-w-[275px] rounded-lg border border-gray-200 bg-gray-100 py-2 pl-9 text-[15px]'
          type='password'
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Key
          width={18}
          height={18}
          className='absolute left-3 top-3 text-gray-500'
        />
        {errors.confirmPassword && (
          <div className='mt-1 text-start text-xs text-red-500'>
            {errors.confirmPassword}
          </div>
        )}
      </div>
      <br />
      <Link href='/'>
        <MainButton text='Signup' onClick={handleSignup} />
      </Link>
    </form>
  );
};

export default SignupForm;
