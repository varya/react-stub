import React, { Component, PropTypes } from 'react';

import DocumentTitle from 'react-document-title';

import Page from '../../components/Page/Page.js';
import Header from '../../components/Header/Header.js';
import Button from 'react-toolbox/lib/button';

export default class Index extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="My awesome app">
        <div>
          <Header currentPage="index"/>
          <Button label="Library button" raised accent/>
        </div>
      </DocumentTitle>
    )
  }

};
