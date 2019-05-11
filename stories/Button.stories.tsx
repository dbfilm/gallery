import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../shared/ui/Button';

storiesOf('Button', module)
  .add('withText', () => <Button onClick={action('clicked')}>Hello World</Button>)
  .add('withImage', () => (
    <Button>
      <img src="hello.jpg" />
    </Button>
  ));
