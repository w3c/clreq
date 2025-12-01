'use strict';

void function() {

const LANG_LIST = ['en', 'zh-hant', 'zh-hans']

const L10N = {
	'en': {
    // CSS selectors for elements that need text replacement
    selector: {
      'head > title': 'Requirements for Chinese Text Layout',
      '#abstract > h2': 'Abstract',
      '#toc > ol > li:nth-child(1) > a': 'Abstract',
      '#sotd > h2': 'Status of This Document',
      '#toc > ol > li:nth-child(2) > a': 'Status of This Document',
      '#table-of-contents': 'Table of Contents',
      '.note-title': 'Note',
    },

    // Prefix for figure captions (e.g., "Fig. 1", "Fig. 2")
    'fig': 'Fig. ',

    collapseSidebar: 'Collapse Sidebar',
    expandSidebar: 'Pop Out Sidebar',
    jumpToToc: 'Jump to Table of Contents',

    dt: {},

    dd: {
      'Bug tracker:': '<a href="https://github.com/w3c/clreq/issues">file a bug</a> (<a href="https://github.com/w3c/clreq/issues">open bugs</a>)',
    },
  },

  'zh-hant': {
    selector: {
      'head > title': '中文排版需求',
      '#abstract > h2': '摘要',
      '#toc > ol > li:nth-child(1) > a': '摘要',
      '#sotd > h2': '關於本文檔',
      '#toc > ol > li:nth-child(2) > a': '關於本文檔',
      '#table-of-contents': '內容大綱',
      '.note-title': '注',
    },

    'fig': '圖',

    collapseSidebar: '收起側邊欄',
    expandSidebar: '彈出側邊欄',
    jumpToToc: '跳轉至內容大綱',

    'summary': '關於此文檔',

    dt: {
      'This version:': '本版本：',
      'History:': '歷史：',
      'Previous version:': '上一版：',
      'Latest published version:': '最新發佈草稿：',
      'Latest editor\'s draft:': '最新編輯草稿：',
      'Editors:': '編輯：',
      'Former editors:': '原編輯：',
      'Participate:': '協助參與：',
      'Feedback:': '反饋：',
      'Contributors:': '貢獻者：',
    },

    dd: {
      'Bug tracker:': '<a href="https://github.com/w3c/clreq/issues">反饋錯誤</a>（<a href="https://github.com/w3c/clreq/issues">修正中的錯誤</a>）',
    }
  },

  'zh-hans': {
    selector: {
      'head > title': '中文排版需求',
      '#abstract > h2': '摘要',
      '#toc > ol > li:nth-child(1) > a': '摘要',
      '#sotd > h2': '关于本文档',
      '#toc > ol > li:nth-child(2) > a': '关于本文档',
      '#table-of-contents': '内容大纲',
      '.note-title': '注',
    },

    'fig': '图',

    collapseSidebar: '收起侧边栏',
    expandSidebar: '弹出侧边栏',
    jumpToToc: '跳转至内容大纲',

    'summary': '关于此文档',

    dt: {
      'This version:': '本版本：',
      'History:': '历史：',
      'Previous version:': '上一版：',
      'Latest published version:': '最新发布草稿：',
      'Latest editor\'s draft:': '最新编辑草稿：',
      'Editors:': '编辑：',
      'Former editors:': '原编辑：',
      'Participate:': '协助参与：',
      'Feedback:': '反馈：',
      'Contributors:': '贡献者：',
    },

    dd: {
      'Bug tracker:': '<a href="https://github.com/w3c/clreq/issues">反馈错误</a>（<a href="https://github.com/w3c/clreq/issues">修正中的错误</a>）',
    }
  },
}

const $root = document.documentElement
let $$hidden: object[] = []

function arrayify(obj: any) {
	return Array.from ? Array.from(obj) : Array.prototype.slice.call(obj)
}

/**
 * Convenience function for querySelectorAll that returns a proper Array.
 * @param selector - CSS selector string
 * @returns Array of matching DOM elements
 */
function $$(selector: string) {
	return arrayify(document.querySelectorAll(selector))
}

function toggle$rootClass(lang: string) {
  $root.lang = lang === 'all' ? 'en' : lang

	if (lang === 'all') {
	  $root.classList.add('is-multilingual')
	  $root.classList.remove('isnt-multilingual')
	} else {
	  $root.classList.remove('is-multilingual')
	  $root.classList.add('isnt-multilingual')
	}
}

function showAndHideLang(lang: string) {
  // Show previously hidden parts:
  $$hidden
  .forEach(function($elmt) { Object.assign($elmt, { hidden: false }) })

  if (lang === 'all') {
  	return
  }

  // Hide parts of other languages:
  $$hidden = (
    LANG_LIST
    .filter(function(it) { return it !== lang })
    .reduce(function(result, it) { return result.concat($$('[its-locale-filter-list="' + it + '"]')) }, [])
    .map(function($elmt) { return Object.assign($elmt, { hidden: true }) })
  )
}

function replaceBoilerplateText(lang: string) {
  const l10n = L10N[lang === 'all' ? 'en' : lang]

  // Alter some basic headings, etc:
  Object.keys(l10n.selector)
  .forEach(function(s) {
    $$(s)
    .forEach(function($elmt) {
    	Object.assign($elmt, { textContent: l10n.selector[s] })
    })
  })

  // Update figure captions and figure references with localized prefix
  $$('figcaption, .fig-ref')
  .forEach(function($elmt) {
  	Object.assign($elmt.firstChild, { textContent: l10n['fig'] })
	})

  // Update summary text in document details section
  $$('body > div.head > details > summary')
  .forEach(function($summary) {
  	let originalText = $summary.dataset.originalText || $summary.textContent.trim()
    let text = l10n['summary'] || originalText

    if (text) {
      $summary.textContent = text
      $summary.dataset.originalText = originalText
    }
	})

  // Update definition terms (dt elements) in document metadata
  $$('body > div.head > details > dl > dt')
  .forEach(function($dt) {
    let originalText = $dt.dataset.originalText || $dt.textContent.trim()
    let text = l10n.dt[originalText] || originalText

    if (text) {
      $dt.textContent = text
      $dt.dataset.originalText = originalText
    }

    // Special handling for bug tracker links (dd elements contain HTML)
    if (originalText === 'Bug tracker:') {
      $dt.nextElementSibling.innerHTML = l10n.dd['Bug tracker:']
    }
  })

  // Update sidebar strings introduced by fixup.js
  // https://github.com/w3c/tr-design/blob/gh-pages/src/fixup.js
  translateFixupStrings(lang)
}

let sidebarObserver: MutationObserver | null = null

function translateFixupStrings(lang: string) {
  const l10n = L10N[lang === 'all' ? 'en' : lang]
  
  const fixupIds: { [key: string]: string } = {
    'toc-collapse-text': 'collapseSidebar',
    'toc-expand-text': 'expandSidebar',
    'toc-jump-text': 'jumpToToc',
  }

  Object.keys(fixupIds).forEach(function(id) {
    const el = document.getElementById(id)
    if (el) {
      const key = fixupIds[id]
      if (l10n[key]) {
        if (el.textContent !== l10n[key]) {
          el.textContent = l10n[key]
        }
      }
    }
  })

  // Lazily setup observer for the toggle button because fixup.js might replace content
  // and fixup.js runs after this script
  if (!sidebarObserver) {
    const toggle = document.getElementById('toc-toggle')
    if (toggle) {
      sidebarObserver = new MutationObserver(function() {
        const currentLang = $root.lang || 'en'
        if (currentLang !== 'en') {
          translateFixupStrings(currentLang)
        }
      })
      sidebarObserver.observe(toggle, { childList: true, subtree: true })
    }
  }
}

/**
 * Expose to global for now since respec will re-parse the entire document
 * and event bound will be lost.
 */
window.switchLang = function(lang: string) {
  toggle$rootClass(lang)
  showAndHideLang(lang)
  replaceBoilerplateText(lang)
}

/**
 * Add self-link anchors for all p and li elements with id attributes
 */
function addSelfLinks() {
  // Find all p and li elements that have an id attribute
  $$('li[id]')
  .forEach(function($elmt) {
    // Get the id of the element
    const elementId = $elmt.getAttribute('id')
    
    if (elementId) {
      // Create the self-link anchor element
      const selfLink = document.createElement('a')
      selfLink.className = 'self-link'
      selfLink.href = '#' + elementId
      
      // Insert the self-link anchor as the first child of the element
      $elmt.insertBefore(selfLink, $elmt.firstChild)
    }
  })
}

/**
 * Add `lang` attribute wherever there is a its-locale-filter-list attribute.
 * This is done by js to reduce burden on editors
 * If there's already a lang attribute in the tag, that tag is skipped.
 *
 * Note that this may still produce temporarily incorrect labelling
 * where text is awaiting translation.
 */
function addLangAttr() {
  toggle$rootClass('all')

  LANG_LIST
  .forEach(function(lang) {
    $$('[its-locale-filter-list="' + lang + '"]')
    .forEach(function($elmt) {
      if (!$elmt.lang) {
        $elmt.lang = lang
      }
    })
  })
}

addLangAttr()
addSelfLinks()
}()

export {};
