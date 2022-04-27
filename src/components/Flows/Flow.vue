<template>
  <a-row style="overflow-y: scroll; " ref="container">
  <div class="wrapper">
    <a-col>
    <div class="col">
      <div class="drag-drawflow" :draggable="true" @dragstart="drag($event)" data-node="cellIncubator">
        <i class="fa fa-cog"></i><span> 细胞培养箱</span>
      </div>
      <div class="drag-drawflow" :draggable="true" @dragstart="drag($event)" data-node="centrifuge">
        <i class="fa fa-cog"></i><span> 离心机 </span>
      </div>
      <div class="drag-drawflow" :draggable="true" @dragstart="drag($event)" data-node="microscope">
        <i class="fa fa-cog"></i><span> 电子显微镜 </span>
      </div>
      <div class="drag-drawflow" :draggable="true" @dragstart="drag($event)" data-node="massSpectrometer">
        <i class="fa fa-cog"></i><span> 质谱仪 </span>
      </div>

    </div>
    </a-col>
    <div class="col-right">
      <div class="menu">
        <ul>
          <li @click="editor.changeModule('Home'); changeModule($event);" class="selected">实验计划</li>
<!--          <li @click="editor.changeModule('Other'); changeModule($event);">Other Module</li>-->
        </ul>
      </div>
      <div id="drawflow" @drop="drop($event)" @dragover="allowDrop($event)">

      </div>
<!--      <div class="btn-export" @click="Swal.fire({ title: 'Export',-->
<!--        html: '<pre><code>'+JSON.stringify(editor.export(), null,4)+'</code></pre>'-->
<!--        })">Export</div>-->
      <div class="btn-export" @click="export_html">Save</div>
      <div class="btn-clear" @click="editor.clearModuleSelected()">Clear</div>
<!--      <div class="btn-lock">-->
<!--        <a-button icon="lock" type="primary" id="lock" @click="editor.editor_mode='fixed'; changeMode('lock');"></a-button>-->
<!--        <a-button icon='unlock' type="primary" id="unlock" @click="editor.editor_mode='edit'; changeMode('unlock');" style="display:none;"></a-button>-->
<!--      </div>-->
      <div class="bar-zoom" >
        <a-space>
          <a-button @click="editor.zoom_out()" icon="minus" shape="circle"></a-button>
          <a-button @click="editor.zoom_in()" icon="plus" shape="circle" ></a-button>
        </a-space>

      </div>
      <component v-bind:is="drawer_component" ref="drawer"/>
<!--      <Drawer ref="drawer"></Drawer>-->
    </div>
  </div>
  </a-row>
</template>

<script>
import Vue from 'vue'
/*eslint-disable */
// import NodeClick from '@/components/Flows/NodeClick.vue'
import Drawflow from 'drawflow'
import DrawerMico from '@/components/Drawer/Drawer_mico';
import DrawerCell from '@/components/Drawer/Drawer_cell';
import styleDrawflow from 'drawflow/dist/drawflow.min.css'
/*eslint-enable */

let dataToImport = [{    "drawflow": {        "Home": {            "data": {                "14": {                    "id": 14,                    "name": "cellIncubator",                    "data": {},                    "class": "cellIncubator",                    "html": "\n            <div>\n              <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 细胞培养箱</div>\n            </div>\n            ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "18",                                    "input": "output_1"                                }                            ]                        },                        "input_2": {                            "connections": [                                {                                    "node": "17",                                    "input": "output_1"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "15",                                    "output": "input_2"                                }                            ]                        }                    },                    "pos_x": 347,                    "pos_y": 363                },                "15": {                    "id": 15,                    "name": "centrifuge",                    "data": {},                    "class": "centrifuge",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 离心机</div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "16",                                    "input": "output_1"                                }                            ]                        },                        "input_2": {                            "connections": [                                {                                    "node": "14",                                    "input": "output_1"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "19",                                    "output": "input_1"                                }                            ]                        },                        "output_2": {                            "connections": []                        }                    },                    "pos_x": 667,                    "pos_y": 278                },                "16": {                    "id": 16,                    "name": "microscope",                    "data": {                        "name": ""                    },                    "class": "microscope",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 电子显微镜</div>\n                <div class=\"box\">\n                  <p>输入放大倍数</p>\n                <input type=\"text\" df-name>\n                </div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "15",                                    "output": "input_1"                                }                            ]                        }                    },                    "pos_x": 159,                    "pos_y": 45                },                "17": {                    "id": 17,                    "name": "massSpectrometer",                    "data": {                        "channel": "channel_3"                    },                    "class": "massSpectrometer",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 质谱仪</div>\n                <div class=\"box\">\n                  <p>设定分析时间</p>\n                  <select df-channel>\n                    <option value=\"channel_1\">1个小时</option>\n                    <option value=\"channel_2\">2个小时</option>\n                    <option value=\"channel_3\">1个小时</option>\n                    <option value=\"channel_4\">1个小时</option>\n                  </select>\n                </div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "14",                                    "output": "input_2"                                }                            ]                        }                    },                    "pos_x": 56,                    "pos_y": 462                },                "18": {                    "id": 18,                    "name": "centrifuge",                    "data": {},                    "class": "centrifuge",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 离心机</div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": []                        },                        "input_2": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "14",                                    "output": "input_1"                                }                            ]                        },                        "output_2": {                            "connections": []                        }                    },                    "pos_x": 58,                    "pos_y": 294                },                "19": {                    "id": 19,                    "name": "cellIncubator",                    "data": {},                    "class": "cellIncubator",                    "html": "\n            <div>\n              <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 细胞培养箱</div>\n            </div>\n            ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "15",                                    "input": "output_1"                                }                            ]                        },                        "input_2": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": []                        }                    },                    "pos_x": 1009,                    "pos_y": 253                }            }        }    }},
  {    "drawflow": {        "Home": {            "data": {                "16": {                    "id": 16,                    "name": "microscope",                    "data": {                        "name": ""                    },                    "class": "microscope",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 电子显微镜</div>\n                <div class=\"box\">\n                  <p>输入放大倍数</p>\n                <input type=\"text\" df-name>\n                </div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "17",                                    "output": "input_1"                                },                                {                                    "node": "18",                                    "output": "input_2"                                }                            ]                        }                    },                    "pos_x": -18,                    "pos_y": 191                },                "17": {                    "id": 17,                    "name": "massSpectrometer",                    "data": {                        "channel": "channel_3"                    },                    "class": "massSpectrometer",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 质谱仪</div>\n                <div class=\"box\">\n                  <p>设定分析时间</p>\n                  <select df-channel>\n                    <option value=\"channel_1\">1个小时</option>\n                    <option value=\"channel_2\">2个小时</option>\n                    <option value=\"channel_3\">1个小时</option>\n                    <option value=\"channel_4\">1个小时</option>\n                  </select>\n                </div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "16",                                    "input": "output_1"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "18",                                    "output": "input_1"                                }                            ]                        }                    },                    "pos_x": 257,                    "pos_y": 63                },                "18": {                    "id": 18,                    "name": "centrifuge",                    "data": {},                    "class": "centrifuge",                    "html": "\n              <div>\n                <div class=\"title-box\"><i class=\"fa fa-cog\"></i> 离心机</div>\n              </div>\n              ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "17",                                    "input": "output_1"                                }                            ]                        },                        "input_2": {                            "connections": [                                {                                    "node": "16",                                    "input": "output_1"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": []                        },                        "output_2": {                            "connections": []                        }                    },                    "pos_x": 518,                    "pos_y": 409                }            }        },        "Other": {            "data": {                "8": {                    "id": 8,                    "name": "personalized",                    "data": {},                    "class": "personalized",                    "html": "\n            <div>\n              Personalized\n            </div>\n            ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "12",                                    "input": "output_1"                                },                                {                                    "node": "12",                                    "input": "output_2"                                },                                {                                    "node": "12",                                    "input": "output_3"                                },                                {                                    "node": "12",                                    "input": "output_4"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "9",                                    "output": "input_1"                                }                            ]                        }                    },                    "pos_x": 764,                    "pos_y": 227                },                "9": {                    "id": 9,                    "name": "dbclick",                    "data": {                        "name": "Hello World!!"                    },                    "class": "dbclick",                    "html": "\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": [                                {                                    "node": "8",                                    "input": "output_1"                                }                            ]                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "12",                                    "output": "input_2"                                }                            ]                        }                    },                    "pos_x": 209,                    "pos_y": 38                },                "12": {                    "id": 12,                    "name": "multiple",                    "data": {},                    "class": "multiple",                    "html": "\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ",                    "typenode": false,                    "inputs": {                        "input_1": {                            "connections": []                        },                        "input_2": {                            "connections": [                                {                                    "node": "9",                                    "input": "output_1"                                }                            ]                        },                        "input_3": {                            "connections": []                        }                    },                    "outputs": {                        "output_1": {                            "connections": [                                {                                    "node": "8",                                    "output": "input_1"                                }                            ]                        },                        "output_2": {                            "connections": [                                {                                    "node": "8",                                    "output": "input_1"                                }                            ]                        },                        "output_3": {                            "connections": [                                {                                    "node": "8",                                    "output": "input_1"                                }                            ]                        },                        "output_4": {                            "connections": [                                {                                    "node": "8",                                    "output": "input_1"                                }                            ]                        }                    },                    "pos_x": 179,                    "pos_y": 272                }            }        }    }},
  '',
]
let content_id = 0;
export default {
  name: 'Flow',
  components:{
    DrawerMico, DrawerCell
  },
  props: {
  },
  data() {
    return {
      editor: null,
      transform: '',
      mobile_item_selec: '',
      mobile_last_move: null,
      content_id: content_id,
      click_num: 0,
      data_import: dataToImport[content_id],
      timer: null,
      select_id: -1,
      drawer_component: "DrawerCell",
    }
  },

  mounted() {
    let that=this;
    const oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.integrity = "sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=";
    oScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js';
    oScript.crossOrigin = "anonymous"
    document.body.appendChild(oScript);

    const oScript3 = document.createElement('script');
    oScript3.type = 'text/javascript';
    oScript3.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@9';
    document.body.appendChild(oScript3);

    const oScript4 = document.createElement('script');
    oScript4.type = 'text/javascript';
    oScript4.src = 'https://unpkg.com/micromodal/dist/micromodal.min.js';
    document.body.appendChild(oScript4);


    var id = document.getElementById("drawflow");
    this.editor = new Drawflow(id);
    this.editor.reroute = true;
    // const dataToImport = {"drawflow":{"Home":{"data":{"1":{"id":1,"name":"welcome","data":{},"class":"welcome","html":"\n    <div>\n      <div class=\"title-box\">👏 Welcome!!</div>\n      <div class=\"box\">\n        <p>Simple flow library <b>demo</b>\n        <a href=\"https://github.com/jerosoler/Drawflow\" target=\"_blank\">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ","typenode": false, "inputs":{},"outputs":{},"pos_x":50,"pos_y":50},"2":{"id":2,"name":"slack","data":{},"class":"slack","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-slack\"></i> Slack chat message</div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1028,"pos_y":87},"3":{"id":3,"name":"telegram","data":{"channel":"channel_2"},"class":"telegram","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-telegram-plane\"></i> Telegram bot</div>\n            <div class=\"box\">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value=\"channel_1\">Channel 1</option>\n                <option value=\"channel_2\">Channel 2</option>\n                <option value=\"channel_3\">Channel 3</option>\n                <option value=\"channel_4\">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1032,"pos_y":184},"4":{"id":4,"name":"email","data":{},"class":"email","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-at\"></i> Send Email </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"}]}},"outputs":{},"pos_x":1033,"pos_y":439},"5":{"id":5,"name":"template","data":{"template":"Write your template"},"class":"template","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-code\"></i> Template</div>\n              <div class=\"box\">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"6","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"4","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":607,"pos_y":304},"6":{"id":6,"name":"github","data":{"name":"https://github.com/jerosoler/Drawflow"},"class":"github","html":"\n          <div>\n            <div class=\"title-box\"><i class=\"fab fa-github \"></i> Github Stars</div>\n            <div class=\"box\">\n              <p>Enter repository url</p>\n            <input type=\"text\" df-name>\n            </div>\n          </div>\n          ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":341,"pos_y":191},"7":{"id":7,"name":"facebook","data":{},"class":"facebook","html":"\n        <div>\n          <div class=\"title-box\"><i class=\"fab fa-facebook\"></i> Facebook Message</div>\n        </div>\n        ","typenode": false, "inputs":{},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"3","output":"input_1"},{"node":"11","output":"input_1"}]}},"pos_x":347,"pos_y":87},"11":{"id":11,"name":"log","data":{},"class":"log","html":"\n            <div>\n              <div class=\"title-box\"><i class=\"fas fa-file-signature\"></i> Save log file </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"5","input":"output_1"},{"node":"7","input":"output_1"}]}},"outputs":{},"pos_x":1031,"pos_y":363}}},"Other":{"data":{"8":{"id":8,"name":"personalized","data":{},"class":"personalized","html":"\n            <div>\n              Personalized\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"12","input":"output_1"},{"node":"12","input":"output_2"},{"node":"12","input":"output_3"},{"node":"12","input":"output_4"}]}},"outputs":{"output_1":{"connections":[{"node":"9","output":"input_1"}]}},"pos_x":764,"pos_y":227},"9":{"id":9,"name":"dbclick","data":{"name":"Hello World!!"},"class":"dbclick","html":"\n            <div>\n            <div class=\"title-box\"><i class=\"fas fa-mouse\"></i> Db Click</div>\n              <div class=\"box dbclickbox\" ondblclick=\"showpopup(event)\">\n                Db Click here\n                <div class=\"modal\" style=\"display:none\">\n                  <div class=\"modal-content\">\n                    <span class=\"close\" onclick=\"closemodal(event)\">&times;</span>\n                    Change your variable {name} !\n                    <input type=\"text\" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[{"node":"8","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"12","output":"input_2"}]}},"pos_x":209,"pos_y":38},"12":{"id":12,"name":"multiple","data":{},"class":"multiple","html":"\n            <div>\n              <div class=\"box\">\n                Multiple!\n              </div>\n            </div>\n            ","typenode": false, "inputs":{"input_1":{"connections":[]},"input_2":{"connections":[{"node":"9","input":"output_1"}]},"input_3":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"8","output":"input_1"}]},"output_2":{"connections":[{"node":"8","output":"input_1"}]},"output_3":{"connections":[{"node":"8","output":"input_1"}]},"output_4":{"connections":[{"node":"8","output":"input_1"}]}},"pos_x":179,"pos_y":272}}}}}
    // const dataToImport = {"Home":{}};
    this.editor.start();
    // assert(this.dataToImport)
    if (this.data_import !== '')
      this.editor.import(this.data_import);

    this.editor.on('nodeMoved', function() {
      that.export_html()
    })

    this.editor.on('nodeRemoved', function() {
      that.export_html()
    })

    this.editor.on('addReroute', function() {
      that.export_html()
    })

    this.editor.on('removeReroute', function() {
      that.export_html()
    })

    this.editor.on('click', function() {
      if(that.select_id!==-1) {
        let delay = 200;
        that.editor.editor_mode='edit';
        that.click_num++;
        if (that.click_num === 1) {
          that.timer = setTimeout(() => {
            that.click_num = 0
            // console.log(1)
            that.$refs.drawer.onClose()

          }, delay);
        } else {
          clearTimeout(that.timer);
          // console.log(2)
          that.click_num = 0;
          let info = that.editor.getNodeFromId(that.select_id);
          console.log(info.name)
          if (info.name === 'centrifuge' || info.name === 'massSpectrometer')
            that.drawer_component = 'DrawerCell'
          else
            that.drawer_component = 'DrawerMico'

          that.$refs.drawer.showDrawer()
          that.editor.editor_mode='fixed';
        }
      }
    })
    this.editor.on('nodeSelected', function(id) {
      that.select_id = id
    })

    this.editor.on('nodeUnselected', function() {
      that.select_id = -1
    })

    /* DRAG EVENT */

    /* Mouse and Touch Actions */

    var elements = document.getElementsByClassName('drag-drawflow');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', this.drop, false);
      elements[i].addEventListener('touchmove', this.positionMobile, false);
      elements[i].addEventListener('touchstart', this.drag, false );
    }

  },
  methods:{
    export_html(){
      // alert(123123)

      dataToImport[this.content_id] = this.editor.export()
      this.data_import = dataToImport[this.content_id]
      console.log(this.data_import)
    },
    changeChartData(content_id){
      this.content_id = content_id-1;
      this.data_import = dataToImport[this.content_id]
      this.drawChart()
    },
    positionMobile(ev) {
      this.mobile_last_move = ev;
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev) {
      this.editor.editor_mode='edit';
      if (ev.type === "touchstart") {
        this.mobile_item_selec = ev.target.closest(".drag-drawflow").getAttribute('data-node');
      } else {
        ev.dataTransfer.setData("node", ev.target.getAttribute('data-node'));
      }
      this.export_html()
    },
    drop(ev) {
      if (ev.type === "touchend") {
        const parentdrawflow = document.elementFromPoint(this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY).closest("#drawflow");
        if(parentdrawflow != null) {
          this.addNodeToDrawFlow(this.mobile_item_selec, this.mobile_last_move.touches[0].clientX, this.mobile_last_move.touches[0].clientY);
        }
        this.mobile_item_selec = '';

      } else {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("node");
        this.addNodeToDrawFlow(data, ev.clientX, ev.clientY);
      }
      this.export_html()
    },
    addNodeToDrawFlow(name, pos_x, pos_y) {
      if(this.editor.editor_mode === 'fixed') {
        return false;
      }
      pos_x = pos_x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().x * ( this.editor.precanvas.clientWidth / (this.editor.precanvas.clientWidth * this.editor.zoom)));
      pos_y = pos_y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)) - (this.editor.precanvas.getBoundingClientRect().y * ( this.editor.precanvas.clientHeight / (this.editor.precanvas.clientHeight * this.editor.zoom)));


      switch (name) {
        case 'cellIncubator':
          var cellIncubator = `
            <div>
              <div class="title-box"><i class="fa fa-cog"></i> 细胞培养箱</div>
            </div>
            `;
          this.editor.addNode('cellIncubator', 2,  1, pos_x, pos_y, 'cellIncubator', {}, cellIncubator );
          break;
        case 'centrifuge':
          var centrifuge = `
              <div>
                <div class="title-box"><i class="fa fa-cog"></i> 离心机</div>
              </div>
              `
          this.editor.addNode('centrifuge', 2, 2, pos_x, pos_y, 'centrifuge', {}, centrifuge );
          break;
        case 'microscope':
          var microscope = `
              <div>
                <div class="title-box"><i class="fa fa-cog"></i> 电子显微镜</div>
                <div class="box">
                  <p>输入放大倍数</p>
                <input type="text" df-name>
                </div>
              </div>
              `;
          this.editor.addNode('microscope', 1, 1, pos_x, pos_y, 'microscope', { "name": ''}, microscope );
          break;
        case 'massSpectrometer':
          var massSpectrometer = `
              <div>
                <div class="title-box"><i class="fa fa-cog"></i> 质谱仪</div>
                <div class="box">
                  <p>设定分析时间</p>
                  <select df-channel>
                    <option value="channel_1">1个小时</option>
                    <option value="channel_2">2个小时</option>
                    <option value="channel_3">1个小时</option>
                    <option value="channel_4">1个小时</option>
                  </select>
                </div>
              </div>
              `;
          this.editor.addNode('massSpectrometer', 1, 1, pos_x, pos_y, 'massSpectrometer', { "channel": 'channel_3'}, massSpectrometer );
          break;

        default:
      }
    },
    changeMode(option) {
      let lock = document.getElementById("lock");
      let unlock = document.getElementById("unlock");
      //console.log(lock.id);
      if (option == 'lock') {
        lock.style.display = 'none';
        unlock.style.display = 'block';
      } else {
        lock.style.display = 'block';
        unlock.style.display = 'none';
      }
    },
    closemodal(e) {
        e.target.closest(".drawflow-node").style.zIndex = "2";
        e.target.parentElement.parentElement.style.display  ="none";
        //document.getElementById("modalfix").style.display = "none";
        this.editor.precanvas.style.transform = transform;
        this.editor.precanvas.style.left = '0px';
        this.editor.precanvas.style.top = '0px';
        this.editor.editor_mode = "edit";
    },
    drawChart(){
      this.editor.clearModuleSelected();
      if(this.data_import !== '')
        this.editor.import(this.data_import)
    },
    changeModule(event) {
      var all = document.querySelectorAll(".menu ul li");
      for (var i = 0; i < all.length; i++) {
        all[i].classList.remove('selected');
      }
      event.target.classList.add('selected');
    },
    showpopup(e) {
      e.target.closest(".drawflow-node").style.zIndex = "9999";
      e.target.children[0].style.display = "block";
      //document.getElementById("modalfix").style.display = "block";

      //e.target.children[0].style.transform = 'translate('+translate.x+'px, '+translate.y+'px)';
      this.transform = this.editor.precanvas.style.transform;
      this.editor.precanvas.style.transform = '';
      this.editor.precanvas.style.left = this.editor.canvas_x +'px';
      this.editor.precanvas.style.top = this.editor.canvas_y +'px';
      console.log(this.transform);

      //e.target.children[0].style.top  =  -editor.canvas_y - editor.container.offsetTop +'px';
      //e.target.children[0].style.left  =  -editor.canvas_x  - editor.container.offsetLeft +'px';
      this.editor.editor_mode = "fixed";

    }
  }
}
</script>

<style scoped>

@import 'https://cdn.jsdelivr.net/gh/jerosoler/Drawflow@0.0.48/dist/drawflow.min.css';
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";
@import "beautiful.css";
/*#drawflow {*/
/*  width: 100%;*/
/*  height: 500px;*/
/*  border: 1px solid red;*/
/*}*/
</style>