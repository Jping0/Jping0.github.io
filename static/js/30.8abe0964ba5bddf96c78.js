webpackJsonp([30],{p7kz:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Details",[r("div",{staticClass:"is-node",attrs:{id:"write"}},[r("h1",[r("a",{staticClass:"md-header-anchor",attrs:{name:"js实现复制功能"}}),r("span",[t._v("js实现复制功能")])]),r("pre",{staticClass:"md-fences md-end-block ty-contain-cm modeLoaded",attrs:{lang:"",spellcheck:"false"}},[r("div",{staticClass:"CodeMirror cm-s-inner CodeMirror-wrap",attrs:{lang:""}},[r("div",{staticStyle:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"0px",left:"4px"}},[r("textarea",{staticStyle:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"},attrs:{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0"}})]),r("div",{staticClass:"CodeMirror-scrollbar-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-gutter-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-scroll",attrs:{tabindex:"-1"}},[r("div",{staticClass:"CodeMirror-sizer",staticStyle:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[r("div",{staticStyle:{position:"relative",top:"0px"}},[r("div",{staticClass:"CodeMirror-lines",attrs:{role:"presentation"}},[r("div",{staticStyle:{position:"relative",outline:"none"},attrs:{role:"presentation"}},[r("div",{staticClass:"CodeMirror-measure"},[r("span",[r("span",[t._v("​")]),t._v("x")])]),r("div",{staticClass:"CodeMirror-measure"}),r("div",{staticStyle:{position:"relative","z-index":"1"}}),r("div",{staticClass:"CodeMirror-code",attrs:{role:"presentation"}},[r("div",{staticClass:"CodeMirror-activeline",staticStyle:{position:"relative"}},[r("div",{staticClass:"CodeMirror-activeline-background CodeMirror-linebackground"}),r("div",{staticClass:"CodeMirror-gutter-background CodeMirror-activeline-gutter",staticStyle:{left:"0px",width:"0px"}}),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('<p class="copytext">www.baidu.com</p>')])])]),r("div",{staticStyle:{position:"relative"}},[r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('<button type="button">复制</button>')])])])])])])])]),r("div",{staticStyle:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"52px"}}),r("div",{staticClass:"CodeMirror-gutters",staticStyle:{display:"none",height:"52px"}})])])]),r("pre",{staticClass:"md-fences md-end-block ty-contain-cm modeLoaded md-focus",attrs:{lang:"",spellcheck:"false"}},[r("div",{staticClass:"CodeMirror cm-s-inner CodeMirror-wrap CodeMirror-focused",attrs:{lang:""}},[r("div",{staticStyle:{overflow:"hidden",position:"relative",width:"3px",height:"0px",top:"286px",left:"75px"}},[r("textarea",{staticStyle:{position:"absolute",bottom:"-1em",padding:"0px",width:"1000px",height:"1em",outline:"none"},attrs:{autocorrect:"off",autocapitalize:"off",spellcheck:"false",tabindex:"0"}})]),r("div",{staticClass:"CodeMirror-scrollbar-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-gutter-filler",attrs:{"cm-not-content":"true"}}),r("div",{staticClass:"CodeMirror-scroll",attrs:{tabindex:"-1"}},[r("div",{staticClass:"CodeMirror-sizer",staticStyle:{"margin-left":"0px","margin-bottom":"0px","border-right-width":"0px","padding-right":"0px","padding-bottom":"0px"}},[r("div",{staticStyle:{position:"relative",top:"0px"}},[r("div",{staticClass:"CodeMirror-lines",attrs:{role:"presentation"}},[r("div",{staticStyle:{position:"relative",outline:"none"},attrs:{role:"presentation"}},[r("div",{staticClass:"CodeMirror-measure"},[r("pre",[r("span",[t._v("xxxxxxxxxx")])])]),r("div",{staticClass:"CodeMirror-measure"}),r("div",{staticStyle:{position:"relative","z-index":"1"}}),r("div",{staticClass:"CodeMirror-code",attrs:{role:"presentation"}},[r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('<script src="./js/jquery-3.2.1.js"><\/script>')])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("<script>")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("    $('button').click(function(e){")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        const range = document.createRange();")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v('        range.selectNode(document.querySelector(".copytext"));')])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[r("span",{attrs:{"cm-text":""}},[t._v("​")])])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        const selection = window.getSelection();")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        if(selection.rangeCount > 0) selection.removeAllRanges();")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        selection.addRange(range);")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("        document.execCommand('copy');")])]),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("    })")])]),r("div",{staticClass:"CodeMirror-activeline",staticStyle:{position:"relative"}},[r("div",{staticClass:"CodeMirror-activeline-background CodeMirror-linebackground"}),r("div",{staticClass:"CodeMirror-gutter-background CodeMirror-activeline-gutter",staticStyle:{left:"0px",width:"0px"}}),r("pre",{staticClass:" CodeMirror-line ",attrs:{role:"presentation"}},[r("span",{staticStyle:{"padding-right":"0.1px"},attrs:{role:"presentation"}},[t._v("<\/script>")])])])])])])])]),r("div",{staticStyle:{position:"absolute",height:"0px",width:"1px","border-bottom":"0px solid transparent",top:"312px"}}),r("div",{staticClass:"CodeMirror-gutters",staticStyle:{display:"none",height:"312px"}})])])]),r("p",[t._v(" ")])])])},staticRenderFns:[]},s=r("VU/8")({name:"jscopy"},i,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=30.8abe0964ba5bddf96c78.js.map