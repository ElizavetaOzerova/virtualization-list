import React, { FC } from 'react';
import { List } from 'react-virtualized';
import { createUseStyles } from 'react-jss';

import RowRenderer from './components/RowRenderer';
import numbers from './mocks/numbers'

const useStyles = createUseStyles({
  list: {
    backgroundColor: '#edbf6a',
    border: '4mm ridge rgba(170, 50, 220, 0.6)',
    color: '#278600',
    margin: '0 auto',
    padding: 10,
  },
  title: {
    color: '#80426e',
    textAlign: 'center',
  },
});

const App: FC = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>Scroll to a million!</h1>

      <List
        className={classes.list}
        width={300}
        height={300}
        rowCount={numbers.length}
        rowHeight={20}
        rowRenderer={RowRenderer}
      />
    </>
  );
};

export default App;
