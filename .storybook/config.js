import { configure } from '@kadira/storybook';

const loadStories = () => {
    require('../stories/index.js');
};

configure(loadStories, module);
