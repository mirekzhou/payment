This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 路由跳转方法
1. Using the <Link> Component    
  （最主要推荐的方式， 提供client-side + prefetching的方式）

2. Using the useRouter hook (Client Components)  
   (除非有特殊需求，否则使用 <Link组件> 代替 useRouter)

3. Using the redirect function (Server Components)
    

4. Using the native History API

