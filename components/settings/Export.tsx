import { exportToImage } from "@/lib/utils";

import { Button } from "../ui/button";
import Image from "next/image";

const Export = () => (
  <div className='flex flex-col gap-3 px-5 py-3'>
    <Button
      variant='ghost'
      className='w-full  hover:bg-orange-500/80 hover:text-white'
      onClick={exportToImage}
    >
      <Image
        src='./assets/download.svg'
        alt='download'
        width={20}
        height={20}
      />
    </Button>
  </div>
);

export default Export;
