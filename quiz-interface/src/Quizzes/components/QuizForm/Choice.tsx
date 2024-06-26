import { styles } from "./styles";

const Choice = ({
  isTrue,
  answerBody,
  onChange,
}: {
  isTrue: boolean;
  answerBody: string;
  onChange: (value: boolean | string) => void;
}) => {
  return (
    <div>
      <input type="radio" checked={isTrue} onClick={() => onChange(true)} />
      <input
        style={styles.choice}
        type="text"
        value={answerBody}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Choice;
