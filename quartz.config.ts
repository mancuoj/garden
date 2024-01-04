import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cybergarden",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "garden.mancuoj.me",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "IBM Plex Serif",
        body: "Fira Sans",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          // ORIGIN
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        // lightMode: {
        //   // JOSH
        //   light: "#FFFFFF",
        //   lightgray: "#2B333B",
        //   gray: "#DFEBF6",
        //   darkgray: "#000000",
        //   dark: "#2C0B8E",
        //   secondary: "#3219FF",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        // },
        darkMode: {
          // ORIGIN
          light: "#161618",         // 背景
          lightgray: "#393639",     // 边框
          gray: "#646464",          // 信息
          darkgray: "#d4d4d4",      // 正文
          dark: "#ebebec",          // 标题
          secondary: "#7b97aa",     // 链接
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        // darkMode: {
        //   // JOSH
        //   light: "#0E141B", 
        //   lightgray: "#182635", 
        //   gray: "#9CA7B3",
        //   darkgray: "#FFFFFF", 
        //   dark: "#FFE100",
        //   secondary: "#617BFF",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        // },
        // darkMode: {
        //   // TAILWIND
        //   light: "#0F172A",
        //   lightgray: "#182635",
        //   gray: "#646464",
        //   darkgray: "#8F9DB3",
        //   dark: "#E4E9F2",
        //   secondary: "#38BDF8",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        // },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
