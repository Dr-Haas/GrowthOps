import { Fragment } from "react";

const Paggination = ({ state, setActive, active }) => {
  return (
    <Fragment>
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActive(active === 1 ? 1 : active - 1);
          }}
        >
          <i className="far fa-angle-left" />
        </a>
      </li>
      {state &&
        state.map((s, i) => (
          <li key={i}>
            <a
              className={` ${active === s ? "active" : ""}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(s);
              }}
            >
              {s}
            </a>
          </li>
        ))}
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActive(active === state.length ? state.length : active + 1);
          }}
        >
          <i className="far fa-angle-right" />
        </a>
      </li>
    </Fragment>
  );
};
export default Paggination;
