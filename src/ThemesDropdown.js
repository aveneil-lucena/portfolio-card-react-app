import React from 'react';

const ThemesDropdown = ({ currentTheme, onChange }) => {
  return (
    <div className={`themes-button ${currentTheme} flex absolute top-0 left-0 z-10`}>
      <button
        className={`theme-button w-12 h-12 p-2 m-1 bg-gray-300 drop-shadow-lg rounded-3xl 
        bg-gradient-to-t from-orange-100 to-transparent ${currentTheme === 'light' ? 'active' : ''}`}
        onClick={() => onChange('light')}
        title="Click to enable the Light theme"
      >
        <img
          src={process.env.PUBLIC_URL + '/icons/sun-icon.svg'} // Replace with your SVG file path
          alt="Sun"
        />
      </button>
      <button
        className={`theme-button w-12 h-12 p-2 m-1 bg-gray-300 drop-shadow-lg rounded-3xl 
        bg-gradient-to-t from-red-200 to-transparent ${currentTheme === 'dark' ? 'active' : ''}`}
        onClick={() => onChange('dark')}           
        title="Click to enable the Dark theme"
      >
        <img
          src={process.env.PUBLIC_URL + '/icons/moon-icon.svg'} // Replace with your SVG file path
          alt="Moon"
        />
      </button>
      <button
        className={`theme-button w-12 h-12 p-2 m-1 bg-gray-300 drop-shadow-lg rounded-3xl 
        bg-gradient-to-t from-purple-300 to-transparent ${currentTheme === 'nebula' ? 'active' : ''}`}
        onClick={() => onChange('nebula')}
        title="Click to enable the Nebula theme"
      >
        <img
          src={process.env.PUBLIC_URL + '/icons/stars-icon.svg'} // Replace with your SVG file path
          alt="Planet"
        />
      </button>
    </div>
  );
};

export default ThemesDropdown;
