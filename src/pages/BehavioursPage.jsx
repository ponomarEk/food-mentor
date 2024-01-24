import Layout from '../components/Layout';
import { SECTIONS_HEADER_INFO } from '../constants';

const BehavioursPage = () => {
  const { title, caption } = SECTIONS_HEADER_INFO.BEHAVIOURS;

  return <Layout sectionTitle={title} sectionCaption={caption}></Layout>;
};

export default BehavioursPage;
