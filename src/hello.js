// getInitialState has to return something to work
var Hello = React.createClass({
  // getInitialState:function(){
  //   alert('getInitialState');
  //   return {};
  // },
  // componentWillMount:function(){
  //   alert('componentWillMount');
  // },
  // componentDidMount:function(){
  //   alert('componentDidMount');
  // },
  render: function() {
    // alert('rendering');
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
