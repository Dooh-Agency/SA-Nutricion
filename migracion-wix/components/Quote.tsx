import Isotipo from "@/components/Isotipo";
import { QUOTE } from "@/lib/constants";

export default function Quote() {
  return (
    <section className="flex flex-col items-center bg-white px-6 pt-[76px] pb-[95px] text-center">
      <Isotipo className="h-[60px] w-[60px] text-sage" />
      <h2 className="mt-[26px] max-w-[979px] text-[28px] italic leading-none tracking-[0.02em] text-sage md:text-[38px]">
        {QUOTE}
      </h2>
    </section>
  );
}
