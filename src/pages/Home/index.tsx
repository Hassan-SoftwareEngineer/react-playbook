import BasicSyntax from '@/components/custom/atoms/BasicSyntax';
import WhatIs from '@/components/custom/atoms/WhatIs';
import WhenToUse from '@/components/custom/atoms/WhenToUse';
import Examples from '@/components/custom/molecules/Examples';
import React from 'react';

const Home : React.FC = () => {
  return (
     <div className="flex flex-1 flex-col gap-4 text-primary">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <WhatIs />
                <WhenToUse />
                <BasicSyntax />
              </div>
               <Examples />
            </div>
  )
}

export default Home;
