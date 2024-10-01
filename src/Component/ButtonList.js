import React from 'react'
import Button from './Button'
import "../style/buttonList.css"

const ButtonList = () => {
    const List=["ALL","Game","Dance","Kapilsharma","Valantines","Sports","Study","Cooking","Cricket","Gaming","Live","Soccer","Valentines"]
  return (
    <div className=' bar flex w-[80%] overflow-x-scroll  items-center mx-auto '>

     {List.map((e)=>(
<Button name={e} key={Math.random()*100}/>
     ))}
    </div>
  )
}

export default ButtonList
