import './styles/index.scss';
import './data/data.json';
import Nav from './elements/Nav.jsx';
import Content from './elements/Content.jsx';

export default function App() {
  const dataJson = require('./data/data.json');
  console.log(dataJson);
  return (
    <div className="App">
      <Nav navData = {dataJson} />
      <Content contentData = {dataJson}/>
    </div>
  );
}