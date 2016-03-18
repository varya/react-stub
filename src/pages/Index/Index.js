import React, { Component, PropTypes } from 'react';

import DocumentTitle from 'react-document-title';

import Page from '../../components/Page/Page.js';
import Header from '../../components/Header/Header.js';

export default class Index extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="My awesome app">
        <div>
          <Header currentPage="index"/>
          Hello, world!
        </div>
      </DocumentTitle>
    )
  }

};
