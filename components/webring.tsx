"use client";
import { useEffect, useState } from "react";
import clawLogo from "../public/theclaw.svg";
import Image from "next/image";
function getRandomMember(members: Array<Member>): Member {
    return members[Math.floor(Math.random() * members.length)]
}

export default function ClawWebring({ members }: { members: Array<Member> }) {
    const [hostname, setHostname] = useState<string>();

    useEffect(() => {
        const hostname = document.location.hostname;
        const cleanHostname = hostname.replace("www.", "");
        setHostname(cleanHostname);

    }, [])

    if (!hostname) {
        return <></>
    }
    const IS_DEV = hostname === "localhost";

    // For testing purposes in development
    if (IS_DEV) {
        members.push({
            url: "http://localhost:3000/",
            name: "Testing in Dev",
            feed: null,
        });
    }
    const thisMember = members.find((member) => member.url.includes(hostname));
    const thisMemberIndex = members.findIndex((item) => item === thisMember);
    const prevIndex = thisMemberIndex === 0 ? members.length - 1 : thisMemberIndex - 1;
    const nextIndex = thisMemberIndex === members.length - 1 ? 0 : thisMemberIndex + 1;

    const prevUrl = members[prevIndex].url;
    const nextUrl = members[nextIndex].url;



    return (<div className="w-full border-t border-accent-primary pt-4 text-center text-accent-primary">
        <div className="flex flex-row items-center justify-center gap-x-4">
            <Image src={clawLogo} className="w-16" alt="The Claw Logo" />
            <a href="https://github.com/whitep4nth3r/the-claw-webring#join-the-claw-webring" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline sm:text-xl md:text-2xl lg:text-3xl">Claw Webring</a>
        </div>
        <div className="mt-4 flex justify-between text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <a className="hover:underline" href={prevUrl} target="_blank" rel="noopener noreferrer">Prev</a>
            <a className="hover:underline" href={getRandomMember(members).url} target="_blank" rel="noopener noreferrer">Random</a>
            <a className="hover:underline" href={nextUrl} target="_blank" rel="noopener noreferrer">Next</a>
        </div>
    </div>)
}