import TextValidator from "./TextValidator";

const Textarea = () => {
  const notAllowedTexts = ["<script>", "@", "</script>"];

  return <TextValidator notAllowedTexts={notAllowedTexts} />;
};

export default Textarea;
