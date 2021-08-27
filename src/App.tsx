import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, message, Upload } from "antd";

function App() {
  const props = {
    beforeUpload: (file: any) => {
      if (file.type !== "image/png") {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === "image/png" ? true : Upload.LIST_IGNORE;
    },
    onChange: (info: any) => {
      console.log(info.fileList);
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Upload {...props}>
          <Button>Upload png only</Button>
        </Upload>
      </header>
    </div>
  );
}

export default App;
