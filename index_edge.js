/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg',
                type: 'image',
                rect: ['0px', '0px','300px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px']
            },
            {
                id: 'btn',
                type: 'image',
                rect: ['15px', '134px','164px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"btn.png",'0px','0px']
            },
            {
                id: 'ob',
                type: 'image',
                rect: ['-9px', '57px','252px','69px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ob.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'br',
                type: 'image',
                rect: ['19px', '15px','241px','31px','auto', 'auto'],
                clip: ['rect(0px 193px 31px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"br.png",'0px','0px']
            },
            {
                id: 'pre',
                type: 'image',
                rect: ['199px', '128px','45px','44px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pre.png",'0px','0px']
            },
            {
                id: 'Untitled-12',
                type: 'image',
                rect: ['-195px', '1px','198px','190px','auto', 'auto'],
                clip: ['rect(0px 198px 180px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-12.png",'0px','0px'],
                transform: [[],[],[],['1.04444','1.04444']]
            },
            {
                id: 'ni',
                type: 'image',
                rect: ['218px', '-2px','73px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ni.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'ol1',
                type: 'image',
                rect: ['205px', '36px','81px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ol1.png",'0px','0px']
            },
            {
                id: 'l12',
                type: 'image',
                rect: ['206px', '21px','85px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l12.png",'0px','0px']
            },
            {
                id: 'ol2',
                type: 'image',
                rect: ['209px', '41px','66px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ol2.png",'0px','0px']
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['187px', '11px','105px','159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px']
            },
            {
                id: 'top',
                type: 'image',
                rect: ['127px', '137px','51px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top.png",'0px','0px']
            },
            {
                id: 'logo2',
                type: 'image',
                rect: ['166px', '15px','148px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["style", "top", '137px'],
                ["style", "opacity", '0'],
                ["style", "left", '127px']
            ],
            "${_Untitled-12}": [
                ["style", "top", '1px'],
                ["transform", "scaleX", '1.04444'],
                ["transform", "scaleY", '1.04444'],
                ["style", "clip", [0,198,180,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '190px'],
                ["style", "opacity", '0'],
                ["style", "left", '-195px'],
                ["style", "width", '198px']
            ],
            "${_logo2}": [
                ["style", "top", '15px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "height", '148px'],
                ["style", "opacity", '0'],
                ["style", "left", '166px'],
                ["style", "width", '148px']
            ],
            "${_br}": [
                ["style", "top", '15px'],
                ["style", "clip", [0,193,31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [198,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '19px']
            ],
            "${_l2}": [
                ["style", "top", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '187px']
            ],
            "${_btn}": [
                ["style", "top", '134px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '15px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ni}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.9'],
                ["transform", "scaleX", '0.9'],
                ["style", "height", '180px'],
                ["style", "opacity", '0'],
                ["style", "left", '218px'],
                ["style", "width", '73px']
            ],
            "${_ob}": [
                ["style", "top", '57px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '1'],
                ["style", "left", '-9px'],
                ["style", "clip", [0,252,-9.75,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pre}": [
                ["style", "top", '128px'],
                ["style", "opacity", '0'],
                ["style", "left", '199px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_ol2}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '209px']
            ],
            "${_l12}": [
                ["style", "top", '21px'],
                ["style", "opacity", '0'],
                ["style", "left", '206px']
            ],
            "${_ol1}": [
                ["style", "top", '36px'],
                ["style", "height", '113px'],
                ["style", "opacity", '0'],
                ["style", "left", '205px'],
                ["style", "width", '81px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 20000,
            autoPlay: true,
            timeline: [
                { id: "eid64", tween: [ "style", "${_l12}", "opacity", '1', { fromValue: '0'}], position: 11392, duration: 419, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "style", "${_l12}", "opacity", '0', { fromValue: '1'}], position: 13615, duration: 419, easing: "easeInOutQuad" },
                { id: "eid16", tween: [ "style", "${_ni}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 666, easing: "easeInOutQuad" },
                { id: "eid104", tween: [ "style", "${_ni}", "opacity", '0', { fromValue: '1'}], position: 4866, duration: 790, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_br}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [198,0]}], position: 0, duration: 690, easing: "easeInOutQuad" },
                { id: "eid41", tween: [ "style", "${_br}", "background-position", [204,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4669, duration: 483, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "style", "${_top}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 483, easing: "easeInOutQuad" },
                { id: "eid73", tween: [ "style", "${_top}", "opacity", '0', { fromValue: '1'}], position: 19240, duration: 655, easing: "easeInOutQuad" },
                { id: "eid42", tween: [ "style", "${_Untitled-12}", "left", '4px', { fromValue: '-195px'}], position: 4866, duration: 483, easing: "easeInOutQuad" },
                { id: "eid63", tween: [ "style", "${_Untitled-12}", "opacity", '1', { fromValue: '0'}], position: 5061, duration: 483, easing: "easeInOutQuad" },
                { id: "eid72", tween: [ "style", "${_Untitled-12}", "opacity", '0', { fromValue: '1'}], position: 19318, duration: 655, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_ol1}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 419, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_ol1}", "opacity", '0', { fromValue: '1'}], position: 10973, duration: 419, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 16676, duration: 419, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 18899, duration: 419, easing: "easeInOutQuad" },
                { id: "eid107", tween: [ "style", "${_logo2}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 419, easing: "easeInOutQuad" },
                { id: "eid108", tween: [ "style", "${_logo2}", "opacity", '0', { fromValue: '1'}], position: 8223, duration: 419, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "transform", "${_btn}", "scaleY", '1.1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "transform", "${_btn}", "scaleY", '0.9', { fromValue: '1.1'}], position: 2229, duration: 206, easing: "easeInOutQuad" },
                { id: "eid88", tween: [ "transform", "${_btn}", "scaleY", '1', { fromValue: '0.9'}], position: 3500, duration: 139, easing: "easeInOutQuad" },
                { id: "eid90", tween: [ "transform", "${_btn}", "scaleY", '0.9', { fromValue: '1'}], position: 3639, duration: 341, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_btn}", "opacity", '1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_btn}", "opacity", '0', { fromValue: '1'}], position: 4123, duration: 377, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "style", "${_pre}", "opacity", '1', { fromValue: '0'}], position: 1114, duration: 784, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_pre}", "opacity", '0', { fromValue: '1'}], position: 3980, duration: 377, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "style", "${_ob}", "clip", [0,252,69,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,252,-9.75,0]}], position: 690, duration: 784, easing: "easeInOutQuad" },
                { id: "eid36", tween: [ "style", "${_ob}", "opacity", '0', { fromValue: '1'}], position: 3832, duration: 377, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "style", "${_ol2}", "opacity", '1', { fromValue: '0'}], position: 14034, duration: 419, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "style", "${_ol2}", "opacity", '0', { fromValue: '1'}], position: 16257, duration: 419, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "transform", "${_btn}", "scaleX", '1.1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "transform", "${_btn}", "scaleX", '0.9', { fromValue: '1.1'}], position: 2229, duration: 206, easing: "easeInOutQuad" },
                { id: "eid87", tween: [ "transform", "${_btn}", "scaleX", '1', { fromValue: '0.9'}], position: 3500, duration: 139, easing: "easeInOutQuad" },
                { id: "eid89", tween: [ "transform", "${_btn}", "scaleX", '0.9', { fromValue: '1'}], position: 3639, duration: 341, easing: "easeInOutQuad" }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], ['-27']],
                    rect: ['46px', '0px', '177px', '180px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '269px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "top", '0px'],
                ["style", "left", '46px'],
                ["transform", "skewX", '-27deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11925037");
