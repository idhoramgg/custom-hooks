import {useState} from 'react';

export default initialValue => {
    // general name for keeping state and function name
    const [value, setValue] = useState(initialValue)
    // use setValue function for updating form value
    const handleChange = () => {
        setValue(!value);
    };
    // return state, and function
    return [value, handleChange];
};
