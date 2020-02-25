import { minify } from 'html-minifier-terser';

const result = minify('<p title="blah" id="moo">foo</p>', {
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    continueOnParseError: true,
    customAttrAssign: [/.*/],
    customAttrCollapse: /ng-class/,
    customAttrSurround: [/btn-class/],
    customEventAttributes: [/on-click/],
    decodeEntities: true,
    html5: false,
    ignoreCustomComments: [/^!/],
    ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]\*?\?>/],
    includeAutoGeneratedTags: false,
    keepClosingSlash: false,
    maxLineLength: 20,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    preserveLineBreaks: true,
    preventAttributesEscaping: true,
    processConditionalComments: true,
    processScripts: ['text/v-text'],
    quoteCharacter: '"',
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeEmptyElements: true,
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
    sortAttributes: true,
    sortClassName: true,
    trimCustomFragments: true,
    useShortDoctype: true,
});
result; // $ExpectType string