// Our first component
function Application(){
    return(
        <div>
            <h1>Hello {10*100} worlds, you are mine.</h1>
            <Message name=", Shane"/>
            <Message name=", Carla"/>
            <Message name=", Nic"/>
            <Message name=", Hayes" insult=", you ham-lover"/>
            <Message name=", Alec"/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        { /*This comment should be invisible*/ }
        // This comment should be visible
        /*Is this visible?*/
        </div>
    )
}

function Message(props){
    return(
        <div>
            <h2>Where am I{props.name}{props.insult}?</h2>
        </div>
    )
}

// ReactDOM is available because we included reactDOM.js
// The .render function needs React (react.js) and takes 2 args:
// 1.--The component to render.
// 2.--Where to render it.
// When ReactDOM.render runs it will OWN that element.
ReactDOM.render(
    <Application/>,
    document.getElementById('container')
)