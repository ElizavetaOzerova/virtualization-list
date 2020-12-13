import React, { FC } from 'react';

import { ListRowProps } from 'react-virtualized/dist/es/List';
import numbers from '../mocks/numbers'

const RowRenderer: FC<ListRowProps> = ({
  key,
  index,
  style,
}) => (
  <div key={key} style={style}>
    { numbers[index] }
  </div>
);

export default RowRenderer;
