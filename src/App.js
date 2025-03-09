import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container } from "@mui/material";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <Header/>
      <Content/>
      <FooterComponent/>
    </Container>
  )
}

export default App;
