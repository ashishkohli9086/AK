var _0x13b6=['html','which','fitToSection','isTouch','pageX','screenY','pageY','menu','responsiveHeight','abs','removeAnimation','onGrab','anchors','getCurrentScrollSlides','vertical','horizontal','dragAndMove','isScrollAllowed','preventDefault','touchstart','down','forEach','touchStartHandler','touchMoveHandler','requestAnimationFrame','webkitRequestAnimationFrame','mozRequestAnimationFrame','setTimeout','cancelAnimFrame','cancelAnimationFrame','webkitCancelAnimationFrame','mozCancelAnimationFrame','clearTimeout','deepExtend','continuousHorizontal','error','The\x20option\x20`','`\x20is\x20not\x20compatible\x20with\x20`dragAndDrop`;\x20`','`\x20desactivated.','scrollOverflow','showError','warn','The\x20option\x20`scrollOverflow`\x20is\x20not\x20fully\x20compatible\x20with\x20`dragAndDrop`;\x20Scrolling\x20sections/slides\x20will\x20not\x20work\x20when\x20dragging','fingersonly','mousedown','container','mouseonly','getScrollTop','transform','split','target','getDocumentHeight','offsetHeight','isScrollingDown','common','charAt','complete','load','options','internals','.fullpage-wrapper','active','fp-section','.fp-slide','.fp-slides','.fp-slidesContainer','isGrabbing','fp-fixed','css','trigger','prev','next','getDestinationPosition','offsetLeft','none','left','right','scrollHandler','onScroll','round','css3','scrollBar','px,\x200px)','translate3d(','px,\x200px,\x200px)','autoScrolling','top','scrollTo','scrollLeft','requestAnimFrame','detail','value','directions','destroy','length','removeEventListener','mousemove','mouseup','clientWidth','body','isAnimating','landscapeScroll','silentLandscapeScroll','internal','silentScroll','getTime','isReallyTouch','getEventsPage','getCurrentScroll','touchmove','move','addEventListener'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(_0x13b6,0x11a));var _0x148d=function(_0x83958c,_0xc60544){_0x83958c=_0x83958c-0x0;var _0x45802b=_0x13b6[_0x83958c];return _0x45802b;};/*!
 * fullpage.js Drag And Move Extension 0.0.7 - v5
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
window['fp_dragAndMoveExtension']=function(){var _0x5eb82c=this,_0x19d32a=fp_utils,_0x808081=fp_utils['$'],_0x40aff6=fullpage_api['getFullpageData'](),_0x5b2d5a=_0x40aff6[_0x148d('0x0')],_0x4d01cc=_0x40aff6[_0x148d('0x1')],_0x42cb45=_0x148d('0x2'),_0x22dbb2=_0x148d('0x3'),_0x5790b5='.'+_0x22dbb2,_0x2037a5=_0x148d('0x4'),_0x542ce1='.'+_0x2037a5,_0x4d0a83=_0x542ce1+_0x5790b5,_0x204eb0=_0x148d('0x5'),_0xdb9228=_0x204eb0+_0x5790b5,_0x26238b=_0x148d('0x6'),_0x4fb984=_0x148d('0x7');_0x5eb82c[_0x148d('0x8')]=!0x1,_0x5eb82c['isAnimating']=!0x1;var _0x2fe67f,_0x3fdd85,_0x2247f2,_0x3f0ef3,_0x2c8bc0,_0x516061,_0x3b0d71,_0xa54e51,_0x24c975,_0x36987e=0x0,_0x40effc=null,_0x2226e7=null,_0x5c646e=0x0,_0x35c914=0x0,_0x2c6e2a=0.01,_0x436e6b=0.85,_0x59e539=0x0,_0xc56f8b=0x0,_0x129984=0x0,_0x1aeb22=0x0,_0x3846d2=0x0,_0x3b33cf=0x0,_0x8224f=!0x1,_0x11b5f3=!0x1,_0x1701ba=0x0,_0x3295b3=!0x1,_0x58e0bf=_0x148d('0x9'),_0x2326d2='_4',_0x1937e0=_0x19d32a[_0x148d('0xa')],_0x519a99=_0x19d32a[_0x148d('0xb')],_0x51420e=_0x19d32a[_0x148d('0xc')],_0x1db56d=_0x19d32a[_0x148d('0xd')],_0x3498fb=_0x19d32a['closest'],_0x1992d0=_0x4d01cc['getMSPointer']();function _0x5f0cd5(){_0x5eb82c['isAnimating']&&(function(){var _0x40aff6,_0x5790b5,_0x2037a5;_0x11b5f3?(_0x5790b5=_0x4d01cc[_0x148d('0xe')](_0x2226e7),_0x2037a5=_0x59e539):null!=_0x2226e7&&(_0x5790b5=_0x2226e7[_0x148d('0xf')],_0x2037a5=_0xc56f8b),_0xc9f6c()&&_0x559f29((null!=_0x2226e7?-0x1*_0x5790b5-_0x2037a5:0x0)*_0x2c6e2a),_0x2fe67f=_0x11b5f3?_0x59e539<_0x129984?'up':_0x129984<_0x59e539?'down':_0x148d('0x10'):_0xc56f8b<_0x1aeb22?_0x148d('0x11'):_0x1aeb22<_0xc56f8b?_0x148d('0x12'):'none',_0x5eb82c[_0x148d('0x8')]&&(_0xc9f6c()&&(_0x40aff6=_0x11b5f3&&_0x58deda()?_0x129984-_0x59e539-_0x5c646e:_0x1aeb22-_0xc56f8b-_0x35c914),_0x559f29(_0x40aff6));var _0x3f0ef3=_0x11b5f3?_0x59e539:_0xc56f8b;if(!_0x5eb82c[_0x148d('0x8')]&&_0x3f0ef3<0x0&&_0x4d01cc[_0x148d('0x13')](),_0x5eb82c[_0x58e0bf]()){if(_0x11b5f3)_0x59e539+=_0x5c646e*=_0x436e6b,_0x519a99(_0x516061,_0x148d('0x14'));else{if(!_0x3d8887())return;_0xc56f8b+=_0x35c914*=_0x436e6b;}var _0x2c8bc0,_0x42cb45;_0x5eb82c[_0x148d('0x8')]||_0x8224f||(_0x2c8bc0=_0x3f0ef3,_0x42cb45=_0x11b5f3?_0x59e539:_0xc56f8b,Math[_0x148d('0x15')](0x64*_0x42cb45)==Math[_0x148d('0x15')](0x64*_0x2c8bc0)&&_0x36987e++,_0x3d8887()&&0x2<_0x36987e&&(_0x5eb82c['isAnimating']=!0x1));}}(),function(){var _0x40aff6=_0x11b5f3?_0x516061:_0x808081(_0x4fb984,_0x3fdd85)[0x0];if(null!=_0x40aff6)if(_0x5b2d5a[_0x148d('0x16')]&&(!_0x11b5f3||_0x11b5f3&&_0x5b2d5a['autoScrolling']&&!_0x5b2d5a[_0x148d('0x17')])){var _0x5790b5=_0x11b5f3?'translate3d(0px,\x20'+Math[_0x148d('0x15')](_0x59e539)+_0x148d('0x18'):_0x148d('0x19')+Math[_0x148d('0x15')](_0xc56f8b)+_0x148d('0x1a');_0x1937e0(_0x40aff6,_0x4d01cc['getTransforms'](_0x5790b5));}else _0x5b2d5a[_0x148d('0x1b')]&&!_0x5b2d5a[_0x148d('0x17')]&&_0x11b5f3?_0x1937e0(_0x40aff6,_0x148d('0x1c'),Math[_0x148d('0x15')](_0x59e539)):_0x11b5f3?window[_0x148d('0x1d')](0x0,Math['round'](-_0x59e539)):_0x3498fb(_0x40aff6,_0x26238b)[_0x148d('0x1e')]=-0x1*Math['round'](_0xc56f8b);}()),_0x3f0ef3=window[_0x148d('0x1f')](_0x5f0cd5);}function _0x281a13(_0x40aff6){var _0x5790b5=_0x40aff6[_0x148d('0x20')],_0x2037a5=_0x5790b5[_0x148d('0x21')];void 0x0!==_0x5790b5[_0x148d('0x22')]||(_0x2037a5?_0x5eb82c['init']():_0x5eb82c[_0x148d('0x23')]());}function _0xc9f6c(){for(var _0x40aff6=0x0,_0x5790b5=_0x2326d2,_0x2037a5=0x0;_0x2037a5<0x4;_0x2037a5++)_0x2326d2=(_0x2037a5+(_0x40aff6+=_0x2037a5))/0x2;return _0x2326d2&&(_0x2326d2=_0x5790b5),_0x40aff6/_0x2326d2['length']===_0x2326d2[_0x148d('0x24')]+0x1;}function _0x559f29(_0x40aff6){_0x11b5f3?_0x5c646e+=_0x40aff6:_0x35c914+=_0x40aff6;}function _0x10247f(_0x40aff6){if(window[_0x148d('0x25')](_0x148d('0x26'),_0x899563),window[_0x148d('0x25')](_0x148d('0x27'),_0x10247f),_0x3295b3)_0x3295b3=!0x1;else{var _0x5790b5=_0x11b5f3?_0x19d32a['getWindowHeight']():window['innerWidth']||document['documentElement'][_0x148d('0x28')]||document['getElementsByTagName'](_0x148d('0x29'))[0x0][_0x148d('0x28')];if((_0x1701ba<0x1e||_0x1701ba<_0x5790b5/0x2&&!(_0x2fe67f===_0x40effc))&&(_0x2226e7=_0x11b5f3?_0x808081(_0x4d0a83)[0x0]:_0x808081(_0xdb9228,_0x808081(_0x4d0a83)[0x0])[0x0]),!_0x11b5f3&&_0x2226e7&&_0x5eb82c[_0x148d('0x8')]&&_0x5eb82c[_0x148d('0x2a')]){var _0x2037a5=_0x808081(_0x26238b,_0x3fdd85)[0x0];null!=_0x2037a5&&_0x4d01cc[_0x148d('0x2b')](_0x2037a5,_0x2226e7,_0x40effc);}if(_0x519a99(_0x516061,'onGrab',!0x1),_0x5eb82c[_0x148d('0x8')]=!0x1,_0x8224f=!0x1,!_0x2247f2)if(_0x11b5f3){var _0x3f0ef3={'up':null!=_0x51420e(_0x808081(_0x4d0a83)[0x0])?_0x1db56d(_0x2226e7):_0x808081(_0x4d0a83)[0x0],'down':null!=_0x1db56d(_0x808081(_0x4d0a83)[0x0])?_0x51420e(_0x2226e7):_0x808081(_0x4d0a83)[0x0]};if(_0x3f0ef3[_0x40effc]){var _0x2c8bc0=_0x808081(_0xdb9228,_0x3f0ef3[_0x40effc])[0x0];_0x148d('0x10')!==_0x40effc&&null!=_0x2c8bc0&&_0x4d01cc[_0x148d('0x2c')](_0x2c8bc0,_0x148d('0x2d'));}}else _0x4d01cc[_0x148d('0x2e')](_0x4d01cc[_0x148d('0xe')](_0x808081(_0x4d0a83)[0x0]));}}function _0x58deda(){return parseInt(_0x808081('#'+_0x2326d2)[0x0][_0x148d('0x21')])===_0x2326d2[_0x148d('0x24')]*_0x808081(_0x542ce1)[_0x148d('0x24')]-0x1;}function _0x2fd46b(_0x40aff6){if(_0x8224f=!(_0x36987e=0x0),new Date()[_0x148d('0x2f')](),_0x4d01cc[_0x148d('0x30')](_0x40aff6)&&_0x58deda()){var _0x5790b5=_0x4d01cc[_0x148d('0x31')](_0x40aff6);_0x3b0d71=_0x5790b5['y'],_0xa54e51=_0x5790b5['x'],_0x3846d2=_0x5eb82c[_0x148d('0x32')](),_0x3b33cf=_0x5eb82c['getCurrentScrollSlides'](_0x40aff6),[_0x148d('0x33'),_0x1992d0[_0x148d('0x34')]]['forEach'](function(_0x40aff6){window[_0x148d('0x35')](_0x40aff6,_0x899563,{'passive':!0x1});}),window[_0x148d('0x35')]('touchend',_0x10247f);}}function _0x5287a3(_0x40aff6){_0x516061=_0x516061||_0x808081(_0x42cb45)[0x0],_0x40aff6['target']===_0x808081(_0x148d('0x36'))[0x0]||0x3==_0x40aff6[_0x148d('0x37')]?(_0x3295b3=!0x0,_0x5b2d5a[_0x148d('0x38')]=!0x0):(_0x2247f2=_0x36987e,_0x8224f=!(_0x36987e=0x0),new Date()['getTime'](),_0x5eb82c[_0x58e0bf]()&&(_0x3b0d71=_0x29aec(_0x40aff6,'y'),_0xa54e51=_0x29aec(_0x40aff6,'x'),_0x3846d2=_0x5eb82c[_0x148d('0x32')](),_0x3b33cf=_0x5eb82c['getCurrentScrollSlides'](_0x40aff6),_0x899563(_0x40aff6))),window['addEventListener'](_0x148d('0x26'),_0x899563),window['addEventListener']('mouseup',_0x10247f);}function _0x29aec(_0x40aff6,_0x5790b5){var _0x2037a5='x'===_0x5790b5;if(_0x4d01cc[_0x148d('0x39')]&&_0x4d01cc[_0x148d('0x30')](_0x40aff6)){var _0x3f0ef3=_0x4d01cc[_0x148d('0x31')](_0x40aff6);return _0x2037a5?_0x3f0ef3['x']:_0x3f0ef3['y'];}return!!_0x5eb82c[_0x58e0bf]()&&(_0x2037a5?_0x40aff6[_0x148d('0x3a')]:_0x5b2d5a[_0x148d('0x17')]||!_0x5b2d5a[_0x148d('0x1b')]?_0x40aff6[_0x148d('0x3b')]:_0x40aff6[_0x148d('0x3c')]);}function _0x3d8887(){return _0x58deda()&&!0x1===_0x5b2d5a[_0x148d('0x3d')]&&0x14a===_0x5b2d5a[_0x148d('0x3e')];}function _0x899563(_0x40aff6){var _0x5790b5,_0x2037a5;_0x2037a5=_0x29aec(_0x40aff6,'x');var _0x3f0ef3,_0x2c8bc0,_0x42cb45,_0x26238b,_0x2fe67f,_0x2247f2=(_0x5790b5=_0x29aec(_0x40aff6,'y'))-_0x3b0d71,_0x24c975=_0x2037a5-_0xa54e51;if(_0x3d8887()&&!(Math['abs'](_0x2247f2)<0x5&&Math[_0x148d('0x3f')](_0x24c975)<0x5)&&!(Math['abs'](_0x2247f2)<0x5&&Math[_0x148d('0x3f')](_0x2247f2)>Math[_0x148d('0x3f')](_0x24c975))&&!(Math[_0x148d('0x3f')](_0x24c975)<0x5&&Math[_0x148d('0x3f')](_0x24c975)>Math[_0x148d('0x3f')](_0x2247f2))&&_0x58e0bf()){if(_0x8224f){if(!_0x5eb82c[_0x148d('0x8')]){_0x11b5f3=Math[_0x148d('0x3f')](_0x2247f2)>Math['abs'](_0x24c975),_0x4d01cc[_0x148d('0x40')](_0x516061);var _0x36987e=_0x808081(_0x4fb984,_0x3fdd85)[0x0];null!=_0x36987e&&_0x4d01cc[_0x148d('0x40')](_0x36987e);}_0x519a99(_0x516061,_0x148d('0x41'),!0x0),_0x5eb82c['isGrabbing']=!0x0;}var _0x5c646e=_0x3498fb(_0x40aff6['target'],_0x542ce1),_0x35c914=_0x5c646e?_0x808081(_0xdb9228,_0x5c646e)[0x0]:null,_0x2c6e2a=_0x808081(_0x4d0a83)[0x0],_0x436e6b={'up':_0x51420e(_0x2c6e2a),'down':_0x1db56d(_0x2c6e2a),'left':_0x35c914?_0x51420e(_0x35c914):null,'right':_0x35c914?_0x1db56d(_0x35c914):null,'none':_0x2c6e2a};if(_0x5eb82c['isGrabbing']&&_0x3d8887()){function _0x3295b3(){return _0x5b2d5a[_0x148d('0x42')][_0x148d('0x24')]==_0x22dbb2[_0x148d('0x24')]-0x1-0x1&&_0x808081(_0x204eb0)[_0x148d('0x24')]==_0x22dbb2['length']/0x2;}if(_0x59e539=_0x5eb82c[_0x148d('0x32')](),_0xc56f8b=_0x5eb82c[_0x148d('0x43')](_0x40aff6),!_0x3295b3())return!0x1;_0x2c8bc0=_0x2037a5,_0x42cb45=_0x5790b5,_0x26238b=_0x11b5f3?_0x3b0d71:_0xa54e51,_0x2fe67f=_0x11b5f3?_0x42cb45:_0x2c8bc0,_0x1701ba=Math[_0x148d('0x3f')](_0x26238b-_0x2fe67f),_0x40effc=_0x2fe67f<_0x26238b&&_0xc9f6c()?_0x11b5f3?'down':'right':_0x26238b<_0x2fe67f?_0x11b5f3?'up':'left':_0x148d('0x10'),_0x2226e7=null!=(_0x3f0ef3=_0x2226e7=_0x436e6b[_0x40effc])?_0x3f0ef3:_0x11b5f3?_0x808081(_0x4d0a83)[0x0]:_0x808081(_0xdb9228,_0x3fdd85)[0x0],_0x5eb82c[_0x148d('0x2a')]=_0x148d('0x44')!==_0x5b2d5a['dragAndMove']&&_0x148d('0x45')!==_0x5b2d5a[_0x148d('0x46')]||_0x148d('0x44')===_0x5b2d5a['dragAndMove']&&_0x11b5f3||_0x148d('0x45')===_0x5b2d5a['dragAndMove']&&!_0x11b5f3,_0x5eb82c['isAnimating']=_0x5eb82c[_0x148d('0x2a')]&&_0x4d01cc[_0x148d('0x47')]['m'][_0x40effc];}_0x129984=_0x3846d2+_0x2247f2,_0x1aeb22=_0x3b33cf+_0x24c975,_0x5eb82c[_0x148d('0x2a')]&&_0x19d32a[_0x148d('0x48')](_0x40aff6);}function _0x58e0bf(){return _0x808081(_0x542ce1)[_0x148d('0x24')]==_0x22dbb2[_0x148d('0x24')]-0x2;}}function _0x4f27fd(_0x40aff6){var _0x5790b5=_0x40aff6?_0x148d('0x35'):'removeEventListener';[_0x148d('0x49'),_0x1992d0[_0x148d('0x4a')]][_0x148d('0x4b')](function(_0x40aff6){_0x516061[_0x5790b5](_0x40aff6,_0x4d01cc[_0x148d('0x4c')]);}),['touchmove',_0x1992d0[_0x148d('0x34')]]['forEach'](function(_0x40aff6){_0x516061[_0x5790b5](_0x40aff6,_0x4d01cc[_0x148d('0x4d')]);});}window[_0x148d('0x1f')]=window[_0x148d('0x4e')]||window[_0x148d('0x4f')]||window[_0x148d('0x50')]||function(_0x40aff6){_0x3f0ef3=window[_0x148d('0x51')](_0x40aff6,0x3e8/0x3c);},window[_0x148d('0x52')]=window[_0x148d('0x53')]||window[_0x148d('0x54')]||window[_0x148d('0x55')]||function(_0x40aff6){window[_0x148d('0x56')](_0x40aff6);},_0x5eb82c['init']=function(_0x40aff6){return _0x2c8bc0=_0x2c8bc0||_0x19d32a[_0x148d('0x57')]({},_0x5b2d5a)[_0x148d('0x46')],_0x5b2d5a[_0x148d('0x46')]=_0x2c8bc0,_0x5b2d5a[_0x148d('0x38')]=!0x1,[_0x148d('0x58'),'continuousVertical']['forEach'](function(_0x40aff6){_0x5b2d5a[_0x40aff6]&&(_0x5b2d5a[_0x40aff6]=!0x1,_0x19d32a['showError'](_0x148d('0x59'),_0x148d('0x5a')+_0x40aff6+_0x148d('0x5b')+_0x40aff6+_0x148d('0x5c')));}),_0x5b2d5a[_0x148d('0x5d')]&&_0x19d32a[_0x148d('0x5e')](_0x148d('0x5f'),_0x148d('0x60')),_0x148d('0x61')!==_0x5b2d5a[_0x148d('0x46')]&&window[_0x148d('0x35')](_0x148d('0x62'),_0x5287a3),_0x4d01cc[_0x148d('0x63')][_0x148d('0x35')]('setAllowScrolling',_0x281a13),_0x5f0cd5(),_0x5eb82c['turnOffTouch'](),_0x5eb82c;},_0x5eb82c[_0x58e0bf]=function(){return _0x808081(_0x22dbb2[0x0]['toLowerCase']())[_0x148d('0x24')]-0x9==_0x2037a5['length']+0x4*parseInt(_0x808081('#'+_0x2326d2)[0x0][_0x148d('0x21')][_0x148d('0x24')])&&_0x58deda();},_0x5eb82c['turnOffTouch']=function(){_0x516061=_0x516061||_0x808081(_0x42cb45)[0x0],'mouseonly'!==_0x5b2d5a['dragAndMove']&&null!=_0x516061&&(_0x4f27fd(!0x1),_0x148d('0x64')!==_0x5b2d5a[_0x148d('0x46')]&&['touchstart',_0x1992d0[_0x148d('0x4a')]][_0x148d('0x4b')](function(_0x40aff6){_0x516061['addEventListener'](_0x40aff6,_0x2fd46b);}));},_0x5eb82c[_0x148d('0x32')]=function(){if(!_0x5b2d5a[_0x148d('0x16')]||!_0x5b2d5a[_0x148d('0x1b')]||_0x5b2d5a[_0x148d('0x17')]||!_0x5eb82c[_0x58e0bf]())return _0x5b2d5a[_0x148d('0x1b')]&&!_0x5b2d5a[_0x148d('0x17')]?parseInt(getComputedStyle(_0x516061)[_0x148d('0x1c')]):-_0x19d32a[_0x148d('0x65')]();var _0x40aff6=getComputedStyle(_0x516061)[_0x148d('0x66')];return void 0x0!==(_0x40aff6=void 0x0===_0x40aff6?getComputedStyle(_0x516061)['-webkit-transform']:_0x40aff6)?parseInt(_0x40aff6[_0x148d('0x67')](',')[0x5]):void 0x0;},_0x5eb82c[_0x148d('0x43')]=function(_0x40aff6){var _0x5790b5=_0x3498fb(_0x40aff6[_0x148d('0x68')],_0x542ce1);null==(_0x3fdd85=null!=_0x5790b5?_0x5790b5:_0x3fdd85)&&(_0x3fdd85=_0x808081(_0x4d0a83)[0x0]);var _0x2037a5=_0x808081(_0x26238b,_0x3fdd85)[0x0];if(null!=_0x2037a5&&_0x5eb82c[_0x58e0bf]()&&_0xc9f6c()){var _0x3f0ef3=_0x808081(_0x4fb984,_0x2037a5)[0x0];if(!_0x5b2d5a[_0x148d('0x16')])return-_0x2037a5[_0x148d('0x1e')];var _0x2c8bc0=getComputedStyle(_0x3f0ef3)[_0x148d('0x66')];if(void 0x0!==(_0x2c8bc0=void 0x0===_0x2c8bc0?_0x808081(_0x42cb45)[_0x148d('0xa')]('-webkit-transform'):_0x2c8bc0))return _0x148d('0x10')===_0x2c8bc0?0x0:parseInt(_0x2c8bc0[_0x148d('0x67')](',')[0x4]);}return 0x0;},_0x5eb82c[_0x148d('0x69')]=function(){var _0x2037a5=0x0,_0x40aff6=_0x808081(_0x542ce1),_0x3f0ef3=_0x40aff6[_0x148d('0x24')];return _0x40aff6['forEach'](function(_0x40aff6,_0x5790b5){_0x5790b5!==_0x3f0ef3&&(_0x2037a5+=_0x40aff6[_0x148d('0x6a')]);}),_0x2037a5;},_0x5eb82c['destroy']=function(){[_0x148d('0x49'),_0x1992d0[_0x148d('0x4a')]]['forEach'](function(_0x40aff6){_0x516061[_0x148d('0x25')](_0x40aff6,_0x2fd46b);}),[_0x148d('0x33'),_0x1992d0[_0x148d('0x34')]][_0x148d('0x4b')](function(_0x40aff6){_0x516061[_0x148d('0x25')](_0x40aff6,_0x899563,{'passive':!0x1});}),_0x516061[_0x148d('0x25')]('touchend',_0x10247f),window[_0x148d('0x25')]('mousedown',_0x5287a3),window['removeEventListener'](_0x148d('0x26'),_0x899563),window[_0x148d('0x25')](_0x148d('0x27'),_0x10247f),window[_0x148d('0x52')](_0x3f0ef3),_0x3f0ef3=void 0x0,_0x4f27fd(!(_0x5b2d5a['dragAndMove']=!0x1));},_0x5eb82c[_0x148d('0x6b')]=function(){return!_0x11b5f3&&_0x24c975?_0x24c975:_0x24c975=_0x148d('0x4a')===_0x40effc;},_0x5eb82c['c']=_0x4d01cc['c'];var _0x1a38f1=_0x5eb82c[_0x148d('0x6c')[_0x148d('0x6d')](0x0)];return _0x148d('0x6e')===document['readyState']&&_0x1a38f1(_0x148d('0x46')),window[_0x148d('0x35')](_0x148d('0x6f'),function(){_0x1a38f1(_0x148d('0x46'));}),_0x5eb82c;};