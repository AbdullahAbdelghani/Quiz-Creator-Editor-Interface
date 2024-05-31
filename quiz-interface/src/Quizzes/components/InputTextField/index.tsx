function InputTextField({
  name,
  state = "",
  onChange,
  height,
}: {
  name: string;
  state?: string | number;
  onChange: (value: string) => void;
  height?: number;
}) {
  return (
    <div>
      <label>{name}</label>
      <br />
      <input
        type="text"
        value={state}
        onChange={(event) => onChange(event.target.value)}
        style={{ height }}
      />
    </div>
  );
}

export default InputTextField;
