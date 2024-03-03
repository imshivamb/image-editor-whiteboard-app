import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex flex-row w-full  min-h-screen">
          <div className="md:w-[50%] w-full bg-white flex items-center justify-center">
            {children}
          </div>
          <div className="md:w-[50%] w-full hidden md:flex items-center bg-slate-50 justify-center">
            <Image
              src="/loginbanner.jpg"
              alt="Login banner"
              width={1000}
              height={750}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
