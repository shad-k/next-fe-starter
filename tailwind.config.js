module.exports = {
  mode: 'jit',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./**/*.html', './**/*.tsx'],
  theme: {
    textColor: {
      primary: '#0070f3',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
