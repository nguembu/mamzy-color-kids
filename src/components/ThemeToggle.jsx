import './ThemeToggle.css'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer le thème">
      <div className="theme-toggle-inner">
        <span className={`sun ${theme === 'light' ? 'active' : ''}`}>☀️</span>
        <span className={`moon ${theme === 'dark' ? 'active' : ''}`}>🌙</span>
        <div className="theme-toggle-slider"></div>
      </div>
    </button>
  )
}

export default ThemeToggle