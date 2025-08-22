import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";

const socials = [
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/kalle-bjorfors/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/Karlbjorfors",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
