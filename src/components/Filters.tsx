import { useState } from "react"
import Button, { ButtonTypes } from "./Button"
import Slider from "./Slider"

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
]

const Filters = () => {

  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [activeOption, setActiveOption] = useState(0)

  return (
    <div className="flex flex-col justify-between p-5 border-gray-300 border-[1px] rounded-lg">
      <div>
        <h2>Filters</h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-2 mt-4">
          {options.map((option, i)=> 
          <Button 
            type={activeOption === i ? ButtonTypes.SECONDARY : ButtonTypes.PRIMARY}
          >
            {option.name}
          </Button>)}
        </div>
      </div>
      <Slider 
        value={options[activeOption].value} 
        name={options[activeOption].name}
      />
    </div>
  )
}

export default Filters