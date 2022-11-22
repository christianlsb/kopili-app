import { ContainerHeader, Button, BackgroundButton } from "./style";
import Logo from '../../assets/logo_kopili.svg'


function Header() {
  return (
    <>
      <ContainerHeader>
        <div id="left">
          <img src={Logo} className="logo" />
        </div>

        <div className="right">
          <Button>Crie uma conta</Button>
          <Button>Acesse sua conta</Button>
        </div>
      </ContainerHeader>
    </>
  );
}

export default Header;
