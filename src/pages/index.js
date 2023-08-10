import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "public/dev-ed-wave.png";

import code from "public/code.png";
import consulting from "public/consulting.png";
import web1 from "public/web1.png";
import web2 from "public/web2.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import { useState } from "react";
import Service from "./Service";
import Abilities from "./Abilities";

export default function Home() {
  const content1 = "LOldsadsad ddddddddddd ddddddddd dddddddddd";
  const content2 =
    "Great design is the key to a great user experience. I can help the team to design aesthetic products";
  const content3 = "123";
  const [darkMode, setIsDark] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-slate-900">
            <h1 className="text-xl font-burtons">Developed by Truman</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setIsDark(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-yellow-950 text-center p-10">
            <h2 className="text-5xl py-2 text-teal-700 font-medium md:text-6xl">
              Truman Guo
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Software Engineer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md-text-xl max-w-lg mx-auto">
              Being Passionate,being innovative,I am a graduate software
              engineer who loves programming in Web and Games.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin
              className="hover:cursor-pointer"
              onClick={() =>
                window.open("https://www.linkedin.com/in/truman-guo-946a80204/")
              }
            />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section className="pb-10">
          <Abilities />
          <div className="flex flex-col lg:flex-row md:gap-5 ">
            <Service content={content1} />
            <Service content={content2} />
            <Service content={content3} />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Great design is the key to a great user experience. I can help the
              team to design aesthetic products{" "}
              <span className="text-teal-500">Web development </span>and some
              <span className="text-teal-500"> content design </span>
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
      </main>
      ;
    </div>
  );
}
