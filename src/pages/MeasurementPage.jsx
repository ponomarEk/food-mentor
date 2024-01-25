import ContinueButton from '../components/ContinueButton';
import Layout from '../components/Layout';
import Measurement from '../components/measurement/Measurement';
import { ROUTES, SECTIONS_HEADER_INFO } from '../constants';
import { useAppData } from '../hooks/useAppData';

const MeasurementPage = () => {
  const { measurement } = useAppData();

  const { title, caption } = SECTIONS_HEADER_INFO.MEASUREMENT;

  return (
    <Layout sectionTitle={title} sectionCaption={caption}>
      <Measurement />
      <ContinueButton routePath={ROUTES.BEHAVIOURS} disabled={!measurement.height || !measurement.weight} />
    </Layout>
  );
};

export default MeasurementPage;
