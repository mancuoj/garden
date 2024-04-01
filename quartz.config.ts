import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cybergarden",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "garden.mancuoj.me",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      fontOrigin: "googleFonts",
      typography: {
        header: "Merienda",
        body: "Courier Prime",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8faf8", // 浅绿色护眼背景
          lightgray: "#e5e5e5", // 灰色
          gray: "#b8b8b8", // 中灰色
          darkgray: "#4e4e4e", // 深灰色
          dark: "#2b2b2b", // 深色文字
          secondary: "#457b63", // 次要元素，深绿色
          tertiary: "#84a59d", // 三级元素，浅绿色
          highlight: "rgba(143, 159, 169, 0.15)", // 高亮
        },
        darkMode: {
          light: "#282a36", // Dracula 背景色
          lightgray: "#6272a4", // Dracula 注释颜色
          gray: "#44475a", // Dracula 中间色调
          darkgray: "#f8f8f2", // Dracula 前景色（文本）
          dark: "#ebebec", // 深色文字
          secondary: "#50fa7b", // Dracula 绿色
          tertiary: "#ff79c6", // Dracula 粉红色
          highlight: "rgba(143, 159, 169, 0.15)", // 高亮
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
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
