import { useRef } from "react";
import "../../index.css"; // Yangi CSS faylni import qilish

const HorizontallyScrollable = ({ children, className = "" }) => {
  const scrollRef = useRef(null);

  const handleMouseDown = (evt) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const startX = evt.pageX - scrollContainer.offsetLeft;
    const scrollLeft = scrollContainer.scrollLeft;

    const handleMouseMove = (moveEvt) => {
      const x = moveEvt.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={scrollRef}
      className={`scroll-container ${className}`}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};

export default HorizontallyScrollable;
