import MainLayout from "../components/layout/MainLayout"
import Education from "../components/ui/About/Education/Education";
import Technologies from "../components/ui/About/Technologies/Technologies";
import Projects from "../components/ui/About/Projects/Projects";
import AboutIndex from "../components/ui/About/AboutIndex";

const about = () => {

  return (
    <MainLayout pageName="About">
      <div className="pt-6 lg:pt-6 pb-8">
        <AboutIndex />
        <Education />
        <Technologies />
        <Projects />
      </div>
    </MainLayout>
  )
}

export default about