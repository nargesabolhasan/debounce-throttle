import React from 'react'

const Debounce = () => {
  return (
    <div>Dibounce</div>
  )
}

export default Debounce

function debounce(callBack,delay) {
    return (...args)=>{
        setTimeout(()=>{callBack(...args)},delay)

    }
}
const Naming=(name)=>{
  console.log(name)
}

const resultFunc=debounce(Naming,2000)
resultFunc("ali",)