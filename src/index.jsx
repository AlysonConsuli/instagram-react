import ReactDOM from 'react-dom';
import {Topo} from './componentes/Topo';
import {Stories} from './componentes/Stories';
import {Publicacoes} from './componentes/Publicacoes';
import { Sidebar } from './componentes/Sidebar';
import { FooterMobile } from './componentes/FooterMobile';


function App() {
    return (
        <div>
            <Topo />
            <div className="conteudo">
                <div className="conteudo-principal">
                    <Stories />
                    <Publicacoes />
                </div>
                <Sidebar />
            </div>
            <FooterMobile />
        </div>
    )
}

const root = document.querySelector('.root')

ReactDOM.render(<App />, root)