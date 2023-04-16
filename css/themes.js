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

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬主题▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

Blockly.Themes.Modern = Blockly.Theme.defineTheme('modern', {
  'base': Blockly.Themes.Classic,
  //分类
  'categoryStyles': {
    'colour_category': {
      'colour': '#a5745b',
    },
    'list_category': {
      'colour': '#745ba5',
    },
    'logic_category': {
      'colour': '#5b80a5',
    },
    'loop_category': {
      'colour': '#5ba55b',
    },
    'math_category': {
      'colour': '#5b67a5',
    },
    'procedure_category': {
      'colour': '#995ba5',
    },
    'text_category': {
      'colour': '#5ba58c',
    },
    'variable_category': {
      'colour': '#a55b99',
    },
    'variable_dynamic_category': {
      'colour': '#a55b99',
    },
  },
  //模块
  'blockStyles': {
    'colour_blocks': {
      'colourPrimary': '#a5745b',
      'colourSecondary': '#dbc7bd',
      'colourTertiary': '#845d49',
    },
    'list_blocks': {
      'colourPrimary': '#745ba5',
      'colourSecondary': '#c7bddb',
      'colourTertiary': '#5d4984',
    },
    'logic_blocks': {
      'colourPrimary': '#5b80a5',
      'colourSecondary': '#bdccdb',
      'colourTertiary': '#496684',
    },
    'weightvolume': {
      'colourPrimary': '#5b80a5',
      'colourSecondary': '#bdccdb',
      'colourTertiary': '#496684',
    },
    'loop_blocks': {
      'colourPrimary': '#5ba55b',
      'colourSecondary': '#bddbbd',
      'colourTertiary': '#498449',
    },
    'math_blocks': {
      'colourPrimary': '#5b67a5',
      'colourSecondary': '#bdc2db',
      'colourTertiary': '#495284',
    },
    'procedure_blocks': {
      'colourPrimary': '#995ba5',
      'colourSecondary': '#d6bddb',
      'colourTertiary': '#7a4984',
    },
    'text_blocks': {
      'colourPrimary': '#5ba58c',
      'colourSecondary': '#bddbd1',
      'colourTertiary': '#498470',
    },
    'variable_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a',
    },
    'variable_dynamic_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a',
    },
    'hat_blocks': {
      'colourPrimary': '#a55b99',
      'colourSecondary': '#dbbdd6',
      'colourTertiary': '#84497a',
      'hat': 'cap',
    },
  },
  //界面
  'componentStyles': {
    'workspaceBackgroundColour': '#1e1e1e',//工作区
    'toolboxBackgroundColour': '#333',//工具栏
    'toolboxForegroundColour': '#ccc',//工具栏字体
    'flyoutBackgroundColour': '#252526',//工具栏展开
    //'flyoutForegroundColour': '#ccc',//弹出标签文本颜色
    'flyoutOpacity': 1,//弹出不透明度
    'scrollbarColour': '#424242',//滚动条
    'scrollbarOpacity': 1,//滚动条不透明度
    'insertionMarkerColour': '#fff',//插入标记颜色（不接受颜色名称）
    'insertionMarkerOpacity': 0.3,//插入标记不透明度
    'cursorColour': '#d0d0d0',//键盘导航模式下光标显示的颜色
    'blackBackground': '#333'
  },

  'fontStyle': {
	'size': 10, // 字体大小
	'color': '#fff', // 字体颜色
	'bold': false // 是否加粗
  },
  'startHats': null,//是否在顶部块上显示帽子true/false/null
});

//模块颜色
//饱和度
CORNER_RADIUS = 0;
Blockly.HSV_SATURATION = 0.65;
//亮度
Blockly.HSV_VALUE = 0.65;
//边框颜色
Blockly.blockRendering.ConstantProvider.prototype.generateTertiaryColour_ =
  (colour) => Blockly.utils.colour.blend('#000', colour, 0.3) || colour;