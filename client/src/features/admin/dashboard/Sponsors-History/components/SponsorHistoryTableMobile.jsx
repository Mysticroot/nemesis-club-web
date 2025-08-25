const SponsorHistoryTableMobile = ({ sponsors }) => {
  return (
    <div className="space-y-4">
      {sponsors.map((sponsor) => (
        <div
          key={sponsor.id}
          className="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col space-y-2"
        >
          <div>
            <span className="text-sm font-semibold text-gray-600">Sponsor Name:</span>
            <p className="text-gray-900 font-medium">{sponsor.name}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Company:</span>
            <p className="text-gray-800">{sponsor.company_name || '—'}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Email:</span>
            <p className="text-gray-800">{sponsor.email}</p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Sponsorship Initiated:</span>
            <p className="text-gray-700 text-sm">
              {sponsor.approved_at ? new Date(sponsor.approved_at).toLocaleDateString() : '—'}
            </p>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-600">Sponsorship Terminated:</span>
            <p className="text-gray-700 text-sm">
              {sponsor.deleted_at ? new Date(sponsor.deleted_at).toLocaleDateString() : '—'}
            </p>
          </div>
        </div>
      ))}

      {sponsors.length === 0 && (
        <div className="text-center text-gray-500 italic text-sm">No opted-out sponsors found.</div>
      )}
    </div>
  );
};

export default SponsorHistoryTableMobile;
