import MainLayout from "../components/layout/MainLayout";
import Education from "../components/ui/About/Education/Education";
import Technologies from "../components/ui/About/Technologies/Technologies";
import Projects from "../components/ui/About/Projects/Projects";
import AboutIndex from "../components/ui/About/AboutIndex";
import WorkIndex from "../components/ui/About/Works/WorkIndex";

const About = () => {
    return (
        <MainLayout
            pageName="About"
            pageDescription="Ivan Campos Wainer is a Frontend Web Developer who specializes in building exceptional digital experiences. Welcome to my digital garden."
            post={false}
        >
            <div className="pt-6 lg:pt-6 pb-8">
                <AboutIndex />
                <div className="px-4 lg:px-24 flex flex-col gap-32">
                    <Technologies />
                    <WorkIndex />
                    <Projects />
                    <Education />
                </div>
            </div>
        </MainLayout>
    );
};

export default About;
