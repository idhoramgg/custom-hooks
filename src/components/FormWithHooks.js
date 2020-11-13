import React from 'react'
import useInputState from '../hooks/useInputState';

const FormWithHooks = () => {
    const [name, setName] = useInputState('')
    const [password, setPassword] = useInputState('')
    
    return(
        <div>
            <h1> The value name is.. {name}</h1>
            <input type="text" value={name} onChange={setName} />
            
            <hr/>
            <h1>The value password is...{password}</h1>
            <input type="text" value={password} onChange={setPassword}/>
        </div>
    )
}
export default FormWithHooks