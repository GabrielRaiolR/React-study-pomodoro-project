import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              type='number'
              labelText='Task'
              id='input'
              placeholder='Task digite aqui'
            />
          </div>

          <div className='formRow'>
            <p>Total time: 00:00</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
