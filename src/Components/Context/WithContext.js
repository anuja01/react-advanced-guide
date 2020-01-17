import React, { useContext } from 'react';

// introducing context
const ThemeContext = React.createContext();
class AppWithContext extends React.Component {
    render() {
        // wrap main app from ThemeContext provider
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
            <div style={{ color: menuColor }}>Toolbar</div>
            <ThemedButton />
        </>
    )
}
class ThemedButton extends React.Component {
    // name 'contextType' is a must
    static contextType = ThemeContext;
    render() {
        return (
            <button style={{ backgroundColor: this.context.buttonColor }}>Click Me</button>)
    }
}
export default AppWithContext;