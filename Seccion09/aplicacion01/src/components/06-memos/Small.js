import React,{memo} from 'react'

const Small = memo(({value}) => { //Memo sirve para guarda en memoria el componente para que solo se lo llame cuando las properties de dicho componente cambiaron
    console.log('me llamaron')
  return (
    <small>
      {value}
    </small>
  )
})

export default Small
