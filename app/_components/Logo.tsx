import Image from "next/image";
import Link from "next/link";

import logo from "../icon.jpg";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image
        src={logo}
        width="60"
        height="60"
        className="rounded-full"
        alt="The Wild Oasis logo"
      />

      <p className="text-xl font-semibold tracking-wider">Ramtin Ramezani</p>
    </Link>
  );
}

export default Logo;
