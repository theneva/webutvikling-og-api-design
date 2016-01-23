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

class ThreadSummaryList extends React.Component {
  render() {
    return (
        <div>
          <div style={{marginBottom: '0.5em'}}>
            <input type="text" className="form-control" placeholder="Filter"/>
          </div>
          <div>
            {this.props.threads.map((thread, index) => (
              <ThreadSummary key={index}
                onSelected={() => this.props.onThreadSelected(index)}
                thread={thread}/>
            ))}
          </div>
        </div>
    );
  }
}

class ThreadSummary extends React.Component {
  render() {
    return (
        <div onClick={this.props.onSelected}
            style={{
              border: '1px solid black',
            }}>
          {this.props.thread.name}
        </div> 
    );
  }
}

class ActiveThread extends React.Component {
  render() {
    return (
      <div>
        <div style={{textAlign: 'center',}}>
          {this.props.name} 
        </div>
        <div>
          {this.props.messages.map(message => (
            <div key={Math.random()}
              style={{
                marginBottom: '0.2em',
              }}>
                <Message text={message.text}/>
            </div>
          ))}
        </div>
      </div>
    );
  } 
}

class Message extends React.Component {
  render() {
    return (
        <div style={{
          backgroundColor: 'lightgrey',
          borderRadius: '0.3em',
          padding: '0.1em',
        }}>
          {this.props.text}
        </div>
    );
  }
}

ReactDOM.render(
    <Messenger threads={window.threads}/>,
    document.getElementById('container')
);
