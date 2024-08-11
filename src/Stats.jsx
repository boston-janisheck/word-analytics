const Stats = ({ text }) => {
  const wordCount = text.split(" ").filter((word) => word !== "").length;
  return (
    <section className="stats">
      <Stat number={wordCount} title="Words" />
      <Stat number={text.length} title="Characters" />
      <Stat number={280 - text.length} title="Instagram" />
      <Stat number={2200 - text.length} title="Facebook" />
    </section>
  );
};

const Stat = ({ number, title }) => {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{title}</h2>
    </section>
  );
};

export default Stats;
