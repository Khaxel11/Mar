import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import InvitacionPage from './pages/InvitacionPage';
import PresentacionPage from './pages/PresentacionPage';
import InfoPage from './pages/InfoPage';
import UbicacionPage from './pages/UbicacionPage';
import PadrinosPage from './pages/PadrinosPage';
import EspecialesPage from './pages/EspecialesPage';
import AtuendoPage from './pages/AtuendoPage';
import ItinerarioPage from './pages/ItinerarioPage';
import GaleriaPage from './pages/GaleriaPage';
import NotFoundPage from './pages/NotFoundPage';
import SecretoPage from './pages/SecretoPage';
import InvitacionBailePage from './pages/InvitacionBailePage';
import WelcomePage from './pages/WelcomePage';
import './invitation.css';
import './styles/Menu.css';

// Componente interno que usa useLocation
const AppContent = () => {
  const location = useLocation();
  
  // Rutas donde el menú NO debe mostrarse
  const noMenuRoutes = ['/secreto', '/invitacion-baile'];
  const showMenu = !noMenuRoutes.includes(location.pathname);

  return (
    <div className="w-full min-h-screen">
      {showMenu && <Menu />}
      <Routes>
        <Route path="/Mar" element={<WelcomePage />} />
        <Route path="expo" element={<HomePage />} />
        {/* <Route path="/invitacion" element={<InvitacionPage />} />
        <Route path="/presentacion" element={<PresentacionPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="/padrinos" element={<PadrinosPage />} />
        <Route path="/especiales" element={<EspecialesPage />} />
        <Route path="/atuendo" element={<AtuendoPage />} />
        <Route path="/itinerario" element={<ItinerarioPage />} />
        <Route path="/galeria" element={<GaleriaPage />} /> */}
        <Route path="/baile" element={<SecretoPage />} />
        <Route path="/frase" element={<InvitacionBailePage />} />
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

{/* <Hero/>
          <SaveTheDate imageSrc={save}/>
          <Info />
          <Placement />
          <div className="mt-1 w-full h-[3px] bg-gold" />
          <div className="mt-1 w-full h-[3px] bg-gold" />

          <Testimonial tipo={'padrinos'}/>
          <Testimonial tipo={'special'}/>
          <div className='mb-1 w-full h-[3px] bg-gold' />
          <div className='mb-4 w-full h-[3px] bg-gold' />
          <SaveTheDate imageSrc={save2}/>
          <CodeDress/>
          <Itinerary/>
          <Gallery />
          <SaveTheDate imageSrc={save4}/>
          {isChatBoxVisible && <ChatBox onClose={handleToggleChatBox} />}
          <WhatsAppButton onClick={handleToggleChatBox} />
          
          <Footer /> */}