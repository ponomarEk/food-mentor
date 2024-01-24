import AdditionalQuestion from '../components/AdditionalQuestion';
import Layout from '../components/Layout';
import { ADDITIONAL_QUESTIONS, SECTIONS_HEADER_INFO } from '../constants';

const ExercisePage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.EXERCISE;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <AdditionalQuestion question={ADDITIONAL_QUESTIONS.EXERCISE} />
    </Layout>
  );
};

export default ExercisePage;
