import Header from '../components/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Header></Header>
            {/* <h1>Jai Jagannath</h1> */}
            {/* <Home /> */}
            <MainContent />
            <Footer />
        </>
    );
}

export default Home;
