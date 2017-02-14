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
<p data-lang="en">The same text in English.</p>
<p data-lang="zh">此為漢語文本。</p>
```

If you are able to create text in both English and Chinese, please do so. If you are only able to create text in one language, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

若您可以書寫英、中文二種語言，請同時創建這二種語言的文本；若您只能書寫其中一種语言，请保持英、中文的元素標記结构，將单一语言添加在这两段標記中，並為該段落添加`class="translateme"`類別来提醒其他志愿者翻译此段落。

For example:  
例如：

```html
<p data-lang="en" class="translateme">此為漢語文本。</p>
<p data-lang="zh">此為漢語文本。</p>
```

If you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="translateme"` to the text that needs to be updated.

如果您打算修正現有的内容，并且該内容的另一个语言版本需要同时更新翻译，请您更新翻译或添加`class="translateme"`類別，提醒其他志愿者翻译此段落。

When text highlighted by the `translateme` class is updated, and matches the recent changes in the other language, the class should be removed.

当標記為`translateme`類別的高亮文本已被翻译，并且这段翻译与最新修正內容匹配，请移除它的`translateme`類別。

### Markup tips | 標記小提示 

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

此文檔以元素標記来维护双重语言結構，下面是一些協助您依此原則進行編輯的小提示。在需要時，請自行擴展各原則中的範例標記。

- The English text should always come before its corresponding Chinese text.

    英文内容永遠置於中文内容前方。

- List elements need `p` elements inside them。

    列表元素中，請使用`p`元素。

    ```html
    <li>
      <p data-lang="en" class="translateme">这是中国的文字。</p>
      <p data-lang="zh">这是中国的文字。</p>
    </li>
    ```

- Headings should use `span`s for `zh` and `en` versions, and there should be a line break between spans.

    标题內应以`span`元素来分別包裹`zh`和`en`語言，两者间应有一个换行。

    ```html
    <h2>
      <span data-lang="en">My heading</span>
      <span data-lang="zh">我的标题</span>
    </h2>
    ```

- Attribute `id`s should go on `section` elements, not `h[1-6]` elements.

    屬性`id`應跟随`section`元素，而非`h[1-6]`元素。

    ```html
    <section id="h_my_heading">
      <h2>
        <span data-lang="en">English heading</span>
        <span data-lang="zh">漢語標題</span>
      </h2>
      …
    ``` 

- Attribute `id`s on `dfn` elements should start with `xxdef`, where `xx` is either `zh` or `en`.

    在`dfn`元素里的屬性`id`应该以`xxdef`开始，`xx`隨語言的不同作`zh`或`en`。

    ```html
    <p data-lang="en">The <dfn id="endef_term">term</dfn> is a technical word.</p>
    <p data-lang="zh">这个<dfn id="zhdef_term">词汇</dfn>是一个技术用语。</p>
    ```

- `figcaption`s should use `span`s for the different language versions.

    `figcaption`元素应以`span`元素来标示不同语言。

    ```html
    <figure>
      <!-- 圖表內容。 -->
      <!-- Figure content. -->
      <figcaption>
        <span data-lang="en">English caption</span>
        <span data-lang="zh">漢語說明</span>
      </figcaption>
    </figure>
    ```

- Use the following markup for Unicode codepoint names:

    请使用以下標記来表示Unicode碼位名稱：

    ```html
    <span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span> [。]
    ```

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see <http://www.w3.org/International/docs/styleguide>.

欲了解更多国际化标准计划文档里的標記和样式条约，尤其是wrt行内標記的使用慣例，请查看<http://www.w3.org/International/docs/styleguide>。

## Last-minute Pre-publication edits | 发布前的最后改动备忘录

**Make the following changes to the respec file before pushing to GitHub:**

**发布至GitHub前，請对respec文件進行以下改动：**

1. in the SoTD, change the link on "latest dated version in /TR" to the location of the document that is about to be published.

    对SoTD，把「/TR下最新版本」的链接改指向至准备发布的文件路徑。

2. Change the path in following code to the same location above: 

    將下列代碼內的路徑指向上述的链接：
    
    ```html 
    <link rel="canonical" href="http://www.w3.org/TR/2015/WD-clreq-XXXXXXX/"/>
    ```

3. Change `previousPublishDate` to reflect the date of the last publication. 

    把`previousPublishDate`改为上一次发布的日期。

**Make the following edits to the snapshot of the file that will be published to TR.**

**对准备发布至TR的版本快照進行以下编辑：**

1. Convert the content of the `h1` tag to the following:

    把`h1`标签的内容改为：

    ```html
    Requirements for Chinese Text Layout 
    <span data-lang="zh" lang="zh">中文排版需求</span>
    ```

2. Remove:

    去除：
    
    ```html
    <link rel="canonical" href="http://www.w3.org/TR/2015/WD-clreq-XXXXXXXX/"/>
    ``` 
