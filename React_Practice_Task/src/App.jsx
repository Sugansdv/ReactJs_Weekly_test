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
        <div className="left">Suganya</div>
        <div className="right">React Practice Task</div>
      </div>
      <h1 className="Ques">Project 1: FAQ Accordion – expand/collapse answers</h1>
      <FAQAccordion />
      <hr />
      <hr />
      <br />
      <h1 className="Ques">Project 2:Image Gallery – show images in grid, highlight clicked</h1>
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
      <h1 className="Ques">Project 5: Character Counter App – count typed characters</h1>
      <CharCounter />
    </>
  );
}

export default App;
