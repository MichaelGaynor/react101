


var teams = [
    {
        name: "Braves",
        gamesBack: 0,
        city: "Atlanta"
    },
    {
        name: "Nationals",
        gamesBack: 0,
        city: "Washington D.C."
    },
    {
        name: "Fisherman",
        gamesBack: 0,
        city: "Seattle"
    },
    {
        name: "Atoms",
        gamesBack: 0,
        city: "Springfield"
    },
    {
        name: "Fury Children",
        gamesBack: 0,
        city: "New Eschaton"
    },
    {
        name: "Go",
        gamesBack: 0,
        city: "Frankfurt"
    },
    {
        name: "Party Planners",
        gamesBack: 0,
        city: "San Francisco"
    },
    {
        name: "Bacons",
        gamesBack: 0,
        city: "New Jack City"
    }
]

function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

function Team(props){
    return(
    <div className="row">
        <div className="col-sm-8 col-sm-offset-2 text-center team">
            <div className="col-sm-12 team-name">Your {props.city} {props.name}!</div>
            <Counter className="team-score" gamesBack={props.gamesBack}/>
        </div>
    </div>
    )
}

var Counter = React.createClass({

    getInitialState: function() {
        var stateObject = {gamesBack: 0}
        return stateObject;
    },

    addGame: function(){
        this.setState({
            gamesBack: this.state.gamesBack + 1
        })
    },

    loseGame: function(){
        this.setState({
            gamesBack: this.state.gamesBack - 1
        })
    },

    render: function(){
        return(
            <div className="counter">
                <button onClick={this.addGame} className="btn btn-success team-score">¿ åœßå ?</button>
                <div className="team-score">{this.state.gamesBack}</div>
                <button onClick={this.loseGame} className="btn btn-danger team-score">¡ßπøø¬π!</button>
            </div>
        )
    }
})

function Application(props){
    return(
        <div className="container">
            <Header title={props.title}/>
            {props.teams.map((team,index)=>{
                return(<Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city}/>) 
            })}
        </div>
    )
}

ReactDOM.render(
    <Application title="Braves Scoreboard" teams={teams}/>,
    document.getElementById('groot')
)