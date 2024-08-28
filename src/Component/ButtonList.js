import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const List=["ALL","Movei","Game","Dance","Kapitshrma","Valanatines","Sports","Study","Cooking","Criket","Gaming","Live","Soccer","Valentines"]
  return (
    <div className='flex'>
     {/* <Button name="ALL"/>
     <Button name="Movei"/>
     <Button name="Songs"/>
     <Button name="Sports"/>
     <Button name="Kapit shrma"/>
     <Button name="Valanatines"/> */}

     {List.map((e)=>(
<Button name={e} key={Math.random()*100}/>
     ))}
    </div>
  )
}

export default ButtonList
