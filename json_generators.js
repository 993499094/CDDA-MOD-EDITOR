/**
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
										 ❥ 模块可视化代码生成器
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
											   ▄▀▄     ▄▀▄	POWER!
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

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬代码生成器▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

// 构建自定义生成器指南: https://blocklycodelabs.dev/codelabs/custom-generator/index.html

const cddaGenerator = new Blockly.Generator('CDDA');

//ORDER_ATOMIC是最高优先级，表示一个原子操作（如一个数字、字符串、变量等）。
//ORDER_NONE表示没有优先级，用于不需要排序的语句，如语句块的开始和结束等。
//在代码块生成器中，可以根据代码块的输入顺序和类型来确定优先级。
cddaGenerator.ORDER_ATOMIC = 0;
cddaGenerator.ORDER_NONE = 0;

//init函数在代码生成器加载时被调用，可以用来初始化一些变量或执行一些操作。
//finish函数在代码块生成器结束时被调用，可以用来做最后的处理或返回最终的代码。
//在大多数情况下，这个函数可以直接返回生成的代码即可。
cddaGenerator.init = function(workspace) {};
cddaGenerator.finish = function(code) {return code;};

//JSON.stringify
function stringify(obj){
	return JSON.stringify(obj,null,"  ");
}
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬生成器▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试输入▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//文本块的生成器
cddaGenerator['block_item_text'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: 将JavaScript组合成代码(code)变量.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, cddaGenerator.ORDER_NONE];
};

//FLAGS块
/**超级绿皮写法
cddaGenerator['block_flags'] = function(block) {
  var value_flag_1 = cddaGenerator.valueToCode(block, 'flag_1', cddaGenerator.ORDER_ATOMIC);
  var value_flag_2 = cddaGenerator.valueToCode(block, 'flag_2', cddaGenerator.ORDER_ATOMIC);
  var value_flag_3 = cddaGenerator.valueToCode(block, 'flag_3', cddaGenerator.ORDER_ATOMIC);
  //var code = 'Flags:' + value_flag_1 + ',' + value_flag_2 + ',' + value_flag_3;
  //绿皮逗号添加术
  var code = 'Flags:' + value_flag_1 + (value_flag_1 && value_flag_2 ? ',' : '') + value_flag_2 + (value_flag_2 && value_flag_3 ? ',' : '') + value_flag_3;
  return code;
};
*/
//没那么超级绿皮写法
cddaGenerator['block_flags'] = function(block) {
  var flags = [];
  for (var i = 1; i <= 3; i++) {
    var flag = cddaGenerator.valueToCode(block, 'flag_' + i, cddaGenerator.ORDER_ATOMIC) || '';
    if (flag) {
      flags.push(flag);
    }
  }
  let obj = {
    flags:flags,//flags:flags.join(','),将生成的字符串转换为数组
  }
  return stringify(obj);
}; 


//FLAG选择
cddaGenerator['block_flag_item'] = function(block) {
  var dropdown_flag_item = block.getFieldValue('flag_item');
  // TODO: 将JavaScript组合成代码(code)变量.
  var code = dropdown_flag_item;
  return [code, cddaGenerator.ORDER_NONE];
};

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试输入▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
//物品价值
cddaGenerator['block_value'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: 将JavaScript组合成代码(code)变量.
  //var code = '\n-DEBUG:物品价值是:' + text_value;
  let obj = {
	  value:text_value + " 瓶盖",
  }
  return stringify(obj);
};

// 重量体积模块
cddaGenerator['weightvolume'] = function(block) {
  var text_indata = block.getFieldValue('indata');
  var text_indata2 = block.getFieldValue('indata2');
  // TODO: 将JavaScript组合成代码变量.
  var code = '"weight":"' + text_indata + ' g",\n"volume":"' + text_indata2 + ' ml"';// 绿皮组合
  let obj = {
	  weight:text_indata+ ' g',
	  volume:text_indata2+' ml',
  }
  return stringify(obj);
};

// 物品基础信息
cddaGenerator['item'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_id = block.getFieldValue('id');
  var text_name = block.getFieldValue('name');
  var text_description = block.getFieldValue('description');
  var text_symbol = block.getFieldValue('symbol');
  var colour_color = block.getFieldValue('color');
  // TODO: 将JavaScript组合成代码变量.
  var code = 
	'"type":"' + dropdown_type + '",\n'
	+'"id":"' + text_id + '",\n'
	+'"name":"' + text_name + '",\n'
	+'"description":"' + text_description + '",\n'
	+'"symbol":"' + text_symbol + '",\n'
	+'"color":"' + colour_color + '"'
	
	;
    let obj = {
		type		:	dropdown_type		,
		id			:	text_id				,
		name		:	text_name			,
		description	:	text_description	,
		symbol		:	text_symbol			,
		color		:	colour_color		,
	}
  return stringify(obj);
};

// 测试模块

// 滑块
cddaGenerator['test_field_slider'] = function(block) {
  var number_fieldname = block.getFieldValue('FIELDNAME');
  var obj = {
    "滑块测试": number_fieldname
  };
  return stringify(obj);
};
// 选择网格
cddaGenerator['test_field_grid_dropdown'] = function(block) {
  var dropdown_fieldname = block.getFieldValue('FIELDNAME');
  // TODO: 将JavaScript组合成代码(obj)变量.
  var obj = {
    "选择网格测试": dropdown_fieldname
  };
  return stringify(obj);
};

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬测试模块▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
/**
											   ▄▀▄     ▄▀▄
											  ▄█░░▀▀▀▀▀░░█▄
										  ▄▄  █░░░░░░░░░░░█  ▄▄
										 █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█
//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬生成器▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
*/
// 格式生成器
// 模块堆栈添加 逗号+换行符
cddaGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  try{
	if (nextBlock && !thisOnly) {
		//return code + ',\n' + cddaGenerator.blockToCode(nextBlock);
		let codeObj = JSON.parse(code);
		let newObj = JSON.parse(cddaGenerator.blockToCode(nextBlock));
		let outObj = Object.assign({}, codeObj, newObj);
		return stringify(outObj);
	}
  }catch(e){
	  console.log("格式生成器错误，可能是某个块返回了不可反序列化的JSON字符串");
	  console.log(e);
  }
  return code;
};

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬生成器▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●