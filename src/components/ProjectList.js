import "../App.css";
import { v4 as uuidv4 } from 'uuid';

const ProjectList = ({ projects }) => {
  return (
    <div className="containerCards">
      {projects.map(({ img, category }) => (
        <img key={uuidv4()} src={img} alt={category} />
      ))}
    </div>
  );
};

export default ProjectList;