import ReactDOM from 'react-dom';
import { Header } from './components/header/index';
import { Stories } from './components/stories/index';
import { Posts } from './components/posts/index';
import { Sidebar } from './components/sidebar/index';
import { FooterMobile } from './components/footerMobile/index';

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