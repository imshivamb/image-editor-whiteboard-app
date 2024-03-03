import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='./logo.svg'
      alt='loader'
      width={50}
      height={50}
      className='object-contain'
    />
    <p className='text-sm font-bold text-black'>Loading...</p>
  </div>
);

export default Loader;
