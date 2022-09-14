import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

class ErrorModal extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className={classes.backdrop} onClick={this.props.onConfirm}></div>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{this.props.title}</h2>
          </header>
          <main className={classes.content}>
            <p>{this.props.message}</p>
          </main>
          <footer className={classes.actions}>
            <Button onClick={this.props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
  }
}

export default ErrorModal;
