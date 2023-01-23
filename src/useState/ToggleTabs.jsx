import React, {useState} from 'react'

const ToggleTabs = () => {

    

    const [isToggle, setIsToggle] = useState(1)

    const toggleTab = (index) =>{
        setIsToggle(index)
        console.log('estou funcionando')
    }

   return {toggleTab}
  }
  

  
  export default ToggleTabs
