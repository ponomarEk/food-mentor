import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import Behaviours from '../components/behaviours/Behaviours';
import { ROUTES, SECTIONS_HEADER_INFO } from '../constants';
import { useAppData } from '../hooks/useAppData';

const BehavioursPage = () => {
  const { currentBehaviour } = useAppData();

  const { title, caption } = SECTIONS_HEADER_INFO.BEHAVIOURS;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <Behaviours />
      <ContinueButton routePath={ROUTES.EXERCISE} disabled={!currentBehaviour} />
    </Layout>
  );
};

export default BehavioursPage;
