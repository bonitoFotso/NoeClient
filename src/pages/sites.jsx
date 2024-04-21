import { Helmet } from 'react-helmet-async';

import SiteView from 'src/sections/sites/view/sites-view';

// ----------------------------------------------------------------------

export default function SitePage() {
  return (
    <>
      <Helmet>
        <title> Site </title>
      </Helmet>

      <SiteView />
    </>
  );
}
