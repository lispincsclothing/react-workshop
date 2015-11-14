var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({
  getInitialState: function() {
    return {data: data};
  },
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 3 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (tweet) {
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm />
        <TweetList data={this.props.data}/>
      </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm">
        {"TweetForm"}
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var arrayOfTweets = this.props.data.map(function(tweet){
      return(
        <Tweet author={tweet.author} text={tweet.text}/>
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
        Author: {this.props.author}
        Text: {this.props.text}
      </div>
    );
  }
});

React.render(
  <Twitter data={data}/>,
  document.getElementById('tweets')
);
