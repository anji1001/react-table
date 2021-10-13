import React from 'react';
import Aux from '../../hoc/Auxiliary';
import DemoTables from '../../containers/DemoTables/DemoTables';

const landingPage = (props) => (
    <Aux>
      <div>Toolbar, sidebar, backdrop</div>
    <main><DemoTables /></main>
    </Aux>
  );

export default landingPage;