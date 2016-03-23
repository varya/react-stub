import React, {Component} from 'react';
import Button from 'material-ui/lib/raised-button';

export default class MyButton extends React.Component {

  render () {
    return (
      <Button {...this.props} style={true} rased={true} primary={true}>
        {this.props.children}
      </Button>
    )
  }
}
