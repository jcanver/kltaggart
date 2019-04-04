import React from 'react'
import categories from './src/data/videoCategories'
import videos from './src/data/videos'

export default {
  plugins: ["react-static-plugin-styled-components"],
  getSiteData: () => ({
    title: 'Video Producer | Kirsten Taggart',
  }),
  getRoutes: async () => ([
    {
      path: '/video',
      // getData: () => ({
      //   categories,
      // }),
      children: categories.map(category => ({
        path: `/${category.key}`,
        component: 'src/containers/CategoryVideos',
        getData: () => ({
          category: category.key,
        }),
        children: videos[category.key].map(video => ({
          path: `/${video.videoId}`,
          component: 'src/containers/VideoSpotlight',
          getData: () => ({
            video,
            category: category.key
          })
        }))
      })),
    },
  ]),
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <title>Video Producer | Kirsten Taggart</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="http://www.kltaggart.com/klt-favicon.png" />
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker|Yanone+Kaffeesatz:200,300,400" rel="stylesheet" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55350508-2" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-55350508-2');
        ` }}
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
