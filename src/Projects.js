import ProjectCards from "./ProjectCards";
import CardBack from "./CardBack";
import Footer from "./Footer";

export default function Projects({ back, setBack }) {
    return (
        <div className="projects">

            {!back && <ProjectCards setBack={setBack} />}

            {back && <CardBack back={back} setBack={setBack} />}
            <Footer />
        </div>
    );
}
