import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon } from '../Icons';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  let breadcrumbPath = '';

  const { t } = useTranslation();

  return (
    <div className="mb-2 pb-4 border-b border-[#c4c4c4] dark:border-[#455478]">
      <Link to="/">{t('main')}</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath}> / {t(name)}</span>
        ) : (
          <span key={breadcrumbPath}>
            {' '}
            / <Link to={breadcrumbPath}>{t(name)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
