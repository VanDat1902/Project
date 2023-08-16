import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles } from "./styles/global";
import { theme } from "./config/theme";
import { Header } from "./components/header/index";
import { ListItems } from "./components/list-items/index";
import { useContextHook } from './context/hook';

export const App = () => {

  const { state } = useContextHook();

  const currentTheme = (theme as any)[state.themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <ListItems />
        </Container>
      </>
    </ThemeProvider>
    //aaaabbbccc
  )
}
