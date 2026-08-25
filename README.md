# Recovery

[English](README.en.md)

Recovery 是一个面向普通用户的 DSH Web 急救插件。

当某个可选插件被删除、文件损坏或启动报错时，Recovery 会先把它临时隔离，让 DSH Web 和其他正常功能继续启动。进入 **设置 → Recovery** 后，点击 **一键检查与修复** 即可查看问题和修复进度。

![Recovery 修复页面](assets/recovery-checks.png)

## 可以处理什么

- 插件文件被删除，但配置里仍然保留着它。
- 插件启动时报错，导致 Web 无法正常打开。
- 插件列表、Agent 预设或模型提供方加载失败。
- Web 本机地址出现 Host/Origin 403 错误。
- Web 配置损坏，并且存在上一次正常配置。

Recovery 会先备份当前配置，再尝试恢复插件、修正可安全修正的配置并重新检查。修复失败时会回滚文件，并继续隔离坏插件，不影响其他功能。

## 使用方法

1. 从本仓库的 **Releases** 下载 Recovery 插件包。
2. 按 DSH 的 GitHub 插件安装方式把它安装到 `web` Profile。
3. 重新启动 DSH Web。
4. 打开 **设置 → Recovery → 一键检查与修复**。

所有检查和修复都在本机完成，不调用大模型 API。重新下载 npm 或 GitHub 插件时可能需要网络连接。

## 要求

Recovery 需要带有“坏插件启动隔离”支持的 DSH 版本。该能力必须在普通插件开始加载前运行；不支持此能力的旧版 DSH 无法仅靠一个后安装插件恢复已经完全失败的 Web 启动。

## 不会做什么

- 不删除聊天记录或用户文件。
- 不修改 API Key。
- 不猜测插件来源；只有安装记录仍保存原始来源时才会自动重装。
- 不掩盖 DSH Web 服务器、管理 API 或 Recovery 自身的核心故障。

## License

MIT
