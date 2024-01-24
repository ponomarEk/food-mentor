import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import { ROUTES, SECTIONS_HEADER_INFO } from '../constants';

const GoalPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.GOAL;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <ContinueButton routePath={ROUTES.MEASUREMENT} />
    </Layout>
  );
};

export default GoalPage;
