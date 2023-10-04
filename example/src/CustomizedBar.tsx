import { $, $$ } from "voby"

import { Parameters } from "./Parameters"
import { ProgressBar } from "../../src/index"

export const CustomizedBar = () => {
  const state/* : ProgressBarProps */ = {
    completed: $(50),
    bgColor: $("#6a1b9a"),
    height: $("20px"),
    width: $("100%"),
    borderRadius: $("50px"),
    labelAlignment: $<"right" | "left" | "center" | "outside">("right"),
    baseBgColor: $("#e0e0de"),
    labelColor: $("#e80909"),
    labelSize: $("15px"),
    margin: $(""),
    padding: $(""),
    isLabelVisible: $(true),
    transitionDuration: $("1s"),
    transitionTimingFunction: $("ease-in-out"),
    dir: $<"ltr" | "rtl" | "auto">("ltr"),
    maxCompleted: $(100),
    customLabel: $<string>(undefined),
    animateOnRender: $(false),
  }

  const showCode = $(false)
  const codeValue = $("")
  const copySuccess = $("Copy")
  const textAreaRef = $<HTMLTextAreaElement>(null)

  const handleChange = (event) => state[event.target.name](event.target.value)

  const handleBgChange = (color) => state.bgColor(color)

  const handleBaseBgChange = (color) => state.baseBgColor(color)

  const handleLabelColorChange = (color) => state.labelColor(color)

  const handleReset = () => {
    state.completed(50)
    state.bgColor("#6a1b9a")
    state.height("20px")
    state.width("100%")
    state.borderRadius("50px")
    state.labelAlignment("right")
    state.baseBgColor("#e0e0de")
    state.labelColor("#e80909")
    state.labelSize("15px")
    state.margin("")
    state.padding("")
    state.isLabelVisible(true)
    state.transitionDuration("1s")
    state.transitionTimingFunction("ease-in-out")
    state.dir("ltr")
    state.maxCompleted(100)
    state.customLabel(undefined)
    state.animateOnRender(false)

    showCode(false)
  }

  const handleBooleanPropChange = (value, propName) => state[propName](value === "true")

  const copyToClipboard = (e) => {
    $$(textAreaRef).select()
    document.execCommand("copy")
    e.target.focus()
    copySuccess("Copied!")
  }

  const generateCode = () => {
    copySuccess("Copy")
    showCode(true)
    const tempCode = `<ProgressBar
    completed={${state.completed()}}
    ${state.bgColor() === "#6a1b9a" ? "" : `bgColor="${state.bgColor()}"`}
    ${state.height() === "20px" ? "" : `height="${state.height()}"`}
    ${state.width() === "100%" ? "" : `width="${state.width()}"`}
    ${state.borderRadius() === "50px"
        ? ""
        : `borderRadius="${state.borderRadius()}"`
      }
    ${state.labelAlignment() === "right"
        ? ""
        : `labelAlignment="${state.labelAlignment()}"`
      }
    ${state.isLabelVisible() ? "" : `isLabelVisible={false}`}
    ${state.baseBgColor() === "#e0e0de"
        ? ""
        : `baseBgColor="${$$(state).baseBgColor}"`
      }
    ${state.labelColor() === "#fff" ? "" : `labelColor="${state.labelColor()}"`}
    ${state.labelSize() === "15px" ? "" : `labelSize="${state.labelSize()}"`}
    ${state.margin() === "" ? "" : `margin="${state.margin()}"`}
    ${state.padding() === "" ? "" : `padding="${state.padding()}"`}
    ${state.transitionDuration() === "1s"
        ? ""
        : `transitionDuration="${$$(state).transitionDuration}"`
      }
    ${state.transitionTimingFunction() === "ease-in-out"
        ? ""
        : `transitionTimingFunction="${state.transitionTimingFunction()}"`
      }
    ${state.animateOnRender() ? `animateOnRender` : ""}
    ${state.dir() === "ltr" ? "" : `dir="${state.dir()}"`}
    ${state.maxCompleted() === 100 ? "" : `maxCompleted={${state.maxCompleted()}}`}
    ${state.customLabel() ? `customLabel="${state.customLabel()}"` : ""}
    />`
    const code = tempCode.replace(/^\s*$(?:\r\n?|\n)/gm, "")
    codeValue(code)
  }

  return <>
    <ProgressBar {...state} />
    <Parameters
      handleChange={handleChange}
      handleBgChange={handleBgChange}
      handleBaseBgChange={handleBaseBgChange}
      handleLabelColorChange={handleLabelColorChange}
      handleBooleanPropChange={handleBooleanPropChange}
      handleReset={handleReset}
    />
    <button className="bg-[darkseagreen] text-[large] m-5 p-2.5" onClick={handleReset}>
      RESET
    </button>
    <button className="bg-[cyan] text-[large] p-2.5 rounded-[10px]" onClick={generateCode}>
      Generate Component Code
    </button>
    <div>
      {
        showCode && (
          <div className="relative [&_button]:absolute [&_button]:right-2.5 [&_button]:top-2.5
[&_textarea]:w-full [&_textarea]:h-[200px] [&_textarea]:m-0 [&_textarea]:p-0">
            <button onClick={copyToClipboard}>{copySuccess}</button>
            <textarea
              ref={textAreaRef}
              value={codeValue}
              onChange={(e) => codeValue(e.target.value)}
            />
          </div>
        )}
    </div>
  </>
}
