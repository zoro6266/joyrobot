# 机器人公司官网

基于用户 PRD 的四页静态网站。参考 Supahero 的简洁导航、大标题、留白与卡片布局。当前为设计预览，不是已核准的品牌发布内容。

## 运行与构建

```sh
npm ci
npm run build
npm start
```

打开 http://localhost:3000 。页面文件位于 `dist/index.html`、`dist/products/index.html`、`dist/download/index.html`、`dist/careers/index.html`；未知路径的正式托管错误页为 `dist/404.html`。本地 Python 简易服务器对未知地址显示原生 404，不预览自定义错误页；可直接打开 `/404.html` 预览它。

## 配置与素材

统一编辑 `content.json`，执行 `npm run build` 后生效。正式机器人图片放入 `dist/assets/`，配置使用 `/assets/文件名`。机器人图片保持完整比例；场景照片按正方形完整展示，不裁切。默认未使用任何第三方机器人、未生成替代形象。

- `preview: true` 显示预览标签和待确认的文案方向；预览页面设置 noindex。改成 false 会隐藏未确认的核心价值和生活场景方向，真实内容需先填齐。
- 首页 `values`、`scenarios` 为确认内容；场景需 `published: true` 且有图片。产品数组支持 1–4 项，只显示 `published: true` 的项目。
- APP 名称、图标、截图、功能与适配型号必须单独填写，未从其他项目沿用。
- 下载渠道配置 `available`、`comingSoon` 或 `unavailable`。只有 available + HTTPS URL 会生成可用链接与真正的 QRCode（本地标准库生成 SVG，无外部二维码服务）。配置者须人工验证真实目标页和手机扫码结果。
- 招聘 `jobs` 的字段：`id,title,location,department,type,responsibilities[],requirements[],email,applyUrl,status`。status 为 open 且职责、要求、地点与有效投递渠道完整才显示。`isCompanyPage: true` 将投递按钮明确标记为公司招聘主页。
- 招聘邮箱仅在 `generalApplicationEnabled: true` 且邮箱有效时显示。岗位默认不收集简历、不虚构投递成功。
- `footer` 的真实隐私政策和备案链接为可选配置。

## 发布

将 `dist/` 作为静态站点根目录，开启目录 index.html 与 404.html 支持。此项目已使用 Sites 托管，身份在 `.openai/hosting.json`；继续更新同一项目，不重复创建。网站的访问权限以 Sites 当前设置为准。正式公开前先完成以下清单。

## 待替换 / 待确认

1. Logo、80–150 字公司介绍与公开地址。公司名称与联系邮箱已确认并更新。
2. 已接入用户提供的机器人剪影主视觉与两张场景图，保留完整原图。
3. 三项核心价值与生活场景的确认文案；两张场景素材已接入。
4. 允许公开的产品名称、图片及定位（未提供时保留通用“敬请期待”卡）。
5. 京小宝 APP 的图标、功能、适配关系、真实下载链接；截图可省略。
6. 团队介绍、招聘岗位、职责、要求、地点与真实投递渠道。
7. 适用的备案、隐私政策等上线资料。

## 验证边界

页面与内容配置生成可自动检查。真实下载目标、真实二维码扫码、真实投递渠道须在资料补齐后由发布负责人验证。当前空状态不代表 APP 已上架或公司已开放招聘。

## GitHub 代码仓库

本仓库包含可运行的完整源代码和图片素材。代码仓库地址：https://github.com/zoro6266/joyrobot 。上传代码不会自动启用 GitHub Pages；网站现有访问地址仍为：https://robot-everyday.brookewuu0626.chatgpt.site 。
