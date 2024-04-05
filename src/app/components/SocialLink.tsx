import Link from "next/link";
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children?: ReactNode;
}

const SocialLink = (props: SocialLinkProps) => {
  return (
    <Link className="w-28 h-28 round-button" href={props.href}>
      {props.children}
    </Link>
  );
};

export default SocialLink;

/* Ellipse 1 */

// box-sizing: border-box;

// position: absolute;
// width: 118px;
// height: 118px;
// left: 56px;
// top: 44.18px;

// background: radial-gradient(100% 100% at 0% 0%, #2D2D2D 15%, #000000 85%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #FFFFFF;
// box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.05), inset -4px -4px 10px 5px rgba(0, 0, 0, 0.05);
