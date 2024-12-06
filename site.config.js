const CONFIG = {
  // profile setting (required)
  profile: {
    name: "yulily",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "developer",
    bio: "",
    email: "",
    linkedin: "",
    github: "https://github.com/yulily",
    instagram: "",
  },
  projects: [
   {
        name: 'Astro Site',
        href: "https://yulily.github.io/murmur/",
   },
   {
        name: 'Middleman Blog',
        href: "https://yulily.github.io/",
   },
   {
        name: 'Money Log',
        href: "https://github.com/yulily/ab",
    },
    {
        name: 'Lyric Animation by TextAlive',
        href: "https://github.com/yulily/textaliveForMiku",
    },
    {
        name: '2nd Drawing App',
        href: "https://github.com/yulily/dessin",
    },
    {
        name: '1st Drawing App',
        href: "https://github.com/yulily/collage",
    }
  ],
  // blog setting (required)
  blog: {
    title: "Iris",
    description: "I will be sharing the technical knowledge I've learned.",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://yulily-blog.vercel.app",
  since: 2015, // If leave this empty, current year will be used.
  lang: "ja-JP", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
