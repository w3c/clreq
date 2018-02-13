# How to contribute to a gap-analysis document

Practical steps for editing the document gap-analysis/index.html

## Describing a gap

Try to keep the structure (sections, headings, etc) intact, since we rely on them to run batch processes and link from various places. If needed, we can add a new section, but it should be done in collaboration with Richard Ishida. Note that there are catch-all sections available at the end of each division which can be used for things that don't appear to fit elsewhere.

The basic structure of a section in the template looks like this:
```
<section id="emphasis" class="tbd">
    <h3>Emphasis &amp; highlights</h3>
    <p class="status_prompt">Bold and italic are not always appropriate for expressing emphasis, and some scripts have their own unique ways of doing it, that are not in the Western tradition at all. Does this script require support for emphasising or highlighting text that cannot be achieved currently?  <a href="http://w3c.github.io/typography/index#emphasis">See available information</a> or <a href="https://github.com/w3c/i18n-activity/issues?utf8=%E2%9C%93&amp;q=is%3Aissue%20is%3Aopen%20label%3Aemphasis%20label%3Atype-info-request">check for currently needed data</a>.</p>


    <p></p>
</section>
```

The paragraph immediately after the section title is intended to give you ideas about what you should write about. It is not an exhaustive list, by any means. You should leave that text in place. The links it contains may give you additional ideas of things to describe here – they link to currently outstanding questions or spec/browser bugs relating to this topic.

The `<p></p>` markup at the end of the section can be replaced with any HTML markup you like. You can have several paragraphs, lists, or even create level 4 (`h4`) headings. If you do that, however, you should surround the h4 heading and it's content with a `<section>` tag, so that respec works nicely. You should also add an id to the section tag, so that people can link directly to that subsection.

You can see an example of a filled in section for Japanese at https://w3c.github.io/jlreq/gap-analysis/index.html#emphasis

The content of a subsection should eventually contain information about what doesn't work, with the following details:
1. how the feature is broken for users (ie. what can't they do)
2. links to tests (or sometimes inline markup) or screen snaps that show the feature failing
3. a description of which applications (eg. browsers with versions) support and don't support the feature
4. pointers to the CSS or other W3C specs that relate to this feature, with descriptions of whether the gap is addressed or not
5. links to the detailed description of requirements in the lreq doc

Don't go into too much detail about how a particular feature is expected to work here – that's what the lreq document is for. The two documents are intended to support each other, not duplicate content.

If describing gaps for more than one language, and there is a difference in the level of support, make it clear which language is relevant to the text.

## Adding a priority

Having described the gaps, you need to assign a priority to this section.  To do this, add a class name to the section tag. In the template example above, replace the `tbd` with one of the following:
* `ok`
* `na` (not applicable)
* `advanced` (needs work for advanced level support)
* `basic` (needs work for basic styling support)
* `broken` (basic display issues that prevent effective use of this language on the Web)

The class tag will affect the colour of the block alongside the section, and add some summary text at the end of the section.

Note that this priority labelling is NOT about how badly broken the feature is – it's about how the lack of the feature affects the use of the Web in this language.  

Basic styling is the level that would be generally accepted as sufficient for most Web pages. Advanced level support would include additional features one might expect to include in ebooks or other advanced typographic formats. There may be features of a script or language that are not supported on the Web, but that are not generally regarded as necessary (usually archaic or obscure features). In this case, the feature can be described here, but the status should be marked as OK.

The decision as to what priority level is assigned to a described gap is down to the experts doing the gap analysis. It may not always be straightforward to decide. If a given section in this document refers to more than one feature that is broken, each with different impacts on Web users, the priority for the section should be the lowest denominator.

A cell can be scored as OK if the feature in question is specified in an appropriate specification, and is supported by user agents. A specification that is in CR or later and has two implementations in 'major' browsers will count. This means that the feature may not be supported in all browsers yet. (At some point in the future we may try to distinguish, visually, whether support is available in a specification but still pending in major browsers or applications.) On the other hand, you may feel it's important to have more than two major browsers supporting the feature, in which case you can assign a problem status.

If a section is given a class of `ok` or `na` you can leave the description blank, or you can add explanatory text. Whatever you prefer.


