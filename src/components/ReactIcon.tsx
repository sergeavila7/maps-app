import reactIcon from '../assets/react.svg';
export const ReactIcon = () => {
  return (
    <img
      src={reactIcon}
      alt='React Logo'
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '130px',
      }}
    />
  );
};
