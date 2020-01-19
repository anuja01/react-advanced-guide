import React from 'react';

const FancyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} type='input' name='name' />
    )
})

const setFocus = (event, ref) => {
    ref.current.focus()
    ref.current.value = 'Focused...'
}
class ForwardRef extends React.Component {
    render() {
        const ref = React.createRef();
        return (
            <>
                <FancyInput ref={ref} color='green'/>
                <button onClick={(e)=>setFocus(e, ref)}>Set Focus</button>
            </>
        )
    }
}

export default ForwardRef;