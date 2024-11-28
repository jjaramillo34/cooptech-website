// File: src/components/LoadingSpinner.js
import gsap from "gsap";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute border-4 border-gray-200 rounded-full w-16 h-16" />
        <div className="absolute border-4 border-primary rounded-full w-16 h-16 animate-spin border-t-transparent" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
