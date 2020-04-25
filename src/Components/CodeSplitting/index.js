import React, { Suspense } from 'react';

import add from './math'
// React.lazy
const LargeComponent = React.lazy(() => import('./LargeComponent'))

const Index = () => {
    const answer = add(1, 2);
    return (
        <div>
            <p>code splliting -> import</p>
            <h3>Sum of 1 + 2 is: {answer}</h3>
            <hr />
            <p>code splliting -> React.lazy</p>
            {/* 
                Can provide a fallback component to <Suspense>, so that fallback component will render until main component is loaded.
             */}
            <Suspense
                fallback={
                    <div style={
                        {
                            display: 'flex',
                            width: '300px',
                            height: '300px',
                            color: 'white',
                            backgroundColor: 'blue',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }>
                        <h1>Loading...</h1>
                    </div>
                    
                }
            >
                <LargeComponent />
            </Suspense>
        </div>
    )
}

export default Index;