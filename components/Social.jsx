import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaYoutube,} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/vo1d-null"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/"},
    {icon: <FaYoutube />, path: "https://www.youtube.com/channel/"},
    // Add more social media icons here if needed
];
const Social = ({ containerStyles, iconStyles }) => {
  return (<div className={containerStyles}>
    {socials.map((item, index) => {
        return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        )
    })}
  </div>
  )
};

export default Social