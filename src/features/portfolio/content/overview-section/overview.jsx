const headerText = 'Hey there, I am Moise. a software developer';
const paragraphText = 'I can help you build a product, feature or website Look through some of my work experience! You like what you see and have a project you need coded, do not hesitate to contact me.';

const Overview = (props) => {
    // const { data } = props;
    return (
      <div className="overview">
        <h2>{headerText}</h2>
        <p>{paragraphText}</p>
      </div>
    )
};

export default Overview;