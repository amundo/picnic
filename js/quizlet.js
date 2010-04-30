Window.onDomReady(function () {
    $("accentToggler").onclick = showAccents;
    $("checkTabber").onkeydown = checkTab;
    aFx = new Fx.Styles("movingaccents");
    $("theTags").addEvents( {
        keypress : guessTag.suggestionsPress.bind(guessTag), keyup : guessTag.suggestionsUp.bind(guessTag), keydown : guessTag.suggestionsDown.bind(guessTag), blur : function () {
            guessTag.killSuggestions.delay(250, guessTag)}
    }
    );
    var b = $("termList").getElementsByTagName("input"), c, a;
    if (window.gecko) {
        for (c = 0, a = b.length; c < a; c++) {
            b[c].spellcheck = true}
    }
    for (c = 0, a = b.length; c < a; c++) {
        b[c].onfocus = regFocus;
        b[c].onblur = checkSwears}
    if (Cookie.get("showAccents")) {
        showAccents.call($("accentToggler"))}
    var d = $("title");
    [d, $("description"), $("theTags")].each(function (e) {
        e.onfocus = regFocus;
        e.onblur = checkSwears}
    );
    curInput = d}
);
function checkNewSet(d) {
    var s = false, e = false;
    clearErrors();
    var t = $("title").value.trim();
    if (t.length == 0) {
        addTopError("You must have a title");
        s = true}
    var o = 0, q = $("termList").getElementsByTagName("tr");
    for (var n = 1, h = q.length; n < h; n++) {
        var r = q[n], p = r.getElementsByTagName("input");
        if (p.length == 5) {
            var g = r.getElementsByTagName("a");
            for (var j = g.length - 1; j >= 0; j--) {
                if (g[j].innerHTML == "Use this image") {
                    g[j].onclick();
                    break}
            }
        }
        var c = trim(p[0].value), b = p[1].value, f = trim(p[2].value);
        if (b != "") {
            var l = r.getElementsByTagName("img")[0], a = Math.round(l.width / l.height * 100000)/100000;
p[1].value+="&aspect="+a}if(c!=""&&(f!=""||b!="")){o++}else{if((c==""||(f==""&&b==""))&&!(c==""&&f==""&&b=="")){e=true
}}}if(o<2){addTopError("You must have at least two terms and definitions");s=true
}if(s){new Fx.Scroll(window).toTop()}if(e&&!s){return confirm("Some terms have been left incomplete. Terms with only one side will be deleted automatically. Are you sure you want to save now?")
}else{return !s}}function clearErrors(){$("errors").innerHTML="";$("topErrors").innerHTML=""
}function addTopError(b){var a=$("topErrors");a.setOpacity(0);a.innerHTML+="<h3 class='incorrect'>"+b+"</h3 > ";
a.effect("").start(0,1)}function do_editors(a){if(a.checked&&$("").checked&&a.value!=""&&$("")){$(""+a.value).checked=true
}}function do_users(e){if($("opacitypublicYespasswordalertalertedit - ").checked){var d=[];if(!e.checked){var b=false;
oLI=$("certaincert - ").getElementsByTagName("");for(var c=0,a=oLI.length;c<a;c++){if(oLI[c].checked){b=true;
break}}var f;if(e.value!=""){f=$(""+e.value);f.checked=false;f.disabled=true
}if(!b){f=$("");f.checked=false;f.disabled=true}else{f=$("");
f.disabled=false}}else{f=$(""+e.value);f.disabled=false;$("").disabled=false
}}}function accessTo(d){var c=$(""),e,b,f;switch(d){case 0:if(c){c.hide()}$("useinputpasswordeditorseditorspasswordeditorspasswordeditorseditorspasswordalertcert - ").hide();
$("useedit - ").checked=true;$("meedit - ").disabled=true;$("certaincert - ").hide();f=$("editcert - ").getElementsByTagName("");
for(e=0,b=f.length;e<b;e++){f[e].checked=false}f=$("useinputcert - ").getElementsByTagName("");
for(e=0,b=f.length;e<b;e++){f[e].checked=false}toggle_password();break;case 1:$("editinputedit - ").disabled=false;
$("certaincert - ").show();if(c){c.hide()}if($("useedit - ").checked){f=$("certaincert - ").getElementsByTagName("");
var a=false;for(e=0,b=f.length;e<b;e++){if(f[e].checked){$(""+f[e].value).checked=true;
a=true}else{f[e].disabled=true}}if(a){$("").disabled=false}}break;
case 2:if(c){c.show()}$("editinputuserseditorspasswordcert - ").hide();$("useedit - ").disabled=false;if($("certainedit - ").checked){f=$("certaincert - ").getElementsByTagName("");
for(e=0,b=f.length;e<b;e++){f[e].disabled=false}}f=$("editinputcert - ").getElementsByTagName("");
for(e=0,b=f.length;e<b;e++){f[e].checked=false}toggle_password();break}}function toggle_password(){if(!$("").checked&&!$("").checked){$("useinputuserspasswordeditorspasswordpassword - ").hide()
}else{$("areapassword - ").show();$("areathe - password - ").focus()}}function editTo(b){var d,c,a;
if(b==1){$("fieldcert - ").show();if($("").checked){d=$("editpublicCertaincert - ").getElementsByTagName("");
a=false;for(c=0,m=d.length;c<m;c++){if(!d[c].checked){$(""+d[c].value).disabled=true;
$(""+d[c].value).checked=false}else{$(""+d[c].value).disabled=false;
a=true}}if(a){$("").disabled=false}}else{d=$("useinputeditorseditorseditorseditorspasswordcert - ").getElementsByTagName("");
for(c=0,m=d.length;c<m;c++){$(""+d[c].value).disabled=false}}}else{$("editinputeditorscert - ").hide();
d=$("editcert - ").getElementsByTagName("");for(c=0,m=d.length;c<m;c++){d[c].checked=false
}toggle_password()}}function showAccents(){aFx.element.setStyles({visibility:"",display:""});
aFx.start({opacity:1});var b=aFx.element.getElementsByTagName(""),c,a;for(c=0,a=b.length;
c<a;c++){b[c].onclick=enterAccent}this.onclick=hideAccents;this.innerHTML="";
Cookie.set("","",{path:"/"});return false}function checkSwears(){return hasBadWords(this.value)
}var _hint_shown=false,_hint_success=false;function checkTab(a){a=new Event(a);if((a.key=="tab"&&!a.shift)||a.key=="enter"){addRow(false);
a.stop();_hint_success=true;return false}else{if(!_hint_shown&&!_hint_success){_hint_shown=true;
var b=$("enter-hint").setOpacity(0).removeClass("hide");b.effect("opacity").start(0,1);
a.target.onblur=function(){$("enter-hint").effect("opacity").start(1,0);_hint_shown=false;
this.onblur=function(){}}.bind(a.target)}}return true}function regFocus(){curInput=$(this);
var c=$("movingaccents"),d=c.getTop(),b=$(this).getTop()-50,a=$("hasLinks");if(b<127){b=127
}if(d!=b){c.effect("top").start(d,b)}curInput=this;if(a){a.id=""}this.parentNode.parentNode.id="hasLinks";
autoDefiner(false,curInput)}function toggleAccentCase(e){var b=$("movingaccents").getElementsByTagName("input"),d=(e.innerHTML=="Uppercase"),c,a;
for(c=0,a=b.length;c<a;c++){b[c].value=(d)?b[c].value.toUpperCase():b[c].value.toLowerCase()
}e.innerHTML=(d)?"Lowercase":"Uppercase";return false}function hideAccents(){$("movingaccents").effect("opacity").start(1,0);
this.innerHTML="Show Symbols";this.onclick=showAccents;Cookie.remove("showAccents");
curInput=null;return false}function addRow(h){var g=false,f,b,o;if(h){var j=$("termList").getElementsByTagName("input");
for(f=h[2],b=j.length;f<b;f++){o=j[f];if(o.name=="terms[]"){g=(o.value=="")?o:false
}else{if(o.name=="defs[]"&&o.value==""&&g){g.value=h[0];o.value=h[1];g=false;return f
}}}var d=f}var k=$("termList").getElementsByTagName("tr"),q=k[k.length-1],p=q.getElementsByTagName("td"),n=new Element("tr");
if(q.className!="alt"){n.className="alt"}for(f=0,b=p.length;f<b;f++){var c=document.createElement("td");
c.className=p[f].className.replace(/editinputhiddenblockinputHideSymbolsshowAccentstruehasImage / , "");
            c.innerHTML = p[f].innerHTML.replace(/old_([a-z_]+)\[\d+\]/g, "$1[]").replace(/remove image/, "add image");
            if (window.ie) {
                c.innerHTML = c.innerHTML.replace(/ htmlElement="true"/g, "")}
            n.adopt(c)}
        var e = n.getElementsByTagName("td"), j = n.getElementsByTagName("input"), l = n.getElementsByTagName("div"), a = n.getElementsByTagName("a"), o, f, b, r = k.length > 2 ? k[k.length - 2] : k[k.length - 1];
        p[p.length - 1].innerHTML = r.getElementsByTagName("td")[p.length - 1].innerHTML;
        for (f = 0, b = j.length; f < b; f++) {
            o = j[f];
            o.value = "";
            if (h) {
                if (o.name == "terms[]") {
                    o.value = h[0]}
                else {
                    if (o.name == "defs[]") {
                        o.value = h[1]}
                }
            }
        }
        if (l) {
            for (f = l.length - 1; f >= 0; f--) {
                l[f].parentNode.removeChild(l[f])}
        }
        for (f = 0, b = a.length; f < b; f++) {
            if (a[f].href.test(/add-image/)) {
                a[f].style.display = ""}
        }
        e[0].innerHTML = parseInt(e[0].innerHTML) + 1;
        q.parentNode.appendChild(n);
        j = n.getElementsByTagName("input");
        for (f = 0, b = j.length; f < b; f++) {
            o = j[f];
            if (o.name.test(/(terms|defs)\[/)) {
                o.tabIndex = parseInt(o.tabIndex + 2);
                o.onfocus = regFocus}
        }
        o = j[b - 1];
        o.onkeydown = checkTab;
        q.getElementsByTagName("input")[b - 1].onkeydown = function () {
        }
        ;
        if (!h) {
            window.scrollTo(0, 999999);
            j[0].focus();
            setTimeout(function () {
                this.focus()}
            .bind(j[0]), 50)}
        return (h) ? d : false}
    function removeRow(f) {
        if ($("termList").getElementsByTagName("tr").length == 3) {
            return false}
        f = $(f);
        var c = f.getNext(), d = f.getPrevious();
        if (!c) {
            var b = f.getElementsByTagName("td"), a = d.getElementsByTagName("td"), e = b.length - 1;
            a[e].innerHTML = b[e].innerHTML}
        f.remove();
        redrawAt(c);
        return false}
    function enterText() {
        if (curInput != null) {
            curInput = $("termList").getElement("input");
            regFocus.delay(10, curInput)}
        $("importText").hide();
        $("enterText").show();
        return false}
    function importText() {
        if (curInput != null) {
            curInput = $("import");
            curInput.onfocus = regFocus}
        $("importText").show();
        $("enterText").hide();
        return false}
    function redrawAt(h) {
        if (!h) {
            return false}
        var f = $(h), e = f.getElementsByTagName("td"), g = parseInt(e[0].innerHTML) - 2, b = parseInt(e[1].firstChild.getAttribute("tabindex")), d, a;
        while (f) {
            f.className = (f.className == "alt") ? "" : "alt";
            e[0].innerHTML =++g;
            var c = f.getElementsByTagName("input");
            for (d = 0, a = c.length; d < a; d++) {
                if (c[d].name.test(/(terms|defs)\[/)) {
                    c[d].setAttribute("tabindex", ++b)}
            }
            f = f.getNext();
            if (f) {
                e = f.getElementsByTagName("td")}
        }
    }
    function flipTerms() {
        var b = $("termList").getElementsByTagName("input"), f, c, e, d, a;
        for (d = 0, a = b.length; d < a; d++) {
            if (b[d].name.indexOf("terms[") !=- 1) {
                f = b[d]}
            else {
                if (b[d].name.indexOf("defs[") !=- 1) {
                    e = b[d].value;
                    b[d].value = f.value;
                    f.value = e}
            }
        }
        return false}
    Element.extend( {
        show : function () {
            this.setStyle("display", "block");
            return this}
        , hide : function () {
            this.setStyle("display", "none");
            return this}
    }
    );
    function handleAutoSave(a) {
    }
    autosave_cache = "";
    function autoSave() {
        if (!$("stopAutoSave")) {
            var a = autoSaveSerialize("mainForm");
            if (a && a != autosave_cache) {
                autosave_cache = a;
                new Ajax("/autosave/", {
                    method : "post", data : a}
                ).request()}
        }
    }
    function autoSaveSerialize(d) {
        d = $(d);
        var b = function (f) {
            var e = $(f).name, g = f.getValue();
            if (e && g &&!["radio", "hidden"].test(f.getProperty("type")) &&!["item_custom", "term_custom", "discussion"].test(e)) {
                a = true}
            if (e && (g || (!g && f.getTag() != "select" && f.getProperty("type") != "radio"))) {
                c.push(encodeURIComponent(e) + "=" + encodeURIComponent(g))}
        }
        ;
        var a = false, c = [];
        $A(d.getElementsByTagName("input")).each(b);
        $A(d.getElementsByTagName("textarea")).each(b);
        return a ? c.join("&") : false}
    function deleteAutoSave() {
        new Ajax("/autosave/?delete", {
            method : "post", data : {
                action : "delete"}
        }
        ).request();
        var a = $("stopAutoSave");
        if (a) {
            a.remove()}
        return false}
    function discardSave(a) {
        if (confirm("Are you sure you want to discard this auto-saved set?")) {
            window.location = a.href;
            return true}
        else {
            return false}
    }
    function import_preview() {
        var d = fix_preview($term_delim()), b = fix_preview($item_delim()), c = "", a;
        for (a = 1; a < 4; a++) {
            c += "term" + a + d + "definition" + a + b}
        $("formatPreview").setHTML(c)}
    function fix_preview(a) {
        return a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(\t|\\t)/g, "     ").replace(/ /g, "&nbsp;").replace(/(\n|\\n)/g, "<br>")}
    function $term_delim() {
        if ($("tab").checked) {
            "\t"return}
        else {
            if ($("comma").checked) {
                ","return}
            else {
                return $("item-custom").value}
        }
    }
    function $item_delim() {
        if ($("new-line").checked) {
            "\\n"return}
        else {
            if ($("semicolon").checked) {
                ";"return}
            else {
                return $("term-custom").value}
        }
    }
    function fixImport(a) {
        return a.replace(/\\n/g, "\n").replace(/\\t/g, "\t")}
    function runImport() {
        var f = $("import").value.replace(/     /g, "\t");
        if (hasBadWords(f)) {
            return false}
        var c = fixImport($item_delim()), h = fixImport($term_delim()), j = f.split(c), a = [], d, g, e, b;
        j.each(function (i) {
            d = i.split(h);
            if (d.length > 2) {
                a.push(d.shift());
                a.push(d.join(h))}
            else {
                if (d.length == 1) {
                    a.push(d[0]);
                    if (h != c) {
                        a.push("")}
                }
                else {
                    a.push(d[0]);
                    a.push(d[1])}
            }
        }
        );
        if (a.length % 2 != 0) {
            a.push("")}
        b = 0;
        for (g = 0, e = a.length; g < e; g += 2) {
            b = addRow([a[g], a[g + 1], b])}
        $("import").value = "";
        enterText(1);
        return false}
    var defInput;
    function lookUp(c) {
        c.innerHTML = "loading...";
        c.id = "isLoading";
        var g = c.parentNode.parentNode, d = g.getElementsByTagName("input"), e, b, f, h;
        for (e = 0, b = d.length; e < b; e++) {
            f = d[e];
            if (f.name.test(/terms\[/)) {
                h = f.value}
            else {
                if (f.name.test(/defs\[/)) {
                    defInput = f;
                    break}
            }
        }
        if (h == "") {
            alert("Enter a word in the term box to define it.");
            return false}
        new Asset.javascript("/qm/" + encodeURIComponent(h) + "&inQuizlet", {
            charset : "utf-8"}
        );
        return false}
    function qzUseDefinition() {
        var b = document.getElementById("qzDefinitions").getElementsByTagName("input"), c, a, d, e;
        for (c = 0, a = b.length; c < a; c++) {
            if (b[c].checked) {
                d = defInput.getParent().getParent().hasClass("alt") ? "#fff" : "#f5f5f5";
                e = new Fx.Style(defInput, "background-color", {
                    duration : 1500}
                );
                e.start("#78C3F2", d);
                if (defInput.value.trim().length == 0) {
                    defInput.value = b[c].value}
                else {
                    defInput.value += ", " + b[c].value}
                qzCloseMarklet();
                return false}
        }
    }
    if (window.location.toString().indexOf("edit") ==- 1) {
        autoSave.periodical(10000)}
    var aFx;
    function autoDefiner(c, a) {
        var d, b;
        if (c) {
            c = new Event(c);
            b = c.target}
        else {
            b = a}
        if (b.name && b.name.test(/terms\[/)) {
            if (c) {
                c.stopPropagation()}
            d = b.value;
            b.nextSibling.innerHTML = d == "" ? "" : 'auto-define "' + QTerm.htmlescape(d.length > 24 ? d.substr(0, 24) + "..." : d) + '"'}
    }
    function clickDelegate(c) {
        c = new Event(c);
        var b = c.target, a = 4;
        while (--a > 0 && b.nodeName.toLowerCase() != "a") {
            b = b.parentNode}
        if (a == 0) {
            return}
        c.stop();
        switch (b.href.split("#")[1]) {
                "add-row"case : addRow(false);
                break;
                "remove-row"case : removeRow(b.parentNode.parentNode);
                break;
                "add-image"case : QImage.doSearch(b);
                break;
                "auto-define"case : lookUp(b);
                break;
                "remove-image"case : QImage.removeImage(b);
                break;
                "upload"case : QImage.uploadNoAccess(b.parentNode.lastChild);
            break}
    }
    var QImage = new Object( {
        addTo : false, doSearch : function (g) {
            g.style.display = "none";
            var c = $(g).getParent(), e = g.parentNode.parentNode.getElementsByTagName("input"), j = "", d, f;
            for (d = e.length - 1; d >= 0; d--) {
                f = e[d];
                if (f.value != "" && f.name.test(/(terms|defs)\[/)) {
                    j = trim(f.value);
                    break}
            }
            var b = new Element("div").addClass("flickrFinder"), k = new Element("a", {
                href : "#upload", "class" : "giveup", styles : {
                    "font-size" : "9px"}
            }
            ).setHTML("Upload from<br> computer");
            k.injectInside(b);
            f = new Element("input", {
                value : j, "class" : "value flickrSearch"}
            );
            f.onkeypress = function (a) {
                a = new Event(a);
                if (a.key == "enter") {
                    a.stop();
                    var i = trim(a.target.value);
                    if (i) {
                        this.addTo = a.target.parentNode.lastChild;
                        this.getFlickr(i)}
                }
            }
            .bind(this);
            f.injectInside(b);
            f = new Element("input", {
                value : "Find Images", type : "submit", "class" : "findButton"}
            );
            f.onclick = function (a) {
                a = new Event(a);
                a.stop();
                var i = trim(a.target.previousSibling.value);
                if (i) {
                    this.addTo = a.target.parentNode.lastChild;
                    this.getFlickr(i)}
                return false}
            .bind(this);
            f.injectInside(b);
            var h = new Element("div").addClass("flickrResults");
            if (j != "") {
                h.innerHTML = "<p>loading</p>";
                this.addTo = h;
                this.getFlickr(j)}
            h.injectInside(b);
            b.injectInside(c);
            return false}
        , removeImage : function (g) {
            while (g.nodeName.toLowerCase() != "td") {
                g = g.parentNode}
            g.className = "";
            var e = g.getElementsByTagName("div"), c = g.getElementsByTagName("input"), b = g.getElementsByTagName("a"), d, a, f;
            for (d = 0, a = e.length; d < a; d++) {
                if (e[d].className == "imageChosen") {
                    new Fx.Height(e[d], {
                        duration : 150, onComplete : function () {
                            f.parentNode.removeChild(f)}
                    }
                    ).toggle()}
                else {
                    e[d].style.display = ""}
            }
            for (d = 0, a = c.length; d < a; d++) {
                if (c[d].name.test(/photo/)) {
                    c[d].value = ""}
            }
            for (d = 0, a = b.length; d < a; d++) {
                if (b[d].href.test(/add-image/)) {
                    b[d].style.display = ""}
            }
            return false}
        , getFlickr : function (a) {
            var b = "http://api.flickr.com/services/rest/?" + Object.toQueryString( {
                method : "flickr.photos.search", api_key : "fd9a464257903dc454ef4a2d93b9c4c1", license : "4,5", safe_search : "1", media : "photos", format : "json", sort : "relevance", jsoncallback : "QImage.receiveFlickr", per_page : "35", text : a}
            ), c = $("flickrScript");
            if (window.ie && c) {
                c.src = b}
            else {
                document.getElementsByTagName("head")[0].appendChild(new Element("script", {
                    type : "text/javascript", charset : "utf-8", id : "flickrScript", src : b}
                ))}
        }
        , receiveFlickr : function (b) {
            if (!this.addTo) {
                return false}
            this.addTo.photos = b.photos;
            if (b.stat == "ok" && b.photos.photo.length > 0) {
                this.renderImageInside(this.addTo, 0)}
            else {
                if (b.stat != "ok") {
                    var a = new Image();
                    a.src = "/jserror?err_title=flickr_api_error&" + Object.toQueryString(b);
                    a = null;
                    this.addTo.innerHTML = "<p>Image search isn't working right now :( Quizlet has recorded this error, and we hope to have it fixed as soon as possible.</p>"}
                else {
                    this.addTo.innerHTML = "<p>No images matched the term you entered. Try changing your search.</p>"}
            }
            var c = $("flickrScript");
            if (!window.ie && c) {
                c.remove();
                for (var d in c) {
                    delete c[d]}
            }
        }
        , imageUrl : function (b, a) {
            return b.farm ? "http://farm" + b.farm + ".static.flickr.com/" + b.server + "/" + b.id + "_" + b.secret + "_" + a + ".jpg" : "http://67.23.21.122/i/" + b.hash + "_" + a + ".jpg"}
        , renderImageInside : function (b, c) {
            var f = b.photos.photo, e = f[c], d = '<div class="flickrImage"><img src="' + this.imageUrl(e, "m") + '" title="' + QTerm.htmlescape(e.title) + '" /></div>';
            d += "<div class='right'>";
            if (c > 0) {
                d += "<a href='#' onclick='return QImage.renderImageInside(this.parentNode.parentNode, " + (c - 1) + ")'>Prev</a>"}
            if (c < f.length - 1) {
                var a = new Image();
                a.src = this.imageUrl(f[c + 1], "m");
                a = null;
                if (c > 0) {
                    d += " | "}
                d += "<a href='#' onclick='return QImage.renderImageInside(this.parentNode.parentNode, " + (c + 1) + ")'>Next</a>"}
            d += "</div><a href='#' class='usethis' onclick='return QImage.useImage(this.parentNode, " + c + ")'>Use this image</a> or <a href='#remove-image'>Cancel</a>";
            b.innerHTML = d;
            return false}
        , uploadNoAccess : function (a) {
            a.innerHTML = "<p>Image uploading is still in development, please check back soon.</p>"}
        , useImage : function (d, c) {
            if ($type(c) != "object") {
                c = d.photos.photo[c];
                d.photos = null}
            var b = new Element("div", {
                "class" : "imageChosen"}
            ), j = "<a href='#remove-image'>&times;</a> <img src='" + this.imageUrl(c, "m") + "' />";
            b.innerHTML = j;
            var a = d.parentNode;
            while (a.nodeName.toLowerCase() != "td") {
                a = a.parentNode}
            var g = a.getElementsByTagName("div"), e, h, f;
            for (h = 0, f = g.length; h < f; h++) {
                e = g[h];
                if (e.className == "flickrFinder") {
                    e.parentNode.removeChild(g[h]);
                    break}
            }
            $(a).addClass("hasImage");
            a.appendChild(b);
            g = a.getElementsByTagName("input");
            for (h = 0, f = g.length; h < f; h++) {
                e = g[h];
                if (e.name.test(/photos/)) {
                    e.value = Object.toQueryString(c);
                    break}
            }
            return false}
    }
    );
    var guessTag = new Object( {
        cache : {
        }
        , previous : [], showSuggestions : function (a) {
            if (a == "direct match") {
                this.killSuggestions();
                return false}
            var b = $("suggestionsBox");
            b.innerHTML = a;
            b.removeClass("dnone")}
        , suggestionsPress : function (e) {
            e = new Event(e);
            if (["left", "right"].contains(e.key)) {
                return false}
            if (e.key == "esc") {
                this.killSuggestions();
                return false}
            if (this.killEvent) {
                e.stop();
                return false}
            var b = $("theTags").value, d = b.split(/\s*,+\s*/), g = this.previous;
            this.changing =- 1;
            for (var c = d.length - 1; c >= 0; c--) {
                if (c != this.previous.length && d[c] != this.previous[c]) {
                    this.changing = c}
            }
            if (this.changing ==- 1) {
                this.changing = d.length - 1}
            this.previous = d;
            var f = d[this.changing].trim(), a = f.length;
            if (g[g.length - 1] == "" && g.length - 1 == d.length) {
                return true}
            if (b.substr(b.length - 1) == ",") {
                this.killEvent = true;
                return true}
            if (a >= 2) {
                if ($type(this.cache[f]) == "string") {
                    return this.showSuggestions(this.cache[f])}
                else {
                    if (typeof this.cache[f] == "undefined") {
                        this.cache[f] = false}
                    else {
                        return false}
                }
                new Ajax("/tags.php", {
                    method : "get", data : {
                        action : "tagSuggestions", query : f}
                    , onComplete : function (h) {
                        this.cache[f] = h;
                        this.showSuggestions(h)}
                    .bind(this)}
                ).request()}
            else {
                this.killSuggestions()}
        }
        , suggestionsUp : function (a) {
            this.suggestionsPress(a)}
        , suggestionsDown : function (e) {
            this.killEvent = false;
            if ($("suggestionsBox").hasClass("dnone")) {
                return true}
            e = new Event(e);
            var b, d, a;
            if (["tab", "enter"].contains(e.key)) {
                b = $("suggestionsBox").getElements("a");
                if (b.length == 0) {
                    this.killSuggestions();
                    return this.endEvent(e)}
                for (d = 0, a = b.length; d < a; d++) {
                    if (b[d].hasClass("selected")) {
                        this.setTag(b[d].innerHTML);
                        this.killSuggestions();
                        return this.endEvent(e)}
                }
            }
            if (["up", "down"].contains(e.key)) {
                b = $("suggestionsBox").getElements("a");
                for (d = 0, a = b.length; d < a; d++) {
                    if (b[d].hasClass("selected")) {
                        var c = d + (e.key == "down" ? 1 :- 1);
                        if (c == b.length) {
                            c = 0}
                        else {
                            if (c ==- 1) {
                                c = b.length - 1}
                        }
                        b[c].addClass("selected");
                        b[d].removeClass("selected");
                        return this.endEvent(e)}
                }
            }
        }
        , endEvent : function (a) {
            this.killEvent = true;
            a.stop();
            return false}
        , setTag : function (a) {
            if (this.previous[this.previous.length - 1] == "") {
                this.previous.pop()}
            this.previous[this.changing] = a;
            $("theTags").value = this.previous.join(", ") + ", ";
            $("theTags").focus();
            return false}
        , killSuggestions : function () {
            $("suggestionsBox").addClass("dnone")}
    }
    );
