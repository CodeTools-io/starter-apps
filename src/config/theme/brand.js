const genericColors = {
  aqua: '#7fdbff',
  blue: '#0074d9',
  lime: '#01ff70',
  navy: '#001f3f',
  teal: '#39cccc',
  olive: '#3d9970',
  green: '#2ecc40',
  red: '#ff4136',
  maroon: '#85144b',
  orange: '#ff851b',
  purple: '#b10dc9',
  yellow: '#ffdc00',
  fuchsia: '#f012be',
  gray: '#aaaaaa',
  white: '#ffffff',
  black: '#111111',
  silver: '#dddddd',
};
export const brand = {
  global: {
    colors: {
      'brand-0': '#057AF0',
      'brand-1': '#0466C8',
      'brand-2': '#0353A4',
      'brand-3': '#023E7D',
      'brand-4': '#002855',
      'brand-5': '#001845',
      'brand-6': '#001233',
      'brand-alt-1': '#979DAC',
      'brand-alt-2': '#7D8597',
      'brand-alt-3': '#5C677D',
      'brand-alt-4': '#33415C',
      'brand-contrast': '#EEE',
      focus: 'brand-0',
      text: { light: 'brand-alt-3' },
      'text-strong': { light: 'brand-alt-4' },
      'text-weak': { light: 'brand-alt-2' },
      'text-xweak': { light: 'brand-alt-1' },
      border: { light: '#eee' },
      ...genericColors,
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
    input: {
      padding: '10px',
      weight: 400,
    },
  },
};
