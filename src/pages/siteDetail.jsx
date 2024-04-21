import { Helmet } from 'react-helmet-async';

import SiteDetailView from 'src/sections/sites/detail/siteDetails-view';

// ----------------------------------------------------------------------

export default function SitePage() {
  return (
    <>
      <Helmet>
        <title> Site </title>
      </Helmet>

      <SiteDetailView />
    </>
  );
}
