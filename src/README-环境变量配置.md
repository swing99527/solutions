# 环境变量配置指南

## 概述

本项目使用环境变量来配置各个AI解决方案的链接地址和联系方式，确保在不同部署环境中的灵活配置。

## 必需的环境变量

### 核心解决方案链接

| 环境变量 | 描述 | 示例值 |
|---------|------|--------|
| `REACT_APP_WEAVEMIND_URL` | 织慧™智能纺织设计平台链接 | `https://weavemind.zkturing.com` |
| `REACT_APP_BAOINFO_URL` | 标讯领航员招投标平台链接 | `https://baoinfo.zkturing.com` |
| `REACT_APP_PSYCHAI_URL` | AI心理健康智能副驾链接 | `https://psychai.zkturing.com` |

### 通用页面链接

| 环境变量 | 描述 | 示例值 |
|---------|------|--------|
| `REACT_APP_CONTACT_URL` | 联系我们页面或邮箱 | `mailto:contact@zkturing.com` |
| `REACT_APP_DEMO_URL` | 演示预约页面链接 | `https://demo.zkturing.com` |

## 配置步骤

### 1. 创建环境变量文件

```bash
# 复制示例文件
cp .env.example .env
```

### 2. 编辑 .env 文件

```bash
# 使用您喜欢的编辑器打开 .env 文件
nano .env
# 或
vim .env
```

### 3. 配置实际的URL

在 `.env` 文件中填入实际的URL地址：

```env
# 核心解决方案链接配置
REACT_APP_WEAVEMIND_URL=https://weavemind.zkturing.com
REACT_APP_BAOINFO_URL=https://baoinfo.zkturing.com  
REACT_APP_PSYCHAI_URL=https://psychai.zkturing.com

# 通用页面链接配置
REACT_APP_CONTACT_URL=mailto:contact@zkturing.com
REACT_APP_DEMO_URL=https://cal.com/zkturing/demo
```

## 不同部署环境的配置

### 开发环境
- 使用 `.env.development` 文件
- 可以使用本地开发服务器地址

### 生产环境  
- 使用 `.env.production` 文件
- 使用正式的生产环境域名

### 测试环境
- 使用 `.env.test` 文件
- 使用测试环境的域名

## 默认行为

如果环境变量未配置，系统将使用以下默认值：

- 解决方案链接：显示占位符 `#` 并提示用户配置
- 联系我们：默认为 `mailto:contact@your-domain.com`
- 演示预约：显示占位符 `#demo` 并提示用户配置

## 注意事项

1. **安全性**：不要在代码中硬编码敏感信息
2. **版本控制**：`.env` 文件应该被添加到 `.gitignore` 中
3. **命名规范**：React环境变量必须以 `REACT_APP_` 开头
4. **重启应用**：修改环境变量后需要重启开发服务器

## 验证配置

启动应用后，可以通过以下方式验证配置：

1. 点击解决方案卡片，确认跳转到正确的URL
2. 点击"联系我们"按钮，确认打开正确的联系方式
3. 点击"预约演示"按钮，确认跳转到演示预约页面

## 故障排除

### 链接仍然是占位符
- 检查环境变量名称是否正确（必须以 `REACT_APP_` 开头）
- 确认 `.env` 文件位于项目根目录
- 重启开发服务器

### 页面无法访问
- 检查目标URL是否可访问
- 确认域名解析是否正确
- 检查HTTPS/HTTP协议是否匹配