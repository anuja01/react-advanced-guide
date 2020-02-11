import React from 'react';

class App extends React.Component {
    render() {
        const Theme = {buttonColor: 'red', menuColor: 'green'}
        return (
            <>
                <div>App without using context -> props drilling</div>
                <Toolbar theme={Theme}/>
            </>
        )
    }
}
const Toolbar = (props) => (
    <>
        <div style={{color: props.theme.menuColor}}>Toolbar</div>
        <ThemedButton theme={props.theme}/>
    </>
)
// in order to access theme in leaf level component, must pass through each level as props.
// by using context, can avoid this unwanted props drilling
const ThemedButton = (props) => (
    <button style={{backgroundColor: props.theme.buttonColor}} onClick={()=>alert('button color and text color is from theme ')}>Click Me</button>
)
export default App;