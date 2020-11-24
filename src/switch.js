import React, { useRef } from 'react'
import './switch.css'
function Switch({setDarkMode,checked, setChecked}) {
    const ref = useRef(null);
    function handleChange() {    
        //console.log(event.target.checked);//esto me da el dato que necesito pero no se utilizan hooks
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
    }
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" className="checkbox" checked={checked} id="checkbox" />
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    );
}
export default Switch;