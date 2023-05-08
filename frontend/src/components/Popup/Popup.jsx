import './Popup.css';

const Popup = ({ setActive, children, title }) => {
  return (
    <>
      <div
        className='popup_background'
        onClick={() => {
          setActive(false);
        }}
      />

      <div
        className='popup_window'
        onClick={e => e.stopPropagation()}
      >
        <h1 className='popup_title'>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Popup;
