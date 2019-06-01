import React from "react";

const styles = {
    hyperlink: {
        color: "#01850b",
        textDecoration: "underline"
    }
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", marginBottom: 10 }}>
      {props.children}
    </button>
  );
}
