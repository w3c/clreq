#中文排版需求 Requirements for Chinese Text Layout#

http://w3c.github.io/clreq/

This document is being developed by the Chinese Layout Task Force and the W3C Internationalization Working Group.

本文档由中文布局任务小组和W3C国际化工作组联合编写。

Feedback about the content of this document can be submitted via issues or pull request in the GitHub repo. You are also welcome to send your comments to [public-i18n-cjk@w3.org](mailto:public-i18n-cjk@w3.org)([subscribe](mailto:public-i18n-cjk@w3.org?subject=subscribe)) (for discussion in English), or [public-zhreq@w3.org](mailto:public-zhreq@w3.org)([subscribe](mailto:public-zhreq@w3.org?subject=subscribe)) and [public-html-ig-zh@w3.org](mailto:public-html-ig-zh@w3.org)([subscribe](mailto:public-html-ig-zh@w3.org?subject=subscribe)) (for discussion in Chinese).

若对本文档有任何建议或反馈，欢迎通过GitHub提交issues或者pull request。同时也欢迎使用[public-zhreq@w3.org](mailto:public-zhreq@w3.org)([订阅](mailto:public-zhreq@w3.org?subject=subscribe))与[public-html-ig-zh@w3.org](mailto:public-html-ig-zh@w3.org)([订阅](mailto:public-html-ig-zh@w3.org?subject=subscribe))进行关于本文档的中文讨论或[public-i18n-cjk@w3.org](mailto:public-i18n-cjk@w3.org)([订阅](mailto:public-i18n-cjk@w3.org?subject=subscribe))进行关于本文档的英文讨论。


##编辑指南Editorial guidelines:##

Combining the English and Chinese text in one document makes it much easier to develop and maintain content in both languages in parallel. Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.

把中文和英文放置于同一份文档里让内容的多语言同步开发和维护变得更容易。W3C将以英文版本为权威版本，因其更能让世界各地开发者了解相应规范。

###添加或者修正内容Creating or modifying content###

When creating new content, you should always create markup for both Chinese and English versions.

在添加新内容时候，请一直保持同时创建中文与英文的makeup。

例如Example:
```
<p data-lang="zh">这是中国的文字。</p>
<p data-lang="en">The same text in English.</p>
```


If you are able to create text in both English and Chinese, please do so. If you are only able to create text in one language, still create the dual structure in markup, but put the same text in both places. Then add `class="translateme"` to the text that needs translation.

如果您能同时添加中英文的文本，请同时添加。如果您暂时只能添加一个语言的版本，请您还是保持中英文的markup结构，但把单一语言添加在这两段markup里面。然后请添加`class="translateme"`来提醒其他志愿者翻译此段落。

例如Example:
```
<p data-lang="zh">这是中国的文字。</p>
<p data-lang="en" class="translateme">这是中国的文字。</p>
```

If you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add `class="translateme"` to the text that needs to be updated.

如果您打算修正已有的内容，并且被修正的内容的另一个语言版本需要同时更新翻译，请您更新翻译或者添加`class="translateme"`到这段内容，提醒其他志愿者翻译此段落。

When text highlighted by the translateme class is updated, and matches the recent changes in the other language, the class should be removed.

当被translateme高亮的文本已被翻译，并且这段翻译与最新修正匹配，请移除这个translateme class。


###Markup小提示Markup tips###

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

下面是一些小提示，通过markup来维护双重语言版本。下面例子里条约可能日后被其它markup覆盖。

The chinese text should always come before the english text.
中文内容将被放在英文内容的前面。

List elements need `p` elements inside them:
list内的元素里面需要放`p`元素。
```
<li>
<p data-lang="zh">这是中国的文字。</p>
<p data-lang="en" class="translateme">这是中国的文字。</p>
</li>
```

Headings should use spans for en and zh versions, and there should be a line break between spans.
标题里应该用spans来显示en和zh版本，并且两者之间应该有一个换行。
```
<h2><span data-lang="zh">我的标题</span>
<span data-lang="en">My heading</span></h2>
```

Ids should go on section elements, not `hx` elements.
Ids跟随section元素，而并非`hx`元素。
```
<section id="h_my_heading">
<h2><span data-lang="zh">中文标签头</span>
<span data-lang="en">My heading</span></h2>
```

Ids on `dfn` elements should start with `xxdef`, where xx is either en or zh.
在`dfn`元素里的ids应该以`xxdef`开始，xx是en或zh。
```
<p data-lang="zh">这个<dfn id="zhdef_term">词语</dfn>是一个技术用语。</p>
<p data-lang="en">The <dfn id="endef_term">term</dfn> is a technical word.</p>
```

Figcaptions should use spans for the different language versions.
Figcaptions应该用spans来标示不同语言版本。
```
<figure>
Main figure content here.
<figcaption><span data-lang="zh">大写文字</span>
<span data-lang="en">My caption</span></figcaption>
```

Use the following markup for Unicode codepoint names:
请使用以下markup来标示Unicode codepoint的名字：
```
<span class="uname">U+3002 IDEOGRAPHIC FULL STOP</span> [。]
```

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see
http://www.w3.org/International/docs/styleguide
想了解更多国际化标准计划文档里的markup和样式条约，尤其是wrt行内markup的条约，请查看http://www.w3.org/International/docs/styleguide。
