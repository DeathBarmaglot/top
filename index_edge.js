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
                rect: ['-195px', '1px','188px','180px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Untitled-12.png",'0px','0px']
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
                rect: ['200px', '37px','81px','113px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ol1.png",'0px','0px']
            },
            {
                id: 'l12',
                type: 'image',
                rect: ['198px', '24px','85px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l12.png",'0px','0px']
            },
            {
                id: 'ol2',
                type: 'image',
                rect: ['208px', '41px','66px','99px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ol2.png",'0px','0px']
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['186px', '11px','105px','159px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.png",'0px','0px']
            },
            {
                id: 'top',
                type: 'image',
                rect: ['130px', '132px','51px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_top}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0'],
                ["style", "left", '130px']
            ],
            "${_Untitled-12}": [
                ["style", "top", '1px'],
                ["style", "height", '180px'],
                ["style", "left", '-195px'],
                ["style", "width", '188px']
            ],
            "${_br}": [
                ["style", "top", '15px'],
                ["style", "background-position", [198,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '19px'],
                ["style", "clip", [0,193,31,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ol1}": [
                ["style", "top", '37px'],
                ["style", "height", '113px'],
                ["style", "opacity", '0'],
                ["style", "left", '200px'],
                ["style", "width", '81px']
            ],
            "${_pre}": [
                ["style", "top", '128px'],
                ["style", "opacity", '0'],
                ["style", "left", '199px']
            ],
            "${_l2}": [
                ["style", "top", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '186px']
            ],
            "${_bg}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_ni}": [
                ["style", "top", '-2px'],
                ["transform", "scaleY", '0.9'],
                ["style", "height", '180px'],
                ["transform", "scaleX", '0.9'],
                ["style", "opacity", '0'],
                ["style", "left", '218px'],
                ["style", "width", '73px']
            ],
            "${_l12}": [
                ["style", "top", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '198px']
            ],
            "${_ob}": [
                ["style", "top", '57px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '1'],
                ["style", "left", '-9px'],
                ["style", "clip", [0,252,-9.75,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ol2}": [
                ["style", "top", '41px'],
                ["style", "opacity", '0'],
                ["style", "left", '208px']
            ],
            "${_btn}": [
                ["style", "top", '134px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12187,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "transform", "${_btn}", "scaleX", '1.1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid27", tween: [ "transform", "${_btn}", "scaleX", '0.9', { fromValue: '1.1'}], position: 2229, duration: 206, easing: "easeInOutQuad" },
                { id: "eid16", tween: [ "style", "${_ni}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 690, easing: "easeInOutQuad" },
                { id: "eid50", tween: [ "style", "${_ni}", "opacity", '0', { fromValue: '1'}], position: 4717, duration: 377, easing: "easeInOutQuad" },
                { id: "eid52", tween: [ "style", "${_ol1}", "opacity", '1', { fromValue: '0'}], position: 5277, duration: 419, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_ol1}", "opacity", '0', { fromValue: '1'}], position: 6657, duration: 419, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_br}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [198,0]}], position: 0, duration: 690, easing: "easeInOutQuad" },
                { id: "eid41", tween: [ "style", "${_br}", "background-position", [204,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0.000000,0.000000]}], position: 4811, duration: 265, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "style", "${_top}", "opacity", '1', { fromValue: '0'}], position: 5012, duration: 265, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "transform", "${_btn}", "scaleY", '1.1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid28", tween: [ "transform", "${_btn}", "scaleY", '0.9', { fromValue: '1.1'}], position: 2229, duration: 206, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "style", "${_pre}", "opacity", '1', { fromValue: '0'}], position: 1114, duration: 784, easing: "easeInOutQuad" },
                { id: "eid38", tween: [ "style", "${_pre}", "opacity", '0', { fromValue: '1'}], position: 3980, duration: 377, easing: "easeInOutQuad" },
                { id: "eid42", tween: [ "style", "${_Untitled-12}", "left", '3px', { fromValue: '-195px'}], position: 4811, duration: 265, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "style", "${_ob}", "clip", [0,252,69,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,252,-9.75,0]}], position: 690, duration: 784, easing: "easeInOutQuad" },
                { id: "eid58", tween: [ "style", "${_l2}", "opacity", '1', { fromValue: '0'}], position: 10389, duration: 419, easing: "easeInOutQuad" },
                { id: "eid59", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 11768, duration: 419, easing: "easeInOutQuad" },
                { id: "eid36", tween: [ "style", "${_ob}", "opacity", '0', { fromValue: '1'}], position: 3832, duration: 377, easing: "easeInOutQuad" },
                { id: "eid60", tween: [ "style", "${_ol2}", "opacity", '1', { fromValue: '0'}], position: 8732, duration: 419, easing: "easeInOutQuad" },
                { id: "eid61", tween: [ "style", "${_ol2}", "opacity", '0', { fromValue: '1'}], position: 10112, duration: 419, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_btn}", "opacity", '1', { fromValue: '0'}], position: 1769, duration: 460, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_btn}", "opacity", '0', { fromValue: '1'}], position: 4210, duration: 377, easing: "easeInOutQuad" },
                { id: "eid57", tween: [ "style", "${_l12}", "opacity", '1', { fromValue: '0'}], position: 6934, duration: 419, easing: "easeInOutQuad" },
                { id: "eid56", tween: [ "style", "${_l12}", "opacity", '0', { fromValue: '1'}], position: 8313, duration: 419, easing: "easeInOutQuad" }            ]
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
                    rect: ['46px', '0px', '177px', '180px', 'auto', 'auto'],
                    transform: [[], [], ['-27']],
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
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "left", '46px'],
                ["transform", "skewX", '-27deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '180px'],
                ["style", "width", '269px']
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
