import React from 'react';
import { PropertiesConsumer } from '../PropertiesProvider';
import Report from './Report';

function Analysis(props) {
  let routingProps = props;

  return (
    <PropertiesConsumer>
    {(props) => (
      <Report routingProps={routingProps} {...props} />
    )}
    </PropertiesConsumer>
  );
}

export default Analysis;