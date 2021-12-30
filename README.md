*** Unhandled Run Time error: **Cannot read properties of null (reading 'frontmatter')

At src -> pages --> updates you will find `{mdx.slug}.js` if you comment out line 13 the error goes away.

Line 13 reads `if(!post) return <pre>{JSON.stringify(pageContext,null,2)}</pre>`

For some reason my query, which runs fine in GraphiQL returns null when I run `gatsby build`. `gatsby-develop` works okay until I attempt to visit the updates page (aka my blog page)... 

Reproduction Repository for Gatsby Issue #34342
https://github.com/gatsbyjs/gatsby/issues/34342
