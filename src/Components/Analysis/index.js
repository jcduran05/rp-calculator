import React from 'react';
import { PropertiesConsumer } from '../../Providers/PropertiesProvider';
import Report from './Report';

function Analysis(props) {
  let routingProps = props;

  return (
    <PropertiesConsumer>
    {(props) => (
      <Report routingProps={routingProps} properties={props.state.properties} />
    )}
    </PropertiesConsumer>
  );
}

export default Analysis;