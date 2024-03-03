import { img_filters } from "@/constants";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const selectConfigs = [
  { property: "filter", placeholder: "Choose a filter", options: img_filters },
];

type ImageProps = {
  handleInputChange: (property: string, value: string) => void;
};

const ImageFilter = ({ handleInputChange }: ImageProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    handleInputChange("filter", selectedValue);
  };

  return (
    <div>
      <Select value={selectedOption} onValueChange={handleSelectChange}>
        <SelectTrigger className='no-ring w-full rounded-sm border border-primary-grey-200'>
          <SelectValue placeholder='Choose a filter' />
        </SelectTrigger>
        <SelectContent className='border-primary-grey-200 bg-white text-gray-900'>
          {selectConfigs[0].options.map((option) => (
            <SelectItem key={option.property} value={option.property}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ImageFilter;
