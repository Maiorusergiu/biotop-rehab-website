import Image from "next/image";
import brandLogo from "@/assets/images/biotop-rehab-logo.png";

export function BrandLogo() {
  return (
    <span className="brand-logo-frame">
      <Image src={brandLogo} alt="" className="brand-logo" unoptimized />
    </span>
  );
}
