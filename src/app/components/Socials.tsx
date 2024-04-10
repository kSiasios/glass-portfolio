import Scroller from "@/app/components/Scroller";
import SocialLink from "@/app/components/SocialLink";
import {
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

const Socials = () => {
  return (
    <section className="z-50 my-5 glass-component flex gap-10 px-3 sm:px-14 py-11 col-span-12 md:col-span-8 h-fit">
      <h4 className="absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 top-0 -translate-y-1/2 glass-component py-2 px-8 shadow-lg text-2xl font-bold text-inherit">
        Socials
      </h4>
      <Scroller className="text-6xl">
        <SocialLink href="https://github.com/kSiasios">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/konstantinos-siasios/">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="mailto:kostassiasios1999@gmail.com">
          <FaEnvelope />
        </SocialLink>
        <SocialLink href="tel:+306986702498">
          <FaPhoneAlt />
        </SocialLink>
        <SocialLink href="https://codepen.io/ksiasios">
          <FaCodepen />
        </SocialLink>
      </Scroller>
    </section>
  );
};

export default Socials;
