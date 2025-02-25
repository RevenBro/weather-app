import { useState, useEffect } from "react";

const Loader = ({ type = "cloud" }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (type === "cloud") {
      setIcon(
        <div className="cloud animate-cloudMove">
          <div className="circle"></div>
          <div className="circle-small"></div>
        </div>
      );
    } else if (type === "rain") {
      setIcon(
        <div className="rain">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="drop"></div>
          ))}
        </div>
      );
    } else {
      setIcon(
        <div className="sun animate-spin-slow">
          <div className="core"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="ray"
              style={{ transform: `rotate(${i * 30}deg)` }}
            ></div>
          ))}
        </div>
      );
    }
  }, [type]);

  return (
    <div className="loader-container">
      {icon}
      <p className="loader-text">Fetching Weather...</p>
      <style>{`
        .loader-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #2dd4bf, #111827);
          overflow: hidden;
          color: #ffffff;
        }
        .loader-text {
          font-size: 1.5rem;
          margin-top: 2rem;
          animation: fadeIn 2s ease-in-out infinite;
        }
        
        /* Sun Loader */
        .sun {
          width: 100px;
          height: 100px;
          position: relative;
          animation: pulse 4s infinite;
        }
        .core {
          width: 60px;
          height: 60px;
          background: #facc15;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          left: 20px;
          box-shadow: 0 0 20px #facc15;
        }
        .ray {
          width: 8px;
          height: 30px;
          background: #facc15;
          position: absolute;
          top: -10px;
          left: 46px;
          border-radius: 5px;
        }

        /* Cloud Loader */
        .cloud {
          display: flex;
          align-items: center;
          position: relative;
          animation: float 3s ease-in-out infinite;
        }
        .circle {
          width: 80px;
          height: 80px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
        }
        .circle-small {
          width: 60px;
          height: 60px;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: -20px;
          left: 50px;
        }

        /* Rain Loader */
        .rain {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .drop {
          width: 3px;
          height: 20px;
          background: #60a5fa;
          margin: 0 4px;
          border-radius: 5px;
          animation: rainFall 1s linear infinite;
        }
        .drop:nth-child(even) {
          animation-delay: 0.2s;
        }

        /* Animations */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rainFall {
          0% { transform: translateY(-40px); opacity: 0.8; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        @keyframes fadeIn {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
