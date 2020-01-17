import React from 'react';
import CodeSplitting from '../Components/CodeSplitting'
import App from '../Components/Context/WithoutContext';
import AppWithContext from '../Components/Context/WithContext';
const Main = () => {
    return (
        <div>
            <CodeSplitting />
            <br />
            <App />
            <br />
            <AppWithContext />
        </div>
    )
}

export default Main;