import './Alert.style.scss';

interface IAlert {
  message: string;
  imgUrl: string;
  error: boolean;
}

const Alert = ({ message, imgUrl, error }: IAlert) => {
  return (
    <div className={`alertContainer ${error ? 'errorBlur' : 'successBlur'}`}>
      <img src={imgUrl} alt="Icon cat" />
      <p className={error ? "errorText" : 'successText'}>
        {message}
      </p>
    </div>
  );
};

export default Alert;
