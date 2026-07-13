"use strict";
var plugins = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugin.js
  var plugin_exports = {};
  __export(plugin_exports, {
    Plugin: () => Plugin
  });

  // ../../shared/settings-ui/tokens.css
  var tokens_default = `/*
 * Thymer Plugin Settings UI \u2014 Design Tokens
 *
 * Canonical CSS custom properties for the plugin settings panel system.
 * Plugins consume this verbatim; component CSS reads from these vars.
 *
 * See shared/settings-ui/DESIGN.md for rationale.
 *
 * Thymer var names verified against library/css-tokens/ (ripped from shipped CSS).
 * Fallbacks use color-mix(currentColor) so panels work when a token is absent.
 *
 * SCOPE IS DOUBLED ON PURPOSE (.tps-panel.tps-panel, specificity 0,2,0).
 * Every plugin bundles its own copy of this file and injects it into the same
 * document, all declaring the same global .tps-panel class. At equal specificity
 * the last stylesheet injected wins for EVERY panel in the app, so one plugin
 * running an outdated bundle silently redefines these tokens for all the others.
 * That shipped: pre-1f753f6 builds set --tps-accent from --accent-color, a var
 * Thymer never defines, which collapsed the accent to currentColor (white text)
 * across every installed plugin's panel. Doubling the class lets a current copy
 * outrank any stale plain-.tps-panel copy regardless of injection order.
 * Do not "simplify" this back to a single class.
 */

.tps-panel.tps-panel {
  /* \u2500\u2500 Color: text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-text:           var(--text-default,   currentColor);
  --tps-text-muted:     var(--text-muted,     color-mix(in srgb, currentColor 62%, transparent));
  --tps-text-faint:     var(--text-subtle,    color-mix(in srgb, currentColor 48%, transparent));
  --tps-text-whisper:   var(--text-disabled,  color-mix(in srgb, currentColor 34%, transparent));

  /* \u2500\u2500 Color: surfaces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-bg-input:       var(--input-bg-color,
                        color-mix(in srgb, currentColor 6%, transparent));
  --tps-bg-hover:       var(--hover-subtle,
                        var(--sidebar-bg-hover,
                        color-mix(in srgb, currentColor 8%, transparent)));
  --tps-bg-active:      var(--active-bg-color,
                        color-mix(in srgb, currentColor 12%, transparent));

  /* \u2500\u2500 Color: borders / dividers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-divider:        var(--divider-color,
                        var(--thin-divider-color,
                        color-mix(in srgb, currentColor 14%, transparent)));
  --tps-border:         var(--input-border-color,
                        var(--divider-color,
                        color-mix(in srgb, currentColor 22%, transparent)));
  --tps-border-strong:  var(--titlebar-border-color,
                        var(--selection-border,
                        color-mix(in srgb, currentColor 32%, transparent)));

  /* \u2500\u2500 Color: accent (Thymer uses --logo-color) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Fallback is a real color, never currentColor: an accent that degrades into
     the text color fails invisibly. Deliberately the brand mark, not the theme's
     --color-primary-500 \u2014 that one is a muted slate on themes like
     basalt-bedrock, which would make checked rows harder to read, not easier. */
  --tps-accent:         var(--logo-color, #04d1ab);
  --tps-accent-soft:    color-mix(in srgb, var(--tps-accent) 15%, transparent);
  --tps-accent-strong:  color-mix(in srgb, var(--tps-accent) 80%, var(--tps-text));

  /* \u2500\u2500 Color: semantic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-danger:         var(--enum-red-fg, #ef4444);
  --tps-danger-soft:    color-mix(in srgb, var(--tps-danger) 15%, transparent);
  --tps-warning:        var(--text-warning,
                        var(--enum-yellow-fg, #f59e0b));
  --tps-success:        var(--enum-green-fg, #10b981);
  --tps-success-soft:   color-mix(in srgb, var(--tps-success) 12%, transparent);

  --tps-on-accent:      var(--text-on-accent, light-dark(#111111, #fafafa));

  /* Panel chrome */
  --tps-panel-bg:       var(--panel-bg-color, transparent);
  --tps-swatch-inset:   color-mix(in srgb, var(--tps-text) 8%, transparent);

  /* \u2500\u2500 Typography \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  /* Font is INHERITED from Thymer's panel chrome (see components.css). */

  --tps-fs-title:       18px;
  --tps-fs-lede:        13px;
  --tps-fs-section:     11px;
  --tps-fs-hint:        12px;
  --tps-fs-label:       13px;
  --tps-fs-desc:        12px;
  --tps-fs-body:        13px;
  --tps-fs-value:       12px;
  --tps-fs-button:      12px;
  --tps-fs-list-header: 10px;

  --tps-lh-tight:       1;
  --tps-lh-snug:        1.2;
  --tps-lh-base:        1.4;
  --tps-lh-loose:       1.5;

  --tps-fw-regular:     400;
  --tps-fw-medium:      500;
  --tps-fw-semibold:    600;
  --tps-fw-bold:        700;

  --tps-ls-section:     0.06em;
  --tps-ls-list:        0.08em;
  --tps-ls-title:       0;

  /* \u2500\u2500 Spacing (8px scale) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-space-1:        4px;
  --tps-space-2:        8px;
  --tps-space-3:        12px;
  --tps-space-4:        16px;
  --tps-space-5:        24px;
  --tps-space-6:        32px;
  --tps-space-7:        48px;

  /* \u2500\u2500 Radii \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-radius-sm:      4px;
  --tps-radius-md:      6px;
  --tps-radius-lg:      8px;
  --tps-radius-pill:    999px;
  --tps-radius-circle:  50%;

  /* \u2500\u2500 Motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-ease-out:       cubic-bezier(0.2, 0.6, 0.2, 1);
  --tps-ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --tps-dur-fast:       80ms;
  --tps-dur-base:       160ms;

  --tps-shadow-thumb:   0 1px 3px color-mix(in srgb, var(--tps-text) 28%, transparent);

  /* \u2500\u2500 Component dimensions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  --tps-control-h-sm:   28px;
  --tps-control-h-md:   32px;
  --tps-input-w:        64px;
  --tps-num-step-w:     28px;
  --tps-swatch-size:    22px;
  --tps-thumb-size:     16px;
  --tps-track-h:        6px;

  --tps-slider-track:   color-mix(in srgb, var(--tps-text) 22%, transparent);
  --tps-slider-thumb-border: color-mix(in srgb, var(--tps-text) 28%, transparent);
}

@media (prefers-reduced-motion: reduce) {
  .tps-panel.tps-panel {
    --tps-dur-fast:     1ms;
    --tps-dur-base:     1ms;
  }
}
`;

  // ../../shared/settings-ui/components.css
  var components_default = `/*
 * Thymer Plugin Panel \u2014 Component Primitives
 *
 * All primitives scope under .tps-panel. Plugin-specific styles live elsewhere.
 * Reads tokens from tokens.css.
 */

/* \u2500\u2500 Panel root \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Inherit Thymer's font + sizing \u2014 DO NOT override. plugin-collection-icons
   demonstrates the right approach: simply \`font-family: inherit\`. Forcing a
   custom var fights both Thymer's body font AND the .ti icon font. */
.tps-panel {
  font-family: inherit;
  font-size: var(--tps-fs-body);
  line-height: var(--tps-lh-base);
  color: var(--tps-text);
  padding: 0 var(--tps-space-5) var(--tps-space-7);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.tps-panel *,
.tps-panel *::before,
.tps-panel *::after {
  box-sizing: border-box;
}

/* Mono opt-ins are explicit per-element, never via a panel-wide override. */
.tps-panel .tps-num-input,
.tps-panel .tps-slider-value,
.tps-panel .tps-mono,
.tps-panel .tps-mono * {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
}

/* \u2500\u2500 Title block \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-title {
  font-size: var(--tps-fs-title);
  line-height: var(--tps-lh-snug);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-title);
  color: var(--tps-text);
  margin: 0 0 var(--tps-space-1);
}

.tps-lede {
  font-size: var(--tps-fs-lede);
  line-height: var(--tps-lh-loose);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

/* \u2500\u2500 Canonical plugin header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-plugin-header {
  position: relative;
  margin: var(--tps-space-5) 0 var(--tps-space-5);
  padding: 18px var(--tps-space-4);
  overflow: hidden;
  background:
    linear-gradient(to right,
      #f26548  8%, #f26548 28%,
      #fbac56 28%, #fbac56 48%,
      #fff460 48%, #fff460 68%,
      #f067a6 68%, #f067a6 88%,
      #03bdf2 88%
    ) top left / 100% 1px no-repeat,
    linear-gradient(to right,
      #f26548  0%, #f26548 12%,
      #fbac56 12%, #fbac56 32%,
      #fff460 32%, #fff460 52%,
      #f067a6 52%, #f067a6 72%,
      #03bdf2 72%, #03bdf2 92%
    ) bottom left / 100% 1px no-repeat,
    var(--tps-panel-bg, var(--panel-bg-color, var(--plg-ci-theme-bg, transparent)));
  border-left: 1px solid #f26548;
  border-right: 1px solid #03bdf2;
}

.tps-plugin-header-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-2, 8px);
  margin: 0 0 var(--tps-space-3, 12px);
  background: var(--tps-bg-hover);
  border-radius: var(--tps-radius-md, 6px);
}

.tps-plugin-header-logo-icon {
  flex: 0 0 auto;
  font-size: 34px;
  line-height: 1;
  color: var(--tps-text, currentColor);
}

.tps-plugin-header-title {
  font-size: 22px;
  line-height: var(--tps-lh-snug, 1.2);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: 0;
  color: var(--tps-text, var(--text-default, currentColor));
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-version {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: baseline;
  align-self: baseline;
  font-size: 11px;
  line-height: inherit;
  font-weight: var(--tps-fw-medium, 500);
  letter-spacing: 0;
  color: var(--tps-text-faint) !important;
  white-space: nowrap;
}

.tps-plugin-header-lede {
  font-size: 14px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-wrap {
  margin: 0 0 var(--tps-space-3, 12px);
}

.tps-plugin-header-helper-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  color: inherit;
  opacity: 0.28;
  font: inherit;
  font-size: var(--tps-fs-section, 11px);
  font-weight: var(--tps-fw-semibold, 600);
  line-height: var(--tps-lh-tight, 1);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-toggle:hover {
  opacity: 0.72;
}

.tps-plugin-header-helper-toggle:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--tps-accent, currentColor) 45%, transparent);
  outline-offset: 2px;
}

.tps-plugin-header-helper-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 13px;
  height: 13px;
  font-size: 13px;
  line-height: 1;
  color: inherit;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle {
  opacity: 0.72;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-toggle:hover {
  opacity: 1;
}

.tps-plugin-header-helper-body {
  display: none;
  margin: 8px 0 0;
  padding-left: 18px;
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body {
  display: block;
  cursor: pointer;
}

.tps-plugin-header-helper-line {
  margin: 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: inherit;
  opacity: 0.72;
  transition: opacity var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-helper-wrap[data-open="true"] .tps-plugin-header-helper-body:hover .tps-plugin-header-helper-line {
  opacity: 1;
}

.tps-plugin-header-attr {
  position: relative;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0;
  width: 100%;
  font-size: 11.5px;
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
  margin: var(--tps-space-3, 12px) 0 0;
  padding-top: var(--tps-space-3, 12px);
  border-top: 0;
}

.tps-plugin-header-attr::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: clamp(40%, 50%, 55%);
  height: 1px;
  background: var(--tps-bg-hover);
}

.tps-plugin-header-link-group + .tps-plugin-header-link-group {
  margin-left: var(--tps-space-3, 12px);
  padding-left: var(--tps-space-3, 12px);
  border-left: 1px solid var(--tps-bg-hover);
}

.tps-plugin-header-icon,
.tps-plugin-header-attr .ti {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 12px;
  line-height: 1;
  color: var(--tps-text-muted);
  transform: translateY(2px);
  margin-right: var(--tps-space-1, 4px);
}

.tps-plugin-header-iconify {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.tps-plugin-header-iconify-github {
  --tps-iconify-github: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
  -webkit-mask-image: var(--tps-iconify-github);
  mask-image: var(--tps-iconify-github);
}

.tps-plugin-header-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              text-decoration-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              filter var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

.tps-plugin-header-link--blue,
.tps-plugin-header-link--blue:hover {
  color: #03bdf2;
  text-decoration-color: #03bdf2;
}

.tps-plugin-header-link--pink,
.tps-plugin-header-link--pink:hover {
  color: #f067a6;
  text-decoration-color: #f067a6;
}

.tps-plugin-header-link--muted,
.tps-plugin-header-link--muted:hover {
  color: var(--tps-text-faint) !important;
  text-decoration-color: color-mix(in srgb, currentColor 42%, transparent);
}

.tps-plugin-header-link:hover {
  text-decoration: none;
  text-decoration-color: transparent;
  filter: brightness(1.2);
}

/* \u2500\u2500 Header controls: bug report + kill switch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Last flex item of the attr row; margin-left:auto pins the group to the
   right edge, align-self:center opts out of the row's baseline alignment. */
.tps-plugin-header-controls {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-2, 8px);
  margin-left: auto;
  align-self: center;
  padding-left: var(--tps-space-3, 12px);
}

.tps-plugin-header-bug {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  transition: color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease-out);
}

/* Undo the attr row's generic .ti treatment (translateY + margin) inside the button. */
.tps-plugin-header-bug .ti {
  width: 14px;
  height: 14px;
  font-size: 14px;
  transform: none;
  margin: 0;
}

.tps-plugin-header-bug:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-plugin-header-bug:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  width: 30px;
  height: 16px;
  padding: 0;
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-pill, 999px);
  background: var(--tps-bg-input);
  cursor: pointer;
  transition: background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              border-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch-knob {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 12px;
  height: 12px;
  border-radius: var(--tps-radius-circle, 50%);
  background: var(--tps-text-muted);
  transition: transform var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out),
              background-color var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

.tps-switch[aria-checked="true"] {
  background: var(--tps-accent);
  border-color: var(--tps-accent);
}

.tps-switch[aria-checked="true"] .tps-switch-knob {
  transform: translateX(14px);
  background: var(--tps-on-accent, #fff);
}

.tps-switch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-switch[data-busy],
.tps-switch:disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* Off-state "safe mode": dim the body, keep it interactive \u2014 edits stage in the
   plugin's local drafts and apply on re-enable. Keyed off the pill's aria state
   so the optimistic flip dims instantly and heal re-renders stay correct with
   no JS. The header (pill, bug button, off-note) stays full opacity \u2014 exclude
   any direct child containing it (collection-icons wraps the header in a row
   element, so exclude by content, not class). */
.tps-panel:has(.tps-plugin-header .tps-switch[aria-checked="false"]) > :not(:has(.tps-plugin-header)) {
  opacity: 0.65;
  transition: opacity var(--tps-dur-base, 160ms) var(--tps-ease-out, ease-out);
}

/* Rendered whenever the header has a kill switch; shown only while it's off. */
.tps-plugin-header-off-note {
  display: none;
  margin: var(--tps-space-2, 8px) 0 0;
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-plugin-header:has(.tps-switch[aria-checked="false"]) .tps-plugin-header-off-note {
  display: block;
}

/* \u2500\u2500 Feedback dialog (panel-scoped modal) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The overlay positions against the .tps-panel root (the scroll container). */
.tps-panel {
  position: relative;
}

.tps-feedback-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--tps-space-4);
  background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 55%, transparent);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}

@supports not ((backdrop-filter: blur(6px)) or (-webkit-backdrop-filter: blur(6px))) {
  .tps-feedback-overlay {
    background: color-mix(in srgb, var(--panel-bg-color, light-dark(#ffffff, #131316)) 90%, transparent);
  }
}

/* Flex column with a growing description field: the card stretches to the
   available panel height (capped) and the textarea absorbs the difference,
   so the card itself never needs a scrollbar. */
.tps-feedback-card {
  display: flex;
  flex-direction: column;
  width: min(440px, 100%);
  height: min(760px, 100%);
  overflow: auto;
  background: var(--panel-bg-color, light-dark(#ffffff, #17171b));
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-lg);
  padding: var(--tps-space-4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
}

/* Rows keep their natural height \u2014 when content doesn't fit (e.g. the system
   report drawer opens in a short panel) the CARD scrolls; rows must never be
   squeezed into overlapping each other. Only the description field flexes. */
.tps-feedback-card > * {
  flex: 0 0 auto;
}

.tps-feedback-card > .tps-feedback-field--grow {
  flex: 1 1 auto;
}

.tps-feedback-field--grow {
  display: flex;
  flex-direction: column;
}

.tps-feedback-field--grow .tps-feedback-textarea {
  flex: 1 1 auto;
  min-height: 72px;
}

.tps-feedback-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 var(--tps-space-2);
}

.tps-feedback-title {
  margin: 0;
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-semibold, 600);
  letter-spacing: var(--tps-ls-section, 0.06em);
  text-transform: uppercase;
  color: var(--tps-text);
}

.tps-feedback-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm, 4px);
  background: transparent;
  color: var(--tps-text-muted);
  cursor: pointer;
  font-size: 14px;
}

.tps-feedback-close:hover {
  color: var(--tps-text);
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-feedback-close:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

.tps-feedback-hint {
  margin: 0 0 var(--tps-space-3);
  font-size: var(--tps-fs-hint, 12px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text-muted);
}

.tps-feedback-field {
  display: block;
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-label {
  display: block;
  margin: 0 0 var(--tps-space-1);
  font-size: var(--tps-fs-label, 12.5px);
  font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text);
}

.tps-feedback-input,
.tps-feedback-textarea {
  width: 100%;
  padding: var(--tps-space-1, 4px) var(--tps-space-2, 8px);
  font-family: inherit;
  font-size: var(--tps-fs-body, 13px);
  line-height: var(--tps-lh-base, 1.4);
  color: var(--tps-text);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-border);
  border-radius: var(--tps-radius-sm, 4px);
}

.tps-feedback-textarea {
  resize: vertical;
  min-height: 72px;
}

.tps-feedback-input:focus,
.tps-feedback-textarea:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--tps-accent) 60%, transparent);
}

.tps-feedback-input[aria-invalid="true"],
.tps-feedback-textarea[aria-invalid="true"] {
  border-color: var(--tps-danger);
}

.tps-feedback-details {
  margin: 0 0 var(--tps-space-3);
}

.tps-feedback-summary {
  font-size: var(--tps-fs-hint, 12px);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-feedback-summary:hover {
  color: var(--tps-text);
}

.tps-feedback-report {
  margin: var(--tps-space-2) 0 0;
  padding: var(--tps-space-2);
  max-height: 140px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Courier New", monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tps-text-muted);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm, 4px);
}

/* Themed thin scrollbars \u2014 the card (short panels) and the report pre both scroll. */
.tps-feedback-card,
.tps-feedback-report {
  scrollbar-width: thin;
  scrollbar-color: var(--tps-border, rgba(127, 127, 127, 0.25)) transparent;
}

.tps-feedback-card::-webkit-scrollbar,
.tps-feedback-report::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.tps-feedback-card::-webkit-scrollbar-track,
.tps-feedback-report::-webkit-scrollbar-track {
  background: transparent;
}

.tps-feedback-card::-webkit-scrollbar-thumb,
.tps-feedback-report::-webkit-scrollbar-thumb {
  background: var(--tps-border, rgba(127, 127, 127, 0.25));
  border-radius: 999px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.tps-feedback-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--tps-space-2);
}

/* \u2500\u2500 Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-section {
  padding: 0;
}

.tps-section + .tps-section {
  border-top: 1px solid var(--tps-divider);
  margin-top: var(--tps-space-4);
  padding-top: var(--tps-space-4);
}

.tps-section-label {
  display: block;
  font-size: var(--tps-fs-section);
  line-height: var(--tps-lh-tight);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-2);
}

.tps-section-hint {
  font-size: var(--tps-fs-hint);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  margin: 0 0 var(--tps-space-3);
}

.tps-section-body {
  display: flex;
  flex-direction: column;
  gap: var(--tps-space-3);
  margin-top: var(--tps-space-2);
}

.tps-section-body:first-child {
  margin-top: 0;
}

/* When the body is full of list rows (mode rows), drop the gap and the top
   margin entirely so the first row's hover background sits flush under the
   section label and adjacent rows tile with no dead space between them. */
.tps-section-body:has(> .tps-list-row),
.tps-section-body:has(> .tps-opt) {
  margin-top: 0;
  gap: 0;
}

/* Collapsible variant: header is a button, body is hidden when closed */

.tps-section--collapsible > .tps-section-header {
  display: flex;
  align-items: center;
  gap: var(--tps-space-2);
  width: 100%;
  min-height: 34px;
  padding: 0;
  margin: 0 0 var(--tps-space-2);
  background: transparent;
  border: 0;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.tps-section--collapsible > .tps-section-header:hover .tps-section-label {
  color: var(--tps-text);
}

.tps-section--collapsible > .tps-section-header .tps-section-label {
  margin: 0;
}

.tps-section-chev {
  display: inline-block;
  width: 10px;
  font-size: 10px;
  line-height: 1;
  color: var(--tps-text-faint);
  transition: transform var(--tps-dur-base) var(--tps-ease-out);
}

.tps-section--collapsible[data-open="true"] .tps-section-chev {
  transform: rotate(90deg);
}

.tps-section-summary {
  margin-left: auto;
  min-width: 0;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  font-weight: var(--tps-fw-regular);
  letter-spacing: 0;
  text-transform: none;
}

/* Reserve header height when expanded; summary text only shows collapsed */
.tps-section--collapsible[data-open="true"] .tps-section-summary {
  visibility: hidden;
}

.tps-section--collapsible[data-open="false"] > .tps-section-body {
  display: none;
}

/* \u2500\u2500 Option row (checkbox / radio + label + desc) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-opt {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: var(--tps-space-3);
  row-gap: 0;
  align-items: start;
  padding: 6px 10px;
  margin: 0 -10px;
  border-radius: var(--tps-radius-md);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

/* Stack option rows tight so the hover background of one meets the next
   without a visible gap above. Outer section gap is handled by the section
   itself, not by spacing between opts. */
.tps-section-body > .tps-opt + .tps-opt {
  margin-top: 0;
}
.tps-section-body:has(> .tps-opt) {
  gap: 0;
}

.tps-opt:hover {
  background: var(--tps-bg-hover);
}

.tps-opt > input[type="checkbox"],
.tps-opt > input[type="radio"] {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--tps-accent);
  cursor: pointer;
}

.tps-opt > .tps-opt-label {
  grid-column: 2;
  grid-row: 1;
  font-size: var(--tps-fs-label);
  line-height: var(--tps-lh-base);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text);
  cursor: pointer;
  transition: color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-opt > .tps-opt-desc {
  grid-column: 2;
  grid-row: 2;
  margin-top: 1px;
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
  cursor: pointer;
}

.tps-section-body > .tps-opt-note {
  margin: var(--tps-space-2) -10px 0;
  padding: 0 10px 0 calc(10px + 18px + var(--tps-space-3));
  font-size: var(--tps-fs-desc);
  line-height: var(--tps-lh-base);
  color: var(--tps-text-muted);
}

.tps-opt > input:checked ~ .tps-opt-label {
  color: var(--tps-accent);
}

/* Checkbox option + nested number row (e.g. tuned value under a toggle) */
.tps-section-body:has(> .tps-opt-group) {
  margin-top: 0;
  gap: 0;
}

.tps-opt-group {
  display: flex;
  flex-direction: column;
}

.tps-opt-group + .tps-opt-group {
  margin-top: 0;
}

.tps-opt-group .tps-opt-group__value,
.tps-opt-group > .tps-num {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  padding-right: 10px;
  max-width: 100%;
  box-sizing: border-box;
}

.tps-opt-group .tps-num-grid {
  margin-left: calc(18px + var(--tps-space-3));
  margin-top: var(--tps-space-1);
  margin-bottom: var(--tps-space-3);
  grid-template-columns: minmax(0, 1fr);
}

/* \u2500\u2500 Numeric stepper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-num {
  display: flex;
  align-items: center;
  gap: var(--tps-space-1);
}

.tps-num-label {
  flex: 0 0 auto;
  min-width: 0;
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  margin-right: var(--tps-space-2);
}

.tps-num-step,
.tps-num-input,
.tps-num-reset {
  font-family: inherit;
  font-size: var(--tps-fs-button);
  height: var(--tps-control-h-sm);
  border: 1px solid var(--tps-divider);
  border-radius: var(--tps-radius-sm);
  background: transparent;
  color: var(--tps-text);
  transition: border-color var(--tps-dur-fast) var(--tps-ease-out),
              background-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-num-step {
  width: var(--tps-num-step-w);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.tps-num-step:hover {
  border-color: var(--tps-border);
  background: var(--tps-bg-hover);
}

.tps-num-step:active {
  background: var(--tps-bg-active);
}

.tps-num-input {
  width: var(--tps-input-w);
  padding: 0 var(--tps-space-2);
  background: var(--tps-bg-input);
  text-align: center;
  font-variant-numeric: tabular-nums;
  -moz-appearance: textfield;
}

.tps-num-input::-webkit-outer-spin-button,
.tps-num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.tps-num-input:focus {
  outline: none;
  border-color: var(--tps-accent);
}

.tps-num-unit {
  font-size: var(--tps-fs-hint);
  color: var(--tps-text-muted);
  margin: 0 var(--tps-space-2);
}

.tps-num-reset {
  font-size: 11px;
  color: var(--tps-text-muted);
  padding: 0 var(--tps-space-2);
  cursor: pointer;
}

.tps-num-reset:hover {
  color: var(--tps-text);
  border-color: var(--tps-border);
}

.tps-num-reset[hidden] {
  display: none !important;
}

/* Stacked layout: label / control row in a 200px / 1fr grid */

.tps-num-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  column-gap: var(--tps-space-3);
  row-gap: var(--tps-space-2);
}

.tps-num-grid > .tps-num-label {
  margin: 0;
  text-align: left;
}

.tps-num-grid > .tps-num {
  justify-self: start;
}

/* \u2500\u2500 Slider row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Shared range styling for sliderRow and any other range input in a panel.
   Exclude hue pickers that paint their own gradient track. */
.tps-panel input[type="range"]:not(.plg-collection-colors__hue) {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue)::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"]:not(.plg-collection-colors__hue):active::-webkit-slider-thumb {
  cursor: grabbing;
}

.tps-slider {
  display: grid;
  grid-template-columns: 90px 1fr 56px auto;
  align-items: center;
  gap: var(--tps-space-3);
}

.tps-slider-label {
  font-size: var(--tps-fs-section);
  font-weight: var(--tps-fw-semibold);
  letter-spacing: var(--tps-ls-section);
  text-transform: uppercase;
  color: var(--tps-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tps-slider-input {
  width: 100%;
  height: 22px;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  touch-action: pan-y;
}

.tps-slider-input::-webkit-slider-runnable-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-moz-range-track {
  height: var(--tps-track-h);
  border-radius: 3px;
  background: var(--tps-slider-track);
}

.tps-slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
  margin-top: -5px;
}

.tps-slider-input::-moz-range-thumb {
  width: var(--tps-thumb-size);
  height: var(--tps-thumb-size);
  border-radius: var(--tps-radius-circle);
  background: var(--tps-accent);
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-input:active::-webkit-slider-thumb {
  cursor: grabbing;
}

/* Hue picker keeps its gradient track; only style the thumb. */
.tps-panel input[type="range"].plg-collection-colors__hue {
  width: 100%;
  height: 10px;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-panel input[type="range"].plg-collection-colors__hue::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--tps-radius-circle);
  background: var(--panel-bg-color, var(--tps-panel-bg, currentColor));
  border: 2px solid var(--tps-slider-thumb-border);
  box-shadow: var(--tps-shadow-thumb);
  cursor: grab;
}

.tps-slider-value {
  font-family: var(--tps-font-mono);
  font-size: var(--tps-fs-value);
  color: var(--tps-text);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Swatch + grid \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--tps-swatch-size));
  gap: var(--tps-space-2) 6px;
}

.tps-swatch {
  width: var(--tps-swatch-size);
  height: var(--tps-swatch-size);
  border-radius: var(--tps-radius-circle);
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset);
  transition: transform var(--tps-dur-fast) var(--tps-ease-out),
              box-shadow var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-swatch:hover {
  transform: scale(1.1);
}

.tps-swatch[aria-pressed="true"] {
  box-shadow: 0 0 0 2px var(--tps-accent);
}

/* \u2500\u2500 List rows \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-list {
  display: flex;
  flex-direction: column;
}

.tps-list-header {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  font-size: var(--tps-fs-list-header);
  font-weight: var(--tps-fw-bold);
  letter-spacing: var(--tps-ls-list);
  text-transform: uppercase;
  color: var(--tps-text-faint);
}

.tps-list-row {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  align-items: center;
  gap: var(--tps-space-3);
  padding: var(--tps-space-2) var(--tps-space-3);
  border-bottom: 1px solid var(--tps-divider);
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-list-row:last-child {
  border-bottom: 0;
}

.tps-list-row:hover {
  background: var(--tps-bg-hover);
}

.tps-list-name {
  font-size: var(--tps-fs-label);
  color: var(--tps-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* \u2500\u2500 Tabs / segmented control \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-tabs {
  display: inline-flex;
  align-items: center;
  gap: var(--tps-space-1);
  padding: 0;
}

.tps-tab {
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-2);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  color: var(--tps-text-muted);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--tps-radius-sm);
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-tab:hover {
  background: var(--tps-bg-hover);
  color: var(--tps-text);
}

.tps-tab[aria-pressed="true"],
.tps-tab[aria-selected="true"] {
  background: var(--tps-accent-soft);
  color: var(--tps-accent);
  border-color: color-mix(in srgb, var(--tps-accent) 50%, transparent);
}

/* \u2500\u2500 Buttons \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--tps-space-1);
  height: var(--tps-control-h-sm);
  padding: 0 var(--tps-space-3);
  font-family: inherit;
  font-size: var(--tps-fs-button);
  font-weight: var(--tps-fw-medium);
  border-radius: var(--tps-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color var(--tps-dur-fast) var(--tps-ease-out),
              border-color var(--tps-dur-fast) var(--tps-ease-out),
              color var(--tps-dur-fast) var(--tps-ease-out);
}

.tps-button--md { height: var(--tps-control-h-md); padding: 0 var(--tps-space-4); }

.tps-button--primary {
  background: var(--tps-accent);
  color: var(--tps-on-accent);
}

.tps-button--primary:hover {
  filter: brightness(1.08);
}

.tps-button--ghost {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text);
}

.tps-button--ghost:hover {
  background: var(--tps-bg-hover);
  border-color: var(--tps-border);
}

.tps-button--danger {
  background: transparent;
  border-color: var(--tps-divider);
  color: var(--tps-text-muted);
}

.tps-button--danger:hover {
  background: var(--tps-danger-soft);
  border-color: color-mix(in srgb, var(--tps-danger) 40%, transparent);
  color: var(--tps-danger);
}

/* \u2500\u2500 Focus rings (custom controls only \u2014 native inputs use accent-color) \u2500 */

.tps-tab:focus-visible,
.tps-button:focus-visible,
.tps-num-step:focus-visible,
.tps-num-reset:focus-visible,
.tps-swatch:focus-visible {
  outline: 2px solid var(--tps-accent);
  outline-offset: 2px;
}

/* \u2500\u2500 Inset card variant (rare \u2014 for palette-picker body, etc.) \u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.tps-card {
  padding: var(--tps-space-3);
  border-radius: var(--tps-radius-lg);
  background: var(--tps-bg-input);
  border: 1px solid var(--tps-divider);
}
`;

  // ../../shared/settings-ui/color-field.css
  var color_field_default = `/*
 * colorField \u2014 shared color picker (Theme | Tailwind | Custom).
 * Scoped under .tps-panel .tps-color-field; styled through --tps-* tokens.
 * Every selectable swatch is the same .tps-cf-dot across all three tabs.
 */

.tps-panel .tps-color-field { display: block; }

/* \u2500\u2500 Tabs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-tabs {
  display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 4px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px);
  padding: 4px; margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tab {
  cursor: pointer; border: 0; background: transparent;
  border-radius: var(--tps-radius-sm, 6px); padding: 8px 10px; font: inherit;
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  color: var(--tps-text-muted, rgba(127,127,127,0.75));
  transition: background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tab:hover { color: var(--tps-text, inherit); }
.tps-panel .tps-cf-tab.is-active {
  background: var(--tps-panel-bg, var(--bg-default, #fff));
  color: var(--tps-text, inherit); box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* \u2500\u2500 Panes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-pane { display: none; }
.tps-panel .tps-cf-pane.is-active { display: block; }

/* \u2500\u2500 Featured theme picks \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-featured {
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
  margin-bottom: var(--tps-space-3, 12px);
}
.tps-panel .tps-cf-tile {
  display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; cursor: pointer;
  background: var(--tps-bg-hover, rgba(127,127,127,0.04));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 10px 12px; color: var(--tps-text, inherit);
  transition: border-color var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              background var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-tile:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-tile.is-sel {
  border-color: var(--tps-accent, currentColor);
  background: var(--tps-accent-soft, rgba(127,127,127,0.08));
}
.tps-panel .tps-cf-tile-dot {
  width: 22px; height: 22px; flex: 0 0 auto; border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
}
.tps-panel .tps-cf-tile-label {
  font-size: var(--tps-fs-body, 13px); font-weight: var(--tps-fw-semibold, 600);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

/* \u2500\u2500 Groups + the universal swatch dot \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-group { margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-group-head { display: flex; align-items: baseline; gap: 8px; margin-bottom: var(--tps-space-2, 8px); }
.tps-panel .tps-cf-group-label {
  font-size: var(--tps-fs-section, 11px); letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--tps-text-faint, var(--tps-text-muted, rgba(127,127,127,0.6))); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-group-hint { font-size: var(--tps-fs-section, 11px); color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Swatches: square dots that fill the row width (22 across in the Tailwind
 *    hue row); every swatch elsewhere matches that width. \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-dots {
  display: grid; grid-template-columns: repeat(22, minmax(0, 1fr)); gap: 5px;
  /* explicit resets so a stale accumulated .tps-cf-dots rule (old edge-to-edge
   * build injected an inset-ring outline) can't linger after a plugin reload. */
  border: 0; border-radius: 0; overflow: visible; box-shadow: none; background: none; padding: 0;
}
.tps-panel .tps-cf-dot {
  aspect-ratio: 1 / 1; min-width: 0; width: 100%; height: auto; border: 0; padding: 0; margin: 0;
  cursor: pointer; position: relative;
  border-radius: var(--tps-radius-sm, 6px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18));
  transition: transform var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease),
              box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-dot:hover { transform: scale(1.12); z-index: 3; }
.tps-panel .tps-cf-dot:focus-visible,
.tps-panel .tps-cf-dot.is-sel,
.tps-panel .tps-cf-dot.is-active {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.18)),
              0 0 0 2px var(--tps-panel-bg, #fff), 0 0 0 4px var(--tps-accent, currentColor);
}

/* \u2500\u2500 Lightness "tints": full-width ramp, shade number inside (do not touch) \u2500 */
.tps-panel .tps-cf-ramp {
  display: grid; grid-template-columns: repeat(11, minmax(0, 1fr));
  border-radius: var(--tps-radius-md, 8px); overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border, rgba(127,127,127,0.14));
}
.tps-panel .tps-cf-ramp-cell {
  border: 0; padding: 0; cursor: pointer; height: 30px; position: relative;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: var(--tps-fw-semibold, 600); font-variant-numeric: tabular-nums; letter-spacing: -0.02em;
  transition: box-shadow var(--tps-dur-fast, 80ms) var(--tps-ease-out, ease);
}
.tps-panel .tps-cf-ramp-cell:hover { z-index: 3; box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--tps-panel-bg, #fff) 60%, transparent); }
.tps-panel .tps-cf-ramp-cell:focus-visible,
.tps-panel .tps-cf-ramp-cell.is-sel {
  outline: none; z-index: 4;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff), inset 0 0 0 4px var(--tps-accent, currentColor);
}
/* Faint secondary ring on the inverted ("invert lightness") mirror shade \u2014
   present alongside the prominent ring on the actually-selected shade. */
.tps-panel .tps-cf-ramp-cell.is-sel-mirror {
  z-index: 3;
  box-shadow: inset 0 0 0 2px var(--tps-panel-bg, #fff),
              inset 0 0 0 3px color-mix(in srgb, var(--tps-accent, currentColor) 42%, transparent);
}

/* \u2500\u2500 Invert-lightness toggle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-invert {
  display: flex; align-items: center; gap: 8px; margin-top: var(--tps-space-3, 12px);
  cursor: pointer; font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-invert-cb { margin: 0; cursor: pointer; accent-color: var(--tps-accent, currentColor); }
.tps-panel .tps-cf-invert-hint { color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-weight: var(--tps-fw-regular, 400); }
/* Dimmed + non-interactive until a real, non-500 shade is picked (500 mirrors
   to itself, so inverting it is a no-op). */
.tps-panel .tps-cf-invert.is-disabled { opacity: 0.42; cursor: default; }
.tps-panel .tps-cf-invert.is-disabled .tps-cf-invert-cb { cursor: default; }

/* \u2500\u2500 Custom palette \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-custom-row { min-height: 30px; margin-bottom: var(--tps-space-3, 12px); }
.tps-panel .tps-cf-custom-empty {
  grid-column: 1 / -1; display: flex; align-items: center; padding: 0 10px; min-height: 30px;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-regular, 400); letter-spacing: 0;
  color: var(--tps-text-faint, rgba(127,127,127,0.55));
}
.tps-panel .tps-cf-custom-dot { cursor: grab; }
.tps-panel .tps-cf-custom-dot.is-dragging { opacity: 0.4; cursor: grabbing; }

.tps-panel .tps-cf-addrow { display: flex; align-items: center; gap: 8px; }
.tps-panel .tps-cf-remove {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text-muted, rgba(127,127,127,0.75));
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
}
.tps-panel .tps-cf-remove[hidden] { display: none; }
.tps-panel .tps-cf-remove:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-add {
  cursor: pointer; border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  background: var(--tps-bg-input, rgba(127,127,127,0.06)); color: var(--tps-text, inherit);
  border-radius: var(--tps-radius-md, 8px); height: 32px; padding: 0 14px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-semibold, 600);
}
.tps-panel .tps-cf-add:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); }
.tps-panel .tps-cf-custom-count {
  margin-left: auto; font-size: var(--tps-fs-section, 11px);
  color: var(--tps-text-faint, rgba(127,127,127,0.5)); font-variant-numeric: tabular-nums;
}

/* \u2500\u2500 Hex input \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-hexbox {
  display: inline-flex; align-items: center; gap: 8px; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 8px 0 10px;
}
.tps-panel .tps-cf-hex-dot {
  width: 15px; height: 15px; border-radius: var(--tps-radius-sm, 5px);
  box-shadow: inset 0 0 0 1px var(--tps-swatch-inset, rgba(127,127,127,0.22));
}
.tps-panel .tps-cf-hex-input {
  border: 0; background: transparent; outline: none;
  font-family: var(--tps-font-mono, ui-monospace, monospace);
  font-size: var(--tps-fs-hint, 12px); color: var(--tps-text, inherit); width: 84px;
  font-variant-numeric: tabular-nums;
}
.tps-panel .tps-cf-hex-input::placeholder { color: var(--tps-text-faint, rgba(127,127,127,0.5)); }

/* \u2500\u2500 Universal: No color \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.tps-panel .tps-cf-divider {
  height: 1px; margin: var(--tps-space-3, 12px) 0; background: var(--tps-divider, rgba(127,127,127,0.12));
}
.tps-panel .tps-cf-universal { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tps-panel .tps-cf-none {
  display: inline-flex; align-items: center; gap: 7px; cursor: pointer; box-sizing: border-box; height: 32px;
  background: var(--tps-bg-input, rgba(127,127,127,0.06));
  border: 1px solid var(--tps-border, rgba(127,127,127,0.14));
  border-radius: var(--tps-radius-md, 8px); padding: 0 12px; font: inherit;
  font-size: var(--tps-fs-hint, 12px); font-weight: var(--tps-fw-medium, 500);
  color: var(--tps-text-muted, rgba(127,127,127,0.7));
}
.tps-panel .tps-cf-none:hover { border-color: var(--tps-border-strong, rgba(127,127,127,0.28)); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none.is-sel { border-color: var(--tps-accent, currentColor); color: var(--tps-text, inherit); }
.tps-panel .tps-cf-none-sw {
  width: 15px; height: 15px; border-radius: 50%; position: relative; overflow: hidden;
  box-shadow: inset 0 0 0 1px var(--tps-border-strong, rgba(127,127,127,0.3));
}
.tps-panel .tps-cf-none-sw::after {
  content: ""; position: absolute; left: 50%; top: -3px; width: 1.5px; height: 21px;
  background: var(--tps-danger, #e2555f); transform: rotate(45deg);
}

/* \u2500\u2500 Instant tooltip (drawn by the component, not native title delay) \u2500\u2500\u2500 */
.tps-panel .tps-cf-tip {
  position: fixed; z-index: 2147483000; transform: translate(-50%, calc(-100% - 8px));
  padding: 3px 8px; border-radius: var(--tps-radius-sm, 5px);
  background: var(--tps-text, #1a1a1a); color: var(--tps-panel-bg, #fff);
  font-size: var(--tps-fs-section, 11px); font-weight: var(--tps-fw-medium, 500);
  line-height: 1.3; white-space: nowrap; pointer-events: none; opacity: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.35);
}
.tps-panel .tps-cf-tip.is-visible { opacity: 1; }

@media (prefers-reduced-motion: reduce) {
  .tps-panel .tps-cf-dot,
  .tps-panel .tps-cf-tab,
  .tps-panel .tps-cf-tile,
  .tps-panel .tps-cf-remove { transition: none; }
}
`;

  // ../../shared/settings-ui/feedback.js
  var MAX_URL_LENGTH = 7600;
  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    const dom = (
      /** @type {any} */
      node
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class") node.className = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            node.setAttribute(k, v);
          }
        } else node.setAttribute(k, v === true ? "" : String(v));
      }
    }
    for (const c of children.flat(Infinity)) {
      if (c == null || c === false) continue;
      node.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }
  __name(el, "el");
  function versionFromConf(conf) {
    if (!conf || typeof conf !== "object") return "";
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = conf.custom;
    if (custom && typeof custom === "object") {
      const v = (
        /** @type {Record<string, unknown>} */
        custom.pluginVersion
      );
      if (typeof v === "string") return v;
    }
    return "";
  }
  __name(versionFromConf, "versionFromConf");
  async function collectSystemReport({ pluginName = "", pluginVersion = "", disabled = false, data } = {}) {
    const ua = navigator.userAgent || "";
    const lines = [];
    lines.push(`Plugin: ${pluginName} v${pluginVersion}${disabled ? " (kill switch: OFF)" : ""}`);
    lines.push(`App: ${/electron/i.test(ua) ? "Thymer desktop app (Electron)" : "Thymer web"}${location && location.host ? ` \xB7 ${location.host}` : ""}`);
    lines.push(`UA: ${ua}`);
    lines.push(`Platform: ${navigator.platform || "?"} \xB7 lang ${navigator.language || "?"} \xB7 tz ${Intl.DateTimeFormat().resolvedOptions().timeZone || "?"}`);
    const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
    lines.push(`Screen (css px): ${screen.width}x${screen.height} @${dpr}x (\u2248${Math.round(screen.width * dpr)}x${Math.round(screen.height * dpr)} device px) \xB7 viewport ${window.innerWidth}x${window.innerHeight}`);
    try {
      const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const themeClasses = Array.from(document.body.classList).filter((c) => /theme/i.test(c)).join(" ");
      lines.push(`Appearance: ${dark ? "dark" : "light"}${reducedMotion ? " \xB7 reduced-motion" : ""}${themeClasses ? ` \xB7 body: ${themeClasses}` : ""}`);
    } catch {
    }
    try {
      const bits = [];
      if (navigator.hardwareConcurrency) bits.push(`${navigator.hardwareConcurrency} cores`);
      const devMem = (
        /** @type {any} */
        navigator.deviceMemory
      );
      if (devMem) bits.push(devMem >= 8 ? `RAM \u22658GB (API cap)` : `~${devMem}GB RAM`);
      const heap = (
        /** @type {any} */
        performance.memory
      );
      if (heap && heap.usedJSHeapSize) bits.push(`JS heap ${Math.round(heap.usedJSHeapSize / 1048576)}MB of ${Math.round(heap.jsHeapSizeLimit / 1048576)}MB limit`);
      bits.push(navigator.onLine === false ? "OFFLINE" : "online");
      if (typeof performance.now === "function") bits.push(`session up ${Math.round(performance.now() / 6e4)}m`);
      lines.push(`System: ${bits.join(" \xB7 ")}`);
    } catch {
    }
    try {
      if (navigator.storage && typeof navigator.storage.estimate === "function") {
        const est = await navigator.storage.estimate();
        if (est && est.usage != null) {
          lines.push(`Storage: ${Math.round((est.usage || 0) / 1048576)}MB used${est.quota ? ` of ${Math.round(est.quota / 1048576)}MB quota` : ""}`);
        }
      }
    } catch {
    }
    try {
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const plugins = await data.getAllGlobalPlugins();
        const listed = plugins.slice(0, 25).map((p) => {
          let name = "";
          let ver = "";
          try {
            name = p.getName?.() || "";
          } catch {
          }
          try {
            ver = versionFromConf(p.getConfiguration?.());
          } catch {
          }
          return ver ? `${name} v${ver}` : name;
        }).filter(Boolean);
        if (listed.length) {
          lines.push(`Global plugins, all installed (${plugins.length}): ${listed.join(", ")}${plugins.length > 25 ? ", \u2026" : ""}`);
        }
      }
      if (data && typeof /** @type {any} */
      data.getAllCollections === "function") {
        const collections = await /** @type {any} */
        data.getAllCollections();
        if (Array.isArray(collections)) lines.push(`Collection-level plugins: ${collections.length} (names withheld)`);
      }
    } catch {
    }
    return lines.join("\n");
  }
  __name(collectSystemReport, "collectSystemReport");
  function buildIssueUrl({ repository, description, discord, email, report }) {
    const repo = repository.replace(/\/+$/, "");
    const firstLine = description.split("\n")[0].trim();
    const title = `[bug] ${firstLine.length > 60 ? `${firstLine.slice(0, 57)}...` : firstLine}`;
    const bodyFor = /* @__PURE__ */ __name((desc2) => {
      const parts = [`**Describe the bug**

${desc2}`];
      if (discord || email) {
        const contact = [];
        if (discord) contact.push(`- Discord: ${discord}`);
        if (email) contact.push(`- Email: ${email}`);
        parts.push(`**Contact**

${contact.join("\n")}`);
      }
      parts.push(`**System report**

\`\`\`
${report}
\`\`\``);
      parts.push("_Screenshots: paste or drag images directly into this text box._");
      return parts.join("\n\n");
    }, "bodyFor");
    const urlFor = /* @__PURE__ */ __name((desc2) => `${repo}/issues/new?${new URLSearchParams({ title, body: bodyFor(desc2) })}`, "urlFor");
    let desc = description;
    let url = urlFor(desc);
    while (url.length > MAX_URL_LENGTH && desc.length > 200) {
      desc = `${desc.slice(0, Math.max(200, desc.length - 500)).trimEnd()}

[description truncated \u2014 URL length limit]`;
      url = urlFor(desc);
    }
    return url;
  }
  __name(buildIssueUrl, "buildIssueUrl");
  function openFeedbackDialog({ host, opener, pluginName = "", pluginVersion = "", repository = "", disabled = false, data } = {}) {
    const panelHost = host || /** @type {HTMLElement | null} */
    (opener ? opener.closest(".tps-panel") : null);
    if (!panelHost || !repository) return;
    if (panelHost.querySelector(".tps-feedback-overlay")) return;
    const repoLabel = repository.replace(/^https?:\/\/(www\.)?github\.com\//i, "").replace(/\/+$/, "");
    const reportPromise = collectSystemReport({ pluginName, pluginVersion, disabled, data });
    const discordInput = el("input", { class: "tps-feedback-input", type: "text", placeholder: "e.g. akaready", autocomplete: "off", spellcheck: "false" });
    const emailInput = el("input", { class: "tps-feedback-input", type: "email", placeholder: "e.g. you@example.com", autocomplete: "off", spellcheck: "false" });
    const descInput = el("textarea", { class: "tps-feedback-textarea", rows: "5", placeholder: "What happened? What did you expect instead?" });
    const reportPre = el("pre", { class: "tps-feedback-report" }, "Collecting\u2026");
    reportPromise.then((text) => {
      reportPre.textContent = text;
    }).catch(() => {
      reportPre.textContent = "Report unavailable.";
    });
    const fieldRow = /* @__PURE__ */ __name((label, field, extraClass) => el(
      "label",
      { class: `tps-feedback-field${extraClass ? ` ${extraClass}` : ""}` },
      el("span", { class: "tps-feedback-label" }, label),
      field
    ), "fieldRow");
    const prevOverflow = panelHost.style.overflow;
    const close = /* @__PURE__ */ __name(() => {
      overlay.remove();
      panelHost.style.overflow = prevOverflow;
      try {
        opener?.focus();
      } catch {
      }
    }, "close");
    const submit = /* @__PURE__ */ __name(async () => {
      const description = descInput.value.trim();
      if (!description) {
        descInput.setAttribute("aria-invalid", "true");
        descInput.focus();
        return;
      }
      let report = "";
      try {
        report = await reportPromise;
      } catch {
      }
      const url = buildIssueUrl({
        repository,
        description,
        discord: discordInput.value.trim(),
        email: emailInput.value.trim(),
        report
      });
      window.open(url, "_blank", "noopener");
      close();
    }, "submit");
    const card = el(
      "div",
      { class: "tps-feedback-card", role: "dialog", "aria-modal": "true", "aria-label": `Report a bug in ${pluginName}` },
      el(
        "div",
        { class: "tps-feedback-head" },
        el("h2", { class: "tps-feedback-title" }, "Report a bug"),
        el(
          "button",
          { type: "button", class: "tps-feedback-close", "aria-label": "Close", onClick: close },
          el("i", { class: "ti ti-x", "aria-hidden": "true" })
        )
      ),
      el(
        "p",
        { class: "tps-feedback-hint" },
        `Opens a prefilled GitHub issue on ${repoLabel}.`,
        el("br"),
        "Please paste screenshots into the GitHub form after it opens."
      ),
      fieldRow("Discord username (optional)", discordInput),
      fieldRow("Email (optional)", emailInput),
      fieldRow("What happened?", descInput, "tps-feedback-field--grow"),
      el(
        "details",
        { class: "tps-feedback-details" },
        el("summary", { class: "tps-feedback-summary" }, "System report (included with the issue)"),
        reportPre
      ),
      el(
        "div",
        { class: "tps-feedback-actions" },
        el("button", { type: "button", class: "tps-button tps-button--ghost", onClick: close }, "Cancel"),
        el("button", { type: "button", class: "tps-button tps-button--primary", onClick: submit }, "Open GitHub issue")
      )
    );
    const overlay = el("div", { class: "tps-feedback-overlay" }, card);
    overlay.addEventListener("mousedown", (e) => {
      if (e.target === overlay) close();
    });
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    });
    descInput.addEventListener("input", () => descInput.removeAttribute("aria-invalid"));
    panelHost.style.overflow = "hidden";
    overlay.style.top = `${panelHost.scrollTop}px`;
    overlay.style.height = `${panelHost.clientHeight}px`;
    panelHost.appendChild(overlay);
    descInput.focus();
  }
  __name(openFeedbackDialog, "openFeedbackDialog");

  // ../../shared/settings-ui/helpers.js
  var PANEL_CSS = tokens_default + "\n" + components_default + "\n" + color_field_default;
  function h(tag, props, ...children) {
    const el2 = document.createElement(tag);
    const dom = (
      /** @type {any} */
      el2
    );
    if (props) {
      for (const k in props) {
        const v = props[k];
        if (v == null || v === false) continue;
        if (k === "class" || k === "className") {
          el2.className = v;
        } else if (k === "style" && typeof v === "object") {
          Object.assign(el2.style, v);
        } else if (k === "dataset" && typeof v === "object") {
          for (const dk in v) el2.dataset[dk] = v[dk];
        } else if (k.startsWith("on") && typeof v === "function") {
          el2.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k in dom && typeof dom[k] !== "function") {
          try {
            dom[k] = v;
          } catch {
            el2.setAttribute(k, v);
          }
        } else {
          el2.setAttribute(k, v === true ? "" : String(v));
        }
      }
    }
    appendChildren(el2, children);
    return el2;
  }
  __name(h, "h");
  function appendChildren(parent, children) {
    for (const c of children) {
      if (c == null || c === false) continue;
      if (Array.isArray(c)) {
        appendChildren(parent, c);
        continue;
      }
      parent.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
  }
  __name(appendChildren, "appendChildren");
  function pluginHeader({
    title: heading,
    lede: ledeText,
    helper,
    helperOpen,
    helperDefaultOpen = false,
    onHelperToggle,
    icon = "",
    version = "1.0",
    author = "@akaready",
    homepage = "https://akaready.com",
    repository = "https://github.com/akaready",
    coffee = "https://buymeacoffee.com/akaready",
    killSwitch = null,
    feedback = null
  }) {
    const iconClass = icon ? icon.startsWith("ti-") ? icon : `ti-${icon}` : "";
    const helperLines = normalizeHelperLines(helper);
    const fb = feedback ? {
      pluginName: (feedback === true ? "" : feedback.pluginName) || heading,
      pluginVersion: (feedback === true ? "" : feedback.pluginVersion) || version,
      repository: (feedback === true ? "" : feedback.repository) || repository,
      disabled: (feedback === true ? void 0 : feedback.disabled) ?? (killSwitch ? !killSwitch.on : false),
      data: feedback === true ? void 0 : feedback.data
    } : null;
    const children = [
      iconClass ? h(
        "div",
        { class: "tps-plugin-header-logo", "aria-hidden": "true" },
        h("i", { class: `ti ${iconClass} tps-plugin-header-logo-icon`, "aria-hidden": "true" })
      ) : null,
      h("h1", { class: "tps-plugin-header-title" }, heading),
      ledeText ? h("p", { class: "tps-plugin-header-lede" }, ledeText) : null,
      helperLines.length ? renderPluginHeaderHelper({
        lines: helperLines,
        defaultOpen: helperDefaultOpen,
        open: helperOpen,
        onToggle: onHelperToggle
      }) : null,
      h(
        "p",
        { class: "tps-plugin-header-attr" },
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-link tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--blue",
            href: homepage,
            target: "_blank",
            rel: "noopener noreferrer"
          }, author)
        ),
        h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("i", { class: "ti ti-coffee tps-plugin-header-icon", "aria-hidden": "true" }),
          h("a", {
            class: "tps-plugin-header-link tps-plugin-header-link--pink",
            href: coffee,
            target: "_blank",
            rel: "noopener noreferrer"
          }, "buy me a coffee")
        ),
        version ? h(
          "span",
          { class: "tps-plugin-header-link-group" },
          h("span", { class: "tps-plugin-header-icon tps-plugin-header-iconify tps-plugin-header-iconify-github", "aria-hidden": "true" }),
          h("a", { class: "tps-plugin-header-link tps-plugin-header-link--muted tps-plugin-header-version", href: repository, target: "_blank", rel: "noopener noreferrer" }, `v${version}`)
        ) : null,
        fb || killSwitch ? h(
          "span",
          { class: "tps-plugin-header-controls" },
          fb ? renderFeedbackButton(fb) : null,
          killSwitch ? renderKillSwitch(killSwitch) : null
        ) : null
      ),
      // Always rendered with a kill switch; CSS shows it only while the pill is
      // off, so it appears instantly on the optimistic flip with no re-render.
      killSwitch ? h(
        "p",
        { class: "tps-plugin-header-off-note" },
        "Plugin is off \u2014 settings stay editable and your changes apply when you switch it back on."
      ) : null
    ];
    return h("div", { class: "tps-plugin-header" }, ...children);
  }
  __name(pluginHeader, "pluginHeader");
  function renderFeedbackButton(fb) {
    return h("button", {
      type: "button",
      class: "tps-plugin-header-bug",
      title: "Report a bug",
      "aria-label": "Report a bug",
      onClick: /* @__PURE__ */ __name((e) => {
        const btn = (
          /** @type {HTMLElement} */
          e.currentTarget
        );
        openFeedbackDialog({
          host: (
            /** @type {HTMLElement | null} */
            btn.closest(".tps-panel")
          ),
          opener: btn,
          ...fb
        });
      }, "onClick")
    }, h("i", { class: "ti ti-bug", "aria-hidden": "true" }));
  }
  __name(renderFeedbackButton, "renderFeedbackButton");
  function renderKillSwitch(killSwitch) {
    const sw = h("button", {
      type: "button",
      class: "tps-switch",
      role: "switch",
      "aria-checked": String(!!killSwitch.on),
      "aria-label": killSwitch.label || "Plugin enabled",
      title: killSwitch.on ? "Plugin enabled \u2014 click to disable all of its effects" : "Plugin disabled \u2014 click to re-enable"
    }, h("span", { class: "tps-switch-knob" }));
    const unlock = /* @__PURE__ */ __name(() => {
      sw.removeAttribute("data-busy");
      sw.disabled = false;
    }, "unlock");
    sw.addEventListener("click", () => {
      if (sw.disabled) return;
      const nextOn = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(nextOn));
      sw.setAttribute("data-busy", "");
      sw.disabled = true;
      setTimeout(unlock, 700);
      try {
        killSwitch.onToggle(nextOn);
      } catch {
        unlock();
        sw.setAttribute("aria-checked", String(!nextOn));
      }
    });
    return sw;
  }
  __name(renderKillSwitch, "renderKillSwitch");
  function normalizeHelperLines(helper) {
    if (!helper) return [];
    if (typeof helper === "string") {
      const text = helper.trim();
      return text ? [text] : [];
    }
    if (Array.isArray(helper)) {
      return helper.map((line) => String(line).trim()).filter(Boolean);
    }
    return [];
  }
  __name(normalizeHelperLines, "normalizeHelperLines");
  function renderPluginHeaderHelper({ lines, defaultOpen = false, open, onToggle }) {
    const initialOpen = open == null ? !!defaultOpen : !!open;
    const wrap = h("div", {
      class: "tps-plugin-header-helper-wrap",
      dataset: { open: String(initialOpen) }
    });
    const icon = h("i", { class: "ti ti-info-circle tps-plugin-header-helper-icon", "aria-hidden": "true" });
    const toggle = h("button", {
      type: "button",
      class: "tps-plugin-header-helper-toggle",
      "aria-expanded": String(initialOpen)
    }, icon, h("span", { class: "tps-plugin-header-helper-toggle-label" }, "Instructions"));
    const body = h(
      "div",
      { class: "tps-plugin-header-helper-body" },
      h("p", { class: "tps-plugin-header-helper-line" }, lines.join(" "))
    );
    const setOpen = /* @__PURE__ */ __name((nextOpen) => {
      wrap.dataset.open = String(nextOpen);
      toggle.setAttribute("aria-expanded", String(nextOpen));
      if (onToggle) onToggle(nextOpen);
    }, "setOpen");
    toggle.addEventListener("click", () => {
      setOpen(wrap.dataset.open !== "true");
    });
    body.addEventListener("click", () => {
      if (wrap.dataset.open === "true") setOpen(false);
    });
    wrap.appendChild(toggle);
    wrap.appendChild(body);
    return wrap;
  }
  __name(renderPluginHeaderHelper, "renderPluginHeaderHelper");
  function pluginHeaderFromConfig(conf, { version, helper, helperOpen, helperDefaultOpen, onHelperToggle, killSwitch, feedback } = {}) {
    const resolvedHelper = helper ?? conf.instructions;
    return pluginHeader({
      title: conf.name || "",
      lede: conf.description,
      helper: resolvedHelper,
      helperOpen,
      helperDefaultOpen,
      onHelperToggle,
      icon: conf.icon,
      version: version ?? conf.version,
      author: conf.author,
      homepage: conf.homepage,
      repository: conf.repository,
      coffee: conf.coffee,
      killSwitch,
      feedback
    });
  }
  __name(pluginHeaderFromConfig, "pluginHeaderFromConfig");

  // ../../shared/plugin-version.js
  function readPluginVersion(conf, fallback = "0.0.1") {
    if (!conf || typeof conf !== "object") return fallback;
    if (typeof conf.version === "string" && conf.version) return conf.version;
    const custom = (
      /** @type {Record<string, unknown> | undefined} */
      conf.custom
    );
    if (custom && typeof custom === "object" && typeof custom.pluginVersion === "string" && custom.pluginVersion) {
      return custom.pluginVersion;
    }
    return fallback;
  }
  __name(readPluginVersion, "readPluginVersion");
  function configWithPluginVersion(conf, customPatch, pluginVersion) {
    const base = conf && typeof conf === "object" ? conf : {};
    const custom = base.custom && typeof base.custom === "object" ? base.custom : {};
    return {
      ...base,
      version: pluginVersion,
      custom: {
        ...custom,
        ...customPatch,
        pluginVersion
      }
    };
  }
  __name(configWithPluginVersion, "configWithPluginVersion");
  async function resolveConfigApi(plugin) {
    if (!plugin) return null;
    if (typeof plugin.saveConfiguration === "function") return plugin;
    try {
      const guid = typeof plugin.getGuid === "function" ? plugin.getGuid() : null;
      const data = plugin.data;
      if (guid && data && typeof data.getPluginByGuid === "function") {
        const byGuid = data.getPluginByGuid(guid);
        if (byGuid && typeof byGuid.saveConfiguration === "function") return byGuid;
      }
      if (data && typeof data.getAllGlobalPlugins === "function") {
        const all = await data.getAllGlobalPlugins();
        const name = plugin.getConfiguration?.()?.name;
        const found = all.find((p) => p && typeof p.getGuid === "function" && p.getGuid() === guid) || (name ? all.find((p) => p && typeof p.getName === "function" && p.getName() === name) : null);
        if (found && typeof found.saveConfiguration === "function") return found;
      }
    } catch {
    }
    return null;
  }
  __name(resolveConfigApi, "resolveConfigApi");
  async function syncPluginVersionOnLoad(plugin, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    const custom = conf.custom && typeof conf.custom === "object" ? { .../** @type {Record<string, unknown>} */
    conf.custom, ...customPatch } : { ...customPatch };
    if (readPluginVersion(conf, "") === pluginVersion) return;
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, custom, pluginVersion));
    } catch {
    }
  }
  __name(syncPluginVersionOnLoad, "syncPluginVersionOnLoad");

  // ../../shared/plugin-kill-switch.js
  var MARKER_SYNC_HORIZON_MS = 9e4;
  function isPluginDisabled(conf) {
    if (!conf || typeof conf !== "object") return false;
    const custom = conf.custom;
    return !!(custom && typeof custom === "object" && /** @type {Record<string, unknown>} */
    custom.pluginDisabled === true);
  }
  __name(isPluginDisabled, "isPluginDisabled");
  function markerKey(plugin) {
    let ws = "default";
    try {
      ws = plugin.getWorkspaceGuid?.() || "default";
    } catch {
    }
    let name = "plugin";
    try {
      name = plugin.getConfiguration?.()?.name || "plugin";
    } catch {
    }
    return `tps-kill-switch/${ws}/${name}`;
  }
  __name(markerKey, "markerKey");
  function writeKillSwitchMarker(plugin, disabled) {
    try {
      localStorage.setItem(markerKey(plugin), JSON.stringify({ disabled, ts: Date.now() }));
    } catch {
    }
  }
  __name(writeKillSwitchMarker, "writeKillSwitchMarker");
  function clearKillSwitchMarker(plugin) {
    try {
      localStorage.removeItem(markerKey(plugin));
    } catch {
    }
  }
  __name(clearKillSwitchMarker, "clearKillSwitchMarker");
  function readKillSwitch(plugin) {
    let conf = {};
    try {
      conf = plugin.getConfiguration?.() || {};
    } catch {
    }
    const confDisabled = isPluginDisabled(conf);
    try {
      const raw = localStorage.getItem(markerKey(plugin));
      if (raw) {
        const marker = JSON.parse(raw);
        if (marker && typeof marker.disabled === "boolean") {
          if (marker.disabled === confDisabled) {
            clearKillSwitchMarker(plugin);
            return confDisabled;
          }
          if (Date.now() - (Number(marker.ts) || 0) < MARKER_SYNC_HORIZON_MS) {
            return marker.disabled;
          }
          clearKillSwitchMarker(plugin);
        }
      }
    } catch {
    }
    return confDisabled;
  }
  __name(readKillSwitch, "readKillSwitch");
  async function setPluginDisabled(plugin, disabled, pluginVersion, customPatch = {}) {
    const api = await resolveConfigApi(plugin);
    if (!api) return;
    let conf = {};
    try {
      conf = api.getConfiguration?.() || plugin.getConfiguration?.() || {};
    } catch {
      return;
    }
    if (typeof conf.name !== "string" || !conf.name.trim()) return;
    if (readKillSwitch(plugin) === disabled && isPluginDisabled(conf) === disabled) return;
    writeKillSwitchMarker(plugin, disabled);
    try {
      await api.saveConfiguration(configWithPluginVersion(conf, { ...customPatch, pluginDisabled: disabled }, pluginVersion));
    } catch {
      clearKillSwitchMarker(plugin);
    }
  }
  __name(setPluginDisabled, "setPluginDisabled");

  // ../../shared/settings-ui/tailwind-palette.js
  var TW_SHADES = Object.freeze([50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]);
  var TAILWIND = Object.freeze({
    slate: ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a", "#020617"],
    gray: ["#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af", "#6b7280", "#4b5563", "#374151", "#1f2937", "#111827", "#030712"],
    zinc: ["#fafafa", "#f4f4f5", "#e4e4e7", "#d4d4d8", "#a1a1aa", "#71717a", "#52525b", "#3f3f46", "#27272a", "#18181b", "#09090b"],
    neutral: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373", "#525252", "#404040", "#262626", "#171717", "#0a0a0a"],
    stone: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c", "#57534e", "#44403c", "#292524", "#1c1917", "#0c0a09"],
    red: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c", "#991b1b", "#7f1d1d", "#450a0a"],
    orange: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316", "#ea580c", "#c2410c", "#9a3412", "#7c2d12", "#431407"],
    amber: ["#fffbeb", "#fef3c7", "#fde68a", "#fcd34d", "#fbbf24", "#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#451a03"],
    yellow: ["#fefce8", "#fef9c3", "#fef08a", "#fde047", "#facc15", "#eab308", "#ca8a04", "#a16207", "#854d0e", "#713f12", "#422006"],
    lime: ["#f7fee7", "#ecfccb", "#d9f99d", "#bef264", "#a3e635", "#84cc16", "#65a30d", "#4d7c0f", "#3f6212", "#365314", "#1a2e05"],
    green: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#4ade80", "#22c55e", "#16a34a", "#15803d", "#166534", "#14532d", "#052e16"],
    emerald: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669", "#047857", "#065f46", "#064e3b", "#022c22"],
    teal: ["#f0fdfa", "#ccfbf1", "#99f6e4", "#5eead4", "#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#115e59", "#134e4a", "#042f2e"],
    cyan: ["#ecfeff", "#cffafe", "#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4", "#0891b2", "#0e7490", "#155e75", "#164e63", "#083344"],
    sky: ["#f0f9ff", "#e0f2fe", "#bae6fd", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7", "#0369a1", "#075985", "#0c4a6e", "#082f49"],
    blue: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af", "#1e3a8a", "#172554"],
    indigo: ["#eef2ff", "#e0e7ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#4338ca", "#3730a3", "#312e81", "#1e1b4b"],
    violet: ["#f5f3ff", "#ede9fe", "#ddd6fe", "#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9", "#5b21b6", "#4c1d95", "#2e1065"],
    purple: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7", "#9333ea", "#7e22ce", "#6b21a8", "#581c87", "#3b0764"],
    fuchsia: ["#fdf4ff", "#fae8ff", "#f5d0fe", "#f0abfc", "#e879f9", "#d946ef", "#c026d3", "#a21caf", "#86198f", "#701a75", "#4a044e"],
    pink: ["#fdf2f8", "#fce7f3", "#fbcfe8", "#f9a8d4", "#f472b6", "#ec4899", "#db2777", "#be185d", "#9d174d", "#831843", "#500724"],
    rose: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e", "#e11d48", "#be123c", "#9f1239", "#881337", "#4c0519"]
  });
  var TW_FAMILIES = Object.freeze(Object.keys(TAILWIND));
  function isHex(s) {
    return typeof s === "string" && /^#[0-9a-f]{6}$/i.test(s);
  }
  __name(isHex, "isHex");
  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  __name(hexToRgb, "hexToRgb");
  function nearestTailwind(hex) {
    if (!isHex(hex)) return null;
    const [r, g, b] = hexToRgb(hex);
    let best = null;
    let bestD = Infinity;
    for (const family of TW_FAMILIES) {
      const shades = TAILWIND[family];
      for (let i = 0; i < shades.length; i += 1) {
        const [cr, cg, cb] = hexToRgb(shades[i]);
        const d = (r - cr) ** 2 + (g - cg) ** 2 + (b - cb) ** 2;
        if (d < bestD) {
          bestD = d;
          best = { family, shadeIdx: i, hex: shades[i] };
        }
      }
    }
    return best;
  }
  __name(nearestTailwind, "nearestTailwind");

  // plugin.js
  var TAILWIND_SHADES = Object.freeze([100, 200, 300, 400, 500, 600, 700, 800, 900]);
  function normalizeTailwindShade(v) {
    const n = Number(v);
    return TAILWIND_SHADES.includes(n) ? n : 500;
  }
  __name(normalizeTailwindShade, "normalizeTailwindShade");
  var PLUGIN_VERSION = "1.1.2";
  var COLLECTION_COLORS_REPO = "https://github.com/akaready/thymer-collection-colors";
  var MANIFEST = Object.freeze({
    name: "Collection Icons",
    description: "Replace Thymer's inline-link arrow with each collection's or page's icon.",
    instructions: "Icons are added to inline editor links automatically by replacing Thymer's trailing arrow in-place. Choose arrow behavior, visual treatment, and how Collection Colors tints should apply.",
    icon: "link",
    author: "@akaready",
    homepage: "https://akaready.com",
    repository: "https://github.com/akaready/thymer-collection-icons",
    coffee: "https://buymeacoffee.com/akaready"
  });
  var ROOT_CLASS = "plg-collection-icons";
  var STYLE_ID = "plg-collection-icons-style";
  var ICON_RULES_STYLE_ID = "plg-collection-icons-icon-rules";
  var COLOR_RULES_STYLE_ID = "plg-collection-icons-color-rules";
  var CLEANUP_TIMER_KEY = "__plgCollectionIconsCleanupTimer";
  var PANEL_TYPE = "settings";
  var APPLIED_ATTR = "data-collection-icons-applied";
  var ICON_ATTR = "data-ci-icon-class";
  var GUID_ATTR = "data-ci-guid";
  var COLORED_ATTR = "data-ci-colored";
  var COLOR_VAR = "--plg-ci-color";
  var COLORS_CHANGED_EVENT = "collection-colors:changed";
  var NEUTRAL_COLOR = "var(--text-muted, #8b8b8b)";
  var VISUAL_TREATMENTS = (
    /** @type {const} */
    [
      { val: "native", label: "Native", tip: "Keep Thymer link styling; only selected colors are changed." },
      { val: "chip", label: "Background chip", tip: "Paint a collection-colored chip behind the link text." }
    ]
  );
  var LINK_COLOR_APPLY_TO = (
    /** @type {const} */
    [
      { val: "off", label: "Off", tip: "No tint." },
      { val: "icon", label: "Icon only", tip: "Tint icons." },
      { val: "icon+text", label: "Icon + text", tip: "Tint icons and text." }
    ]
  );
  var VAR_NONE = Object.freeze({ hueShift: 0, satDelta: 0, lightDelta: 0, mode: (
    /** @type {'none'} */
    "none"
  ), tailwindShade: 500, alpha: 100 });
  var VAR_TW_900 = Object.freeze({ hueShift: 0, satDelta: 0, lightDelta: 0, mode: (
    /** @type {'tailwind'} */
    "tailwind"
  ), tailwindShade: 900, alpha: 100 });
  var SPACING_MIN_PX = -24;
  var SPACING_MAX_PX = 24;
  var OFFSET_MIN_PX = -24;
  var OFFSET_MAX_PX = 24;
  var MIX_MIN = 0;
  var MIX_MAX = 80;
  var HUE_MIN = -180;
  var HUE_MAX = 180;
  var SL_MIN = -100;
  var SL_MAX = 100;
  var DEFAULT_SETTINGS = Object.freeze({
    settingsVersion: 3,
    hideTrailingAffordance: false,
    replaceTrailingArrowIcon: true,
    showTrailingArrow: true,
    hideOpenInOtherPanelHover: true,
    visualTreatment: "chip",
    linkColorApplyTo: "icon+text",
    chipPadTPx: 2,
    chipPadRPx: 2,
    chipPadBPx: 2,
    chipPadLPx: 4,
    chipOffsetXPx: 0,
    chipOffsetYPx: 0,
    iconOffsetYPx: -1,
    chipIconRadiusPx: 4,
    chipBgMixPct: 15,
    hoverBrightnessPct: 130,
    chipOutlineWidthPx: 1,
    iconVariation: { ...VAR_NONE },
    textVariation: { ...VAR_NONE },
    outlineVariation: { ...VAR_TW_900 },
    debug: false
  });
  function parseVariation(v) {
    const def = DEFAULT_SETTINGS.iconVariation;
    if (!v || typeof v !== "object") return { ...def };
    const clamp = /* @__PURE__ */ __name((x, lo, hi, d) => {
      const n = typeof x === "number" && Number.isFinite(x) ? Math.round(x) : d;
      return Math.max(lo, Math.min(hi, n));
    }, "clamp");
    return {
      hueShift: clamp(v.hueShift, -180, 180, def.hueShift),
      satDelta: clamp(v.satDelta, -100, 100, def.satDelta),
      lightDelta: clamp(v.lightDelta, -100, 100, def.lightDelta),
      mode: v.mode === "tailwind" || v.mode === "hsl" || v.mode === "none" ? v.mode : def.mode,
      tailwindShade: normalizeTailwindShade(v.tailwindShade),
      alpha: clamp(v.alpha, 0, 100, def.alpha ?? 100)
    };
  }
  __name(parseVariation, "parseVariation");
  function applyTailwindPrimitive(hex, shade) {
    const near = nearestTailwind(hex);
    if (!near) return hex;
    const idx = TW_SHADES.indexOf(normalizeTailwindShade(shade));
    if (idx < 0) return hex;
    return TAILWIND[near.family][idx] || hex;
  }
  __name(applyTailwindPrimitive, "applyTailwindPrimitive");
  function withAlpha(color, alpha) {
    const a = typeof alpha === "number" && Number.isFinite(alpha) ? Math.max(0, Math.min(100, alpha)) : 100;
    if (a >= 100) return color;
    return `color-mix(in srgb, ${color} ${a}%, transparent)`;
  }
  __name(withAlpha, "withAlpha");
  function applyVariation(color, v) {
    if (!v || v.mode === "none" || !isHex(color)) return color;
    const base = v.mode === "tailwind" ? applyTailwindPrimitive(color, v.tailwindShade ?? 500) : hslShifted(color, v);
    return withAlpha(base, v.alpha);
  }
  __name(applyVariation, "applyVariation");
  function isVisualTreatment(v) {
    return v === "native" || v === "chip";
  }
  __name(isVisualTreatment, "isVisualTreatment");
  function isLinkColorApplyTo(v) {
    return v === "off" || v === "icon" || v === "icon+text";
  }
  __name(isLinkColorApplyTo, "isLinkColorApplyTo");
  function halfStep(n) {
    return Math.round(n * 2) / 2;
  }
  __name(halfStep, "halfStep");
  function clampSpacing(v) {
    const n = typeof v === "number" && Number.isFinite(v) ? halfStep(v) : 0;
    return Math.max(SPACING_MIN_PX, Math.min(SPACING_MAX_PX, n));
  }
  __name(clampSpacing, "clampSpacing");
  function clampOffset(v) {
    const n = typeof v === "number" && Number.isFinite(v) ? halfStep(v) : 0;
    return Math.max(OFFSET_MIN_PX, Math.min(OFFSET_MAX_PX, n));
  }
  __name(clampOffset, "clampOffset");
  function clampMix(v, fallback) {
    const n = typeof v === "number" && Number.isFinite(v) ? Math.round(v) : fallback;
    return Math.max(MIX_MIN, Math.min(MIX_MAX, n));
  }
  __name(clampMix, "clampMix");
  function hexToHsl(hex) {
    if (typeof hex !== "string") return null;
    let m = hex.trim().replace(/^#/, "");
    if (m.length === 3) m = m.split("").map((c) => c + c).join("");
    if (!/^[0-9a-fA-F]{6}$/.test(m)) return null;
    const r = parseInt(m.slice(0, 2), 16) / 255;
    const g = parseInt(m.slice(2, 4), 16) / 255;
    const b = parseInt(m.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h2 = 0, s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h2 = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h2 = (b - r) / d + 2;
      else h2 = (r - g) / d + 4;
      h2 *= 60;
    }
    return { h: h2, s: s * 100, l: l * 100 };
  }
  __name(hexToHsl, "hexToHsl");
  function hslShifted(color, v) {
    if (!v || !v.hueShift && !v.satDelta && !v.lightDelta) return color;
    const hsl = hexToHsl(color);
    if (!hsl) return color;
    const h2 = ((hsl.h + (v.hueShift || 0)) % 360 + 360) % 360;
    const s = Math.max(0, Math.min(100, hsl.s + (v.satDelta || 0)));
    const l = Math.max(0, Math.min(100, hsl.l + (v.lightDelta || 0)));
    return `hsl(${h2.toFixed(1)}, ${s.toFixed(1)}%, ${l.toFixed(1)}%)`;
  }
  __name(hslShifted, "hslShifted");
  function normalizeTablerIcon(icon) {
    if (typeof icon !== "string") return null;
    const raw = icon.trim();
    if (!raw) return null;
    const className = raw.split(/\s+/).find((part) => part.startsWith("ti-")) || raw.replace(/^ti\s+/, "");
    if (!className) return null;
    return className.startsWith("ti-") ? className : `ti-${className}`;
  }
  __name(normalizeTablerIcon, "normalizeTablerIcon");
  var TELEMETRY_ENDPOINT = "https://thymer-plugins.goatcounter.com/count";
  var TELEMETRY_SCRIPT_SRC = "https://gc.zgo.at/count.js";
  var _telemetryScriptPromise = null;
  function _loadGoatCounter() {
    if (_telemetryScriptPromise) return _telemetryScriptPromise;
    _telemetryScriptPromise = new Promise((resolve) => {
      window.goatcounter = window.goatcounter || {};
      window.goatcounter.no_onload = true;
      window.goatcounter.allow_local = false;
      if (typeof window.goatcounter.count === "function") {
        resolve();
        return;
      }
      const s = document.createElement("script");
      s.async = true;
      s.src = TELEMETRY_SCRIPT_SRC;
      s.setAttribute("data-goatcounter", TELEMETRY_ENDPOINT);
      s.setAttribute("data-goatcounter-settings", '{"no_onload": true}');
      s.onload = () => resolve();
      s.onerror = () => resolve();
      document.head.appendChild(s);
    });
    return _telemetryScriptPromise;
  }
  __name(_loadGoatCounter, "_loadGoatCounter");
  function _fireTelemetry(path) {
    _loadGoatCounter().then(() => {
      try {
        window.goatcounter?.count?.({ path, title: "", event: false });
      } catch (_) {
      }
    });
  }
  __name(_fireTelemetry, "_fireTelemetry");
  function _telemetryBlocked() {
    try {
      if (navigator.doNotTrack === "1") return true;
      if (localStorage.getItem("tps-telemetry-opt-out") === "1") return true;
    } catch (_) {
      return true;
    }
    return false;
  }
  __name(_telemetryBlocked, "_telemetryBlocked");
  function pingInstall(slug) {
    try {
      if (_telemetryBlocked()) return;
      const key = "tps-tcm-" + slug;
      if (localStorage.getItem(key) === "1") return;
      localStorage.setItem(key, "1");
      _fireTelemetry("thymer-" + slug);
    } catch (_) {
    }
  }
  __name(pingInstall, "pingInstall");
  function pingActive(slug) {
    try {
      if (_telemetryBlocked()) return;
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const key = "tps-act-" + slug;
      if (localStorage.getItem(key) === today) return;
      localStorage.setItem(key, today);
      _fireTelemetry("thymer-" + slug + "/active");
    } catch (_) {
    }
  }
  __name(pingActive, "pingActive");
  var Plugin = class extends AppPlugin {
    static {
      __name(this, "Plugin");
    }
    /** @type {Settings} */
    _settings = { ...DEFAULT_SETTINGS };
    /** @type {string[]} */
    _handlerIds = [];
    /** @type {Map<string, PluginCollectionAPI>} */
    _collectionsByGuid = /* @__PURE__ */ new Map();
    /** @type {Map<string, string>} */
    _recordToCollGuid = /* @__PURE__ */ new Map();
    /** @type {Record<string, string>} */
    _colorsByGuid = {};
    /** Serialized _colorsByGuid — lets an unchanged color map skip the rebuild + decorate pass. */
    /** @type {string | null} */
    _colorsSerialized = null;
    /** Last raw localStorage string for the colors cache, for a cheap same-tab change check. */
    /** @type {string | null} */
    _colorsRaw = null;
    /** @type {ReturnType<typeof setInterval> | null} */
    _colorsPoll = null;
    /** @type {(() => void) | null} */
    _colorsChangedListener = null;
    /** @type {MutationObserver | null} */
    _editorObserver = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _decorateTimer = null;
    /** @type {number | null} */
    _decorateRaf = null;
    /** @type {ParentNode | null} */
    _pendingDecorateRoot = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _attachRetryTimer = null;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _staleCleanupTimer = null;
    /** @type {HTMLElement | null} */
    _observedRoot = null;
    /** @type {HTMLElement | null} */
    _panelEl = null;
    _headerHelperOpen = false;
    _storageListener = (
      /** @type {(e: StorageEvent) => void} */
      /* @__PURE__ */ __name((() => {
      }), "_storageListener")
    );
    /** @type {ReturnType<typeof setTimeout> | null} */
    _configSaveTimer = null;
    _configSaveInFlight = false;
    _configSaveQueued = false;
    _configSaveDirty = false;
    _isUnloading = false;
    /** @type {ReturnType<typeof setTimeout> | null} */
    _colorRulesTimer = null;
    /** @type {Set<string>} */
    _colorRuleGuids = /* @__PURE__ */ new Set();
    _lastThemeBgRefresh = 0;
    /** @type {MutationObserver | null} */
    _appearanceObserver = null;
    /** @type {number | null} */
    _appearanceRaf = null;
    _lastDark = false;
    /** @type {() => void} */
    _pageLifecycleListener = /* @__PURE__ */ __name(() => {
    }, "_pageLifecycleListener");
    /** @type {() => void} */
    _visibilityListener = /* @__PURE__ */ __name(() => {
    }, "_visibilityListener");
    /** @type {(e: MouseEvent) => void} */
    _navClickListener = /* @__PURE__ */ __name(() => {
    }, "_navClickListener");
    /** GUID → icon class, persisted so icons render at first paint next session. */
    /** @type {Record<string, string>} */
    _iconsByGuid = {};
    /** @type {Set<string>} */
    _guidIconRuleAdded = /* @__PURE__ */ new Set();
    /** @type {Map<string, string>} */
    _iconCodepoints = /* @__PURE__ */ new Map();
    /** @type {ReturnType<typeof setTimeout> | null} */
    _iconMapPersistTimer = null;
    onLoad() {
      pingInstall("collection-icons");
      pingActive("collection-icons");
      void syncPluginVersionOnLoad(this, PLUGIN_VERSION);
      this._disabled = readKillSwitch(this);
      try {
        this._cancelDeferredCleanup();
        this._settings = this._loadSettings();
        this._colorsByGuid = this._loadCollectionColors();
        this._recordToCollGuid = this._loadPersistedRecordMap();
        this._iconsByGuid = this._loadPersistedIconMap();
        void this._refreshCollectionColorsFromConfig();
        this.ui.injectCSS(PANEL_CSS);
        this._injectStaticCSS();
        this._watchAppearance();
        this.ui.registerCustomPanelType(PANEL_TYPE, (panel) => {
          try {
            panel.setTitle("Configure Collection Icons");
          } catch {
          }
          this._panelEl = panel.getElement();
          this._renderPanel();
        });
        this.ui.addCommandPaletteCommand({
          label: "Plugin: Collection Icons",
          icon: "link",
          onSelected: /* @__PURE__ */ __name(() => this._openSettingsPanel(), "onSelected")
        });
        this._handlerIds.push(this.events.on("panel.closed", () => this._flushConfigSave()));
        this._pageLifecycleListener = () => this._flushConfigSave();
        this._visibilityListener = () => {
          if (document.visibilityState === "hidden") this._flushConfigSave();
        };
        try {
          window.addEventListener("pagehide", this._pageLifecycleListener);
        } catch {
        }
        try {
          document.addEventListener("visibilitychange", this._visibilityListener);
        } catch {
        }
        this._healStructuralStamps();
        try {
          const staleRoot = document.querySelector(".plg-collection-icons-panel");
          if (staleRoot && staleRoot.parentElement) {
            this._panelEl = staleRoot.parentElement;
            this._renderPanel();
          }
        } catch {
        }
        if (this._disabled) return;
        this._refreshPanelAttributes(true);
        this._watchCollectionColors();
        this._rebuildPersistentColorRules();
        this._rebuildPersistentIconRules();
        this._attachEditorObserver();
        try {
          if (document.fonts && document.fonts.ready) {
            void document.fonts.ready.then(() => {
              if (!this._isUnloading) this._rebuildPersistentIconRules();
            });
          }
        } catch {
        }
        this._cacheCollections().then(() => {
          this._rebuildPersistentColorRules();
          this._decorateNow(this._observedRoot || document.body);
        });
        this._handlerIds.push(this.events.on("panel.navigated", () => this._attachEditorObserver()));
        this._handlerIds.push(this.events.on("panel.focused", () => this._attachEditorObserver()));
        this._handlerIds.push(this.events.on("collection.created", () => this._refreshAndRedecorate()));
        this._handlerIds.push(this.events.on("collection.updated", () => this._refreshAndRedecorate()));
        this._handlerIds.push(this.events.on("record.created", () => this._refreshAndRedecorate()));
        this._handlerIds.push(this.events.on("record.moved", () => this._refreshAndRedecorate()));
        this._handlerIds.push(this.events.on("record.updated", () => this._scheduleDecorate(this._observedRoot || document.body)));
        this._handlerIds.push(this.events.on("global-plugin.updated", () => void this._refreshCollectionColorsFromConfig()));
        this._handlerIds.push(this.events.on("reload", () => this._refreshAndRedecorate()));
        this._storageListener = (e) => {
          if (!e.key) return;
          if (e.key.startsWith("collection-colors/") && e.key.endsWith("/colors")) {
            const next = this._readCachedCollectionColors();
            if (next) this._adoptCollectionColors(next);
          }
        };
        window.addEventListener("storage", this._storageListener);
        this._navClickListener = (e) => this._onRefClick(e);
        try {
          document.addEventListener("click", this._navClickListener, true);
        } catch {
        }
      } catch (err) {
        console.error("[collection-icons] onLoad failed:", err);
      }
    }
    /** @param {MouseEvent} e */
    _onRefClick(e) {
      try {
        if (!e.isTrusted) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (target.closest(".lineitem-lineref")) return;
        const decorated = target.closest(`[${APPLIED_ATTR}]`);
        if (!decorated || !decorated.closest(".editor-panel")) return;
        const ref = decorated.closest(".lineitem-ref");
        if (!ref) return;
        const sel = window.getSelection();
        if (sel && !sel.isCollapsed) return;
        const btn = ref.querySelector(".lineitem-lineref") || decorated.querySelector(".lineitem-lineref");
        if (!(btn instanceof HTMLElement)) return;
        e.preventDefault();
        e.stopPropagation();
        for (const type of ["pointerdown", "mousedown", "pointerup", "mouseup", "click"]) {
          try {
            const Ctor = type.startsWith("pointer") && typeof PointerEvent === "function" ? PointerEvent : MouseEvent;
            btn.dispatchEvent(new Ctor(type, { bubbles: true, cancelable: true, view: window }));
          } catch {
          }
        }
      } catch (err) {
        this._log("ref click navigation failed", err);
      }
    }
    onUnload() {
      this._isUnloading = true;
      try {
        for (const id of this._handlerIds) this.events.off(id);
      } catch {
      }
      this._handlerIds = [];
      if (this._configSaveTimer) {
        clearTimeout(this._configSaveTimer);
        this._configSaveTimer = null;
      }
      this._flushConfigSave();
      try {
        if (this._editorObserver) this._editorObserver.disconnect();
      } catch {
      }
      this._editorObserver = null;
      if (this._decorateTimer) {
        clearTimeout(this._decorateTimer);
        this._decorateTimer = null;
        this._pendingDecorateRoot = null;
      }
      if (this._decorateRaf != null) {
        try {
          cancelAnimationFrame(this._decorateRaf);
        } catch {
        }
        this._decorateRaf = null;
      }
      if (this._attachRetryTimer) {
        clearTimeout(this._attachRetryTimer);
        this._attachRetryTimer = null;
      }
      if (this._staleCleanupTimer) {
        clearTimeout(this._staleCleanupTimer);
        this._staleCleanupTimer = null;
      }
      if (this._colorRulesTimer) {
        clearTimeout(this._colorRulesTimer);
        this._colorRulesTimer = null;
      }
      if (this._iconMapPersistTimer) {
        clearTimeout(this._iconMapPersistTimer);
        this._iconMapPersistTimer = null;
      }
      if (this._appearanceObserver) {
        this._appearanceObserver.disconnect();
        this._appearanceObserver = null;
      }
      if (this._colorsPoll) {
        clearInterval(this._colorsPoll);
        this._colorsPoll = null;
      }
      if (this._colorsChangedListener) {
        try {
          window.removeEventListener(COLORS_CHANGED_EVENT, this._colorsChangedListener);
        } catch {
        }
        this._colorsChangedListener = null;
      }
      if (this._appearanceRaf) {
        cancelAnimationFrame(this._appearanceRaf);
        this._appearanceRaf = null;
      }
      try {
        window.removeEventListener("storage", this._storageListener);
      } catch {
      }
      try {
        window.removeEventListener("pagehide", this._pageLifecycleListener);
      } catch {
      }
      try {
        document.removeEventListener("visibilitychange", this._visibilityListener);
      } catch {
      }
      try {
        document.removeEventListener("click", this._navClickListener, true);
      } catch {
      }
      this._scheduleDeferredCleanup();
      this._observedRoot = null;
      this._panelEl = null;
    }
    _cancelDeferredCleanup() {
      try {
        const w = (
          /** @type {any} */
          window
        );
        const timer = w[CLEANUP_TIMER_KEY];
        if (timer) clearTimeout(timer);
        w[CLEANUP_TIMER_KEY] = null;
      } catch {
      }
    }
    _scheduleDeferredCleanup() {
      try {
        this._cancelDeferredCleanup();
        const w = (
          /** @type {any} */
          window
        );
        w[CLEANUP_TIMER_KEY] = setTimeout(() => {
          w[CLEANUP_TIMER_KEY] = null;
          this._cleanupRuntimeArtifacts();
        }, 1500);
      } catch {
        this._cleanupRuntimeArtifacts();
      }
    }
    /**
     * One-time heal for structural stamps left behind by 1.0.8/1.0.9. Those builds could mark
     * a row (.line-div/.listitem) — or, via a plain top-level row, the list container itself —
     * through the host = el.parentElement fallback, and a marker on a container made
     * _onRefClick hijack every click inside it. Strip the plugin's attributes from any
     * container-shaped element that still carries them.
     */
    _healStructuralStamps() {
      try {
        document.querySelectorAll(
          `.line-div[${APPLIED_ATTR}], .listitem[${APPLIED_ATTR}], .listview-items[${APPLIED_ATTR}], .listitem-indentline[${GUID_ATTR}]`
        ).forEach((el2) => {
          if (!(el2 instanceof HTMLElement)) return;
          el2.removeAttribute(APPLIED_ATTR);
          el2.removeAttribute(GUID_ATTR);
          el2.removeAttribute(COLORED_ATTR);
          el2.removeAttribute(ICON_ATTR);
          el2.style.removeProperty(COLOR_VAR);
        });
      } catch {
      }
    }
    _cleanupRuntimeArtifacts() {
      try {
        document.querySelectorAll(`[${APPLIED_ATTR}]`).forEach((el2) => {
          el2.removeAttribute(APPLIED_ATTR);
          el2.removeAttribute(ICON_ATTR);
          el2.removeAttribute(GUID_ATTR);
          el2.removeAttribute(COLORED_ATTR);
          el2.style.removeProperty(COLOR_VAR);
        });
      } catch {
      }
      try {
        document.querySelectorAll(`.lineitem-lineref[${ICON_ATTR}], .lineitem-lineref[${GUID_ATTR}], .lineitem-lineref[${COLORED_ATTR}]`).forEach((el2) => {
          if (!(el2 instanceof HTMLElement)) return;
          el2.removeAttribute(ICON_ATTR);
          el2.removeAttribute(GUID_ATTR);
          el2.removeAttribute(COLORED_ATTR);
          el2.style.removeProperty(COLOR_VAR);
          el2.style.removeProperty("display");
          el2.style.removeProperty("opacity");
          el2.style.removeProperty("visibility");
        });
      } catch {
      }
      try {
        const styleEl = document.getElementById(STYLE_ID);
        if (styleEl) styleEl.remove();
        const iconRules = document.getElementById(ICON_RULES_STYLE_ID);
        if (iconRules) iconRules.remove();
        const colorRules = document.getElementById(COLOR_RULES_STYLE_ID);
        if (colorRules) colorRules.remove();
        this._iconRulesAdded.clear();
        this._colorRuleGuids.clear();
        this._guidIconRuleAdded.clear();
        this._iconCodepoints.clear();
      } catch {
      }
    }
    // ─── Storage ──────────────────────────────────────────────────────────────
    _settingsKey() {
      return `collection-icons/${this.getWorkspaceGuid()}/settings`;
    }
    _colorsKey() {
      return `collection-colors/${this.getWorkspaceGuid()}/colors`;
    }
    /** @param {string} key @returns {Record<string, any>} */
    _loadLocalObject(key) {
      try {
        const parsed = JSON.parse(localStorage.getItem(key) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch {
        return {};
      }
    }
    /** @returns {Record<string, any>} */
    _customConfig() {
      try {
        const conf = this.getConfiguration && this.getConfiguration();
        const custom = conf && conf.custom;
        return custom && typeof custom === "object" ? custom : {};
      } catch {
        return {};
      }
    }
    /** @returns {Settings} */
    _loadSettings() {
      const fromConfig = this._customConfig().settings || {};
      const fromLocal = this._loadLocalObject(this._settingsKey());
      const raw = { ...fromConfig, ...fromLocal };
      return this._normalizeSettings(raw);
    }
    /** @param {any} raw @returns {Settings} */
    _normalizeSettings(raw) {
      try {
        const savedVersion = Math.max(0, Math.round(Number(raw.settingsVersion) || 0));
        const settings = {
          settingsVersion: DEFAULT_SETTINGS.settingsVersion,
          hideTrailingAffordance: typeof raw.hideTrailingAffordance === "boolean" ? raw.hideTrailingAffordance : DEFAULT_SETTINGS.hideTrailingAffordance,
          replaceTrailingArrowIcon: typeof raw.replaceTrailingArrowIcon === "boolean" ? raw.replaceTrailingArrowIcon : DEFAULT_SETTINGS.replaceTrailingArrowIcon,
          showTrailingArrow: typeof raw.showTrailingArrow === "boolean" ? raw.showTrailingArrow : DEFAULT_SETTINGS.showTrailingArrow,
          hideOpenInOtherPanelHover: typeof raw.hideOpenInOtherPanelHover === "boolean" ? raw.hideOpenInOtherPanelHover : DEFAULT_SETTINGS.hideOpenInOtherPanelHover,
          visualTreatment: isVisualTreatment(raw.visualTreatment) ? raw.visualTreatment : savedVersion < 3 && raw.chipBg === true ? "chip" : DEFAULT_SETTINGS.visualTreatment,
          linkColorApplyTo: isLinkColorApplyTo(raw.linkColorApplyTo) ? raw.linkColorApplyTo : DEFAULT_SETTINGS.linkColorApplyTo,
          chipPadTPx: clampSpacing(raw.chipPadTPx ?? raw.chipPadYPx ?? DEFAULT_SETTINGS.chipPadTPx),
          chipPadRPx: clampSpacing(raw.chipPadRPx ?? raw.chipPadXPx ?? DEFAULT_SETTINGS.chipPadRPx),
          chipPadBPx: clampSpacing(raw.chipPadBPx ?? raw.chipPadYPx ?? DEFAULT_SETTINGS.chipPadBPx),
          chipPadLPx: clampSpacing(raw.chipPadLPx ?? raw.chipPadXPx ?? DEFAULT_SETTINGS.chipPadLPx),
          chipOffsetXPx: clampOffset(raw.chipOffsetXPx ?? DEFAULT_SETTINGS.chipOffsetXPx),
          chipOffsetYPx: clampOffset(raw.chipOffsetYPx ?? DEFAULT_SETTINGS.chipOffsetYPx),
          iconOffsetYPx: clampOffset(raw.iconOffsetYPx ?? DEFAULT_SETTINGS.iconOffsetYPx),
          chipIconRadiusPx: Math.max(0, Math.min(50, Math.round(Number(raw.chipIconRadiusPx ?? DEFAULT_SETTINGS.chipIconRadiusPx)))),
          chipBgMixPct: clampMix(raw.chipBgMixPct, DEFAULT_SETTINGS.chipBgMixPct),
          hoverBrightnessPct: Math.max(100, Math.min(250, Math.round(Number(raw.hoverBrightnessPct ?? DEFAULT_SETTINGS.hoverBrightnessPct)))),
          chipOutlineWidthPx: Math.max(0, Math.min(8, Math.round(Number(raw.chipOutlineWidthPx ?? DEFAULT_SETTINGS.chipOutlineWidthPx) * 2) / 2)),
          iconVariation: parseVariation(raw.iconVariation),
          textVariation: parseVariation(raw.textVariation),
          outlineVariation: parseVariation(raw.outlineVariation),
          debug: typeof raw.debug === "boolean" ? raw.debug : DEFAULT_SETTINGS.debug
        };
        return settings;
      } catch {
        return { ...DEFAULT_SETTINGS };
      }
    }
    _writeSettingsCache() {
      try {
        localStorage.setItem(this._settingsKey(), JSON.stringify(this._settings));
      } catch {
      }
    }
    /**
     * Interactive write path: localStorage immediately, mark synced-config dirty,
     * BUT do NOT schedule saveConfiguration. Per SDK (types.d.ts), saveConfiguration
     * forces a full plugin reload (which dumps the editor's scroll position and
     * forces a redecorate cycle). The dirty flag is flushed by `_flushConfigSave`
     * on panel.closed, pagehide, and visibility-hidden.
     *
     * @param {number} [_syncDelayMs] unused — retained for back-compat
     */
    _saveSettings(_syncDelayMs) {
      this._settings = this._normalizeSettings(this._settings);
      this._writeSettingsCache();
      this._configSaveDirty = true;
    }
    /** @param {number} [delayMs] */
    _scheduleConfigSave(delayMs = 900) {
      this._configSaveDirty = true;
      if (this._configSaveTimer) clearTimeout(this._configSaveTimer);
      this._configSaveTimer = setTimeout(() => {
        this._configSaveTimer = null;
        void this._saveCustomConfigNow();
      }, delayMs);
    }
    _flushConfigSave() {
      if (this._configSaveTimer) {
        clearTimeout(this._configSaveTimer);
        this._configSaveTimer = null;
      }
      if (this._configSaveDirty) void this._saveCustomConfigNow();
    }
    async _saveCustomConfigNow() {
      if (this._configSaveInFlight) {
        this._configSaveQueued = true;
        return;
      }
      this._configSaveInFlight = true;
      try {
        const plugin = await this._ownGlobalPlugin();
        if (!plugin || !plugin.saveConfiguration) {
          if (!this._isUnloading) this._scheduleConfigSave(1500);
          return;
        }
        const conf = plugin.getConfiguration ? plugin.getConfiguration() : this.getConfiguration();
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const nextSettings = this._normalizeSettings(this._settings);
        if (JSON.stringify(custom.settings || {}) === JSON.stringify(nextSettings)) {
          this._configSaveDirty = false;
          return;
        }
        await plugin.saveConfiguration(
          /** @type {any} */
          configWithPluginVersion(conf, {
            schemaVersion: 1,
            settings: nextSettings
          }, PLUGIN_VERSION)
        );
        this._configSaveDirty = false;
      } catch (err) {
        if (!this._isUnloading) this._scheduleConfigSave(1500);
        this._log("Unable to save synced settings config", err);
      } finally {
        this._configSaveInFlight = false;
        if (this._configSaveQueued && !this._isUnloading) {
          this._configSaveQueued = false;
          this._scheduleConfigSave();
        }
      }
    }
    async _ownGlobalPlugin() {
      try {
        const ownGuid = this.getGuid && this.getGuid();
        const plugins = await this.data.getAllGlobalPlugins();
        return plugins.find((p) => p && p.getGuid && p.getGuid() === ownGuid) || plugins.find((p) => p && p.getName && p.getName() === "Collection Icons") || null;
      } catch {
        return null;
      }
    }
    /** @returns {Record<string, string>} GUID → CSS color string */
    _loadCollectionColors() {
      return this._normalizeCollectionColors(this._loadLocalObject(this._colorsKey()));
    }
    /** @param {any} raw @returns {Record<string, string>} GUID → CSS color string */
    _normalizeCollectionColors(raw) {
      try {
        const valid = {};
        for (const [guid, entry] of Object.entries(raw)) {
          const c = entry && /** @type {any} */
          entry.color;
          if (typeof c === "string" && c.length > 0) valid[guid] = c;
        }
        return valid;
      } catch {
        return {};
      }
    }
    async _refreshCollectionColorsFromConfig() {
      try {
        const plugins = await this.data.getAllGlobalPlugins();
        const colorsPlugin = plugins.find((p) => p && p.getName && p.getName() === "Collection Colors");
        const conf = colorsPlugin && colorsPlugin.getConfiguration ? colorsPlugin.getConfiguration() : null;
        const custom = conf && conf.custom && typeof conf.custom === "object" ? conf.custom : {};
        const fromConfig = this._normalizeCollectionColors(custom.colors || {});
        const local = this._readCachedCollectionColors();
        this._adoptCollectionColors(local !== null ? local : fromConfig);
      } catch (err) {
        this._log("Unable to load Collection Colors config", err);
      }
    }
    /**
     * Collection Colors' localStorage cache, or null when it has never been written here.
     * An empty object is a REAL state (every color cleared) and must not read as "no cache" —
     * that distinction is what lets a cleared color propagate instead of falling back to config.
     *
     * @returns {Record<string, string> | null}
     */
    _readCachedCollectionColors() {
      try {
        const raw = localStorage.getItem(this._colorsKey());
        if (raw === null) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return null;
        return this._normalizeCollectionColors(parsed);
      } catch {
        return null;
      }
    }
    /**
     * Swap in a new guid→color map and repaint, but only when it actually differs — this runs
     * from a poll, so a no-op must stay a no-op (no rule rebuild, no decorate pass).
     *
     * @param {Record<string, string>} next
     */
    _adoptCollectionColors(next) {
      const serialized = JSON.stringify(next);
      if (serialized === this._colorsSerialized) return;
      this._colorsSerialized = serialized;
      const prevKeys = Object.keys(this._colorsByGuid).sort().join(",");
      const nextKeys = Object.keys(next).sort().join(",");
      this._colorsByGuid = next;
      if (prevKeys !== nextKeys) {
        this._refreshAndRedecorate();
        return;
      }
      this._schedulePersistentColorRules(80);
      this._scheduleDecorate(this._observedRoot || document.body);
    }
    /**
     * Watch Collection Colors for edits made in THIS tab.
     *
     * Neither obvious signal works: the `storage` event never fires in the tab that wrote the
     * value (and Collection Colors runs in this same page), and its synced saveConfiguration —
     * with the global-plugin.updated event it emits — is deliberately deferred to panel close.
     *
     * Collection Colors >= 1.2.4 dispatches COLORS_CHANGED_EVENT on every edit, which is instant
     * and free. The poll is the fallback for an older copy still installed alongside this one:
     * the two plugins update independently, so we cannot simply assume the event exists. The
     * first event that arrives proves the newer version is running and retires the poll for good.
     */
    _watchCollectionColors() {
      this._colorsChangedListener = () => {
        if (this._colorsPoll) {
          clearInterval(this._colorsPoll);
          this._colorsPoll = null;
        }
        const next = this._readCachedCollectionColors();
        if (next) this._adoptCollectionColors(next);
      };
      window.addEventListener(COLORS_CHANGED_EVENT, this._colorsChangedListener);
      this._colorsPoll = setInterval(() => {
        try {
          const raw = localStorage.getItem(this._colorsKey());
          if (raw === this._colorsRaw) return;
          this._colorsRaw = raw;
          const next = this._readCachedCollectionColors();
          if (next) this._adoptCollectionColors(next);
        } catch {
        }
      }, 1e3);
    }
    // ─── Collection / record icon resolution ──────────────────────────────────
    async _cacheCollections() {
      try {
        const colls = await this.data.getAllCollections();
        const collMap = /* @__PURE__ */ new Map();
        for (const c of colls) collMap.set(c.getGuid(), c);
        this._collectionsByGuid = collMap;
        const coloured = new Set(Object.keys(this._colorsByGuid));
        const recordMap = new Map(this._recordToCollGuid);
        for (const c of colls) {
          const cg = c.getGuid();
          if (!coloured.has(cg)) continue;
          try {
            const records = await c.getAllRecords();
            for (const r of records) recordMap.set(r.guid, cg);
          } catch (err) {
            this._log("coll.getAllRecords failed", cg, err);
          }
        }
        this._recordToCollGuid = recordMap;
        this._persistRecordMap();
      } catch (err) {
        this._log("failed to cache collections", err);
      }
    }
    _recordMapKey() {
      return `collection-icons/${this.getWorkspaceGuid()}/recmap`;
    }
    /** Persist the record→collection map so colour is resolvable instantly on the next load. */
    _persistRecordMap() {
      try {
        const obj = {};
        for (const [rec, coll] of this._recordToCollGuid) obj[rec] = coll;
        localStorage.setItem(this._recordMapKey(), JSON.stringify(obj));
      } catch {
      }
    }
    /** @returns {Map<string, string>} */
    _loadPersistedRecordMap() {
      try {
        const raw = JSON.parse(localStorage.getItem(this._recordMapKey()) || "{}");
        const m = /* @__PURE__ */ new Map();
        if (raw && typeof raw === "object") {
          for (const [k, v] of Object.entries(raw)) if (typeof v === "string") m.set(k, v);
        }
        return m;
      } catch {
        return /* @__PURE__ */ new Map();
      }
    }
    /**
     * Resolve a GUID to an icon class string ("ti-…").
     * @param {string} guid
     * @returns {string | null}
     */
    _resolveIcon(guid) {
      const record = this.data.getRecord(guid);
      if (record) {
        let isJournal = false;
        try {
          isJournal = !!record.getJournalDetails();
        } catch {
        }
        const ic = record.getIcon(!isJournal);
        const normalized = normalizeTablerIcon(ic);
        if (normalized) return normalized;
        if (isJournal) return null;
      }
      const coll = this._collectionsByGuid.get(guid);
      if (coll) {
        try {
          const cfg = coll.getConfiguration();
          const normalized = normalizeTablerIcon(cfg && typeof cfg.icon === "string" ? cfg.icon : "");
          if (normalized) return normalized;
        } catch (err) {
          this._log("coll.getConfiguration failed", guid, err);
        }
      }
      return null;
    }
    /**
     * Resolve a stored Collection Colors value to a CSS color. `twflip:` flips its
     * Tailwind shade for the active appearance (same contract as collection-colors).
     * @param {string | null | undefined} color
     * @returns {string | null}
     */
    _resolveColorValue(color) {
      if (typeof color !== "string") return color || null;
      const flip = color.match(/^twflip:([a-z]+):(\d+)$/i);
      if (flip && TAILWIND[flip[1]]) {
        const idx = Number(flip[2]);
        const useIdx = this._isDarkAppearance() ? TW_SHADES.length - 1 - idx : idx;
        return TAILWIND[flip[1]][Math.max(0, Math.min(TW_SHADES.length - 1, useIdx))] || color;
      }
      return color;
    }
    /** @returns {boolean} true when Thymer's current appearance is dark */
    _isDarkAppearance() {
      try {
        const t = this.ui.getCurrentTheme && this.ui.getCurrentTheme();
        const appearance = t && (t.appearance || t.theme && t.theme.appearance);
        if (appearance === "dark") return true;
        if (appearance === "light") return false;
      } catch {
      }
      try {
        if (document.body && document.body.classList.contains("dark")) return true;
      } catch {
      }
      const lum = /* @__PURE__ */ __name((str) => {
        const m = String(str || "").match(/rgba?\(([^)]+)\)/i);
        if (!m) return null;
        const [r, g, b, a] = m[1].split(",").map((s) => parseFloat(s));
        if (a !== void 0 && a === 0) return null;
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      }, "lum");
      const surfaces = [document.querySelector(".sidebar"), document.body, document.documentElement];
      for (const el2 of surfaces) {
        if (!el2) continue;
        try {
          const bg = lum(getComputedStyle(el2).backgroundColor);
          if (bg !== null) return bg < 0.5;
        } catch {
        }
      }
      for (const el2 of [document.body, document.documentElement]) {
        if (!el2) continue;
        try {
          const tx = lum(getComputedStyle(el2).color);
          if (tx !== null) return tx > 0.5;
        } catch {
        }
      }
      try {
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      } catch {
      }
      return true;
    }
    /** Re-tint chips/underlines when the user switches light/dark so `twflip:` colors flip. */
    _watchAppearance() {
      this._lastDark = this._isDarkAppearance();
      this._refreshThemeBg();
      const check = /* @__PURE__ */ __name(() => {
        const dark = this._isDarkAppearance();
        if (dark === this._lastDark) return;
        this._lastDark = dark;
        this._refreshThemeBg();
        this._rebuildPersistentColorRules();
        this._scheduleDecorate(this._observedRoot || document.body);
      }, "check");
      try {
        this._appearanceObserver = new MutationObserver(() => {
          if (this._appearanceRaf) return;
          this._appearanceRaf = requestAnimationFrame(() => {
            this._appearanceRaf = null;
            check();
          });
        });
        const opts = { attributes: true, attributeFilter: ["class", "style", "data-theme", "data-appearance"] };
        this._appearanceObserver.observe(document.documentElement, opts);
        if (document.body) this._appearanceObserver.observe(document.body, opts);
      } catch {
      }
    }
    /**
     * Resolve a GUID to a colour from Collection Colors.
     * @param {string} guid
     * @returns {string | null}
     */
    _resolveColor(guid) {
      const raw = this._colorsByGuid[guid] || (() => {
        const cg = this._recordToCollGuid.get(guid);
        return cg ? this._colorsByGuid[cg] : null;
      })();
      return raw ? this._resolveColorValue(raw) : null;
    }
    // ─── Editor observation ───────────────────────────────────────────────────
    _attachEditorObserver() {
      if (this._attachRetryTimer) {
        clearTimeout(this._attachRetryTimer);
        this._attachRetryTimer = null;
      }
      const root = (
        /** @type {HTMLElement | null} */
        document.querySelector(".panels-grid") || document.querySelector(".panel-body") || null
      );
      if (!root) {
        this._attachRetryTimer = setTimeout(() => this._attachEditorObserver(), 250);
        return;
      }
      if (this._observedRoot === root && this._editorObserver) {
        this._scheduleDecorateRaf(root);
        return;
      }
      if (this._editorObserver) this._editorObserver.disconnect();
      this._observedRoot = root;
      this._editorObserver = new MutationObserver((mutations) => this._onEditorMutations(mutations));
      this._editorObserver.observe(root, this._editorObserverOptions());
      this._refreshPanelAttributes(true);
      this._decorateNow(root);
    }
    /** MutationObserver options shared by attach + reconnect. */
    _editorObserverOptions() {
      return {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["data-guid", APPLIED_ATTR, GUID_ATTR, COLORED_ATTR, ICON_ATTR, "class"]
      };
    }
    _reconnectEditorObserver() {
      if (this._observedRoot && this._editorObserver) {
        this._editorObserver.observe(this._observedRoot, this._editorObserverOptions());
      }
    }
    /** @param {HTMLElement[]} tops */
    _syncDecorateRoots(tops) {
      if (!tops.length) return;
      if (this._editorObserver) this._editorObserver.disconnect();
      try {
        for (const r of tops) {
          try {
            this._decorateImpl(r);
          } catch (err) {
            this._log("incremental decorate failed", err);
          }
        }
      } finally {
        this._reconnectEditorObserver();
      }
    }
    /**
     * True when a mutation node sits inside an inline-ref subtree — not plain text that merely
     * shares a row with refs (typing after a chip must not re-decorate the whole line).
     *
     * @param {Node} node
     * @returns {boolean}
     */
    _refRelatedMutationNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (!parent) return false;
        node = parent;
      }
      if (!(node instanceof Element)) return false;
      if (node.classList.contains("lineitem-hashtag") || node.classList.contains("lineitem-hashtag-input")) return false;
      if (node.matches(".lineitem-ref, .lineitem-ref-title, .lineitem-lineref, [data-guid]")) return true;
      return !!node.closest(".lineitem-ref, .lineitem-ref-title");
    }
    /**
     * Incremental, same-frame decoration for mutation batches. Collects the nearest
     * decoratable containers around each mutation and runs the decorate pass on just those
     * subtrees, synchronously (pre-paint).
     * @param {MutationRecord[]} mutations
     */
    _onEditorMutations(mutations) {
      const roots = /* @__PURE__ */ new Set();
      const foldRoots = /* @__PURE__ */ new Set();
      const add = /* @__PURE__ */ __name((node) => {
        if (!node || !this._refRelatedMutationNode(node)) return;
        if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;
        if (!(node instanceof HTMLElement)) return;
        roots.add(node.closest(".line-div, .listitem") || node.parentElement || node);
      }, "add");
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "class") {
          const t = m.target;
          if (!(t instanceof HTMLElement) || !t.classList.contains("listitem")) continue;
          const wasFolded = (m.oldValue || "").includes("listitem-folded");
          const nowFolded = t.classList.contains("listitem-folded");
          if (wasFolded !== nowFolded) foldRoots.add(t);
          continue;
        }
        if (m.type === "attributes") {
          add(m.target);
          continue;
        }
        if (m.type === "childList") {
          for (const n of m.addedNodes) add(n);
          for (const n of m.removedNodes) add(n);
        }
      }
      if (foldRoots.size) {
        this._syncDecorateRoots([...foldRoots]);
        return;
      }
      if (!roots.size) return;
      const tops = [];
      for (const r of roots) {
        let contained = false;
        for (const other of roots) {
          if (other !== r && other.contains(r)) {
            contained = true;
            break;
          }
        }
        if (!contained) tops.push(r);
      }
      let candidateCount = 0;
      for (const r of tops) {
        candidateCount += r.querySelectorAll("[data-guid]").length;
        if (candidateCount > 12) break;
      }
      if (candidateCount > 12) {
        this._scheduleDecorateRaf(this._observedRoot || document.body);
        return;
      }
      this._syncDecorateRoots(tops);
    }
    /** @param {ParentNode} [root] */
    _decorateNow(root = document.body) {
      if (this._disabled) return;
      try {
        this._decorateAll(root);
      } catch (err) {
        this._log("decorate failed", err);
      }
    }
    /**
     * Schedule a decorate pass on the next animation frame, collapsing any number of mutation
     * batches in the same frame into one. Runs before paint, so decorations still land without a
     * visible unstyled frame.
     * @param {ParentNode} [root]
     */
    _scheduleDecorateRaf(root = document.body) {
      if (!root) return;
      if (root === document.body || !this._pendingDecorateRoot) {
        this._pendingDecorateRoot = root;
      }
      if (this._decorateRaf != null) return;
      this._decorateRaf = requestAnimationFrame(() => {
        this._decorateRaf = null;
        const target = this._pendingDecorateRoot || document.body;
        this._pendingDecorateRoot = null;
        this._decorateNow(target);
      });
    }
    /** Kept for backwards-compat with code paths that called the old debounced API. */
    /** @param {ParentNode} [root] */
    _scheduleDecorate(root = document.body) {
      if (this._disabled) return;
      if (!root) return;
      if (root === document.body || !this._pendingDecorateRoot) {
        this._pendingDecorateRoot = root;
      }
      if (this._decorateTimer) return;
      this._decorateTimer = setTimeout(() => {
        this._decorateTimer = null;
        const target = this._pendingDecorateRoot || document.body;
        this._pendingDecorateRoot = null;
        this._decorateNow(target);
      }, 16);
    }
    _refreshAndRedecorate() {
      this._cacheCollections().then(() => {
        this._schedulePersistentColorRules(80);
        this._scheduleDecorate(this._observedRoot || document.body);
      });
    }
    /**
     * Animated Thymer text effects can mutate their own decorative DOM continuously.
     * Ignore those mutation batches unless they actually touch inline reference nodes.
     *
     * @param {MutationRecord[]} mutations
     */
    _mutationsMayAffectRefs(mutations) {
      for (const m of mutations) {
        if (this._nodeMayContainRef(m.target)) return true;
        for (const node of m.addedNodes) {
          if (this._nodeMayContainRef(node)) return true;
        }
        for (const node of m.removedNodes) {
          if (this._nodeMayContainRef(node)) return true;
        }
      }
      return false;
    }
    /** @param {Node} node @returns {boolean} */
    _nodeMayContainRef(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        return !!parent && this._nodeMayContainRef(parent);
      }
      if (!(node instanceof Element)) return false;
      if (node.hasAttribute("data-guid") || node.hasAttribute(APPLIED_ATTR)) return true;
      if (node.hasAttribute(GUID_ATTR) || node.hasAttribute(COLORED_ATTR)) return true;
      return !!node.querySelector("[data-guid],[" + APPLIED_ATTR + "],[" + GUID_ATTR + "]");
    }
    /**
     * Build CSS rules keyed on Thymer's persistent `[data-guid]` values so colour is present
     * the moment Thymer paints a ref (the flash-free "sidebar model").
     *
     * PERFORMANCE CONTRACT — this sheet must stay cheap to match against:
     *   - The BULK pass (every record in the colour-scoped map) emits ONLY flat attribute
     *     selectors (`span[data-guid="X"]`, descendant `.ti`). No `:has()`, no per-guid
     *     `:hover`. Hundreds of `:has()` rules tax EVERY style recalc, which visibly janks
     *     Thymer's panel-transition animations.
     *   - `:has()`-based parent styling and baked hover
     *     colours are emitted ONLY for refs the user has actually seen (the persisted icon
     *     map, bounded) via `_ensureGuidColorRules`.
     *   - Post-decoration, the static marker rules ([data-collection-icons-applied],
     *     data-ci-guid) cover parents/hover with plain attribute selectors — the decorate
     *     pass runs same-frame, so markers exist before the user can hover anything.
     */
    _rebuildPersistentColorRules() {
      if (this._disabled) return;
      const old = document.getElementById(COLOR_RULES_STYLE_ID);
      if (old) old.remove();
      this._colorRuleGuids.clear();
      const styleEl = document.createElement("style");
      styleEl.id = COLOR_RULES_STYLE_ID;
      document.head.appendChild(styleEl);
      const sheet = styleEl.sheet;
      if (!sheet) return;
      const groupedByColl = /* @__PURE__ */ new Map();
      for (const collGuid of Object.keys(this._colorsByGuid)) {
        groupedByColl.set(collGuid, [collGuid]);
      }
      for (const [recGuid, collGuid] of this._recordToCollGuid) {
        if (this._colorsByGuid[recGuid]) continue;
        const list = groupedByColl.get(collGuid);
        if (list && !list.includes(recGuid)) list.push(recGuid);
      }
      const cssEscape = /* @__PURE__ */ __name((s) => s.replace(/[\\"]/g, "\\$&"), "cssEscape");
      const iconColorOf = /* @__PURE__ */ __name((c) => applyVariation(c, this._settings.iconVariation), "iconColorOf");
      const textColorOf = /* @__PURE__ */ __name((c) => applyVariation(c, this._settings.textVariation), "textColorOf");
      const outlineColorOf = /* @__PURE__ */ __name((c) => applyVariation(c, this._settings.outlineVariation), "outlineColorOf");
      for (const [collGuid, guids] of groupedByColl) {
        const color = this._resolveColor(collGuid);
        if (!color || !guids.length) continue;
        const iconColor = iconColorOf(color);
        const textColor = textColorOf(color);
        const outlineColor = outlineColorOf(color);
        const leafSel = guids.map((g) => `span[data-guid="${cssEscape(g)}"]`).join(",");
        try {
          sheet.insertRule(
            `${leafSel} {
						${COLOR_VAR}: ${color};
						--plg-ci-icon-color: ${iconColor};
						--plg-ci-text-color: ${textColor};
						--plg-ci-outline-color: ${outlineColor};
					}`,
            sheet.cssRules.length
          );
        } catch (err) {
          this._log("color-var rule failed", collGuid, err);
        }
        try {
          const chipShellSel = guids.map((g) => this._chipShellSelectors(cssEscape(g))).join(",");
          const chipPaintSel = guids.map((g) => this._chipPaintSelectors(cssEscape(g))).join(",");
          sheet.insertRule(
            `${chipShellSel} {
						background-color: transparent !important;
						background-image: none !important;
						text-decoration: none !important;
						border-bottom: none !important;
					}`,
            sheet.cssRules.length
          );
          sheet.insertRule(
            `${chipPaintSel} {
						${COLOR_VAR}: ${color};
						--plg-ci-icon-color: ${iconColor};
						--plg-ci-text-color: ${textColor};
						--plg-ci-outline-color: ${outlineColor};
						vertical-align: baseline !important;
						text-decoration: none !important;
						border-bottom: none !important;
						${this._chipPaintCss()}
					}`,
            sheet.cssRules.length
          );
          sheet.insertRule(
            `${chipPaintSel}:hover {
						background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix-hover, 50%), var(--plg-ci-chip-shade, #000)) !important;
					}`,
            sheet.cssRules.length
          );
          const iconHoverPinSel = guids.flatMap((g) => [
            `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[data-guid="${cssEscape(g)}"]`,
            `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[${GUID_ATTR}="${cssEscape(g)}"]`
          ]).join(",");
          if (iconHoverPinSel) {
            sheet.insertRule(
              `${iconHoverPinSel} {
							background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix, 32%), var(--plg-ci-chip-shade, #000)) !important;
						}`,
              sheet.cssRules.length
            );
          }
        } catch (err) {
          this._log("persistent chip rule failed", collGuid, err);
        }
        try {
          const iconSel = guids.flatMap((g) => [
            `[data-${ROOT_CLASS}-color="icon"] span[data-guid="${cssEscape(g)}"] .ti`,
            `[data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${cssEscape(g)}"] .ti`
          ]).join(",");
          sheet.insertRule(`${iconSel} { color: ${iconColor} !important; }`, sheet.cssRules.length);
        } catch (err) {
          this._log("icon-color rule failed", collGuid, err);
        }
        try {
          const textSel = guids.flatMap((g) => [
            `[data-${ROOT_CLASS}-color="icon+text"] .lineitem-ref.clickable[${GUID_ATTR}="${cssEscape(g)}"] .lineitem-ref-title`,
            `[data-${ROOT_CLASS}-color="icon+text"] .lineitem-ref-title[${GUID_ATTR}="${cssEscape(g)}"]`,
            `[data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${cssEscape(g)}"]`,
            `[data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${cssEscape(g)}"] [class*="btp-fmt"]`
          ]).join(",");
          sheet.insertRule(`${textSel} { color: ${textColor} !important; }`, sheet.cssRules.length);
        } catch (err) {
          this._log("text-color rule failed", collGuid, err);
        }
      }
      let seenBudget = 200;
      for (const guid of Object.keys(this._iconsByGuid)) {
        if (seenBudget-- <= 0) {
          this._log("seen-guid rule budget reached");
          break;
        }
        const color = this._resolveColor(guid);
        if (color) this._ensureGuidColorRules(guid, color);
      }
    }
    /** @param {number} [delayMs] */
    _schedulePersistentColorRules(delayMs = 120) {
      if (this._colorRulesTimer) clearTimeout(this._colorRulesTimer);
      this._colorRulesTimer = setTimeout(() => {
        this._colorRulesTimer = null;
        this._rebuildPersistentColorRules();
      }, delayMs);
    }
    /**
     * Add persistent color/chip rules for one visible inline ref. This keeps the current
     * editing row styled across Thymer redraws without rebuilding the whole stylesheet.
     *
     * @param {string} guid
     * @param {string} color
     */
    _ensureGuidColorRules(guid, color) {
      if (!guid || !color || this._colorRuleGuids.has(guid)) return;
      let styleEl = (
        /** @type {HTMLStyleElement | null} */
        document.getElementById(COLOR_RULES_STYLE_ID)
      );
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = COLOR_RULES_STYLE_ID;
        document.head.appendChild(styleEl);
      }
      const sheet = styleEl.sheet;
      if (!sheet) return;
      const cssEscape = /* @__PURE__ */ __name((s) => s.replace(/[\\"]/g, "\\$&"), "cssEscape");
      const g = cssEscape(guid);
      const iconColor = applyVariation(color, this._settings.iconVariation);
      const textColor = applyVariation(color, this._settings.textVariation);
      const outlineColor = applyVariation(color, this._settings.outlineVariation);
      const vars = `${COLOR_VAR}: ${color}; --plg-ci-icon-color: ${iconColor}; --plg-ci-text-color: ${textColor}; --plg-ci-outline-color: ${outlineColor};`;
      try {
        sheet.insertRule(`span[data-guid="${g}"] { ${vars} }`, sheet.cssRules.length);
        sheet.insertRule(`[${GUID_ATTR}="${g}"] { ${vars} }`, sheet.cssRules.length);
        const chipShellSel = this._chipShellSelectors(g);
        const chipPaintSel = this._chipPaintSelectors(g);
        sheet.insertRule(
          `${chipShellSel} {
						background-color: transparent !important;
						background-image: none !important;
						text-decoration: none !important;
						border-bottom: none !important;
					}`,
          sheet.cssRules.length
        );
        sheet.insertRule(
          `${chipPaintSel} {
						${vars}
						vertical-align: baseline !important;
						text-decoration: none !important;
						border-bottom: none !important;
						${this._chipPaintCss()}
					}`,
          sheet.cssRules.length
        );
        sheet.insertRule(
          `${chipPaintSel}:hover {
						background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix-hover, 50%), var(--plg-ci-chip-shade, #000)) !important;
					}`,
          sheet.cssRules.length
        );
        sheet.insertRule(
          `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[data-guid="${g}"],
					 body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[${GUID_ATTR}="${g}"] {
						background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix, 32%), var(--plg-ci-chip-shade, #000)) !important;
					}`,
          sheet.cssRules.length
        );
        const iconColorArrowSel = this._persistentArrowSelector(g, "::before").replaceAll(`body[data-${ROOT_CLASS}-arrow="replace"]`, `[data-${ROOT_CLASS}-color="icon"][data-${ROOT_CLASS}-arrow="replace"]`);
        const iconTextColorArrowSel = this._persistentArrowSelector(g, "::before").replaceAll(`body[data-${ROOT_CLASS}-arrow="replace"]`, `[data-${ROOT_CLASS}-color="icon+text"][data-${ROOT_CLASS}-arrow="replace"]`);
        sheet.insertRule(
          `[data-${ROOT_CLASS}-color="icon"] span[data-guid="${g}"] .ti,
					 [data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${g}"] .ti,
					 ${iconColorArrowSel},
					 ${iconTextColorArrowSel} {
						color: ${iconColor} !important;
					}`,
          sheet.cssRules.length
        );
        sheet.insertRule(
          `[data-${ROOT_CLASS}-color="icon+text"] .lineitem-ref.clickable[${GUID_ATTR}="${g}"] .lineitem-ref-title,
				 [data-${ROOT_CLASS}-color="icon+text"] .lineitem-ref-title[${GUID_ATTR}="${g}"],
				 [data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${g}"],
				 [data-${ROOT_CLASS}-color="icon+text"] span[data-guid="${g}"] [class*="btp-fmt"] {
					color: ${textColor} !important;
				}`,
          sheet.cssRules.length
        );
        this._colorRuleGuids.add(guid);
      } catch (err) {
        this._log("visible guid color rule failed", guid, err);
      }
    }
    /** @param {ParentNode} [root] */
    _decorateAll(root = document.body) {
      if (root === document.body) this._refreshPanelAttributes();
      if (this._editorObserver) this._editorObserver.disconnect();
      try {
        this._decorateImpl(root);
      } finally {
        this._reconnectEditorObserver();
      }
    }
    /**
     * The GUID of the record currently open in the active panel — i.e. the page the user is
     * looking at. Its own title/structural node carries a `[data-guid]` and must never be
     * decorated (it's the page, not an inline reference to another page).
     * @returns {string | null}
     */
    _activePanelRecordGuid() {
      try {
        const panel = this.ui.getActivePanel();
        const rec = panel && panel.getActiveRecord ? panel.getActiveRecord() : null;
        return rec && rec.guid ? rec.guid : null;
      } catch {
        return null;
      }
    }
    /**
     * True for GUIDs that belong to a page's own structure rather than an inline reference:
     *   - `nest-<COLL>-…`  → journal date-group headers.
     *   - the active panel's own record → the page's own title/heading node.
     * Journal *page* records (`S-<COLL>-P…`) are handled in `_resolveIcon` (own-icon-only), so a
     * genuine inline link to a day page still resolves normally.
     * @param {string} guid
     * @param {string | null} activeGuid
     * @returns {boolean}
     */
    _isStructuralGuid(guid, activeGuid) {
      if (guid.startsWith("nest-")) return true;
      if (activeGuid && guid === activeGuid) return true;
      return false;
    }
    /** @param {ParentNode} root */
    _decorateImpl(root) {
      const candidates = root.querySelectorAll("[data-guid]");
      const activeGuid = this._activePanelRecordGuid();
      const seenParents = /* @__PURE__ */ new Set();
      const entries = [];
      const iconsNeeded = /* @__PURE__ */ new Set();
      let skippedHasInner = 0;
      let skippedStructural = 0;
      for (const el2 of candidates) {
        if (!(el2 instanceof HTMLElement)) continue;
        if (el2.classList.contains("sidebar-item") || el2.closest(".sidebar")) continue;
        if (el2.classList.contains("lineitem-hashtag") || el2.classList.contains("lineitem-hashtag-input")) continue;
        if (el2.closest(".tps-panel, .CodeMirror, .cm-editor, .plugin-code-editor")) continue;
        if (el2.classList.contains("listitem-indentline") || el2.classList.contains("listitem") || el2.classList.contains("line-div")) continue;
        if (el2.querySelector("[data-guid]")) {
          skippedHasInner++;
          continue;
        }
        const guid = el2.getAttribute("data-guid");
        if (!guid) continue;
        if (this._isStructuralGuid(guid, activeGuid)) {
          skippedStructural++;
          continue;
        }
        const icon = this._resolveIcon(guid);
        const color = this._resolveColor(guid);
        const ref = this._refForLeaf(el2);
        const title = this._titleForRef(ref, el2, guid);
        const host = ref || title || el2.parentElement;
        if (!host || host === root) continue;
        if (host.classList.contains("line-div") || host.classList.contains("listitem") || host.classList.contains("listview-items") || host.tagName === "LISTVIEW-EDITOR") continue;
        const arrow = this._arrowForRef(ref, title, el2);
        if (seenParents.has(host)) continue;
        seenParents.add(host);
        if (icon) iconsNeeded.add(icon);
        entries.push({ el: el2, host, title, arrow, guid, icon, color });
      }
      this._ensureIconRules(iconsNeeded);
      let iconMapChanged = false;
      for (const { guid, icon } of entries) {
        if (!icon) continue;
        if (this._iconsByGuid[guid] !== icon) {
          this._iconsByGuid[guid] = icon;
          iconMapChanged = true;
        }
        this._ensureGuidIconRule(guid, icon);
      }
      if (iconMapChanged) this._persistIconMapSoon();
      const hideArrow = this._settings.hideTrailingAffordance || !this._settings.replaceTrailingArrowIcon && !this._settings.showTrailingArrow;
      for (const { el: el2, host, title, arrow, guid, icon, color } of entries) {
        if (color) this._ensureGuidColorRules(guid, color);
        this._decorateRef(host, title, arrow, guid, icon, color);
        const currentLeafColor = el2.style.getPropertyValue(COLOR_VAR);
        if (color) {
          if (currentLeafColor !== color) el2.style.setProperty(COLOR_VAR, color);
        } else if (currentLeafColor) {
          el2.style.removeProperty(COLOR_VAR);
        }
        if (arrow) this._applyArrowVisibility(arrow, hideArrow);
      }
      this._scheduleStaleCleanup(root);
      if (this._settings.debug) {
        this._log(`decorated ${entries.length} parent(s) from ${candidates.length} candidate(s) (block-wrappers:${skippedHasInner}, structural:${skippedStructural})`);
      }
    }
    /** @param {HTMLElement} el @returns {HTMLElement | null} */
    _refForLeaf(el2) {
      const ref = el2.closest(".lineitem-ref");
      return ref instanceof HTMLElement ? ref : null;
    }
    /**
     * @param {HTMLElement | null} ref
     * @param {HTMLElement} leaf
     * @param {string} guid
     * @returns {HTMLElement | null}
     */
    _titleForRef(ref, leaf, guid) {
      if (leaf.classList.contains("lineitem-ref-title")) return leaf;
      if (ref) {
        const exact = ref.querySelector(`.lineitem-ref-title[data-guid="${this._cssString(guid)}"]`);
        if (exact instanceof HTMLElement) return exact;
        const any = ref.querySelector(".lineitem-ref-title");
        if (any instanceof HTMLElement) return any;
      }
      const title = leaf.closest(".lineitem-ref-title");
      return title instanceof HTMLElement ? title : null;
    }
    /**
     * @param {HTMLElement | null} ref
     * @param {HTMLElement | null} title
     * @param {HTMLElement} leaf
     * @returns {HTMLElement | null}
     */
    _arrowForRef(ref, title, leaf) {
      if (leaf.classList.contains("lineitem-lineref")) return leaf;
      const search = [title, ref, leaf.parentElement].filter(Boolean);
      for (const root of search) {
        const direct = (
          /** @type {HTMLElement} */
          root.querySelector(":scope > .lineitem-lineref")
        );
        if (direct instanceof HTMLElement) return direct;
        const nested = (
          /** @type {HTMLElement} */
          root.querySelector(".lineitem-lineref")
        );
        if (nested instanceof HTMLElement) return nested;
      }
      return null;
    }
    /** @param {string} value */
    _cssString(value) {
      return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    }
    /** @param {ParentNode} root */
    _scheduleStaleCleanup(root) {
      if (this._staleCleanupTimer) clearTimeout(this._staleCleanupTimer);
      this._staleCleanupTimer = setTimeout(() => {
        this._staleCleanupTimer = null;
        if (this._isEditingInside(root)) {
          this._scheduleStaleCleanup(root);
          return;
        }
        this._cleanupStaleDecorations(root);
      }, 1200);
    }
    /** @param {ParentNode} root */
    _cleanupStaleDecorations(root) {
      root.querySelectorAll(`[${APPLIED_ATTR}]`).forEach((el2) => {
        if (!(el2 instanceof HTMLElement)) return;
        if (this._hasDecoratableDirectLeaf(el2)) return;
        el2.removeAttribute(APPLIED_ATTR);
        el2.removeAttribute(ICON_ATTR);
        el2.removeAttribute(GUID_ATTR);
        el2.removeAttribute(COLORED_ATTR);
        el2.style.removeProperty(COLOR_VAR);
      });
    }
    /** @param {ParentNode} root */
    _isEditingInside(root) {
      const active = document.activeElement;
      return !!active && active instanceof Node && root instanceof Node && root.contains(active);
    }
    /**
     * During active editing Thymer can momentarily redraw an inline-ref row without the final
     * leaf structure in place. Only remove decoration after a short delay and only when the
     * parent still has no direct data-guid leaf that resolves to a decoration.
     *
     * Every inline ref is decoratable now (icon and color are both optional — see _decorateImpl),
     * so any direct data-guid leaf counts. Testing for an icon here would let cleanup strip the
     * decoration back off a ref that legitimately has no icon.
     *
     * @param {HTMLElement} parent
     */
    _hasDecoratableDirectLeaf(parent) {
      for (const child of parent.children) {
        if (!(child instanceof HTMLElement)) continue;
        if (!child.hasAttribute("data-guid")) continue;
        if (child.querySelector("[data-guid]")) continue;
        if (child.getAttribute("data-guid")) return true;
      }
      return false;
    }
    /**
     * Decorate a native inline reference without adding DOM. The icon
     * lives in Thymer's existing `.lineitem-lineref` arrow slot, so editor caret math still sees
     * the same inline box it always expected.
     *
     * @param {HTMLElement} host Outer `.lineitem-ref` when available, otherwise the title host.
     * @param {HTMLElement | null} title `.lineitem-ref-title`, used for chip/text tinting.
     * @param {HTMLElement | null} arrow Native `.lineitem-lineref` arrow slot.
     * @param {string} guid
     * @param {string | null} icon  Tabler icon class, e.g. "ti-rocket". Null for a color-only ref.
     * @param {string | null} color
     */
    _decorateRef(host, title, arrow, guid, icon, color) {
      icon = icon ? normalizeTablerIcon(icon) : null;
      if (icon) this._ensureIconRule(icon);
      this._markDecorated(host, guid, color);
      if (title && title !== host) this._markDecorated(title, guid, color);
      if (!arrow) return;
      if (arrow.getAttribute(GUID_ATTR) !== guid) arrow.setAttribute(GUID_ATTR, guid);
      if (this._settings.replaceTrailingArrowIcon && icon) {
        if (arrow.getAttribute(ICON_ATTR) !== icon) arrow.setAttribute(ICON_ATTR, icon);
      } else {
        arrow.removeAttribute(ICON_ATTR);
      }
      const desiredColor = color || "";
      const currentColor = arrow.style.getPropertyValue(COLOR_VAR);
      if (currentColor !== desiredColor) {
        if (desiredColor) arrow.style.setProperty(COLOR_VAR, desiredColor);
        else arrow.style.removeProperty(COLOR_VAR);
      }
      if (desiredColor) {
        if (arrow.getAttribute(COLORED_ATTR) !== "1") arrow.setAttribute(COLORED_ATTR, "1");
      } else {
        arrow.removeAttribute(COLORED_ATTR);
      }
    }
    /**
     * @param {HTMLElement} el
     * @param {string} guid
     * @param {string | null} color
     */
    _markDecorated(el2, guid, color) {
      if (el2.getAttribute(GUID_ATTR) !== guid) el2.setAttribute(GUID_ATTR, guid);
      const desiredColor = color || "";
      const currentColor = el2.style.getPropertyValue(COLOR_VAR);
      if (currentColor !== desiredColor) {
        if (desiredColor) el2.style.setProperty(COLOR_VAR, desiredColor);
        else el2.style.removeProperty(COLOR_VAR);
      }
      if (desiredColor) {
        if (el2.getAttribute(COLORED_ATTR) !== "1") el2.setAttribute(COLORED_ATTR, "1");
      } else {
        el2.removeAttribute(COLORED_ATTR);
      }
      if (el2.getAttribute(APPLIED_ATTR) !== "1") el2.setAttribute(APPLIED_ATTR, "1");
    }
    /** @param {HTMLElement} arrow @param {boolean} hideArrow */
    _applyArrowVisibility(arrow, hideArrow) {
      if (this._settings.hideTrailingAffordance) {
        arrow.style.setProperty("display", "none", "important");
        return;
      }
      if (this._settings.replaceTrailingArrowIcon || this._settings.showTrailingArrow) {
        arrow.style.setProperty("display", "inline-block", "important");
        arrow.style.setProperty("opacity", "1", "important");
        arrow.style.setProperty("visibility", "visible", "important");
        return;
      }
      if (hideArrow) {
        arrow.style.setProperty("display", "none", "important");
      }
    }
    /** @type {Set<string>} */
    _iconRulesAdded = /* @__PURE__ */ new Set();
    /**
     * Each Tabler icon class (e.g. `ti-rocket`) maps to a unicode codepoint via the loaded
     * Tabler font. We extract the codepoint by reading `::before` content from a hidden probe
     * element styled with the class, then inject a one-line CSS rule that uses that codepoint
     * in our own pseudo-element. Cached per icon class.
     *
     * @param {string} icon  e.g. "ti-rocket"
     */
    _ensureIconRule(icon) {
      if (icon) this._ensureIconRules([icon]);
    }
    /**
     * Batched form of `_ensureIconRule`. Mounts one hidden container holding a probe span per
     * not-yet-seen icon, then reads every `::before` codepoint in a single layout flush before
     * removing the container — one forced reflow for the whole set instead of one per icon.
     * This is the hot path on the initial load pass, where a day/page view can surface many
     * distinct collection icons at once.
     *
     * @param {Iterable<string>} icons
     */
    _ensureIconRules(icons) {
      const need = [];
      for (const rawIcon of icons) {
        const icon = normalizeTablerIcon(rawIcon);
        if (icon && !this._iconRulesAdded.has(icon)) need.push(icon);
      }
      if (!need.length) return;
      const container = document.createElement("span");
      container.style.cssText = "position:absolute;visibility:hidden;pointer-events:none;left:-9999px;top:-9999px;";
      const probes = need.map((icon) => {
        const p = document.createElement("span");
        p.className = `ti ${icon}`;
        container.appendChild(p);
        return p;
      });
      document.body.appendChild(container);
      const codepoints = probes.map((p) => {
        try {
          return (getComputedStyle(p, "::before").content || "").replace(/^['"]|['"]$/g, "");
        } catch {
          return "";
        }
      });
      container.remove();
      let styleEl = (
        /** @type {HTMLStyleElement|null} */
        document.getElementById(ICON_RULES_STYLE_ID)
      );
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = ICON_RULES_STYLE_ID;
        document.head.appendChild(styleEl);
      }
      const sheet = styleEl.sheet;
      for (let i = 0; i < need.length; i++) {
        const icon = need[i];
        const codepoint = codepoints[i];
        if (!sheet || !codepoint || codepoint === "none" || codepoint === "normal") continue;
        this._iconRulesAdded.add(icon);
        this._iconCodepoints.set(icon, codepoint);
        const safeContent = JSON.stringify(codepoint);
        try {
          sheet.insertRule(
            `.editor-panel .lineitem-lineref[${ICON_ATTR}="${icon}"]::before {
							content: ${safeContent} !important;
							font-family: "tabler-icons" !important;
							font-style: normal !important;
							font-weight: 400 !important;
							speak: never;
						}`,
            sheet.cssRules.length
          );
        } catch (err) {
          this._log("insertRule failed for", icon, err);
        }
      }
    }
    _iconMapKey() {
      return `collection-icons/${this.getWorkspaceGuid()}/iconmap`;
    }
    /** @returns {Record<string, string>} */
    _loadPersistedIconMap() {
      try {
        const raw = JSON.parse(localStorage.getItem(this._iconMapKey()) || "{}");
        const out = {};
        if (raw && typeof raw === "object") {
          for (const [k, v] of Object.entries(raw)) {
            const icon = normalizeTablerIcon(v);
            if (icon) out[k] = icon;
          }
        }
        return out;
      } catch {
        return {};
      }
    }
    _persistIconMapSoon() {
      if (this._iconMapPersistTimer) return;
      this._iconMapPersistTimer = setTimeout(() => {
        this._iconMapPersistTimer = null;
        try {
          localStorage.setItem(this._iconMapKey(), JSON.stringify(this._iconsByGuid));
        } catch {
        }
      }, 500);
    }
    /**
     * Marker-independent suffix icon for one ref, keyed purely on the leaf guid. Injected from
     * the persisted guid→icon map at onLoad, so the icon renders the moment Thymer paints the
     * ref — before any decorate pass has run (the flash-free "sidebar model"). Once decoration
     * stamps data-ci-icon-class the attribute rule takes over (`:not` guard avoids overlap).
     *
     * @param {string} guid
     * @param {string} icon
     */
    _ensureGuidIconRule(guid, icon) {
      const normalizedIcon = normalizeTablerIcon(icon);
      if (!normalizedIcon) return;
      icon = normalizedIcon;
      const key = `${guid}|${icon}`;
      if (this._guidIconRuleAdded.has(key)) return;
      this._ensureIconRules([icon]);
      const codepoint = this._iconCodepoints.get(icon);
      if (!codepoint) return;
      const styleEl = document.getElementById(ICON_RULES_STYLE_ID);
      const sheet = styleEl instanceof HTMLStyleElement ? styleEl.sheet : null;
      if (!sheet) return;
      const g = guid.replace(/[\\"]/g, "\\$&");
      try {
        sheet.insertRule(
          `${this._persistentArrowSelector(g, "::before")} {
						content: ${JSON.stringify(codepoint)} !important;
						font-family: "tabler-icons" !important;
						font-style: normal !important;
						font-weight: 400 !important;
						speak: never;
					}`,
          sheet.cssRules.length
        );
        this._guidIconRuleAdded.add(key);
      } catch (err) {
        this._log("guid icon rule failed", guid, err);
      }
    }
    /** @param {string} escapedGuid @param {string} [suffix] */
    _persistentArrowSelector(escapedGuid, suffix = "") {
      return [
        `body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-ref[data-guid="${escapedGuid}"] .lineitem-lineref`,
        `body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-ref:has(.lineitem-ref-title[data-guid="${escapedGuid}"]) .lineitem-lineref`,
        `body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-ref-title[data-guid="${escapedGuid}"] .lineitem-lineref`,
        `body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-ref-title[data-guid="${escapedGuid}"] ~ .lineitem-lineref`,
        `body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-lineref[data-guid="${escapedGuid}"]`
      ].map((selector) => `${selector}${suffix}`).join(",");
    }
    /** Outer ref wrapper — strip native hover/underline paint; chip lives on the title only. */
    /** @param {string} escapedGuid */
    _chipShellSelectors(escapedGuid) {
      return [
        `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[data-guid="${escapedGuid}"]`,
        `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[${GUID_ATTR}="${escapedGuid}"]`
      ].join(",");
    }
    /**
     * Title text box that carries chip paint. Never the outer `.lineitem-ref` wrapper —
     * an absolute ::after on the wrapper spans the whole multi-line union box (empty
     * second-line gutters) or collapses to a sliver at line breaks.
     */
    /** @param {string} escapedGuid */
    _chipPaintSelectors(escapedGuid) {
      return [
        `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid="${escapedGuid}"]`,
        `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}="${escapedGuid}"]`,
        `body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref span[data-guid="${escapedGuid}"]:not(.lineitem-hashtag):not(.lineitem-ref-title)`
      ].join(",");
    }
    /** Shared chip paint declarations — background on the title with box-decoration-break: clone. */
    _chipPaintCss() {
      return `
				background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix, 32%), var(--plg-ci-chip-shade, #000)) !important;
				background-image: none !important;
				border-radius: var(--plg-ci-chip-radius, 4px);
				box-decoration-break: clone;
				-webkit-box-decoration-break: clone;
				padding-top: calc(var(--plg-ci-chip-pad-t, 0px) - var(--plg-ci-chip-offset-y, 0px));
				padding-right: calc(var(--plg-ci-chip-pad-r, 0px) + var(--plg-ci-chip-offset-x, 0px));
				padding-bottom: calc(var(--plg-ci-chip-pad-b, 0px) + var(--plg-ci-chip-offset-y, 0px));
				padding-left: calc(var(--plg-ci-chip-pad-l, 0px) - var(--plg-ci-chip-offset-x, 0px));
				box-shadow: inset 0 0 0 var(--plg-ci-chip-border-width, 0px) var(--plg-ci-outline-color, transparent) !important;
				box-sizing: border-box;
			`;
    }
    /** Inject persistent icon rules for every persisted guid→icon pair (batched probe). */
    _rebuildPersistentIconRules() {
      if (this._disabled) return;
      const entries = Object.entries(this._iconsByGuid);
      if (!entries.length) return;
      this._ensureIconRules(new Set(entries.map(([, icon]) => icon)));
      for (const [guid, icon] of entries) this._ensureGuidIconRule(guid, icon);
    }
    // ─── Mode attributes on observed root ─────────────────────────────────────
    /** @param {boolean} [forceThemeRefresh] */
    _refreshPanelAttributes(forceThemeRefresh = false) {
      if (this._disabled) return;
      const body = document.body;
      if (!body) return;
      body.setAttribute(`data-${ROOT_CLASS}`, "1");
      body.setAttribute(`data-${ROOT_CLASS}-mode`, this._settings.visualTreatment);
      body.setAttribute(`data-${ROOT_CLASS}-color`, this._settings.linkColorApplyTo);
      body.setAttribute(`data-${ROOT_CLASS}-arrow`, this._settings.hideTrailingAffordance ? "hide" : this._settings.replaceTrailingArrowIcon ? "replace" : this._settings.showTrailingArrow ? "show" : "hide");
      body.setAttribute(`data-${ROOT_CLASS}-hover-panel`, this._settings.hideOpenInOtherPanelHover ? "hide" : "show");
      const chipEnabled = this._settings.visualTreatment === "chip";
      const padT = this._settings.chipPadTPx;
      const padR = this._settings.chipPadRPx;
      const padB = this._settings.chipPadBPx;
      const padL = this._settings.chipPadLPx;
      const border = chipEnabled && this._settings.chipOutlineWidthPx > 0 ? this._settings.chipOutlineWidthPx : 0;
      body.style.setProperty("--plg-ci-chip-pad-t", `${padT}px`);
      body.style.setProperty("--plg-ci-chip-pad-r", `${padR}px`);
      body.style.setProperty("--plg-ci-chip-pad-b", `${padB}px`);
      body.style.setProperty("--plg-ci-chip-pad-l", `${padL}px`);
      body.style.setProperty("--plg-ci-chip-offset-x", `${this._settings.chipOffsetXPx}px`);
      body.style.setProperty("--plg-ci-chip-offset-y", `${this._settings.chipOffsetYPx}px`);
      body.style.setProperty("--plg-ci-icon-offset-y", `${this._settings.iconOffsetYPx}px`);
      body.style.setProperty("--plg-ci-chip-radius", `${this._settings.chipIconRadiusPx}px`);
      body.setAttribute(`data-${ROOT_CLASS}-chip-outline`, chipEnabled && this._settings.chipOutlineWidthPx > 0 ? "show" : "hide");
      body.style.setProperty("--plg-ci-outline-width", `${this._settings.chipOutlineWidthPx}px`);
      body.style.setProperty("--plg-ci-chip-border-width", `${border}px`);
      const hoverPct = Math.max(100, Math.min(250, this._settings.hoverBrightnessPct));
      const hoverStrength = (hoverPct - 100) / 150;
      const hoverChipMix = Math.min(MIX_MAX, this._settings.chipBgMixPct + Math.round(40 * hoverStrength));
      const hoverTextMix = Math.min(92, Math.max(58, 58 + Math.round(34 * hoverStrength)));
      body.style.setProperty("--plg-ci-chip-mix", `${this._settings.chipBgMixPct}%`);
      body.style.setProperty("--plg-ci-chip-mix-hover", `${hoverChipMix}%`);
      body.style.setProperty("--plg-ci-text-hover-mix", `${hoverTextMix}%`);
      this._refreshThemeBgIfNeeded(forceThemeRefresh);
    }
    /** @param {boolean} [force] */
    _refreshThemeBgIfNeeded(force = false) {
      const now = Date.now();
      if (!force && now - this._lastThemeBgRefresh < 2e3) return;
      this._lastThemeBgRefresh = now;
      this._refreshThemeBg();
    }
    /**
     * Set the chip color-mix anchor from the active light/dark appearance. Mirrors
     * collection-colors' twflip contract: dark themes mix toward near-black, light
     * themes toward near-white for pastel chips.
     */
    _refreshThemeBg() {
      const body = document.body;
      if (!body) return;
      const shade = this._isDarkAppearance() ? "#0a0a0a" : "#f5f5f5";
      body.style.setProperty("--plg-ci-chip-shade", shade);
      try {
        const cs = getComputedStyle(body);
        const candidates = ["--logo-color"];
        let accent = "";
        for (const name of candidates) {
          const v = cs.getPropertyValue(name).trim();
          if (v) {
            accent = v;
            break;
          }
        }
        if (accent) body.style.setProperty("--plg-ci-accent", accent);
        else body.style.removeProperty("--plg-ci-accent");
      } catch {
      }
    }
    // ─── CSS ──────────────────────────────────────────────────────────────────
    _injectStaticCSS() {
      const css = `
				/* Decorated suffix icon in Thymer's native inline-ref affordance slot. */
				[${ICON_ATTR}]::before {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 1em;
				height: 1em;
				box-sizing: border-box;
				margin-right: var(--plg-ci-icon-gap, 4px);
				vertical-align: var(--plg-ci-icon-valign, -0.125em);
				transition: color 90ms ease-out, background-color 90ms ease-out;
			}

			/* Prevent collection color vars from leaking through editor ancestors. Leave colored
			   refs alone \u2014 resetting --plg-ci-color on them breaks chip paint and underline tint. */
			[${APPLIED_ATTR}]:not([${COLORED_ATTR}="1"]),
			span[data-guid]:not([${COLORED_ATTR}="1"]) {
				${COLOR_VAR}: initial;
			}
			[${APPLIED_ATTR}],
			span[data-guid],
			span[data-guid] .ti {
				transition: color 90ms ease-out, background-color 90ms ease-out;
			}
			/* Chip titles carry their own background paint \u2014 no transition or style recalc
			   during plain-text typing on the same row flashes/phases the chip fill. */
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid],
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}] {
				transition: none !important;
			}

				/* Color application \u2014 exact title/suffix targets only. Persistent per-guid
				   rules carry concrete colours; these marker rules cover freshly decorated refs. */
				body[data-${ROOT_CLASS}-color="icon"] .editor-panel .lineitem-lineref[${ICON_ATTR}][${COLORED_ATTR}="1"]::before,
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-lineref[${ICON_ATTR}][${COLORED_ATTR}="1"]::before {
					color: var(--plg-ci-icon-color, var(${COLOR_VAR})) !important;
				}
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref.clickable[${COLORED_ATTR}="1"] .lineitem-ref-title,
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${COLORED_ATTR}="1"],
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref-title[data-guid][${COLORED_ATTR}="1"],
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref-title[${COLORED_ATTR}="1"] [class*="btp-fmt"] {
					color: var(--plg-ci-text-color, var(${COLOR_VAR})) !important;
				}

				/* icon+text: tint the ref's OWN underline to match the inherited text color,
				   so a colored ref doesn't show Thymer's native pink underline under colored
				   text. Scoped to the ref/title (the sibling .lineitem-text bleed is handled
				   separately), so this cannot leak onto adjacent paragraph text. Colors both
				   text-decoration and border-bottom plus the --ed-inlineref-* vars, whichever
				   Thymer uses to draw the resting underline. */
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref.clickable[${COLORED_ATTR}="1"],
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref.clickable[${COLORED_ATTR}="1"] .lineitem-ref-title,
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${COLORED_ATTR}="1"],
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-ref-title[data-guid][${COLORED_ATTR}="1"] {
					--ed-inlineref-underline: var(--plg-ci-text-color, var(${COLOR_VAR})) !important;
					--ed-inlineref-hover-underline: var(--plg-ci-text-color, var(${COLOR_VAR})) !important;
					text-decoration-color: var(--plg-ci-text-color, var(${COLOR_VAR})) !important;
					border-bottom-color: var(--plg-ci-text-color, var(${COLOR_VAR})) !important;
				}

				/* Hover tint is limited to the replaced suffix icon. Native text hover stays native. */
				body[data-${ROOT_CLASS}-color="icon"] .editor-panel .lineitem-lineref[${ICON_ATTR}][${COLORED_ATTR}="1"]:hover::before,
				body[data-${ROOT_CLASS}-color="icon+text"] .editor-panel .lineitem-lineref[${ICON_ATTR}][${COLORED_ATTR}="1"]:hover::before {
				color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-text-hover-mix, 70%), var(--text-default, currentColor)) !important;
			}


			/* \u2500\u2500 Inline-ref hover isolation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
			   Thymer rule (ground-truthed):
			     .line-div:has(.lineitem-lineref:hover) > span {
			       text-decoration-line: underline;
			       color: var(--ed-ref-hover-underline);
			     }
			   That hits EVERY direct-child span \u2014 plain text, hashtags, and sibling
			   .lineitem-ref nodes. Tag lines are worse in chip mode: chip hosts had
			   z-index:0, so the chip ::after painted over following .lineitem-hashtag
			   pills (often semi-transparent) and looked like tag hover bleed. */
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover),
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-lineref:hover) {
				--ed-ref-hover-underline: var(--text-default, currentColor) !important;
				--ed-ref-hover-color: var(--text-default, currentColor) !important;
				--ed-inlineref-hover-underline: transparent !important;
				--ed-inlineref-hover-color: var(--text-default, currentColor) !important;
			}
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover) > span:not(:has(.lineitem-lineref:hover)):not(.lineitem-hashtag):not(.lineitem-hashtag-input),
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-ref-title:hover) > span:not(:has(.lineitem-ref-title:hover)):not(.lineitem-hashtag):not(.lineitem-hashtag-input),
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover) .lineitem-text,
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-ref-title:hover) .lineitem-text,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-lineref:hover) .lineitem-text,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-ref-title:hover) .lineitem-text {
				text-decoration: none !important;
				text-decoration-line: none !important;
				text-decoration-color: transparent !important;
				text-decoration-thickness: initial !important;
				text-underline-offset: initial !important;
				-webkit-text-decoration: none !important;
				border-bottom: none !important;
				color: var(--text-default, currentColor) !important;
				transition: none !important;
			}
			/* Hashtag pills after a ref: chip hosts used z-index:0, which painted the chip
			   ::after layer ABOVE following inline siblings; semi-transparent --ed-hashtag-bg
			   then picked up chip hover brighten. Keep tags in their own stacking layer and
			   pin Thymer's resting hashtag colors while any ref on the row is hovered. */
			body[data-${ROOT_CLASS}] .editor-panel .lineitem-hashtag,
			body[data-${ROOT_CLASS}] .editor-panel .lineitem-hashtag-input {
				position: relative;
				z-index: 1;
			}
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover) .lineitem-hashtag,
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover) .lineitem-hashtag-input,
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-ref-title:hover) .lineitem-hashtag,
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-ref-title:hover) .lineitem-hashtag-input,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-lineref:hover) .lineitem-hashtag,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-lineref:hover) .lineitem-hashtag-input,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-ref-title:hover) .lineitem-hashtag,
			body[data-${ROOT_CLASS}] .editor-panel .listitem:has(.lineitem-ref-title:hover) .lineitem-hashtag-input {
				color: var(--ed-hashtag-color) !important;
				background: var(--ed-hashtag-bg) !important;
				background-color: var(--ed-hashtag-bg) !important;
				text-decoration: none !important;
				text-decoration-line: none !important;
				text-decoration-color: transparent !important;
				/* Do NOT zero border-bottom \u2014 that erased the resting hashtag underline
				   on ref hover (hover-bleed fix regression). */
				box-shadow: none !important;
				outline: none !important;
				transition: none !important;
			}
			/* Sibling refs: strip Thymer row promotion but keep per-guid color on the title. */
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-lineref:hover) > span.lineitem-ref:not(:has(.lineitem-lineref:hover)),
			body[data-${ROOT_CLASS}] .editor-panel .line-div:has(.lineitem-ref-title:hover) > span.lineitem-ref:not(:has(.lineitem-ref-title:hover)) {
				text-decoration: none !important;
				text-decoration-line: none !important;
				text-decoration-color: transparent !important;
				border-bottom: none !important;
				border-bottom-color: transparent !important;
			}
			/* NATIVE treatment = touch as little as possible. Keep Thymer's native ref
			   rendering \u2014 its accent color AND its resting underline \u2014 completely
			   untouched. No color/underline is added or overridden, so an uncolored ref
			   keeps the theme accent (not a forced neutral). The plugin only replaces
			   the trailing arrow with the icon (per the arrow setting) and kills the
			   .lineitem-text hover bleed (the rule above). The one intentional deviation:
			   remove the ref's OWN underline while it is hovered \u2014 the desired behavior
			   is underline at rest, gone on hover. Cover both the title span and the
			   .lineitem-ref span (Thymer underlines the ref span itself on icon hover,
			   and a child cannot un-draw its ancestor's line). */
			body[data-${ROOT_CLASS}-mode="native"] .editor-panel .lineitem-ref:hover,
			body[data-${ROOT_CLASS}-mode="native"] .editor-panel .lineitem-ref:hover .lineitem-ref-title {
				text-decoration: none !important;
				text-decoration-line: none !important;
				text-decoration-color: transparent !important;
				border-bottom-color: transparent !important;
			}
			/* Pin suffix icon metrics so Thymer hover chrome cannot nudge inline layout. */
			body[data-${ROOT_CLASS}] .editor-panel .lineitem-lineref[${ICON_ATTR}],
			body[data-${ROOT_CLASS}] .editor-panel .lineitem-lineref[${ICON_ATTR}]:hover {
				border: none !important;
				outline: none !important;
				box-shadow: none !important;
				background: none !important;
				vertical-align: baseline !important;
			}

			/* Background chip: paint on .lineitem-ref-title only. box-decoration-break: clone
			   keeps the chip on each wrapped line fragment; an absolute ::after on the outer
			   .lineitem-ref spans the union box (gutters on continuation lines) or collapses
			   to a sliver when the ref starts mid-line. */
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[data-guid],
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[${APPLIED_ATTR}="1"] {
				vertical-align: baseline !important;
				background-color: transparent !important;
				background-image: none !important;
				box-shadow: none !important;
				text-decoration: none !important;
				text-decoration-color: transparent !important;
				border-bottom: none !important;
				border-color: transparent !important;
			}
			/* NEUTRAL CHIP \u2014 a decorated ref whose collection has no colour. It gets the exact same
			   chip geometry as a coloured one (same _chipPaintCss: radius, padding, outline,
			   box-decoration-break), just driven by a grey instead of a collection colour, so a row
			   of refs reads as one consistent set and only the hue varies.

			   Guarded on the applied marker on purpose. Thymer wipes every plugin attr when it
			   re-renders a line but keeps its own data-guid, and :not() contributes its argument's
			   specificity \u2014 so an unguarded rule here outranks the persistent per-guid chip rule
			   and would repaint a re-rendered COLOURED ref neutral, erasing the very fallback built
			   to survive the re-render. Only refs we decorated and found colourless. */
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid][${APPLIED_ATTR}="1"]:not([${COLORED_ATTR}="1"]),
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${APPLIED_ATTR}="1"]:not([${COLORED_ATTR}="1"]) {
				${COLOR_VAR}: var(--plg-ci-neutral, ${NEUTRAL_COLOR});
				--plg-ci-outline-color: var(--plg-ci-neutral, ${NEUTRAL_COLOR});
				vertical-align: baseline !important;
				text-decoration: none !important;
				text-decoration-color: transparent !important;
				border-bottom: none !important;
				border-color: transparent !important;
				${this._chipPaintCss()}
			}
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid][${APPLIED_ATTR}="1"]:not([${COLORED_ATTR}="1"]):hover,
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${APPLIED_ATTR}="1"]:not([${COLORED_ATTR}="1"]):hover {
				background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix-hover, 50%), var(--plg-ci-chip-shade, #000)) !important;
			}
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid][${COLORED_ATTR}="1"],
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${COLORED_ATTR}="1"] {
				vertical-align: baseline !important;
				text-decoration: none !important;
				text-decoration-color: transparent !important;
				border-bottom: none !important;
				border-color: transparent !important;
				background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix, 32%), var(--plg-ci-chip-shade, #000)) !important;
				background-image: none !important;
				border-radius: var(--plg-ci-chip-radius, 4px);
				box-decoration-break: clone;
				-webkit-box-decoration-break: clone;
				padding-top: calc(var(--plg-ci-chip-pad-t, 0px) - var(--plg-ci-chip-offset-y, 0px));
				padding-right: calc(var(--plg-ci-chip-pad-r, 0px) + var(--plg-ci-chip-offset-x, 0px));
				padding-bottom: calc(var(--plg-ci-chip-pad-b, 0px) + var(--plg-ci-chip-offset-y, 0px));
				padding-left: calc(var(--plg-ci-chip-pad-l, 0px) - var(--plg-ci-chip-offset-x, 0px));
				box-shadow: inset 0 0 0 var(--plg-ci-chip-border-width, 0px) var(--plg-ci-outline-color, transparent) !important;
				box-sizing: border-box;
			}
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[data-guid][${COLORED_ATTR}="1"]:hover,
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref-title[${GUID_ATTR}][${COLORED_ATTR}="1"]:hover {
				background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix-hover, 50%), var(--plg-ci-chip-shade, #000)) !important;
			}
			/* Icon-only hover must not brighten the chip or inherit row promotion. */
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[data-guid][${COLORED_ATTR}="1"],
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref:has(.lineitem-lineref:hover):not(:has(.lineitem-ref-title:hover)) > .lineitem-ref-title[${GUID_ATTR}][${COLORED_ATTR}="1"] {
				background-color: color-mix(in srgb, var(${COLOR_VAR}) var(--plg-ci-chip-mix, 32%), var(--plg-ci-chip-shade, #000)) !important;
			}
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[data-guid]:hover,
			body[data-${ROOT_CLASS}-mode="chip"] .editor-panel .lineitem-ref.clickable[${APPLIED_ATTR}]:hover {
				background-color: transparent !important;
				background-image: none !important;
				box-shadow: none !important;
			}

			/* \u2500\u2500 Trailing arrow / affordance \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
			   Thymer's trailing affordance is a <line-button class="lineitem-lineref"> that follows
			   the link text and renders the \u2197 glyph \u2014 and it is also Thymer's native navigation
			   target. Hiding it with display:none is safe NOW because whole-chip clicks forward
			   synthetic events to it (dispatchEvent works on display:none elements), so navigation
			   doesn't need its hit-area \u2014 and hiding frees its layout space (a transparent-color
			   approach left a phantom gap). Scoped under .editor-panel to keep the plugin-editor
			   Preview untouched.
			   NOTE: NOT gated on [applied]/[colored] \u2014 those markers lag first paint, so gating on
			   them left the arrow (one character wide) reserving space until the decorate pass ran.
			   Hiding every editor ref's trailing affordance when the setting is "hide" collapses that
			   space immediately and keeps the ref exactly text-width. */
				body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-lineref {
					display: inline-block !important;
					opacity: 1 !important;
					visibility: visible !important;
				}
				body[data-${ROOT_CLASS}-arrow="hide"] .editor-panel .lineitem-lineref {
					display: none !important;
				}
			/* show \u2192 force-surface it. Thymer's link-menu-opener affordances can be hover-gated
			   (invisible until the pointer is over the row); an explicit "show trailing arrow"
			   setting should win over that gating and keep the arrow always visible. */
				body[data-${ROOT_CLASS}-arrow="show"] .editor-panel .lineitem-lineref {
					display: inline-block !important;
					opacity: 1 !important;
					visibility: visible !important;
				}

					/* The only icon glyph is Thymer's existing arrow slot. */
					:where(.editor-panel .lineitem-lineref[${ICON_ATTR}])::before {
						content: "" !important;
					}
				body[data-${ROOT_CLASS}-arrow="replace"] .editor-panel .lineitem-lineref[${ICON_ATTR}]::before {
					font-family: "tabler-icons" !important;
					font-style: normal !important;
					font-weight: 400 !important;
					speak: never;
					display: inline-block !important;
					position: relative !important;
					top: var(--plg-ci-icon-offset-y, 0px) !important;
					width: auto !important;
					height: auto !important;
					margin-right: 0 !important;
					vertical-align: baseline !important;
					line-height: inherit !important;
				}
					body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.link-opener-style.link-menu-visible .link-menu-action-zoom,
				body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.link-opener-style.link-menu-visible [data-action="linkmenu-zoom"],
				body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.link-opener-style.link-menu-visible > * {
					display: none !important;
					opacity: 0 !important;
					visibility: hidden !important;
					pointer-events: none !important;
				}
				/* Collapse the opener shell without display:none on the container \u2014 killing
				   the whole .link-menu-visible node aborted Thymer's hover-underline cycle
				   (underline flashed, then vanished when hide-open-in-other-panel is on). */
				body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.link-opener-style.link-menu-visible {
					opacity: 0 !important;
					visibility: hidden !important;
					pointer-events: none !important;
					width: 0 !important;
					height: 0 !important;
					min-width: 0 !important;
					min-height: 0 !important;
					padding: 0 !important;
					margin: 0 !important;
					border: none !important;
					overflow: hidden !important;
				}
				body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.item-drag-handle-editor-style[data-guid] .link-menu-action-zoom,
				body[data-${ROOT_CLASS}-hover-panel="hide"] .link-menu.item-drag-handle-editor-style[data-guid] [data-action="linkmenu-zoom"] {
					display: none !important;
					opacity: 0 !important;
					visibility: hidden !important;
					pointer-events: none !important;
				}
			/* \u2500\u2500 Settings panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
			.${ROOT_CLASS}-panel,
			.${ROOT_CLASS}-panel * {
				text-align: left !important;
			}
			/* Stretch direct children to full panel width so section dividers + content
			   span edge-to-edge. Combined with text-align:left, this gives left-aligned
			   content that fills the panel. */
			.${ROOT_CLASS}-panel {
				align-items: stretch !important;
			}
			/* Stretch panel-level blocks and section content edge-to-edge. Deliberately does NOT
			   include .tps-plugin-header descendants \u2014 the shared header owns its own layout, and
			   force-stretching its children blew the small inline-flex logo avatar up into a
			   full-width banner. */
			.${ROOT_CLASS}-panel > *,
			.${ROOT_CLASS}-panel section,
			.${ROOT_CLASS}-panel section > * {
				align-self: stretch !important;
				justify-self: stretch !important;
				width: 100% !important;
				max-width: 100% !important;
				margin-left: 0 !important;
				margin-right: 0 !important;
				box-sizing: border-box !important;
			}
			/* The shared header is a direct panel child, so the rule above makes the header box
			   full-width (correct) \u2014 but its internal elements must keep their component sizing.
			   The logo in particular is a hug-content avatar, not a banner. */
			.${ROOT_CLASS}-panel .tps-plugin-header-logo {
				width: auto !important;
				max-width: max-content !important;
				align-self: flex-start !important;
			}
			.${ROOT_CLASS}-panel button { text-align: center !important; }
			.${ROOT_CLASS}-panel .num-input { text-align: center !important; }
			.${ROOT_CLASS}-panel .slider-value { text-align: right !important; }
			.${ROOT_CLASS}-panel {
				padding: 0;
				font-family: inherit;
				font-size: 13px;
				line-height: 1.4;
				width: 100%;
				max-width: 100%;
				margin: 0;
				color: var(--text-default, currentColor);
				box-sizing: border-box;
				overflow-x: hidden;
			}
			.${ROOT_CLASS}-panel section {
				border-top: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 14%, transparent));
				padding: 22px 0;
			}
			.${ROOT_CLASS}-panel section:first-of-type { border-top: 0; padding-top: 6px; }
			.${ROOT_CLASS}-panel .panel-header-row {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				gap: 10px;
				position: relative;
			}
			.${ROOT_CLASS}-panel .panel-header-row > .tps-plugin-header {
				flex: 1 1 auto;
				min-width: 0;
				width: auto !important;
				max-width: none !important;
			}
			.${ROOT_CLASS}-panel section h2 {
				font-size: 11px;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.08em;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				margin: 0 0 14px;
			}
			.${ROOT_CLASS}-panel section h2 .section-title-link {
				color: var(--plg-ci-accent, var(--logo-color, currentColor));
				text-decoration: underline;
				text-underline-offset: 2px;
			}
			.${ROOT_CLASS}-panel section h2 .section-title-link:hover {
				text-decoration: none;
			}
			.${ROOT_CLASS}-panel .section-header-row {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 10px;
				margin: 0 0 14px;
			}
			.${ROOT_CLASS}-panel .section-header-row > h2 {
				margin: 0;
			}
			.${ROOT_CLASS}-panel .sec-reset {
				font-size: 10px;
				font-weight: 500;
				letter-spacing: 0.04em;
				text-transform: none;
				padding: 2px 8px;
				background: transparent;
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 4px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				cursor: pointer;
				flex-shrink: 0;
			}
			.${ROOT_CLASS}-panel .sec-reset:hover {
				color: var(--text-default, currentColor);
				border-color: var(--border-default, color-mix(in srgb, currentColor 24%, transparent));
				background: var(--hover-bg, color-mix(in srgb, currentColor 6%, transparent));
			}
			.${ROOT_CLASS}-panel .section-hint {
				font-size: 12px;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				margin: -6px 0 14px;
			}
			.${ROOT_CLASS}-panel .section-hint a {
				color: var(--plg-ci-accent, var(--logo-color, currentColor));
				text-decoration: underline;
				text-underline-offset: 2px;
			}
			.${ROOT_CLASS}-panel .section-hint a:hover {
				text-decoration: none;
			}
			.${ROOT_CLASS}-panel .opt {
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 7px 10px;
				margin: 0 -10px;
				border-radius: 6px;
				cursor: pointer;
				font-size: 13px;
			}
			.${ROOT_CLASS}-panel .opt:hover { background-color: var(--hover-bg, color-mix(in srgb, currentColor 6%, transparent)); }
			.${ROOT_CLASS}-panel .opt input { margin: 0; accent-color: var(--plg-ci-accent, currentColor); }
			.${ROOT_CLASS}-panel .opt .label { font-weight: 500; color: var(--text-default, currentColor); }
			.${ROOT_CLASS}-panel .opt input:checked ~ .label { color: var(--plg-ci-accent, currentColor); }

			/* Number-row grid for spacing + tint controls */
			/* Universal left-aligned 2-col grid: label + control pack from the left,
			   no right-pushed column. Same visual flow as the radio/checkbox rows. */
			.${ROOT_CLASS}-num-grid {
				display: grid;
				grid-template-columns: auto auto;
				justify-content: start;
				column-gap: 10px;
				row-gap: 6px;
				align-items: center;
				margin: 6px 0 4px;
			}
			.${ROOT_CLASS}-num-grid .num-label {
				font-size: 12.5px;
				color: var(--text-default, currentColor);
				white-space: nowrap;
				text-align: left;
			}
			.${ROOT_CLASS}-subhead {
				font-size: 11px;
				font-weight: 600;
				text-transform: uppercase;
				letter-spacing: 0.06em;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				margin: 18px 0 8px;
			}

			/* Slider row (HSL variation) \u2014 compact for narrow panels. */
			.${ROOT_CLASS}-slider .slider-inner {
				display: flex;
				align-items: center;
				gap: 6px;
				padding: 2px 0;
				min-width: 0;
			}
			.${ROOT_CLASS}-slider .slider-input {
				flex: 1 1 0;
				min-width: 60px;
			}
			.${ROOT_CLASS}-slider .slider-value {
				font-variant-numeric: tabular-nums;
				font-size: 11.5px;
				color: var(--text-default, currentColor);
				min-width: 44px;
				text-align: right;
				flex-shrink: 0;
			}
			.${ROOT_CLASS}-slider .num-reset { display: none; }

			/* Number row \u2014 compact, fits a narrow panel column. */
			.${ROOT_CLASS}-number { display: inline-flex; align-items: center; gap: 4px; padding: 2px 0; flex-shrink: 0; }
			.${ROOT_CLASS}-number .num-step {
				width: 24px; height: 24px; background: transparent;
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 16%, transparent));
				color: var(--text-default, currentColor);
				font-size: 14px; line-height: 1;
				border-radius: 4px; cursor: pointer; padding: 0;
				/* Explicit centering so the +/\u2212 glyph sits in the middle of the box. */
				display: inline-flex !important;
				align-items: center !important;
				justify-content: center !important;
				text-align: center !important;
			}
			.${ROOT_CLASS}-number .num-step:hover {
				border-color: var(--border-default, color-mix(in srgb, currentColor 24%, transparent));
				background: var(--hover-bg, color-mix(in srgb, currentColor 6%, transparent));
			}
			.${ROOT_CLASS}-number .num-input {
				width: 64px; height: 26px; padding: 0 8px;
				background: var(--tps-bg-input, color-mix(in srgb, currentColor 6%, transparent));
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 4px; color: var(--text-default, currentColor);
				font: inherit; font-size: 13px; font-variant-numeric: tabular-nums; text-align: center;
				/* Hide native spinner so text isn't truncated by it */
				-webkit-appearance: textfield; appearance: textfield;
			}
			.${ROOT_CLASS}-number .num-input::-webkit-outer-spin-button,
			.${ROOT_CLASS}-number .num-input::-webkit-inner-spin-button {
				-webkit-appearance: none; margin: 0;
			}
			.${ROOT_CLASS}-number .num-input:focus { outline: none; border-color: var(--plg-ci-accent, currentColor); }
			.${ROOT_CLASS}-number .num-unit { color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent)); font-size: 11px; margin: 0 2px 0 0; }
			/* Reset button hidden \u2014 it occupied valuable horizontal space; users can type 0 directly. */
			.${ROOT_CLASS}-number .num-reset { display: none; }

			/* Multi-cell numeric row: groups 2\u20134 small numeric inputs (T/R/B/L or X/Y)
			   into a single row so the panel doesn't grow vertically with every axis. */
			.${ROOT_CLASS}-multi {
				display: inline-flex;
				align-items: center;
				gap: 6px;
				flex-wrap: nowrap;
			}
			.${ROOT_CLASS}-multi .multi-cell {
				display: inline-flex;
				align-items: center;
				gap: 3px;
			}
			.${ROOT_CLASS}-multi .multi-sub {
				font-size: 10px;
				font-weight: 600;
				letter-spacing: 0.04em;
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				text-transform: uppercase;
				width: 10px;
				text-align: center;
			}
			.${ROOT_CLASS}-multi .multi-input {
				width: 46px; height: 24px; padding: 0 4px;
				background: var(--tps-bg-input, color-mix(in srgb, currentColor 6%, transparent));
				border: 1px solid var(--tps-divider, color-mix(in srgb, currentColor 16%, transparent));
				border-radius: 4px;
				color: var(--text-default, currentColor);
				font: inherit; font-size: 12px; font-variant-numeric: tabular-nums; text-align: center;
				-webkit-appearance: textfield; appearance: textfield;
			}
			.${ROOT_CLASS}-multi .multi-input::-webkit-outer-spin-button,
			.${ROOT_CLASS}-multi .multi-input::-webkit-inner-spin-button {
				-webkit-appearance: none; margin: 0;
			}
			.${ROOT_CLASS}-multi .multi-input:focus {
				outline: none;
				border-color: var(--plg-ci-accent, currentColor);
			}
			.${ROOT_CLASS}-multi .multi-unit {
				color: var(--text-muted, color-mix(in srgb, currentColor 62%, transparent));
				font-size: 11px;
				margin-left: 4px;
			}

			/* Tint variation control (HSL | Tailwind), mirrored from collection-colors. */
			.${ROOT_CLASS}-tint { display: flex; flex-direction: column; gap: 8px; margin: 4px 0 2px; }
			.${ROOT_CLASS}-tint-mode { display: inline-flex; gap: 4px; }
			.${ROOT_CLASS}-tint-mode-btn,
			.${ROOT_CLASS}-shade-btn {
				height: 28px;
				border: 1px solid transparent;
				background: transparent;
				color: var(--text-default, currentColor);
				border-radius: 4px;
				cursor: pointer;
				font: inherit;
				font-size: 12px;
			}
			.${ROOT_CLASS}-tint-mode-btn { padding: 0 10px; }
			.${ROOT_CLASS}-shade-btn { min-width: 44px; padding: 0 8px; font-variant-numeric: tabular-nums; }
			.${ROOT_CLASS}-tint-mode-btn:hover,
			.${ROOT_CLASS}-shade-btn:hover {
				background: var(--hover-bg, color-mix(in srgb, currentColor 6%, transparent));
				border-color: var(--border-default, color-mix(in srgb, currentColor 20%, transparent));
			}
			.${ROOT_CLASS}-tint-mode-btn.is-active,
			.${ROOT_CLASS}-shade-btn.is-active {
				background: color-mix(in srgb, var(--plg-ci-accent, currentColor) 15%, transparent);
				border-color: color-mix(in srgb, var(--plg-ci-accent, currentColor) 45%, transparent);
				color: var(--plg-ci-accent, currentColor);
				font-weight: 600;
			}
			.${ROOT_CLASS}-tint-shades { display: flex; flex-wrap: wrap; gap: 4px; }
		`;
      const old = document.getElementById(STYLE_ID);
      if (old) old.remove();
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = css;
      document.head.appendChild(styleEl);
    }
    // ─── Settings panel ───────────────────────────────────────────────────────
    async _openSettingsPanel() {
      const panel = await this.ui.createPanel();
      if (panel) panel.navigateToCustomType(PANEL_TYPE);
    }
    _renderPanel() {
      if (!this._panelEl) return;
      this._refreshPanelAttributes();
      const el2 = this._panelEl;
      el2.replaceChildren();
      el2.classList.add("tps-panel", `${ROOT_CLASS}-panel`);
      const h2 = /* @__PURE__ */ __name((tag, attrs = {}, ...kids) => {
        const n = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) {
          if (k === "class") n.className = String(v);
          else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
          else n.setAttribute(k, String(v));
        }
        for (const k of kids) {
          if (k == null) continue;
          n.append(typeof k === "string" ? document.createTextNode(k) : k);
        }
        return n;
      }, "h");
      this._repairAncestorAlignment(el2);
      const liveConf = typeof this.getConfiguration === "function" ? this.getConfiguration() || {} : {};
      const headerConf = {
        ...MANIFEST,
        ...Object.fromEntries(Object.entries(liveConf).filter(([, v]) => v != null && v !== ""))
      };
      const headerRow = h2("div", { class: "panel-header-row" });
      headerRow.append(pluginHeaderFromConfig(headerConf, {
        version: PLUGIN_VERSION,
        helperOpen: this._headerHelperOpen,
        onHelperToggle: /* @__PURE__ */ __name((open) => {
          this._headerHelperOpen = open;
        }, "onHelperToggle"),
        killSwitch: {
          on: !this._disabled,
          onToggle: /* @__PURE__ */ __name((nextOn) => {
            if (this._configSaveTimer) {
              clearTimeout(this._configSaveTimer);
              this._configSaveTimer = null;
            }
            this._configSaveDirty = false;
            void setPluginDisabled(this, !nextOn, PLUGIN_VERSION, {
              schemaVersion: 1,
              settings: this._normalizeSettings(this._settings)
            });
          }, "onToggle")
        },
        feedback: { data: this.data }
      }));
      el2.append(headerRow);
      const append = /* @__PURE__ */ __name((section) => el2.appendChild(section), "append");
      append(h2(
        "section",
        {},
        this._optionsSectionHeaderRow(),
        this._checkboxRow("Remove trailing icon/arrow completely", "Hides the affordance entirely \u2014 no icon and no arrow. Overrides the two options below.", "hideTrailingAffordance"),
        this._checkboxRow("Replace trailing arrow with collection icon", "", "replaceTrailingArrowIcon"),
        this._checkboxRow("Show native trailing arrow when replacement is off", "", "showTrailingArrow"),
        this._checkboxRow("Hide open-in-other-panel hover action", "", "hideOpenInOtherPanelHover"),
        h2(
          "div",
          { class: `${ROOT_CLASS}-num-grid`, style: "margin-top:8px;" },
          h2("div", { class: "num-label" }, "Icon Y offset"),
          this._numberRow("iconOffsetYPx", OFFSET_MIN_PX, OFFSET_MAX_PX, "px", 0.5)
        )
      ));
      append(h2(
        "section",
        {},
        this._sectionHeaderLinked("COLOR FROM", "COLLECTION COLORS", COLLECTION_COLORS_REPO),
        ...LINK_COLOR_APPLY_TO.map((opt) => this._radioRow("linkColorApplyTo", opt.val, opt.label, opt.tip))
      ));
      append(h2(
        "section",
        {},
        this._sectionHeader("VISUAL TREATMENT"),
        ...VISUAL_TREATMENTS.map((opt) => this._radioRow("visualTreatment", opt.val, opt.label, opt.tip))
      ));
      if (this._settings.visualTreatment === "chip") {
        append(h2(
          "section",
          {},
          this._sectionHeader("BACKGROUND CHIP STYLE"),
          h2(
            "div",
            { class: `${ROOT_CLASS}-num-grid` },
            h2("div", { class: "num-label" }, "Padding"),
            this._multiNumberRow([
              { key: "chipPadTPx", sub: "T" },
              { key: "chipPadRPx", sub: "R" },
              { key: "chipPadBPx", sub: "B" },
              { key: "chipPadLPx", sub: "L" }
            ], SPACING_MIN_PX, SPACING_MAX_PX, "px", 0.5),
            h2("div", { class: "num-label" }, "Chip offset"),
            this._multiNumberRow([
              { key: "chipOffsetXPx", sub: "X" },
              { key: "chipOffsetYPx", sub: "Y" }
            ], OFFSET_MIN_PX, OFFSET_MAX_PX, "px", 0.5),
            h2("div", { class: "num-label" }, "Corner radius"),
            this._numberRow("chipIconRadiusPx", 0, 50, "px"),
            h2("div", { class: "num-label" }, "Outline width"),
            this._numberRow("chipOutlineWidthPx", 0, 8, "px", 0.5),
            h2("div", { class: "num-label" }, "Chip bg mix"),
            this._numberRow("chipBgMixPct", MIX_MIN, MIX_MAX, "%"),
            h2("div", { class: "num-label" }, "Hover brightness"),
            this._numberRow("hoverBrightnessPct", 100, 250, "%")
          ),
          h2("h3", { class: `${ROOT_CLASS}-subhead` }, "Icon tint"),
          this._variationSliders("iconVariation"),
          h2("h3", { class: `${ROOT_CLASS}-subhead` }, "Text tint"),
          this._variationSliders("textVariation"),
          h2("h3", { class: `${ROOT_CLASS}-subhead` }, "Outline tint"),
          this._variationSliders("outlineVariation")
        ));
      }
    }
    /** @param {string} title */
    _sectionHeader(title) {
      const head = document.createElement("h2");
      head.textContent = title;
      return head;
    }
    /** Options section header row: title left, global restore defaults right. */
    _optionsSectionHeaderRow() {
      const row = document.createElement("div");
      row.className = "section-header-row";
      row.append(this._sectionHeader("OPTIONS"));
      const restoreBtn = document.createElement("button");
      restoreBtn.type = "button";
      restoreBtn.className = "sec-reset";
      restoreBtn.textContent = "Restore defaults";
      restoreBtn.title = "Reset all settings to their defaults";
      restoreBtn.addEventListener("click", () => this._restoreAllDefaults());
      row.append(restoreBtn);
      return row;
    }
    /**
     * Section header with an inline external link on part of the title.
     * @param {string} prefix
     * @param {string} linkText
     * @param {string} linkHref
     */
    _sectionHeaderLinked(prefix, linkText, linkHref) {
      const head = document.createElement("h2");
      head.append(document.createTextNode(`${prefix} `));
      const link = document.createElement("a");
      link.className = "section-title-link";
      link.href = linkHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = linkText;
      head.append(link);
      return head;
    }
    _restoreAllDefaults() {
      const next = {
        ...DEFAULT_SETTINGS,
        iconVariation: { ...DEFAULT_SETTINGS.iconVariation },
        textVariation: { ...DEFAULT_SETTINGS.textVariation },
        outlineVariation: { ...DEFAULT_SETTINGS.outlineVariation }
      };
      this._settings = next;
      this._saveSettings(250);
      this._refreshPanelAttributes(true);
      this._schedulePersistentColorRules(0);
      this._scheduleDecorate(this._observedRoot || document.body);
      this._withScrollPreserved(() => this._renderPanel());
    }
    /**
     * @param {string} label
     * @param {string} desc
     * @param {keyof Settings} key
     */
    _checkboxRow(label, desc, key) {
      const row = document.createElement("label");
      row.className = "opt";
      if (desc) row.title = desc;
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!this._settings[key];
      cb.addEventListener("change", () => {
        this._settings[key] = cb.checked;
        this._saveSettings(250);
        this._refreshPanelAttributes();
        this._scheduleDecorate();
      });
      const lab = document.createElement("span");
      lab.className = "label";
      lab.textContent = label;
      row.append(cb, lab);
      return row;
    }
    /**
     * @param {keyof Settings} key
     * @param {string} value
     * @param {string} label
     * @param {string} desc
     */
    _radioRow(key, value, label, desc) {
      const row = document.createElement("label");
      row.className = "opt";
      if (desc) row.title = desc;
      const r = document.createElement("input");
      r.type = "radio";
      r.name = `${ROOT_CLASS}-${String(key)}`;
      r.value = value;
      r.checked = this._settings[key] === value;
      r.addEventListener("change", () => {
        if (!r.checked) return;
        if (key === "visualTreatment") {
          this._settings.visualTreatment = value === "chip" ? "chip" : "native";
          this._saveSettings(250);
          this._refreshPanelAttributes();
          this._scheduleDecorate();
          this._withScrollPreserved(() => this._renderPanel());
          return;
        }
        this._settings[key] = value;
        this._saveSettings(250);
        this._refreshPanelAttributes();
        this._scheduleDecorate();
      });
      const lab = document.createElement("span");
      lab.className = "label";
      lab.textContent = label;
      row.append(r, lab);
      return row;
    }
    /**
     * Find the nearest scrollable ancestor of the settings panel.
     * @param {HTMLElement | null} el
     * @returns {HTMLElement | null}
     */
    _scrollParent(el2) {
      let p = el2 ? el2.parentElement : null;
      for (let i = 0; i < 12 && p && p !== document.body; i++) {
        try {
          const cs = getComputedStyle(p);
          if (/(auto|scroll)/.test(cs.overflowY) && p.scrollHeight > p.clientHeight + 1) return p;
        } catch {
        }
        p = p.parentElement;
      }
      return null;
    }
    /** @param {() => void} fn */
    _withScrollPreserved(fn) {
      const scroller = this._scrollParent(this._panelEl);
      const top = scroller ? scroller.scrollTop : 0;
      fn();
      if (scroller) {
        scroller.scrollTop = top;
        requestAnimationFrame(() => {
          try {
            scroller.scrollTop = top;
          } catch {
          }
        });
      }
    }
    /**
     * @param {keyof Settings} key
     * @param {number} min
     * @param {number} max
     * @param {string} unit
     * @param {number} [step]  increment; supports fractional steps (e.g. 0.5 for sub-pixel widths)
     */
    _numberRow(key, min, max, unit, step = 1) {
      const wrap = document.createElement("div");
      wrap.className = `${ROOT_CLASS}-number`;
      const dec = document.createElement("button");
      dec.type = "button";
      dec.className = "num-step";
      dec.textContent = "\u2212";
      const input = document.createElement("input");
      input.type = "number";
      input.min = String(min);
      input.max = String(max);
      input.step = String(step);
      input.value = String(
        /** @type {number} */
        this._settings[key]
      );
      input.className = "num-input";
      const inc = document.createElement("button");
      inc.type = "button";
      inc.className = "num-step";
      inc.textContent = "+";
      const unitEl = document.createElement("span");
      unitEl.className = "num-unit";
      unitEl.textContent = unit;
      const reset = document.createElement("button");
      reset.type = "button";
      reset.className = "num-reset";
      reset.textContent = "Reset";
      const snap = /* @__PURE__ */ __name((n) => Math.round(n / step) * step, "snap");
      const apply = /* @__PURE__ */ __name((n) => {
        const v = Math.max(min, Math.min(max, snap(Number.isFinite(n) ? n : 0)));
        this._settings[key] = v;
        input.value = String(v);
        this._refreshPanelAttributes();
        this._schedulePersistentColorRules(0);
        this._scheduleDecorate(this._observedRoot || document.body);
        this._saveSettings(350);
      }, "apply");
      const commitDraft = /* @__PURE__ */ __name(() => {
        const raw = input.value.trim();
        if (!raw || raw === "-" || raw === "+") {
          input.value = String(
            /** @type {number} */
            this._settings[key]
          );
          return;
        }
        const n = Number(raw);
        if (Number.isFinite(n)) apply(n);
        else input.value = String(
          /** @type {number} */
          this._settings[key]
        );
      }, "commitDraft");
      const draftValue = /* @__PURE__ */ __name(() => {
        const n = Number(input.value);
        return Number.isFinite(n) ? n : (
          /** @type {number} */
          this._settings[key]
        );
      }, "draftValue");
      input.addEventListener("change", commitDraft);
      input.addEventListener("blur", commitDraft);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitDraft();
          input.blur();
        } else if (e.key === "Escape") {
          e.preventDefault();
          input.value = String(
            /** @type {number} */
            this._settings[key]
          );
          input.blur();
        } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          apply(draftValue() + (e.key === "ArrowUp" ? 1 : -1) * (e.shiftKey ? 10 * step : step));
        }
      });
      dec.addEventListener("click", () => apply(draftValue() - step));
      inc.addEventListener("click", () => apply(draftValue() + step));
      reset.addEventListener("click", () => {
        const fallback = (
          /** @type {number} */
          DEFAULT_SETTINGS[key]
        );
        apply(Number.isFinite(fallback) ? fallback : min);
      });
      wrap.append(dec, input, inc, unitEl, reset);
      return wrap;
    }
    /**
     * Compact multi-cell row that packs 2–4 sub-axis numeric inputs (e.g., T/R/B/L
     * or X/Y) into a single grid row. Each cell has a tiny sub-label and a small
     * numeric input; one trailing unit label sits at the end of the row.
     * @param {Array<{key: keyof Settings, sub: string}>} parts
     * @param {number} min
     * @param {number} max
     * @param {string} [unit]
     * @param {number} [step]
     */
    _multiNumberRow(parts, min, max, unit = "", step = 1) {
      const wrap = document.createElement("div");
      wrap.className = `${ROOT_CLASS}-multi`;
      const snap = /* @__PURE__ */ __name((n) => Math.round(n / step) * step, "snap");
      for (const part of parts) {
        const { key, sub } = part;
        const cell = document.createElement("div");
        cell.className = "multi-cell";
        const subEl = document.createElement("span");
        subEl.className = "multi-sub";
        subEl.textContent = sub;
        const input = document.createElement("input");
        input.type = "number";
        input.min = String(min);
        input.max = String(max);
        input.step = String(step);
        input.value = String(
          /** @type {number} */
          this._settings[key]
        );
        input.className = "multi-input";
        const apply = /* @__PURE__ */ __name((n) => {
          const v = Math.max(min, Math.min(max, snap(Number.isFinite(n) ? n : 0)));
          this._settings[key] = v;
          input.value = String(v);
          this._refreshPanelAttributes();
          this._schedulePersistentColorRules(0);
          this._scheduleDecorate(this._observedRoot || document.body);
          this._saveSettings(350);
        }, "apply");
        const commitDraft = /* @__PURE__ */ __name(() => {
          const raw = input.value.trim();
          if (!raw || raw === "-" || raw === "+") {
            input.value = String(
              /** @type {number} */
              this._settings[key]
            );
            return;
          }
          const n = Number(raw);
          if (Number.isFinite(n)) apply(n);
          else input.value = String(
            /** @type {number} */
            this._settings[key]
          );
        }, "commitDraft");
        const draftValue = /* @__PURE__ */ __name(() => {
          const n = Number(input.value);
          return Number.isFinite(n) ? n : (
            /** @type {number} */
            this._settings[key]
          );
        }, "draftValue");
        input.addEventListener("change", commitDraft);
        input.addEventListener("blur", commitDraft);
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commitDraft();
            input.blur();
          } else if (e.key === "Escape") {
            e.preventDefault();
            input.value = String(
              /** @type {number} */
              this._settings[key]
            );
            input.blur();
          } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            apply(draftValue() + (e.key === "ArrowUp" ? 1 : -1) * (e.shiftKey ? 10 * step : step));
          }
        });
        cell.append(subEl, input);
        wrap.append(cell);
      }
      if (unit) {
        const unitEl = document.createElement("span");
        unitEl.className = "multi-unit";
        unitEl.textContent = unit;
        wrap.append(unitEl);
      }
      return wrap;
    }
    /**
     * Merge a partial variation patch and refresh live styling. Same two-mode model as
     * collection-colors' tint groups.
     * @param {'iconVariation' | 'textVariation' | 'outlineVariation'} key
     * @param {Partial<VariationDelta>} patch
     */
    _applyVariationPatch(key, patch) {
      this._settings[key] = { ...this._settings[key], ...patch };
      this._refreshPanelAttributes();
      this._schedulePersistentColorRules(0);
      this._scheduleDecorate(this._observedRoot || document.body);
      this._saveSettings(250);
    }
    /**
     * Tint control ripped from collection-colors' `_renderVariationGroup`: an HSL | Tailwind mode
     * toggle, then either the three HSL sliders or a row of absolute Tailwind shade buttons.
     * @param {'iconVariation' | 'textVariation' | 'outlineVariation'} key
     */
    _variationSliders(key) {
      const v = this._settings[key];
      const mode = v.mode === "tailwind" ? "tailwind" : v.mode === "none" ? "none" : "hsl";
      const group = document.createElement("div");
      group.className = `${ROOT_CLASS}-tint`;
      const modeRow = document.createElement("div");
      modeRow.className = `${ROOT_CLASS}-tint-mode`;
      for (
        const opt of
        /** @type {const} */
        [
          { k: "none", label: "None" },
          { k: "hsl", label: "HSL" },
          { k: "tailwind", label: "Tailwind" }
        ]
      ) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `${ROOT_CLASS}-tint-mode-btn${mode === opt.k ? " is-active" : ""}`;
        btn.textContent = opt.label;
        btn.addEventListener("click", () => {
          if (this._settings[key].mode === opt.k) return;
          this._applyVariationPatch(key, { mode: opt.k });
          this._withScrollPreserved(() => this._renderPanel());
        });
        modeRow.append(btn);
      }
      group.append(modeRow);
      if (mode === "tailwind") {
        const shades = document.createElement("div");
        shades.className = `${ROOT_CLASS}-tint-shades`;
        const active = normalizeTailwindShade(v.tailwindShade);
        for (const shade of TAILWIND_SHADES) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = `${ROOT_CLASS}-shade-btn${active === shade ? " is-active" : ""}`;
          btn.textContent = String(shade);
          btn.addEventListener("click", () => {
            this._applyVariationPatch(key, { mode: "tailwind", tailwindShade: shade });
            this._withScrollPreserved(() => this._renderPanel());
          });
          shades.append(btn);
        }
        group.append(shades);
      } else if (mode === "hsl") {
        const grid = document.createElement("div");
        grid.className = `${ROOT_CLASS}-num-grid`;
        grid.append(
          this._sliderRow(key, "hueShift", HUE_MIN, HUE_MAX, "Hue shift", "\xB0"),
          this._sliderRow(key, "satDelta", SL_MIN, SL_MAX, "Saturation", "%"),
          this._sliderRow(key, "lightDelta", SL_MIN, SL_MAX, "Lightness", "%")
        );
        group.append(grid);
      }
      if (mode !== "none") {
        const agrid = document.createElement("div");
        agrid.className = `${ROOT_CLASS}-num-grid`;
        agrid.append(this._sliderRow(key, "alpha", 0, 100, "Alpha", "%", false, 100));
        group.append(agrid);
      }
      return group;
    }
    /**
     * Slider row — used for HSL variation deltas and the alpha axis. Returns two grid cells
     * (label + control). `signed` shows a +/− prefix (for deltas); pass false for magnitudes
     * like alpha. `resetTo` is the value the Reset button snaps to (0 for deltas, 100 for alpha).
     * @param {'iconVariation' | 'textVariation' | 'outlineVariation'} parentKey
     * @param {'hueShift' | 'satDelta' | 'lightDelta' | 'alpha'} key
     * @param {number} min
     * @param {number} max
     * @param {string} label
     * @param {string} unit
     * @param {boolean} [signed]
     * @param {number} [resetTo]
     */
    _sliderRow(parentKey, key, min, max, label, unit, signed = true, resetTo = 0) {
      const labelEl = document.createElement("div");
      labelEl.className = "num-label";
      labelEl.textContent = label;
      const wrap = document.createElement("div");
      wrap.className = `${ROOT_CLASS}-slider`;
      const range = document.createElement("input");
      range.type = "range";
      range.min = String(min);
      range.max = String(max);
      range.step = "1";
      range.value = String(
        /** @type {any} */
        this._settings[parentKey][key]
      );
      range.className = "slider-input";
      const valueEl = document.createElement("span");
      valueEl.className = "slider-value";
      const fmt = /* @__PURE__ */ __name((n) => {
        const sign = signed ? n > 0 ? "+" : n < 0 ? "\u2212" : "" : "";
        return `${sign}${signed ? Math.abs(n) : n}${unit}`;
      }, "fmt");
      valueEl.textContent = fmt(Number(range.value));
      const reset = document.createElement("button");
      reset.type = "button";
      reset.className = "num-reset";
      reset.textContent = "Reset";
      const apply = /* @__PURE__ */ __name((n) => {
        const v = Math.max(min, Math.min(max, Math.round(Number.isFinite(n) ? n : 0)));
        this._settings[parentKey][key] = v;
        range.value = String(v);
        valueEl.textContent = fmt(v);
        this._refreshPanelAttributes();
        this._schedulePersistentColorRules(80);
        this._saveSettings(900);
      }, "apply");
      range.addEventListener("input", () => apply(Number(range.value)));
      range.addEventListener("change", () => this._saveSettings(150));
      reset.addEventListener("click", () => {
        apply(resetTo);
        this._saveSettings(150);
      });
      const inner = document.createElement("div");
      inner.className = "slider-inner";
      inner.append(range, valueEl, reset);
      wrap.append(inner);
      const frag = document.createDocumentFragment();
      frag.append(labelEl, wrap);
      return frag;
    }
    /**
     * Remove the inline alignment overrides an earlier version stamped onto the panel's
     * ANCESTORS (shared app chrome). Mutating ancestors shifted the entire Thymer interface
     * left whenever the settings panel was visible — never do that again; this only cleans up.
     * @param {HTMLElement} el
     */
    _repairAncestorAlignment(el2) {
      try {
        el2.style.removeProperty("text-align");
        el2.style.removeProperty("margin-left");
        el2.style.removeProperty("margin-right");
        let p = el2.parentElement;
        for (let i = 0; i < 10 && p && p !== document.body; i++) {
          for (const prop of ["text-align", "justify-content", "align-items", "justify-items"]) {
            p.style.removeProperty(prop);
          }
          p = p.parentElement;
        }
      } catch (err) {
        this._log("repairAncestorAlignment failed", err);
      }
    }
    // ─── Logging ──────────────────────────────────────────────────────────────
    _log(...args) {
      if (this._settings.debug) console.debug("[collection-icons]", ...args);
    }
  };
  return __toCommonJS(plugin_exports);
})();
var Plugin = plugins.Plugin;
