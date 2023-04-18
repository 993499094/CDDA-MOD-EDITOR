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

//●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬一堆代码▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●

//随机显示猫咪
let icons = ["cat-lol-svgrepo-com.svg", "cat-satisfied-svgrepo-com.svg", "cat-weary-svgrepo-com.svg"];
let randomNum = Math.floor(Math.random() * icons.length);
document.querySelector("#cats").style.backgroundImage = `url(css/img/${icons[randomNum]})`;

//Blockly初始化
//const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv, {
	toolbox: document.getElementById('toolbox'),//模块工具栏
	renderer: 'custom_renderer',//渲染器 custom_renderer,thrasos-inline-row-separators,thrasos,zelos
	theme: Blockly.Themes.Modern,//主题
	collapse: true, //折叠或展开
	comments: true, //注释
	tooltips: true, //工具提示
    css : true, //CSS样式表
	rtl : false, //左右布局
	media : 'blockly/media',
	sounds : true, //音效
	oneBasedIndex : true, //是否使用基于1的索引，而不是基于0的索引
	disable: true, //禁用
	scrollbars: true, //滚动条
	trashcan: false, // 垃圾桶
	maxBlocks : Infinity,// 模块限制
	zoom:
		{controls: true,
		 wheel: true,
		 startScale: 1.0,
		 maxScale: 3,
		 minScale: 0.3,
		 scaleSpeed: 1.1,
		 pinch: true},//双指缩放
	plugins: {
		'workspace-backpack': true,
		'blockDragger': ScrollBlockDragger,
		'metricsManager': ScrollMetricsManager
	},
	move: {
		wheel: true, //使用快捷键放大缩小 Ctrl+滚轮
    },
	grid : {
		spacing : 50, 
		length : 10, 
		colour : '#888', 
		snap : false
	}, 
  });


//************************************************功能扩展*************************************************

// 背包设置
const backpackOptions = {
  allowEmptyBackpackOpen: true, // 是否允许打开空背包
  useFilledBackpackImage: true, // 背包是否显示为已经有内容的背包
  contextMenu: {
    emptyBackpack: true, // 是否显示清空背包的上下文菜单
    removeFromBackpack: true, // 是否显示从背包中删除块的上下文菜单
    copyToBackpack: true, // 是否显示复制块到背包的上下文菜单
    copyAllToBackpack: false, // 是否显示复制工作区所有块到背包的上下文菜单
    pasteAllToBackpack: false, // 是否显示从背包粘贴所有块到工作区的上下文菜单
    disablePreconditionChecks: false, // 是否禁用复制块到背包的上下文菜单中的先决条件检查
  },
};
//背包本地化
Blockly.Msg['COPY_ALL_TO_BACKPACK'] = '复制所有块到仓库';
Blockly.Msg['COPY_TO_BACKPACK'] = '复制到仓库';
Blockly.Msg['EMPTY_BACKPACK'] = '清空';
Blockly.Msg['PASTE_ALL_FROM_BACKPACK'] = '从仓库中粘贴所有块';
Blockly.Msg['REMOVE_FROM_BACKPACK'] = '移除';

//初始化插件
//与Blockly库相关的插件,代码实验室和示例(https://google.github.io/blockly-samples/)
//背包(https://github.com/google/blockly-samples/tree/master/plugins/workspace-backpack)
//搜索(https://github.com/google/blockly-samples/tree/master/plugins/workspace-search)
//缩放(https://github.com/google/blockly-samples/tree/master/plugins/zoom-to-fit)
//滚动(https://github.com/google/blockly-samples/tree/master/plugins/scroll-options)
//字段滑块(https://github.com/google/blockly-samples/tree/master/plugins/field-slider)
//字段网格列表(https://github.com/google/blockly-samples/tree/master/plugins/field-grid-dropdown)
//块动态连接(https://github.com/google/blockly-samples/tree/master/plugins/block-dynamic-connection)
//内联输入换行(https://github.com/google/blockly-samples/tree/master/plugins/renderer-inline-row-separators)

//背包
const backpack = new Backpack(workspace, backpackOptions);
backpack.init();
//搜索
const workspaceSearch = new WorkspaceSearch(workspace);
workspaceSearch.init();
//缩放
const zoomToFit = new ZoomToFitControl(workspace);
zoomToFit.init();
//滚动(不需要初始化也能用呢!)
const scrollOptions = new ScrollOptions(workspace, ScrollOptions);
scrollOptions.init();

//************************************************功能扩展*************************************************

//************************************************缓存功能*************************************************
//缓存大小信息
function updateDebugInfo() {
  const xmlText = localStorage.getItem('workspace');
  const backpackText = JSON.stringify(backpack.getContents());
  const workspaceSize = xmlText ? (xmlText.length / 1024).toFixed(2) + ' KB' : 'empty';
  const backpackSize = backpackText ? (backpackText.length / 1024).toFixed(2) + ' KB' : 'empty';
  document.querySelector('#cache h3').textContent = `DEBUG localStorage Workspace ${workspaceSize} BlocksStorage ${backpackSize}`;
  document.querySelector('#cache h3').title = `工作区缓存大小: ${workspaceSize}\n储存区缓存大小: ${backpackSize}`; 
}

//实时更新代码
function updateCode(event) {
  const code = cddaGenerator.workspaceToCode(workspace);
  
  let out = code;
  out = out.replace(/\}\n\{/g,"},\n{");
  out = out.replace(/^/gm,"  ");
  out = "[\n"+out+"\n]";
  document.getElementById('json').value = out;
}
workspace.addChangeListener(updateCode);

//实时保存功能
function saveWorkspace() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToText(xml);
  const backpackContents = backpack.getContents();
  const backpackText = backpackContents ? JSON.stringify(backpackContents) : '';
  localStorage.setItem('workspace', xmlText);
  localStorage.setItem('backpack', backpackText);
  updateDebugInfo();//在保存和加载工作区内容的函数中调用更新显示函数
}

//加载保存的工作区内容
function loadWorkspace() {
  const xmlText = localStorage.getItem('workspace');
  const backpackText = localStorage.getItem('backpack');
  if (xmlText) {
    const xml = Blockly.utils.xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(xml, workspace);
  }
  if (backpackText) {
    const backpackContents = JSON.parse(backpackText);
    backpack.setContents(backpackContents);
  }
  updateDebugInfo();//在保存和加载工作区内容的函数中调用更新显示函数
}

//在页面加载时加载保存的工作区内容
window.addEventListener('load', loadWorkspace);

//在工作区变化时实时保存
workspace.addChangeListener(function(event) {
  saveWorkspace();
});
//************************************************缓存功能*************************************************

//***********************************************保存/读取功能*********************************************
// 保存功能
function download(text, fileName) {
  const a = document.createElement('a');
  a.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  a.setAttribute('download', fileName);
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 获取当前日期时间
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  return `${year}-${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}-${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}`;
}

// 导出工作区为 XML 文件并下载
function exportWorkspace() {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToPrettyText(xml);
  const fileName = `CDDA_MOD_EDITOR_工作区_${getCurrentDateTime()}.xml`;
  const data = {
    workspace: xmlText,
  };
  const dataStr = JSON.stringify(data);
  download(dataStr, fileName);
}

// 导出储存区为 JSON 文件并下载
function exportBackpack() {
  const backpackContents = backpack.getContents();
  const backpackText = backpackContents ? JSON.stringify(backpackContents) : '';
  const fileName = `CDDA_MOD_EDITOR_储存区_${getCurrentDateTime()}.json`;
  const data = {
    backpack: backpackText,
  };
  const dataStr = JSON.stringify(data);
  download(dataStr, fileName);
}

// 导入 XML 或 JSON 文件到工作区或背包
function importWorkspaceOrBackpack() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const dataStr = event.target.result;
      const data = JSON.parse(dataStr);
      if (data.backpack) {
        const backpackContents = JSON.parse(data.backpack);
        let importContents = backpackContents;
        if (backpack.getContents().length > 0) {
          const confirmResult = confirm("是否覆盖当前储存区内容?\n点击确定清空当前储存区  点击取消合并储存区");
          if (confirmResult) {
            backpack.setContents(importContents);
            return;
          } else {
            const currentContents = backpack.getContents();
            importContents = currentContents.concat(importContents);
          }
        }
        backpack.setContents(importContents);
      }
      if (data.workspace) {
        const xmlText = data.workspace;
        const xml = Blockly.utils.xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(xml, workspace);
      }
    };
    reader.readAsText(file);
  });
  fileInput.click();
}

//拖拽导入


// 清空工作区缓存
function clearWorkspace() {
  localStorage.removeItem('workspace');// 清空工作区
  location.reload();
}

// 清空背包缓存
function clearBackpack() {
  localStorage.removeItem('backpack');// 清空背包
  location.reload();
}

// 注册按钮回调函数
workspace.registerButtonCallback('exportWorkspace', exportWorkspace);
workspace.registerButtonCallback('exportBackpack', exportBackpack);
workspace.registerButtonCallback('importWorkspaceOrBackpack', importWorkspaceOrBackpack);
workspace.registerButtonCallback('clearWorkspace', clearWorkspace);
workspace.registerButtonCallback('clearBackpack', clearBackpack);

//更新显示
updateDebugInfo();
//***********************************************保存/读取功能*********************************************

//*********************************************调试查看缓存窗口********************************************

// 调试查看缓存窗口
// 实时更新缓存内容
function updateCache(event) {
  const xml = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToText(xml);
  document.getElementById('cache-textarea').value = xmlText;
}
workspace.addChangeListener(updateCache);

// 在页面加载时更新缓存内容
window.addEventListener('load', updateCache);

//显示切换
const cacheTextarea = document.getElementById('cache-textarea');
const cacheHeader = document.querySelector('#cache h3');

// 从 localStorage 中读取之前的状态
const isCacheShown = localStorage.getItem('cacheShown') === 'true';

// 根据状态显示/隐藏窗口
if (isCacheShown) {
  cacheTextarea.style.display = 'block';
} else {
  cacheTextarea.style.display = 'none';
}

// 点击文本时，切换窗口显示/隐藏状态，并将当前状态保存到 localStorage 中
cacheHeader.addEventListener('click', () => {
  if (cacheTextarea.style.display === 'none') {
    cacheTextarea.style.display = 'block';
    localStorage.setItem('cacheShown', 'true');
  } else {
    cacheTextarea.style.display = 'none';
    localStorage.setItem('cacheShown', 'false');
  }
});

//*********************************************调试查看缓存窗口********************************************

//********************************************格式化缓存查看窗口*******************************************



//********************************************格式化缓存查看窗口*******************************************


//********************************************窗口尺寸调整拖动条*******************************************
//左右拖动条
var left = document.getElementById('blocklyDiv');
var right = document.getElementById('jsonbox');
var bar = document.getElementById('dragbar');

const drag = (e) => {
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  let leftWidth = e.pageX / window.innerWidth * 100;
  let minWidth = 20; // 左右最小宽度为20%
  let maxWidth = 90; // 左右最大宽度为80%
  if (leftWidth < minWidth) {
    leftWidth = minWidth;
  } else if (leftWidth > maxWidth) {
    leftWidth = maxWidth;
  }
  left.style.width = leftWidth + '%';
  Blockly.svgResize(workspace);//设置工作区尺寸
  localStorage.setItem('leftWidth', leftWidth.toString());
  localStorage.setItem('rightWidth', (100 - leftWidth).toString());
}

const releaseDrag = () => {
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', releaseDrag);
}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', releaseDrag);
});

// 在页面加载时恢复之前的状态
const leftWidth = localStorage.getItem('leftWidth');
const rightWidth = localStorage.getItem('rightWidth');
if (leftWidth && rightWidth) {
  left.style.width = leftWidth + '%';
  right.style.width = rightWidth + '%';
  Blockly.svgResize(workspace);
}

// 在窗口大小改变时重新计算左右宽度，以适应不同窗口尺寸
window.addEventListener('resize', () => {
  const leftWidth = parseFloat(left.style.width);
  const rightWidth = 100 - leftWidth;
  right.style.width = rightWidth + '%';
  Blockly.svgResize(workspace);
});
//********************************************窗口尺寸调整拖动条*******************************************

// 监听缩放事件，更新缩放倍数显示
// 定义更新缩放倍数的函数
function updateZoomLevel() {
  // 获取工作区缩放倍数
  var zoomLevel = Blockly.getMainWorkspace().getScale();
  // 更新元素的显示内容
  document.getElementById("zoom-level").innerHTML = "缩放: " + zoomLevel.toFixed(1);
}

// 在页面加载完成后，手动更新一次缩放倍数显示
window.addEventListener("load", function() {
  updateZoomLevel();
});

// 添加缩放倍数更新事件监听器
Blockly.getMainWorkspace().addChangeListener(function(event) {
  if(event.type == Blockly.Events.VIEWPORT_CHANGE && typeof event.scale !== "undefined") {
    updateZoomLevel();
  }
});

//**************************************************工具箱*************************************************



//**************************************************工具箱*************************************************

//展开页脚
var footer = document.querySelector('.footer');
var expanded = document.querySelector('#expanded');
var isExpanded = false;

// 点击展开/收起页脚
expanded.addEventListener('click', function() {
  if (isExpanded) {
    footer.classList.remove('expanded');
    isExpanded = false;
  } else {
    footer.classList.add('expanded');
    isExpanded = true;
  }
});

// 鼠标离开页脚时自动收起
footer.addEventListener('mouseleave', function() {
  if (isExpanded) {
    footer.classList.remove('expanded');
    isExpanded = false;
  }
}); 


//撸猫

