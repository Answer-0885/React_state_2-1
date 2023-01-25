import "../App.css";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {["All", ...filters].map((filter) => (
        <button
          key={filter}
          className={selected===filter ? "app-link-select" : "app-link"}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;