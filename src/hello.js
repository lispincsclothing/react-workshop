var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>Hello React!</div>
      </div>
    )
  }
})

React.render(
  <Hello title="React Example" />,
  document.getElementById('hello')
);
