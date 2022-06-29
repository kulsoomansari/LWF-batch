import React, { useState } from 'react'
import workApi from './Api/workApi'

export const HowItWorks = () => {
  const [state, setstate] = useState(workApi)
  return (
    <>
    <div className='container work-container'>
      <h1>how does it works</h1>
      <div className='row'>
          {state.map((currelement) =>{
            return(
              <>
                      <div className='col-12 col-lg-4'>
                        <i class={`fontawesome-style ${currelement.logo}`}></i>
                        <h2>{currelement.title}</h2>
                        <p>{currelement.info}</p>
                      </div>

              </>
            )
          })}
      </div>

    </div>
    </>
  )
}

