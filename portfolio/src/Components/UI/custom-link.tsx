import { montserratBold } from "@/lib/Fonts";
import arrow from "/public/icons/Arrow.svg";
import { Link } from "@nextui-org/react";
import Image from "next/image";

const CustomLink = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link
      className={`group w-full h-[33%] pl-4 border-b-1 tracking-widest border-white border-solid text-6xl ${montserratBold.className} flex justify-between uppercase text-white hover:bg-[#EB5E28] hover:border-0 transition ease-in-out`}
      href={url}
      size="lg"
    >
      {text}
      <Image
        src={arrow}
        alt="arrow"
        width={75}
        height={75}
        className="transition-transform ease-in-out duration-300 group-hover:rotate-45-deg"
      />
    </Link>
  );
};

export default CustomLink;
