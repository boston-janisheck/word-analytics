import { useState } from "react";
import Warning from "./Warning";

const TextValidator = ({ notAllowedTexts }) => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");

  const validateText = (text) => {
    let warnings = [];

    notAllowedTexts.forEach((notAllowed) => {
      if (text.includes(notAllowed)) {
        warnings.push(notAllowed);
        text = text.replace(new RegExp(notAllowed, "g"), "");
      }
    });

    const warningMessage =
      warnings.length > 0 ? `${warnings.join(", ")} is not allowed.` : "";
    setWarning(warningMessage);
    setText(text);
    console.log(text);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={(e) => validateText(e.target.value)}
        placeholder="Start typing..."
        spellCheck="false"
      />
      <Warning warningText={warning} />
    </div>
  );
};

export default TextValidator;
