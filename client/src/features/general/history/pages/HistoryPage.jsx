import { motion } from 'framer-motion';

import { historyData } from '@/features/general/history/historyData';
import HistoryHeading from '../components/HistoryHeading';
import HistoryTimeLine from '../components/HistoryTimeLine';

const HistoryPage = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen py-16 px-6 md:px-16 pt-28">
      {/* Title */}
      <HistoryHeading />

      {/* Timeline Cards */}
      <HistoryTimeLine historyData={historyData} />
    </div>
  );
};
export default HistoryPage;
