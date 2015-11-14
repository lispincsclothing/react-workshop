// Props are static (pass once, and you're done)
// State, on the other hand, is internal to document (dynamic data over time)

var ClickCounter = React.createClass({
  render: function() {
    return (
      <button>
      { this.props.text } 
      </button>
    );
  }
});

React.render(
  <ClickCounter text={"Clicks"} />,
  document.getElementById('click-counter')
)
