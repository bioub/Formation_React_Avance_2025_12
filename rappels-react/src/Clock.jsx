import { useState, useEffect } from "react";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Cleanup function pour éviter les fuites mémoire
    return () => clearInterval(interval);
  }, []);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;