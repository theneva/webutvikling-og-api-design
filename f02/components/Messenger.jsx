class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeThread: window.threads[0],
    };
  }

  render() {
    return (
        <div style={{
          margin: '1em',
        }}>
          <div style={{display: 'inline-block'}}>
            <ThreadSummaryList threads={this.props.threads}
                               onThreadSelected={index => this.setState({
                    activeThread: window.threads[index],
                })}/>
          </div>

          <div style={{
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: '1em',
          }}>
            <ActiveThread name={this.state.activeThread.name}
                          messages={this.state.activeThread.messages}/>
          </div>
        </div>
    );
  }
}

window.Messenger = Messenger;
