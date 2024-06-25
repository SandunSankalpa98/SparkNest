import React from 'react'
import Header from '../Home/components/Header'
import { ChevronLeft, Info, SendHorizonal } from 'lucide-react'

function AddNewScreen() {
  return (
    <div>
      <Header/>
      <button className='btn mt-7'>
        <ChevronLeft/>
        Back</button>
      <h2 className='font-bold text-2xl mt-5'>From Concept to Creation : Empowering Your Startup Journey</h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea className="textarea textarea-bordered border-primary" placeholder="your idea"></textarea>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <label className='justify-between flex'>
            Your Username
            <span className='flex items-center gap-2'>
                <Info className='h-4 w-4'/>
                No account needed
            </span>
        </label>
        <input type="text" placeholder="Username" className="input input-bordered w-full  border-primary" />
      </div>

      <button className='btn w-full mt-7'>
        Send
        <SendHorizonal className='h-4 w-4'/>
      </button>
    </div>
  )
}

export default AddNewScreen
