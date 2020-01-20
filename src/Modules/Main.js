import React from 'react';
import CodeSplitting from '../Components/CodeSplitting'
import App from '../Components/Context/WithoutContext';
import AppWithContext from '../Components/Context/WithContext';
import DynamicContext from '../Components/Context/DynamicContext';
import ErrorBoundariySample, { ErrorBoundary } from '../Components/ErrorBoundaries';
import ForwardRef from '../Components/ForwardRef'
import MainHOC from '../Components/HigherOrderComponent';
import MainJSX from '../Components/InDepthJSX';
const Main = () => {
    return (
        <div>
            <CodeSplitting />
            <br />
            <App />
            <br />
            <div>--------- With Context ----------</div>
            <AppWithContext />
            <br />
            <div>--------- Dynamic Context (Changing themes)--------</div>
            <DynamicContext />
            <br />
            <div>--------- Error Boundaries --------</div>
            <ErrorBoundary>
                <div>
                    {/* <ErrorBoundariySample /> */}
                </div>
            </ErrorBoundary>
            <br />
            <div>--------- Forwarded Ref --------</div>
            <ForwardRef />
            <br />
            <div>--------- HOC --------</div>
            <p>
                A higher-order component is a function that takes a component and returns a new component.\n
                Avoid duplicating the logic accross the application.
            </p>
            <MainHOC />
            <br />
            <div>-------- JSX in depth --------</div>
            <MainJSX />
        </div>
    )
}

export default Main;