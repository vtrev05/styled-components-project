import { ButtonStyled } from "./components/ui/Button"
import FlexContainer from "./components/ui/FlexContainer"
import TextComponent from "./components/ui/TextComponent"
import TitleComponent from "./components/ui/TitleComponent"



function App() {

  return (
    <FlexContainer direction={'column'}>
      <ButtonStyled backgroundColor="white">Button</ButtonStyled>
      <TextComponent backgroundColor="default">Hello Students</TextComponent>
      <TitleComponent primary>Styled Components</TitleComponent>
      
    </FlexContainer>
  )
}

export default App
