var EventStatusActions = React.createClass({
  getDefaultProps() {
    return {
      statusItems: [
        { label: 'Not Going', value: 0, icon: 'icon-cancel-1' },
        { label: 'Interested', value: 1, icon: 'icon-bookmark' },
        { label: 'Going', value: 2, icon: 'icon-ok' }
      ]
    }
  },
  getInitialState() {
    return {
      baseClasses: 'btn btn-sm btn-default',
      currentStatusItem: this.props.status[0]
    }
  },
  handleClick(value, e) {
    e.preventDefault();
    this.setState({currentStatusItem: value});
  },
  constructClassName(value) {
    return 'btn btn-sm btn-default ' +
          ((this.state.currentStatusItem == value) ? 'active' : '');
  },
  render() {
    var _this = this;
    var statusItems = this.props.statusItems.map(function(statusItem) {
      return (
        <a key={statusItem.value} className={_this.constructClassName(statusItem.value)} href='#' onClick={(evt) => _this.handleClick(statusItem.value, evt)}>
          <i className={statusItem.icon}></i> {statusItem.label}
        </a>
      )
    });
    return (
      <div className="status-actions">
        {statusItems}
      </div>
    )
  }
});

module.exports = EventStatusActions;
