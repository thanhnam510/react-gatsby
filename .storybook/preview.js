import { action } from '@storybook/addon-actions';
import '../src/app.scss';
import './story.scss';
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = '';

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

addParameters({
  viewport: {
    viewports: {
      smallmobile: {
        name: 'Small mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      largemobile: {
        name: 'Large Mobile',
        styles: {
          width: '414px',
          height: '896px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '834px',
          height: '1112px',
        },
      },
    },
  },
  backgrounds: [
    { name: 'dark', value: '#333333' },
    { name: 'grey', value: '#e0e0e0', default: true },
    { name: 'light', value: '#ffffff' },
  ],
});

addDecorator(
  withInfo({
    header: false,
    inline: true,
    source: true,
    styles: {
      infoBody: {
        backgroundColor: '#eeeeee',
        marginTop: '30px',
      },
      source: {
        h1: {
          color: '#6453ec',
        },
      },
    },
  })
);
