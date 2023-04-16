/**
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
										 ❥ 模块可视化代码生成器
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
											   ▄▀▄     ▄▀▄
											  ▄█░░▀▀▀▀▀░░█▄
										  ▄▄  █░░░░░░░░░░░█  ▄▄
										 █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

									❥感谢以下贡献者为本项目做出的贡献！
				[@dabyss zirawa_sevethri](zwa73@hotmail.com(1842565036)) - 编写的生成器代码
									❥本项目由多个来自全球顶尖的科技公司技术强力驱动
									❥@Google-Blockly @openai-GPT3.5-turbo
									❥这个花俏的注释，占用了一半的开发时间

●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
*/

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬模块库▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

var cddaBlocks =[
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试输入▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬文本▬▬▬▬▬▬▬▬▬▬●
{
  "type": "block_item_text",
  "message0": "文本 %1",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "内容"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

//●▬▬▬▬▬▬▬▬▬flags▬▬▬▬▬▬▬▬▬▬●
{
  "type": "block_flags",
  "message0": "Flags: %1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "flag_1"
    },
    {
      "type": "input_value",
      "name": "flag_2"
    },
    {
      "type": "input_value",
      "name": "flag_3"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "到时候再做动态添加,现在先简单的组装",
  "helpUrl": ""
},

//●▬▬▬▬▬▬▬▬▬▬flag▬▬▬▬▬▬▬▬▬▬●
{
  "type": "block_flag_item",
  "message0": "FLAG: %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "flag_item",
      "options": [
        [
          "雨水保护",
          "RAIN_PROTECT"
        ],
        [
          "溶解于水",
          "WATER_DISSOLVE"
        ],
        [
          "洗涤剂",
          "DETERGENT"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 150,
  "tooltip": "添加一个FLAG",
  "helpUrl": ""
},
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试输入▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬价值▬▬▬▬▬▬▬▬▬▬●
{
  "type": "block_value",
  "message0": "价值: %1",
  "args0": [
    {
      "type": "field_input",
      "name": "value",
      "text": "0"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},

//●▬▬▬▬▬▬▬▬滑块测试▬▬▬▬▬▬▬▬●
{
  "type": "test_field_slider",
  "message0": "滑块测试 %1",
  "args0": [
    {
      "type": "field_slider",
      "name": "FIELDNAME",
      "value": 50,
      "min": 0,
      "max": 1000
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 195,
  "tooltip": "测试滑块",
  "helpUrl": ""
},

//●▬▬▬▬▬▬选择网格测试▬▬▬▬▬▬●
//https://developers.google.com/blockly/guides/create-custom-blocks/fields/built-in-fields/dropdown#creation
{
	"type": "test_field_grid_dropdown",
	"message0": "选择网格测试: %1",
	"args0": [
		{
			"type": "field_grid_dropdown",
			"name": "FIELDNAME",
			"columns": 3,
			"primaryColour": "#333333",
			"borderColour": "#393939",
			"options": [
					["木头", "A"],["皮革", "B"], ["塑料", "C"],["纸", "D"],
					["钢", "E"], ["铜", "F"], ["银", "G"], ["金", "H"]
			]
		}
	],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 171,
  "tooltip": "测试选择网格",
  "helpUrl": ""
},

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬绿皮模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
{
  "type": "item",
  "message0": "%1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "类型",
      "text": "物品类型"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "书籍",
          "BOOK"
        ],
        [
          "工具",
          "TOOL"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "id"
    },
    {
      "type": "field_input",
      "name": "id",
      "text": "物品的ID"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "名称"
    },
    {
      "type": "field_input",
      "name": "name",
      "text": "物品的名称"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "描述"
    },
    {
      "type": "field_input",
      "name": "description",
      "text": "物品的描述"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "符号"
    },
    {
      "type": "field_input",
      "name": "symbol",
      "text": "物品的符号"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "NAME",
      "text": "颜色"
    },
    {
      "type": "field_colour",
      "name": "color",
      "colour": "#cc33cc"
    }
  ],
  "nextStatement": null,
  "colour": 195,
  "tooltip": "物品的必要属性",
  "helpUrl": ""
},
{
  "type": "weightvolume",
  "message0": "%1 %2 %3 %4 %5 %6 %7",
  "args0": [
    {
      "type": "field_label_serializable",
      "name": "重量",
      "text": "重量 :"
    },
    {
      "type": "field_input",
      "name": "indata",
      "text": "0"
    },
    {
      "type": "field_label_serializable",
      "name": "g",
      "text": "g"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_label_serializable",
      "name": "体积",
      "text": "体积 :"
    },
    {
      "type": "field_input",
      "name": "indata2",
      "text": "0"
    },
    {
      "type": "field_label_serializable",
      "name": "ml",
      "text": "ml"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  //"style": "logic_blocks",
  "tooltip": "物品的重量和体积.",
  "helpUrl": ""
}
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
]
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬模块库▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●


//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬加载模块库▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
for (var iBlock in cddaBlocks) {
  function makeBlock(json) {
    Blockly.Blocks[json.type] = {
      init: function() {
        this.jsonInit(json);
      }
    }
  }
  makeBlock(cddaBlocks[iBlock]);
}
//换行测试
Blockly.common.defineBlocksWithJsonArray([
  {
    'type': 'inline_test',
    'message0': 'input A %1 %2 input B %3',
    'args0': [
      {'type': 'input_value', 'name': 'A'},
      {'type': 'input_dummy'},
      {'type': 'input_value', 'name': 'B'},
    ],
    'inputsInline': true,
  },
]);