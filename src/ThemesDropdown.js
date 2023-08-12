import React from 'react';

const ThemesDropdown = ({ currentTheme, onChange }) => {
  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'nebula', label: 'Nebula' },
  ];

  return (
    <div className={`themes-button ${currentTheme} flex absolute top-0 left-0 z-10`}>
      <select
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-100 shadow-lg"
        value={currentTheme} // Sets the current selected value
      >
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemesDropdown;
