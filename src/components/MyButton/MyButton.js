import React, {Component} from 'react';
import {Button} from 'belle';

export default class MyButton extends React.Component {

  render () {
    return (
      <Button {...this.props} primary>
        {this.props.children}
      </Button>
    )
  }
}
