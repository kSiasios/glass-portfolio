import Link from "next/link";
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  children?: ReactNode;
}

const SocialLink = (props: SocialLinkProps) => {
  return (
    <Link className="w-28 h-28 round-button aspect-square" href={props.href}>
      {props.children}
    </Link>
  );
};

export default SocialLink;
