import * as React from 'react'
import { PageProps } from 'gatsby'

import { DefaultLayout } from 'components/layouts'

import { Seo } from 'components/helpers'

const IndexPage: React.FC<PageProps> = () => (
  <DefaultLayout>
    <Seo title="Home" />
    <h1>Hi people</h1>
  </DefaultLayout>
)

export default IndexPage
