import { montserratBold } from "@/lib/Fonts";
import arrow from "/public/icons/Arrow.svg";
import me from "/public/images/me-bg.png";
import Image from "next/image";
import Link from "next/link";

const Welcome = async () => {
  return (
    <main className="min-h-[100vh]">
      <article className="relative h-[100vh]">
        <section className=" w-fit p-4 absolute left-[10%] top-[15%]">
          <div className="mb-6 flex flex-col gap-4">
            <h3>
              <span className="font-bold">Seneca</span> once said:
            </h3>
            <p className="italic tracking-wide">
              “luck is where preparation and opportunity meet.”
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/docs/cv.pdf"
              download="Aleksander_Trujillo_CV.pdf"
              className="border border-solid flex gap-2 p-2 w-fit hover:border-[#EB5E28] hover:scale-105 transition ease-in-out"
            >
              Download CV
              <Image src={arrow} alt="arrow" className="-rotate-45" />
            </a>
            <Link
              href={"/Contact"}
              className="border border-[#EB5E28] border-solid flex gap-2 p-2 w-fit hover:border-[#EB5E28] hover:scale-105 transition ease-in-out"
            >
              Contact <Image src={arrow} alt="arrow" className="-rotate-45" />
            </Link>
          </div>
        </section>
        <section className="w-fit absolute right-[10%] bottom-[20%] ">
          <Image src={me} alt="image of Aleksander" className="maskImage" />
        </section>
        <section className="border-solid border-y-2 border-[#EB5E28] overflow-hidden whitespace-nowrap h-[20%] w-[100%] flex items-center absolute bottom-[10%] ">
          <h1
            className={`text-clamp-lg ${montserratBold.className} tracking-[.15em] inline-block animate-marquee font-bold text-[#EB5E28]`}
          >
            ALEKSANDER TRUJILLO PROKHORENKO
          </h1>
        </section>
      </article>
      <article>ABOUT ME</article>
    </main>
  );
};

export default Welcome;
