import React, { useState } from 'react'
import workApi from './Api/workApi'


const HowItWorks = () => {
    const [state, setstate] = useState(workApi)
  return (
    <div className='container work-container'>
 <h1 className='main-heading text-center'>How It works</h1>
 <div className='row'>
{state.map((curelement) =>{
    return(
        <>
     <div className='col-12 col-lg-4'>
     <i class={`fontawesome-style ${curelement.logo}`}></i>
     <h2>{curelement.title}</h2>
     <p className='w-100'>{curelement.info}</p>
     </div>
        </>
    )
})}

 </div>
</div>
  )
}

export default HowItWorks