import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInpuntValue ] = useState(''); // '' is the initial state

    const handleInputChange = (e) => {
        setInpuntValue( e.target.value );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ] );
        setInpuntValue('');
        onNewCategory( inputValue.trim() );
       
    }

  return (
    <form onSubmit={  handleSubmit }>
        <input type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form> 
  )
}
