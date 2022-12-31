import Preview from './Preview';
import './asset/Style.scss';

const App = () => {
  return <>
    <header className='Preview-Header'>
      <h1>react-simple-switch preview</h1>
    </header>
    <main className='Preview-Main'>
      <Preview />
      <Preview />
    </main>
  </>;
};

export default App;
