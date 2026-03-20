import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import App from './App.jsx'
import './index.css'

function Root() {
  const { isDark } = useTheme();
  return (
    <HeroUIProvider>
      <main className={`${isDark ? "dark" : "light"} text-foreground min-h-screen`}>
        <App />
      </main>
    </HeroUIProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </React.StrictMode>
)
