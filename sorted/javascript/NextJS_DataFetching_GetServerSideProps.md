# Function getServerSideProps

- called at request time
- Time to first byte(TTFB) will be slower than [getStaticProps](NextJS_DataFetching_GetStaticProps.md)
  - 因为它会在每次请求发生时使 server 生成计算结果
  - 并且不能被CDN缓存