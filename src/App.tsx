import React, { FC } from 'react';
import { List } from 'react-virtualized';

import RowRenderer from './components/RowRenderer';
import numbers from './mocks/numbers'

const App: FC = () => (
  <List
    width={300}
    height={300}
    rowCount={numbers.length}
    rowHeight={20}
    rowRenderer={RowRenderer}
  />
);

export default App;
