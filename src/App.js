import logo from './logo.svg';
import './App.css';

import { Sortingtable } from './components/Sortingtable';
import { PaginationPage } from './components/PaginationPage';
import { FilteringTable } from './components/FilteringTable';

function App() {
  return (
    <div className="App">
  <FilteringTable/>
    <h1>React Table</h1>
    </div>
  );
}
export default App;
