import { Fragment, useState } from "react";
import useClickOutside from "../useClickOutside";

const NiceSelect = ({ value, extraClass, disable }) => {
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  const [toggle, setToggle] = useState(false);
  const [activeValue, setActiveValue] = useState(disable ? disable : value[0]);
  return (
    <Fragment>
      <div
        className={`nice-select ${toggle ? "open" : ""} ${
          extraClass ? extraClass : ""
        }`}
        onClick={() => setToggle(!toggle)}
        ref={domNode}
      >
        <span className="current">{activeValue}</span>
        <ul className="list">
          {disable && <li className="option disabled">{disable}</li>}
          {value &&
            value.map((v, i) => (
              <li
                data-value={v}
                className="option"
                key={i}
                onClick={() => setActiveValue(v)}
              >
                {v}
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};
export default NiceSelect;
