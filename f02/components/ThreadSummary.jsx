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
