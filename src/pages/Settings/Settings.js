import React, { Component } from 'react';

import DocumentTitle from 'react-document-title';

import Page from '../../components/Page/Page.js';
import Header from '../../components/Header/Header.js';

export default class Settings extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Settings">
        <div>
          <Header currentPage="settings"/>
          Here we can set up settings
        </div>
      </DocumentTitle>
    )
  }

};
