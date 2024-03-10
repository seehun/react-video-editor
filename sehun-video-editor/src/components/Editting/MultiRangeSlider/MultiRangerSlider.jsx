import { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import "./multiRangeSlider.css";

export default function MultiRangeSlider({
  min,
  max,
  onSliderValueChange,
  disabled,
}) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [whatChange, setWhatChange] = useState("");
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (whatChange == "min") {
      //min이 바뀌면
      if (maxValRef.current) {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(+maxValRef.current.value); // + => string을 number로 만들어줌

        if (range.current) {
          range.current.style.left = `${minPercent}%`;
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
      //
    } else {
      //max가 바뀌면
      if (minValRef.current) {
        const minPercent = getPercent(+minValRef.current.value);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
          range.current.style.width = `${maxPercent - minPercent}%`;
        }
      }
      //
    }
  }, [minVal, maxVal]);

  const minChangeHandler = (event) => {
    setWhatChange("min");
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    event.target.value = value.toString();
    onSliderValueChange(value, maxVal);
  };

  const maxChangeHandler = (event) => {
    setWhatChange("max");
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    event.target.value = value.toString();
    onSliderValueChange(minVal, value);
  };

  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={minChangeHandler}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={maxChangeHandler}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={range} className="slider__range"></div>
      </div>
    </div>
  );
}
