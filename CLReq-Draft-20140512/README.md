# How to Use

## Requirements & Installation 

This documentation uses [kramdown] for parsing Markdown files, which depends on Ruby interpreter. Please install Ruby interpreter first. 

Then install kramdown,

    sudo gem install kramdown

[kramdown]: http://kramdown.gettalong.org/

## Parsing

### Run All the Procedures

    make

### Parse Markdown Only

The following command parses `_md/*.md` into `_md/html/*.html`.

    make md

### Markdownified HTML to Layout Component

The following command combines all Markdownified HTML files into one layout component `_layout/content.html`.

    make content

### Form the Final Layout

The following command forms all layout components into `Overview.html`.

    make layout

### Clean

The following command cleans all parsed files.

    make clean


