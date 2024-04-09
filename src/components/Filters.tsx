import { ChangeEventHandler, useEffect, useState } from "react"
import Button, { ButtonTypes } from "./Button"
import Slider from "./Slider"

export interface IOption {
  name: string,
  property: string,
  value: number,
  range: {
    min: number,
    max: number,
  },
  unit: string
}

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
    name: 'Inversion',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Opacity',
    property: 'opacity',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
]

interface IFilter {
  getStyles: (options: IOption[]) => void,
  isReset: boolean,
  image: string,
  reset: () => void
}

const Filters = ({getStyles, isReset, reset, image}: IFilter) => {

  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [activeOption, setActiveOption] = useState(0)

  const handlerSlider: ChangeEventHandler<HTMLInputElement> = (e) => {
    setOptions([...options.map((option, i) => {
      return i === activeOption ? {...option, value: +e.target.value} : option
    })])
    getStyles(options)
  }

  useEffect(() => {
    if (isReset) {
      setOptions([...DEFAULT_OPTIONS])
      reset()
    } else {
      getStyles(options)
    }
  }, [isReset])

  return (
    <div className="flex flex-col justify-between p-5 border-gray-300 border-[1px] rounded-lg">
      <div>
        <h2>Filters</h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-2 mt-4">
          {options.map((option, i)=> 
          <Button 
            disabled={!image}
            key={i}
            type={activeOption === i ? ButtonTypes.SECONDARY : ButtonTypes.PRIMARY}
            onClick={() => setActiveOption(i)}
          >
            {option.name}
          </Button>)}
        </div>
      </div>
      <Slider 
        disabled={!image}
        handler={handlerSlider}
        value={options[activeOption].value} 
        name={options[activeOption].name}
        min={options[activeOption].range.min}
        max={options[activeOption].range.max}
      />
    </div>
  )
}

export default Filters