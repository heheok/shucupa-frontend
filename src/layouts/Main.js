import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Listing } from 'pages';
import Header from 'Header';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return false;
    }
    /* TODO: Make this nested */
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path={`/`} component={Listing} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
