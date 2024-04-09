
interface ISlider {
  name: string,
  value: number
}

const Slider = ({name, value}: ISlider) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h2>{name}</h2>
        <h2>100%</h2>
      </div>
      <input className="w-full" value={value} type="range" />
    </div>
  )
}

export default Slider