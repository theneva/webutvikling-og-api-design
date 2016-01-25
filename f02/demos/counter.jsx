class Counter extends React.Component {
  constructor(props) {
    super(props);

    // define state object with defaults in constructor
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    setInterval(
        () => this.setState({count: this.state.count + 1}),
        1000
    );
  }

  render() {
    return (
        <h1>
          {this.state.count}
        </h1>
    );
  }
}

ReactDOM.render((
    <Counter/>
), document.getElementById('container'));
