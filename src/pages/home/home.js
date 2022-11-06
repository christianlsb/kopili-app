import Header from "../../components/header/header";
import { ContainerHeader, TextKopili,ContainerInitial, About } from "./style";
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
            <h2>Kōpili</h2>
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

        <div id="ourTeam"></div>
      </About>
    </>
  );
}

export default Home;
