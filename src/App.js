import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'
import Login from "./Login"
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (

    <div className="app">
    
      {!user ? (<h1><Login /></h1>) : (

        <div>
          <Header />
          <div className='app__body'>
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* widgets */}
            <Widgets />
          </div>

        </div>
      )}

    </div>
  );
}

export default App;








      // {/* Header */}
      // {/* App Boddy */}
      // {/* Sidebar */}
      // {/* Feed */}
      // {/* widgets */}