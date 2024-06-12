import { useState } from "react";

const ChildComponent = (props) => {
    const [textValue, setTextValue] = useState('');
    const handleSubmit = () => {
        props.gettextvalue(textValue);
        setTextValue('');
    }
    return (
        <div className="text-container">
            <input type="text" placeholder="Enter Color Name" value={textValue} onChange={(e) => setTextValue(e.target.value) }/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default ChildComponent;