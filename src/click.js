// Props are static (pass once, and you're done)
// State, on the other hand, is internal to document (dynamic data over time)

var ClickCounter = React.createClass({
  getInitialState: function() {
    return {clicks: 0};
  },
  render: function() {
    return (
      <button>
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
