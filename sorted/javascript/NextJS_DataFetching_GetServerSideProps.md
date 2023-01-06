# Function getServerSideProps

## features

- fetch data **on each request**

> distinguish from getStaticProps, which fetch data **at build time**

- Time to first byte(TTFB) will be slower than [getStaticProps](NextJS_DataFetching_GetStaticProps.md)
  - 因为它会在每次请求发生时使 server 生成计算结果
  - 并且不能被CDN缓存
- only can be exported from a [page](NextJS_Terminology.md#pages)

## when to use

- page data must be fetch at request time(请求头的authorization or geo-location)
