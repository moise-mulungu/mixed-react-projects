import { projectCards } from "../../../../constants/portfolio";
const ProjectCard = () => {
    return (
        <div className="tailwind-class-uploading">
            <ul>
                {projectCards.map((id, title, description, image, url, stacks) => {
                    return (
                        <li key={id}>
                            <title>{title}</title>
                            <p>{description}</p>
                            <img src={image} alt="" />
                            <p>{url}</p>
                            {stacks.map((stack) => {
                                return <p key={stack}>{stack}</p>;
                            }
                            )}
                        </li>
                    
                    );
                }
                )}
            </ul>
        </div>
    );
};

export default ProjectCard;