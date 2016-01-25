class Thread extends React.Component {
  render() {
    return (
        <div>
          <a onClick={this.props.onClick} href="#">{this.props.thread.name}</a>
        </div>
    );
  }
}

class ThreadList extends React.Component {
  render() {
    return (
        <div>
          {this.props.threads.map(thread => (
              <Thread key={thread.name}
                      thread={thread}
                      onClick={() => this.props.onClick(thread)}/>
          ))}
        </div>
    )
  }
}

class ActiveThread extends React.Component {
  render() {
    return (
        <div style={{
          border: '1px solid red',
        }}>
          {this.props.messages.map(message => (
              <Message key={message.text} message={message}/>
          ))}
          {this.props.messages.length === 0 ? 'No messages' : ''}
        </div>
    );
  }
}

class Message extends React.Component {
  render() {
    return <p>{this.props.message.text}</p>;
  }
}

class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeThread: props.threads[0],
    }
  }

  render() {
    return (
        <MessengerContainer>
          <ThreadList threads={this.props.threads}
                      onClick={(thread) => this.setState({
                        activeThread: thread,
                      })}/>

          <ActiveThread messages={this.state.activeThread.messages}/>
        </MessengerContainer>
    );
  }
}

class MessengerContainer extends React.Component {
  render() {
    return (
        <div style={{
        border: '1px solid black',
        padding: '1em',
      }}>
          {this.props.children}
        </div>
    );
  }
}

const threads = [
  {
    name: 'Simen',
    messages: [
      {text: 'hei'},
      {text: 'der'},
    ],
  },
  {
    name: 'Arne Christian',
    messages: [
      {text: 'Hi'},
      {text: 'There'},
    ],
  },
  {
    name: 'Bjarne',
    messages: [],
  },
];

ReactDOM.render(
    <Messenger threads={threads}/>,
    document.getElementById('container')
);
