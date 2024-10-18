// app/components/Breadcrumb.js

import Link from 'next/link';

const Breadcrumb = ({ path }) => {
  const pathArray = path.split('/').filter(Boolean);

  return (
    <div className="text-sm breadcrumbs">
      {pathArray.map((crumb, index) => {
        const href = '/' + pathArray.slice(0, index + 1).join('/');
        return (
          <span key={crumb}>
            <Link href={href}>
              <span className="text-blue-500 capitalize">{crumb}</span>
            </Link>
            {index < pathArray.length - 1 && ' > '}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
