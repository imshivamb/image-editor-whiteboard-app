"use client";
import { loginSchema } from "@/utils/schema";
import { Key, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ZodError } from "zod";
import MainButton from "./button";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validating the form data using the Zod schema
      loginSchema.parse({ email, password });

      // If validation passes, proceed with login logic here
      console.log("Login successful!");
      router.push("/editor");
      // Clear errors if any
      setErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        // Handling the validation error by updating the state with error messages
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
    <form action='submit'>
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
      <Link href='/editor'>
        <MainButton text='Login' onClick={handleLogin} />
      </Link>
    </form>
  );
};

export default LoginForm;
