import React from 'react'
import ReactDOM from 'react-dom/client'
const el =document.getElementById('root');
const root =ReactDOM.createRoot(el);
function App(){
    let a=20;
    const b=1000;
    return (<div>
        <h1>this is heading</h1>
        <p>{a} {b}</p>
        <h1>{new Date().toLocaleTimeString()}</h1>
        <input placeholder="hi there" />
    </div>
    ) ;
}
root.render(<App />);