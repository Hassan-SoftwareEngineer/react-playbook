import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const WhatIs : React.FC = () => {
  return (
    <div className="bg-muted/50 aspect-video rounded-xl p-4 md:p-6 flex flex-col gap-2" >
                <h1 className='text-center text-xl md:text-3xl font-semibold'> What is 
                  <span className='py-1 px-2 rounded-xs bg-gradient-to-r from-gray-800/70 to-red-800/70 mx-4'> useMemo </span>
                   ?  </h1>
                   <p className='md:text-lg text-pretty mt-2'> <span className='font-semibold text-lg md:text-xl pr-0.5'>  " useMemo " </span> is a React hook that remembers the result of an expensive computation so that it's only recalculated when needed !

                   </p>

                  <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-fuchsia-700 via-red-700 to-fuchsia-700 bg-clip-text text-transparent">Key Points
</h3>

                   <ul className='flex flex-col gap-2 px-1 pt-2'>
                    <li className='flex gap-2'> 
                      <span className='mt-0.5'> <BsFillPatchCheckFill size={18} /> </span>
                       Saves time by remembering slow calculations. </li>
                    <li className='flex gap-2'> 
                      <span className='mt-0.5'> <BsFillPatchCheckFill size={18} /> </span>
                      Runs only when values change. </li>
                    <li className='flex gap-2'> 
                      <span className='mt-0.5'> <BsFillPatchCheckFill size={18} /> </span>
                       Use for heavy work to improve performance. </li>
                   </ul>
                </div>
  )
}

export default WhatIs;
