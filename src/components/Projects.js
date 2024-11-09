
import { FaLink, FaTag, FaBolt, FaCheck, FaCheckCircle } from "react-icons/fa"
import { useState } from "react";
import { Link } from "react-scroll";

export default function Project(){
    const project=[
        {
            id: 1,
            duration: '9th July - 28th July, 2024',
            project: 'E-Learning Website created during Internship at ProgrammersTech',
            link: 'https://elearn-web-git-main-zoha-javeds-projects.vercel.app/',
            technology: 'React.Js',
            images: "/elearn.png",
            functional: true,
        },
        {
            id: 2,
            duration: '12th Aug - 16th Aug, 2024',
            project: "Visa Bridge'Home Page Clone created during Internship at Qwerty Experts",
            link: 'https://visa-bridge-clone.vercel.app/',
            technology: 'React.Js & Tailwind CSS',
            images: "/visabridge.png",
        },
        {
            id: 3,
            duration: '1st July - 7th July, 2024',
            project: 'My First Portfolio website created during Internship at ProgrammersTech',
            link: 'https://zohajaved098.github.io/First-Portfolio/',
            technology: 'HTML, CSS & JavaScript',
            images: "/first_portfolio.png",
            
        },
    ];
    return (
        <div id="projects" className="w-screen h-auto py-5 relative">
            <img src="/leaf.png" alt="" className='absolute bottom-5 rotate-180 left-10 w-80 h-80 ' />
            <div className="flex flex-col w-[75%] m-auto justify-center items-center">
                <div className="flex flex-col w-[60%] max-lg:w-full justify-center items-center mb-20">
                    <h1 className="text-[#333] text-6xl font-bold text-center mb-5">
                        My Past Projects
                    </h1>
                    <p className="text-[#333] text-lg font-light leading-6 text-center">
                        These projects have helped me refine my skills in React, Next.js, and Tailwind CSS while enhancing user experience through performance optimization and intuitive design.
                    </p>
                </div>
                <div className="flex flex-wrap w-full justify-evenly items-center text-black gap-2">
                    {project.map((projectItem) => (
                        <div
                            key={projectItem.id}
                            className="w-[30%] max-lg:w-[40%] max-md:w-[80%] h-[380px] flex flex-col relative rounded-2xl mb-10 bg-white hover:shadow-hover-box-shadow"
                        >
                            <div className="rounded-t-2xl w-full h-[200px] relative overflow-hidden">
                                <img
                                    className="w-full h-full object-cover rounded-t-2xl"
                                    src={projectItem.images}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col h-[180px] p-5 gap-4 mt-1">
                                <h3 className="text-lg text-[#333] leading-6 font-semibold">
                                    {projectItem.project}
                                </h3>
                                <span className="text-[#333] text-base">
                                    Duration: <b>{projectItem.duration}</b>
                                </span>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center text-[#656464] hover:text-[#123912]">
                                        <FaLink className="mr-2" />
                                        <a href={projectItem.link} target="_blank" rel="noopener noreferrer" className="underline ">
                                            Project Link
                                        </a>
                                    </div>
                                    <span className="text-[#373f3e] text-md">{projectItem.technology}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}