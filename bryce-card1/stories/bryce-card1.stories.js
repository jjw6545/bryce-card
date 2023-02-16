import { html } from 'lit';
import '../src/bryce-card1.js';

export default {
  title: 'BryceCard1',
  component: 'bryce-card1',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <bryce-card1
      style="--bryce-card1-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </bryce-card1>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
