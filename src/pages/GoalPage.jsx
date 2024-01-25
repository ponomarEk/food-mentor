import AdditionalQuestion from '../components/AdditionalQuestion';
import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import Goals from '../components/goals/Goals';
import { ADDITIONAL_QUESTIONS, ROUTES, SECTIONS_HEADER_INFO } from '../constants';
import { useAppData } from '../hooks/useAppData';

const GoalPage = () => {
  const { currentGoal } = useAppData();

  const { title, caption } = SECTIONS_HEADER_INFO.GOAL;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <AdditionalQuestion question={ADDITIONAL_QUESTIONS.GOAL} />
      <Goals />
      <ContinueButton routePath={ROUTES.MEASUREMENT} disabled={!currentGoal} />
    </Layout>
  );
};

export default GoalPage;
