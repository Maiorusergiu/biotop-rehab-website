import Image from "next/image";
import brandLogo from "@/public/images/biotop-rehab-new-logo.jpeg";

export function BrandLogo() {
  return (
    <span className="brand-logo-frame">
      <Image src={brandLogo} alt="" className="brand-logo" unoptimized />
    </span>
  );
}
