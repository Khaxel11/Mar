import { useState, useEffect } from 'react';
import Letter from './components/Letter';
import Hero from './components/Hero';
import Placement from './components/Placement';
import { motion } from 'framer-motion';
import Testimonial from './components/Testimonial';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import WhatsAppButton from './components/WhatsAppButton ';
import CodeDress from './components/CodeDress'
import Itinerary from './components/Itinerary'
import SaveTheDate from './components/SaveTheDate';
import { save, save2, save4 } from './assets/index'
const App = () => {
  const [showLetter, setShowLetter] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleHideLetter = () => {
    setShowLetter(false);
  };
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

  const handleToggleChatBox = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };
  useEffect(() => {
    const loadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setLoading(false);
    };

    loadResources();
  }, []);



  if (loading) {
    return <Loader />;
  }

  return (
    <section className="w-full">
      {showLetter ? (
        <Letter onClick={handleHideLetter} />
      ) : (
        <motion.section className="w-full h-auto">
          <Hero/>
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
          
          <Footer />
        </motion.section>
      )}
    </section>
  );
};

export default App;
