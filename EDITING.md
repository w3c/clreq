# Editorial guidelines | 编辑指南
Combining the English and Chinese text in one document makes it much easier to develop and maintain content in both languages in parallel. However, it is important to follow certain steps when creating or editing the source text.

(Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.)

同時包含英語及漢語的文檔結構使平行開發與內容維護得以化繁為簡。需要注意的是，W3C以英文版本为权威版本，因其更方便让世界各地的开发者閱讀。

### Creating or modifying content | 添加或修正内容

When creating new content, you should always create markup for both English and Chinese versions.

添加新的内容文本時，请務必同時建立英文与中文的元素標記。

For example:  
例如： 

```html
<p its-locale-filter-list="en" lang="en">The same text in English.</p>
<p its-locale-filter-list="zh" lang="zh">此為漢語文本。</p>
```

If you are able to create text in both English and Chinese, please do so. If you are only able to create text in one language, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

若您可以書寫英、中文二種語言，請同時創建這二種語言的文本；若您只能書寫其中一種语言，请保持英、中文的元素標記结构，將单一语言添加在这两段標記中，並為該段落添加`class="translateme"`類別来提醒其他志愿者翻译此段落。

For example:  
例如：

```html
<p its-locale-filter-list="en" lang="en" class="translateme">此為漢語文本。</p>
<p its-locale-filter-list="zh" lang="zh">此為漢語文本。</p>
```

If you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="retranslateme"` to the text that needs to be updated.

如果您打算修正現有的内容，并且該内容的另一个语言版本需要同时更新翻译，请您更新翻译或添加`class="retranslateme"`類別，提醒其他志愿者翻译此段落。

For example:  
例如：

```html
<p its-locale-filter-list="en" lang="en" class="retranslateme">Text in English.</p>
<p its-locale-filter-list="zh" lang="zh">此為更新後的漢語文本。</p>
```

If you need someone to check the translation you provided, add `class="checkme"` to the relevant tag.

如果您需要其他人检查您提供的翻译，请在相关标签中添加`class="checkme"`類別。

For example:  
例如：

```html
<p its-locale-filter-list="en" lang="en" class="checkme">Text in English.</p>
<p its-locale-filter-list="zh" lang="zh">此為漢語文本。</p>
```

The class names listed above produce special colouring effects in the displayed document.

上面列出的类所标记的元素在网页中会用特殊的颜色显示。

When text highlighted by the `translateme`, `retranslateme`, or `checkme` class is updated to a final translation, the class should be removed.

当标记为`translateme`、`retranslateme`或`checkme`的高亮文本更新为最终翻译时，请移除该类。

### Markup tips | 標記小提示 

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

此文檔以元素標記来维护双重语言結構，下面是一些協助您依此原則進行編輯的小提示。在需要時，請自行擴展各原則中的範例標記。

- The English text should always come before its corresponding Chinese text.

    英文内容永遠置於中文内容前方。

- List elements need `p` elements inside them, and link anchors must go on the `li` tag.

    列表元素中，請使用`p`元素。链接锚点必须位于`li`标签上。

    ```html
    <li id="abcd">
      <p its-locale-filter-list="en" lang="en" class="translateme">这是中国的文字。</p>
      <p its-locale-filter-list="zh" lang="zh">这是中国的文字。</p>
    </li>
    ```

- Headings should use `span`s for `zh` and `en` versions, and there should be a line break between spans.

    标题內应以`span`元素来分別包裹`zh`和`en`語言，两者间应有一个换行。

    ```html
    <h2>
      <span its-locale-filter-list="en" lang="en">My heading</span>
      <span its-locale-filter-list="zh" lang="zh">我的标题</span>
    </h2>
    ```

- Attribute `id`s should go on `section` elements, not `h[1-6]` elements.

    屬性`id`應跟随`section`元素，而非`h[1-6]`元素。

    ```html
    <section id="h_my_heading">
      <h2>
        <span its-locale-filter-list="en" lang="en">English heading</span>
        <span its-locale-filter-list="zh" lang="zh">漢語標題</span>
      </h2>
      …
    ``` 

- Attribute `id`s on `dfn` elements should start with `xxdef`, where `xx` is either `zh` or `en`.

    在`dfn`元素里的屬性`id`应该以`xxdef`开始，`xx`隨語言的不同作`zh`或`en`。

    ```html
    <p its-locale-filter-list="en" lang="en">The <dfn id="endef_term">term</dfn> is a technical word.</p>
    <p its-locale-filter-list="zh" lang="zh">这个<dfn id="zhdef_term">词汇</dfn>是一个技术用语。</p>
    ```

- `figcaption`s should use `span`s for the different language versions.

    `figcaption`元素应以`span`元素来标示不同语言。

    ```html
    <figure>
      <!-- 圖表內容。 -->
      <!-- Figure content. -->
      <figcaption>
        <span its-locale-filter-list="en" lang="en">English caption</span>
        <span its-locale-filter-list="zh" lang="zh">漢語說明</span>
      </figcaption>
    </figure>
    ```

- Use the following markup for Unicode codepoint names:

    请使用以下標記来表示Unicode碼位名稱：

    ```html
    <span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span> [。]
    ```

- To link to a section, use the ReSpec feature, ie. link to the id on the `section` tag using the [[[ ]]] syntax.

    要链接到某个章节，请使用ReSpec特性，也就是使用[[[ ]]]语法链接到`section`标签上的id。

    ```html
    [[[#mySectionId]]]
    ```

- To link to a figure, use the ReSpec feature, ie. link to the id on the `figure` tag using the [[[ ]]] syntax.

    要链接到某个图片，请使用ReSpec特性，也就是使用[[[ ]]]语法链接到`figure`标签上的id。

    ```html
    [[[#myFigureId]]]
    ```

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see <https://www.w3.org/International/i18n-activity/guidelines/editing>.

欲了解更多国际化标准计划文档里的標記和样式条约，尤其是行内標記的使用慣例，请查看<https://www.w3.org/International/i18n-activity/guidelines/editing>。

### Writing style guide | 写作风格指南

In Traditional Chinese text, you should use single quotation marks (「」) first, followed by double quotation marks (『』). In Simplified Chinese text, you should use double quotation marks (“”) first, followed by single quotation marks (‘’). 

繁体中使用先单（「」）、后双（『』）的直角引号，简体中使用先双（“”）、后单（‘’）的弯引号。

Leave a space between a number and a unit of measurement, eg. `14 pt`.

数字和计量单位之间应留一个空格，例如`14 pt`。

### Working on the language switching code | 语言切换功能

The code for the language switching function is implemented in the following TypeScript file:

语言切换功能的代码在如下TypeScript文件内实现：

```
src/script.ts
```

The compiled file is in:

编译后的文件在：

```
built/script.js
```

Compiling the TypeScript file requires installing [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/), and using the following commands:

编译该文件需要安装[Node.js](https://nodejs.org/en)和[pnpm](https://pnpm.io/)，并运行：

```
pnpm install
pnpm build
```

### Working with image source files | 处理图片源文件

Image source files under `images/source/`, are sometimes stored using Git Large File Storage (Git LFS). This keeps large binary assets out of normal Git history while allowing them to be versioned with the rest of the repository.

位于`images/source/`目录下的图像源文件，有时会通过Git LFS进行存储。这种做法既能将比较大的二进制文件排除在常规的Git历史记录之外，又能使其与仓库中的其余文件一同进行版本管理。

This is preferable to committing such files directly to the repository because Git stores normal file contents in repository history permanently. For large binary source files such as `*.ai`, each revision can noticeably increase clone and fetch sizes, while offering little useful diff or merge support. With Git LFS, the repository keeps only a small pointer file, and contributors download the full binary only when they actually need it. Other files should still be committed normally, because they are usually smaller and benefit from Git's regular diff, merge, and review workflow.

之所以不直接把这类文件提交到仓库，是因为Git会将普通文件内容永久写入仓库历史。对于`*.ai`这类大型二进制源文件，每次修订都可能明显增大克隆和抓取的体积，而Git对这类文件也很难提供有意义的差异比较或合并支持。使用Git LFS后，仓库里只保留一个很小的指针文件，真正的二进制内容只在确有需要时才下载。其他文件则仍应直接提交到仓库，因为它们通常更小，也能充分利用Git原有的比较、合并与审阅流程。

If you only work on the HTML, CSS, or TypeScript files, you do not normally need to think about Git LFS. If you need to open, modify, or add image source files like `*.ai`, install Git LFS first:

如果您只编辑HTML、CSS或TypeScript文件，通常无需关心Git LFS。若您需要打开、修改或新增如`*.ai`的图片源文件，请先安装Git LFS：

```
git lfs install
```

After cloning the repository, if the `*.ai` files appear as small text pointer files instead of real artwork files, fetch the LFS content with:

克隆仓库之后，如果`*.ai`文件显示为很小的文本指针文件，而不是真正的图片源文件，请运行以下命令拉取LFS内容：

```
git lfs pull
```

New or updated `*.ai` files are already covered by the repository's `.gitattributes` rules, so you can add and commit them using the normal Git workflow (`git add`, `git commit`, etc.). Please do not remove the LFS tracking rule for these files.

仓库的`.gitattributes`已经为新的或修改过的`*.ai`文件配置了规则，因此您可以按普通Git流程（如 `git add`、`git commit`）提交这些文件。请不要移除对这些文件的LFS跟踪规则。