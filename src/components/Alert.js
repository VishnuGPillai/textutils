import React from 'react'

export default function Alert(props) {
    const cap = (word) => {
        let fw = word.charAt(0).toUpperCase();
        return (fw + word.slice(1))
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type)}</strong> :{props.alert.message}
            <button type="button" class="btn - close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div >
    )
}

