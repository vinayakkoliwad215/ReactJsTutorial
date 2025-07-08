import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello World Vinayak It is React JSX</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'Hello',className:'helloClass'},
        React.createElement('h1',null,'Hello JSX'))
}

export default Hello