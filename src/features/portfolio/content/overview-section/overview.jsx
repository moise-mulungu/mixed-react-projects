import { contentOverviewHeaderText, contentOverviewParagraphText } from '../content';


const Overview = (props) => {
    // const { data } = props;
    return (
      <div className="overview">
        <h2>{contentOverviewHeaderText}</h2>
        <p>{contentOverviewParagraphText}</p>
      </div>
    )
};

export default Overview;