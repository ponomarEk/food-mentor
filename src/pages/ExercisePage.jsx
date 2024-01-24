import Layout from '../components/Layout';
import { SECTIONS_HEADER_INFO } from '../constants';

const ExercisePage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.EXERCISE;

  return <Layout sectionTitle={title} sectionCaption={caption}></Layout>;
};

export default ExercisePage;
