import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  const [warning, setWarning] = useState("");

  const notAllowedTexts = ["<script>", "@", "</script>"];
  // Add to this array to filter out not allowed texts

  const validateText = (newText) => {
    let warnings = [];

    notAllowedTexts.forEach((notAllowed) => {
      if (newText.includes(notAllowed)) {
        warnings.push(notAllowed);
        newText = newText.replace(new RegExp(notAllowed, "g"), "");
      }
    });

    const warningMessage =
      warnings.length > 0 ? `${warnings.join(", ")} is not allowed.` : "";
    setWarning(warningMessage);
    setText(newText);
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

export default Textarea;
