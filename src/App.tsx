import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
    return (<>
        <Container>
            <Logo/>
        </Container>
        <Container>
           <Menu/>
        </Container>
        <Container>
            <CountDown/>
        </Container>

        <Container>
            <form className='form'>
                <div className="rowForm">
                    <DefaultInput disabled id="meuInput" labelText="task" type="text" placeholder='Digite alguma coisa'/>
                </div>
            </form>
        </Container>

    </>);
}
