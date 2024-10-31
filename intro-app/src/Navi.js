import React, {useRef, useEffect} from "react";
import styles from "./navi.module.scss";

function Navi() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  useEffect(() => {
    console.log("cpomponent has been mounted");
  })

    return (
      <div>
        <input ref={inputEl} type="text"></input>
        <button className={styles.success} 
                onClick={onButtonClick}>click me!
        </button>
      </div>
    );
}

export default Navi;