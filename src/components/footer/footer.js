import { Container, ContainerBottom, ContainerBottomRight, ContainterConteudo, ContainerBottomLeft, ContainerBottomMid, Img_Logo } from "./style";
import LogoFooter from '../../assets/logoover.svg'


function Footer() {
    return (
        <>
            <Container>
                <ContainterConteudo>
                    <Img_Logo src={LogoFooter} />
                    <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
                </ContainterConteudo>
                <ContainerBottom>
                    <ContainerBottomLeft>
                        <p>Copyright © 2022</p>
                    </ContainerBottomLeft>
                    <ContainerBottomMid>
                    </ContainerBottomMid>
                    <ContainerBottomRight>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Copyright Abuse Policy</p>
                    </ContainerBottomRight>
                </ContainerBottom>
            </Container>

        </>
    )
}
export default Footer;