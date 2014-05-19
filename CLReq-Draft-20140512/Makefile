run :: # Parse all procedures
	make md
	make content
	make layout

md :: # Parse all markdown files
	kramdown --parse-block-html _md/ruby.md > _md/html/ruby.html

content :: # Combine all parsed markdown html into one file
	cat _md/html/ruby.html > _layout/content.html

layout :: # Form the final layout
	cat _layout/header.html _layout/content.html _layout/footer.html > Overview.html

clean :: # Clean all parsed files
	rm Overview.html _layout/content.html _md/html/*.html
