var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello, React!</div>
    )
  }
})

React.render(
  <Hello title="React Example" />,
  document.getElementById('hello')
);
