"use client";

import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact, 
  FaFigma,
  FaNodeJs,
  FaPython, 
} from "react-icons/fa";

import { 
  SiTailwindcss, SiNextdotjs,
  SiDjango,
  SiOpenai, 
} from "react-icons/si";

const about ={
  title: 'About Me',
  description: 
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nikolay Gerginov",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+359) 098 830 1845",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Location",
      fieldValue: "Sofia City, Bulgaria",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bulgarian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bulgarian, English",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ]
}

//experience data - to be filled
const experience = {
  icon: 'public\assets\resume\badge.svg',
  title: 'Experience',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  items: [
    {
      company: 'Company 1',
      position: 'Frontend Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Company 1',
      position: 'Frontend Developer',
      duration: '2022 - Present',
    },
    {
      company: 'Company 1',
      position: 'Frontend Developer',
      duration: '2022 - Present',
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: 'Spring 2022 ',
    },
  ]
};

//education data - to be filled
const education = {
  icon: 'public\assets\resume\cap.svg',
  title: 'My Education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  items: [
    {
      institution: 'Software University - SoftUni',
      degree: 'Frontend Development Bootcamp',
      duration: '2022',
    },
    {
      institution: 'Software University - SoftUni',
      degree: 'Frontend Development Bootcamp',
      duration: '2022',
    },
    {
      institution: 'Software University - SoftUni',
      degree: 'Frontend Development Bootcamp',
      duration: '2022',
    },
    {
      institution: 'Software University - SoftUni',
      degree: 'Frontend Development Bootcamp',
      duration: '2022',
    },
  ]
};

//skills data - to be filled
const skills = {
  title: 'My Skills',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  skillList: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'Python',
      icon: <FaPython />,
    },
    {
      name: 'Django',
      icon: <SiDjango />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },
    {
      name: 'ChatGPT',
      icon: <SiOpenai />,
    },
  ]
};

import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs'

import { Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider, 
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
    opacity: 1,
    transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs 
      defaultValue="experience" 
      className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return ( 
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return ( 
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>;
                })}
              </ul>
            </div>
          </TabsContent>

          {/* about */}
          <TabsContent value="about" className="w-full">
            About
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
  )
}

export default Resume