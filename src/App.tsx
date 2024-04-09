import Filters, { IOption } from "./components/Filters"
import example from './assets/example.png'
import Button, { ButtonTypes } from "./components/Button"
import { useState } from "react"

function App() {

  const [image, setImage] = useState('')
  const [filter, setFilter] = useState('')
  const [isReset, setIsReset] = useState(false)

  const getStyles = (options: IOption[]) => {
    const filters = options.map(option => `${option.property}(${option.value}${option.unit})`)
    setFilter(filters.join(' '))
  }

  const savePhoto = () => {
    if (image) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = 600
      canvas.height = 400
      if (ctx) ctx.filter = filter
      const canvasImage = new Image()
      canvasImage.src = image
      ctx?.drawImage(canvasImage, 0, 0, canvas.width, canvas.height)
    
      const link = document.createElement('a')
      link.download = "image.jpg"
      link.href = canvas.toDataURL()
      link.click()
    }
  }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-sky-100'>
      <div className='shadow-2xl p-10 bg-white rounded-lg'>
        <h2 className="text-[36px] mb-4">Photo Editor</h2>
        <div className="flex flex-col desktop:flex-row space-y-4 desktop:space-x-8">
          <Filters reset={() => setIsReset(false)} image={image} getStyles={getStyles} isReset={isReset}/>
          <img style={{filter: filter}} className="w-full desktop:w-[600px] h-[400px] rounded-md" src={image ? image : example} alt="" />
        </div>
        <div className="flex flex-col space-y-2 mobile:space-y-0 mobile:flex-row justify-between mt-6">
          <Button onClick={() => setIsReset(true)} type={ButtonTypes.SECONDARY}>Reset</Button>
          <div className="grid grid-cols-2 mobile:flex space-x-2">
            <Button type={ButtonTypes.TERTIATY}>
              <label className="cursor-pointer -m-3 p-3 block" htmlFor="img">Choose</label>
              <input onChange={e => {
                const file= e.target.files ? e.target.files[0] : null
                if (file) setImage(URL.createObjectURL(file))
                
              }} className="hidden" id="img" type="file" />
            </Button>
            <Button onClick={savePhoto} type={ButtonTypes.SECONDARY}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
