# h5_init

* 基于gulp的快速初始化h5项目

避免每次创建新项目都需要初始化项目结构，重新配置项目，因此创建此项目，方便后续开发简单方便使用。


## 项目结构

```

├── node_modules                          # 依赖
│   └── ...
├── public                                # 源码
│   │
│   ├── ...html                           # html
│   │
│   ├── js                                # js文件
│   │   └── ...
│   ├── css                               # css文件
│   │   └── ...
│   └─── utils                            # 插件
│
├── package.json                          # 项目信息
├── gulpfile.js                           # gulp配置信息
└── README.md                             # README.md

```

## 快速开始

**安装依赖:**

``npm install``

**开发：**

``npm run dev``

**构建:**

``npm run build``