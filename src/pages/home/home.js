  import Header from "../../components/header/header";
  import {
    ContainerHeader,
    Img_Kopili_About,
    Img_Card,
    TextKopili,
    ContainerInitial,
    About,
    Img_Div,
    ConteudoText,
  } from "./style";
  import Kopili_About from "../../assets/kopili_about.svg";
  import Kopili_Time from "../../assets/nosso_time.svg";
  import Artur_Photo from "../../assets/artur.svg";
  import Christian_Photo from "../../assets/christian.svg"
  import Dudu_Photo from "../../assets/dudu.svg"
  import Thiago_Photo from "../../assets/thiago.svg"
  import Footer from "../../components/footer/footer";
  function Home() {
    return (
      <>
        <ContainerHeader>
          <Header />
        </ContainerHeader>
        <ContainerInitial></ContainerInitial>
        <About>
          <div id="kopili">
            <div id="button_bg">
              <Img_Kopili_About src={Kopili_About} />
            </div>
            <TextKopili>
              <p>
                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                muvåning.
                <br></br>
                <br></br>
                Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
                diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
                muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
                inde. Lörem ipsum od ohet dilogi.
              </p>
            </TextKopili>
          </div>

          <div id="ourTeam">
            <div id="button_bg2">
              <Img_Kopili_About src={Kopili_Time} />
            </div>
            <div id="team">
              <div className="card">
                <Img_Div>
                  <Img_Card src={Artur_Photo} />
                </Img_Div>
                <ConteudoText>
                  <h2>Artur Fagundes</h2>
                   <h3>Líder</h3>
                   <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
</p>

                </ConteudoText>
              </div>
              <div className="card">
                <Img_Div>
                  <Img_Card src={Christian_Photo} />
                </Img_Div>
                <ConteudoText>
                  <h2>Christian Moreno</h2>
                  <h3>Front-End</h3>
                  <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
</p>

                </ConteudoText>
              </div>
              <div className="card">
                <Img_Div>
                  <Img_Card src={Dudu_Photo} />
                </Img_Div>
                <ConteudoText>
                  <h2>Eduardo Paixão</h2>
                  <h3>Backend</h3>
                  <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
</p>

                </ConteudoText>
              </div>
              <div className="card">
                <Img_Div>
                  <Img_Card src={Thiago_Photo} />
                </Img_Div>
                <ConteudoText>
                  <h2>Thiago Henrique</h2>
                  <h3>Design e App</h3>
                  <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
</p>
                </ConteudoText>
              </div>
            </div>
          </div>
        </About>
        <Footer/>
      </>
    );
  }

  export default Home;
