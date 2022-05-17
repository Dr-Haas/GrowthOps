import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const FaqAccordion = ({ extraClass, extraFaq }) => {
  const [activeClass, setActiveClass] = useState("1st");
  const setActive = (value) =>
      value === activeClass ? setActiveClass("") : setActiveClass(value),
    activeClassChange = (value) =>
      value === activeClass ? "accordion-active" : "";
  return (
    <Accordion
      className={`${extraClass ? extraClass : "accordion-bordered"}`}
      defaultActiveKey={activeClass}
      id="accordionFaqOne"
    >
      <div className={`accordion-item ${activeClassChange("1st")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="1st"
          onClick={() => setActive("1st")}
        >
          C'est quoi un Growth Ops ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1st">
          <div className="accordion-content">
            Le Growth Ops est responsable de l'efficacité des processus d'acquisition. Il met en place des process d'organisation (automatisation, outils et reporting).
          </div>
        </Accordion.Collapse>
      </div>
      <div className={`accordion-item ${activeClassChange("2nd")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="2nd"
          onClick={() => setActive("2nd")}
        >
          C'est quoi un Growth hacking ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2nd">
          <div className="accordion-content">
          Littéralement "piratage de croissance", le growth hacking est le plus souvent défini comme une stratégie, un ensemble de techniques marketing, voire même un état d'esprit permettant d'assurer à l'entreprise une croissance forte et à faible coût
          </div>
        </Accordion.Collapse>
      </div>
      {/* <div className={`accordion-item ${activeClassChange("3rd")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="3rd"
          onClick={() => setActive("3rd")}
        >
          Business Development Most Reasons ?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3rd">
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse
            ultrices gravida commodo
          </div>
        </Accordion.Collapse>
      </div>
      <div className={`accordion-item ${activeClassChange("4th")}`}>
        <Accordion.Toggle
          as={"h5"}
          className="accordion-title"
          eventKey="4th"
          onClick={() => setActive("4th")}
        >
          Improve Performance and Efficiency
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4th">
          <div className="accordion-content">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse
            ultrices gravida commodo
          </div>
        </Accordion.Collapse>
      </div> */}
      {extraFaq && (
        <Fragment>
          <div className={`accordion-item ${activeClassChange("5th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="5th"
              onClick={() => setActive("5th")}
            >
              How To Gain Knowladge About SEO ?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("6th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="6th"
              onClick={() => setActive("6th")}
            >
              Benefit Of Digital Marketing ?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("7th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="7th"
              onClick={() => setActive("7th")}
            >
              Business Development Most Reasons ?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("8th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="8th"
              onClick={() => setActive("8th")}
            >
              Improve Performance and Efficiency
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("9th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="9th"
              onClick={() => setActive("9th")}
            >
              Business Development Most Reasons ?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
          <div className={`accordion-item ${activeClassChange("10th")}`}>
            <Accordion.Toggle
              as={"h5"}
              className="accordion-title"
              eventKey="10th"
              onClick={() => setActive("10th")}
            >
              Improve Performance and Efficiency
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10th">
              <div className="accordion-content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida commodo
              </div>
            </Accordion.Collapse>
          </div>
        </Fragment>
      )}
    </Accordion>
  );
};
export default FaqAccordion;
