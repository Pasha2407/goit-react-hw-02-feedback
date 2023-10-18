import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.main}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
