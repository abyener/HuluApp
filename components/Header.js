import Image from "next/image";
import React from "react";
import huluLogo from "../assest/images/hulu-white.png";

function Header() {
  return (
    <header className="">
      <h1>This is the Header</h1>

      <Image src={huluLogo} width={200} height={100} />
    </header>
  );
}

export default Header;
