import { ChangeEventHandler } from "react"

interface ISlider {
  name: string,
  value: number,
  min: number,
  max: number,
  handler: ChangeEventHandler,
  disabled: boolean
}

const Slider = ({name, value, min, max, handler, disabled}: ISlider) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h2>{name}</h2>
        <h2>{value}%</h2>
      </div>
      <input disabled={disabled} onChange={handler} className="w-full" min={min} max={max} value={value} type="range" />
    </div>
  )
}

export default Slider