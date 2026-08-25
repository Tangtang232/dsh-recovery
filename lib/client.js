window.__ModuleLoader__.load({
	id: "@tangtang232/dsh-recovery",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let react = require("react");
		//#region \0dsh-css:E:\deepseek-harness\deepseek-harness\packages\client\ui-settings-recovery\src\client\RecoverySettingsSection.module.css.mjs
		const css = ".-YWa_G_section{width:100%;max-width:760px;color:var(--dsw-alias-label-primary);flex-direction:column;gap:18px;display:flex}.-YWa_G_header h2,.-YWa_G_header p,.-YWa_G_card h3,.-YWa_G_card p,.-YWa_G_facts{margin:0}.-YWa_G_header h2{font-size:20px;line-height:28px}.-YWa_G_header p,.-YWa_G_cardCopy p{color:var(--dsw-alias-label-tertiary);margin-top:6px;font-size:13px;line-height:20px}.-YWa_G_card{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);border-radius:12px;flex-direction:column;align-items:flex-start;gap:16px;padding:20px;display:flex}.-YWa_G_card[data-recovery-state=blocked]{border-color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 40%, var(--dsw-alias-border-l2))}.-YWa_G_cardCopy h3{font-size:15px;line-height:22px}.-YWa_G_facts{gap:8px;width:100%;display:grid}.-YWa_G_facts div{grid-template-columns:110px minmax(0,1fr);gap:12px;display:grid}.-YWa_G_facts dt{color:var(--dsw-alias-label-tertiary);font-size:12px}.-YWa_G_facts dd{min-width:0;margin:0}.-YWa_G_facts code{overflow-wrap:anywhere;color:var(--dsw-alias-label-secondary);font-family:var(--ds-font-family-code);font-size:12px}.-YWa_G_primaryButton,.-YWa_G_secondaryButton{min-height:36px;font:inherit;cursor:pointer;border-radius:8px;padding:0 16px;font-size:13px}.-YWa_G_primaryButton{border:1px solid var(--dsw-alias-state-business-primary);background:var(--dsw-alias-state-business-primary);color:var(--dsw-alias-label-primary-foreground)}.-YWa_G_secondaryButton{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-primary);background:0 0}.-YWa_G_secondaryButton:disabled{cursor:default;opacity:.6}.-YWa_G_progressGroup{gap:8px;width:100%;display:grid}.-YWa_G_progressCopy{color:var(--dsw-alias-label-secondary);justify-content:space-between;font-size:12px;display:flex}.-YWa_G_progressTrack{background:var(--dsw-alias-bg-layer-1);border-radius:999px;width:100%;height:8px;overflow:hidden}.-YWa_G_progressTrack span{border-radius:inherit;background:var(--dsw-alias-state-business-primary);height:100%;transition:width .18s;display:block}.-YWa_G_findings{gap:8px;width:100%;margin:0;padding:0;list-style:none;display:grid}.-YWa_G_issueGroup{gap:8px;width:100%;display:grid}.-YWa_G_issueGroup h3,.-YWa_G_issueGroup p{margin:0}.-YWa_G_issueGroup>p,.-YWa_G_findings small{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.-YWa_G_outcomes{color:var(--dsw-alias-label-secondary);margin:0;padding-left:20px;font-size:12px;line-height:20px}.-YWa_G_findings li{border:1px solid var(--dsw-alias-border-l2);border-radius:9px;grid-template-columns:10px minmax(0,1fr);align-items:start;gap:10px;padding:12px;display:grid}.-YWa_G_findings strong{font-size:13px}.-YWa_G_findings p{color:var(--dsw-alias-label-tertiary);margin-top:3px;font-size:12px;line-height:18px}.-YWa_G_findingDot{background:var(--dsw-alias-state-success-primary);border-radius:50%;width:8px;height:8px;margin-top:6px}.-YWa_G_findings li[data-finding-status=failed] .-YWa_G_findingDot{background:var(--dsw-alias-state-error-primary)}.-YWa_G_findings li[data-finding-status=warning] .-YWa_G_findingDot{background:var(--dsw-alias-state-warning-primary)}.-YWa_G_primaryButton:focus-visible,.-YWa_G_secondaryButton:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}.-YWa_G_success,.-YWa_G_failure{font-size:13px;line-height:20px}.-YWa_G_success{color:var(--dsw-alias-state-success-primary)}.-YWa_G_failure{color:var(--dsw-alias-state-error-primary)}";
		const tagId = "@tangtang232/dsh-recovery/RecoverySettingsSection.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@tangtang232/dsh-recovery";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var RecoverySettingsSection_module_css_default = {
			"card": "-YWa_G_card",
			"cardCopy": "-YWa_G_cardCopy",
			"facts": "-YWa_G_facts",
			"failure": "-YWa_G_failure",
			"findingDot": "-YWa_G_findingDot",
			"findings": "-YWa_G_findings",
			"header": "-YWa_G_header",
			"issueGroup": "-YWa_G_issueGroup",
			"outcomes": "-YWa_G_outcomes",
			"primaryButton": "-YWa_G_primaryButton",
			"progressCopy": "-YWa_G_progressCopy",
			"progressGroup": "-YWa_G_progressGroup",
			"progressTrack": "-YWa_G_progressTrack",
			"secondaryButton": "-YWa_G_secondaryButton",
			"section": "-YWa_G_section",
			"success": "-YWa_G_success"
		};
		//#endregion
		//#region lib/types/client/RecoverySettingsSection.js
		const TOTAL_CHECKS = 5;
		function findingCopyKey(finding) {
			if (finding.id === "authority") return `check.authority.${finding.status}`;
			const status = finding.status === "failed" ? "failed" : "passed";
			return `check.${finding.id}.${status}`;
		}
		/** Render the browser-local Web recovery surface. */
		function RecoverySettingsSection({ authority, loopback, repairCurrent, checkCore, scanRecovery, repairIssues, t }) {
			const [checkState, setCheckState] = (0, react.useState)("idle");
			const [findings, setFindings] = (0, react.useState)([]);
			const [snapshot, setSnapshot] = (0, react.useState)();
			const [outcomes, setOutcomes] = (0, react.useState)([]);
			const [repairStep, setRepairStep] = (0, react.useState)(false);
			(0, react.useEffect)(() => {
				let disposed = false;
				let attempt = 0;
				let retry;
				const scan = () => {
					scanRecovery().then((value) => {
						if (!disposed) setSnapshot(value);
					}, () => {
						attempt += 1;
						if (!disposed && attempt < 3) retry = setTimeout(scan, 750);
					});
				};
				scan();
				return () => {
					disposed = true;
					if (retry !== void 0) clearTimeout(retry);
				};
			}, [scanRecovery]);
			const runCheck = () => {
				if (checkState === "checking" || checkState === "repairing") return;
				setFindings([]);
				setRepairStep(false);
				setCheckState("checking");
				const operation = async (report) => {
					const current = snapshot ?? await scanRecovery();
					setSnapshot(current);
					const repairable = current.issues.filter((issue) => issue.repairable);
					if (repairable.length > 0) {
						setRepairStep(true);
						setCheckState("repairing");
						const result = await repairIssues(repairable.map((issue) => issue.issueId));
						setOutcomes(result.outcomes);
						setSnapshot(result.snapshot);
						setCheckState("checking");
					}
					return (loopback ? checkCore : repairCurrent)(report);
				};
				operation((finding) => {
					setFindings((previous) => [...previous.filter((item) => item.id !== finding.id), finding]);
				}).then((completed) => {
					setFindings(completed);
					setCheckState("passed");
				}, () => {
					setCheckState("failed");
				});
			};
			return (0, react_jsx_runtime.jsxs)("section", {
				className: RecoverySettingsSection_module_css_default.section,
				children: [(0, react_jsx_runtime.jsxs)("header", {
					className: RecoverySettingsSection_module_css_default.header,
					children: [(0, react_jsx_runtime.jsx)("h2", { children: t("title") }), (0, react_jsx_runtime.jsx)("p", { children: t("intro") })]
				}), (0, react_jsx_runtime.jsxs)("div", {
					className: RecoverySettingsSection_module_css_default.card,
					"data-recovery-state": loopback ? "ready" : "blocked",
					children: [
						(0, react_jsx_runtime.jsxs)("div", {
							className: RecoverySettingsSection_module_css_default.cardCopy,
							"data-recovery-summary": true,
							children: [(0, react_jsx_runtime.jsx)("h3", { children: t(loopback ? "healthyTitle" : "blockedTitle") }), (0, react_jsx_runtime.jsx)("p", { children: t(loopback ? "healthyDescription" : "blockedDescription") })]
						}),
						(0, react_jsx_runtime.jsx)("dl", {
							className: RecoverySettingsSection_module_css_default.facts,
							children: (0, react_jsx_runtime.jsxs)("div", { children: [(0, react_jsx_runtime.jsx)("dt", { children: t("authority") }), (0, react_jsx_runtime.jsx)("dd", { children: (0, react_jsx_runtime.jsx)("code", { children: authority }) })] })
						}),
						(0, react_jsx_runtime.jsx)("button", {
							className: loopback ? RecoverySettingsSection_module_css_default.secondaryButton : RecoverySettingsSection_module_css_default.primaryButton,
							type: "button",
							disabled: checkState === "checking" || checkState === "repairing",
							onClick: runCheck,
							children: t(checkState === "repairing" ? "repairing" : checkState === "checking" ? "checking" : "repair")
						}),
						snapshot !== void 0 && snapshot.issues.length > 0 ? (0, react_jsx_runtime.jsxs)("div", {
							className: RecoverySettingsSection_module_css_default.issueGroup,
							children: [
								(0, react_jsx_runtime.jsx)("h3", { children: t("issues.title") }),
								(0, react_jsx_runtime.jsx)("p", { children: t("issues.description") }),
								(0, react_jsx_runtime.jsx)("ul", {
									className: RecoverySettingsSection_module_css_default.findings,
									"aria-label": t("issues.title"),
									children: snapshot.issues.map((issue) => (0, react_jsx_runtime.jsxs)("li", {
										"data-finding-status": issue.repairable ? "warning" : "failed",
										children: [(0, react_jsx_runtime.jsx)("span", {
											className: RecoverySettingsSection_module_css_default.findingDot,
											"aria-hidden": "true"
										}), (0, react_jsx_runtime.jsxs)("div", { children: [
											(0, react_jsx_runtime.jsx)("strong", { children: issue.moduleName ?? issue.entryId ?? t("issues.configuration") }),
											(0, react_jsx_runtime.jsx)("p", { children: t(`issue.${issue.kind}`) }),
											(0, react_jsx_runtime.jsx)("small", { children: issue.repairable ? t("issues.automatic") : t("issues.manual") })
										] })]
									}, issue.issueId))
								})
							]
						}) : snapshot !== void 0 ? (0, react_jsx_runtime.jsx)("p", {
							className: RecoverySettingsSection_module_css_default.success,
							children: t("issues.none")
						}) : null,
						outcomes.length > 0 ? (0, react_jsx_runtime.jsx)("ul", {
							className: RecoverySettingsSection_module_css_default.outcomes,
							"aria-label": t("outcomes"),
							children: outcomes.map((outcome) => (0, react_jsx_runtime.jsx)("li", { children: t(`outcome.${outcome.status}`) }, outcome.issueId))
						}) : null,
						checkState !== "idle" ? (0, react_jsx_runtime.jsxs)("div", {
							className: RecoverySettingsSection_module_css_default.progressGroup,
							children: [(0, react_jsx_runtime.jsxs)("div", {
								className: RecoverySettingsSection_module_css_default.progressCopy,
								children: [(0, react_jsx_runtime.jsx)("span", { children: t("progress") }), (0, react_jsx_runtime.jsxs)("span", { children: [
									findings.length + (repairStep ? 1 : 0),
									"/",
									TOTAL_CHECKS + (repairStep ? 1 : 0)
								] })]
							}), (0, react_jsx_runtime.jsx)("div", {
								className: RecoverySettingsSection_module_css_default.progressTrack,
								role: "progressbar",
								"aria-label": t("progress"),
								"aria-valuemin": 0,
								"aria-valuemax": TOTAL_CHECKS + (repairStep ? 1 : 0),
								"aria-valuenow": findings.length + (repairStep ? 1 : 0),
								children: (0, react_jsx_runtime.jsx)("span", { style: { width: `${(findings.length + (repairStep ? 1 : 0)) / (TOTAL_CHECKS + (repairStep ? 1 : 0)) * 100}%` } })
							})]
						}) : null,
						findings.length > 0 ? (0, react_jsx_runtime.jsx)("ul", {
							className: RecoverySettingsSection_module_css_default.findings,
							"aria-label": t("findings"),
							children: findings.map((finding) => (0, react_jsx_runtime.jsxs)("li", {
								"data-finding-status": finding.status,
								children: [(0, react_jsx_runtime.jsx)("span", {
									className: RecoverySettingsSection_module_css_default.findingDot,
									"aria-hidden": "true"
								}), (0, react_jsx_runtime.jsxs)("div", { children: [(0, react_jsx_runtime.jsx)("strong", { children: t(`check.${finding.id}.title`) }), (0, react_jsx_runtime.jsx)("p", { children: t(findingCopyKey(finding)) })] })]
							}, finding.id))
						}) : null,
						checkState === "passed" ? (0, react_jsx_runtime.jsx)("p", {
							className: RecoverySettingsSection_module_css_default.success,
							role: "status",
							children: t("checked")
						}) : null,
						checkState === "failed" ? (0, react_jsx_runtime.jsx)("p", {
							className: RecoverySettingsSection_module_css_default.failure,
							role: "alert",
							children: t("checkFailed")
						}) : null
					]
				})]
			});
		}
		//#endregion
		//#region lib/types/client/locales.js
		/** Copy dictionaries for the Web recovery Settings section. */
		/** Simplified Chinese dictionary and key source of truth. */
		const zh = {
			nav: "Recovery",
			title: "Recovery",
			intro: "检查并修复阻止设置、插件与模型界面工作的基础故障。",
			blockedTitle: "在当前地址修复管理接口",
			blockedDescription: "此服务只监听本机；明确受信任的本机别名可以原地恢复设置接口，不需要切换到 localhost。",
			authority: "当前地址",
			repair: "一键检查与修复",
			checking: "检查中…",
			repairing: "正在备份并恢复…",
			progress: "修复进度",
			findings: "诊断结果",
			"check.authority.title": "本机管理权限",
			"check.authority.passed": "当前地址已通过本机管理权限检查。",
			"check.authority.warning": "当前地址不是本机管理地址；只执行只读诊断，修复后会刷新原地址。",
			"check.authority.failed": "当前地址未获得本机管理权限，不能执行持久化修复。",
			"check.startup.title": "Web 启动保护",
			"check.startup.passed": "Recovery 入口已独立加载；不可用的 profile 插件会与 Web 管理界面隔离。",
			"check.startup.failed": "Web 启动保护不可用。",
			"check.settings.title": "设置与插件配置",
			"check.settings.passed": "设置目录可用，插件配置卡片可以加载。",
			"check.settings.failed": "设置目录不可用或没有可配置项目。",
			"check.presets.title": "Agent 预设",
			"check.presets.passed": "Agent 预设目录可以正常读取。",
			"check.presets.failed": "Agent 预设目录读取失败。",
			"check.providers.title": "模型提供方",
			"check.providers.passed": "模型提供方目录可以正常读取。",
			"check.providers.failed": "模型提供方目录读取失败。",
			healthyTitle: "管理接口可用",
			healthyDescription: "当前页面使用已授权的本机地址；仍可一键复查设置、预设和模型提供方。",
			checked: "设置目录、Agent 预设和模型提供方检查通过。",
			checkFailed: "核心接口检查失败，请查看启动终端中的诊断。",
			"issues.title": "发现的问题",
			"issues.description": "坏插件已经临时关闭，不会影响其他正常功能。",
			"issues.configuration": "配置文件",
			"issues.automatic": "可以安全地自动尝试修复",
			"issues.manual": "需要你确认原来的安装来源或配置内容",
			"issues.none": "没有发现被隔离的坏插件。",
			"issue.missing-package": "插件文件不见了。",
			"issue.activation-failed": "插件启动失败。",
			"issue.invalid-config": "配置文件无法读取。",
			outcomes: "修复结果",
			"outcome.repaired": "修复成功，插件已经恢复。",
			"outcome.failed": "自动修复没有成功，问题项目仍保持关闭。",
			"outcome.skipped": "无法安全判断修复方式，因此没有修改。"
		};
		/** English dictionary checked against the Chinese key set. */
		const en = {
			nav: "Recovery",
			title: "Web recovery",
			intro: "Check and repair foundation failures that block Settings, plugins, and models.",
			blockedTitle: "Repair management APIs at this address",
			blockedDescription: "This service listens only on this machine. An explicitly trusted local alias can restore Settings in place without switching to localhost.",
			authority: "Current address",
			repair: "Check and repair",
			checking: "Checking…",
			repairing: "Backing up and restoring…",
			progress: "Recovery progress",
			findings: "Diagnostic findings",
			"check.authority.title": "Local management authority",
			"check.authority.passed": "This address passed the local management authority check.",
			"check.authority.warning": "This is not a local management address; only read-only diagnostics run before the original address reloads.",
			"check.authority.failed": "This address lacks local management authority and cannot apply durable repairs.",
			"check.startup.title": "Web startup protection",
			"check.startup.passed": "Recovery loaded independently; unavailable profile plugins are isolated from Web management.",
			"check.startup.failed": "Web startup protection is unavailable.",
			"check.settings.title": "Settings and plugin configuration",
			"check.settings.passed": "The settings directory is available and plugin configuration cards can load.",
			"check.settings.failed": "The settings directory is unavailable or has no configurable entries.",
			"check.presets.title": "Agent presets",
			"check.presets.passed": "The agent-preset directory is readable.",
			"check.presets.failed": "The agent-preset directory could not be read.",
			"check.providers.title": "Model providers",
			"check.providers.passed": "The model-provider directory is readable.",
			"check.providers.failed": "The model-provider directory could not be read.",
			healthyTitle: "Management APIs are available",
			healthyDescription: "This page uses an authorized local address; Settings, presets, and model providers can still be rechecked.",
			checked: "Settings, agent-preset, and model-provider checks passed.",
			checkFailed: "The core API check failed. See the launch terminal for diagnostics.",
			"issues.title": "Problems found",
			"issues.description": "Broken plugins are temporarily turned off, so healthy features keep working.",
			"issues.configuration": "Configuration file",
			"issues.automatic": "Recovery can safely try this repair",
			"issues.manual": "Confirm the original install source or configuration before changing it",
			"issues.none": "No isolated broken plugins were found.",
			"issue.missing-package": "The plugin files are missing.",
			"issue.activation-failed": "The plugin failed while starting.",
			"issue.invalid-config": "The configuration file could not be read.",
			outcomes: "Repair results",
			"outcome.repaired": "Repair succeeded and the plugin is available again.",
			"outcome.failed": "Automatic repair did not succeed, so the problem item remains disabled.",
			"outcome.skipped": "Recovery could not choose a safe repair, so nothing was changed."
		};
		//#endregion
		//#region lib/types/client/index.js
		/** Client-only Web recovery section registered into Settings. */
		/** Dictionary namespace owned by this plugin. */
		const NS = "settings.recovery";
		/** Services required by the Settings contribution. */
		const inject = [
			"slots",
			"locale",
			"connection"
		];
		function currentPage() {
			return typeof location === "undefined" ? void 0 : location;
		}
		/** Register the recovery section without requiring a successful Host RPC. */
		function apply(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "ui-settings-recovery: dictionaries");
			const connection = ctx.get("connection");
			const t = ctx.locale.bind(NS);
			const page = currentPage();
			const checkCore = async (reportFinding = () => {}) => {
				const findings = [];
				const record = (finding) => {
					findings.push(finding);
					reportFinding(finding);
				};
				record({
					id: "authority",
					status: connection.isLoopback ? "passed" : "warning"
				});
				try {
					record({
						id: "startup",
						status: (await connection.api.recovery.scan({})).result.ok ? "passed" : "failed"
					});
				} catch {
					record({
						id: "startup",
						status: "failed"
					});
				}
				try {
					const settings = await connection.api.settings.describe({});
					record({
						id: "settings",
						status: settings.result.ok && settings.result.value.namespaces.length > 0 ? "passed" : "failed"
					});
				} catch {
					record({
						id: "settings",
						status: "failed"
					});
				}
				try {
					record({
						id: "presets",
						status: (await connection.api.agentPresets.list({})).result.ok ? "passed" : "failed"
					});
				} catch {
					record({
						id: "presets",
						status: "failed"
					});
				}
				try {
					record({
						id: "providers",
						status: (await connection.api.llm.providers({})).result.ok ? "passed" : "failed"
					});
				} catch {
					record({
						id: "providers",
						status: "failed"
					});
				}
				if (findings.some((finding) => finding.status === "failed")) throw new Error("one or more recovery checks failed");
				return findings;
			};
			const injected = () => ({
				authority: page?.host ?? "",
				loopback: connection.isLoopback,
				repairCurrent: async (reportFinding) => {
					const findings = await checkCore(reportFinding);
					globalThis.location.reload();
					return findings;
				},
				checkCore,
				scanRecovery: async () => {
					const response = await connection.api.recovery.scan({});
					if (!response.result.ok) throw new Error(response.result.error.message);
					return response.result.value;
				},
				repairIssues: async (issueIds) => {
					const response = await connection.api.recovery.repair({ issueIds });
					if (!response.result.ok) throw new Error(response.result.error.message);
					return response.result.value;
				}
			});
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "recovery",
				order: 100,
				label: () => t("nav"),
				locale: NS,
				inject: injected
			}, RecoverySettingsSection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map