import { HashLoader } from 'react-spinners';

const LoadingEffect = () => {
  return (
    <div  style={{
        background: `radial-gradient(circle at center, rgba(80, 68, 229, 0.05), transparent 70%)`,
      }} className="w-full h-screen flex items-center justify-center bg-white">
      <HashLoader
        color={'#5044e5'}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingEffect;
