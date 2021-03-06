import genericColors from './generic-colors';
import shades from './shades';

export default {
  colors: {
    brand: '#212529',
    'brand-1': '#212529',
    'brand-2': '#343A40',
    'brand-3': '#495057',
    'brand-4': '#6C757D',
    'brand-5': '#ADB5BD',
    'brand-6': '#CED4DA',
    'brand-7': '#DEE2E6',
    'brand-8': '#E9ECEF',
    'brand-9': '#F8F9FA',
    'brand-alt': '#61dafb',
    'brand-alt-1': '#61dafb',
    'brand-alt-2': '#61dafb',
    'brand-alt-3': '#61dafb',
    'brand-alt-4': '#61dafb',
    'brand-contrast': '#EEE',
    focus: 'brand-alt',
    text: { light: 'shade-7' },
    'text-strong': { light: 'shade-8' },
    'text-weak': { light: 'shade-6' },
    'text-xweak': { light: 'shade-5' },
    border: { light: 'shade-2' },
    icon: {
      dark: 'currentColor',
      light: 'currentColor',
    },
    ...genericColors,
    ...shades,
  },
  font: {
    family: 'Montserrat',
    size: '15px',
    height: '20px',
    maxWidth: '300px',
  },
  active: {
    background: 'active-background',
    color: 'active-text',
  },
  hover: {
    background: 'active-background',
    color: 'active-text',
  },
  selected: {
    background: 'selected-background',
    color: 'selected-text',
  },
  control: {
    border: {
      color: 'shade-3',
    },
  },
  input: {
    padding: '10px',
    weight: 400,
  },
  focus: {
    outline: {
      color: 'transparent',
    },
  },
};
