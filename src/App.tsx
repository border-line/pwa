import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Card, Image, Upload } from "antd";
import { useVoiceRecorder } from "use-voice-recorder";

function App() {
  const [records, updateRecords] = useState<string[]>([]);
  const { isRecording, stop, start } = useVoiceRecorder((data) => {
    updateRecords([...records, window.URL.createObjectURL(data)]);
  });

  return (
    <div className="App">
      <header className="App-header">
        <Card style={{ marginTop: "20px", width: "500px" }}>
          <Image width={"400px"} height={"400px"} src="" />
          <br />
          <Upload>
            <Button>Upload Images</Button>
          </Upload>
        </Card>
        <Card style={{ marginTop: "20px", width: "500px" }}>
          <h1>Voice Record</h1>
          <div>
            <h3>On air: {isRecording ? "on" : "off"}</h3>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
          </div>
          <div>
            <h1>Records:</h1>
            {records.map((data, idx) => (
              <div key={idx}>
                <audio src={data} controls preload={"metadata"} />
              </div>
            ))}
          </div>
        </Card>
      </header>
    </div>
  );
}

export default App;
