// // Intro.jsx

// import { useState, useEffect } from 'react'

// export default function Intro({ children }) {

//   const [ready, setReady] = useState(false)

//   useEffect(() => {
//     // Load assets
//   }, [])

//   return (
//     <>
//       {ready ? (
//         children 
//       ) : (
//         <div className="loading">
//           <div className="progress"></div>
//           <button onClick={() => setReady(true)}>Start</button>
//         </div>
//       )}
//     </>
//   )

// }



import { Suspense, cloneElement, useEffect, useState } from 'react'

function Ready({ setReady }) 
{
  useEffect(() => () => void setReady(true), [])
  return null
}

export default function Intro({ children })
{
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)

  return (
    <>
      <Suspense fallback={<Ready setReady={setReady} />}>
        {cloneElement(children, { ready: clicked && ready })}
      </Suspense>

      <div className={`fullscreen bg ${!ready ? 'ready' : 'notready'} ${clicked && 'clicked'}`}>
        <div className="stack">
          <a href="#" onClick={ () => setClicked(true) }>
            { !ready ? 'loading' : 'Ready to rock!' }
          </a>
        </div>
      </div>
    </>
  )
}
