---
to: src/components/<%= level %>/<%= name %>/<%= name %>.tsx
---
import React from 'react';
import { mapModifiers } from 'lib/component';

type Modifier = 'foo' | 'bar';

interface Props {
  modifiers?: Modifier | Modifier[];
}

export const <%= h.toPascalCase(name) %>: React.FC<Props> = (props) => {
  return (
    <div className={mapModifiers('<%= h.createBaseClassName(level, name) %>', props.modifiers)}>
      {props.children}
    </div>
  );
};
