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
