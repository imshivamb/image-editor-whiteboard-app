import MainButton from "@/components/button";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="h-full bg-[#fff] text-[#000] overflow-auto">
      <div className="mx-auto max-w-screen-xl  h-full w-full">
        <div className="flex justify-center flex-col items-center min-h-screen">
          <Link href="/">
            <Image src="./logo.svg" alt="Logo" width={50} height={50} />
          </Link>
          <div className="mt-4 text-center p-5">
            <h1 className="md:text-4xl font-bold lg:text-5xl text-3xl">
              Online Image Editor
            </h1>
            <p className="max-w-[65ch] text-[14px] text-gray-700 mt-4 md:text-base">
              Our online photo editor offers everything you need to enhance and
              edit photos effortlessly. Experience simple photo editing online
              for free!
            </p>
            <div className="mt-4">
              <Link href="/login" className="">
                <MainButton text="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
