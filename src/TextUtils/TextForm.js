import React, { useState } from "react";
// import propTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function TextForm(props) {
  const [text, settext] = useState("");

  // Convert to UpperCase
  const handleUpClick = () => {
    console.log("Convert in UpperCase Text");
    let newText = text.toUpperCase();
    settext(newText);
  };
  const handleOnChange = (event) => {
    // console.log("on Change");
    settext(event.target.value);
  };
  // Convert To LowerCase

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("Convert in LowerCase Text");
    settext(newText);
  };

  // Copy Test

  const handleCopy = () => {
    console.log("Copy to Clipboard");
    var text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  };

  // Clear Text

  const handleClearClick = () => {
    let newText = "";
    console.log("Clear Text");
    settext(newText);
  };

  let navbar = {
    potision: "fixed",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" style={navbar}>
        <div className="container-fluid">
          <p className="navbar-brand" href="/">
            {props.title}
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"style={{fontSize:"18px"}}><b>
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
                >
                  {props.Home}
                </Link>
                </b> </li>
              <li className="nav-item" style={{fontSize:"18px"}}><b>
                <Link className="nav-link text-light" to="/about">
                  {props.About}
                </Link>
                </b> </li>
            </ul>

            <div className="d-flex">
              <div
                className="bg-primary rounded mx-3"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>

            <div className="d-flex">
              <div
                className="bg-danger rounded mx-3"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>

            <div className="d-flex">
              <div
                className="bg-success rounded mx-3"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>

            <div className="d-flex">
              <div
                className="bg-warning rounded mx-3"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark
              </label>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#ffffff" : "#1d2a47" }}
      >
        <h2> {props.heading} </h2>
        {/*  style={{color:props.mode ==='white'?'black':'white'}} */}
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "#ffffff" : "#1d2a47",
              color: props.mode === "light" ? "#1d2a47" : "#ffffff",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          {/* style={{backgroundColor:props.mode==='white'?'#1d2a47':'light',color:props.mode==='white'?'#1d2a47':'light'}} */}
        </div>

        <div className="container d-block">
          <button
            className="btn btn-primary"
            disabled={text.length === 0}
            onClick={handleUpClick}
          >
            Convert To UpperCase
          </button>
          <button
            className="btn btn-success mx-2 my-1"
            disabled={text.length === 0}
            onClick={handleLoClick}
          >
            Convert To LowerCase
          </button>
        </div>

        <div className="container d-block my-2">
          <button
            className="btn btn-warning mx-2 my-1"
            disabled={text.length === 0}
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="btn btn-danger mx-2 my-1"
            disabled={text.length === 0}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "#ffffff" : "#1d2a47" }}
      >
        <h1>Your Text Summary</h1>

        {/* text.split("").length is used for check how many words  & length is used for check length */}
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>

        {/* 0.008 *  text.split(" ").length is used for check time to read written words */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>

        <h2 className="my-1">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
     
    </>
  );
}

// Navbar.propTypes={title:propTypes.string,
//     AboutUs :propTypes.string}
