import { styles } from "./styles";

function InputTextField({
  name,
  state = "",
  onChange,
  height = 40,
}: {
  name: string;
  state?: string | number;
  onChange: (value: string) => void;
  height?: number;
}) {
  return (
    <div>
      <label style={styles.label}>{name}</label>
      <br />
      <input
        type="text"
        value={state}
        onChange={(event) => onChange(event.target.value)}
        style={{ ...styles.inputField, height }}
      />
    </div>
  );
}

export default InputTextField;
