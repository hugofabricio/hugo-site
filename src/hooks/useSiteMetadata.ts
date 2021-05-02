import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            cover
            url
          }
        }
      }
    `
  )

  return siteMetadata
}

export default useSiteMetadata
