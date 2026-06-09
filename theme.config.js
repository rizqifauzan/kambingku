/** @type {const} */
const themeColors = {
  primary: { light: '#2D7A4A', dark: '#2D7A4A' },
  background: { light: '#ffffff', dark: '#151718' },
  surface: { light: '#f5f5f5', dark: '#1e2022' },
  foreground: { light: '#11181C', dark: '#ECEDEE' },
  muted: { light: '#687076', dark: '#9BA1A6' },
  border: { light: '#E5E7EB', dark: '#334155' },
  success: { light: '#16A34A', dark: '#22C55E' },
  warning: { light: '#F59E0B', dark: '#FBBF24' },
  error: { light: '#DC2626', dark: '#EF4444' },
  info: { light: '#2563EB', dark: '#3B82F6' },
};

module.exports = { themeColors };

// Export for use in Tailwind config
module.exports.themeColors = themeColors;
