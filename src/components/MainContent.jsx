import AboutMe from './AboutMe';
import MyImage from './MyImage';
import Experience from './Experience';
import Skills from './Skills';
import Teaching from './Teaching';
import Education from './Education';
// import Projects from './Projects';
// import Experience from './Experience';
// Import other section components here

function MainContent() {
    return (
        <main id="main-content" tabIndex="-1">
            <div className="body-container">
                <section className="hero-section">
                    <AboutMe />
                    <MyImage />
                </section>
                <Experience />
                <Skills />
                <Teaching />
                <Education />
            </div>
        </main>
    );
}

export default MainContent;
