*中文排版需求 Requirements for Chinese Text Layout* 

http://w3c.github.io/clreq/

This document is being developed by the Chinese Layout Task Force and the W3C Internationalization Working Group.

本文档由中文布局任务小组和W3C国际化工作组联合编写。

Feedback about the content of this document can be submitted via issues or pull request in the GitHub repo. You are also welcome to send your comments to [public-i18n-cjk@w3.org](mailto:public-i18n-cjk@w3.org)([subscribe](mailto:public-i18n-cjk@w3.org?subject=subscribe)) (for discussion in English), or [public-zhreq@w3.org](mailto:public-zhreq@w3.org)([subscribe](mailto:public-zhreq@w3.org?subject=subscribe)) and [public-html-ig-zh@w3.org](mailto:public-html-ig-zh@w3.org)([subscribe](mailto:public-html-ig-zh@w3.org?subject=subscribe)) (for discussion in Chinese).

若对本文档有任何建议或反馈，欢迎通过GitHub提交issues或者pull request。同时也欢迎使用[public-zhreq@w3.org](mailto:public-zhreq@w3.org)([订阅](mailto:public-zhreq@w3.org?subject=subscribe))与[public-html-ig-zh@w3.org](mailto:public-html-ig-zh@w3.org)([订阅](mailto:public-html-ig-zh@w3.org?subject=subscribe))进行关于本文档的中文讨论或[public-i18n-cjk@w3.org](mailto:public-i18n-cjk@w3.org)([订阅](mailto:public-i18n-cjk@w3.org?subject=subscribe))进行关于本文档的英文讨论。


Editorial guidelines:
=====================

Combining the English and Chinese text in one document makes it much easier to develop and maintain content in both languages in parallel. Note that the English version will be the authoritative version, since it is more widely accessible to developers around the world.

Creating or modifying content
=============================

When creating new content, you should always create markup for both Chinese and English versions.

Example:\
&lt;p data-lang="zh">这是中国的文字。&lt;/p>\
&lt;p data-lang="en">The same text in English.&lt;/p>\


If you are able to create text in both English and Chinese, please do so. If you are only able to create text in one language, still create the dual structure in markup, but put the same text in both places. Then add class="translateme" to the text that needs translation.

Example:
&lt;p data-lang="zh">这是中国的文字。&lt;/p>
&lt;p data-lang="en" class="translateme">这是中国的文字。&lt;/p>

If you change existing text, and if that change requires a change in the parallel translation but you are unable to do so, add class="translateme" to the text that needs to be updated.

When text highlighted by the translateme class is updated, and matches the recent changes in the other language, the class should be removed.


Markup tips
===========

Here are some tips on how to maintain the parallel language structure in markup. The principles in these example approaches should be extended to other markup as needed.

The chinese text should always come before the english text.

List elements need p elements inside them:
&lt;li>
&lt;p data-lang="zh">这是中国的文字。&lt;/p>
&lt;p data-lang="en" class="translateme">这是中国的文字。&lt;/p>
&lt;/li>

Headings should use spans for en and zh versions, and there should be  a line break between spans.
&lt;h2>&lt;span data-lang="zh">中文标签头&lt;/span>
&lt;span data-lang="en">My heading&lt;/span>&lt;/h2>

Ids should go on section elements, not hx elements.
&lt;section id="h_my_heading">
&lt;h2>&lt;span data-lang="zh">中文标签头&lt;/span>
&lt;span data-lang="en">My heading&lt;/span>&lt;/h2>

Ids on dfn elements should start with xxdef, where xx is either en or zh.
&lt;p data-lang="zh”>这个&lt;dfn id="zhdef_term">词语&lt;/dfn>是一个技术用语。&lt;/p>
&lt;p data-lang="en">The &lt;dfn id="endef_term">term&lt;/dfn> is a technical word.&lt;/p>

Figcaptions should use spans for the different language versions.
&lt;figure>
Main figure content here.
&lt;figcaption>&lt;span data-lang="zh">大写文字&lt;/span>
&lt;span data-lang="en">My caption&lt;/span>&lt;/figcaption>

For additional ideas about markup and styling in Internationalization Activity documents, especially wrt inline markup conventions, see
http://www.w3.org/International/docs/styleguide
