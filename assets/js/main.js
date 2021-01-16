/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	"use strict";

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Vars.
		var	$body = document.querySelector('body');

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-loading');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/37.jpg': {
								'position': 'right 70% top 20%',
								'direction': 'right'
							},
							'images/38.jpg': {
								'position': '40% 10%',
								'direction': 'left'
							},
							'images/39.png': {
								'position': 'right 20% top 10%',
								'direction': 'left'
							},
							'images/31.png': {
								'position': 'right 70% top 10%',
								'direction': 'right'
							},
							'images/32.jpg': {
								'position': '10% 50%',
								'direction': 'left'
							},
							'images/33.png': {
								'position': 'left 0% top 0%',
								'direction': 'right'
							},
							'images/28.jpg': {
								'position': 'right 70% top 15%',
								'direction': 'right'
							},
							'images/29.png': {
								'position': '0% 60%',
								'direction': 'left'
							},
							'images/30.png': {
								'position': 'left 0% top 0%',
								'direction': 'right'
							},
							'images/25.png': {
								'position': '0% 40%',
								'direction': 'left'
							},
							'images/26.jpg': {
								'position': '0% 25%',
								'direction': 'left'
							},
							'images/27.jpg': {
								'position': 'right 70% top 15%',
								'direction': 'right'
							},
							'images/22.jpg': {
								'position': 'left 70% top 0%',
								'direction': 'left'
							},
							'images/23.jpg': {
								'position': 'right 70% top 0%',
								'direction': 'right'
							},
							'images/24.jpg': {
								'position': '70% 10%',
								'direction': 'left'
							},
							'images/19.png': {
								'position': '50% 5%',
								'direction': 'left'
							},
							'images/20.png': {
								'position': 'right 70% top 10%',
								'direction': 'right'
							},
							'images/21.png': {
								'position': 'right 80% top 40%',
								'direction': 'right'
							},
							'images/16.png': {
								'position': 'right 70% top 15%',
								'direction': 'right'
							},
							'images/17.png': {
								'position': '70% 25%',
								'direction': 'left'
							},
							'images/18.png': {
								'position': '50% 30%',
								'direction': 'left'
							},
							'images/13.png': {
								'position': '70% 20%',
								'direction': 'left'
							},
							'images/14.png': {
								'position': '50% 10%',
								'direction': 'left'
							},
							'images/15.png': {
								'position': 'right 70% top 15%',
								'direction': 'right'
							},
							'images/10.jpg': {
								'position': '50% 10%',
								'direction': 'left'
							},
							'images/11.png': {
								'position': '60% 15%',
								'direction': 'left'
							},
							'images/12.jpg': {
								'position': '70% 10%',
								'direction': 'left'
							},
							'images/07.png': {
								'position': 'right 80% top 10%',
								'direction': 'right'
							},
							'images/08.jpg': {
								'position': 'right 60% top 15%',
								'direction': 'right'
							},
							'images/09.jpg': {
								'position': '70% 30%',
								'direction': 'left'
							},
							'images/04.png': {
								'position': '60% 10%',
								'direction': 'left'
							},
							'images/05.jpg': {
								'position': 'right 35% top 40%',
								'direction': 'right'
							},
							'images/06.png': {
								'position': '40% 15%',
								'direction': 'left'
							},
							'images/01.jpg': {
								'position': '50% 10%',
								'direction': 'left'
							},
							'images/02.gif': {
								'position': 'top',
								'direction': 'left'
							},
							'images/03.jpg': {
								'position': '80% 25%',
								'direction': 'left'
							},
						},

					// Delay.
						delay: 7000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k].position;
							$bg.classList.add(settings.images[k].direction);
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

})();