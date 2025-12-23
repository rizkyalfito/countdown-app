import { Countdown } from './components/Countdown';
import GetStarted from './components/GetStarted';
import { NavbarComponent } from './components/Navbar';
import './index.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="min-h-screen bg-gray-200 flex overflow-hidden">
        <main className="max-w-7xl mx-auto text-center flex flex-col gap-4">
          <Countdown />
          <GetStarted />
        </main>
      </div>
    </>
  );
}

export default App;