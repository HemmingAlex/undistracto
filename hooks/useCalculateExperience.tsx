import React, {useState, useEffect} from 'react'

function useCalculateExperience(initialData:number) {

    const [experience, setExperience] = useState(0)

    useEffect(()=>{
setExperience(experience)

    },[])

  return ([ experience, setExperience]
  )
}

export default useCalculateExperience