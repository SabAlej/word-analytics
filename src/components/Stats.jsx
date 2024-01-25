function Stats({ stats }) {
  return (
    <div className='stats'>
      {stats.map((stat, index) => (
        <Stat key={index} title={stat.title} number={stat.number} />
      ))}
    </div>
  );
}
export default Stats;

function Stat({ title, number }) {
  return (
    <section className='stat'>
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className='second-heading'>{title}</h2>
    </section>
  );
}
