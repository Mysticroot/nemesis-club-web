import { Separator } from '@/components/ui/separator';

const PageHeader = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
        {Icon && <Icon className="w-6 h-6 text-indigo-600 shrink-0" />}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h1>
      </div>
      {subtitle && <p className="mt-1 text-sm text-gray-600 max-w-md">{subtitle}</p>}
      <Separator className="mt-4" />
    </div>
  );
};

export default PageHeader;
