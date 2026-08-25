# Recovery

[English](README.md) | 中文

Recovery 在可选 Profile 插件缺失或启动失败时保留 DSH Web 管理界面，并在 **设置 → Recovery** 中提供诊断与确定性修复。

![Recovery 设置页面](assets/recovery-checks.png)

## 功能

- 可选插件包缺失时继续启动 Web 管理界面。
- 可选插件在激活阶段报错时，将其隔离到本次运行之外。
- 显示插件 id、模块名、故障类型和是否支持自动修复。
- 从 Web 页面重新安装配置中已记录的 npm、GitHub 或本地依赖。
- 恢复上一次正常启动的 Web Profile 配置。
- 检查 Settings、插件清单、Agent 预设、模型提供方和本机 Host/Origin 信任状态。
- 修复前备份 Profile 文件；验证失败时回滚。

Recovery 不调用大模型 API。恢复远程插件包时可能访问网络。

## 工作原理

支持 Recovery 的 DSH 启动器先启动 Web 管理层，再逐个激活可选 Profile 插件。缺失或激活失败的可选插件会被记录，并在本次运行中跳过。Recovery 插件通过管理 API 读取诊断结果，并在设置页面提供修复操作。

Web 服务器、API 网关、Settings 服务、插件清单和 Recovery 自身仍属于核心管理层；这些组件发生故障时不会被静默忽略。

## 兼容性

| DSH 版本 | 状态 |
| --- | --- |
| 基于 DSH `0.1.1-rc.2` 的 Recovery 开发版本 | 已验证 |
| 官方 `@deepseek-ai/dsh@0.1.1-rc.2` | 不支持 |

当前官方 DSH 版本尚未包含插件启动隔离以及 `recovery.scan` / `recovery.repair` 管理接口。仅把本插件安装到该版本，无法恢复已经失败的 Web 启动。

## 安装

在支持 Recovery 的 DSH 版本上执行：

```sh
dsh plugin --profile web add github:Tangtang232/dsh-recovery#v0.1.0
```

重新启动 `dsh web`，打开 **设置 → Recovery → 一键检查与修复**。

修复操作全部在 Web 页面完成；以上命令只使用 DSH 标准 Profile Bundle 安装方式。

## 修复流程

1. 读取 Web 启动时隔离的故障。
2. 备份 `package.json`、锁文件、workspace 文件和 Profile patch。
3. 仅根据 Profile 中已记录的来源恢复插件包。
4. 重新激活插件，或恢复上一次正常的 Profile 配置。
5. 重新检查管理 API。
6. 恢复或验证失败时回滚文件。

来源未知的插件不会被猜测安装；再次启动仍报错的插件继续保持隔离。

## 目录

```text
assets/             Recovery 截图
lib/                可直接加载的 DSH bundle
src/                Web 设置页面源码
cordis.patch.yml    Profile Bundle patch
package.json        DSH bundle 和客户端元数据
```

## 验证

```sh
node scripts/verify-package.mjs
pnpm pack --dry-run
```

## License

MIT
