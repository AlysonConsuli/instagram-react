import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { Posts } from './components/Posts';
import { Sidebar } from './components/Sidebar';
import { FooterMobile } from './components/FooterMobile';

function App() {
    return (
        <div>
            <Header />
            <div className="content">
                <main>
                    <Stories />
                    <Posts />
                </main>
                <Sidebar />
            </div>
            <FooterMobile />
        </div>
    )
}

const root = document.querySelector('.root')
ReactDOM.render(<App />, root)