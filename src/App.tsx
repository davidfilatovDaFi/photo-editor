import Filters from "./components/Filters"
import example from './assets/example.jpg'
import Button, { ButtonTypes } from "./components/Button"

function App() {

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-sky-100'>
      <div className='shadow-2xl p-10 bg-white rounded-lg'>
        <h2 className="text-[36px] mb-4">Photo Editor</h2>
        <div className="flex space-x-8">
          <Filters/>
          <img className="w-[600px] h-[400px] rounded-md" src={example} alt="" />
        </div>
        <div className="flex justify-between mt-6">
          <Button type={ButtonTypes.SECONDARY}>Reset</Button>
          <div className="flex space-x-2">
            <Button type={ButtonTypes.TERTIATY}>Choose</Button>
            <Button type={ButtonTypes.SECONDARY}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
