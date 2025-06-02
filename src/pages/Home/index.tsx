import React from 'react';

const Home : React.FC = () => {
  return (
     <div className="flex flex-1 flex-col gap-4 text-primary">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl p-4 lg:px-6 flex flex-col gap-3" >
                <h1 className='text-center text-xl md:text-3xl font-semibold'> What is 
                  <span className='py-1 px-2 rounded-xs bg-gradient-to-r from-gray-800/70 to-red-800/70 mx-4'> useMemo </span>
                   ?  </h1>
                   <p className='md:text-xl text-pretty'> <span className='font-semibold text-xl md:text-2xl text-red-900 pr-1'> useMemo </span> is a React hook that remembers the result of an expensive computation so that it's only recalculated when needed

                   </p>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div>
  )
}

export default Home;
