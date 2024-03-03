// Slider.tsx
import React from "react";

type SliderProps = {
  min: number;
  max: number;
  value: number[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RangeSlider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  handleChange,
}) => {
  return (
    <div className='slider-container'>
      <input
        type='range'
        className='slider'
        min={min}
        max={max}
        value={value[0]} // Assuming only one value is needed for the slider
        onChange={handleChange}
      />
    </div>
  );
};

export default RangeSlider;
