import { NextPageWithLayout } from 'next';
import Layout from '../components/Layout';

const CheckList: NextPageWithLayout = () => {
  return <h1>hi</h1>;
};

CheckList.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CheckList;
