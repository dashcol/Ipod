import { Component } from "react";

export default class Button extends Component {
  render() {
    const {
      next,
      prev,
      men,
      select,
      playpause,
      onMouseUp,
      onMouseDown,
      onMouseMove,
    } = this.props;

    return (
      <>
        <div style={styles.cont}>
          <button style={styles.menu} onClick={men}></button>
          <button style={styles.next} onClick={next}></button>
          <button style={styles.prev} onClick={prev}></button>
          <button style={styles.playpause} onClick={playpause}></button>
          <button style={styles.select} onClick={select}></button>
          <div
            style={styles.ring}
            onMouseUp={onMouseUp}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
          >
            <div style={styles.innerring}></div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  ring: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "relative",
    left: "13px",
    top: "15px",
  },

  innerring: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  cont: {
    height: "220px",
    width: "230px",
    position: "absolute",
    top: "330px",
  },
  menu: {
    position: "absolute",
    top: "20px",
    left: "100px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    zIndex: "10",
  },
  next: {
    position: "absolute",
    top: "100px",
    left: "180px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    zIndex: "10",
  },
  prev: {
    position: "absolute",
    top: "100px",
    left: "25px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    zIndex: "10",
  },
  playpause: {
    position: "absolute",
    top: "180px",
    left: "100px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    width: "30px",
    height: "30px",
    zIndex: "10",
  },
  select: {
    position: "absolute",
    top: "78px",
    left: "80px",
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: "10",
  },
};
