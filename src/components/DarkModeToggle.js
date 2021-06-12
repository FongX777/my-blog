import React from "react"
import useDarkMode from "use-dark-mode"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  if (darkMode.value) {
    return (
      <div>
        <button type="button" onClick={darkMode.disable}>
          ☀️
        </button>
      </div>
    )

  }

  return (
    <div>
      <button type="button" onClick={darkMode.enable}>
        🌑
      </button>
    </div>
  )
}

export default DarkModeToggle