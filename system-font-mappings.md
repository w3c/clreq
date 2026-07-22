# Recommended System Font Mappings for Generic Chinese Font Families

**Last verified:** 2026-07-21

## Table of contents

* [Purpose and scope](#purpose-and-scope)
* [Recommended mappings](#recommended-mappings)
  * [Microsoft Windows](#microsoft-windows)
  * [macOS](#macos)
  * [iOS and iPadOS](#ios-and-ipados)
  * [Linux desktop distributions](#linux-desktop-distributions)
  * [Android Open Source Project (AOSP)](#android-open-source-project-aosp)
  * [HarmonyOS / OpenHarmony](#harmonyos--openharmony)
* [Implementation guidance](#implementation-guidance)
* [Maintenance](#maintenance)

## Purpose and scope

This document provides a reference for implementers of CSS generic font families or similar mechanisms when selecting system fonts for Simplified and Traditional Chinese. For each supported platform and generic family, it identifies a verified system font mapping and documents its availability status.

CSS defines `serif` as corresponding to Song for Chinese, `sans-serif` as corresponding to Hei, and introduces the writing-system-specific families `generic(fangsong)` and `generic(kai)`. The specification delegates the choice of a concrete system font for each generic family to the implementation. This document supplies that choice on a per-platform, per-generic-family basis, backed by official vendor inventories, OS configurations, or distribution-package records.

Each font is classified with one of the following availability labels:

* Built-in/system: the cited platform inventory or configuration identifies the font as part of the system baseline.
* OS optional/downloadable: the OS vendor supplies the font, but it may be absent until a language feature or font asset is installed.
* Document-based app support: the OS vendor supplies the font through document-based apps rather than as a general system or downloadable font; do not assume it is available to browsers or other applications.
* Distribution package: an official Linux distribution repository supplies the font; this does not imply that a default desktop installation includes it.
* No mapping: the checked official inventory or configuration contains no suitable face.

The Chinese-name column reports the localized alias.

## Recommended mappings

### Microsoft Windows

The Windows 11 inventory separates its core font list from optional Features on Demand (FOD) font packages. Some fonts might be in the Simplified or Traditional Chinese supplemental-font sections and should not be assumed to exist on every installation. [MS-W11]

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Simplified Chinese | 宋体 | `SimSun`, `NSimSun` | Built-in | Windows 11 core list; Microsoft describes SimSun as a Simplified Chinese Song font. [MS-W11] [MS-SIMSUN] [MS-NAMES] |
| `serif` (Song) | Traditional Chinese | 新細明體 | `PMingLiU` | OS optional | Traditional Chinese supplemental font. Microsoft describes the MingLiU family as Traditional Chinese mincho/serif. [MS-W11] [MS-MINGLIU] [MS-NAMES] |
| `sans-serif` (Hei) | Simplified Chinese | 微软雅黑 | `Microsoft YaHei` | Built-in | Windows 11 core list and Microsoft font-family documentation. [MS-W11] [MS-YAHEI] [MS-NAMES] |
| `sans-serif` (Hei) | Simplified Chinese | 等线 | `DengXian` | OS optional | Simplified Chinese supplemental font. [MS-W11] [MS-DENGXIAN] |
| `sans-serif` (Hei) | Simplified Chinese | 黑体 | `SimHei` | OS optional | Simplified Chinese supplemental font. [MS-W11] [MS-SIMHEI] [MS-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese | 微軟正黑體 | `Microsoft JhengHei` | Built-in | Windows 11 core list and Microsoft font-family documentation. [MS-W11] [MS-JHENGHEI] [MS-NAMES] |
| `generic(fangsong)` | Simplified Chinese | 仿宋 | `FangSong` | OS optional | Simplified Chinese supplemental font; the Microsoft family page identifies it as Simplified Chinese. No Traditional-Chinese-specific Fangsong family was verified in the Windows 11 inventory. [MS-W11] [MS-FANGSONG] [MS-NAMES] |
| `generic(kai)` | Simplified Chinese | 楷体 | `KaiTi` | OS optional | Simplified Chinese supplemental font. [MS-W11] [MS-KAITI] [MS-NAMES] |
| `generic(kai)` | Traditional Chinese | 標楷體 | `DFKai-SB` | OS optional | Traditional Chinese supplemental font. [MS-W11] [MS-NAMES] |

### macOS

Apple's current font inventory distinguishes system font, downloadable, and document-based app support. A dash in the CSS-generic column means that the family is available but is not recommended as a neutral default for one of the Chinese generic families covered by this document. [APPLE-FONTS] [APPLE-NAMES]

Most of the additional families are downloadable rather than system fonts in Apple's terminology.

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Simplified Chinese | 宋体-简 | `Songti SC` | System font | Apple inventory and OpenType localized family-name records. [APPLE-FONTS] [APPLE-NAMES] |
| `serif` (Song) | Simplified Chinese | 华文宋体 | `STSong` | System font |  [APPLE-FONTS] [APPLE-NAMES] |
| `serif` (Song) | Simplified Chinese | — | `SimSong` | Downloadable | Apple lists Regular and Bold faces. [APPLE-FONTS] |
| `serif` (Song) | Traditional Chinese | 宋體-繁 | `Songti TC` | System font | Apple inventory and OpenType localized family-name records. [APPLE-FONTS] [APPLE-NAMES] |
| `serif` (Song) | Traditional Chinese | 儷宋 | `LiSong Pro` | Downloadable | [APPLE-FONTS] |
| `sans-serif` (Hei) | Simplified Chinese | 黑体-简 | `Heiti SC` | System font | Stable built-in candidate. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Simplified Chinese | 兰亭黑-简 | `Lantinghei SC` | Downloadable | Apple lists Demibold, Extralight, and Heavy faces. [APPLE-FONTS] |
| `sans-serif` (Hei) | Simplified Chinese | 苹方-简 | `PingFang SC` | Downloadable | [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese | 黑體-繁 | `Heiti TC` | System font | Stable built-in candidate. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese | 蘭亭黑-繁 | `Lantinghei TC` | Downloadable; Extralight has document-based app support | [APPLE-FONTS] |
| `sans-serif` (Hei) | Traditional Chinese (Taiwan) | 蘋方-繁 | `PingFang TC` | Downloadable | Regional Taiwan family. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese (Hong Kong) | 蘋方-港 | `PingFang HK` | Downloadable | Regional Hong Kong family. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese (Macao) | 蘋方-澳 | `PingFang MO` | Downloadable | Regional Macao family. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Chinese; region not identified by the inventory label | — | `Hei` | Downloadable | Apple lists `Hei Regular` as a separate entry from the system `Heiti SC` and `Heiti TC` faces. [APPLE-FONTS] |
| `sans-serif` (Hei) | Chinese; region not identified by the inventory label | — | `STHeiti` | Downloadable |  [APPLE-FONTS] |
| `sans-serif` (Hei) | Chinese; region not identified by the inventory label | — | `STXihei` | Downloadable | [APPLE-FONTS] |
| `sans-serif` (Hei) | Traditional Chinese | — | `Apple LiGothic` | Downloadable | Apple lists the face as `Apple LiGothic Medium`. It is a separate Apple inventory entry from `LiHei Pro`. [APPLE-FONTS] [MS-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese | 儷黑 | `LiHei Pro` | Downloadable | [APPLE-FONTS] |
| `sans-serif` (Hei) | Traditional Chinese | — | `Hiragino Sans TC` | Downloadable | Apple lists W3 and W6 faces. [APPLE-FONTS] |
| `generic(fangsong)` | Simplified Chinese | 华文仿宋 | `STFangsong` | Downloadable | Do not assume presence before the asset is installed. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(kai)` | Simplified Chinese | 楷体-简 | `Kaiti SC` | Downloadable | Do not assume presence before the asset is installed. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(kai)` | Traditional Chinese | 楷體-繁 | `Kaiti TC` | Downloadable | Do not assume presence before the asset is installed. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(kai)` | Chinese; region not identified by the inventory label | — | `Kai Regular` | Downloadable | [APPLE-FONTS] |
| `generic(kai)` | Chinese; region not identified by the inventory label | — | `STKaiti` | Downloadable | [APPLE-FONTS] |
| `generic(kai)` | Traditional Chinese (Taiwan/Hong Kong) | — | `BiauKaiTC`, `BiauKaiHK` | Downloadable | Regional Traditional Chinese Kai candidates. [APPLE-FONTS] |
| `generic(kai)` | Traditional Chinese | — | `DFKaiShu-SB-Estd-BF` | Downloadable | [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Yuanti SC`, `Yuanti TC` | Downloadable | Rounded sans families; Apple lists Light, Regular, and Bold faces. [APPLE-FONTS] |
| — | Multi-script | — | `Arial Unicode MS` | System font | CJK-capable but not region-specific; it should not be used to infer Simplified- or Traditional-Chinese glyph conventions. [APPLE-FONTS] [APPLE-NAMES] |
| — | Simplified and Traditional Chinese | — | `Xingkai SC`, `Xingkai TC` | Downloadable | Semi-cursive calligraphic families, not neutral `generic(kai)` defaults. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Baoli SC`, `Baoli TC` | Downloadable | [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Hannotate SC`, `Hannotate TC` | Downloadable | Handwriting families; Apple lists Regular and Bold faces. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `HanziPen SC`, `HanziPen TC` | Downloadable | Handwriting/pen families; Apple lists Regular and Bold faces. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Libian SC`, `Libian TC` | Downloadable | Clerical families. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `LingWai SC`, `LingWai TC` | Downloadable | Handwriting families. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Wawati SC`, `Wawati TC` | Downloadable | Handwriting families. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Weibei SC`, `Weibei TC` | Downloadable | Stele families. [APPLE-FONTS] |
| — | Simplified and Traditional Chinese | — | `Yuppy SC`, `Yuppy TC` | Downloadable | Handwriting families. [APPLE-FONTS] |

### iOS and iPadOS

In Apple's current public inventory, the Chinese families below are all marked downloadable on iOS/iPadOS, not system font. They are therefore verified OS-supplied candidates but not a safe assumption for an already-installed browser mapping. Apple/WebKit confirmation is needed for any non-public or automatically activated system fallback used internally by iOS. [APPLE-FONTS]

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Simplified Chinese | 宋体-简 | `Songti SC` | Downloadable | Verified in Apple's inventory and font metadata; not tagged as an iOS system font. [APPLE-FONTS] [APPLE-NAMES] |
| `serif` (Song) | Traditional Chinese | 宋體-繁 | `Songti TC` | Downloadable | Verified in Apple's inventory and font metadata; not tagged as an iOS system font. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Simplified Chinese | 苹方-简 | `PingFang SC` | Downloadable | `Heiti SC` / 黑体-简 is also listed as downloadable on iOS. [APPLE-FONTS] [APPLE-NAMES] |
| `sans-serif` (Hei) | Traditional Chinese | 蘋方-繁 | `PingFang TC` | Downloadable | `Heiti TC` / 黑體-繁 is also listed as downloadable on iOS. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(fangsong)` | Simplified Chinese | 华文仿宋 | `STFangsong` | Downloadable | No built-in-tagged iOS Fangsong face was verified. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(kai)` | Simplified Chinese | 楷体-简 | `Kaiti SC` | Downloadable | No built-in-tagged iOS Kai face was verified. [APPLE-FONTS] [APPLE-NAMES] |
| `generic(kai)` | Traditional Chinese | 楷體-繁 | `Kaiti TC` | Downloadable | `BiauKaiTC` / 標楷體-繁 is another downloadable candidate. [APPLE-FONTS] [APPLE-NAMES] |

### Linux desktop distributions

Linux has no single system-font inventory. The following entries are verified examples from Debian's official repository and should be treated as package-dependent candidates. Other distributions may package the same fonts under different package names, versions, or fontconfig rules.

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Simplified Chinese | — | `Noto Serif CJK SC` | Distribution package (`fonts-noto-cjk`) | Debian explicitly lists the SC and TC serif families. The checked OpenType zh-CN name record repeats the English family name. [DEBIAN-NOTO] [DEBIAN-NOTO-NAMES] |
| `serif` (Song) | Traditional Chinese | — | `Noto Serif CJK TC` | Distribution package (`fonts-noto-cjk`) | Regional Traditional Chinese face. [DEBIAN-NOTO] [DEBIAN-NOTO-NAMES] |
| `serif` (Song) | Traditional Chinese | cwTeX 明體 | `cwTeXMing` | Distribution package (`fonts-cwtex-ming`) | The package is derived from cwTeX Traditional Chinese fonts. [DEBIAN-CWTEX-MING] [LINUX-NAMES] |
| `sans-serif` (Hei) | Simplified and Traditional Chinese | 文泉驿正黑 | `WenQuanYi Zen Hei` | Distribution package (`fonts-wqy-zenhei`) | Debian documents Simplified and Traditional coverage; the localized family name occurs in the font metadata for both language systems. [DEBIAN-WQY] [WQY-NAMES] |
| `sans-serif` (Hei) | Simplified/Traditional Chinese | — | `Noto Sans CJK SC` / `Noto Sans CJK TC` | Distribution package (`fonts-noto-cjk`) | Use the face matching the content language. [DEBIAN-NOTO] [DEBIAN-NOTO-NAMES] |
| `generic(fangsong)` | Traditional Chinese | cwTeX 仿宋體 | `cwTeXFangSong` | Distribution package (`fonts-cwtex-fs`) | Debian identifies this as a Traditional Chinese FangSong font; paired names are in the OpenType name table. No equivalent cross-distribution default was verified. [DEBIAN-CWTEX-FS] [LINUX-NAMES] |
| `generic(kai)` | Traditional Chinese | cwTeX 楷書 | `cwTeXKai` | Distribution package (`fonts-cwtex-kai`) | Debian identifies this as a Traditional Chinese Kai font; paired names are in the OpenType name table. No equivalent cross-distribution default was verified. [DEBIAN-CWTEX-KAI] [LINUX-NAMES] |

### Android Open Source Project (AOSP)

The AOSP `fonts.xml` maps the `zh-Hans` and `zh-Hant` fallback families to indices 2 and 3 of `NotoSansCJK-Regular.ttc`; each group also has the same-index `NotoSerifCJK-Regular.ttc` face marked `fallbackFor="serif"`. The AOSP configuration contains no Kai or Fangsong family. [AOSP-FONTS]

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Simplified Chinese | — | `Noto Serif CJK SC` | AOSP system fallback | TTC index 2, selected for `zh-Hans` and `serif`. [AOSP-FONTS] [AOSP-NOTO-SERIF] |
| `serif` (Song) | Traditional Chinese | — | `Noto Serif CJK TC` | AOSP system fallback | TTC index 3, selected for `zh-Hant` and `serif`. [AOSP-FONTS] [AOSP-NOTO-SERIF] |
| `sans-serif` (Hei) | Simplified Chinese | — | `Noto Sans CJK SC` | AOSP system fallback | TTC index 2, selected for `zh-Hans`. [AOSP-FONTS] [AOSP-NOTO-SANS] |
| `sans-serif` (Hei) | Traditional Chinese | — | `Noto Sans CJK TC` | AOSP system fallback | TTC index 3, selected for `zh-Hant`. [AOSP-FONTS] [AOSP-NOTO-SANS] |
| `generic(fangsong)` | Chinese | — | — | No mapping | No Fangsong face or alias occurs in the checked AOSP font configuration. [AOSP-FONTS] |
| `generic(kai)` | Chinese | — | — | No mapping | No Kai face or alias occurs in the checked AOSP font configuration. [AOSP-FONTS] |

### HarmonyOS / OpenHarmony

OpenHarmony's checked font configuration uses `HarmonyOS Sans SC` for `zh-Hans` and `HarmonyOS Sans TC` for `zh-Hant`. Its generic `serif` family is Noto Serif, but the Chinese locale fallbacks are the HarmonyOS Sans faces; no Chinese Song, Fangsong, or Kai face is configured. Commercial HarmonyOS device images can differ, so device/vendor additions should be documented separately. [OHOS-CONFIG]

| CSS generic | Language/region | Chinese/localized family name | English family name | Availability | Evidence and notes |
| --- | --- | --- | --- | --- | --- |
| `serif` (Song) | Chinese | — | — | No verified Chinese mapping | The checked configuration supplies no Chinese Song face; Chinese fallback is HarmonyOS Sans. [OHOS-CONFIG] |
| `sans-serif` (Hei) | Simplified Chinese | 鸿蒙黑体 | `HarmonyOS Sans SC` | OpenHarmony system fallback | The official system resource and font configuration use `/system/fonts/HarmonyOS_Sans_SC.ttf`; the zh-CN name record is 鸿蒙黑体. [OHOS-RESOURCES] [OHOS-CONFIG] [OHOS-TYPEFACE] [OHOS-NAMES-SC] |
| `sans-serif` (Hei) | Traditional Chinese | 鴻蒙黑體 | `HarmonyOS Sans TC` | OpenHarmony system fallback | The official system resource and font configuration include `HarmonyOS_Sans_TC.ttf`; the zh-TW name record is 鴻蒙黑體. [OHOS-RESOURCES] [OHOS-CONFIG] [OHOS-NAMES-TC] |
| `generic(fangsong)` | Chinese | — | — | No mapping | No Fangsong face or alias occurs in the checked OpenHarmony font configuration. [OHOS-CONFIG] |
| `generic(kai)` | Chinese | — | — | No mapping | No Kai face or alias occurs in the checked OpenHarmony font configuration. [OHOS-CONFIG] |

## Implementation guidance

Do not treat an optional, downloadable, document-based app support, or distribution-package font as already installed and available to CSS. `generic(fangsong)` and `generic(kai)` are allowed not to match on a system without a suitable local face. [CSS-FONTS-4]

Browser vendors should document any private, hidden, automatically activated, OEM-specific, or version-specific mappings in additions to this table.

## Maintenance

A contribution adding or changing a mapping should include:

* the exact OS or distribution version;
* an official vendor inventory, OS source/configuration, or distribution package reference proving availability;
* the font file name and family name;
* the English and Chinese localized family-name records, or an explicit statement that the Chinese-language record repeats the Latin-script name;
* the availability class: built-in, optional/downloadable, document-based app support, distribution package, or OEM-specific;
* the language/region whose glyph conventions the face implements.

<!-- Reference-style link definitions. -->

[CSS-FONTS-4]: https://drafts.csswg.org/css-fonts-4/#generic-font-families "CSS Fonts Module Level 4 — generic font families and localized name matching"

[MS-W11]: https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list "Microsoft Typography — Font List Windows 11"

[MS-SIMSUN]: https://learn.microsoft.com/en-us/typography/font-list/simsun "Microsoft Typography — SimSun font family"

[MS-DENGXIAN]: https://learn.microsoft.com/en-us/typography/font-list/dengxian "Microsoft Typography — DengXian font family"

[MS-SIMHEI]: https://learn.microsoft.com/en-us/typography/font-list/simhei "Microsoft Typography — SimHei font family"

[MS-YAHEI]: https://learn.microsoft.com/en-us/typography/font-list/microsoft-yahei "Microsoft Typography — Microsoft YaHei font family"

[MS-JHENGHEI]: https://learn.microsoft.com/en-us/typography/font-list/microsoft-jhenghei "Microsoft Typography — Microsoft JhengHei font family"

[MS-MINGLIU]: https://learn.microsoft.com/en-us/typography/font-list/mingliu "Microsoft Typography — MingLiU font family"

[MS-FANGSONG]: https://learn.microsoft.com/en-us/typography/font-list/fangsong "Microsoft Typography — FangSong font family"

[MS-KAITI]: https://learn.microsoft.com/en-us/typography/font-list/kaiti "Microsoft Typography — KaiTi font family"

[MS-NAMES]: https://github.com/microsoft/roosterjs/blob/f686989e5a9a57e5d3caf3559ec286f14f0d8712/packages/roosterjs-react/lib/ribbon/buttons/fontButton.ts#L63-L96 "Microsoft RoosterJS font menu — English/localized family-name pairs"

[APPLE-FONTS]: https://developer.apple.com/fonts/system-fonts/ "Apple Developer — System Fonts"

[APPLE-NAMES]: https://developer.apple.com/fonts/system-fonts/ "OpenType name tables inspected from the Apple-supplied files on macOS 26.5.2; Apple's inventory establishes availability"

[DEBIAN-NOTO]: https://packages.debian.org/sid/fonts-noto-cjk "Debian — fonts-noto-cjk"

[DEBIAN-NOTO-NAMES]: https://deb.debian.org/debian/pool/main/f/fonts-noto-cjk/fonts-noto-cjk_20240730+repack1.orig.tar.gz "OpenType name tables inspected from Debian's fonts-noto-cjk 1:20240730+repack1-1 source archive"

[DEBIAN-WQY]: https://packages.debian.org/sid/fonts-wqy-zenhei "Debian — fonts-wqy-zenhei"

[WQY-NAMES]: https://sources.debian.org/src/fonts-wqy-zenhei/0.9.45-8/wqy-zenhei.ttc "OpenType name table inspected from Debian's fonts-wqy-zenhei 0.9.45-8 source file"

[DEBIAN-CWTEX-MING]: https://packages.debian.org/sid/fonts-cwtex-ming "Debian — fonts-cwtex-ming"

[DEBIAN-CWTEX-FS]: https://packages.debian.org/sid/fonts-cwtex-fs "Debian — fonts-cwtex-fs"

[DEBIAN-CWTEX-KAI]: https://packages.debian.org/sid/fonts-cwtex-kai "Debian — fonts-cwtex-kai"

[LINUX-NAMES]: https://packages.debian.org/source/sid/fonts-cwtex "OpenType name tables inspected from Debian's fonts-cwtex 1.0-4 source package"

[AOSP-FONTS]: https://android.googlesource.com/platform/frameworks/base/+/1cdfff555f4a21f71ccc978290e2e212e2f8b168/data/fonts/fonts.xml#1411 "AOSP `fonts.xml` at revision `1cdfff5` — Chinese fallback groups"

[AOSP-NOTO-SANS]: https://android.googlesource.com/platform/external/noto-fonts/+/aa96a71129acdb7ad8005ab5de269cb506d29655/notosanscjk/NotoSansCJK-Regular.ttc "AOSP NotoSansCJK-Regular.ttc at revision aa96a71"

[AOSP-NOTO-SERIF]: https://android.googlesource.com/platform/external/noto-fonts/+/aa96a71129acdb7ad8005ab5de269cb506d29655/notoserifcjk/NotoSerifCJK-Regular.ttc "AOSP NotoSerifCJK-Regular.ttc at revision aa96a71"

[OHOS-CONFIG]: https://github.com/openharmony/third_party_skia/blob/26a5d2650fb1ee569dcc0fdb95d345a135a54437/m133/src/ports/skia_ohos/config/fontconfig_ohos.json "OpenHarmony Skia font configuration at revision `26a5d26`"

[OHOS-RESOURCES]: https://github.com/openharmony/global_system_resources/tree/a19462b6ee886b45ca2297ea0afe1b190ad64202/fonts "OpenHarmony global system font resources at revision `a19462b`"

[OHOS-TYPEFACE]: https://github.com/openharmony/docs/blob/f41b9345badd47c7ab0c263344cd7f4b5a549afb/en/application-dev/reference/apis-arkgraphics2d/arkts-apis-graphics-drawing-Typeface.md "OpenHarmony drawing Typeface example using `/system/fonts/HarmonyOS_Sans_SC.ttf`"

[OHOS-NAMES-SC]: https://github.com/openharmony/global_system_resources/blob/OpenHarmony-v6.0-Release/fonts/HarmonyOS_Sans_SC.ttf "OpenType name table inspected from the official OpenHarmony 6.0 HarmonyOS Sans SC font asset"

[OHOS-NAMES-TC]: https://github.com/openharmony/global_system_resources/blob/OpenHarmony-v6.0-Release/fonts/HarmonyOS_Sans_TC.ttf "OpenType name table inspected from the official OpenHarmony 6.0 HarmonyOS Sans TC font asset"
