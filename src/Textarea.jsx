import { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    if (text.includes("<script>")) {
      setWarning("Scripts are not allowed.");
      text = text.replace("<script>", "");
    } else {
      setWarning("");
    }
    setText(text);
    console.log(text);
  };
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        spellCheck="false"
      />
      <Warning warningText={warning} />
    </div>
  );
};

export default Textarea;
