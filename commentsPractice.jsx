var data = [
  {
    author:{
      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
      name:"neo"
    },
    commentHeading: "I am the One.",
    text: "Humanity, relax. I will save you.",
    date: "Today",
    userBadge: [ 
      'Superman',
      'Herald',
      'Engineer'
    ]
  },
  {
    author:{
      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
      name:"Morpheus"
    },
    commentHeading: "There is no spoon.",
    text: "Don't htink you are. KNow you are.",
    date: "Two days ago",
    userBadge: [ 
      'The man',
      'Bard',
      'Samurai swordsman'
    ]
  }
]

function Badges(props) {
  return (
    <div className="UserBadges col-sm-4">
      <div className="badge">{props.userBadge[0]}</div>
      <div className="badge">{props.userBadge[1]}</div>
      <div className="badge">{props.userBadge[2]}</div>
    </div>
  )
}

function CommentBody(props) {
  return (
    <div className="Comment-body col-sm-4">
      <h1>{props.commentHeading}</h1>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <div className="col-sm-6 Avatar">
      <div className="col-sm-6 col-sm-offset-3">
        <img className="AvatarImage"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
      </div>
      <div className="col-sm-6 col-sm-offset-3">
        {props.author.name}
      </div>
    </div>
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo col-sm-4">
      <div className="UserInfo-name col-sm-7 col-sm-offset-1">
        <Avatar author={props.author}/>
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment row">
      <UserInfo author={props.author}/>
      <Badges userBadge={props.userBadge}/>
      <CommentBody commentHeading={props.commentHeading} text={props.text} date={props.date}/>
    </div>
  );
}

function Application(props) {
  console.log(props)
  var commentsArray = [];
  props.data.map((thisComment, index)=>{
    commentsArray.push(<Comment key={index} author={thisComment.author} userBadge={thisComment.userBadge} text={thisComment.text} commentHeading={thisComment.commentHeading} date={thisComment.date}/>)
  })
  return(
    <div className="col-sm-12">
      <h1>A Facebook Post or something</h1>
        return {commentsArray}
    </div>
  );
}

ReactDOM.render(
    <Application data={data}/>,
    document.getElementById('groot')
)