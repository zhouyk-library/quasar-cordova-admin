# 记录

## 安装运行

### 注：
  > JDK 版本 1.8--------java -version

  > vue-cli 版本 3.X----vue -V

  > vue 版本 2.6+

  > ndoe.js 版本 10.X----node -v

  > cordova 版本 9.0-----cordova -v

  > quasar 版本 1.X------quasar -v

### 安装

安装SDK
```
1、下载并安装Android Studio，安装sdk

2、逐行运行以下命令：
setx ANDROID_HOME "%USERPROFILE%\AppData\Local\Android\Sdk"
setx path "%path%;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools"

```

安装Cordova CLI
```
npm install -g cordova

```

安装Quasar CLI
```
npm install -g @quasar/cli

```

给Quasar 添加 cordova
```
quasar mode add cordova

```

给cordova 添加 android
```
cordova platform add android

```

安装web依赖包(项目目录下)
```
npm install

```


### 运行
手机Apps运行
```
npm run dev

```

H5运行
```
npm run dev:web

```


## 开发配置
### 阿里巴巴图标库

帐号密码：
```
1、登录微博
  账号：zhouyk@centn.com
  密码：zhouyk123
2、授权登录阿里巴巴图标库

```

图标库全部添加脚本
```
var span = document.querySelectorAll('.icon-cover');
for (var i = 0, len = span.length; i < len; i++) {
    console.log(span[i].querySelector('span').click());
}

```


图标库项目配置
```
FontClass/Symbol 前缀：fa-
Font Family：fas

使用：  fas fa-xxx

```
