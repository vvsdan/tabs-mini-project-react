const BtnContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        const { id, company } = item;
        return (
          <button
            key={id}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
