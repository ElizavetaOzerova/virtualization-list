import React, { CSSProperties, FC } from 'react';

import numbers from '../mocks/numbers'

type Props = {
  key: string;
  index: number;
  style: CSSProperties;
}

const RowRenderer: FC<Props> = ({
  key,
  index,
  style,
}) => (
  <div key={key} style={style}>
    { numbers[index] }
  </div>
);

export default RowRenderer;
