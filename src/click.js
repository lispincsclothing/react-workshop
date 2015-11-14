// Props are static (pass once, and you're done)
// State, on the other hand, is internal to document (dynamic data over time)
// Don't ever set state directly, e.g this.state.clicks=1.  Circumvents this.setState - use that!


var styles={
  clickText: {
    textDecoration:'underline',
    color:'green',
    fontSize:'48px'
  },
  countText:{
    fontSize:'60px',
    color: 'acqumarine',
    fontWeight:'600'
  }
};

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
      <div>
      <button onClick={this.handleBtnClick} className="btn btn-primary">
      <span style={styles.clickText}>{ this.props.text }</span>
      <span className="badge" style={styles.countText}>
        { this.state.clicks }
      </span>
      </button>
      <ClickedNums number={this.state.clicks}/>
      </div>
    );
  }
});

var ClickedNums = React.createClass({
  render: function(){
    return(
      <div>{this.props.number}</div>
    );
  }
});

React.render(
  <ClickCounter text={"Clicks"} />,
  document.getElementById('click-counter')
)
