import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

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
            <div className="rowForm">                   
                <form className='form'>
                    <DefaultInput disabled id="meuInput" labelText="task" type="text" placeholder='Digite alguma coisa'/>
                </form>
            </div>
            <div className="rowForm">
                <Cycles/>
            </div>            
        </Container>

    </>);
}
