import React from "react"
import PropTypes from "prop-types";

export default function Die(props) {
    const styles = {
        backgroundColor: props.held ? "#59E391" : "white"
    }
    return (
        <div className="die-face" onClick={props.hold} style={styles}>
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

Die.propTypes = {
    held: PropTypes.bool.isRequired,
    hold: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};