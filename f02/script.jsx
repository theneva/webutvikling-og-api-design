class Messenger extends React.Component {
  render() {
    return (
        <div style={{
          margin: '1em',
        }}>
          <div style={{display: 'inline-block'}}>
            <ThreadSummaryList threads={[
              {name: 'Simen'},
              {name: 'AC'},
              {name: 'Martin'},
              {name: 'Simen'},
              {name: 'AC'},
              {name: 'Martin'},
              {name: 'Simen'},
              {name: 'AC'},
              {name: 'Martin'},
              {name: 'Simen'},
              {name: 'AC'},
              {name: 'Martin'},
            ]}/>
          </div>

          <div style={{
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: '1em',
          }}>
            <ActiveThread name="Øl biff PC"
              messages={[
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
                {text: 'ja'},
                {text: 'han snakker ikke i tlf'},
                {text: 'ring nå'},
                {text: 'jeg ser han er ledig'},
              ]}/>
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
            <input type="text" className="form-control" placeholder="Search"/>
          </div>
          <div>
            {this.props.threads.map(thread => (
              <ThreadSummary key={Math.random()}
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
      <div style={{
        border: '1px solid black'
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
    <Messenger/>,
    document.getElementById('container')
);
