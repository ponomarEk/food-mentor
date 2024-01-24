import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import { ROUTES, SECTIONS_HEADER_INFO } from '../constants';

const BehavioursPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.BEHAVIOURS;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <ContinueButton routePath={ROUTES.EXERCISE} />
    </Layout>
  );
};

export default BehavioursPage;
