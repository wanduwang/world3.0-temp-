Find more info on the website: https://kubejs.com/

assets
//相对于资源包，可以存放客户端资源，例如：材质，模型等等
Example: assets/kubejs/textures/item/test_item.png

data
//相对于数据包，可以存放服务端资源，例如：战利列表，函数等等
Example: data/kubejs/loot_tables/blocks/test_block.json

startup_scripts
//在游戏启动期间加载的脚步
//用于添加物品和其他在游戏启动时加载的东西，可以用 /kubejs reload_startup_scripts 指令重载，但可能不起作用！

server_scripts
//服务端资源重载时加载的脚本
//用于修改配方，标签，战利列表和处理服务器事件，可以用 /reload 指令重载

client_scripts
//客户端资源重载时加载的脚本
//用于 JEI 事件，工具提示和其他客户端内容，可以用 F3+T 重载

config
//KubeJS 配置存储，这也是脚本除了 world 目录外可以访问的唯一的目录