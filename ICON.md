##高清图标方案

网页图标方案的发展史，几种图标方案的介绍、


### 1.png sprite
早期为了减少http的请求，会将小的 png 图片合并到一张图上，然后根据 background-position 来显示不同的图片
优势：
    1.兼容性好
    2.可以实现各种色彩及真实画面
劣势：
    1.修改颜色需重新出图
    2.兼容不同分辨率需要多套尺寸

### 2.iconfont
字体文件代替png，随着各种字体图标库网站的出现，国外的icomoon.io，或者国内阿里系的iconfont.cn, 带来的全套解决方案，使iconfont流行起来
使用方式也简单，使用 @font-face 引入字体格式，就和使用其他字体一样。
优势：
    灵活性，改变图标的颜色，背景色，大小都非常简单
    兼容性，兼容所有流行的浏览器，不仅h5可以使用iconfont，app也可以使用iconfont
    扩展性，替换图标很方便，新增图标也非常简单，也不需要考虑图标合并的问题
    高效性，iconfont有矢量特性，没有图片缩放的消耗高

```less
@spicons-font-path: "./fonts";
@font-face {
	font-family: "spicons";
	src: url('@{spicons-font-path}/spicons.eot?v=1');
	src: url('@{spicons-font-path}/spicons.eot?v=1#iefix') format('eot'),
    	url('@{spicons-font-path}/spicons.ttf?v=1') format('truetype'),
		url('@{spicons-font-path}/spicons.woff?v=1') format('woff'),
		url('@{spicons-font-path}/spicons.svg?v=1#spicons') format('svg');
}
.sp-icon {
	font-family: "spicons";
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

```html
<!--Unicode 引用-->
<div class="sp-icon">&#xE001;</div>
```

使用配套生成的样式

```html
<link rel="stylesheet" href="./iconfont.css">
<span class="iconfont icon-xxx"></span>
```

（依赖网站生成字体文件，麻烦，不符合技术人的方式）
工程化方式
使用工具自动将svg生成iconfont

* gulp
* gulp-iconfont
* gulp-iconfont-css

劣势：
    1.只支持单色图标
    2.icon font采用的是字体渲染，在部分win系统下，字体较小的时候，锯齿问题


### 3.svg sprite
新的趋势
svg并不比iconfont出现的晚，只是它之前发挥作用的时机还不够成熟，随着外界因素的进化，IE6/7/8 的淘汰， android 4.x 的开始，svg 的机会来了。
SVG为可缩放矢量图，它不会像位图一样因为缩放而让图片质量下降，他在不同分辨率的表现都一样清晰。

应用
github

#### 引入方式
1. 使用img标签或者作为background背景图直接引用svg，或者合并成雪碧图，与png使用方式一样
2. Inline SVG，直接把SVG写入 HTML 中
  优点：Inline SVG 作为HTML文档的一部分，不需要单独请求。
  缺点：复用较麻烦；
3. 使用 SVG 中的 symbol，use 元素来制作SVG Sprite
  通过 <symbol> 定义的 svg 模板，使用 <use> 来加载它，适合做组件
  （将零散的svg合并，每个图标有唯一的symbol，通过symbol引用，相比background-position更灵活）
  1.写入到body中
  2.外链引用
```html
  <svg>
    <symbol viewBox="0 0 24 24" id="heart">
        <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z"></path>
    </symbol>
    <symbol viewBox="0 0 24 24" id="heart2">
        <path fill="#E86C60" d="M17,0c-1.9,0-3.7,0.8-5,2.1C10.7,0.8,8.9,0,7,0C3.1,0,0,3.1,0,7c0,6.4,10.9,15.4,11.4,15.8 c0.2,0.2,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2C13.1,22.4,24,13.4,24,7C24,3.1,20.9,0,17,0z"></path>
    </symbol>
  </svg>
```
使用图标
```html
  <svg>
    <use xlink:href="#heart"/> 
  </svg>
```
ant design 的图标方案
iconfont的彩色图标方案

手动中引入那一坨 symbol 模板是极其恶心的
自动管理图标，调用方使用组件引用图标
随着 webpack 打包的成熟，各种 loader的出现，为我们提供了很方便的方案

工程化方式
* svg-sprite-loader
针对引用的svg文件，svg-sprite-loader会把你的icon塞到一个个symbol中，它最终会在你的html中嵌入这样一个svg



小结
符合业务场景的解决方案才是好方案；一套方案兼容全部场景，不现实这一切都取决于浏览器支持。

