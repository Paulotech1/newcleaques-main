export const globalStyles = {
  colors: {
    white: '#FFF',
    black: '#201E1F',
    primary: '#00b0f3',
    red: { 500: '#E9634B' },
    blue: {
      100: '#cceffd',
      200: '#aae5fb',
      300: '#80d8f9',
      400: '#55caf7',
      500: '#2abdf5',
      600: '#0093cb',
      700: '#0075a2',
      800: '#00587a',
      900: '#003b51',
      hover: '#0077c2'
    },
    neutral: {
      100: '#F1F5F9',
      900: '#0F172A',
      300: '#D2D8E2'
    },
    gray: { 100: '#ADA8AB', 400: '#4D4D4D' },
    gradient: {
      100: 'radial-gradient(358.78% 133.76% at 2.69% 5.45%, #00B0F3 0%, #248DC8 50%, rgba(0, 176, 243, 0.68) 100%)'
    }
  },
  styles: {
    global: () => ({
      h1: {
        fontFamily: 'Lato, sans-serif'
      },
      h2: {
        fontFamily: 'Lato, sans-serif'
      },
      h3: {
        fontFamily: 'Lato, sans-serif'
      },
      h4: {
        fontFamily: 'Lato, sans-serif'
      },
      h5: {
        fontFamily: 'Lato, sans-serif'
      },
      h6: {
        fontFamily: '"Lato", sans-serif'
      },
      body: {
        background: { base: '#fff' },
        fontFamily: 'Open Sans, sans-serif',
        color: '#201E1F'
      },
      '*::placeholder': {
        color: '#4D4D4D'
      },
      html: {
        fontFamily: '"Open Sans", sans-serif'
      }
    })
  }
};
