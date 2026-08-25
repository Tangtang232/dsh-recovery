//#region lib/types/invariant.js
/** Package-owned invariant companion. @module @tangtang232/dsh-recovery/invariant */
const PACKAGE_NAME = "@tangtang232/dsh-recovery";
/** Cordis companion plugin name. */
const name = "dsh-recovery-invariant";
/** Service required before the companion can reserve package ownership. */
const inject = ["invariants"];
/** No runtime invariant: this package derives a browser-local recovery action. */
const install = () => {};
/** Register this package's invariant companion. */
const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
//#endregion
export { apply, inject, name };
