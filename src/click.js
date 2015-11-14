// Props are static (pass once, and you're done)
// State, on the other hand, is internal to document (dynamic data over time)
// Don't ever set state directly, e.g this.state.clicks=1.  Circumvents this.setState - use that!

var ClickCounter = React.createClass({
  getInitialState: function() {
    return {clicks: 0};
  },
  handleBtnClick: function(e) {
      e.preventDefault();
      this.setState({clicks:this.state.clicks + 1});
  },
  render: function() {
    return (
      <button onClick={this.handleBtnClick} className="btn btn-primary">
      { this.props.text }
      <span className="badge">
        { this.state.clicks }
      </span>
      </button>
    );
  }
});

React.render(
  <ClickCounter text={"Clicks"} />,
  document.getElementById('click-counter')
)
