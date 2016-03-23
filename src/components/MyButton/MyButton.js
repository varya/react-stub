import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

export default class MyButton extends React.Component {

  render () {
    return (
      <Button {...this.props} raised primary>
        {this.props.children}
      </Button>
    )
  }
}
