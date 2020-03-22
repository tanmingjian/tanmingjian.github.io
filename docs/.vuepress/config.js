module.exports = {
    title: "南庐杂记",
    description: "山中何事？松花酿酒，春水煎茶。",
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "/favicon.ico"
        }
      ],
      [
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no"
        }
      ]
    ],
    theme: "reco",
    themeConfig: {
      nav: [
        {
          text: "首页",
          link: "/",
          icon: "reco-home"
        },
        {
          text: "时间轴",
          link: "/timeLine/",
          icon: "reco-date"
        },
        {
          text: "GitHub",
          link: "https://github.com/tanmingjian",
          icon: "reco-github"
        }
      ],
      type: "blog",
      blogConfig: {
        category: {
          location: 2,
          text: "分类"
        },
        tag: {
          location: 3,
          text: "标签"
        }
      },
      logo: "/head.png",
      authorAvatar: "/head.png",
      search: true,
      searchMaxSuggestions: 10,
      sidebar: "auto",
      lastUpdated: "Last Updated",
      author: "tanmingjian",
      startYear: "2020"
    },
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    markdown: {
      lineNumbers: true
    }
  };
