import * as React from 'react'
import { Helmet } from 'react-helmet'

import useSiteMetadata from 'hooks/useSiteMetadata'

type SeoProps = {
  cover?: string
  description?: string
  lang?: string
  meta?: HTMLMetaElement[]
  showDefaultTitle?: boolean
  title?: string
}

const Seo: React.FC<SeoProps> = ({
  cover,
  description,
  lang = `pt-br`,
  meta = [],
  showDefaultTitle = true,
  title
}) => {
  const siteMetadata = useSiteMetadata()

  const defaultTitle = showDefaultTitle ? siteMetadata?.title : ``
  const titleTemplate = showDefaultTitle ? `%s - ${defaultTitle}` : `%s`
  const metaDescription = description || siteMetadata.description
  const ogImage = `${siteMetadata.siteUrl}/${cover || siteMetadata.cover}`

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      defaultTitle={defaultTitle}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: ogImage
        }
      ].concat(meta)}
    />
  )
}

export default Seo
