import Image from "next/image";
import Link from "next/link";

import logo from "../icon.jpg";

function Logo() {
  return (
    <Link
      href="/"
      className="z-10 flex md:flex-row-reverse items-center lg:gap-4 gap-2"
    >
      <p className="text-[clamp(12px,4vw,24px)] font-semibold tracking-wider">
        Ramtin Ramezani
      </p>
      <Image
        src={logo}
        width="60"
        height="60"
        className="rounded-full w-[clamp(36px,4vw,60px) h-[clamp(36px,4vw,60px)]"
        alt="The Wild Oasis logo"
      />
    </Link>
  );
}

export default Logo;
