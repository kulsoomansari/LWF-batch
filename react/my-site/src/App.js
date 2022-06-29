import './App.css';
import Header from './Header';
import { HowItWorks } from './HowItWorks';
import Navbar from './Navbar';
import { Services } from './Services';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <HowItWorks />
      {/* <Services />  */}
    </div>
  );
}

export default App;
