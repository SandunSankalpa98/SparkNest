import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Hero() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className='my-10 flex flex-col items-center gap-5'>
      <h2 className="text-3xl font-bold text-center">Top 20 Productive ideas for your next startup</h2>
      <h2 className='text-center my-3'><strong className='text-secondary'>Like your favourite ideas.</strong>
        Write your best ideas, No account needed</h2>

      <div>
        <select 
        onChange={(event)=>setTheme(event.target.value)}
        className="select select-bordered w-full max-w-xs">
            <option disabled selected>Select theme</option>
            <option>light</option>
            <option>dark</option>
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>forest</option>
            <option>aqua</option>
            <option>lofi</option>
            <option>pastel</option>
            <option>fantasy</option>
            <option>wireframe</option>
            <option>sunset</option>
        </select>
      </div>
    </div>
  )
}

export default Hero
