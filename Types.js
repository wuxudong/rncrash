import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';


class Types extends React.Component {
  getNativeComponentName() {
    return 'RNTypes'
  }

  render() {
    return <RNTypes {...this.props} />;
  }
}

Types.propTypes = {
  ...View.propTypes,
  data: PropTypes.arrayOf(PropTypes.number)
}

var RNTypes = requireNativeComponent('RNTypes', Types)

export default Types

