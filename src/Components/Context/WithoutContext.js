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
const ThemedButton = (props) => (
    <button style={{backgroundColor: props.theme.buttonColor}}>Click Me</button>
)
export default App;