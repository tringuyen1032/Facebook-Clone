import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets';

function App() {
   return (
      <div className="app">
         <Header />

         <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
         </div>

      </div>
   );
}

export default App;
