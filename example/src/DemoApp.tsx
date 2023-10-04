import { $, useEffect } from "voby"
import { CustomizedBar } from "./CustomizedBar"
import { ProgressBar } from "../../src/index"

export const DemoApp = () => {
  const completed = $(0)

  useEffect(() => {
    setInterval(() => completed(Math.floor(Math.random() * 100) + 1), 2000)
  })

  return <div className="App">
    <h3>Randomly generated completed value</h3>
    <ProgressBar completed={completed} />
    <hr />
    <h3>Interactive Generator</h3>
    <CustomizedBar />
    <div style={{ marginTop: "100px" }}></div>
  </div>
}


