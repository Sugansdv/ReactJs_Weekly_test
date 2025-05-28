import "./App.css";
import FAQAccordion from "./Components/FAQAccordion";
import ImageGallery from "./Components/ImageGallery";
import ThemeToggle from "./Components/ThemeToogle";
import BMICalculator from "./Components/BMICalculator";
import CharCounter from "./Components/CharCounter";

function App() {
  return (
    <>
      <div className="header">
        <div className="left">Suganya S</div>
        <div className="right">React Project</div>
         <div className="right">27-05-2025</div>
      </div>
      <h1 className="Ques">Project 1: FAQ Accordion</h1>
      <FAQAccordion />
      <hr />
      <hr />
      <br />
      <h1 className="Ques">Project 2:Image Gallery</h1>
      <ImageGallery />
      <hr />
      <hr />
      <br />
      <h1 className="Ques">Project 3:Dark/Light Theme Toggle</h1>
      <ThemeToggle />
      <hr />
      <hr />
      <br />
      <h1 className="Ques">Project 4: BMI Calculator</h1>
      <BMICalculator />
      <hr />
      <hr />
      <br />
      <h1 className="Ques">Project 5: Character Counter App</h1>
      <CharCounter />
    </>
  );
}

export default App;
