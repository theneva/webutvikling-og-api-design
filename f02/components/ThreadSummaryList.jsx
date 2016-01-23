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
