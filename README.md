# RareMate 网站文件说明

解压后保留当前目录结构，打开 index.html 可查看首页；上传网站时将所有 HTML 文件和 assets 文件夹一起上传。

## 网页命名
- index.html：网站首页。
- led-display.html、led-package.html、led-accessories.html：三大产品分类入口。
- display-*-series.html：LED Display 产品系列页面（R、R Pro、C、B、H、O）。
- package-smd.html、package-dip.html：SMD 和 DIP 产品页面。
- package-smd-3528.html、package-smd-2835.html、package-smd-5050.html：各 SMD 系列规格页面。
- application-*.html：应用场景页面。

## 共享文件
- assets/js/navigation.js：各网页共用导航菜单与交互；菜单链接也在此文件修改。
- assets/js/color-filter.js：LED 封装规格表的颜色筛选。
- assets/css/theme-dark.css：全站深色主题。
- assets/css/quote-form.css：询价表单样式。
- assets/css/base-categories-applications.css：产品分类、封装及应用页面的基础样式。
- assets/css/base-display-series.css：R、R Pro、C、B 系列的基础样式。
- assets/css/base-h-o-series.css：H、O 系列的基础样式。
- assets/css/application-products.css：应用页面的相关产品卡片。
- assets/css/color-filter.css：颜色筛选控件样式。
- assets/css/color-swatches.css：颜色色块样式。

各页面内仍保留其独有的样式和交互；修改产品规格时可在对应 HTML 中搜索型号。重命名页面后，要同步更新所有引用，包括 assets/js/navigation.js 中的菜单链接。文件名更改会影响原有链接，已发布的网站需要考虑旧地址的跳转。
