export default {
  colors: {
    brand: '#FFD23F',
    'brand-1': '#FFD23F',
    'brand-2': '#FFD23F',
    'brand-3': '#FFD23F',
    'brand-4': '#FFD23F',
    'brand-5': '#FFD23F',
    'brand-6': '#FFD23F',
    'brand-7': '#FFD23F',
    'brand-8': '#FFD23F',
    'brand-9': '#FFD23F',
    'brand-alt': '#FFD23F',
    'brand-alt-1': '#FFD23F',
    'brand-alt-2': '#FFD23F',
    'brand-alt-3': '#FFD23F',
    'brand-alt-4': '#FFD23F',
    'brand-contrast': '#EEE',
    background: {
      dark: '#111111',
      light: '#FFFFFF',
    },
    'background-back': {
      dark: '#111111',
      light: '#EEEEEE',
    },
    'background-front': {
      dark: '#222222',
      light: '#FFFFFF',
    },
    'background-contrast': {
      dark: '#FFFFFF11',
      light: '#11111111',
    },
    text: { light: 'shade-7' },
    'text-strong': { light: 'shade-8' },
    'text-weak': { light: 'shade-6' },
    'text-xweak': { light: 'shade-5' },
    border: { light: 'shade-2' },
    control: 'brand',
    'active-background': 'background-contrast',
    'active-text': 'text-strong',
    focus: 'brand-alt',
    'selected-background': 'brand',
    'selected-text': 'text-strong',
    'status-critical': '#FF4040',
    'status-warning': '#FFAA15',
    'status-ok': '#00C781',
    'status-unknown': '#CCCCCC',
    'status-disabled': '#CCCCCC',
    'graph-0': 'brand',
    'graph-1': 'status-warning',
    icon: {
      dark: 'currentColor',
      light: 'currentColor',
    },
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
    'shade-1': '#F8F9FA',
    'shade-2': '#E9ECEF',
    'shade-3': '#DEE2E6',
    'shade-4': '#CED4DA',
    'shade-5': '#ADB5BD',
    'shade-6': '#6C757D',
    'shade-7': '#495057',
    'shade-8': '#343A40',
    'shade-9': '#212529',
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
      radius: '2px',
      color: 'shade-3',
    },
  },
  drop: {
    border: {
      radius: '2px',
    },
  },
  borderSize: {
    xsmall: '1px',
    small: '2px',
    medium: '3px',
    large: '10px',
    xlarge: '20px',
  },
  breakpoints: {
    small: {
      value: 640,
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: '3px',
        large: '5px',
        xlarge: '10px',
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        xxsmall: '2px',
        xsmall: '3px',
        small: '5px',
        medium: '10px',
        large: '20px',
        xlarge: '40px',
      },
      size: {
        xxsmall: '20px',
        xsmall: '40px',
        small: '80px',
        medium: '160px',
        large: '320px',
        xlarge: '640px',
        full: '100%',
      },
    },
    medium: {
      value: 1280,
    },
    large: {},
  },
  edgeSize: {
    none: '0px',
    hair: '1px',
    xxsmall: '3px',
    xsmall: '5px',
    small: '10px',
    medium: '20px',
    large: '40px',
    xlarge: '80px',
    responsiveBreakpoint: 'small',
  },
  focus: {
    outline: {
      color: 'transparent',
    },
  },
  input: {
    padding: '10px',
    weight: 400,
  },
  spacing: '20px',
  size: {
    xxsmall: '40px',
    xsmall: '80px',
    small: '160px',
    medium: '320px',
    large: '640px',
    xlarge: '960px',
    xxlarge: '1280px',
    full: '100%',
  },
};
