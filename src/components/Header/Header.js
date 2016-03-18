import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.css';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    let pages = [
      {
        label: 'index',
        name: 'Index',
        url: '/'
      },
      {
        label: 'settings',
        name: 'Settings',
        url: '/settings'
      }
    ];
    pages.forEach( (page)=> {
      if (page.label === props.currentPage) {
        page.active = true;
      } else {
        page.active = false;
      }
    });
    this.state = {
      loginDialog: false,
      index: props.currentPage,
      pages: pages
    }
  }

  handleTabChange (page) {
    const url = '/#' + page.url;
    location.href = url;
  }

  render () {
    const pages = this.state.pages.map((page) => {
      const key = `Header-Menu-${page.label}`;
      return (
        <li
          className={`Header-Menu-Item ${page.active && 'Header-Menu-Item_Active'}`}
          key={key}
          onClick={this.handleTabChange.bind(this, page)}
          >{page.name}</li>
      );
    });
    return (
      <div>
        <ul className="Header-Menu">
          {pages}
        </ul>
      </div>
    )
  }
}
