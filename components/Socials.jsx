import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoDribbble,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  // {
  //   icon: <BiLogoFacebook />,
  //   path: "",
  // },
  // {
  //   icon: <BiLogoInstagramAlt />,
  //   path: "",
  // },
  {
    icon: <BiLogoDribbble />,
    path: "",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "",
  },
  {
    icon: <BiLogoGithub />,
    path: "",
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
