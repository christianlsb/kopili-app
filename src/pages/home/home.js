import Header from "../../components/header/header";
import { ContainerHeader,Img_Kopili_About, TextKopili,ContainerInitial, About } from "./style";
import Kopili_About from '../../assets/kopili_about.svg'
import Kopili_Time from '../../assets/nosso_time.svg'
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
            <Img_Kopili_About src={Kopili_About}/>
          </div>
          <TextKopili>
            <p>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning.
        <br></br>
        <br></br>
Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. Lörem ipsum od ohet dilogi.
            </p>
          </TextKopili>
        </div>

        <div id="ourTeam">
            <div id="button_bg2">
              <Img_Kopili_About src={Kopili_Time}/>
            </div>
            <div id="team">
                <div id="cardTeam">
                      
                </div>
            </div>
        </div>       
      </About>
    </>
  );
}

export default Home;
