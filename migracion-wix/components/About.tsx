import Image from "next/image";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-sand px-6 py-14 md:px-[45px] md:py-[69px]"
    >
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-0">
        <Image
          src="/images/soledad.jpg"
          alt="Lic. Soledad Alvarez"
          width={181}
          height={187}
          className="h-[187px] w-[181px] shrink-0 rounded-[50%] object-cover"
        />

        <div className="text-center md:ml-[78px] md:mt-[55px] md:w-[390px] md:shrink-0 md:text-left">
          <h2 className="text-[22px] italic leading-[1.4]">{ABOUT.name}</h2>
          <p className="mt-[10px] text-[16px] font-bold italic leading-[1.3] text-olive">
            {ABOUT.credentials[0]}
            <br />
            {ABOUT.credentials[1]}
          </p>
        </div>

        <p className="text-[16px] leading-[1.3] text-olive md:ml-[86px] md:mt-[55px] md:max-w-[686px]">
          {ABOUT.bio}
        </p>
      </div>
    </section>
  );
}
