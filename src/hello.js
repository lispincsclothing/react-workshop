var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.foo}</h1>
        <div>Hello React!</div>
      </div>
    )
  }
})

React.render(
  <Hello title="React Example" foo="test" />,
  document.getElementById('hello')
);
