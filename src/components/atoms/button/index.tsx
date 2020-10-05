import React from 'react';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const Button: React.FC<Props> = props => {
  return <div className={mapModifiers('a-button', props.modifiers)}>{props.children}</div>;
};
