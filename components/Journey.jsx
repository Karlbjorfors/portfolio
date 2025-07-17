import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const journey = [
  {
    years: "2025",
    role: "Student: Fullstack Developer",
    institution: "Lexicon Malmö",
    description:
      "Currently enrolled in a fullstack developer program, focusing on modern web technologies and software development practices.",
  },
  {
    years: "2025",
    role: "Student: Cybersecurity Foundations",
    institution: "Cisco Networking Academy",
    description:
      "Gained foundational knowledge in cybersecurity principles, including network security, risk management, and incident response.",
  },
  {
    years: "2025",
    role: "Student: Applied Scrum for Agile Project Management",
    institution: "University of MarylandX",
    description:
      "Learned to apply Scrum methodologies in software development projects, enhancing team collaboration and project delivery.",
  },
  {
    years: "2024-2025",
    role: "Student: CS50’s Introduction to Programming with Python",
    institution: "HarvardX",
    description:
      "Learned to apply programming concepts using Python, including data structures, algorithms, and web development.",
  },
  {
    years: "2024-2025",
    role: "Chef",
    institution: "Skånes Stadsmission",
    description:
      "Worked as a chef, honing skills in kitchen management and food preparation.",
  },
  {
    years: "2021-2024",
    role: "Teacher",
    institution: "Värner Rydénskolan",
    description:
      "Taught various subjects, focusing on student engagement and personalized learning.",
  },
  {
    years: "2020-2024",
    role: "Student: Teacher Education",
    institution: "Malmö University",
    description:
      "Studied educational theories and practices, focusing on student-centered learning, swedish and swedish as a second language.",
  },
  {
    years: "2017-2020",
    role: "After School Edgucator, Substitute Teacher and Student Assistant",
    institution: "Bellevueskolan",
    description:
      "Worked in various educational roles, supporting students and teachers in a primary school setting.",
  },
  {
    years: "2015-2016",
    role: "Chef",
    institution: "Gamla Brogatan",
    description:
      "Worked as a chef, honing skills in kitchen management and food preparation.",
  },
  {
    years: "2012-2015",
    role: "Chef",
    institution: "Johan P",
    description:
      "Worked as a chef, honing skills in kitchen management and food preparation.",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years, description } = item;
        return (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-12 w-full cursor-pointer hover:bg-white/5 rounded-lg p-4 transition-all duration-300">
                  {/* bullets */}
                  <div className="flex flex-col w-max justify-center items-center">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-[1px] h-[180px] bg-white/10"></div>
                  </div>
                  {/* text */}
                  <div className="max-w-[500px]">
                    <p className="mb-6 text-lg text-white/50">{years}</p>
                    <h4 className="h4 mb-2">{role}</h4>
                    <p className="text-lg text-white/50">{institution}</p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm max-w-[300px]">{description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Journey;
