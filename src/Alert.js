import React from 'react'

function Alert(props) {
    const capitalise=(word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
    return (
        props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalise(props.alert.type)} :</strong> {props.alert.msg}
        </div>
    )
}

export default Alert
