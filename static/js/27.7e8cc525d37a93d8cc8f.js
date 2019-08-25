webpackJsonp([27],{waLo:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Details",[r("div",{staticClass:"is-node",attrs:{id:"write"}},[r("h1",[r("a",{staticClass:"md-header-anchor",attrs:{name:"正则清除或修改富文本内容图片的样式"}}),r("span",[t._v("正则清除或修改富文本内容图片的样式")])]),r("p",[r("span",[t._v("小程序可用")])]),r("pre",{staticClass:"md-fences md-end-block ty-contain-cm modeLoaded",staticStyle:{"break-inside":"unset"},attrs:{lang:"",spellcheck:"false"}},[r("div",{staticClass:"CodeMirror cm-s-inner CodeMirror-wrap",attrs:{lang:""}},[r("div",{staticStyle:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"0px",left:"4px"}},[r("textarea",{staticStyle:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"},attrs:{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0"}})]),r("div",{staticClass:"CodeMirror-scrollbar-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-gutter-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-scroll",attrs:{tabindex:"-1"}},[r("div",{staticClass:"CodeMirror-sizer",staticStyle:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[r("div",{staticStyle:{position:"relative",top:"0px"}},[r("div",{staticClass:"CodeMirror-lines",attrs:{role:"presentation"}},[r("div",{staticStyle:{position:"relative",outline:"none"},attrs:{role:"presentation"}},[r("div",{staticClass:"CodeMirror-measure"},[r("span",[r("span",[t._v("​")]),t._v("x")])]),r("div",{staticClass:"CodeMirror-measure"}),r("div",{staticStyle:{position:"relative","z-index":"1"}}),r("div",{staticClass:"CodeMirror-code",attrs:{role:"presentation"}},[r("div",{staticClass:"CodeMirror-activeline",staticStyle:{position:"relative"}},[r("div",{staticClass:"CodeMirror-activeline-background CodeMirror-linebackground"}),r("div",{staticClass:"CodeMirror-gutter-background CodeMirror-activeline-gutter",staticStyle:{left:"0px",width:"0px"}}),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("<script>")])])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("    function formatImg(html){")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        var newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('        // var match = match.replace(/style=\\"(.*)\\"/gi, \'style="width:100%; max-width:100%"\');')])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        var reg = RegExp(/style/);")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        var matchs;")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        // 判断是否含有style属性，有就直接修改样式，没有就增加样式")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        if (reg.test(match)){")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('            matchs = match.replace(/style\\s*?=\\s*?([‘"])[\\s\\S]*?\\1/ig, \'style="width:100%;max-width:100%;height:auto;"\');')])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        }else{")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("            matchs = match.replace(/<img/ig, '<img style=\"width:100%;max-width:100%;height:auto;\" ');")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        }")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        return matchs;")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        })")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        return newContent;")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("    }")])]),r("div",{staticStyle:{position:"relative"}},[r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("<\/script>")])])])])])])])]),r("div",{staticStyle:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"468px"}}),r("div",{staticClass:"CodeMirror-gutters",staticStyle:{display:"none",height:"468px"}})])])]),r("p",[t._v(" ")])])])},staticRenderFns:[]},a=r("VU/8")({name:"qcfwbys"},i,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=27.7e8cc525d37a93d8cc8f.js.map