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
        <main>
            <div className="body-container">
                <MyImage />
                <AboutMe />
                <Experience />
                <Skills />
                <Teaching />
                <Education />
            </div>
        </main>
    );
}

export default MainContent;
