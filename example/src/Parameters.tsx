import { $ } from 'woby'
// import { ChromePicker } from "woby-color"
import { useClickOutside } from "./useClickOutside.hook"

export const Parameters = ({ handleChange, handleBgChange, handleBaseBgChange, handleLabelColorChange, handleBooleanPropChange, handleReset }) => {
    const barColor = $("#6a1b9a")
    const baseBgColor = $("#e0e0de")
    const labelColor = $("#e80909")
    const cpOne = useClickOutside(false)
    const cpTwo = useClickOutside(false)
    const cpThree = useClickOutside(false)

    const handleColorChangeCpOne = (color) => {
        barColor(color.hex)
        handleBgChange(color.hex)
    }

    const handleColorChangeCpTwo = (color) => {
        baseBgColor(color.hex)
        handleBaseBgChange(color.hex)
    }

    const handleColorChangeCpThree = (color) => {
        labelColor(color.hex)
        handleLabelColorChange(color.hex)
    }

    const param = `flex justify-start m-5 [&_label]:mr-2.5 [&_button]:mr-2.5 [&_input]:border-[gray] [&_input]:border-solid [&_input]:border-[1px]`

    return <>
        <div className={param}>
            <label htmlFor="completed">completed</label>
            <input
                name="completed"
                id="completed"
                type="text"
                placeholder="1-100"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="maxCompleted">max completed</label>
            <input
                name="maxCompleted"
                id="maxCompleted"
                type="text"
                placeholder="number"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="customLabel">custom label</label>
            <input
                name="customLabel"
                id="customLabel"
                type="text"
                placeholder="any text"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <button onClick={() => cpOne.isVisible(true)}>
                Choose Bar Color
            </button>
            {
                cpOne.isVisible && (
                    <div
                        ref={cpOne.ref}
                        style={{ position: "absolute", marginTop: "30px" }
                        }
                    >
                        {/*<ChromePicker
              name="barColor"
              color={barColor}
              onChangeComplete={handleColorChangeCpOne}
            /> */}
                    </div>
                )}
            <input
                value={barColor}
                name="bgColor"
                type="text"
                onChange={(event) => {
                    handleChange(event)
                    barColor(event.target.value)
                }}
            />
        </div>
        <div className={param}>
            <label htmlFor="height">height</label>
            <input
                name="height"
                id="height"
                type="text"
                placeholder="20px"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="width">width</label>
            <input
                name="width"
                id="width"
                type="text"
                placeholder="100%"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="borderRadius">border radius</label>
            <input
                name="borderRadius"
                id="borderRadius"
                type="text"
                placeholder="50px"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="labelAlignment">label alignment</label>
            <select
                name="labelAlignment"
                defaultValue="right"
                id="labelAlignment"
                onChange={handleChange}
            >
                <option value="left">left</option>
                <option value="center">center</option>
                <option value="right">right</option>
                <option value="outside">outside</option>
            </select>
        </div>
        <div className={param}>
            <button onClick={() => cpThree.isVisible(true)}>
                Choose Label Color
            </button>
            {
                cpThree.isVisible && (
                    <div
                        ref={cpThree.ref}
                        style={{ position: "absolute", marginTop: "30px" }
                        }
                    >
                        {/*<ChromePicker
              name="labelColor"
              color={labelColor}
              onChangeComplete={handleColorChangeCpThree}
            /> */}
                    </div>
                )}
            <input
                value={labelColor}
                name="labelColor"
                type="text"
                onChange={(event) => {
                    handleChange(event)
                    baseBgColor(event.target.value)
                }}
            />
        </div>
        <div className={param}>
            <label htmlFor="labelSize">label size</label>
            <input
                name="labelSize"
                id="labelSize"
                type="text"
                placeholder="15px"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="isLabelVisible">is label visible</label>
            <select
                name="isLabelVisible"
                defaultValue="true"
                id="isLabelVisible"
                onChange={(e) =>
                    handleBooleanPropChange(e.target.value, "isLabelVisible")
                }
            >
                <option value={"true"}> true</option>
                <option value={"false"}>false</option>
            </select>
        </div>
        <div className={param}>
            <button onClick={() => cpTwo.isVisible(true)}>
                Choose "non-completed" Bar Color
            </button>
            {
                cpTwo.isVisible && (
                    <div
                        ref={cpTwo.ref}
                        style={{ position: "absolute", marginTop: "30px" }
                        }
                    >
                        {/*<ChromePicker
              name="baseBgColor"
              color={baseBgColor}
              onChangeComplete={handleColorChangeCpTwo}
            /> */}
                    </div>
                )}
            <input
                value={baseBgColor}
                name="baseBgColor"
                type="text"
                onChange={(event) => {
                    handleChange(event)
                    baseBgColor(event.target.value)
                }}
            />
        </div>
        <div className={param}>
            <label htmlFor="margin">margin</label>
            <input name="margin" id="margin" type="text" onChange={handleChange} />
        </div>
        <div className={param}>
            <label htmlFor="padding">padding</label>
            <input
                name="padding"
                id="padding"
                type="text"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="transitionDuration">transition duration</label>
            <input
                name="transitionDuration"
                id="transitionDuration"
                type="text"
                onChange={handleChange}
            />
        </div>
        <div className={param}>
            <label htmlFor="transitionTimingFunction">
                transition timing function
            </label>
            <select
                name="transitionTimingFunction"
                defaultValue="right"
                id="transitionTimingFunction"
                onChange={handleChange}
            >
                <option value="ease-in-out">ease -in -out</option>
                <option value="ease">ease</option>
                <option value="linear">linear</option>
                <option value="ease-in">ease -in</option>
                <option value="ease-out">ease - out</option>
            </select>
        </div>
        <div className={param}>
            <label htmlFor="animateOnRender">animate on render</label>
            <select
                name="animateOnRender"
                defaultValue="false"
                id="animateOnRender"
                onChange={(e) =>
                    handleBooleanPropChange(e.target.value, "animateOnRender")
                }
            >
                <option value={"true"}> true</option>
                <option value={"false"}>false</option>
            </select>
        </div>
        <div className={param}>
            <label htmlFor="dir">direction</label>
            <select name="dir" defaultValue="ltr" id="dir" onChange={handleChange}>
                <option value="ltr">ltr</option>
                <option value="rtl">rtl</option>
                <option value="auto">auto</option>
            </select>
        </div>
    </>
}

