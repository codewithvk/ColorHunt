import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false }
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1500);
    });
  }

  render() {
    // Destructuring - ES6
    const {
      background,
      name,
      moreUrl,
      showingFullPalette,
      classes } = this.props;

    const { copied } = this.state;

    return (
      // npm Package react-copy-to-clipboard
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>

        <div style={{ background }} className={classes.ColorBox}>

          <div
            style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />

          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}> {background}</p>
          </div>

          <div>
            <div className={classes.boxContent}>
              <span
                className={classes.colorName}>{name}</span>
            </div>

            <button className={classes.copyButton}>Copy</button>
          </div>

          {/*Like a Ternary Operator */}
          {showingFullPalette &&
            (<Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span
                className={classes.seeMore}>MORE</span>
            </Link>
            )}

        </div>
      </CopyToClipboard >
    );
  }
}

export default withStyles(styles)(ColorBox);
