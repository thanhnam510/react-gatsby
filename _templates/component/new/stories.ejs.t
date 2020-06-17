---
to: src/components/<%= level %>/<%= name %>/<%= name %>.stories.js
---

import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= h.toPascalCase(name) %> } from './<%= name %>';

storiesOf('Components|<%= level %>/<%= h.toPascalCase(name) %>', module).add('normal', () => (
  <<%= h.toPascalCase(name) %>>Sample test</<%= h.toPascalCase(name) %>>
));

