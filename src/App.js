import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import "./index.css";
import React, { useState } from "react";


export default function App() {
  const [mode, setmode] = useState("light");
  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#092e64";
      showAlert("Dark mode has beeen enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils is running';
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beeen enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils"/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} />} /> */}

            {/* <Route
              exact
              path="/"
              element={ */}
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                 />
              {/* } */}
            {/* />
          </Routes> */}
        </div>
      {/* </Router> */}
      {/* <About mode={mode} /> */}
    </>
  );
}
