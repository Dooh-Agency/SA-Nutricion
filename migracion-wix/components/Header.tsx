import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-[90px] items-center justify-center bg-white md:h-[110px]">
      <Link href="/" aria-label="Soledad Alvarez — Inicio">
        <Image
          src="/images/logo-header.svg"
          alt="Soledad Alvarez · Licenciada en Nutrición · Puericultora"
          width={249}
          height={62}
          priority
          className="h-auto w-[200px] md:w-[249px]"
        />
      </Link>
    </header>
  );
}
