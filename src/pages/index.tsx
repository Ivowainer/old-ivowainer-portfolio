import type { NextPage } from "next";

import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

import MainLayout from "../components/layout/MainLayout";
import CirclesAnimation from "../components/ui/index/CirclesAnimation";
import IconRS from "../components/ui/IconRS";

const Home: NextPage = () => {
    return (
        <MainLayout
            pageName="Home"
            pageDescription="Ivan Campos Wainer is a Fullstack Web Developer who specializes in building exceptional digital experiences. Welcome to my digital garden."
            post={false}
        >
            <div className="relative h-screen lg:h-screen flex flex-col w-full items-center justify-center dark:text-gray-200 text-gray-600">
                <h1 className="text-4xl font-bold">Ivan Campos Wainer</h1>
                <p className="text-xl font-semibold dark:text-gray-400 text-gray-400">
                    <span className="dark:text-emerald-500 text-emerald-400">Fullstack</span> Web Developer
                </p>
                <div className="z-10 flex text-2xl justify-between w-40 mt-8">
                    <IconRS href="https://www.instagram.com/ivowainer/" icon={<AiOutlineInstagram />} />
                    <IconRS href="https://www.github.com/ivowainer/" icon={<AiFillGithub />} />
                    <IconRS href="https://www.linkedin.com/in/ivan-campos-wainer/" icon={<AiFillLinkedin />} />
                </div>

                <CirclesAnimation />
            </div>
        </MainLayout>
    );
};

export default Home;
