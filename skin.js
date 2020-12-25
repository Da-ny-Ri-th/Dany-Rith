// Garden Gnome Software - Skin
// Pano2VR 6.1.6/17950
// Filename: Test 1.ggsk
// Generated 2020-12-25T08:31:53

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_auto_hide_controller', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_hotspot_preview_1', 2, true);
	player.addVariable('opt_hotspot_preview_2', 2, true);
	player.addVariable('opt_hotspot_preview_3', 2, true);
	player.addVariable('opt_hotspot_preview_4', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._social=document.createElement('div');
		el.ggId="Social";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._social.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._social.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_twitter=document.createElement('div');
		els=me._button_twitter__img=document.createElement('img');
		els.className='ggskin ggskin_button_twitter';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_twitter__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._button_twitter__img.ggDownSrc=hs;
		el.ggId="button_twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_twitter.onclick=function (e) {
			location.href='mailto:?SUBJECT='+document.title+'&BODY='+escape(location.href);
		}
		me._button_twitter.onmouseover=function (e) {
			me._button_twitter__img.src=me._button_twitter__img.ggOverSrc;
		}
		me._button_twitter.onmouseout=function (e) {
			me._button_twitter__img.src=me._button_twitter__img.ggNormalSrc;
		}
		me._button_twitter.onmousedown=function (e) {
			me._button_twitter__img.src=me._button_twitter__img.ggDownSrc;
		}
		me._button_twitter.onmouseup=function (e) {
			if (skin.player.getIsMobile()) {
				me._button_twitter__img.src = me._button_twitter__img.ggNormalSrc;
			} else {
				me._button_twitter__img.src = me._button_twitter__img.ggOverSrc;
			}
		}
		me._button_twitter.ggUpdatePosition=function (useTransition) {
		}
		me._social.appendChild(me._button_twitter);
		el=me._button_facebook=document.createElement('div');
		els=me._button_facebook__img=document.createElement('img');
		els.className='ggskin ggskin_button_facebook';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFI0lEQVR4nNVbzUtrRxQ/c29ugj4XKvGDoKIxkpto8mKQJJr/QHCjOxUFF4XbRaCVgCjShfLwgaBQaZHCw6WbCsVFv1y5cGuXimjalRtfovWVQL6mi5dYNbkfM3fmJv3BgcDMnTO/3z0zc+7MBMAaoLGxsXcIoY8AgLUMIfQxEom8AwBkUd/4wO/3/wI6ZI2az+f72er+U8Hlcr0FRqTVzOVyBa1jZBCDg4NJ4Ez8tZV91heKooyAxcRfm6Iow2Y4UE80CKEixlgw45wVEEIljLFI8ywxAZ/P9wYAcKOQBwAo9wW73e5mro56e3v3oM4hr2d9fX3fciFvt9vv603OqDU3Nz8wJS8IwiczHTo6OrJcBFEUPzEhL4ri37SdyOfz+DmsFkGSJHMidHV1UY'+
			'355eVlXAuxWMxyEcocyBGNRltonWrBagEAAI+Pj7+h0YDaoRYuLy/rIgIRc4RQkdTBwcEBxhjj6+vrhowChFDJEPlkMkmc3tYieHd313AirK6uBl7zrZUKE4XLZy7VQAiplgEAtLe3QyaTIXHFCi84v0hng8HgVyQtOZ1O1bLu7m7Y3NxULU+n0ySumCEaja5olTOb7CphroVEItE4E+Lo6GiAtQA7OzvY6XQ23FwQDoefNlWejweisQ+gPv6fQ28uuL+/h7a2NlLXLIAAKD6HSZFOpwEh9W2HlpYW3l3QhAAA4PF4fuXloPJ2r66uapZLksTLtSb8fv8fAP8NAeLwBzA2BCp4PRS0osJCIFNDIJfLGa4rSRIghJ6sUWBKgP7+fkP1EEKQz+fNuOIGIRQKvad9+Pb2VrdONpulbZ47IpHIBxAEIQ0m1lQ9TE1N1SvZ'+
			'0bWmpqYCmG0klUo1XKJDYggoV4AKRFGEQqGgWt7a2goPD2z3KFnCdCJULBY1y7e3t8264A7TYXRycqI6BEqlUt3DXMtMD4EnFTWSokZa91+D2beA1jzg9XpZuWEOZhEA8P+MAssOOAWhYc5SX0AQBIHZxpzNZlMt01st6gFJkrAQCAR+YNWgHsnp6WmqdicnJ6me00M4HP6p8pvp0sIqM5ydneWaVZ6enjq4CHBxcWFahFpIpVKsRTC3IaIFrRUBQHtVsHA1+bwh4na7f2PZKgDA0NCQZjnGGObm5mqWPT4+aj7HAl6v96+qtlmbURSLRXx+fv5iiGjB4XAwCX/uApCI8BwdHR14ZWVFsw5zAUKhUJCHADabjUoEPfE2Njao+6QoSqJWBHCLgsPDQ2IBdnd3dUVg9vYrCAaDX/MSIZvNEougJ0AmkyHuRzwef3Hx2v'+
			'TxOAkw4Qyey+XA4XCwXhbVj8cBAJLJJLfb2KSdtdvtAABwc3OjWodE1KWlpS+r+lSrYvnuLbfvV9JI0DtgNSJsuY2qijW/UTHne8CkkSDLMszMzNQsM3q2SPxC4/E49TU5o1YoFKgnxMXFRcN+1tbWRojIV9DZ2fkdbxH29/cNCXB8fIwBAA8MDBC1L8vyNRX5Csp3brmKAAC4VCqpkvd4PFRtiqLIZhdGEIR/rBABAHAikcBnZ2d4a2vLVDs2m019l5YGDofDkkhgYZIk8dl/6+np+b7e5PQsEAioJw0sIMsy99WB1tbX16tugurBzJ+muCZLJFBLcoyAOuHBGAuKooRon2eFhYWFL+r+ImRZ/gYsDveJiYnfrWFHALfbPQacic/PzyvWMTKBkZGRc2BEenh4+E+Lu88cQiwW+2C32wugQ1YUxVI0Gv1xb2/PbkXH'+
			'/gVz73OWqncFPgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFI0lEQVR4nNVbzUtrRxQ/c29ugj4XKvGDoKIxkpto8mKQJJr/QHCjOxUFF4XbRaCVgCjShfLwgaBQaZHCw6WbCsVFv1y5cGuXimjalRtfovWVQL6mi5dYNbkfM3fmJv3BgcDMnTO/3z0zc+7MBMAaoLGxsXcIoY8AgLUMIfQxEom8AwBkUd/4wO/3/wI6ZI2az+f72er+U8Hlcr0FRqTVzOVyBa1jZBCDg4NJ4Ez8tZV91heKooyAxcRfm6Iow2Y4UE80CKEixlgw45wVEEIljLFI8ywxAZ/P9wYAcKOQBwAo9wW73e5mro56e3v3oM4hr2d9fX3fciFvt9vv603OqDU3Nz8wJS8IwiczHTo6OrJcBFEUPzEhL4ri37SdyOfz+DmsFkGSJHMidHV1UY'+
			'355eVlXAuxWMxyEcocyBGNRltonWrBagEAAI+Pj7+h0YDaoRYuLy/rIgIRc4RQkdTBwcEBxhjj6+vrhowChFDJEPlkMkmc3tYieHd313AirK6uBl7zrZUKE4XLZy7VQAiplgEAtLe3QyaTIXHFCi84v0hng8HgVyQtOZ1O1bLu7m7Y3NxULU+n0ySumCEaja5olTOb7CphroVEItE4E+Lo6GiAtQA7OzvY6XQ23FwQDoefNlWejweisQ+gPv6fQ28uuL+/h7a2NlLXLIAAKD6HSZFOpwEh9W2HlpYW3l3QhAAA4PF4fuXloPJ2r66uapZLksTLtSb8fv8fAP8NAeLwBzA2BCp4PRS0osJCIFNDIJfLGa4rSRIghJ6sUWBKgP7+fkP1EEKQz+fNuOIGIRQKvad9+Pb2VrdONpulbZ47IpHIBxAEIQ0m1lQ9TE1N1SvZ'+
			'0bWmpqYCmG0klUo1XKJDYggoV4AKRFGEQqGgWt7a2goPD2z3KFnCdCJULBY1y7e3t8264A7TYXRycqI6BEqlUt3DXMtMD4EnFTWSokZa91+D2beA1jzg9XpZuWEOZhEA8P+MAssOOAWhYc5SX0AQBIHZxpzNZlMt01st6gFJkrAQCAR+YNWgHsnp6WmqdicnJ6me00M4HP6p8pvp0sIqM5ydneWaVZ6enjq4CHBxcWFahFpIpVKsRTC3IaIFrRUBQHtVsHA1+bwh4na7f2PZKgDA0NCQZjnGGObm5mqWPT4+aj7HAl6v96+qtlmbURSLRXx+fv5iiGjB4XAwCX/uApCI8BwdHR14ZWVFsw5zAUKhUJCHADabjUoEPfE2Njao+6QoSqJWBHCLgsPDQ2IBdnd3dUVg9vYrCAaDX/MSIZvNEougJ0AmkyHuRzwef3Hx2v'+
			'TxOAkw4Qyey+XA4XCwXhbVj8cBAJLJJLfb2KSdtdvtAABwc3OjWodE1KWlpS+r+lSrYvnuLbfvV9JI0DtgNSJsuY2qijW/UTHne8CkkSDLMszMzNQsM3q2SPxC4/E49TU5o1YoFKgnxMXFRcN+1tbWRojIV9DZ2fkdbxH29/cNCXB8fIwBAA8MDBC1L8vyNRX5Csp3brmKAAC4VCqpkvd4PFRtiqLIZhdGEIR/rBABAHAikcBnZ2d4a2vLVDs2m019l5YGDofDkkhgYZIk8dl/6+np+b7e5PQsEAioJw0sIMsy99WB1tbX16tugurBzJ+muCZLJFBLcoyAOuHBGAuKooRon2eFhYWFL+r+ImRZ/gYsDveJiYnfrWFHALfbPQacic/PzyvWMTKBkZGRc2BEenh4+E+Lu88cQiwW+2C32wugQ1YUxVI0Gv1xb2/PbkXH'+
			'/gVz73OWqncFPgAAAABJRU5ErkJggg==';
		me._button_facebook__img.ggOverSrc=hs;
		el.ggId="button_facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_facebook.onclick=function (e) {
			player.openUrl("<a href=\"tel:+855 23 221 838\">CLICK TO CALL<\/a>","");
		}
		me._button_facebook.onmouseover=function (e) {
			me._button_facebook__img.src=me._button_facebook__img.ggOverSrc;
		}
		me._button_facebook.onmouseout=function (e) {
			me._button_facebook__img.src=me._button_facebook__img.ggNormalSrc;
		}
		me._button_facebook.ggUpdatePosition=function (useTransition) {
		}
		me._social.appendChild(me._button_facebook);
		el=me._button_linkin=document.createElement('div');
		els=me._button_linkin__img=document.createElement('img');
		els.className='ggskin ggskin_button_linkin';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADUklEQVR4nO2by04bMRSGv4EREikRypoH6JJn6IVWoopgm1air9FVyyKULUuWfQYegUUlpKwQ0NAnQGKDgBBFiLqLSUIYZjJj+9hxgF8yl5nx8fmPj4/v4A9fgTagClIb2PColzNsU0y2bNpypWQkLK8CdIRlpvEKuJESNiMkZ4WkplyTp1+GAt5JCLP1gAXgSkIRSx2MDW9jgA6Jy4eADokhtGFigAj4Z1KYB2jz0Y0Ba4RLHpLYsOpKeAu5bs11OpAm/zcAUrrpVIr8NNW8uCesBUDCNo2NCeOiZsjRXhe5PMcZQDlQZJLI5BrnfKw1slpeXs59p5QiiqLCZ7q4u7vj6OhIJ8s1JQdLC5RsX+12W00alUpFJx48GrlmVUNp11cqjFai6U0PPk6PBF'+
			'estQkfb0f/SZtOq0qn1ANghPeoB4Qys/OB+cEfowYQW8xotVrEccz6+rqUSGkMV5RGfUfbn7OaQJY7um4qhl1qBPcesC2mTQb29/ddijfFJtwb4JvLks7OzlyKN8UPuG8CRj465U0AIJJaFR5CKUWj0SCOY2q1WjBdZR4ikh2bXyaZQyFn4QFfIpKtqNcmuV0Y4PDwkN3dXRYXF2k2m8zOzhbmsTDACVgsNmSh6Lu89zs7O7nlnJ+fj50Q2XAIwgB7e3uFZV1eXjoxQDSwgglMegGbdYC8JmcjU7wXsEG9Xqder3stM29FyDvStZtVq9Vqlasr2a3IIDyg1+s9era0tPToWacjv/kcRAzIknNxcUGtVjMusyyCNYDOt7ZBUGwLaQpxMgP8nLQWE8SW99lgYE1AfjY4bXgxQP/3c4wDD1aEwNOiaEAxIBr+GMjWlZCn'+
			'uG9IrApDcgLzuWC4CfSyNZZ68d5am/AxdnMUNLwgBA+4vb1lbm5OJ8vY7XHQOHJqe8rDFt1uV5d8qQMSkBwneWpB8Rqoph8++0NSRT78VIyQy7NoLvBJWJFJ4KOtgAPsNh4mmX7bkh/gNAAyuumPFPkBpskTxGo+jdUAyBWlDzqETEcyyjCfazi/MjNakI8rcmVxjWFl2o5lfVyULKND1zSz7ZrgDYkRRS4xauJNv2xj8iB/dXYewWutObCqcZ/YRC6yf/eruht8Bo4pJnsMNHwp9R9ZaunG9SsEBAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADUklEQVR4nO2by04bMRSGv4EREikRypoH6JJn6IVWoopgm1air9FVyyKULUuWfQYegUUlpKwQ0NAnQGKDgBBFiLqLSUIYZjJj+9hxgF8yl5nx8fmPj4/v4A9fgTagClIb2PColzNsU0y2bNpypWQkLK8CdIRlpvEKuJESNiMkZ4WkplyTp1+GAt5JCLP1gAXgSkIRSx2MDW9jgA6Jy4eADokhtGFigAj4Z1KYB2jz0Y0Ba4RLHpLYsOpKeAu5bs11OpAm/zcAUrrpVIr8NNW8uCesBUDCNo2NCeOiZsjRXhe5PMcZQDlQZJLI5BrnfKw1slpeXs59p5QiiqLCZ7q4u7vj6OhIJ8s1JQdLC5RsX+12W00alUpFJx48GrlmVUNp11cqjFai6U0PPk6PBF'+
			'estQkfb0f/SZtOq0qn1ANghPeoB4Qys/OB+cEfowYQW8xotVrEccz6+rqUSGkMV5RGfUfbn7OaQJY7um4qhl1qBPcesC2mTQb29/ddijfFJtwb4JvLks7OzlyKN8UPuG8CRj465U0AIJJaFR5CKUWj0SCOY2q1WjBdZR4ikh2bXyaZQyFn4QFfIpKtqNcmuV0Y4PDwkN3dXRYXF2k2m8zOzhbmsTDACVgsNmSh6Lu89zs7O7nlnJ+fj50Q2XAIwgB7e3uFZV1eXjoxQDSwgglMegGbdYC8JmcjU7wXsEG9Xqder3stM29FyDvStZtVq9Vqlasr2a3IIDyg1+s9era0tPToWacjv/kcRAzIknNxcUGtVjMusyyCNYDOt7ZBUGwLaQpxMgP8nLQWE8SW99lgYE1AfjY4bXgxQP/3c4wDD1aEwNOiaEAxIBr+GMjWlZCn'+
			'uG9IrApDcgLzuWC4CfSyNZZ68d5am/AxdnMUNLwgBA+4vb1lbm5OJ8vY7XHQOHJqe8rDFt1uV5d8qQMSkBwneWpB8Rqoph8++0NSRT78VIyQy7NoLvBJWJFJ4KOtgAPsNh4mmX7bkh/gNAAyuumPFPkBpskTxGo+jdUAyBWlDzqETEcyyjCfazi/MjNakI8rcmVxjWFl2o5lfVyULKND1zSz7ZrgDYkRRS4xauJNv2xj8iB/dXYewWutObCqcZ/YRC6yf/eruht8Bo4pJnsMNHwp9R9ZaunG9SsEBAAAAABJRU5ErkJggg==';
		me._button_linkin__img.ggOverSrc=hs;
		el.ggId="button_Linkin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_linkin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_linkin.onclick=function (e) {
			player.openUrl("https:\/\/www.linkedin.com\/company\/cmedcc\/jobs\/","");
		}
		me._button_linkin.onmouseover=function (e) {
			me._button_linkin__img.src=me._button_linkin__img.ggOverSrc;
		}
		me._button_linkin.onmouseout=function (e) {
			me._button_linkin__img.src=me._button_linkin__img.ggNormalSrc;
		}
		me._button_linkin.ggUpdatePosition=function (useTransition) {
		}
		me._social.appendChild(me._button_linkin);
		el=me._button_website=document.createElement('div');
		els=me._button_website__img=document.createElement('img');
		els.className='ggskin ggskin_button_website';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_website__img.ggOverSrc=hs;
		el.ggId="button_Website";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_website.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_website.onclick=function (e) {
			player.openUrl("https:\/\/cmedgp.com\/","");
		}
		me._button_website.onmouseover=function (e) {
			me._button_website__img.src=me._button_website__img.ggOverSrc;
		}
		me._button_website.onmouseout=function (e) {
			me._button_website__img.src=me._button_website__img.ggNormalSrc;
		}
		me._button_website.ggUpdatePosition=function (useTransition) {
		}
		me._social.appendChild(me._button_website);
		me.divSkin.appendChild(me._social);
		el=me._cmed=document.createElement('div');
		el.ggId="CMED";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 42px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 103px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cmed.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cmed.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_cmed=document.createElement('div');
		els=me._button_cmed__img=document.createElement('img');
		els.className='ggskin ggskin_button_cmed';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._button_cmed__img.ggOverSrc=hs;
		hs='data:image/png;base64,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';
		me._button_cmed__img.ggDownSrc=hs;
		el.ggId="button_CMED";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_cmed.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_cmed.onmouseover=function (e) {
			me._button_cmed__img.src=me._button_cmed__img.ggOverSrc;
		}
		me._button_cmed.onmouseout=function (e) {
			me._button_cmed__img.src=me._button_cmed__img.ggNormalSrc;
			me.elementMouseDown['button_cmed']=false;
		}
		me._button_cmed.onmousedown=function (e) {
			me._button_cmed__img.src=me._button_cmed__img.ggDownSrc;
			me.elementMouseDown['button_cmed']=true;
		}
		me._button_cmed.onmouseup=function (e) {
			if (skin.player.getIsMobile()) {
				me._button_cmed__img.src = me._button_cmed__img.ggNormalSrc;
			} else {
				me._button_cmed__img.src = me._button_cmed__img.ggOverSrc;
			}
			me.elementMouseDown['button_cmed']=false;
		}
		me._button_cmed.ontouchend=function (e) {
			me.elementMouseDown['button_cmed']=false;
		}
		me._button_cmed.ggUpdatePosition=function (useTransition) {
		}
		me._cmed.appendChild(me._button_cmed);
		me.divSkin.appendChild(me._cmed);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(68,68,68,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 119px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_scrollarea=document.createElement('div');
		els=me._dropdown_scrollarea__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 170px;';
		hs+="";
		els.setAttribute('style',hs);
		me._dropdown_scrollarea.ggScrollByX = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosX = (me._dropdown_scrollarea__horScrollFg.offsetLeft + diffX);
			me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
			me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
		}
		me._dropdown_scrollarea.ggScrollByXSmooth = function(diffX) {
			if(!me._dropdown_scrollarea.ggHorScrollVisible || diffX == 0 || me._dropdown_scrollarea.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._dropdown_scrollarea.ggScrollPosX >= me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.min(me._dropdown_scrollarea.ggScrollPosX, me._dropdown_scrollarea__horScrollBg.offsetWidth - me._dropdown_scrollarea__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._dropdown_scrollarea.ggScrollPosX <= 0)) {
					me._dropdown_scrollarea.ggScrollPosX = Math.max(me._dropdown_scrollarea.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__horScrollFg.style.left = me._dropdown_scrollarea.ggScrollPosX + 'px';
			me._dropdown_scrollarea__content.style.left = -(Math.round(me._dropdown_scrollarea.ggScrollPosX / me._dropdown_scrollarea.ggHPercentVisible)) + me._dropdown_scrollarea.ggContentLeftOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosXPercent = (me._dropdown_scrollarea__horScrollFg.offsetLeft / me._dropdown_scrollarea__horScrollBg.offsetWidth);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollByY = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			me._dropdown_scrollarea.ggScrollPosY = (me._dropdown_scrollarea__vertScrollFg.offsetTop + diffY);
			me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
			me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
		}
		me._dropdown_scrollarea.ggScrollByYSmooth = function(diffY) {
			if(!me._dropdown_scrollarea.ggVertScrollVisible || diffY == 0 || me._dropdown_scrollarea.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._dropdown_scrollarea.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._dropdown_scrollarea.ggScrollPosY >= me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._dropdown_scrollarea.ggScrollPosY <= 0)) {
					me._dropdown_scrollarea.ggScrollPosY = Math.max(me._dropdown_scrollarea.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
			me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + me._dropdown_scrollarea.ggContentTopOffset + 'px';
			me._dropdown_scrollarea.ggScrollPosYPercent = (me._dropdown_scrollarea__vertScrollFg.offsetTop / me._dropdown_scrollarea__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._dropdown_scrollarea.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._dropdown_scrollarea.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._dropdown_scrollarea.offsetWidth - (me._dropdown_scrollarea.ggVertScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggHPercentVisible);
					me._dropdown_scrollarea.ggScrollByXSmooth(diffX);
				}
			}
			if (me._dropdown_scrollarea.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._dropdown_scrollarea.offsetHeight - (me._dropdown_scrollarea.ggHorScrollVisible ? 15 : 0))) * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastX = t[0].clientX;
			me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
			me._dropdown_scrollarea__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaX *= 0.65;
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByX(-me._dropdown_scrollarea.ggDragInertiaX);
					me._dropdown_scrollarea.ggScrollByY(-me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaX) < 1.0 && Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._dropdown_scrollarea__content.ontouchend = null;
				me._dropdown_scrollarea__content.ontouchmove = null;
			}
			me._dropdown_scrollarea__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._dropdown_scrollarea.ggDragLastX;
				var diffY = t[0].clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaX = diffX;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastX = t[0].clientX;
				me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
				me._dropdown_scrollarea.ggScrollByX(-diffX);
				me._dropdown_scrollarea.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._dropdown_scrollarea__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._dropdown_scrollarea__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 115px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._dropdown_scrollarea.ggScrollPosY = 0;
		me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._dropdown_scrollarea.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = e.clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._dropdown_scrollarea.ggDragInertiaY *= 0.65;
					me._dropdown_scrollarea.ggScrollByY(me._dropdown_scrollarea.ggDragInertiaY);
					if (Math.abs(me._dropdown_scrollarea.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = t[0].clientY - me._dropdown_scrollarea.ggDragLastY;
				me._dropdown_scrollarea.ggDragInertiaY = diffY;
				me._dropdown_scrollarea.ggDragLastY = t[0].clientY;
				me._dropdown_scrollarea.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if (e.offsetY < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect();
			var diffY = me._dropdown_scrollarea.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._dropdown_scrollarea.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._dropdown_scrollarea.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._dropdown_scrollarea.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._dropdown_scrollarea__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Dropdown Scrollarea";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight - 15) || (!me._dropdown_scrollarea.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'inherit';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'inherit';
					me._dropdown_scrollarea.ggVertScrollVisible = true;
				} else {
					me._dropdown_scrollarea__vertScrollBg.style.visibility = 'hidden';
					me._dropdown_scrollarea__vertScrollFg.style.visibility = 'hidden';
					me._dropdown_scrollarea.ggVertScrollVisible = false;
				}
				if(me._dropdown_scrollarea.ggVertScrollVisible) {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth - 15;
					if (me._dropdown_scrollarea.ggHorScrollVisible) {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight - 15;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height - me._dropdown_scrollarea__vertScrollBg.getBoundingClientRect().width;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'inherit';
					} else {
						me._dropdown_scrollarea.ggAvailableHeight = me._dropdown_scrollarea.offsetHeight;
						me._dropdown_scrollarea.ggAvailableHeightWithScale = me._dropdown_scrollarea.getBoundingClientRect().height;
						me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
					}
					me._dropdown_scrollarea__vertScrollBg.style.height = me._dropdown_scrollarea.ggAvailableHeight + 'px';
					me._dropdown_scrollarea.ggVPercentVisible = contentHeight != 0 ? me._dropdown_scrollarea.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._dropdown_scrollarea.ggVPercentVisible > 1.0) me._dropdown_scrollarea.ggVPercentVisible = 1.0;
					me._dropdown_scrollarea.ggScrollHeight =  Math.round(me._dropdown_scrollarea__vertScrollBg.offsetHeight * me._dropdown_scrollarea.ggVPercentVisible);
					me._dropdown_scrollarea__vertScrollFg.style.height = me._dropdown_scrollarea.ggScrollHeight + 'px';
					me._dropdown_scrollarea.ggScrollPosY = me._dropdown_scrollarea.ggScrollPosYPercent * me._dropdown_scrollarea.ggAvailableHeight;
					me._dropdown_scrollarea.ggScrollPosY = Math.min(me._dropdown_scrollarea.ggScrollPosY, me._dropdown_scrollarea__vertScrollBg.offsetHeight - me._dropdown_scrollarea__vertScrollFg.offsetHeight);
					me._dropdown_scrollarea__vertScrollFg.style.top = me._dropdown_scrollarea.ggScrollPosY + 'px';
					if (me._dropdown_scrollarea.ggVPercentVisible < 1.0) {
						me._dropdown_scrollarea__content.style.top = -(Math.round(me._dropdown_scrollarea.ggScrollPosY / me._dropdown_scrollarea.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._dropdown_scrollarea.ggAvailableWidth = me._dropdown_scrollarea.offsetWidth;
					me._dropdown_scrollarea.ggScrollPosY = 0;
					me._dropdown_scrollarea.ggScrollPosYPercent = 0.0;
					me._dropdown_scrollarea__content.style.top = this.ggContentTopOffset + 'px';
					me._dropdown_scrollarea__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._dropdown_scrollarea.ggHorScrollVisible || vertScrollWasVisible != me._dropdown_scrollarea.ggVertScrollVisible) {
					me.updateSize(me._dropdown_scrollarea);
					me._dropdown_scrollarea.ggUpdatePosition();
				}
			}
		}
		el=me._dropdown_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 169;
		el.ggHeight = 24;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._dropdown_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_active = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_menu_text && me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor) {
						me._dropdown_cloner.ggInstances[i]._dropdown_menu_text.logicBlock_backgroundcolor();
					}
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		me._dropdown_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._dropdown_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._dropdown_cloner.ggInstances.length; i++) {
					if (me._dropdown_cloner.ggInstances[i]._dropdown_checkmark && me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha) {
						me._dropdown_cloner.ggInstances[i]._dropdown_checkmark.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			var el=me._dropdown_cloner;
			var curNumCols = 0;
			curNumCols = me._dropdown_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._dropdown_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._dropdown_cloner.ggHeight) + 'px';
				parameter.left=(column * me._dropdown_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._dropdown_cloner.callChildLogicBlocks_mouseover();
			me._dropdown_cloner.callChildLogicBlocks_active();
			me._dropdown_cloner.callChildLogicBlocks_changevisitednodes();
			me._dropdown_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._dropdown_cloner.parentNode.classList.contains('ggskin_subelement') && me._dropdown_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._dropdown_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Dropdown Cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 169px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._dropdown_cloner.ggUpdatePosition=function (useTransition) {
				me._dropdown_cloner.ggUpdate();
		}
		me._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		me._dropdown_scrollarea__content.appendChild(me._dropdown_cloner);
		me._dropdown_background.appendChild(me._dropdown_scrollarea);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(68,68,68,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(0,0,0,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 166px;';
		hs+='height: 20px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBpZD'+
			'0iTGF5ZXJfMSIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxwb2x5Z29uIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIwLDAgMTAsMjAgMjAsMCAiLz4KPC9zdmc+Cg==';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBpZD'+
			'0iTGF5ZXJfMSIgd2lkdGg9IjIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxwb2x5Z29uIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgcG9pbnRzPSIyMCwyMCAxMCwwIDAsMjAgIi8+Cjwvc3ZnPgo=';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 175px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._middle_button=document.createElement('div');
		el.ggId="Middle Button";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 196px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._middle_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._middle_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggDx=81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjIuMiIgZmlsbD0iIzAwMDAwMCIgd2lkdGg9IjMyLjEiIHg9Ii0yMDYuMiIgeT0iMzk3Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4z'+
			'LDEuOS00LjIsNC4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC'+
			'0wLjYsMC44LTAuNmMwLjQsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4z'+
			'LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPH'+
			'BhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGhlaWdodD0iMjQuNiIgZmlsbD0iIzAwMDAwMCIgd2lkdGg9IjM1LjciIHg9Ii0yMDkuNiIgeT0iMzk3Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3Yt'+
			'MjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC'+
			'40LTAuNywwLjgtMC43YzAuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01'+
			'LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNzIuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAu'+
			'M2wtMy45LTUuNGMwLDAtMTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLj'+
			'MsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQs'+
			'Mi4xbDEuNCwxLjljMC41LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC'+
			'40LDQyMi43LTE0MC4zLDQyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00'+
			'LjMtNmMtMC4xLDAuMS0xOS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi'+
			'42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwy'+
			'LjRsMS41LDIuMWMwLjUsMC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1Lj'+
			'UtMTM2LjUsNDI3LjYtMTM5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._middle_button.appendChild(me._button_fullscreen);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=-66;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiLz4KIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYj'+
			'eGQ7JiN4YTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6Ii8+CiA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsm'+
			'I3hhOyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTcwLjZjLTAuNCwwLTAuOC0wLjItMS4yLTAuNnMtMC42LTAuOC0wLjYtMS40di0xNy4yJiN4ZDsmI3hhOyYjeDk7YzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggDx=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjFjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41'+
			'LTAuNy0wLjUtMS4zdi0yMi4xaC0yMi4zYy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQxLjYsMzg5LjMtMTQxLjYsNDA0LjctMTQxLjYsNDA0Ljd6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzODcuNW'+
			'gyMi4zYzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjdjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMyww'+
			'LjUtMS44LDEuNi0xLjhoMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDEuNiwwLjUsMS42LDEuOFYzODcuNXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNmMwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42'+
			'LTEuNHYtMjQuNmgtMjQuOGMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTImI3hkOyYjeGE7JiN4OTsmI3g5O2gyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS'+
			'40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0yaDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwyVjM4Ni40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggDx=-16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_zoom.appendChild(me._zoomin);
		me._middle_button.appendChild(me._button_zoom);
		el=me._button_auto_rotate0=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate0.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._stop_rotate_image0=document.createElement('div');
		els=me._stop_rotate_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQt'+
			'NC40Qy0xOTYuOSwzNzItMTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMi'+
			'w0MzIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNj'+
			'NS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgs'+
			'MzYxLjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2'+
			'gtNy43aC0wLjVjMC03LjctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcs'+
			'MTQuOCw3LjEsMjAuNWw2LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi'+
			'0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYt'+
			'My41LTMuOC00LjQtNC45Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC'+
			'0wLjZILTIyMS45eiBNLTIxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3'+
			'LjItNy4yYzQuNCwzLDkuOCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMm'+
			'M0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40'+
			'bDczLjMtNzMuM0MtMTQwLjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRk'+
			'ZGRkYiIGQ9Ik0tMTI2LjksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIvPgogIC'+
			'A8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image0.style[domTransition]='';
				if (me._stop_rotate_image0.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image0.style.visibility=(Number(me._stop_rotate_image0.style.opacity)>0||!me._stop_rotate_image0.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image0.ggVisible=true;
				}
				else {
					me._stop_rotate_image0.style.visibility="hidden";
					me._stop_rotate_image0.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image0.onmouseover=function (e) {
			me._stop_rotate_image0__img.style.visibility='hidden';
			me._stop_rotate_image0__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image0.onmouseout=function (e) {
			me._stop_rotate_image0__img.style.visibility='inherit';
			me._stop_rotate_image0__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_auto_rotate0.appendChild(me._stop_rotate_image0);
		el=me._start_rotate_image0=document.createElement('div');
		els=me._start_rotate_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZj'+
			'MC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LD'+
			'M5N3ogTS0xNDQuNSw0MTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBj'+
			'MTguNywwLDM0LDE1LjIsMzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC42LTAuNi0xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0x'+
			'NS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4Lj'+
			'ItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiByPSI0IiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAu'+
			'Ni0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC'+
			'40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Yy0wLjctMC44LTAuNi0yLDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy'+
			'43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOG'+
			'MwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgY3k9IjM5NyIgZmlsbD0iI0ZGRkZGRiIgcj0iNC40IiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image0.style[domTransition]='';
				if (me._start_rotate_image0.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image0.style.visibility="hidden";
					me._start_rotate_image0.ggVisible=false;
				}
				else {
					me._start_rotate_image0.style.visibility=(Number(me._start_rotate_image0.style.opacity)>0||!me._start_rotate_image0.style.opacity)?'inherit':'hidden';
					me._start_rotate_image0.ggVisible=true;
				}
			}
		}
		me._start_rotate_image0.onmouseover=function (e) {
			me._start_rotate_image0__img.style.visibility='hidden';
			me._start_rotate_image0__imgo.style.visibility='inherit';
		}
		me._start_rotate_image0.onmouseout=function (e) {
			me._start_rotate_image0__img.style.visibility='inherit';
			me._start_rotate_image0__imgo.style.visibility='hidden';
		}
		me._start_rotate_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_auto_rotate0.appendChild(me._start_rotate_image0);
		me._middle_button.appendChild(me._button_auto_rotate0);
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggDx=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._projection_buttons.onclick=function (e) {
			if (
				(
					((player.getProjection() == 4))
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					((player.getProjection() == 9))
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					((player.getProjection() == 12))
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projection_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._rectilinear=document.createElement('div');
		els=me._rectilinear__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTguOCw0MC4xYy04LjcsNC4yLTIxLDYuNi0zMy44LDYuNnMtMjUuMi0yLjQtMzMuOC02LjZjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djQ1LjhjMCwwLjgsMC40LDEuNSwxLjEsMS45YzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMywxLjUsMC4zLDIuMi0wLjFjMC43LT'+
			'AuNCwxLjEtMS4xLDEuMS0xLjlWNDIuMWMwLTAuOC0wLjQtMS41LTEuMS0xLjlDMTAwLjMsMzkuOCw5OS41LDM5LjgsOTguOCw0MC4xeiBNMzIuNCw4MC45Vjc0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNy41LTAuOSwxNC45LTEuNSwyMi4yLTEuOGMtMC4xLDAuNC0wLjUsMC44LTEuNiwxLjNjLTEuNiwwLjctNC4zLDEuNi03LjMsMi42QzQxLjksNzcuNSwzNy4yLDc5LjEsMzIuNCw4MC45eiBNOTcuNiw4NC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODguNiw4MC45LDc3LDc4LjgsNjUsNzguOGMtNS45LDAtMTEuOCwwLjUtMTcuMywxLjRjMy0xLDUuNC0xLjgsNy4xLTIuNWMzLTEuMyw0LjktMy40LDUu'+
			'MS01LjdjMS42LDAsMywwLDQuNS0wLjFsMCwxbDIuNiwwbDAtMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEwLjIsMC4xLDIwLjQsMC43LDMwLjUsMlY4NC40eiBNOTcuNiw2OS41Yy0xLjEtMC4xLTIuMi0wLjMtMy4zLTAuNGMtMC4xLTQuMiwwLjEtNywwLTExLjhjLTMuNC0yLjctNS4xLTMuOS04LjctNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjQsMy40LTUsNC42LTguNCw3LjNjMCwwLjYsMCw4LjUsMCw5LjJjLTMuMy0wLjEtNi43LTAuMy0xMC4xLTAuM2wwLTIuOWMzLjQtMC40LDUuOS0yLjQsNS44LTQuOEM3Mi44LDU3LDY5LjUsNTUsNjUuNiw1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00LDAtNy'+
			'4yLDItNy4yLDQuOGMwLDIuNCwyLjYsNC40LDYuMSw0LjhsMCwzYy0xMC41LDAtMjEuMSwwLjctMzIsMlY0NS42YzguOSwzLjYsMjAuNiw1LjYsMzIuNiw1LjZjMTIsMCwyMy42LTIsMzIuNi01LjZWNjkuNXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFTMTIxLjEsOTYsMTIxLjEsNjVDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTEwMi4xLDg3LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMC44LTAuNCwxLjUtMS4xLDEuOWMtMC43LDAuNC0xLjUsMC41LTIuMiwwLjFjLTgu'+
			'Ny00LjItMjEtNi42LTMzLjgtNi42cy0yNS4yLDIuNC0zMy44LDYuNmMtMC4zLDAuMi0wLjYsMC4yLTEsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOVY0Mi4xYzAtMC44LDAuNC0xLjUsMS4xLTEuOWMwLjctMC40LDEuNS0wLjUsMi4yLTAuMWM4LjcsNC4yLDIxLDYuNiwzMy44LDYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTIuOCwwLDI1LjItMi40LDMzLjgtNi42YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45QzEwMi4xLDQyLjEsMTAyLjEsODcuOSwxMDIuMS'+
			'w4Ny45eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNTQuNyw3Mi4zQzQ3LjQsNzIuNSw0MCw3My4xLDMyLjQsNzR2Ni45YzQuNy0xLjgsOS40LTMuNCwxMy4zLTQuN2MzLjEtMSw1LjctMS45LDcuMy0yLjZDNTQuMiw3My4xLDU0LjYsNzIuNiw1NC43LDcyLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMzIuNCw0NS42djIzLjljMTAuOS0xLjMsMjEuNS0xLjksMzItMmwwLTNjLTMuNC0wLjQtNi0yLjQtNi4xLTQuOGMwLTIuNywzLjItNC43LDcuMi00LjhjNCwwLDcuMywyLDcuNCw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYj'+
			'eDk7YzAuMSwyLjQtMi40LDQuNC01LjgsNC44bDAsMi45YzMuMywwLDYuOCwwLjEsMTAuMSwwLjNjMC0wLjgsMC04LjYsMC05LjJjMy40LTIuNyw1LTMuOSw4LjQtNy4zYzMuNiwyLjEsNS4zLDMuMiw4LjcsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xLDQuOC0wLjEsNy42LDAsMTEuOGMxLjEsMC4xLDIuMiwwLjMsMy4zLDAuNFY0NS42Qzg4LjYsNDkuMSw3Nyw1MS4yLDY1LDUxLjJDNTMsNTEuMiw0MS40LDQ5LjEsMzIuNCw0NS42eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjcuMSw3M2wtMi42LDBsMC0xYy0xLjUsMC0zLDAtNC41LDAuMWMtMC4yLDIuMy0yLjEsNC40LT'+
			'UuMSw1LjdjLTEuNywwLjctNC4xLDEuNS03LjEsMi41YzUuNS0wLjksMTEuMy0xLjQsMTcuMy0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEyLDAsMjMuNiwyLDMyLjYsNS42Vjc0Yy0xMC0xLjMtMjAuMy0xLjktMzAuNS0yTDY3LjEsNzN6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._rectilinear__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._rectilinear__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTAyLjYwMiwzNy4zMTVjLTkuNjIsNC42NDUtMjMuMzI1LDcuMzA5LTM3LjYwMyw3LjMwOWMtMTQuMjc4LDAtMjcuOTgyLTIuNjY0LTM3LjYwMS03LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc3NS0wLjM3NS0xLjY4Ny0wLjMyNC0yLjQxNiwwLjEzNWMtMC43MjksMC40NTctMS4xNzEsMS4yNTYtMS4xNzEsMi4xMTd2NTAuODY1YzAsMC44NTksMC40NDIsMS42NiwxLjE3MSwyLjExNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDA0LDAuMjU0LDAuODY2LDAuMzgzLDEuMzI5LDAuMzgzYzAuMzcxLDAsMC43NDItMC'+
			'4wODIsMS4wODctMC4yNWM5LjYxOS00LjY0MywyMy4zMjQtNy4zMDUsMzcuNjAxLTcuMzA1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMTQuMjc1LDAsMjcuOTgxLDIuNjYyLDM3LjYwMyw3LjMwN2MwLjc3NCwwLjM3MywxLjY4OCwwLjMyMiwyLjQxNi0wLjEzNXMxLjE3MS0xLjI1OCwxLjE3MS0yLjExN1YzOS41NjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuODYxLTAuNDQyLTEuNjYtMS4xNzEtMi4xMTdDMTA0LjI4OSwzNi45OTEsMTAzLjM3NiwzNi45NCwxMDIuNjAyLDM3LjMxNXogTTI4LjgxMiw4Mi42NzFWNzUuMDQmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LjM2OC0wLjk4OCwxNi41OTUtMS42NDgs'+
			'MjQuNzE5LTEuOTc1Yy0wLjEwNCwwLjQxOC0wLjUxNywwLjkyOC0xLjc3NywxLjQ5NmMtMS43NTksMC43OTMtNC43MzEsMS43My04LjE0NywyLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzM5LjI3MSw3OC44ODIsMzQuMDQ3LDgwLjYzMiwyOC44MTIsODIuNjcxeiBNMTAxLjE4OCw4Ni42MDNjLTkuOTI2LTMuOTgtMjIuODU4LTYuMjI1LTM2LjE4OS02LjIyNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjYwMiwwLTEzLjEwNCwwLjU1My0xOS4xOTMsMS41OTJjMy4zNi0xLjEyMyw2LjAzOC0yLjAyNSw3Ljg3NS0yLjc5NWMzLjM4OC0xLjQxNiw1LjQ4OS0zLjc1Niw1LjY5NS02LjI5MSYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7YzEuNzI3LTAuMDM3LDMuMjkyLTAuMDU1LDUuMDExLTAuMDYxbDAuMDE2LDEuMDc4bDIuOTQ1LTAuMDEybC0wLjAxNC0xLjA2NmMxMS4zMTIsMC4wOCwyMi42OTcsMC44MTYsMzMuODU0LDIuMjExVjg2LjYwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTAxLjE4OCw3MC4wMDljLTEuMjI1LTAuMTQ4LTIuNDQ4LTAuMzA3LTMuNjczLTAuNDQxYy0wLjA4OC00LjcyMSwwLjEtNy43NzUsMC0xMy4xNjZjLTMuNzQyLTMuMDM1LTUuNzA3LTQuMjg1LTkuNjU3LTYuNjMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMuNzM3LDMuNzctNS41MDksNS4xMzUtOS4zNCw4LjFjMC4wMjYsMC42ODks'+
			'MC4wMjYsOS4zOTgsMC4wMjYsMTAuMjM0Yy0zLjY5MS0wLjE2Mi03LjQ4Ni0wLjI4My0xMS4yMDMtMC4zMDdsMC4wMTktMy4yNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNzY5LTAuNDc3LDYuNTMyLTIuNzAzLDYuNDQxLTUuMzg3Yy0wLjEwMy0zLjAyNy0zLjc1LTUuMjU0LTguMTgxLTUuMjI3Yy00LjQzMiwwLjAyNy04LjAxNSwyLjI3NS03Ljk4OSw1LjI4MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDIyLDIuNjY2LDIuOTI3LDQuODY5LDYuNzI4LDUuMzM2bDAuMDI5LDMuMjg3Yy0xMS42NywwLjA0My0yMy40NTYsMC43NjItMzUuNTc3LDIuMTc2VjQzLjM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yz'+
			'kuOTIzLDMuOTgsMjIuODU0LDYuMjI3LDM2LjE4OCw2LjIyN2MxMy4zMzIsMCwyNi4yNjUtMi4yNDYsMzYuMTg5LTYuMjI3VjcwLjAwOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY0Ljk5OSwyLjYzOGMtMzQuNDQxLDAtNjIuMzYxLDI3LjkyLTYyLjM2MSw2Mi4zNjNjMCwzNC40NDEsMjcuOTIsNjIuMzYxLDYyLjM2MSw2Mi4zNjFzNjIuMzYzLTI3LjkyLDYyLjM2My02Mi4zNjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEyNy4zNjIsMzAuNTU4LDk5LjQ0LDIuNjM4LDY0Ljk5OSwyLjYzOHogTTEwNi4xODgsOTAuNDMzYzAsMC44NTktMC40NDIsMS42Ni0xLjE3MSwy'+
			'LjExN3MtMS42NDIsMC41MDgtMi40MTYsMC4xMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy05LjYyMS00LjY0NS0yMy4zMjctNy4zMDctMzcuNjAzLTcuMzA3Yy0xNC4yNzYsMC0yNy45ODEsMi42NjItMzcuNjAxLDcuMzA1Yy0wLjM0NSwwLjE2OC0wLjcxNiwwLjI1LTEuMDg3LDAuMjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ2MywwLTAuOTI1LTAuMTI5LTEuMzI5LTAuMzgzYy0wLjcyOS0wLjQ1Ny0xLjE3MS0xLjI1OC0xLjE3MS0yLjExN1YzOS41NjdjMC0wLjg2MSwwLjQ0Mi0xLjY2LDEuMTcxLTIuMTE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjcyOS0wLjQ1OSwxLj'+
			'Y0MS0wLjUxLDIuNDE2LTAuMTM1YzkuNjE4LDQuNjQ1LDIzLjMyMiw3LjMwOSwzNy42MDEsNy4zMDljMTQuMjc3LDAsMjcuOTgyLTIuNjY0LDM3LjYwMy03LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43NzQtMC4zNzUsMS42ODgtMC4zMjQsMi40MTYsMC4xMzVjMC43MjksMC40NTcsMS4xNzEsMS4yNTYsMS4xNzEsMi4xMTdWOTAuNDMzeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNTMuNTMsNzMuMDY1Yy04LjEyNCwwLjMyNi0xNi4zNTEsMC45ODYtMjQuNzE5LDEuOTc1djcuNjMxYzUuMjM1LTIuMDM5LDEwLjQ1OS0zLjc4OSwxNC43OTQtNS4yMzYmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7YzMuNDE2LTEuMTQzLDYuMzg5LTIuMDgsOC4xNDctMi44NzNDNTMuMDE0LDczLjk5Myw1My40MjYsNzMuNDgzLDUzLjUzLDczLjA2NXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTI4LjgxMiw0My4zOTd2MjYuNjA1YzEyLjEyMS0xLjQxNCwyMy45MDctMi4xMzMsMzUuNTc3LTIuMTc2bC0wLjAyOS0zLjI4N2MtMy44MDEtMC40NjctNi43MDUtMi42Ny02LjcyOC01LjMzNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDI1LTMuMDA2LDMuNTU4LTUuMjU0LDcuOTg5LTUuMjgxYzQuNDMxLTAuMDI3LDguMDc4LDIuMTk5LDguMTgxLDUuMjI3YzAuMDkxLDIuNj'+
			'g0LTIuNjczLDQuOTEtNi40NDEsNS4zODdsLTAuMDE5LDMuMjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNzE3LDAuMDIzLDcuNTEyLDAuMTQ1LDExLjIwMywwLjMwN2MwLTAuODM2LDAtOS41NDUtMC4wMjYtMTAuMjM0YzMuODMxLTIuOTY1LDUuNjAzLTQuMzMsOS4zNC04LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuOTUsMi4zNDgsNS45MTUsMy41OTgsOS42NTcsNi42MzNjMC4xLDUuMzkxLTAuMDg4LDguNDQ1LDAsMTMuMTY2YzEuMjI1LDAuMTM1LDIuNDQ4LDAuMjkzLDMuNjczLDAuNDQxVjQzLjM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTkuOTI1LDMuOTgtMjIuODU3'+
			'LDYuMjI3LTM2LjE4OSw2LjIyN0M1MS42NjYsNDkuNjI0LDM4LjczNCw0Ny4zNzgsMjguODEyLDQzLjM5N3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY3LjM0OCw3My44OWwtMi45NDUsMC4wMTJsLTAuMDE2LTEuMDc4Yy0xLjcxOSwwLjAwNi0zLjI4NCwwLjAyMy01LjAxMSwwLjA2MWMtMC4yMDYsMi41MzUtMi4zMDgsNC44NzUtNS42OTUsNi4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzNywwLjc3LTQuNTE1LDEuNjcyLTcuODc1LDIuNzk1YzYuMDg5LTEuMDM5LDEyLjU5Mi0xLjU5MiwxOS4xOTMtMS41OTJjMTMuMzMxLDAsMjYuMjY0LDIuMjQ0LDM2LjE4OSw2Lj'+
			'IyNVY3NS4wMzQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xMS4xNTctMS4zOTUtMjIuNTQyLTIuMTMxLTMzLjg1NC0yLjIxMUw2Ny4zNDgsNzMuODl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._rectilinear__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="rectilinear";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectilinear.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectilinear.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjection() == 12))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectilinear.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectilinear.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectilinear.style[domTransition]='';
				if (me._rectilinear.ggCurrentLogicStateVisible == 0) {
					me._rectilinear.style.visibility=(Number(me._rectilinear.style.opacity)>0||!me._rectilinear.style.opacity)?'inherit':'hidden';
					me._rectilinear.ggVisible=true;
				}
				else {
					me._rectilinear.style.visibility="hidden";
					me._rectilinear.ggVisible=false;
				}
			}
		}
		me._rectilinear.onmouseover=function (e) {
			me._rectilinear__img.style.visibility='hidden';
			me._rectilinear__imgo.style.visibility='inherit';
		}
		me._rectilinear.onmouseout=function (e) {
			me._rectilinear__img.style.visibility='inherit';
			me._rectilinear__imgo.style.visibility='hidden';
		}
		me._rectilinear.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._projection_buttons.appendChild(me._rectilinear);
		el=me._fisheye=document.createElement('div');
		els=me._fisheye__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY1LDIzLjNDNDIsMjMuMywyMy4zLDQyLDIzLjMsNjVTNDIsMTA2LjcsNjUsMTA2LjdjMjMsMCw0MS43LTE4LjcsNDEuNy00MS43Uzg4LDIzLjMsNjUsMjMuM3ogTTM2LjQsODYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLjItMS4xLDAuNC0yLjEtMC4xYy0yLjEtMy4xLTMuOC02LjUtNC45LTEwLjJjMS40LDAuOSwzLDEuNyw0LjcsMi40YzAuNywwLjgsMS4zLDEuOCwxLjcsMi44YzAuNiwxLjMsMC45LDIuNywwLjksMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MzNi44LDg1LjMsMz'+
			'YuNiw4NS44LDM2LjQsODYuMXogTTY1LDEwMi4yYy0xMC43LDAtMjAuNC00LjYtMjcuMi0xMS45YzAuNS0wLjIsMS4xLTAuNSwxLjUtMC44YzAuOC0wLjYsMS4zLTEuNCwxLjYtMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC44LDAuNC0xLjcsMC40LTIuNmMwLTEuNS0wLjMtMy0wLjktNC41YzIuMiwwLjUsNC42LDEsNywxLjNjMS4yLDAuMiwyLjUsMC4zLDMuOCwwLjRjMCwxLjUsMC4xLDMuMSwwLjEsNC42bDIuNy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEtMS40LTAuMS0yLjgtMC4xLTQuM2MzLDAuMiw2LjEsMC4zLDkuMiwwLjNjNy40LDAsMTQuOS0wLjYsMjEu'+
			'NS0xLjdjMy4zLTAuNiw2LjQtMS4yLDkuMS0yYzIuMy0wLjcsNS4yLTEuOCw3LTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOTUuOSw5MS4xLDgxLjgsMTAyLjIsNjUsMTAyLjJ6IE0xMDIsNjkuNGMtMC41LDAuNi0xLjEsMS4zLTIsMS44Yy0wLjcsMC40LTEuNSwwLjgtMi4zLDEuMmMwLjMtNy41LDAuMS0xMi43LTEuOC0xOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy4zLTUuOC02LjEtOC43LTExLjYtMTNjLTEuOSwyLjQtMy43LDMuNy05LjUsOC41YzIsOS43LDIuMSwxOSwxLjgsMjguOWMtNC40LDAuNS05LjEsMC43LTEzLjcsMC43Yy0zLjEsMC02LjItMC4xLTkuMy0wLjMmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEtNC4yLTAuMS04LjMtMC4xLTEyLjVjMC0wLjYsMC0xLjIsMC0xLjdjNy44LTAuOCwxNC4xLTcuNywxMy42LTEzLjRjLTAuNi02LTYuNy05LjItMTMuNS04LjljLTYuOCwwLjMtMTIuMSw0LjQtMTMuMSwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45LDUuNiwyLjcsMTEuNSwxMC4zLDEyYzAsMC42LDAsMS4xLDAsMS43YzAsNC4xLDAsOC4yLDAuMSwxMi4zYy0yLjctMC4zLTUuMi0wLjYtNy42LTEuMWMtMi45LTAuNi01LjUtMS4zLTcuNy0yLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjItMC45LTQuMS0xLjgtNS44LTMuMWMt'+
			'MC43LTAuNi0xLjQtMS4zLTItMS45Yy0wLjEtMS4zLTAuMi0yLjYtMC4yLTRjMC0yMC41LDE2LjctMzcuMiwzNy4yLTM3LjJjMjAuNSwwLDM3LjIsMTYuNywzNy4yLDM3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwMi4yLDY2LjUsMTAyLjEsNjgsMTAyLDY5LjR6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDI3LjhjLTIwLjUsMC0zNy4yLDE2LjctMzcuMiwzNy4yYzAsMS40LDAuMSwyLjcsMC4yLDRjMC42LDAuNiwxLjMsMS40LDIsMS45YzEuNywxLjMsMy42LDIuMiw1LjgsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuMiwwLjksNC44LD'+
			'EuNiw3LjcsMi4yYzIuNCwwLjUsNC45LDAuOCw3LjYsMS4xYy0wLjEtNC4xLTAuMS04LjItMC4xLTEyLjNjMC0wLjYsMC0xLjEsMC0xLjdjLTcuNS0wLjUtMTEuMi02LjQtMTAuMy0xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLTUuOSw2LjMtMTAuMSwxMy4xLTEwLjNjNi44LTAuMywxMi45LDIuOSwxMy41LDguOWMwLjUsNS43LTUuOCwxMi42LTEzLjYsMTMuNGMwLDAuNiwwLDEuMiwwLDEuN2MwLDQuMiwwLDguNCwwLjEsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MzLDAuMiw2LjEsMC4zLDkuMywwLjNjNC42LDAsOS4zLTAuMywxMy43LTAuN2MwLjMtOS45LDAu'+
			'Mi0xOS4yLTEuOC0yOC45YzUuOC00LjgsNy41LTYuMSw5LjUtOC41YzUuNSw0LjMsOC4zLDcuMiwxMS42LDEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuOSw2LjksMi4yLDEyLjEsMS44LDE5LjZjMC44LTAuNCwxLjYtMC44LDIuMy0xLjJjMC44LTAuNSwxLjUtMS4yLDItMS44YzAuMi0xLjUsMC4zLTIuOSwwLjMtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzEwMi4yLDQ0LjUsODUuNSwyNy44LDY1LDI3Ljh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMzQuMSw3OC4yYy0xLjctMC43LTMuMy0xLjUtNC43LTIuNGMxLjEsMy43LDIuOCw3LjEsNC45LD'+
			'EwLjJjMS4xLDAuNSwyLDAuMywyLjEsMC4xYzAuMi0wLjMsMC4zLTAuOCwwLjMtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS0wLjMtMi40LTAuOS0zLjdDMzUuNCw4MCwzNC44LDc5LDM0LjEsNzguMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik04NC41LDgwLjdjLTYuNiwxLjEtMTQuMSwxLjctMjEuNSwxLjdjLTMuMSwwLTYuMi0wLjEtOS4yLTAuM2MwLDEuNCwwLjEsMi44LDAuMSw0LjNsLTIuNywwLjFjLTAuMS0xLjUtMC4xLTMuMS0wLjEtNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMtMC4xLTIuNS0wLjMtMy44LTAuNGMtMi41LTAu'+
			'My00LjgtMC44LTctMS4zYzAuNiwxLjUsMC45LDMsMC45LDQuNWMwLDAuOS0wLjEsMS43LTAuNCwyLjZjLTAuMywwLjgtMC44LDEuNi0xLjYsMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMC40LTEsMC42LTEuNSwwLjhjNi44LDcuMywxNi41LDExLjksMjcuMiwxMS45YzE2LjgsMCwzMC45LTExLjEsMzUuNi0yNi40Yy0xLjgsMS00LjgsMi4yLTcsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzkwLjgsNzkuNSw4Ny44LDgwLjIsODQuNSw4MC43eiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NWMwLD'+
			'MxLDI1LjEsNTYuMSw1Ni4xLDU2LjFTMTIxLjEsOTYsMTIxLjEsNjVDMTIxLjEsMzQsOTYsOC45LDY1LDguOXogTTY1LDEwNi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzQyLDEwNi43LDIzLjMsODgsMjMuMyw2NVM0MiwyMy4zLDY1LDIzLjNjMjMsMCw0MS43LDE4LjcsNDEuNyw0MS43Uzg4LDEwNi43LDY1LDEwNi43eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fisheye__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fisheye__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY0Ljk5OSwxOC42MjJjLTI1LjU3MywwLTQ2LjM3OCwyMC44MDUtNDYuMzc4LDQ2LjM3OXMyMC44MDUsNDYuMzc5LDQ2LjM3OCw0Ni4zNzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzI1LjU3NCwwLDQ2LjM4LTIwLjgwNSw0Ni4zOC00Ni4zNzlTOTAuNTczLDE4LjYyMiw2NC45OTksMTguNjIyeiBNMzMuMjI1LDg4LjQwOWMtMC4yMDgsMC4yNTgtMS4xNzQsMC40NTMtMi4zODMtMC4wODYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjM1Ni0zLjQ0MS00LjIwNi03LjI1NC01LjQ0Mi0xMS4zMzJjMS'+
			'41NjEsMS4wMjUsMy4zMTIsMS45MTQsNS4yNDQsMi42ODZjMC43NjgsMC45MDQsMS40NDEsMS45ODQsMS45MzksMy4wOTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjc2LDEuNDgyLDEuMDIzLDMuMDIxLDEuMDE2LDQuMTExQzMzLjYwNCw4Ny41NzMsMzMuNDYsODguMTE2LDMzLjIyNSw4OC40MDl6IE02NC45OTksMTA2LjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTExLjkzOCwwLTIyLjcwNS01LjA4OC0zMC4yNjUtMTMuMjAzYzAuNjExLTAuMjExLDEuMTkyLTAuNTEyLDEuNjc5LTAuOTE2YzAuODQyLTAuNjk1LDEuNDAyLTEuNjA1LDEuNzMtMi41MjkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7YzAuMzMtMC45MywwLjQ1NC0xLjg4NywwLjQ1Ni0yLjg1Yy0wLjAwNy0xLjY2LTAuMzg0LTMuMzY5LTEuMDEzLTUuMDQ5YzIuNDY1LDAuNTkyLDUuMDg0LDEuMDcsNy44MTYsMS40NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMzcxLDAuMTg5LDIuNzcsMC4zNTQsNC4xOSwwLjQ5NGMwLjA0OCwxLjY5NywwLjA5OSwzLjM5NSwwLjE2Miw1LjA5MmwyLjk5OC0wLjExMWMtMC4wNi0xLjU3OC0wLjEwNi0zLjE2LTAuMTUxLTQuNzQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuMzMsMC4yNDQsNi43MzgsMC4zNzUsMTAuMTcyLDAuMzc1YzguMjUsMCwxNi41NzQtMC42NywyMy'+
			'44OTItMS44OThjMy42NTktMC42MTMsNy4wNjctMS4zNjcsMTAuMTAxLTIuMjU2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjUzMS0wLjc0NCw1Ljc4My0yLjAzNyw3LjgxMy0zLjE3MkM5OS40MDMsOTQuMDE0LDgzLjYyLDEwNi4zNzksNjQuOTk5LDEwNi4zNzl6IE0xMDYuMDc3LDY5LjkxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNTQsMC42OTMtMS4yNTgsMS40MjQtMi4xODEsMS45OTZjLTAuNzYsMC40NzEtMS42MTQsMC45MS0yLjUwOSwxLjMyYzAuMzc5LTguMzA3LDAuMTQtMTQuMDkyLTIuMDIxLTIxLjc0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNzAxLTYuNDQ3'+
			'LTYuNzM5LTkuNjg4LTEyLjg4NC0xNC40NjFjLTIuMTU3LDIuNjY4LTQuMDg2LDQuMTM5LTEwLjUxNCw5LjQ0M2MyLjI3OCwxMC44MTgsMi4zNDEsMjEuMTY2LDIuMDIxLDMyLjEzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuOTEsMC41MDgtMTAuMDc3LDAuNzkzLTE1LjIxNiwwLjc5M2MtMy40ODUsMC02Ljk0NS0wLjEzMS0xMC4yOTEtMC4zODljLTAuMDk0LTQuNjM5LTAuMTQtOS4yNzktMC4xNC0xMy45MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC42NDgsMC4wMDctMS4yOTcsMC4wMDgtMS45NDVjOC42OTEtMC45LDE1LjctOC41NDMsMTUuMDkzLTE0Ljg3M2MtMC42NDMtNi'+
			'42ODktNy40NTUtMTAuMjI3LTE0Ljk4LTkuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNy41MjcsMC4yODEtMTMuNDE0LDQuODk1LTE0LjUxNywxMS41MDJjLTEuMDQyLDYuMjQ2LDMuMDUsMTIuNzU0LDExLjQwNCwxMy4zNjFjLTAuMDAxLDAuNjMzLTAuMDA4LDEuMjY4LTAuMDA4LDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEsNC41NDksMC4wNDQsOS4xLDAuMTMzLDEzLjY1Yy0yLjk0Ny0wLjMwNy01Ljc3Ni0wLjcxNy04LjQwMS0xLjI0OGMtMy4yMDMtMC42NDgtNi4xMDktMS40NjktOC41NjUtMi40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjQ1OC0wLjk3'+
			'NS00LjU3Ny0xLjk3NS02LjQ1MS0zLjQ3M2MtMC43NjYtMC42MTMtMS41NDItMS40LTIuMTk1LTIuMTE3Yy0wLjE1Ny0xLjQ2My0wLjI0Mi0yLjk0NS0wLjI0Mi00LjQ0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yMi44MTYsMTguNTYyLTQxLjM3OSw0MS4zNzgtNDEuMzc5YzIyLjgxNywwLDQxLjM4LDE4LjU2Miw0MS4zOCw0MS4zNzlDMTA2LjM3OSw2Ni42NjUsMTA2LjI2OSw2OC4zMDEsMTA2LjA3Nyw2OS45MTV6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY0Ljk5OSwyMy42MjJjLTIyLjgxNSwwLTQxLjM3OCwxOC41NjItNDEuMzc4LDQxLjM3OWMwLDEuNT'+
			'AyLDAuMDg1LDIuOTg0LDAuMjQyLDQuNDQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjUzLDAuNzE3LDEuNDMsMS41MDQsMi4xOTUsMi4xMTdjMS44NzQsMS40OTgsMy45OTMsMi40OTgsNi40NTEsMy40NzNjMi40NTYsMC45NzcsNS4zNjIsMS43OTcsOC41NjUsMi40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi42MjUsMC41MzEsNS40NTQsMC45NDEsOC40MDEsMS4yNDhjLTAuMDg5LTQuNTUxLTAuMTMyLTkuMTAyLTAuMTMzLTEzLjY1YzAtMC42MzMsMC4wMDctMS4yNjgsMC4wMDgtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy04LjM1NC0wLjYw'+
			'Ny0xMi40NDYtNy4xMTUtMTEuNDA0LTEzLjM2MWMxLjEwMy02LjYwNyw2Ljk4OS0xMS4yMjEsMTQuNTE3LTExLjUwMmM3LjUyNS0wLjI4MSwxNC4zMzgsMy4yNTYsMTQuOTgsOS45NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MDcsNi4zMy02LjQwMSwxMy45NzMtMTUuMDkzLDE0Ljg3M2MtMC4wMDEsMC42NDgtMC4wMDgsMS4yOTctMC4wMDgsMS45NDVjMCw0LjY0MywwLjA0Niw5LjI4MywwLjE0LDEzLjkyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MzLjM0NiwwLjI1OCw2LjgwNiwwLjM4OSwxMC4yOTEsMC4zODljNS4xMzksMCwxMC4zMDYtMC4yODUsMTUuMjE2LT'+
			'AuNzkzYzAuMzItMTAuOTY3LDAuMjU4LTIxLjMxNC0yLjAyMS0zMi4xMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNi40MjgtNS4zMDUsOC4zNTYtNi43NzUsMTAuNTE0LTkuNDQzYzYuMTQ1LDQuNzczLDkuMTgzLDguMDE0LDEyLjg4NCwxNC40NjFjMi4xNiw3LjY1NiwyLjM5OSwxMy40NDEsMi4wMjEsMjEuNzQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuODk1LTAuNDEsMS43NDktMC44NSwyLjUwOS0xLjMyYzAuOTIzLTAuNTcyLDEuNjQxLTEuMzAzLDIuMTgxLTEuOTk2YzAuMTkxLTEuNjEzLDAuMzAyLTMuMjUsMC4zMDItNC45MTQmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtDMTA2LjM3OSw0Mi4xODQsODcuODE2LDIzLjYyMiw2NC45OTksMjMuNjIyeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTMwLjY0NCw3OS42NzZjLTEuOTMyLTAuNzcxLTMuNjg0LTEuNjYtNS4yNDQtMi42ODZjMS4yMzYsNC4wNzgsMy4wODYsNy44OTEsNS40NDIsMTEuMzMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMjA5LDAuNTM5LDIuMTc1LDAuMzQ0LDIuMzgzLDAuMDg2YzAuMjM1LTAuMjkzLDAuMzc5LTAuODM2LDAuMzc0LTEuNTI3YzAuMDA4LTEuMDktMC4zNC0yLjYyOS0xLjAxNi00LjExMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3'+
			'g5O0MzMi4wODUsODEuNjYxLDMxLjQxMSw4MC41ODEsMzAuNjQ0LDc5LjY3NnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik04Ni42NjYsODIuNDkzYy03LjMxNywxLjIyOS0xNS42NDIsMS44OTgtMjMuODkyLDEuODk4Yy0zLjQzNCwwLTYuODQyLTAuMTMxLTEwLjE3Mi0wLjM3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjA0NSwxLjU4LDAuMDkyLDMuMTYyLDAuMTUxLDQuNzRsLTIuOTk4LDAuMTExYy0wLjA2My0xLjY5Ny0wLjExNC0zLjM5NS0wLjE2Mi01LjA5MmMtMS40MjEtMC4xNDEtMi44MTktMC4zMDUtNC4xOS0wLjQ5NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4'+
			'OTsmI3g5O2MtMi43MzItMC4zNzktNS4zNTItMC44NTctNy44MTYtMS40NDljMC42MjksMS42OCwxLjAwNiwzLjM4OSwxLjAxMyw1LjA0OWMtMC4wMDIsMC45NjMtMC4xMjYsMS45Mi0wLjQ1NiwyLjg1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjMyOCwwLjkyNC0wLjg4OSwxLjgzNC0xLjczLDIuNTI5Yy0wLjQ4NiwwLjQwNC0xLjA2NywwLjcwNS0xLjY3OSwwLjkxNmM3LjU2LDguMTE1LDE4LjMyNywxMy4yMDMsMzAuMjY1LDEzLjIwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxOC42MjEsMCwzNC40MDQtMTIuMzY1LDM5LjU4MS0yOS4zMTRjLTIuMDMsMS4xMzUtNS'+
			'4yODIsMi40MjgtNy44MTMsMy4xNzJDOTMuNzMzLDgxLjEyNSw5MC4zMjUsODEuODc5LDg2LjY2Niw4Mi40OTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjQuOTk5LDIuNjM3QzMwLjU1OCwyLjYzNywyLjYzOCwzMC41NTcsMi42MzgsNjVjMCwzNC40NDEsMjcuOTIsNjIuMzYxLDYyLjM2MSw2Mi4zNjFTMTI3LjM2Miw5OS40NDIsMTI3LjM2Miw2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxMjcuMzYyLDMwLjU1Nyw5OS40NCwyLjYzNyw2NC45OTksMi42Mzd6IE02NC45OTksMTExLjM3OWMtMjUuNTczLDAtNDYuMzc4LTIwLjgwNS00Ni4zNzgtNDYuMzc5czIwLjgw'+
			'NS00Ni4zNzksNDYuMzc4LTQ2LjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyNS41NzQsMCw0Ni4zOCwyMC44MDUsNDYuMzgsNDYuMzc5UzkwLjU3MywxMTEuMzc5LDY0Ljk5OSwxMTEuMzc5eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fisheye__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fisheye";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fisheye.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fisheye.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjection() == 9))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fisheye.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fisheye.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fisheye.style[domTransition]='';
				if (me._fisheye.ggCurrentLogicStateVisible == 0) {
					me._fisheye.style.visibility=(Number(me._fisheye.style.opacity)>0||!me._fisheye.style.opacity)?'inherit':'hidden';
					me._fisheye.ggVisible=true;
				}
				else {
					me._fisheye.style.visibility="hidden";
					me._fisheye.ggVisible=false;
				}
			}
		}
		me._fisheye.onmouseover=function (e) {
			me._fisheye__img.style.visibility='hidden';
			me._fisheye__imgo.style.visibility='inherit';
		}
		me._fisheye.onmouseout=function (e) {
			me._fisheye__img.style.visibility='inherit';
			me._fisheye__imgo.style.visibility='hidden';
		}
		me._fisheye.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._projection_buttons.appendChild(me._fisheye);
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkxLjEsNjVjMC0xMS44LTcuOC0yMS43LTE4LjUtMjVjMi40LTUuOCw2LjItMTEuNSw2LjItMTEuNXMtMi4yLTQuOC02LjgtOS4yYy00LjMtNC4xLTcuMi01LjMtNy42LTUuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwbDAsMGMtMC40LDAuMi0zLjMsMS40LTcuNSw1LjZjLTQuNiw0LjUtNi42LDkuNC02LjYsOS40czMuOSw1LjcsNi40LDExLjVjLTYuMSwyLjEtMTEuMSw2LjMtMTQuMywxMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi42LTEuMS'+
			'00LjktMS45LTYuOS0yLjRjMC4yLTMuNi0yLjYtNy42LTYuNi05LjFjLTQuNS0xLjYtOS4yLDEuMi0xMC40LDUuOWMtMS4yLDQuNiwxLjUsOS4zLDYuMiwxMC4xYzQsMC43LDguMy0xLjMsMTAtNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjcsMC40LDMuOSwxLjIsNi40LDIuMmMtMS40LDMuMi0yLjIsNi44LTIuMiwxMC41YzAsMTQuNCwxMS43LDI2LjEsMjYuMSwyNi4xUzkxLjEsNzkuNCw5MS4xLDY1eiBNNDMuNCw2NC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTMsMC43LTUuOCwxLjgtOC40YzAuOCwwLjQsMS42LDAuOCwyLjQsMS4ybDEuMi0yLjRjLTAuOC0wLjQtMS42LTAu'+
			'OC0yLjQtMS4yYzMuOC02LjMsMTAuNy0xMC41LDE4LjYtMTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTEuOSwwLDIxLjYsOS43LDIxLjYsMjEuNmMwLDEwLjUtNy41LDE5LjItMTcuNCwyMS4yYzAuMS0wLjIsMC4yLTAuNCwwLjItMC41YzIuMS01LjYtMy4xLTguMS02LjUtOS43Yy0xLjctMC44LTMuNC0xLjYtNC42LTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMS0xLjEtMi4yLTIuNi0zLjItNC4xYy0yLjEtMy00LjItNi4yLTcuNy02LjJjLTAuOSwwLTEuOCwwLjItMi43LDAuNkM0NC40LDYzLjgsNDMuOSw2NC4yLDQzLjQsNjQuN3ogTTUxLjEsODEuNiYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTMuMy0yLjYtNS40LTguOS01LTEyLjRjMC4xLTAuOSwwLjQtMS40LDAuNS0xLjVjMC4zLTAuMSwwLjYtMC4yLDAuOC0wLjJjMS4yLDAsMi43LDIuMiw0LDQuMmMxLjEsMS43LDIuMywzLjQsMy44LDQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS42LDEuNSwzLjgsMi42LDUuNywzLjVjNC4zLDIsNC43LDIuNyw0LjIsNC4xYy0wLjQsMS0yLjUsMS4xLTMuMiwxLjFDNTguNiw4NS4yLDUzLjcsODMuNiw1MS4xLDgxLjZ6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDQzLjRjLTcuOSwwLTE0LjgsNC4yLTE4LjYsMTAuNWMwLjgsMC40LDEu'+
			'NiwwLjgsMi40LDEuMmwtMS4yLDIuNGMtMC44LTAuNC0xLjYtMC44LTIuNC0xLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuMSwyLjYtMS44LDUuNC0xLjgsOC40YzAuNS0wLjUsMS0wLjgsMS41LTEuMWMwLjktMC40LDEuOC0wLjYsMi43LTAuNmMzLjYsMCw1LjcsMy4xLDcuNyw2LjJjMSwxLjUsMiwzLDMuMiw0LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xLDEuMSwyLjksMS45LDQuNiwyLjdjMy40LDEuNiw4LjUsNC4xLDYuNSw5LjdjLTAuMSwwLjItMC4xLDAuMy0wLjIsMC41YzkuOS0yLDE3LjQtMTAuNywxNy40LTIxLjImI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7JiN4OTtDODYuNiw1My4xLDc2LjksNDMuNCw2NSw0My40eiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NVMzNCwxMjEuMSw2NSwxMjEuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFTOTYsOC45LDY1LDguOXogTTY1LDkxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTE0LjQsMC0yNi4xLTExLjctMjYuMS0yNi4xYzAtMy43LDAuOC03LjMsMi4yLTEwLjVjLTIuNi0xLjEtNC43LTEuOC02LjQtMi4yYy0xLjcsMy01LjksNC45LTEwLDQuM2MtNC43LTAuOC03LjQtNS41LTYuMi0xMC4xJiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5OyYjeDk7YzEuMi00LjYsNS45LTcuNSwxMC40LTUuOWM0LDEuNSw2LjgsNS41LDYuNiw5LjFjMiwwLjUsNC4zLDEuMyw2LjksMi40YzMuMS01LjUsOC4yLTkuNywxNC4zLTExLjhjLTIuNi01LjgtNi40LTExLjUtNi40LTExLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzMi4xLTQuOCw2LjYtOS40YzQuMi00LjIsNy4xLTUuNSw3LjUtNS42bDAsMGMwLDAsMCwwLDAsMGMwLDAsMCwwLDAsMGwwLDBjMC40LDAuMiwzLjMsMS40LDcuNiw1LjVjNC42LDQuNCw2LjgsOS4yLDYuOCw5LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzLTMuNyw1LjctNi4yLDExLjVjMTAuNy'+
			'wzLjMsMTguNSwxMy4yLDE4LjUsMjVDOTEuMSw3OS40LDc5LjQsOTEuMSw2NSw5MS4xeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTYxLjEsODAuMWMtMS45LTAuOS00LjEtMS45LTUuNy0zLjVjLTEuNS0xLjQtMi43LTMuMi0zLjgtNC45Yy0xLjMtMi0yLjgtNC4yLTQtNC4yYy0wLjIsMC0wLjUsMC4xLTAuOCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLjEtMC40LDAuNS0wLjUsMS41Yy0wLjQsMy41LDEuNyw5LjgsNSwxMi40YzIuNSwyLDcuNCwzLjcsMTAuOSwzLjdjMC43LDAsMi44LTAuMSwzLjItMS4xQzY1LjgsODIuNyw2NS4zLDgyLjEsNjEuMSw4'+
			'MC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMTMwcHgiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdH'+
			'kvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgd2lkdGg9IjEzMHB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTk0LjA0Niw2NC45OTljMC0xMy4wNzQtOC42ODUtMjQuMTU1LTIwLjU4Ny0yNy43ODZjMi43MTktNi40NTcsNi44NTctMTIuODMyLDYuODU3LTEyLjgzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTIuNDE2LTUuMzMtNy41ODUtMTAuMjQ2Yy00LjgxLTQuNTc4LTguMDUtNS45NDEtOC40NzYtNi4xMDhsMC4wMDEtMC4wMTljMCwwLTAuMDEyLDAuMDA0LTAuMDI1LDAuMDExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMTQtMC4wMDYtMC4wMjQtMC4wMDktMC4wMjQtMC4wMDlsMC4wMDEsMC4wMT'+
			'ljLTAuNDIyLDAuMTc1LTMuNjM0LDEuNjA0LTguMzUsNi4yNzljLTUuMDY1LDUuMDIxLTcuMzcyLDEwLjM5OS03LjM3MiwxMC4zOTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7czQuMzE2LDYuMzYxLDcuMTY2LDEyLjc5OGMtNi43MzksMi4yOTgtMTIuMzY5LDcuMDA1LTE1Ljg2LDEzLjA5M2MtMi44NDUtMS4xODMtNS40NjgtMi4wOTQtNy42NDUtMi42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjU0LTMuOTU2LTIuODYtOC40NTctNy4zNTctMTAuMDc0Yy00Ljk4Ny0xLjc5NS0xMC4xOTUsMS4zMzgtMTEuNTIyLDYuNTAzYy0xLjMyOCw1LjE2NSwxLjcwNSwxMC4zODYsNi44OTksMTEu'+
			'MjI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjQ5NywwLjcyOSw5LjIwMi0xLjQ0NCwxMS4xMS00Ljc3MmMxLjg3MywwLjQ3LDQuMzEzLDEuMjgxLDcuMTUzLDIuNDQ5Yy0xLjU4NywzLjU4Ny0yLjQ3Nyw3LjU0OS0yLjQ3NywxMS43MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMTYuMDE3LDEzLjAzLDI5LjA0NywyOS4wNDYsMjkuMDQ3Uzk0LjA0Niw4MS4wMTYsOTQuMDQ2LDY0Ljk5OXogTTQwLjk2Myw2NC42NTNjMC4wNDctMy4zMTUsMC43NjgtNi40NywyLjAzMi05LjMzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44NTYsMC40MSwxLjczMSwwLjg0MiwyLjYyOSwxLjMwNW'+
			'wxLjM3NS0yLjY2NmMtMC44OC0wLjQ1NC0xLjc1Ni0wLjg4OS0yLjYyNC0xLjMwNmM0LjIwNy03LjAwMywxMS44NzctMTEuNywyMC42MjUtMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTMuMjU5LDAsMjQuMDQ2LDEwLjc4NywyNC4wNDYsMjQuMDQ2YzAsMTEuNjM2LTguMzA4LDIxLjM2Ni0xOS4zMDMsMjMuNTc1YzAuMDk3LTAuMTk5LDAuMTgxLTAuMzkzLDAuMjQ1LTAuNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMjktNi4yNy0zLjQyNy04Ljk4LTcuMjA5LTEwLjc3NGMtMS44ODYtMC44OTUtMy44MzUtMS44MTktNS4wNzItMi45ODhjLTEuMjczLTEuMjA0LTIuNDMtMi45MTQt'+
			'My41NDctNC41NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjI4My0zLjM4LTQuNjQ0LTYuODc0LTguNjA4LTYuODc0Yy0wLjk3MiwwLTEuOTY0LDAuMjI5LTIuOTUsMC42NzlDNDIuMDc2LDYzLjcxOCw0MS40OTksNjQuMDkxLDQwLjk2Myw2NC42NTN6IE00OS41OTcsODMuNDEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjY0NS0yLjkyMS02LjAwMy05LjkxOS01LjUyNS0xMy43NjVjMC4xMy0xLjA0NCwwLjQzNS0xLjU0LDAuNjA4LTEuNjJjMC4zMy0wLjE1LDAuNjIzLTAuMjI3LDAuODcyLTAuMjI3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMwOSwwLDIuOTg1LDIuNDgyLD'+
			'QuNDY1LDQuNjczYzEuMjcsMS44NzksMi41ODIsMy44MjEsNC4yNTYsNS40MDNjMS44MTIsMS43MTQsNC4yMywyLjg2LDYuMzY0LDMuODcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0Ljc0OCwyLjI1Miw1LjIzNSwyLjk1Miw0LjY1NCw0LjU0MWMtMC40MTIsMS4xMy0yLjgyMywxLjIxOC0zLjU1MywxLjIxOEM1Ny44NjEsODcuNTA2LDUyLjQxNCw4NS42NjgsNDkuNTk3LDgzLjQxeiIvPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSw0MC45NTNjLTguNzQ4LDAtMTYuNDE4LDQuNjk3LTIwLjYyNSwxMS43YzAuODY4LDAuNDE3LDEuNzQ0LDAuODUyLDIuNjI0LDEuMzA2'+
			'bC0xLjM3NSwyLjY2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44OTctMC40NjMtMS43NzItMC44OTUtMi42MjktMS4zMDVjLTEuMjY1LDIuODYzLTEuOTg1LDYuMDE4LTIuMDMyLDkuMzMzYzAuNTM2LTAuNTYyLDEuMTEzLTAuOTM2LDEuNjM5LTEuMTc2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuOTg2LTAuNDUsMS45NzktMC42NzksMi45NS0wLjY3OWMzLjk2NSwwLDYuMzI1LDMuNDk0LDguNjA4LDYuODc0YzEuMTE3LDEuNjU0LDIuMjczLDMuMzY0LDMuNTQ3LDQuNTY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMjM3LDEuMTY5LDMuMTg3LDIuMD'+
			'k0LDUuMDcyLDIuOTg4YzMuNzgyLDEuNzk0LDkuNDk5LDQuNTA1LDcuMjA5LDEwLjc3NGMtMC4wNjQsMC4xNzgtMC4xNDgsMC4zNzEtMC4yNDUsMC41NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxMC45OTUtMi4yMDksMTkuMzAzLTExLjkzOSwxOS4zMDMtMjMuNTc1Qzg5LjA0Niw1MS43NCw3OC4yNTksNDAuOTUzLDY1LDQwLjk1M3oiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSwyLjYzOGMtMzQuNDQyLDAtNjIuMzYyLDI3LjkyMi02Mi4zNjIsNjIuMzYzUzMwLjU1OCwxMjcuMzYyLDY1LDEyNy4zNjJjMzQuNDQxLDAsNjIuMzYyLTI3LjkyLDYyLjM2Mi02Mi4zNjEm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtTOTkuNDQxLDIuNjM4LDY1LDIuNjM4eiBNNjUsOTQuMDQ2Yy0xNi4wMTYsMC0yOS4wNDYtMTMuMDMtMjkuMDQ2LTI5LjA0N2MwLTQuMTY3LDAuODktOC4xMjksMi40NzctMTEuNzE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0yLjg0LTEuMTY4LTUuMjgtMS45NzktNy4xNTMtMi40NDljLTEuOTA4LDMuMzI4LTYuNjEzLDUuNTAxLTExLjExLDQuNzcyYy01LjE5NC0wLjg0LTguMjI4LTYuMDYxLTYuODk5LTExLjIyNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjMyNy01LjE2NSw2LjUzNS04LjI5OCwxMS41MjItNi41MD'+
			'NjNC40OTcsMS42MTcsNy42MTEsNi4xMTgsNy4zNTcsMTAuMDc0YzIuMTc3LDAuNTUyLDQuOCwxLjQ2Myw3LjY0NSwyLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MzLjQ5MS02LjA4OCw5LjEyMS0xMC43OTUsMTUuODYtMTMuMDkzYy0yLjg1LTYuNDM3LTcuMTY2LTEyLjc5OC03LjE2Ni0xMi43OThzMi4zMDctNS4zNzgsNy4zNzItMTAuMzk5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzQuNzE2LTQuNjc1LDcuOTI4LTYuMTA0LDguMzUtNi4yNzlMNjQuMjA3LDguMDFjMCwwLDAuMDExLDAuMDAzLDAuMDI0LDAuMDA5YzAuMDE0LTAuMDA3LDAuMDI1LTAuMDExLDAuMDI1'+
			'LTAuMDExbC0wLjAwMSwwLjAxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQyNiwwLjE2NywzLjY2NiwxLjUzLDguNDc2LDYuMTA4YzUuMTY5LDQuOTE2LDcuNTg1LDEwLjI0Niw3LjU4NSwxMC4yNDZzLTQuMTM5LDYuMzc1LTYuODU3LDEyLjgzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxMS45MDIsMy42MzEsMjAuNTg3LDE0LjcxMiwyMC41ODcsMjcuNzg2Qzk0LjA0Niw4MS4wMTYsODEuMDE2LDk0LjA0Niw2NSw5NC4wNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNjAuNjM3LDgxLjc0N2MtMi4xMzQtMS4wMTItNC41NTItMi4xNTgtNi4zNjQtMy'+
			'44NzJjLTEuNjc0LTEuNTgyLTIuOTg2LTMuNTI0LTQuMjU2LTUuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ3OS0yLjE5LTMuMTU2LTQuNjczLTQuNDY1LTQuNjczYy0wLjI0OSwwLTAuNTQyLDAuMDc2LTAuODcyLDAuMjI3Yy0wLjE3NCwwLjA4LTAuNDc5LDAuNTc2LTAuNjA4LDEuNjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDc4LDMuODQ2LDEuODgxLDEwLjg0NCw1LjUyNSwxMy43NjVjMi44MTcsMi4yNTgsOC4yNjUsNC4wOTYsMTIuMTQyLDQuMDk2YzAuNzI5LDAsMy4xNDEtMC4wODgsMy41NTMtMS4yMTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7'+
			'JiN4OTtDNjUuODcyLDg0LjY5OSw2NS4zODUsODMuOTk5LDYwLjYzNyw4MS43NDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getProjection() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stereographic.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stereographic.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stereographic.style[domTransition]='';
				if (me._stereographic.ggCurrentLogicStateVisible == 0) {
					me._stereographic.style.visibility=(Number(me._stereographic.style.opacity)>0||!me._stereographic.style.opacity)?'inherit':'hidden';
					me._stereographic.ggVisible=true;
				}
				else {
					me._stereographic.style.visibility="hidden";
					me._stereographic.ggVisible=false;
				}
			}
		}
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._projection_buttons.appendChild(me._stereographic);
		me._middle_button.appendChild(me._projection_buttons);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggDx=49;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQt'+
			'NC40Qy0xOTYuOSwzNzItMTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMi'+
			'w0MzIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNj'+
			'NS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgs'+
			'MzYxLjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2'+
			'gtNy43aC0wLjVjMC03LjctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcs'+
			'MTQuOCw3LjEsMjAuNWw2LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi'+
			'0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYt'+
			'My41LTMuOC00LjQtNC45Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC'+
			'0wLjZILTIyMS45eiBNLTIxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3'+
			'LjItNy4yYzQuNCwzLDkuOCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMm'+
			'M0LjksNi40LDcuOCwxNC4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40'+
			'bDczLjMtNzMuM0MtMTQwLjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRk'+
			'ZGRkYiIGQ9Ik0tMTI2LjksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIvPgogIC'+
			'A8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZj'+
			'MC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LD'+
			'M5N3ogTS0xNDQuNSw0MTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBj'+
			'MTguNywwLDM0LDE1LjIsMzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy'+
			'0wLjQtMC42LTAuNi0xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0x'+
			'NS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4Lj'+
			'ItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiByPSI0IiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAu'+
			'Ni0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC'+
			'40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Yy0wLjctMC44LTAuNi0yLDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy'+
			'43LTEyLjQtMjcuNy0yNy43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZG'+
			'IiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOG'+
			'MwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgY3k9IjM5NyIgZmlsbD0iI0ZGRkZGRiIgcj0iNC40IiBjeD0iLTE3NSIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me._middle_button.appendChild(me._button_auto_rotate);
		me.divSkin.appendChild(me._middle_button);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._dropdown_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._dropdown_scrollarea.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_circle_node_sizechanged = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._circle_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_changenode = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._circle_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._circle_node_visited && hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._circle_node_image && hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._hotspot_preview && hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._ht_node_customimage && hotspotTemplates['Circle_Node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._ht_tooltip && hotspotTemplates['Circle_Node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_configloaded = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._hotspot_preview && hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_mouseover = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._hotspot_preview && hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_active = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick && hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_changevisitednodes = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._circle_node_visited && hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._circle_node_image && hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick && hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_hastouch = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_activehotspotchanged = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._circle_node_visited && hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._circle_node_image && hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._circle_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._ht_node_customimage && hotspotTemplates['Circle_Node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._ht_tooltip && hotspotTemplates['Circle_Node'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._ht_tooltip.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_circle_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				if (hotspotTemplates['Circle_Node'][i]._hotspot_preview && hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['Circle_Node'][i]._tt_ht_node && hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['Circle_Node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['button_cmed']) {
			me._button_cmed.style[domTransition]='none';
			me._button_cmed.style.visibility=(Number(me._button_cmed.style.opacity)>0||!me._button_cmed.style.opacity)?'inherit':'hidden';
			me._button_cmed.ggVisible=true;
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_circle_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._circle_node=document.createElement('div');
		el.ggId="Circle_Node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._circle_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._circle_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._circle_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._circle_node.style[domTransition]='';
				if (me._circle_node.ggCurrentLogicStateVisible == 0) {
					me._circle_node.style.visibility="hidden";
					me._circle_node.ggVisible=false;
				}
				else {
					me._circle_node.style.visibility=(Number(me._circle_node.style.opacity)>0||!me._circle_node.style.opacity)?'inherit':'hidden';
					me._circle_node.ggVisible=true;
				}
			}
		}
		me._circle_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._circle_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._circle_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['circle_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._circle_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['circle_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._circle_node.ontouchend=function (e) {
			me.elementMouseOver['circle_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._circle_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._circle_node_visited=document.createElement('div');
		els=me._circle_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_circle_node_visited';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._circle_node_visited__img.ggOverSrc=hs;
		el.ggId="Circle_Node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._circle_node_visited.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._circle_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._circle_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._circle_node_visited.style[domTransition]='';
				if (me._circle_node_visited.ggCurrentLogicStateVisible == 0) {
					me._circle_node_visited.style.visibility=(Number(me._circle_node_visited.style.opacity)>0||!me._circle_node_visited.style.opacity)?'inherit':'hidden';
					me._circle_node_visited.ggVisible=true;
				}
				else {
					me._circle_node_visited.style.visibility="hidden";
					me._circle_node_visited.ggVisible=false;
				}
			}
		}
		me._circle_node_visited.onmouseover=function (e) {
			me._circle_node_visited__img.src=me._circle_node_visited__img.ggOverSrc;
		}
		me._circle_node_visited.onmouseout=function (e) {
			me._circle_node_visited__img.src=me._circle_node_visited__img.ggNormalSrc;
		}
		me._circle_node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._circle_node.appendChild(me._circle_node_visited);
		el=me._circle_node_image=document.createElement('div');
		els=me._circle_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_circle_node_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._circle_node_image__img.ggOverSrc=hs;
		el.ggId="Circle_Node_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 65px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._circle_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._circle_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._circle_node_image.ggElementNodeId()) == true)) || 
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._circle_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._circle_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._circle_node_image.style[domTransition]='';
				if (me._circle_node_image.ggCurrentLogicStateVisible == 0) {
					me._circle_node_image.style.visibility="hidden";
					me._circle_node_image.ggVisible=false;
				}
				else {
					me._circle_node_image.style.visibility=(Number(me._circle_node_image.style.opacity)>0||!me._circle_node_image.style.opacity)?'inherit':'hidden';
					me._circle_node_image.ggVisible=true;
				}
			}
		}
		me._circle_node_image.onmouseover=function (e) {
			me._circle_node_image__img.src=me._circle_node_image__img.ggOverSrc;
		}
		me._circle_node_image.onmouseout=function (e) {
			me._circle_node_image__img.src=me._circle_node_image__img.ggNormalSrc;
		}
		me._circle_node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._circle_node.appendChild(me._circle_node_image);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['circle_node'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._circle_node.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='24px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['circle_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['circle_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['circle_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._circle_node.appendChild(me._tt_ht_node);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._circle_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._circle_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'Circle_Node';
			hsinst = new SkinHotspotClass_circle_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_circle_node_sizechanged();;
			me.callChildLogicBlocksHotspot_circle_node_changenode();;
			me.callChildLogicBlocksHotspot_circle_node_configloaded();;
			me.callChildLogicBlocksHotspot_circle_node_mouseover();;
			me.callChildLogicBlocksHotspot_circle_node_active();;
			me.callChildLogicBlocksHotspot_circle_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_circle_node_hastouch();;
			me.callChildLogicBlocksHotspot_circle_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_circle_node_varchanged_opt_hotspot_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Circle_Node']) {
			var i;
			for(i = 0; i < hotspotTemplates['Circle_Node'].length; i++) {
				hotspotTemplates['Circle_Node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_dropdown_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 169px; height: 24px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._dropdown_menu_text=document.createElement('div');
		els=me._dropdown_menu_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='background: #444444;';
		hs+='background: rgba(68,68,68,0.784314);';
		hs+='border: 0px solid #848484;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_text.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_text'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me._dropdown_menu_text.ggIsActive() == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(68,68,68,0.784314)";
				}
			}
		}
		me._dropdown_menu_text.onclick=function (e) {
			if (
				(
					((me._dropdown_menu_text.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}",player.hotspot.target);
			}
			skin._dropdown_menu_title_background.onclick();
		}
		me._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._dropdown_menu_text__text)
					return;
				}
			}
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
			me._dropdown_menu_text.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_menu_text);
		el=me._dropdown_checkmark=document.createElement('div');
		els=me._dropdown_checkmark__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._dropdown_checkmark__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Checkmark";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_checkmark.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true)) || 
				((me._dropdown_checkmark.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity 0s';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		me._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._dropdown_checkmark);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._stop_rotate_image0.logicBlock_visible();
	me._start_rotate_image0.logicBlock_visible();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._rectilinear.logicBlock_visible();
	me._fisheye.logicBlock_visible();
	me._stereographic.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._stop_rotate_image0.logicBlock_visible();me._start_rotate_image0.logicBlock_visible();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('projectionchanged', function(args) { me._rectilinear.logicBlock_visible();me._fisheye.logicBlock_visible();me._stereographic.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image0.logicBlock_visible();me._start_rotate_image0.logicBlock_visible();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('mouseover', function(args) { me._dropdown_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._dropdown_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._dropdown_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_circle_node_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_circle_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_circle_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_circle_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_circle_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_circle_node_changevisitednodes(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_circle_node_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_circle_node_activehotspotchanged(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_circle_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};