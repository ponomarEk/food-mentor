import Layout from '../components/Layout';
import { SECTIONS_HEADER_INFO } from '../constants';

const MeasurementPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.MEASUREMENT;

  return <Layout sectionTitle={title} sectionCaption={caption}></Layout>;
};

export default MeasurementPage;
