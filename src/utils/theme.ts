// Convert MUI theme into a plain theme object suitable for Tailwind or custom usage.
const themeStyle = require('../../content/data/style.json');

const theme = {
    mode: themeStyle.mode ?? 'light',
    colors: {
        primary: themeStyle.primaryColor ?? '#1F2B9D',
        secondary: themeStyle.secondaryColor ?? '#F65458',
        textPrimary: themeStyle.mode === 'dark' ? '#fff' : '#02001d',
        textSecondary: themeStyle.mode === 'dark' ? '#979797' : '#374151'
    },
    typography: {
        h1: { fontWeight: 500 },
        h2: { fontWeight: 500 },
        h3: { fontWeight: 500 }
    }
};

export default theme;
