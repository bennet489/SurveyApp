import React from "react";
import AboutRania from "../../Assets/AboutUs-images/rania.jpeg";
import AboutBennet from "../../Assets/AboutUs-images/bennet.png";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";

const teamMembers = [
    {
        name: "Bennet Aboagye-Asare",
        role: "Software Engineer",
        image: AboutBennet,
        email: "bennetasare@outlook.com",
        links: {
            linkedin: "",
            github: "https://github.com/bennet489",
            twitter: "",
        },
    },
    {
        name: "EL MORABET Rania",
        role: "Software Engineer",
        image: AboutRania,
        email: "raniaelmorabet9@gmail.com",
        links: {
            linkedin: "https://www.linkedin.com/in/rania-elmorabet/",
            github: "https://github.com/Raniaelmorabet",
            twitter: "https://x.com/RANIAELMORABET7",
        },
    },
];

export function WhoWeAre() {
    return (
        <>
            <section className="pt-20 border-t border-gray-300 dark:border-gray-600">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#042B29] ">
                    Who We Are
                </h2>
                <div className="flex flex-wrap justify-center mt-16 items-center mx-auto gap-[50px]">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex bg-white p-5 w-[560px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                className="w-[200px] rounded-full mr-7"
                                src={member.image}
                                alt=""
                            />
                            <div className="font-medium dark:text-white mt-[50px]">
                                <div className="text-black-500 font-semibold text-2xl">
                                    {member.name}
                                </div>
                                <div className="text-gray-500 font-normal text-xl">
                                    {member.role}
                                </div>
                                {member.email && (
                                    <a
                                        href={`mailto:${member.email}`}
                                        target="_blank"
                                        className="text-[#053F5C] font-normal text-xl"
                                    >
                                        {member.email}
                                    </a>
                                )}
                                <div className="flex flex-wrap justify-center my-5 mx-5 items-center gap-5 absolute bottom-0 right-0">
                                    <a
                                        href={member.links.linkedin}
                                        className="text-4xl duration-300 hover:text-[#F27F0C]"
                                    >
                                        <IoLogoLinkedin />
                                    </a>
                                    <a
                                        href={member.links.github}
                                        className="text-4xl duration-300 hover:text-[#F27F0C]"
                                    >
                                        <FaSquareGithub className="text-4xl" />
                                    </a>
                                    <a
                                        href={member.links.twitter}
                                        className="text-4xl duration-300 hover:text-[#F27F0C]"
                                    >
                                        <FaSquareXTwitter className="text-4xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
