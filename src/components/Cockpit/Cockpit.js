import React, { useEffect } from "react";
import styleClasses from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //http request
    setTimeout(() => {
      alert("saved data to cloud!!");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styleClasses.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styleClasses.red); //classes = ["red"]
  }
  if (props.personsLength <= 1) {
    classes.push(styleClasses.bold); //classes = ["red", bold]
  }

  return (
    <div className={styleClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
