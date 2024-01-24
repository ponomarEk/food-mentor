import Layout from '../components/Layout';
import { SECTIONS_HEADER_INFO } from '../constants';

const GoalPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.GOAL;

  return <Layout sectionTitle={title} sectionCaption={caption}></Layout>;
};

export default GoalPage;
