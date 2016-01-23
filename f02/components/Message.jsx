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
