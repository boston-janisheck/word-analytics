import { useState } from "react";

const Textarea = () => {
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        console.log(e.target.value);
      }}
      className="textarea"
      placeholder="Start typing..."
      spellCheck="false"
    />
  );
};

export default Textarea;
