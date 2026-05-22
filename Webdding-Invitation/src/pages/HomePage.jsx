import Invitation from '../components/Invitation';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
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
}
