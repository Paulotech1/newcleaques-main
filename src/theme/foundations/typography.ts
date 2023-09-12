export const fontWeight = {
  normal: 400,
  bold: 600,
  extrabold: 700,
  blackbold: 800
};

export const typography = {
  textStyles: {
    caption: {
      fontSize: ['.5625rem'], // 9px
      fontWeight: fontWeight.normal,
      lineHeight: ['18px', '24px']
    },
    subtext: {
      fontSize: ['.75rem'], // 12px
      fontWeight: fontWeight.normal,
      lineHeight: ['18px', '24px']
    },
    'subtext-bold': {
      fontSize: ['.75rem'], // 12px
      fontWeight: fontWeight.bold,
      lineHeight: ['18px', '24px']
    },
    body: {
      fontSize: ['.875rem'], // 14px
      fontWeight: fontWeight.bold,
      lineHeight: ['15px', '19px']
    },
    'body-regular': {
      fontSize: ['.875rem'], // 14px
      fontWeight: fontWeight.bold,
      lineHeight: ['28px', '34px']
    },
    'h1-subtext': {
      fontSize: ['1rem'], // 16px
      fontWeight: fontWeight.bold,
      lineHeight: ['18px', '24px']
    },
    h1: {
      fontSize: ['1.25rem', '1.5rem'], // responsive styles
      fontWeight: fontWeight.bold,
      lineHeight: ['28px', '34px']
    },
    xl: {}
  }
};
