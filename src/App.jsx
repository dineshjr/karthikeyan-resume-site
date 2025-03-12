import Home from "./pages/Home"
import GlobalStyle from "./styles/Globalstyles"
import { ThemeProvider } from "./theme/ThemeProvider"
function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Home />
      </ThemeProvider>

    </>
  )
}
export default App