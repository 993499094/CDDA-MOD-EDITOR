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

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬渲染器▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//定义一个扩展基础常量的提供程序
class CustomConstantProvider extends Blockly.blockRendering.ConstantProvider {
  constructor() {
    super();
	//覆盖常量
	
	//用于输入和输出连接的拼图选项卡的高度 15
	this.TAB_HEIGHT = 15;
	//用于输入和输出连接的拼图选项卡的宽度 8
	this.TAB_WIDTH = 8;
	//拼图标签的位置与图块顶部的偏差 5
	this.TAB_OFFSET_FROM_TOP = 5;
	//拼图标签的垂直重叠，用来使它看起来更像一块拼图
	this.TAB_VERTICAL_OVERLAP = 0;
	//用于上一个和下一个连接的槽口宽度 15
	this.NOTCH_WIDTH = 30;
	//用于上一个和下一个连接的槽口高度 4
	this.NOTCH_HEIGHT = 5;
	//从块的左侧或语句输入的内部到缺口的左侧的偏移。
	this.NOTCH_OFFSET_LEFT = 15;
	this.STATEMENT_BOTTOM_SPACER = 0;
	this.STATEMENT_INPUT_PADDING_LEFT = 20;
	//圆角半径
	this.CORNER_RADIUS = 10;
	
	//中心线
	//Blockly Centerline Renderer [http://bekawestberg.me/blog/renderer-centerline/]
	/**
	* 一个空的内联输入的标签从输入顶部的偏移.
	* @type {number}
	*/
	this.EMPTY_INLINE_INPUT_TAB_OFFSET_FROM_TOP = 5;

	/**
	* 内联输入的高度.
	*
	* Equal to tabHeight + tabOffset * 2, so that the tab has equal
	* 上方和下方的偏移量.
	* @type {number}
	*/
	this.EMPTY_INLINE_INPUT_HEIGHT = this.TAB_HEIGHT + this.EMPTY_INLINE_INPUT_TAB_OFFSET_FROM_TOP * 2;
  }
//修改模块接口 覆写TypeScript /APP/blockly/core/renderers/common/constants.ts>767行
//svg的玩意在679行 拼图710
//zelos_constants.ts>533行
  makeNotch() {
    const width = this.NOTCH_WIDTH;
    const height = this.NOTCH_HEIGHT;
    const innerWidth = 20;
    const outerWidth = (width - innerWidth) / 2;
	//svg路径
	function makeMainPath(dir) {
	  return Blockly.utils.svgPaths.line(
		  [
			Blockly.utils.svgPaths.point(dir * outerWidth, height), 
			Blockly.utils.svgPaths.point(dir * innerWidth, 0), 
			Blockly.utils.svgPaths.point(dir * outerWidth, -height), 
		  ]);
	}
	//svg路径绘制镜像
    const pathLeft = makeMainPath(1);
    const pathRight = makeMainPath(-1);

    return {
      width: width,
      height: height,
      pathLeft: pathLeft,
      pathRight: pathRight,
    };
  }

/**模块输入输入接口图 好难看!
  makePuzzleTab() {
    const width = this.TAB_WIDTH;
    const height = this.TAB_HEIGHT;
    const innerHeight = 9;
    const outerHeight = (height - innerHeight) / 2;
	//svg路径
    function makeMainPath(dir) {
      return Blockly.utils.svgPaths.line(
          [
            Blockly.utils.svgPaths.point(-width, dir * outerHeight),
            Blockly.utils.svgPaths.point(0, dir * innerHeight),
            Blockly.utils.svgPaths.point(width, dir * outerHeight),
          ]);
    }
	//svg路径绘制镜像
    const pathUp = makeMainPath(-1);
    const pathDown = makeMainPath(1);

    return {
      width: width,
      height: height,
      pathUp: pathUp,
      pathDown: pathDown,
    };
  }
**/

}

//定义新的自定义渲染器并让它扩展thrasos渲染器
class CustomRenderer extends Blockly.thrasos.Renderer  {
  constructor() {
    super();
  };
//覆写
  makeConstants_() {
    return new CustomConstantProvider();
  }
}

//注册自定义渲染器
Blockly.blockRendering.register('custom_renderer', CustomRenderer);

