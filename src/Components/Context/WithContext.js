import React, { useContext } from 'react';

// introducing context
const ThemeContext = React.createContext();

// context is used to share data among the 
class AppWithContext extends React.Component {
    render() {
        // wrap main app from ThemeContext provider and pass default value
        // this can be accessed within any child (either functional or class component) in any level
        return (
            <ThemeContext.Provider value={{ buttonColor: 'red', menuColor: 'green' }}>
                <div>App with context</div>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}
// to access context in functional components use 'useContext()' hook
const Toolbar = () => {
    // const {contextValue} = useContext(ThemeContext)
    const { menuColor } = useContext(ThemeContext)
    return (
        <>
            <div style={{ color: menuColor }}>
                Toolbar - in functional components -> <code>const menuColor = useContext(ThemeContext)</code>
            </div>
            <ThemedButton />
        </>
    )
}

// to access context in class component must declare 'static contextType' and assign context
// then can access via this.context
class ThemedButton extends React.Component {
    // name 'contextType' is a must
    static contextType = ThemeContext; // Theme context is available via Provider
    render() {
        return (
            <button
                style={{ backgroundColor: this.context.buttonColor }}
                onClick={() => alert('static contextType=ThemeContext  - is used to access context in class components')}>
                Click Me
            </button>
        )
    }
}
export default AppWithContext;