import ExclamationIcon from "../Icons/ExclamationIcon";
import './ErrorLabel.styles.scss';

interface IErrorLabel {
  message: string;
}

const ErrorLabel = ({ message }: IErrorLabel) => {
  return (
    <div className="errorContainer">
      <p>{message}</p>
      <ExclamationIcon className="icon" />
    </div>
  );
}

export default ErrorLabel;
