# LucianaiB

> LucianaiB 是一名专注于 AI 应用落地与 AI App 设计开发的开发者和技术博主。代表作品有 Android 文档 AI 助手 DocPilot Qwen、HarmonyOS 专注应用智办 ZhiBan，以及 LifeTrace（人生经纬）、GeoMind、小说迷图谱、MatTrace 等开源 AI Skill。

本仓库是 LucianaiB 个人主页的源码，线上地址：**https://lucianaib2004.github.io**

## 关于 LucianaiB

- **方向**：AI 应用落地、AI App（Android / HarmonyOS）开发、Agent / Skill / MCP 工程
- **影响力**：全网文章阅读量超过 958 万，发布的 MCP 累计调用超过 1,193 万次，Skill 累计下载 1,223 次（数据截至 2026-08-23）；全网粉丝 2 万+，原创文章 270 余篇
- **社区身份**：腾讯云 TDP、阿里云开发者社区专家博主、CSDN 优质创作者（人工智能、后端开发领域）

## 代表项目

| 项目 | 类型 | 简介 |
|---|---|---|
| [DocPilot Qwen](https://github.com/LucianaiB2004/DocPilot-Qwen) | Android App | 开源文档 AI 助手：TextIn 文档解析 + Qwen 问答、摘要与模板抽取 |
| [智办 ZhiBan](https://blog.csdn.net/lwcwam/article/details/166646713) | HarmonyOS App | 借助 CodeArts 代码智能体开发的游戏化专注应用 |
| [人生经纬 LifeTrace](https://github.com/LucianaiB2004/life-trace-amap) | AI Skill | 基于高德地图的人物一生足迹地图，带来源与可信度 |
| [小说迷图谱](https://github.com/LucianaiB2004/novel-fan-graph) | AI Skill | 基于 Doubao-Seed-Evolving 的小说知识图谱，按章节防剧透 |
| [GeoMind](https://github.com/LucianaiB2004/GeoMind) | AI Skill | 飞书 CLI + 腾讯位置服务的产业地理情报可视化 |
| [MatTrace](https://github.com/LucianaiB2004/mattrace) | AI 应用 | 材料科研文献证据抽取，每条数据附原文与页码 |
| [AI 打假侦探](https://github.com/LucianaiB2004/ai-truth-detective) | AI 应用 | 多模态 AIGC 内容验真 |

## 找到 LucianaiB

- 个人主页：https://lucianaib2004.github.io
- GitHub：https://github.com/LucianaiB2004
- CSDN：https://blog.csdn.net/lwcwam
- 腾讯云开发者社区：https://cloud.tencent.com/developer/user/11328216
- 阿里云开发者社区：https://developer.aliyun.com/profile/uu7b7ecltrr7k
- 哔哩哔哩：https://space.bilibili.com/1068659541
- 交流合作：微信 `LucianaiB20040318`

## 网站技术说明

纯静态网站（HTML + CSS + 少量原生 JS），无构建步骤，部署在 GitHub Pages（仓库 LucianaiB2004.github.io 的 main 分支）。

- 所有正文直接写在 `index.html` 中，不依赖 JavaScript 渲染，便于搜索引擎和 AI 爬虫读取
- `<head>` 内含 JSON-LD 结构化数据：Person、ProfilePage、FAQPage、项目与文章列表
- `llms.txt`：面向大语言模型的 Markdown 简介
- `robots.txt` 明确允许主流搜索引擎与 AI 爬虫，`sitemap.xml` 供收录提交

本地预览：在仓库目录运行 `python -m http.server 8000`，然后访问 http://localhost:8000 。

修改内容时请同步更新 JSON-LD 中的 FAQ 文本和 `llms.txt`，保持各处说法一致。
