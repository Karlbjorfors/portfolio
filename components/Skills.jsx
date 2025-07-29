import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiNodejsFill,
  RiGithubFill,
  RiTailwindCssFill,
  RiDatabase2Fill,
} from "react-icons/ri";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";
import { SiSpyderide, SiOllama, SiShadcnui } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML 5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS 3",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <RiJavascriptFill />,
    name: "JavaScript",
  },
  {
    icon: <RiNodejsFill />,
    name: "Node.js",
  },
  {
    icon: <RiGithubFill />,
    name: "GitHub",
  },
  {
    icon: <VscAzure />,
    name: "Azure Cloud",
  },
  {
    icon: <VscAzureDevops />,
    name: "Azure DevOps",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <SiSpyderide />,
    name: "Spyder IDE",
  },
  {
    icon: <SiOllama />,
    name: "Ollama",
  },
  {
    icon: <TbBrandCSharp />,
    name: "CSharp",
  },
  {
    icon: <SiShadcnui />,
    name: "ShadCN UI",
  },
  {
    icon: <PiFileSqlFill />,
    name: "SQL",
  },
  {
    icon: <RiDatabase2Fill />,
    name: "Database Management",
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-accent/70 group">
                  <div className="text-3xl group-hover:text-white/90 transition-all duration-300">
                    {item.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
