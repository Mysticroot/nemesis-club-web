import { formatDate } from '@/lib/formatDate';

const SponsorHistoryTable = ({ sponsors }) => {
  return (
    <div className="lg:block">
      <div className="border border-gray-200 shadow-lg bg-white overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Sponsor Name
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Company
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Sponsorship Initiated
                </th>
                <th className="text-left py-5 px-6 text-sm font-semibold uppercase tracking-wider">
                  Sponsorship Terminated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {sponsors.map((sponsor, index) => (
                <tr
                  key={sponsor.id}
                  className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-5 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {sponsor.name}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-700 whitespace-nowrap">
                    {sponsor.company_name || '—'}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-700 whitespace-nowrap">
                    {sponsor.email}
                  </td>
                  <td className="py-5 px-6 text-sm text-gray-700 whitespace-nowrap">
                    {sponsor.approved_at ? formatDate(sponsor.approved_at) : '—'}
                  </td>

                  <td className="py-5 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {sponsor.deleted_at ? formatDate(sponsor.deleted_at) : '—'}
                  </td>
                </tr>
              ))}
              {sponsors.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-6 px-6 text-center text-gray-500 text-sm italic">
                    No opted-out sponsors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SponsorHistoryTable;
