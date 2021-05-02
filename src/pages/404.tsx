import * as React from 'react'
import { PageProps } from 'gatsby'

import { DefaultLayout } from 'components/layouts'

import { Seo } from 'components/helpers'

const NotFoundPage: React.FC<PageProps> = () => (
  <DefaultLayout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
