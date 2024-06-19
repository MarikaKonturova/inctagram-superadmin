This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Folders Structure [`Feature Sliced Design`](https://feature-sliced.design/)

Presentation and slides about [`FSD`](https://docs.google.com/presentation/d/1Ui8Ji8Q6fB_3kkcM9bQxVGYuhhcItZInra8WiUOgnOA/edit#slide=id.g1072b3b2b36_0_22)

`/src` - all needed functionality and components for pages
- `/shared` - reusable functionality, detached from the specifics of the project/business.(e.g. UIKit, libs, API)
- `/layouts` - common layouts for pages
- `/entities` - business entities.(e.g., User, Product, Order)
- `/features` - user interactions, actions that bring business value to the user.(e.g. SendComment, AddToCart, UsersSearch)
- `/widgets` - compositional layer to combine entities and features into meaningful blocks.(e.g. IssuesList, UserProfile)
- `/pages` - application pages
- `/templates` - big parts of pages with building blocks for specific page. For the next.js pages is a file-routed directory, where one component = one route. For FSD pages, this is the flat page list layer. If you want to use both, you will have to keep two directories at once: a flat list of pages (let it be templates) and nested routes (pages). We keep the page code in templates and export it to pages. Ready.
- `/app` - app-wide settings, styles and providers.
