import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import Measurement from '../components/measurement/Measurement';
import { ROUTES, SECTIONS_HEADER_INFO } from '../constants';

const MeasurementPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.MEASUREMENT;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <Measurement />
      <ContinueButton routePath={ROUTES.BEHAVIOURS} />
    </Layout>
  );
};

export default MeasurementPage;
