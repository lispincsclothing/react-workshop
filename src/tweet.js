
var Twitter = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    $.get(this.props.url, function (data) {
        // Set state in step 3 of the exercise!
        this.setState({data:data});
      }.bind(this)
    );
  },
  // handleTweetSubmit: function (tweet) {
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  componentDidMount: function () {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm />
        <TweetList data={this.state.data}/>
      </div>
    );
  }
});

var TweetForm = React.createClass({
  handleBtnSubmit:function(e){
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value
    var author = React.findDOMNode(this.refs.author).value
    alert("author: " + author + " tweet: " + text);
  },
  render: function () {
    return (
      <form className="tweetForm" onSubmit={this.handleBtnSubmit}>
        <input type="text" placeholder="Author Name" ref="author"/>
        <input type="text" placeholder="Tweet" ref="text" />
        <button type="submit" className="btn btn-primary">Tweet</button>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var arrayOfTweets = this.props.data.map(function(tweet, index){
      return(
        <Tweet key={index} author={tweet.author} text={tweet.text}/>
      );
    })
    return (
      <div className="tweetList">
      {arrayOfTweets}
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h3>{this.props.author}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

React.render(
  <Twitter url={'tweets.json'}/>,
  document.getElementById('tweets')
);
