import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Error from "./Error";
import Poll from "./Poll";

const PollWrapper = ({ questions }) => {
  const { id } = useParams();

  if (!questions[id]) {
    return <Error />;
  }

  return <Poll id={id} />;
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(PollWrapper);
