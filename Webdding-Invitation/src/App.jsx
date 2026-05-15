import { useEffect, useState } from 'react';
import Invitation from './components/Invitation';
import Loader from './components/Loader';
import './invitation.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    loadResources();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen">
      <Invitation />
    </div>
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