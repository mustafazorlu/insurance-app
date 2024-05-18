import "./App.css";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

function App() {
    return (
        <div className="App font-inter ">
            <Header />
            <Hero />
            <Services/>
            <Article/>
            <Footer/>
        </div>
    );
}

export default App;
