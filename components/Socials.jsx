import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

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
          <div key={index} className={iconStyles}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
