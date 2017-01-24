let React = require('react');

let ToDo = React.createClass({
  render: function() {
    let {id, text, completed} = this.props;

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        {id}. {text}
      </div>
    )
  }
});

module.exports = ToDo;
