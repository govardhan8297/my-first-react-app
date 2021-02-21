import React from "react";

function TodoItem(props) {
  console.log(props);
  const completedStyles = {
    fontSize: "15px",
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  return (
    <div className="todo-item">
      <div className="container">
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <span
          className="checkbox"
          style={props.item.completed ? completedStyles : null}
        >
          {props.item.text}
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
