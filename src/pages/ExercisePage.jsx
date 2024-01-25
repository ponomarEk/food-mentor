import AdditionalQuestion from '../components/AdditionalQuestion';
import Layout from '../components/Layout';
import PhysicalExercises from '../components/exercises/PhysicalExercises';
import { ADDITIONAL_QUESTIONS, SECTIONS_HEADER_INFO } from '../constants';

const ExercisePage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.EXERCISE;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <AdditionalQuestion question={ADDITIONAL_QUESTIONS.EXERCISE} />
      <PhysicalExercises />
    </Layout>
  );
};

export default ExercisePage;
