/* @ds-bundle: {"format":4,"namespace":"GenerativeGlassDesignSystem_1a4c8e","components":[{"name":"ProjectConstellation","sourcePath":"components/constellation/ProjectConstellation.jsx"},{"name":"FilterChips","sourcePath":"components/forms/FilterChips.jsx"},{"name":"GlassField","sourcePath":"components/forms/GlassField.jsx"},{"name":"GlassSearch","sourcePath":"components/forms/GlassSearch.jsx"},{"name":"GlassSegmented","sourcePath":"components/forms/GlassSegmented.jsx"},{"name":"GlassSelect","sourcePath":"components/forms/GlassSelect.jsx"},{"name":"GlassToggle","sourcePath":"components/forms/GlassToggle.jsx"},{"name":"AuroraField","sourcePath":"components/glass/AuroraField.jsx"},{"name":"Avatar","sourcePath":"components/glass/Avatar.jsx"},{"name":"DotRing","sourcePath":"components/glass/DotRing.jsx"},{"name":"Filament","sourcePath":"components/glass/Filament.jsx"},{"name":"GlassButton","sourcePath":"components/glass/GlassButton.jsx"},{"name":"GlassChip","sourcePath":"components/glass/GlassChip.jsx"},{"name":"GlassIconButton","sourcePath":"components/glass/GlassIconButton.jsx"},{"name":"GlassInput","sourcePath":"components/glass/GlassInput.jsx"},{"name":"GlassSurface","sourcePath":"components/glass/GlassSurface.jsx"},{"name":"StatusBar","sourcePath":"components/glass/StatusBar.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"LanguagePicker","sourcePath":"components/language/LanguagePicker.jsx"},{"name":"DesktopShell","sourcePath":"components/navigation/DesktopShell.jsx"},{"name":"GlassSheet","sourcePath":"components/navigation/GlassSheet.jsx"},{"name":"GlassTabBar","sourcePath":"components/navigation/GlassTabBar.jsx"},{"name":"ProgressGrid","sourcePath":"components/progress/ProgressGrid.jsx"},{"name":"CatalogRow","sourcePath":"components/resources/CatalogRow.jsx"},{"name":"ResourceCard","sourcePath":"components/resources/ResourceCard.jsx"},{"name":"ResourceStack","sourcePath":"components/resources/ResourceStack.jsx"},{"name":"ReviewThread","sourcePath":"components/review/ReviewThread.jsx"},{"name":"KeyTermPopover","sourcePath":"components/scripture/KeyTermPopover.jsx"},{"name":"ScripturePassage","sourcePath":"components/scripture/ScripturePassage.jsx"},{"name":"SyncBadge","sourcePath":"components/scripture/SyncBadge.jsx"},{"name":"SurveyQuestion","sourcePath":"components/survey/SurveyQuestion.jsx"}],"sourceHashes":{"components-loader.js":"ca3a45480b30","components/constellation/ProjectConstellation.jsx":"acc6e800860c","components/forms/FilterChips.jsx":"44c0eac3289e","components/forms/GlassField.jsx":"5797ead7e63c","components/forms/GlassSearch.jsx":"fa0d2066a9ac","components/forms/GlassSegmented.jsx":"05f930880074","components/forms/GlassSelect.jsx":"387a4df7d40c","components/forms/GlassToggle.jsx":"3b5c67d08f1f","components/glass/AuroraField.jsx":"f270ec0f5e49","components/glass/Avatar.jsx":"c78b765471af","components/glass/DotRing.jsx":"eeea422bac45","components/glass/Filament.jsx":"3494fbad99e6","components/glass/GlassButton.jsx":"fd9b07d96b37","components/glass/GlassChip.jsx":"f8cff2dccddd","components/glass/GlassIconButton.jsx":"1bfed28aa792","components/glass/GlassInput.jsx":"09d381870966","components/glass/GlassSurface.jsx":"a31362a1e289","components/glass/StatusBar.jsx":"04a2a95cf03b","components/icons/Icon.jsx":"be1d9a1fbd5e","components/language/LanguagePicker.jsx":"000c036724dc","components/navigation/DesktopShell.jsx":"57c3e8cbc443","components/navigation/GlassSheet.jsx":"19fce46ea113","components/navigation/GlassTabBar.jsx":"ff0e3f931d3d","components/progress/ProgressGrid.jsx":"f561298a48b3","components/resources/CatalogRow.jsx":"f8c89a49d3d5","components/resources/ResourceCard.jsx":"9e4b95caae7d","components/resources/ResourceStack.jsx":"0719febb2c5c","components/review/ReviewThread.jsx":"79c8bb142b1d","components/scripture/KeyTermPopover.jsx":"be6ddd09bc7a","components/scripture/ScripturePassage.jsx":"99794b989dc0","components/scripture/SyncBadge.jsx":"407d72c29612","components/survey/SurveyQuestion.jsx":"06e69f95464e","ui_kits/3d-review/app.jsx":"8b8382a20a70","ui_kits/aquifer-window/app.jsx":"13ac320459fd","ui_kits/fia/app.jsx":"c4edad5f07ea","ui_kits/shared/kit-base.js":"58c282d40f91","world-outline.js":"87cd32124ef2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GenerativeGlassDesignSystem_1a4c8e = window.GenerativeGlassDesignSystem_1a4c8e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components-loader.js
try { (() => {
// Loads the design-system components straight from components/*.jsx without a compiler.
// Transpiles each file in the browser with Babel (loaded by the page) and exposes them on
// window.GenerativeGlass, then fires 'gg-components-ready'. Dev/prototyping path only; a compiled
// bundle replaces this when the project is flagged as a design system.
(function () {
  // Compiled bundle already owns the namespace; do not poll for Babel or refetch JSX.
  if (window.GenerativeGlassDesignSystem_1a4c8e) return;
  const FILES = ['glass/GlassSurface', 'glass/GlassButton', 'glass/GlassChip', 'glass/GlassIconButton', 'glass/GlassInput', 'glass/DotRing', 'glass/Filament', 'glass/Avatar', 'glass/AuroraField', 'glass/StatusBar', 'icons/Icon', 'scripture/SyncBadge', 'scripture/KeyTermPopover', 'scripture/ScripturePassage', 'review/ReviewThread', 'progress/ProgressGrid', 'survey/SurveyQuestion', 'resources/ResourceCard', 'resources/ResourceStack', 'resources/CatalogRow', 'language/LanguagePicker', 'navigation/GlassTabBar', 'navigation/GlassSheet', 'navigation/DesktopShell', 'forms/GlassField', 'forms/GlassSelect', 'forms/GlassToggle', 'forms/GlassSegmented', 'forms/GlassSearch', 'forms/FilterChips', 'constellation/ProjectConstellation'];
  const base = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');
  const NS = window.GenerativeGlass = window.GenerativeGlass || {};
  const ready = () => new Promise(r => {
    const t = () => window.React && window.Babel ? r() : setTimeout(t, 60);
    t();
  });
  window.ggComponentsReady = (async () => {
    await ready();
    for (const f of FILES) {
      let src = await (await fetch(base + 'components/' + f + '.jsx')).text();
      src = src.replace(/^import\s+React\s+from\s+'react';?\s*$/m, '').replace(/^import\s+\{([^}]+)\}\s+from\s+'[^']+';?\s*$/mg, (m, n) => `const {${n}} = NS;`).replace(/^export\s+/mg, '');
      const names = [...src.matchAll(/^(?:function|const)\s+([A-Za-z0-9_]+)/mg)].map(m => m[1]);
      const code = Babel.transform(src + `\n;Object.assign(NS,{${names.join(',')}});`, {
        presets: ['react']
      }).code;
      try {
        new Function('React', 'NS', code)(React, NS);
      } catch (e) {
        console.error('gg component failed', f, e);
      }
    }
    window.dispatchEvent(new CustomEvent('gg-components-ready'));
    return NS;
  })();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "components-loader.js", error: String((e && e.message) || e) }); }

// components/constellation/ProjectConstellation.jsx
try { (() => {
const MOOD = {
  understand: ['#BCD6F4', '#C9C3F0'],
  translate: ['#FBD8BD', '#F6EFC6'],
  revise: ['#C9C3F0', '#F2CFDB'],
  paused: ['#F2CFDB', '#E3E6ED']
};
const W = 1000,
  Hh = 600;
function project(lon, lat) {
  if (typeof window !== 'undefined' && window.ggProject) return window.ggProject(lon, lat);
  return {
    x: (lon + 180) / 360 * 100,
    y: (90 - lat) / 180 * 100
  };
}
function ProjectConstellation({
  regions = [],
  projects = [],
  value,
  onChange,
  map = true,
  zoom,
  onZoom,
  moods = MOOD,
  style,
  ...rest
}) {
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (!map) return;
    let t;
    const w = () => {
      if (window.ggProject && window.d3) tick(x => x + 1);else t = setTimeout(w, 150);
    };
    w();
    return () => clearTimeout(t);
  }, [map]);
  const R = regions.map(r => ({
    ...r,
    ...project(r.lon, r.lat)
  }));
  const zc = R.find(r => r.name === zoom);
  return React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: '5/3',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      background: 'var(--surface-app)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: '-18%',
      background: 'var(--aurora-field)',
      filter: 'blur(28px)',
      opacity: .7
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      transformOrigin: zc ? `${zc.x}% ${zc.y}%` : '50% 50%',
      transform: zc ? 'scale(2.3)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-liquid)'
    }
  }, map ? React.createElement('div', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: 0,
      color: 'var(--text-title)',
      opacity: .55
    }
  }, React.createElement('gg-world-outline', null)) : null, R.map(r => React.createElement('button', {
    key: r.name,
    onClick: () => onZoom && onZoom(zoom === r.name ? null : r.name),
    style: {
      position: 'absolute',
      left: r.x + '%',
      top: r.y - 24 + '%',
      transform: `translateX(-50%) scale(${zc ? 1 / 2.3 : 1})`,
      transformOrigin: '50% 100%',
      padding: '4px 8px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      color: zoom === r.name ? 'var(--text-title)' : 'var(--text-dim)',
      whiteSpace: 'nowrap',
      textTransform: 'uppercase'
    }
  }, r.name)), projects.map((p, i) => {
    const c = R.find(r => r.name === p.region) || {
      x: 50,
      y: 50
    };
    const size = 30 + Math.min(p.books || 1, 12) * 4.5;
    const rec = p.recency ?? .6;
    const sel = value === p.id;
    const [m1, m2] = moods[p.stage] || moods.understand;
    return React.createElement('button', {
      key: p.id || i,
      onClick: () => onChange && onChange(p.id, p),
      title: p.title,
      style: {
        position: 'absolute',
        left: `calc(${c.x + (p.dx || 0)}% - ${size / 2}px)`,
        top: `calc(${c.y + (p.dy || 0)}% - ${size / 2}px)`,
        width: size,
        height: size,
        borderRadius: '50%',
        padding: 0,
        cursor: 'pointer',
        overflow: 'hidden',
        background: 'var(--glass-fill-3)',
        border: p.reported ? '.5px solid rgba(255,255,255,.75)' : '1px dashed var(--text-dim)',
        boxShadow: sel ? 'var(--shadow-float), var(--inner-top), var(--glow-focus)' : 'var(--shadow-card), var(--inner-top)',
        opacity: .45 + .55 * rec,
        filter: `blur(${(1 - rec) * 2.2}px)`,
        transform: sel ? 'scale(1.12)' : 'none',
        transition: 'var(--t-hover)',
        animation: `gg-orbit ${5 + i % 4}s var(--ease-liquid) ${i * .4}s infinite`
      }
    }, React.createElement('span', {
      'aria-hidden': true,
      style: {
        position: 'absolute',
        inset: '-30%',
        background: `radial-gradient(40% 40% at 35% 35%,${m1},transparent 70%),radial-gradient(40% 40% at 68% 70%,${m2},transparent 70%)`,
        filter: 'blur(8px)',
        opacity: .9
      }
    }), p.image ? React.createElement('span', {
      'aria-hidden': true,
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: `url(${p.image}) center/cover`,
        opacity: .55
      }
    }) : null, React.createElement('span', {
      'aria-hidden': true,
      style: {
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'var(--refraction)',
        opacity: .7
      }
    }));
  })));
}
Object.assign(__ds_scope, { ProjectConstellation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/constellation/ProjectConstellation.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChips.jsx
try { (() => {
function FilterChips({
  options = [],
  value = [],
  onChange,
  bleed = true,
  style,
  ...rest
}) {
  const toggle = v => onChange && onChange(value.includes(v) ? value.filter(x => x !== v) : [...value, v]);
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      overflow: bleed ? 'hidden' : 'auto',
      ...style
    },
    ...rest
  }, options.map(o => {
    const v = o.value ?? o,
      l = o.label ?? o,
      a = value.includes(v);
    return React.createElement('button', {
      key: v,
      'aria-pressed': a,
      onClick: () => toggle(v),
      style: {
        flex: 'none',
        height: 36,
        padding: '0 14px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: a ? 'var(--surface-inverse)' : 'var(--glass-fill-3)',
        color: a ? 'var(--text-on-inverse)' : 'var(--text-title)',
        border: a ? '.5px solid transparent' : 'var(--border-glass)',
        boxShadow: a ? 'var(--shadow-card)' : 'var(--shadow-rest), var(--inner-top)',
        font: 'var(--fw-medium) 12px/1 var(--font-core)',
        transition: 'var(--t-hover)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/forms/GlassField.jsx
try { (() => {
function GlassField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      paddingLeft: 14
    }
  }, label) : null, React.createElement('input', {
    type,
    value,
    onChange,
    placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      boxSizing: 'border-box',
      width: '100%',
      height: 48,
      padding: '0 18px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: f ? 'var(--shadow-rest), var(--inner-top), var(--glow-focus)' : 'var(--shadow-rest), var(--inner-top)',
      font: 'var(--type-body)',
      color: 'var(--text-title)',
      outline: 'none',
      transition: 'var(--t-hover)'
    },
    ...rest
  }));
}
Object.assign(__ds_scope, { GlassField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GlassField.jsx", error: String((e && e.message) || e) }); }

// components/forms/GlassSegmented.jsx
try { (() => {
function GlassSegmented({
  options = [],
  value,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const h = size === 'sm' ? 32 : 36;
  return React.createElement('div', {
    role: 'radiogroup',
    style: {
      display: 'flex',
      padding: 4,
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--inner-top)',
      ...style
    },
    ...rest
  }, options.map(o => {
    const v = o.value ?? o,
      l = o.label ?? o,
      a = v === value;
    return React.createElement('button', {
      key: v,
      role: 'radio',
      'aria-checked': a,
      onClick: () => onChange && onChange(v),
      style: {
        flex: size === 'sm' ? 'none' : 1,
        height: h,
        padding: '0 12px',
        borderRadius: 'var(--r-pill)',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: a ? 'var(--surface-solid)' : 'transparent',
        color: a ? 'var(--text-title)' : 'var(--text-muted)',
        boxShadow: a ? 'var(--shadow-rest)' : 'none',
        font: 'var(--fw-semibold) 12px/1 var(--font-core)',
        transition: 'var(--t-hover)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { GlassSegmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GlassSegmented.jsx", error: String((e && e.message) || e) }); }

// components/forms/GlassToggle.jsx
try { (() => {
function GlassToggle({
  label,
  checked = false,
  onChange,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '0 4px 0 14px',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-title)'
    }
  }, label) : null, React.createElement('button', {
    role: 'switch',
    'aria-checked': checked,
    'aria-label': label,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--r-pill)',
      border: 'var(--border-glass)',
      cursor: 'pointer',
      position: 'relative',
      padding: 0,
      background: checked ? 'var(--surface-inverse)' : 'var(--glass-fill-2)',
      boxShadow: 'var(--inner-top)',
      transition: 'background var(--dur-fast) var(--ease-liquid)'
    },
    ...rest
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: checked ? 'var(--text-on-inverse)' : 'var(--surface-solid)',
      boxShadow: 'var(--shadow-rest)',
      transition: 'left var(--dur-fast) var(--ease-liquid)'
    }
  })));
}
Object.assign(__ds_scope, { GlassToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GlassToggle.jsx", error: String((e && e.message) || e) }); }

// components/glass/AuroraField.jsx
try { (() => {
function AuroraField({
  intensity = 1,
  drift = true,
  style,
  children,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      background: 'var(--surface-app)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: '-18%',
      background: 'var(--aurora-field)',
      opacity: intensity,
      filter: 'blur(28px)',
      animation: drift ? 'gg-drift 22s var(--ease-liquid) infinite' : undefined
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, children));
}
Object.assign(__ds_scope, { AuroraField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/AuroraField.jsx", error: String((e && e.message) || e) }); }

// components/glass/Avatar.jsx
try { (() => {
function Avatar({
  src,
  alt = '',
  size = 54,
  ring = false,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-pill)',
      overflow: 'hidden',
      flex: 'none',
      background: 'var(--accent-red)',
      boxShadow: ring ? '0 0 0 2px rgba(255,255,255,.85), var(--shadow-rest)' : 'var(--shadow-rest)',
      ...style
    },
    ...rest
  }, src ? React.createElement('img', {
    src,
    alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/glass/DotRing.jsx
try { (() => {
function DotRing({
  size = 170,
  rings = 7,
  dots = 30,
  color = 'rgba(70,86,112,.30)',
  children,
  style,
  ...rest
}) {
  const pts = [];
  for (let r = 0; r < rings; r++) {
    const rad = size / 2 * (0.34 + 0.66 * (r / (rings - 1)));
    const n = Math.round(dots * (0.4 + 0.6 * (r / (rings - 1))));
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2 + r * 0.16;
      pts.push({
        x: size / 2 + Math.cos(a) * rad,
        y: size / 2 + Math.sin(a) * rad,
        o: 0.25 + 0.75 * (1 - r / rings)
      });
    }
  }
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    },
    ...rest
  }, React.createElement('svg', {
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0,
      animation: 'gg-breathe 4.5s var(--ease-liquid) infinite'
    }
  }, pts.map((p, i) => React.createElement('circle', {
    key: i,
    cx: p.x,
    cy: p.y,
    r: .9,
    fill: color,
    opacity: p.o
  }))), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { DotRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/DotRing.jsx", error: String((e && e.message) || e) }); }

// components/glass/Filament.jsx
try { (() => {
function Filament({
  height = 70,
  width = 120,
  branch = false,
  color = 'rgba(120,132,152,.45)',
  node = true,
  style,
  ...rest
}) {
  const w = branch ? width : 2,
    mid = w / 2;
  const d = branch ? `M ${mid} 0 C ${mid} ${height * .55}, 8 ${height * .45}, 8 ${height} M ${mid} 0 C ${mid} ${height * .55}, ${w - 8} ${height * .45}, ${w - 8} ${height}` : `M 1 0 L 1 ${height}`;
  return React.createElement('svg', {
    width: w,
    height,
    viewBox: `0 0 ${w} ${height}`,
    style: {
      overflow: 'visible',
      ...style
    },
    ...rest
  }, React.createElement('path', {
    d,
    stroke: color,
    strokeWidth: 1,
    fill: 'none',
    strokeLinecap: 'round'
  }), node ? React.createElement('circle', {
    cx: mid,
    cy: height,
    r: 3.5,
    fill: 'var(--surface-solid)',
    stroke: color,
    strokeWidth: 1
  }) : null);
}
Object.assign(__ds_scope, { Filament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/Filament.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassButton.jsx
try { (() => {
function GlassButton({
  variant = 'glass',
  size = 'md',
  full = false,
  leading,
  trailing,
  style,
  children,
  ...rest
}) {
  const pad = size === 'sm' ? '8px 14px' : size === 'lg' ? '15px 26px' : '12px 20px';
  const fs = size === 'sm' ? 'var(--fs-caption)' : size === 'lg' ? 'var(--fs-body)' : 'var(--fs-label)';
  const V = {
    glass: {
      background: 'var(--glass-fill-3)',
      color: 'var(--text-title)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-rest), var(--inner-top)'
    },
    solid: {
      background: 'var(--paper-000)',
      color: 'var(--ink-900)',
      border: '.5px solid rgba(255,255,255,.9)',
      boxShadow: 'var(--shadow-card)'
    },
    dark: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      border: '.5px solid rgba(255,255,255,.14)',
      boxShadow: 'var(--shadow-card)'
    },
    night: {
      background: 'var(--glass-fill-night)',
      color: 'var(--on-night-900)',
      border: 'var(--border-night)',
      boxShadow: 'var(--shadow-night)',
      backdropFilter: 'blur(var(--blur-medium))',
      WebkitBackdropFilter: 'blur(var(--blur-medium))'
    },
    quiet: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '.5px solid transparent',
      boxShadow: 'none'
    }
  }[variant];
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  return React.createElement('button', {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--gap-inline)',
      whiteSpace: 'nowrap',
      width: full ? '100%' : undefined,
      padding: pad,
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      font: `var(--fw-semibold) ${fs}/1 var(--font-core)`,
      letterSpacing: 'var(--ls-body)',
      transition: 'var(--t-hover)',
      transform: a ? 'scale(var(--press-scale))' : h ? 'var(--hover-lift)' : 'none',
      filter: h ? 'brightness(1.04)' : 'none',
      ...V,
      ...style
    },
    ...rest
  }, leading, children, trailing);
}
Object.assign(__ds_scope, { GlassButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassButton.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassChip.jsx
try { (() => {
function GlassChip({
  leading,
  tone = 'light',
  size = 'md',
  style,
  children,
  ...rest
}) {
  const night = tone === 'night';
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      padding: size === 'sm' ? '4px 9px' : '5px 11px',
      borderRadius: 'var(--r-pill)',
      background: night ? 'rgba(255,255,255,.16)' : 'var(--glass-fill-3)',
      color: night ? 'var(--on-night-900)' : 'var(--text-muted)',
      border: night ? '.5px solid rgba(255,255,255,.18)' : 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-soft))',
      WebkitBackdropFilter: 'blur(var(--blur-soft))',
      font: `var(--fw-medium) ${size === 'sm' ? 'var(--fs-overline)' : 'var(--fs-micro)'}/1.1 var(--font-core)`,
      letterSpacing: '.01em',
      whiteSpace: 'nowrap',
      ...style
    },
    ...rest
  }, leading, children);
}
Object.assign(__ds_scope, { GlassChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassChip.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassIconButton.jsx
try { (() => {
function GlassIconButton({
  size = 52,
  tone = 'light',
  label,
  style,
  children,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  const night = tone === 'night',
    dark = tone === 'dark';
  return React.createElement('button', {
    'aria-label': label,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      flex: 'none',
      background: dark ? 'var(--surface-inverse)' : night ? 'var(--glass-fill-night)' : 'var(--glass-fill-3)',
      color: dark ? 'var(--text-on-inverse)' : night ? 'var(--on-night-900)' : 'var(--text-body)',
      border: night ? 'var(--border-night)' : dark ? '.5px solid rgba(255,255,255,.14)' : 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-medium)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-medium)) var(--sat-glass)',
      boxShadow: night || dark ? 'var(--shadow-night)' : `var(--shadow-rest), var(--inner-top)${h ? ', var(--glow-focus)' : ''}`,
      transition: 'var(--t-hover)',
      transform: a ? 'scale(var(--press-scale))' : h ? 'var(--hover-lift)' : 'none',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { GlassIconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassIconButton.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassInput.jsx
try { (() => {
function GlassInput({
  placeholder = 'Type a message',
  value,
  onChange,
  leading,
  trailing,
  height = 58,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      height,
      padding: '0 var(--sp-9)',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      boxShadow: f ? 'var(--shadow-rest), var(--inner-top), var(--glow-focus)' : 'var(--shadow-rest), var(--inner-top)',
      transition: 'var(--t-hover)',
      ...style
    }
  }, leading, React.createElement('input', {
    value,
    onChange,
    placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-title)'
    },
    ...rest
  }), trailing);
}
Object.assign(__ds_scope, { GlassInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassInput.jsx", error: String((e && e.message) || e) }); }

// components/glass/GlassSurface.jsx
try { (() => {
const FILL = {
  1: 'var(--glass-fill-1)',
  2: 'var(--glass-fill-2)',
  3: 'var(--glass-fill-3)',
  4: 'var(--glass-fill-4)'
};
const BLUR = {
  sheer: 'var(--blur-sheer)',
  soft: 'var(--blur-soft)',
  medium: 'var(--blur-medium)',
  strong: 'var(--blur-strong)',
  heavy: 'var(--blur-heavy)'
};
const RAD = {
  sm: 'var(--r-sm)',
  md: 'var(--r-md)',
  lg: 'var(--r-lg)',
  xl: 'var(--r-xl)',
  '2xl': 'var(--r-2xl)',
  pill: 'var(--r-pill)'
};
const SHADOW = {
  none: 'none',
  rest: 'var(--shadow-rest)',
  card: 'var(--shadow-card)',
  float: 'var(--shadow-float)'
};
function GlassSurface({
  level = 2,
  blur = 'medium',
  radius = 'xl',
  shadow = 'card',
  tone = 'light',
  refraction = true,
  float = false,
  as = 'div',
  style,
  children,
  ...rest
}) {
  const night = tone === 'night';
  const s = {
    position: 'relative',
    background: night ? level >= 3 ? 'var(--glass-fill-night-strong)' : 'var(--glass-fill-night)' : FILL[level],
    backdropFilter: `blur(${BLUR[blur]}) var(--sat-glass)`,
    WebkitBackdropFilter: `blur(${BLUR[blur]}) var(--sat-glass)`,
    border: night ? 'var(--border-night)' : 'var(--border-glass)',
    borderRadius: RAD[radius] || radius,
    boxShadow: night ? 'var(--shadow-night), var(--inner-top)' : `${SHADOW[shadow]}, var(--inner-top), var(--inner-edge)`,
    color: night ? 'var(--text-on-night)' : 'var(--text-body)',
    animation: float ? 'gg-float var(--float-cycle) var(--ease-liquid) infinite' : undefined,
    ...style
  };
  return React.createElement(as, {
    style: s,
    ...rest
  }, refraction && !night ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      background: 'var(--refraction)',
      opacity: .6,
      pointerEvents: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { GlassSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/GlassSurface.jsx", error: String((e && e.message) || e) }); }

// components/glass/StatusBar.jsx
try { (() => {
function StatusBar({
  time = '9:41',
  tone = 'light',
  style,
  ...rest
}) {
  const c = tone === 'night' ? 'var(--paper-000)' : 'var(--text-title)';
  const bar = h => React.createElement('rect', {
    width: 3,
    height: h,
    y: 11 - h,
    rx: 1,
    fill: c
  });
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px var(--sp-11) 0',
      font: 'var(--fw-semibold) 15px/1 var(--font-numeric)',
      color: c,
      ...style
    },
    ...rest
  }, React.createElement('span', null, time), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement('svg', {
    width: 18,
    height: 11
  }, [4, 6, 8.5, 11].map((h, i) => React.createElement('g', {
    key: i,
    transform: `translate(${i * 4.6},0)`
  }, bar(h)))), React.createElement('svg', {
    width: 16,
    height: 12,
    viewBox: '0 0 16 12',
    fill: c
  }, React.createElement('path', {
    d: 'M8 10.4 5.6 8a3.4 3.4 0 0 1 4.8 0zM8 6.2a5.7 5.7 0 0 0-4 1.6L2.6 6.4a7.7 7.7 0 0 1 10.8 0L12 7.8a5.7 5.7 0 0 0-4-1.6zM8 2.2a9.7 9.7 0 0 0-6.8 2.8L0 3.7a11.5 11.5 0 0 1 16 0L14.8 5A9.7 9.7 0 0 0 8 2.2z'
  })), React.createElement('svg', {
    width: 25,
    height: 12,
    viewBox: '0 0 25 12'
  }, React.createElement('rect', {
    x: .5,
    y: .5,
    width: 21,
    height: 11,
    rx: 3.2,
    fill: 'none',
    stroke: c,
    opacity: .4
  }), React.createElement('rect', {
    x: 2,
    y: 2,
    width: 18,
    height: 8,
    rx: 2,
    fill: c
  }), React.createElement('path', {
    d: 'M23 4.2v3.6a2 2 0 0 0 0-3.6z',
    fill: c,
    opacity: .4
  }))));
}
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/glass/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
// Glyph outlines are Lucide (MIT, lucide.dev) — the source frames ship no icon set,
// so Lucide is the flagged substitution: 24px grid, 2px round stroke, no fills.
const P = {
  mic: ['M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z', 'M19 10v2a7 7 0 0 1-14 0v-2', 'M12 19v3'],
  navigation: ['M3 11l19-9-9 19-2-8-8-2z'],
  plus: ['M5 12h14', 'M12 5v14'],
  chevronLeft: ['M15 18l-6-6 6-6'],
  chevronRight: ['M9 18l6-6-6-6'],
  arrowUpRight: ['M7 17L17 7', 'M7 7h10v10'],
  bookmark: ['M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'],
  maximize: ['M15 3h6v6', 'M9 21H3v-6', 'M21 3l-7 7', 'M3 21l7-7'],
  minimize: ['M8 3v3a2 2 0 0 1-2 2H3', 'M21 8h-3a2 2 0 0 1-2-2V3', 'M3 16h3a2 2 0 0 1 2 2v3', 'M16 21v-3a2 2 0 0 1 2-2h3'],
  moon: ['M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'],
  sun: ['M12 4V2', 'M12 22v-2', 'M4 12H2', 'M22 12h-2', 'M6.3 6.3L4.9 4.9', 'M19.1 19.1l-1.4-1.4', 'M6.3 17.7l-1.4 1.4', 'M19.1 4.9l-1.4 1.4'],
  delete: ['M20 6H9l-5 6 5 6h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z', 'M16 10l-4 4', 'M12 10l4 4'],
  shift: ['M12 3l8 9h-4v7H8v-7H4z'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'M21 21l-4.3-4.3'],
  compass: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M16.2 7.8l-2.2 6.4-6.4 2.2 2.2-6.4z'],
  sparkle: ['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z'],
  // BT additions (Lucide): book, headphones, users, check, cloudOff, globe, languages, x
  book: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'],
  headphones: ['M3 18v-6a9 9 0 0 1 18 0v6', 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'],
  users: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  check: ['M20 6L9 17l-5-5'],
  cloudOff: ['M22.6 16.5A5 5 0 0 0 18 10h-1.3A8 8 0 0 0 5.5 5.5', 'M3 3l18 18', 'M5 10A5 5 0 0 0 7 19h11'],
  globe: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  languages: ['M5 8l6 6', 'M4 14l6-6 2-3', 'M2 5h12', 'M7 2h1', 'M22 22l-5-10-5 10', 'M14 18h6'],
  x: ['M18 6L6 18', 'M6 6l12 12']
};
function Icon({
  name,
  size = 20,
  stroke = 1.7,
  color = 'currentColor',
  style,
  ...rest
}) {
  const d = P[name];
  if (!d) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    ...rest
  }, d.map((p, i) => React.createElement('path', {
    key: i,
    d: p
  })));
}
const iconNames = Object.keys(P);
Object.assign(__ds_scope, { Icon, iconNames });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/GlassSearch.jsx
try { (() => {
function GlassSearch({
  value,
  onChange,
  placeholder = 'Search',
  height = 52,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height,
      padding: '0 20px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      boxShadow: f ? 'var(--shadow-rest), var(--inner-top), var(--glow-focus)' : 'var(--shadow-rest), var(--inner-top)',
      transition: 'var(--t-hover)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 18,
    color: 'var(--text-muted)'
  }), React.createElement('input', {
    type: 'search',
    value,
    onChange,
    placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-body)',
      color: 'var(--text-title)'
    },
    ...rest
  }));
}
Object.assign(__ds_scope, { GlassSearch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GlassSearch.jsx", error: String((e && e.message) || e) }); }

// components/forms/GlassSelect.jsx
try { (() => {
function GlassSelect({
  label,
  value,
  options = [],
  onChange,
  style,
  ...rest
}) {
  return React.createElement('label', {
    style: {
      display: 'grid',
      gap: 6,
      position: 'relative',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      paddingLeft: 14
    }
  }, label) : null, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 48
    }
  }, React.createElement('select', {
    value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 40px 0 18px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-rest), var(--inner-top)',
      font: 'var(--type-body)',
      color: 'var(--text-title)',
      outline: 'none'
    },
    ...rest
  }, options.map(o => React.createElement('option', {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement('span', {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      transform: 'rotate(90deg)',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 16,
    color: 'var(--text-dim)'
  }))));
}
Object.assign(__ds_scope, { GlassSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GlassSelect.jsx", error: String((e && e.message) || e) }); }

// components/language/LanguagePicker.jsx
try { (() => {
const FACE = {
  ar: 'var(--font-scripture-arabic)',
  fa: 'var(--font-scripture-arabic)',
  he: 'var(--font-scripture-hebrew)',
  hi: 'var(--font-scripture-devanagari)',
  ne: 'var(--font-scripture-devanagari)',
  gu: 'var(--font-scripture-gujarati)',
  zh: 'var(--font-scripture-han)',
  el: 'var(--font-scripture-greek)'
};
const TYPES = ['Bible', 'Notes', 'Words', 'Maps'];
const TITLE = {
  filter: 'Resources in',
  attribute: 'Project language',
  target: 'Translate into',
  locale: 'App language'
};
const hasAny = c => /a|i/.test(c || '');
function LanguagePicker({
  languages = [],
  context = 'attribute',
  value,
  onChange,
  suggested = [],
  surface = 'popover',
  types = TYPES,
  title,
  placeholder = 'Name, autonym, code or region',
  fallbackNote,
  style,
  ...rest
}) {
  const [q, setQ] = React.useState('');
  const lq = q.trim().toLowerCase();
  const match = r => !lq || [r.english, r.autonym, r.code, r.region, ...(r.aliases || [])].filter(Boolean).some(v => v.toLowerCase().includes(lq));
  let pool = languages.filter(match);
  if (context === 'filter') pool = pool.filter(r => hasAny(r.coverage));
  const sugg = lq ? [] : suggested.map(c => pool.find(r => r.code === c)).filter(Boolean);
  const rest_ = pool.filter(r => lq || !suggested.includes(r.code)).sort((a, b) => a.english.localeCompare(b.english));
  const note = r => {
    if (context === 'locale') return r.localized ? 'App available in this language' : fallbackNote || 'App not localized yet · shown in a gateway language';
    if (!hasAny(r.coverage)) return 'No resources yet · you can still choose it';
    const ai = (r.coverage.match(/i/g) || []).length,
      av = (r.coverage.match(/a/g) || []).length;
    return ai ? `${av} available · ${ai} AI-translatable` : 'Full coverage';
  };
  const chip = (st, t) => React.createElement('span', {
    key: t,
    title: `${t} · ${st === 'a' ? 'available' : st === 'i' ? 'AI-translatable' : 'none'}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 7px',
      borderRadius: 'var(--r-pill)',
      font: 'var(--fw-medium) 9px/1.1 var(--font-core)',
      letterSpacing: '.02em',
      whiteSpace: 'nowrap',
      background: st === 'n' ? 'transparent' : 'var(--glass-fill-4)',
      border: st === 'n' ? '1px dashed var(--text-dim)' : 'var(--border-glass)',
      color: st === 'n' ? 'var(--text-dim)' : 'var(--text-title)',
      boxShadow: st === 'n' ? 'none' : 'var(--inner-top)'
    }
  }, t, st === 'i' ? React.createElement('span', {
    style: {
      marginInlineStart: 4,
      padding: '1px 4px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: 'var(--fw-semibold) 8px/1.1 var(--font-core)',
      letterSpacing: '.04em'
    }
  }, 'AI') : null);
  const row = r => {
    const a = value === r.code;
    const base = (r.code || '').split('-')[0];
    return React.createElement('button', {
      key: r.code,
      onClick: () => onChange && onChange(r.code, r),
      style: {
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        padding: '10px 12px',
        borderRadius: 'var(--r-sm)',
        border: '.5px solid transparent',
        background: a ? 'var(--glass-fill-3)' : 'transparent',
        boxShadow: a ? 'var(--inner-top), var(--glow-focus)' : 'none',
        cursor: 'pointer',
        textAlign: 'start',
        color: 'inherit',
        opacity: hasAny(r.coverage) || context === 'locale' ? 1 : .72,
        transition: 'var(--t-hover)'
      }
    }, React.createElement('span', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: 0,
        flex: 1
      }
    }, React.createElement('span', {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'baseline',
        flexWrap: 'wrap'
      }
    }, React.createElement('span', {
      dir: r.dir || 'ltr',
      lang: r.code,
      style: {
        font: `500 15px/1.3 ${FACE[base] || 'var(--font-core)'}`,
        color: 'var(--text-title)',
        letterSpacing: FACE[base] ? 0 : '-0.01em'
      }
    }, r.autonym), React.createElement('span', {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, r.english), React.createElement('span', {
      style: {
        font: '10px/1.2 var(--font-mono)',
        color: 'var(--text-dim)'
      }
    }, r.code)), React.createElement('span', {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-dim)'
      }
    }, note(r))), r.coverage ? React.createElement('span', {
      style: {
        display: 'flex',
        gap: 4,
        flex: 'none',
        alignItems: 'center'
      }
    }, r.coverage.split('').map((st, i) => chip(st, types[i] || ''))) : null);
  };
  const group = (label, rows) => rows.length ? [React.createElement('div', {
    key: 'h' + label,
    style: {
      padding: '10px 12px 4px',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-dim)'
    }
  }, label), ...rows.map(row)] : [];
  const total = sugg.length + rest_.length;
  const sheet = surface === 'sheet';
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: sheet ? 390 : 520,
      padding: sheet ? '12px 16px 22px' : '16px 16px 18px',
      borderRadius: sheet ? '34px 34px 22px 22px' : 'var(--r-xl)',
      background: 'var(--material-floating)',
      backdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-float), var(--inner-top)',
      color: 'var(--text-title)',
      ...style
    },
    ...rest
  }, sheet ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--text-faint)',
      margin: '0 auto 12px',
      display: 'block'
    }
  }) : null, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-title)',
      whiteSpace: 'nowrap'
    }
  }, title || TITLE[context]), React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, `${total} of ${languages.length}${context === 'filter' ? ' with resources' : ''}`)), React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 44,
      padding: '0 16px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--inner-top)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'search',
    size: 16,
    color: 'var(--text-muted)'
  }), React.createElement('input', {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--type-label)',
      color: 'var(--text-title)'
    }
  }), q ? React.createElement('button', {
    onClick: () => setQ(''),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      padding: 0
    }
  }, 'Clear') : null), React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'grid',
      gap: 2,
      maxHeight: 360,
      overflow: 'auto',
      paddingRight: 2
    }
  }, ...group('Suggested', sugg), ...group(lq ? `Matches for “${q}”` : 'All languages', rest_), total === 0 ? React.createElement('div', {
    style: {
      padding: '24px 12px',
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, context === 'filter' ? `No language with resources matches “${q}”. Switch to a project context to see every language.` : `Nothing matches “${q}”. Try the English name, the code, or a country.`) : null), React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      font: 'var(--type-caption)',
      color: 'var(--text-dim)',
      padding: '0 4px'
    }
  }, React.createElement('span', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      width: 14,
      height: 10,
      borderRadius: 3,
      background: 'var(--glass-fill-4)',
      border: 'var(--border-glass)'
    }
  }), 'Available'), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      padding: '1px 4px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: 'var(--fw-semibold) 8px/1.1 var(--font-core)'
    }
  }, 'AI'), 'AI-translatable'), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      width: 14,
      height: 10,
      borderRadius: 3,
      border: '1px dashed var(--text-dim)',
      boxSizing: 'border-box'
    }
  }), 'None')));
}
Object.assign(__ds_scope, { LanguagePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/language/LanguagePicker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DesktopShell.jsx
try { (() => {
function DesktopShell({
  appName = '3D Review',
  action,
  groups = [],
  phases = [],
  phase,
  onPhase,
  crumb,
  title,
  children,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '210px minmax(0,1fr)',
      minHeight: 440,
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      background: 'var(--aurora-field)',
      ...style
    },
    ...rest
  }, React.createElement('aside', {
    style: {
      padding: '20px 14px',
      background: 'var(--glass-fill-1)',
      borderRight: 'var(--border-glass-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--fw-medium) 14px/1.2 var(--font-core)',
      letterSpacing: '-0.045em',
      color: 'var(--text-title)',
      padding: '0 6px'
    }
  }, appName), action, React.createElement('nav', {
    style: {
      display: 'grid',
      gap: 2
    }
  }, groups.map((g, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement('div', {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-dim)',
      padding: i ? '10px 8px 4px' : '6px 8px 4px'
    }
  }, g.label), (g.items && g.items.length ? g.items : [{
    label: g.empty || 'Nothing yet',
    muted: true
  }]).map((it, j) => React.createElement('button', {
    key: j,
    onClick: it.onSelect,
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 6,
      width: '100%',
      padding: '7px 8px',
      borderRadius: 'var(--r-xs)',
      border: 'none',
      textAlign: 'start',
      cursor: it.onSelect ? 'pointer' : 'default',
      background: it.active ? 'var(--glass-fill-3)' : 'transparent',
      font: 'var(--type-caption)',
      color: it.muted ? 'var(--text-muted)' : it.active ? 'var(--text-title)' : 'var(--text-body)'
    }
  }, React.createElement('span', null, it.label), it.meta ? React.createElement('span', {
    style: {
      color: 'var(--text-dim)'
    }
  }, it.meta) : null)))))), React.createElement('main', {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      flex: 'none',
      whiteSpace: 'nowrap'
    }
  }, crumb ? React.createElement('div', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, crumb) : null, title ? React.createElement('div', {
    style: {
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-title)'
    }
  }, title) : null), phases.length ? React.createElement('div', {
    style: {
      display: 'flex',
      padding: 4,
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--inner-top)'
    }
  }, phases.map(p => {
    const a = p === phase;
    return React.createElement('button', {
      key: p,
      onClick: () => onPhase && onPhase(p),
      style: {
        flex: 'none',
        height: 32,
        padding: '0 12px',
        borderRadius: 'var(--r-pill)',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        background: a ? 'var(--surface-solid)' : 'transparent',
        color: a ? 'var(--text-title)' : 'var(--text-muted)',
        boxShadow: a ? 'var(--shadow-rest)' : 'none',
        font: 'var(--fw-semibold) 12px/1 var(--font-core)',
        transition: 'var(--t-hover)'
      }
    }, p);
  })) : null), children));
}
Object.assign(__ds_scope, { DesktopShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DesktopShell.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlassSheet.jsx
try { (() => {
function GlassSheet({
  open = true,
  title,
  description,
  actions,
  children,
  behind,
  height = 'auto',
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      ...style
    },
    ...rest
  }, behind ? React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 18,
      transition: 'all var(--dur-slow) var(--ease-damp)',
      transform: open ? 'scale(.94)' : 'none',
      filter: open ? 'blur(6px)' : 'none',
      opacity: open ? .5 : 1
    }
  }, behind) : null, React.createElement('div', {
    role: 'dialog',
    'aria-hidden': !open,
    style: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '12px 18px 22px',
      borderRadius: 'var(--r-2xl) var(--r-2xl) 0 0',
      background: 'var(--material-floating)',
      backdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      border: 'var(--border-glass)',
      borderBottom: 'none',
      boxShadow: 'var(--shadow-float), var(--inner-top)',
      transform: open ? 'none' : 'translateY(105%)',
      transition: 'transform var(--dur-slow) var(--ease-damp)',
      height
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 36,
      height: 4,
      borderRadius: 2,
      background: 'var(--text-faint)',
      margin: '0 auto',
      display: 'block'
    }
  }), title ? React.createElement('div', {
    style: {
      marginTop: 14,
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-title)'
    }
  }, title) : null, description ? React.createElement('div', {
    style: {
      marginTop: 4,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, description) : null, children, actions ? React.createElement('div', {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 8
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { GlassSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlassSheet.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlassTabBar.jsx
try { (() => {
function GlassTabBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 6,
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      boxShadow: 'var(--shadow-float), var(--inner-top)',
      ...style
    },
    ...rest
  }, items.map(it => {
    const a = it.id === value;
    return React.createElement('button', {
      key: it.id,
      role: 'tab',
      'aria-selected': a,
      'aria-label': it.label,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 44,
        padding: a ? '0 18px 0 14px' : '0 13px',
        borderRadius: 'var(--r-pill)',
        border: 'none',
        cursor: 'pointer',
        background: a ? 'var(--surface-inverse)' : 'transparent',
        color: a ? 'var(--text-on-inverse)' : 'var(--text-muted)',
        font: 'var(--fw-semibold) 13px/1 var(--font-core)',
        transition: 'var(--t-hover)'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), a ? React.createElement('span', null, it.label) : null);
  }));
}
Object.assign(__ds_scope, { GlassTabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlassTabBar.jsx", error: String((e && e.message) || e) }); }

// components/progress/ProgressGrid.jsx
try { (() => {
const STAGE = {
  understand: ['Understand', 'var(--aurora-sky)'],
  translate: ['Translate', 'var(--aurora-peach)'],
  revise: ['Revise and check', 'var(--aurora-lavender)'],
  done: ['Done', 'var(--aurora-mint)']
};
function ProgressGrid({
  books = [],
  stages = STAGE,
  legend = true,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      padding: '14px 16px',
      borderRadius: 'var(--r-lg)',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-card), var(--inner-top)',
      display: 'grid',
      gap: 8,
      ...style
    },
    ...rest
  }, books.map((b, i) => {
    const done = b.chapters.filter(s => s === 'done').length;
    return React.createElement('div', {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '82px minmax(0,1fr) 44px',
        gap: 10,
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        font: 'var(--type-label)',
        color: 'var(--text-title)'
      }
    }, b.book), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 3,
        flexWrap: 'wrap'
      }
    }, b.chapters.map((s, j) => React.createElement('span', {
      key: j,
      title: `Chapter ${j + 1}${s && stages[s] ? ' · ' + stages[s][0] : ''}`,
      style: {
        display: 'block',
        width: 14,
        height: 14,
        borderRadius: 'var(--r-key)',
        background: s && stages[s] ? stages[s][1] : 'var(--glass-fill-1)',
        border: s ? 'none' : 'var(--border-glass-soft)',
        boxShadow: s ? 'var(--inner-top)' : 'none'
      }
    }))), React.createElement('span', {
      style: {
        font: '11px var(--font-mono)',
        color: 'var(--text-dim)',
        textAlign: 'right'
      }
    }, Math.round(done / b.chapters.length * 100) + '%'));
  }), legend ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, Object.keys(stages).map(k => React.createElement('span', {
    key: k,
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: stages[k][1]
    }
  }), stages[k][0]))) : null);
}
Object.assign(__ds_scope, { ProgressGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/ProgressGrid.jsx", error: String((e && e.message) || e) }); }

// components/resources/CatalogRow.jsx
try { (() => {
const FACE = {
  ar: 'var(--font-scripture-arabic)',
  he: 'var(--font-scripture-hebrew)',
  hi: 'var(--font-scripture-devanagari)',
  ne: 'var(--font-scripture-devanagari)',
  gu: 'var(--font-scripture-gujarati)',
  el: 'var(--font-scripture-greek)',
  grc: 'var(--font-scripture-greek)',
  zh: 'var(--font-scripture-han)'
};
function CatalogRow({
  id,
  title,
  subject,
  lang = 'en',
  dir = 'ltr',
  release,
  meta,
  onOpen,
  first = false,
  style,
  ...rest
}) {
  const base = (lang || 'en').split('-')[0];
  return React.createElement('button', {
    onClick: onOpen,
    style: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 14,
      alignItems: 'center',
      width: '100%',
      padding: '12px 16px',
      border: 'none',
      borderTop: first ? 'none' : 'var(--border-hairline)',
      background: 'transparent',
      cursor: onOpen ? 'pointer' : 'default',
      textAlign: 'start',
      color: 'inherit',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      minWidth: 0
    }
  }, subject ? React.createElement('div', {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, subject) : null, React.createElement('div', {
    dir,
    lang,
    style: {
      font: `500 15px/1.35 ${FACE[base] || 'var(--font-core)'}`,
      color: 'var(--text-title)',
      marginTop: 3,
      textAlign: dir === 'rtl' ? 'end' : 'start',
      letterSpacing: FACE[base] ? 0 : '-0.01em'
    }
  }, title), id ? React.createElement('div', {
    style: {
      marginTop: 3,
      font: '11px/1.3 var(--font-mono)',
      color: 'var(--text-dim)'
    }
  }, id) : null), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 5,
      flex: 'none'
    }
  }, release ? React.createElement('span', {
    style: {
      padding: '4px 9px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      font: 'var(--fw-medium) 10px/1.1 var(--font-mono)',
      color: 'var(--text-title)'
    }
  }, release) : null, meta ? React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { CatalogRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resources/CatalogRow.jsx", error: String((e && e.message) || e) }); }

// components/resources/ResourceCard.jsx
try { (() => {
function ResourceCard({
  type,
  title,
  meta,
  image,
  onOpen,
  style,
  ...rest
}) {
  return React.createElement('button', {
    onClick: onOpen,
    style: {
      display: 'block',
      textAlign: 'start',
      padding: 0,
      cursor: onOpen ? 'pointer' : 'default',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-card), var(--inner-top)',
      color: 'inherit',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      position: 'relative',
      height: 90,
      background: image ? `url(${image}) center/cover, var(--glass-fill-2)` : 'var(--glass-fill-2)'
    }
  }, type ? React.createElement('span', {
    style: {
      position: 'absolute',
      left: 8,
      top: 8,
      padding: '4px 8px',
      borderRadius: 'var(--r-pill)',
      background: 'rgba(255,255,255,.85)',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, type) : null), React.createElement('div', {
    style: {
      padding: '10px 12px 12px'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--fw-semibold) 13px/1.2 var(--font-core)',
      color: 'var(--text-title)'
    }
  }, title), meta ? React.createElement('div', {
    style: {
      marginTop: 3,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { ResourceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resources/ResourceCard.jsx", error: String((e && e.message) || e) }); }

// components/resources/ResourceStack.jsx
try { (() => {
function ResourceStack({
  items = [],
  height = 150,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const rot = [-8, -2, 6],
    dx = [-38, 0, 38],
    top = [22, 18, 26];
  return React.createElement('div', {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      height,
      ...style
    },
    ...rest
  }, items.slice(0, 3).map((it, i) => React.createElement('div', {
    key: i,
    title: it.title,
    style: {
      position: 'absolute',
      left: '50%',
      top: top[i],
      width: 150,
      height: 96,
      borderRadius: 'var(--r-md)',
      transform: `translateX(-50%) rotate(${rot[i] * (h ? 1.6 : 1)}deg) translateX(${dx[i] * (h ? 1.5 : 1)}px)`,
      transition: 'transform var(--dur-slow) var(--ease-liquid)',
      background: `url(${it.image}) center/cover, var(--glass-fill-3)`,
      boxShadow: i === 2 ? 'var(--shadow-float)' : 'var(--shadow-card)',
      border: 'var(--border-glass)'
    }
  }, it.palette ? React.createElement('span', {
    style: {
      position: 'absolute',
      left: 8,
      bottom: 8,
      display: 'flex',
      gap: 3
    }
  }, it.palette.map((c, j) => React.createElement('span', {
    key: j,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c,
      border: '.5px solid rgba(255,255,255,.8)'
    }
  }))) : null)));
}
Object.assign(__ds_scope, { ResourceStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/resources/ResourceStack.jsx", error: String((e && e.message) || e) }); }

// components/review/ReviewThread.jsx
try { (() => {
function ReviewThread({
  anchor,
  comments = [],
  resolved = false,
  onToggleResolved,
  onReply,
  replyPlaceholder = 'Reply',
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      display: 'grid',
      gap: 12,
      padding: 16,
      borderRadius: 'var(--r-xl)',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-card), var(--inner-top), var(--inner-edge)',
      transition: 'all var(--dur-slow) var(--ease-liquid)',
      opacity: resolved ? .62 : 1,
      filter: resolved ? 'saturate(.8)' : 'none',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, anchor, ' · ', comments.length, ' comment', comments.length === 1 ? '' : 's'), React.createElement('span', {
    style: {
      padding: '4px 9px',
      borderRadius: 'var(--r-pill)',
      background: resolved ? 'var(--aurora-mint)' : 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: resolved ? 'var(--ink-900)' : 'var(--text-muted)'
    }
  }, resolved ? 'Resolved' : 'Open')), comments.map((c, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, React.createElement('span', {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      font: 'var(--fw-semibold) 11px/1 var(--font-core)',
      color: 'var(--text-title)'
    }
  }, c.initials || (c.name || '?').slice(0, 2).toUpperCase()), React.createElement('div', {
    style: {
      minWidth: 0
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fw-semibold) 13px/1.2 var(--font-core)',
      color: 'var(--text-title)'
    }
  }, c.name), c.role ? React.createElement('span', {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.role) : null, c.when ? React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, c.when) : null), React.createElement('p', {
    style: {
      margin: '4px 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, c.text)))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, React.createElement('button', {
    onClick: onReply,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--inner-top)',
      font: 'var(--type-caption)',
      color: 'var(--text-dim)',
      cursor: 'text',
      textAlign: 'start'
    }
  }, replyPlaceholder), onToggleResolved ? React.createElement('button', {
    onClick: onToggleResolved,
    style: {
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--r-pill)',
      border: 'var(--border-glass)',
      background: 'var(--glass-fill-3)',
      font: 'var(--fw-semibold) 12px/1 var(--font-core)',
      color: 'var(--text-title)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-rest), var(--inner-top)'
    }
  }, resolved ? 'Reopen' : 'Resolve') : null));
}
Object.assign(__ds_scope, { ReviewThread });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/review/ReviewThread.jsx", error: String((e && e.message) || e) }); }

// components/scripture/KeyTermPopover.jsx
try { (() => {
function KeyTermPopover({
  source,
  label,
  definition,
  onClose,
  onOpen,
  openLabel = 'Open in glossary',
  style,
  ...rest
}) {
  return React.createElement('div', {
    role: 'dialog',
    style: {
      width: 'min(320px,100%)',
      padding: '14px 16px',
      borderRadius: 'var(--r-lg)',
      background: 'var(--material-floating)',
      backdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-heavy)) var(--sat-glass)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-float), var(--inner-top)',
      animation: 'gg-rise 420ms var(--ease-swell) both',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, 'Key term', source ? ' · ' + source : ''), React.createElement('div', {
    style: {
      marginTop: 4,
      font: 'var(--fw-semibold) var(--fs-body)/1.2 var(--font-core)',
      color: 'var(--text-title)'
    }
  }, label), React.createElement('p', {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-caption)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, definition), React.createElement('div', {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 8
    }
  }, React.createElement('button', {
    onClick: onOpen,
    style: {
      padding: '7px 12px',
      borderRadius: 'var(--r-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: 'var(--fw-semibold) 11px/1 var(--font-core)',
      whiteSpace: 'nowrap'
    }
  }, openLabel), React.createElement('button', {
    onClick: onClose,
    style: {
      padding: '7px 12px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      color: 'var(--text-title)',
      font: 'var(--fw-semibold) 11px/1 var(--font-core)'
    }
  }, 'Close')));
}
Object.assign(__ds_scope, { KeyTermPopover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scripture/KeyTermPopover.jsx", error: String((e && e.message) || e) }); }

// components/scripture/SyncBadge.jsx
try { (() => {
function SyncBadge({
  state = 'ok',
  label,
  count,
  style,
  ...rest
}) {
  const text = label || (state === 'ok' ? 'Up to date' : state === 'syncing' ? `Syncing${count ? ' ' + count + ' items' : ''}` : 'Offline · saved on device');
  const dot = state === 'ok' ? {
    background: 'var(--accent-teal)',
    boxShadow: '0 0 6px rgba(63,182,168,.6)'
  } : state === 'syncing' ? {
    background: 'var(--text-muted)',
    animation: 'gg-breathe 1.6s var(--ease-liquid) infinite'
  } : {
    border: '1px dashed var(--text-muted)',
    boxSizing: 'border-box'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-3)',
      border: state === 'offline' ? '.5px dashed rgba(255,255,255,.7)' : 'var(--border-glass)',
      backdropFilter: 'blur(var(--blur-soft))',
      WebkitBackdropFilter: 'blur(var(--blur-soft))',
      font: 'var(--fw-medium) var(--fs-micro)/1.1 var(--font-core)',
      color: 'var(--text-muted)',
      letterSpacing: '.01em',
      whiteSpace: 'nowrap',
      ...style
    },
    ...rest
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      flex: 'none',
      ...dot
    }
  }), text);
}
Object.assign(__ds_scope, { SyncBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scripture/SyncBadge.jsx", error: String((e && e.message) || e) }); }

// components/scripture/ScripturePassage.jsx
try { (() => {
const FACE = {
  latin: 'var(--font-scripture-latin)',
  hebrew: 'var(--font-scripture-hebrew)',
  greek: 'var(--font-scripture-greek)',
  arabic: 'var(--font-scripture-arabic)',
  devanagari: 'var(--font-scripture-devanagari)',
  gujarati: 'var(--font-scripture-gujarati)',
  han: 'var(--font-scripture-han)'
};
function ScripturePassage({
  reference,
  version,
  source,
  script = 'latin',
  dir = 'ltr',
  lang,
  verses = [],
  keyTerms = [],
  sync,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(null);
  const t = open != null ? keyTerms[open] : null;
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
      borderRadius: 'var(--r-xl)',
      background: 'var(--material-scripture)',
      backdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      WebkitBackdropFilter: 'blur(var(--blur-strong)) var(--sat-glass)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-card), var(--inner-top), var(--inner-edge)',
      padding: '18px 22px 22px',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-title)',
      whiteSpace: 'nowrap'
    }
  }, reference), version ? React.createElement(__ds_scope.GlassChip, null, version) : null), sync ? React.createElement(__ds_scope.SyncBadge, {
    state: sync
  }) : null), React.createElement('div', {
    dir,
    lang,
    style: {
      marginTop: 14,
      maxWidth: '40em',
      font: 'var(--type-scripture)',
      fontFamily: FACE[script] || FACE.latin,
      color: 'var(--text-title)',
      letterSpacing: 0,
      textWrap: 'pretty'
    }
  }, verses.map((v, i) => React.createElement('span', {
    key: i
  }, React.createElement('span', {
    style: {
      font: 'var(--type-verse-number)',
      color: 'var(--text-dim)',
      verticalAlign: 'super',
      marginInline: '2px 4px'
    }
  }, v.n), v.text, ' '))), source ? React.createElement('div', {
    style: {
      marginTop: 10,
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, source) : null, keyTerms.length ? React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center',
      position: 'relative'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, 'Key terms'), keyTerms.map((k, i) => {
    const a = open === i;
    return React.createElement('button', {
      key: i,
      onClick: () => setOpen(a ? null : i),
      style: {
        padding: '5px 11px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        background: a ? 'var(--surface-inverse)' : 'var(--glass-fill-3)',
        color: a ? 'var(--text-on-inverse)' : 'var(--text-muted)',
        border: a ? '.5px solid transparent' : 'var(--border-glass)',
        font: 'var(--fw-medium) 10px/1.1 var(--font-core)',
        letterSpacing: '.01em',
        transition: 'var(--t-hover)'
      }
    }, k.label);
  }), t ? React.createElement(__ds_scope.KeyTermPopover, {
    source: t.source,
    label: t.label,
    definition: t.definition,
    onClose: () => setOpen(null),
    onOpen: t.onOpen,
    style: {
      position: 'absolute',
      left: 0,
      bottom: 'calc(100% + 10px)',
      zIndex: 2
    }
  }) : null) : null);
}
Object.assign(__ds_scope, { ScripturePassage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scripture/ScripturePassage.jsx", error: String((e && e.message) || e) }); }

// components/survey/SurveyQuestion.jsx
try { (() => {
const BANDS = ['Not yet', 'A little', 'Mostly', 'Fully'];
function SurveyQuestion({
  perspective,
  progress,
  question,
  bands = BANDS,
  value,
  onChange,
  note = 'Illustrative',
  freeTextPlaceholder = 'Anything you want to add? Optional.',
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      boxSizing: 'border-box',
      padding: 18,
      borderRadius: 'var(--r-xl)',
      background: 'var(--glass-fill-3)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--shadow-card), var(--inner-top), var(--inner-edge)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, perspective, progress ? ' · ' + progress : ''), note ? React.createElement('span', {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, note) : null), React.createElement('div', {
    style: {
      marginTop: 8,
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-title)',
      color: 'var(--text-title)',
      textWrap: 'pretty'
    }
  }, question), React.createElement('div', {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: `repeat(${bands.length},1fr)`,
      gap: 8
    }
  }, bands.map((label, i) => {
    const a = value === i;
    const fill = [10, 38, 66, 94][i] ?? Math.round((i + .5) / bands.length * 100);
    return React.createElement('button', {
      key: i,
      onClick: () => onChange && onChange(i),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        padding: '12px 6px 10px',
        borderRadius: 'var(--r-md)',
        cursor: 'pointer',
        border: a ? '.5px solid transparent' : 'var(--border-glass)',
        background: a ? 'var(--surface-inverse)' : 'var(--glass-fill-2)',
        color: a ? 'var(--text-on-inverse)' : 'var(--text-title)',
        boxShadow: a ? 'var(--shadow-card)' : 'var(--inner-top)',
        font: 'var(--fw-medium) 12px/1.1 var(--font-core)',
        transition: 'var(--t-hover)'
      }
    }, React.createElement('span', {
      'aria-hidden': true,
      style: {
        width: 22,
        height: 30,
        borderRadius: '4px 4px 8px 8px',
        border: `1.2px solid ${a ? 'var(--text-on-inverse)' : 'var(--text-dim)'}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'block'
      }
    }, React.createElement('span', {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: fill + '%',
        background: 'var(--aurora-mint)',
        display: 'block'
      }
    })), React.createElement('span', null, label));
  })), freeTextPlaceholder ? React.createElement('div', {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      height: 44,
      padding: '0 16px',
      borderRadius: 'var(--r-pill)',
      background: 'var(--glass-fill-2)',
      border: 'var(--border-glass)',
      boxShadow: 'var(--inner-top)',
      font: 'var(--type-caption)',
      color: 'var(--text-dim)'
    }
  }, freeTextPlaceholder) : null);
}
Object.assign(__ds_scope, { SurveyQuestion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/survey/SurveyQuestion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/3d-review/app.jsx
try { (() => {
{
  if (typeof window.GG_NS !== 'function' || !window.GG_DATA) return;
  const NS = window.GG_NS();
  const {
    GlassSurface,
    GlassButton,
    GlassChip,
    GlassIconButton,
    Icon,
    SurveyQuestion,
    ProgressGrid,
    ReviewThread,
    DesktopShell,
    GlassSegmented,
    GlassToggle,
    GlassField,
    GlassSheet,
    StatusBar,
    ProjectConstellation,
    Avatar,
    SyncBadge
  } = NS;
  const D = window.GG_DATA;
  const OV = {
    font: 'var(--type-overline)',
    letterSpacing: 'var(--ls-overline)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const Jar = ({
    fill,
    size = 30
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * .73,
      height: size,
      borderRadius: '4px 4px 8px 8px',
      border: '1.2px solid var(--text-dim)',
      position: 'relative',
      overflow: 'hidden',
      display: 'block',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: fill + '%',
      background: 'var(--aurora-mint)',
      display: 'block'
    }
  }));
  const Stat = ({
    label,
    children,
    sub
  }) => /*#__PURE__*/React.createElement(GlassSurface, {
    level: 2,
    radius: "lg",
    style: {
      padding: 16,
      display: 'grid',
      gap: 8,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: OV
  }, label), children, sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, sub));
  const PERSP = ['Translator', 'Community', 'Church', 'Consultant'];
  function Prepare({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Passage under review"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Ruth 2:1\u20134"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(GlassChip, {
      size: "sm",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "book",
        size: 10
      })
    }, "BSB"), /*#__PURE__*/React.createElement(GlassChip, {
      size: "sm"
    }, "Narrative"))), /*#__PURE__*/React.createElement(Stat, {
      label: "Perspectives",
      sub: "Four short surveys, one per role"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, PERSP.map(p => /*#__PURE__*/React.createElement(GlassChip, {
      key: p,
      size: "sm"
    }, p)))), /*#__PURE__*/React.createElement(Stat, {
      label: "Repeat",
      sub: "Repeat when it is appropriate."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Open"))), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Survey settings"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(GlassField, {
      label: "Assessment name",
      value: "River assessment",
      readOnly: true
    }), /*#__PURE__*/React.createElement(GlassField, {
      label: "Coordinator",
      value: "Miriam",
      readOnly: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)'
      }
    }, "Optional free text on every question"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Participants can add a sentence.")), /*#__PURE__*/React.createElement(GlassToggle, {
      checked: true,
      onChange: () => {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)'
      }
    }, "Detailed report level"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Simple for participants, detailed for the team.")), /*#__PURE__*/React.createElement(GlassToggle, {
      checked: true,
      onChange: () => {}
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(GlassButton, {
      variant: "glass",
      size: "sm"
    }, "Save draft"), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 14
      }),
      onClick: () => go('Collect')
    }, "Start collecting"))));
  }
  function Collect({
    openPhone
  }) {
    const [inv, setInv] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 12
      }
    }, [['Translator', '6 of 6', 'Complete'], ['Community', '9 of 14', 'Open'], ['Church', '2 of 4', 'Open'], ['Consultant', '0 of 1', 'Not yet']].map(([p, n, s]) => /*#__PURE__*/React.createElement(Stat, {
      key: p,
      label: p,
      sub: s
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, n)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 300px',
        gap: 14,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Participant preview"), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "quiet",
      size: "sm",
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "maximize",
        size: 13
      }),
      onClick: openPhone
    }, "Open on phone")), /*#__PURE__*/React.createElement(SurveyQuestion, {
      perspective: "Community",
      progress: "3 of 8",
      question: "When the passage was read aloud, did the meaning come through clearly?",
      value: 2,
      note: null
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Invite"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Survey participants only need the survey link."), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      full: true,
      onClick: () => setInv(true)
    }, "Copy survey link"), /*#__PURE__*/React.createElement(GlassButton, {
      size: "sm",
      full: true
    }, "Invite a collaborator")), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Sync"), /*#__PURE__*/React.createElement(SyncBadge, {
      state: "syncing",
      count: 3
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Community responses from Ruth 2 read-aloud, saved on device.")))), inv && /*#__PURE__*/React.createElement("div", {
      onClick: () => setInv(false),
      style: {
        position: 'fixed',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        background: 'rgba(14,20,32,.18)'
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 4,
      radius: "xl",
      style: {
        padding: 20,
        width: 340,
        background: 'var(--material-floating)',
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Link copied"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Anyone with the link can answer the Community survey once."), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      full: true
    }, "Done"))));
  }
  function Understand() {
    const [lvl, setLvl] = React.useState('Simple');
    const [res, setRes] = React.useState(false);
    const bands = [['Clarity', 'Growing', 66], ['Naturalness', 'Mostly', 66], ['Accuracy', 'Fully', 94], ['Church acceptance', 'A little', 38]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Quality band: ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontWeight: 600,
        color: 'var(--text-title)'
      }
    }, "Growing"), ". Detailed view available."), /*#__PURE__*/React.createElement(GlassSegmented, {
      size: "sm",
      options: ['Simple', 'Detailed'],
      value: lvl,
      onChange: setLvl
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 12
      }
    }, bands.map(([k, b, f]) => /*#__PURE__*/React.createElement(Stat, {
      key: k,
      label: k,
      sub: lvl === 'Detailed' ? 'Translator · Community · Church agree' : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Jar, {
      fill: f
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)',
        whiteSpace: 'nowrap'
      }
    }, b))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) 340px',
        gap: 14,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Progress by chapter"), /*#__PURE__*/React.createElement(ProgressGrid, {
      books: D.progress
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Open threads"), /*#__PURE__*/React.createElement(ReviewThread, {
      anchor: "Ruth 2:3",
      resolved: res,
      onToggleResolved: () => setRes(!res),
      comments: [{
        name: 'Amos',
        role: 'Community',
        when: '14:20',
        text: '“Happened to come” sounded like an accident to the listeners. Is that the sense?'
      }, {
        name: 'Miriam',
        role: 'Translator',
        when: '15:02',
        text: 'It is. The BSB keeps the narrator’s understatement; the Hebrew hints at providence.'
      }]
    }))));
  }
  function Improve() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Reflection"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "What did the community hear that the team did not expect?"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Four Community answers mentioned 2:3. Consider a read-aloud with the church group before revising.")), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Next step"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Church acceptance: A little"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Two of four church responses in. Repeat when it is appropriate."), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "glass",
      size: "sm"
    }, "Plan a repeat")), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Report"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Simple report for participants. Detailed report for the team and consultant."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(GlassButton, {
      size: "sm"
    }, "Simple"), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm"
    }, "Detailed")))));
  }
  function Phone({
    onClose
  }) {
    const [i, setI] = React.useState(2);
    const [v, setV] = React.useState(null);
    const Q = ['Here to take the survey?', 'When the passage was read aloud, did the meaning come through clearly?', 'Did the words sound like the way people speak here?'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        background: 'rgba(14,20,32,.22)'
      },
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: 390,
        height: 760,
        borderRadius: 'var(--r-screen)',
        background: 'var(--aurora-field)',
        boxShadow: 'var(--shadow-float)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: 'var(--border-glass)'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 18px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(GlassIconButton, {
      label: "Close",
      size: 38,
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      style: OV
    }, "Community \xB7 River assessment"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'grid',
        alignContent: 'center',
        padding: 18,
        gap: 14
      }
    }, i === 0 ? /*#__PURE__*/React.createElement(GlassSurface, {
      level: 3,
      radius: "xl",
      style: {
        padding: 22,
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, Q[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Eight short questions about Ruth 2. Your answers stay with the team."), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      full: true,
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 16
      }),
      onClick: () => setI(1)
    }, "Begin")) : /*#__PURE__*/React.createElement(SurveyQuestion, {
      perspective: "Community",
      progress: `${i} of 8`,
      question: Q[i] || Q[2],
      value: v,
      onChange: setV,
      note: null
    }), i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(GlassButton, {
      variant: "quiet",
      size: "sm",
      onClick: () => {
        setI(i - 1);
        setV(null);
      }
    }, "Back"), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      disabled: v == null,
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 14
      }),
      onClick: () => {
        setI(i + 1);
        setV(null);
      }
    }, "Next")))));
  }
  function App() {
    const [ph, setPh] = React.useState('Understand');
    const [phone, setPhone] = React.useState(false);
    const [view, setView] = React.useState('assessment');
    const groups = [{
      label: 'River project',
      items: [{
        label: 'River assessment',
        meta: 'Collect',
        active: view === 'assessment',
        onSelect: () => setView('assessment')
      }, {
        label: 'Earlier assessment',
        meta: 'Improve'
      }]
    }, {
      label: 'Hill project',
      empty: 'No assessments yet'
    }, {
      label: 'Partner',
      items: [{
        label: 'All projects',
        active: view === 'map',
        onSelect: () => setView('map')
      }]
    }];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DesktopShell, {
      crumb: view === 'map' ? 'Partner' : 'River project',
      title: view === 'map' ? 'All projects' : 'River assessment',
      phases: view === 'map' ? [] : ['Prepare', 'Collect', 'Understand', 'Improve'],
      phase: ph,
      onPhase: setPh,
      groups: groups,
      style: {
        minHeight: '100vh',
        borderRadius: 0
      },
      action: /*#__PURE__*/React.createElement(GlassButton, {
        size: "sm",
        leading: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 14
        })
      }, "New assessment")
    }, view === 'map' ? /*#__PURE__*/React.createElement(ProjectConstellation, {
      map: true,
      regions: [{
        name: 'East Africa',
        lon: 36,
        lat: -2
      }, {
        name: 'South Asia',
        lon: 80,
        lat: 22
      }, {
        name: 'Melanesia',
        lon: 147,
        lat: -6
      }],
      projects: [{
        id: 'river',
        title: 'River',
        region: 'East Africa',
        books: 3,
        stage: 'translate',
        recency: 1,
        reported: true,
        image: D.media.barley
      }, {
        id: 'hill',
        title: 'Hill',
        region: 'East Africa',
        books: 1,
        stage: 'understand',
        recency: .5,
        dx: 40,
        dy: -30
      }, {
        id: 'ganga',
        title: 'Ganga',
        region: 'South Asia',
        books: 5,
        stage: 'revise',
        recency: .8,
        image: D.media.almond
      }, {
        id: 'sepik',
        title: 'Sepik',
        region: 'Melanesia',
        books: 2,
        stage: 'paused',
        recency: .2
      }],
      style: {
        minHeight: 520
      }
    }) : ph === 'Prepare' ? /*#__PURE__*/React.createElement(Prepare, {
      go: setPh
    }) : ph === 'Collect' ? /*#__PURE__*/React.createElement(Collect, {
      openPhone: () => setPhone(true)
    }) : ph === 'Understand' ? /*#__PURE__*/React.createElement(Understand, null) : /*#__PURE__*/React.createElement(Improve, null)), phone && /*#__PURE__*/React.createElement(Phone, {
      onClose: () => setPhone(false)
    }));
  }
  window.ThreeDReviewApp = App;
  if (!window.GG_EMBED && document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/3d-review/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aquifer-window/app.jsx
try { (() => {
{
  if (typeof window.GG_NS !== 'function' || !window.GG_DATA) return;
  const NS = window.GG_NS();
  const {
    GlassSurface,
    GlassButton,
    GlassChip,
    GlassIconButton,
    Icon,
    ResourceCard,
    CatalogRow,
    LanguagePicker,
    GlassSearch,
    FilterChips,
    GlassSegmented,
    GlassSelect,
    SyncBadge,
    Avatar
  } = NS;
  const D = window.GG_DATA;
  const M = D.media;
  const OV = {
    font: 'var(--type-overline)',
    letterSpacing: 'var(--ls-overline)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const LANG = Object.fromEntries(D.languages.map(l => [l.code, l]));
  function Detail({
    item,
    onBack
  }) {
    const src = D.resources.find(r => r.title === item.title) || item;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlassButton, {
      variant: "quiet",
      size: "sm",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronLeft",
        size: 14
      }),
      onClick: onBack
    }, "Back to results")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.4fr) minmax(260px,1fr)',
        gap: 14,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--r-lg)',
        overflow: 'hidden',
        background: 'var(--paper-100)',
        aspectRatio: '4/3'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: M[src.image],
      alt: src.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(GlassSurface, {
      level: 3,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, src.type), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, src.title), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, src.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(GlassChip, {
      size: "sm",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "book",
        size: 10
      })
    }, "RUT 1:1\u20134:22"), /*#__PURE__*/React.createElement(GlassChip, {
      size: "sm"
    }, "eng"), /*#__PURE__*/React.createElement(GlassChip, {
      size: "sm"
    }, "v1.0.2")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "arrowUpRight",
        size: 13
      })
    }, "Open"), /*#__PURE__*/React.createElement(GlassButton, {
      size: "sm"
    }, "Attach to Ruth 2"))), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Licence"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "CC BY-SA 4.0 \xB7 Biblica, Inc. 2023\u20132025"), /*#__PURE__*/React.createElement("a", {
      href: "https://creativecommons.org/licenses/by-sa/4.0/",
      style: {
        font: 'var(--type-caption)'
      }
    }, "creativecommons.org/licenses/by-sa/4.0")))));
  }
  function App() {
    const [src, setSrc] = React.useState('Aquifer');
    const [q, setQ] = React.useState('');
    const [f, setF] = React.useState([]);
    const [lang, setLang] = React.useState('en');
    const [pick, setPick] = React.useState(false);
    const [open, setOpen] = React.useState(null);
    const items = D.resources.filter(r => (!f.length || f.includes(r.type)) && (r.title + r.meta).toLowerCase().includes(q.toLowerCase()));
    const L = LANG[lang];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '210px minmax(0,1fr)'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        padding: '20px 14px',
        background: 'var(--glass-fill-1)',
        borderRight: 'var(--border-glass-soft)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--fw-medium) 14px/1.2 var(--font-core)',
        letterSpacing: '-0.045em',
        padding: '0 6px'
      }
    }, "Aquifer Window"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setPick(!pick),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        height: 40,
        padding: '0 12px',
        borderRadius: 'var(--r-pill)',
        background: 'var(--glass-fill-2)',
        border: 'var(--border-glass)',
        boxShadow: 'var(--inner-top)',
        font: 'var(--type-caption)',
        color: 'var(--text-title)',
        cursor: 'pointer',
        textAlign: 'start'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "languages",
      size: 14
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, L.autonym, " \xB7 ", L.english), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-dim)'
      }
    }, L.code)), pick && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 46,
        left: 0,
        zIndex: 5,
        width: 420
      }
    }, /*#__PURE__*/React.createElement(LanguagePicker, {
      languages: D.languages,
      context: "filter",
      value: lang,
      onChange: c => {
        setLang(c);
        setPick(false);
      },
      suggested: ['en', 'hi', 'sw'],
      surface: "popover"
    }))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...OV,
        color: 'var(--text-dim)',
        padding: '6px 8px 4px'
      }
    }, "Sources"), ['Aquifer', 'Door43'].map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => {
        setSrc(s);
        setOpen(null);
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '7px 8px',
        borderRadius: 'var(--r-xs)',
        border: 'none',
        textAlign: 'start',
        cursor: 'pointer',
        background: src === s ? 'var(--glass-fill-3)' : 'transparent',
        font: 'var(--type-caption)',
        color: src === s ? 'var(--text-title)' : 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, s), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-dim)'
      }
    }, s === 'Aquifer' ? '57' : '12'))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...OV,
        color: 'var(--text-dim)',
        padding: '10px 8px 4px'
      }
    }, "Collections"), D.aquifer.slice(0, 4).map(a => /*#__PURE__*/React.createElement("button", {
      key: a.code,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 6,
        width: '100%',
        padding: '7px 8px',
        borderRadius: 'var(--r-xs)',
        border: 'none',
        textAlign: 'start',
        cursor: 'pointer',
        background: 'transparent',
        font: 'var(--type-caption)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, a.title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-dim)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11
      }
    }, a.articles)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/React.createElement(SyncBadge, {
      state: "ok"
    }))), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minWidth: 0
      }
    }, open ? /*#__PURE__*/React.createElement(Detail, {
      item: open,
      onBack: () => setOpen(null)
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, src === 'Aquifer' ? 'aquifer.klappy.dev · 57 resources' : 'git.door43.org · catalog, stage prod'), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Browse ", src)), /*#__PURE__*/React.createElement(GlassSegmented, {
      size: "sm",
      options: ['Aquifer', 'Door43'],
      value: src,
      onChange: s => {
        setSrc(s);
        setOpen(null);
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(GlassSearch, {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: src === 'Aquifer' ? 'Search resources, passages, key terms' : 'Search the catalog'
    }), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "md"
    }, "Search")), src === 'Aquifer' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterChips, {
      bleed: false,
      options: ['Map', 'Image', 'Study notes', 'Key terms', 'Bible'],
      value: f,
      onChange: setF
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...OV,
        whiteSpace: 'nowrap'
      }
    }, items.length, " results \xB7 ", L.english), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Media, then articles")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
        gap: 12
      }
    }, items.map(r => /*#__PURE__*/React.createElement(ResourceCard, {
      key: r.title,
      type: r.type,
      title: r.title,
      meta: r.meta,
      image: M[r.image],
      onOpen: () => setOpen(r)
    }))), /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Articles"), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 3,
      radius: "xl",
      style: {
        padding: '4px 18px'
      }
    }, D.aquifer.map((a, i) => /*#__PURE__*/React.createElement(CatalogRow, {
      key: a.code,
      first: i === 0,
      id: a.code,
      title: a.title,
      subject: a.type,
      release: a.articles,
      meta: `eng · ${a.type}`
    })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Door43 Content Service \xB7 ", D.door43.length, " repositories"), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 3,
      radius: "xl",
      style: {
        padding: '4px 18px'
      }
    }, D.door43.map((r, i) => /*#__PURE__*/React.createElement(CatalogRow, {
      key: r.id,
      first: i === 0,
      id: r.id,
      title: r.title,
      subject: r.subject,
      lang: r.lang,
      dir: r.dir,
      release: r.release,
      meta: `${r.lang} · ${r.dir || 'ltr'}`
    })))))));
  }
  window.AquiferWindowApp = App;
  if (!window.GG_EMBED && document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aquifer-window/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fia/app.jsx
try { (() => {
{
  if (typeof window.GG_NS !== 'function' || !window.GG_DATA) return;
  const NS = window.GG_NS();
  const {
    GlassSurface,
    GlassButton,
    GlassChip,
    GlassIconButton,
    Icon,
    ScripturePassage,
    KeyTermPopover,
    SyncBadge,
    ResourceStack,
    ResourceCard,
    ProgressGrid,
    GlassTabBar,
    GlassSheet,
    GlassSegmented,
    StatusBar,
    GlassSearch,
    FilterChips
  } = NS;
  const D = window.GG_DATA;
  const M = D.media;
  const OV = {
    font: 'var(--type-overline)',
    letterSpacing: 'var(--ls-overline)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const VERS = {
    BSB: {
      verses: D.ruthBSB,
      script: 'latin',
      dir: 'ltr',
      lang: 'en',
      source: 'Aquifer · BereanStandardBible'
    },
    AVD: {
      verses: D.ruthAVD,
      script: 'arabic',
      dir: 'rtl',
      lang: 'ar',
      source: 'Aquifer · ArabicVanDyckBible'
    },
    IRV: {
      verses: D.ruthIRV,
      script: 'devanagari',
      dir: 'ltr',
      lang: 'hi',
      source: 'Aquifer · IndianRevisedVersion'
    }
  };
  const STEPS = ['Familiarization', 'Internalization', 'Articulation'];
  function Passage({
    openTerm,
    sync
  }) {
    const [v, setV] = React.useState('BSB');
    const p = VERS[v];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, "Ruth \xB7 Narrative"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, "Ruth 2:1\u20134")), /*#__PURE__*/React.createElement(GlassIconButton, {
      label: "Listen",
      size: 44
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "headphones",
      size: 19
    }))), /*#__PURE__*/React.createElement(GlassSegmented, {
      size: "sm",
      options: ['BSB', 'AVD', 'IRV'],
      value: v,
      onChange: setV
    }), /*#__PURE__*/React.createElement(ScripturePassage, {
      reference: "Ruth 2:1\u20134",
      version: v,
      source: p.source,
      script: p.script,
      dir: p.dir,
      lang: p.lang,
      verses: p.verses,
      sync: sync,
      style: {
        minWidth: 0
      },
      keyTerms: D.keyTerms.map(k => ({
        ...k,
        onOpen: () => openTerm(k)
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Attached resources"), /*#__PURE__*/React.createElement(ResourceStack, {
      height: 150,
      items: [{
        title: 'Historical: Ruth',
        image: M.ruthMap
      }, {
        title: 'barley field',
        image: M.barley
      }, {
        title: 'Bethlehem',
        image: M.bethlehem
      }]
    }));
  }
  function Understand() {
    const [s, setS] = React.useState(0);
    const Q = [['Who is in the story, and where are they?', 'Naomi, Ruth, Boaz, the harvesters. Bethlehem, in the barley harvest.'], ['Tell the passage back in your own words.', 'Record yourself, then listen with the passage closed.'], ['How would people here say “The LORD be with you”?', 'Try two or three ways aloud before you write one.']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, "Understand"), /*#__PURE__*/React.createElement(GlassSegmented, {
      size: "sm",
      options: STEPS.map((x, i) => ({
        value: String(i),
        label: x.slice(0, 3)
      })),
      value: String(s),
      onChange: x => setS(+x)
    }), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 3,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, STEPS[s], " \xB7 ", s + 1, " of 3"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)',
        textWrap: 'pretty'
      }
    }, Q[s][0]), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, Q[s][1]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(GlassButton, {
      size: "sm",
      leading: /*#__PURE__*/React.createElement(Icon, {
        name: "mic",
        size: 14
      })
    }, "Record"), /*#__PURE__*/React.createElement(GlassButton, {
      variant: "dark",
      size: "sm",
      trailing: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 14
      }),
      onClick: () => setS((s + 1) % 3)
    }, "Next"))), /*#__PURE__*/React.createElement(KeyTermPopover, {
      label: "Redeem",
      source: "Aquifer Open Study Notes \xB7 25812",
      definition: "Boaz was a relative of Elimelech, so he could be a family redeemer for the widows Ruth and Naomi.",
      openLabel: "Open note"
    }));
  }
  function Resources() {
    const [q, setQ] = React.useState('');
    const [f, setF] = React.useState(['Map']);
    const items = D.resources.filter(r => (!f.length || f.includes(r.type)) && r.title.toLowerCase().includes(q.toLowerCase()));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, "Resources"), /*#__PURE__*/React.createElement(GlassSearch, {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search Ruth resources"
    }), /*#__PURE__*/React.createElement(FilterChips, {
      options: ['Map', 'Image', 'Study notes', 'Key terms'],
      value: f,
      onChange: setF
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 10
      }
    }, items.map(r => /*#__PURE__*/React.createElement(ResourceCard, {
      key: r.title,
      type: r.type,
      title: r.title,
      meta: r.meta,
      image: M[r.image]
    }))), !items.length && /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-muted)',
        padding: 18,
        textAlign: 'center'
      }
    }, "Nothing matches yet."));
  }
  function Progress() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-hero)',
        letterSpacing: 'var(--ls-hero)'
      }
    }, "Progress"), /*#__PURE__*/React.createElement(ProgressGrid, {
      books: D.progress
    }), /*#__PURE__*/React.createElement(GlassSurface, {
      level: 2,
      radius: "xl",
      style: {
        padding: 18,
        display: 'grid',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: OV
    }, "Next"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-card-title)',
        letterSpacing: 'var(--ls-title)'
      }
    }, "Ruth 3, Familiarization"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, "Miriam, Ruth 2 is ready for the community read-aloud.")));
  }
  function App() {
    const [tab, setTab] = React.useState('passage');
    const [term, setTerm] = React.useState(null);
    const [sync, setSync] = React.useState('offline');
    const [dark, setDark] = React.useState(false);
    React.useEffect(() => {
      document.documentElement.dataset.theme = dark ? 'dark' : '';
    }, [dark]);
    const screen = /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        padding: '0 0 110px',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gap: 14,
        alignContent: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(GlassIconButton, {
      label: "Sync",
      size: 36,
      onClick: () => setSync(sync === 'offline' ? 'syncing' : sync === 'syncing' ? 'ok' : 'offline')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cloudOff",
      size: 15
    })), /*#__PURE__*/React.createElement(GlassIconButton, {
      label: "Theme",
      size: 36,
      onClick: () => setDark(!dark)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: dark ? 'sun' : 'moon',
      size: 15
    }))), tab === 'passage' ? /*#__PURE__*/React.createElement(Passage, {
      openTerm: setTerm,
      sync: sync
    }) : tab === 'understand' ? /*#__PURE__*/React.createElement(Understand, null) : tab === 'resources' ? /*#__PURE__*/React.createElement(Resources, null) : /*#__PURE__*/React.createElement(Progress, null));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 844,
        margin: '0 auto',
        position: 'relative',
        background: 'var(--aurora-field)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(GlassSheet, {
      style: {
        flex: 1,
        minHeight: 0
      },
      open: !!term,
      title: term?.label,
      description: term?.source,
      behind: screen,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlassButton, {
        variant: "dark",
        size: "sm",
        full: true,
        onClick: () => setTerm(null)
      }, "Close"), /*#__PURE__*/React.createElement(GlassButton, {
        size: "sm",
        full: true,
        trailing: /*#__PURE__*/React.createElement(Icon, {
          name: "arrowUpRight",
          size: 13
        })
      }, "Open in Aquifer"))
    }, term && /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, term.definition)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 24,
        display: 'grid',
        placeItems: 'center',
        pointerEvents: 'none',
        transition: 'opacity var(--dur-slow) var(--ease-damp), transform var(--dur-slow) var(--ease-damp)',
        opacity: term ? 0 : 1,
        transform: term ? 'translateY(120px)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        pointerEvents: term ? 'none' : 'auto'
      }
    }, /*#__PURE__*/React.createElement(GlassTabBar, {
      value: tab,
      onChange: setTab,
      items: [{
        id: 'passage',
        label: 'Passage',
        icon: 'book'
      }, {
        id: 'understand',
        label: 'Understand',
        icon: 'sparkle'
      }, {
        id: 'resources',
        label: 'Resources',
        icon: 'bookmark'
      }, {
        id: 'progress',
        label: 'Progress',
        icon: 'check'
      }]
    }))));
  }
  window.FiaApp = App;
  if (!window.GG_EMBED && document.getElementById('root')) ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fia/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/kit-base.js
try { (() => {
// Shared data for the three UI kits. Every specimen traces to data/specimens.json (Aquifer / Door43, 2026-09-11).
window.GG_DATA = {
  ruthBSB: [{
    n: 1,
    text: "Now Naomi had a relative on her husband’s side, a prominent man of noble character from the clan of Elimelech, whose name was Boaz."
  }, {
    n: 2,
    text: "And Ruth the Moabitess said to Naomi, “Please let me go into the fields and glean heads of grain after someone in whose sight I may find favor.” “Go ahead, my daughter,” Naomi replied."
  }, {
    n: 3,
    text: "So Ruth departed and went out into the field and gleaned after the harvesters. And she happened to come to the part of the field belonging to Boaz, who was from the clan of Elimelech."
  }, {
    n: 4,
    text: "Just then Boaz arrived from Bethlehem and said to the harvesters, “The LORD be with you.” “The LORD bless you,” they replied."
  }],
  ruthAVD: [{
    n: 1,
    text: "وَكَانَ لِنُعْمِي ذُو قَرَابَةٍ لِرَجُلِهَا، جَبَّارُ بَأْسٍ مِنْ عَشِيرَةِ أَلِيمَالِكَ، ٱسْمُهُ بُوعَزُ."
  }, {
    n: 2,
    text: "فَقَالَتْ رَاعُوثُ ٱلْمُوآبِيَّةُ لِنُعْمِي: «دَعِينِي أَذْهَبْ إِلَى ٱلْحَقْلِ وَأَلْتَقِطْ سَنَابِلَ وَرَاءَ مَنْ أَجِدُ نِعْمَةً فِي عَيْنَيْهِ». فَقَالَتْ لَهَا: «ٱذْهَبِي يَابِنْتِي»."
  }],
  ruthIRV: [{
    n: 1,
    text: "नाओमी के पति एलीमेलेक के कुल में उसका एक बड़ा धनी कुटुम्बी था, जिसका नाम बोअज था।"
  }, {
    n: 2,
    text: "मोआबिन रूत ने नाओमी से कहा, “मुझे किसी खेत में जाने दे, कि जो मुझ पर अनुग्रह की दृष्टि करे, उसके पीछे-पीछे मैं सिला बीनती जाऊँ।” उसने कहा, “चली जा, बेटी।”"
  }],
  keyTerms: [{
    label: 'Redeem',
    source: 'Aquifer Open Study Notes · 25812',
    definition: 'Boaz was a relative of Elimelech, so he could be a family redeemer for the widows Ruth and Naomi.'
  }, {
    label: 'Favor',
    source: 'Biblica Open Bible Maps · OT072 entities',
    definition: 'Kindness shown by someone in a position to give it; Ruth asks to glean after one in whose sight she finds favor.'
  }, {
    label: 'Kindness',
    source: 'Biblica Open Bible Maps · OT072 entities',
    definition: 'Loyal, covenant kindness between people and from God; the thread that runs through Ruth.'
  }],
  media: {
    barley: 'https://s3.amazonaws.com/cbbt-er.public/media/photos/a1888/1000.jpg',
    barley2: 'https://s3.amazonaws.com/cbbt-er.public/media/photos/a1889/1000.jpg',
    barley3: 'https://s3.amazonaws.com/cbbt-er.public/media/photos/a269/1000.jpg',
    almond: 'https://s3.amazonaws.com/cbbt-er.public/media/photos/a827/1000.jpg',
    jar: 'https://s3.amazonaws.com/cbbt-er.public/media/photos/a54/1000.jpg',
    bethlehem: 'https://cdn.aquifer.bible/aquifer-content/resources/Media/UBS-0045_bethlehem.jpg',
    ruthMap: 'https://raw.githubusercontent.com/BibleAquifer/BiblicaOpenBibleMaps/main/eng/json/images/OT072.png',
    mapC94: 'https://s3.amazonaws.com/cbbt-er.public/media/maps/eng/c94/v1/original.png',
    mapC128: 'https://s3.amazonaws.com/cbbt-er.public/media/maps/eng/c128/v1/original.png',
    mapC201: 'https://s3.amazonaws.com/cbbt-er.public/media/maps/eng/c201/v1/original.png',
    mapC37: 'https://s3.amazonaws.com/cbbt-er.public/media/maps/eng/c37/v1/original.png'
  },
  resources: [{
    type: 'Map',
    title: 'Historical: Ruth',
    meta: 'Biblica Open Bible Maps · OT072 · CC BY-SA 4.0',
    image: 'ruthMap'
  }, {
    type: 'Image',
    title: 'Bethlehem',
    meta: 'UBS Images · 831521 · see resource metadata',
    image: 'bethlehem'
  }, {
    type: 'Image',
    title: 'barley field',
    meta: 'FIA Images · a1888',
    image: 'barley'
  }, {
    type: 'Map',
    title: 'Bethlehem to Jerusalem',
    meta: 'FIA Maps · c94 · LUK 2:22–40',
    image: 'mapC94'
  }, {
    type: 'Map',
    title: 'Judea and Dead Sea',
    meta: 'FIA Maps · c128 · LUK 21:20–28',
    image: 'mapC128'
  }, {
    type: 'Image',
    title: 'Alabaster Jar',
    meta: 'FIA Images · a54 · MRK 14:1–11',
    image: 'jar'
  }, {
    type: 'Map',
    title: 'Aerial View of Judea and Jerusalem',
    meta: 'FIA Maps · c201 · MRK 1:1–13',
    image: 'mapC201'
  }, {
    type: 'Image',
    title: 'Almond Flowers',
    meta: 'FIA Images · a827 · EXO 25:31–40',
    image: 'almond'
  }],
  aquifer: [{
    code: 'AquiferOpenStudyNotes',
    title: 'Aquifer Open Study Notes',
    type: 'Study Notes',
    articles: '16,923'
  }, {
    code: 'AquiferOpenBibleDictionary',
    title: 'Aquifer Open Bible Dictionary',
    type: 'Bible Dictionary',
    articles: '6,120'
  }, {
    code: 'FIATranslationGuide',
    title: 'FIA Translation Guide',
    type: 'Translation Guide',
    articles: '1,465'
  }, {
    code: 'FIAKeyTerms',
    title: 'FIA Key Terms',
    type: 'Translation Glossary',
    articles: '512'
  }, {
    code: 'UWTranslationNotes',
    title: 'unfoldingWord® Translation Notes',
    type: 'Translation Guide',
    articles: '85,148'
  }, {
    code: 'UBSImages',
    title: 'UBS Images',
    type: 'Images, Maps, Videos',
    articles: '1,054'
  }],
  door43: [{
    id: 'unfoldingWord/en_ult',
    title: 'unfoldingWord® Literal Text',
    subject: 'Aligned Bible',
    lang: 'en',
    release: 'v90'
  }, {
    id: 'unfoldingWord/en_tn',
    title: 'unfoldingWord® Translation Notes',
    subject: 'TSV Translation Notes',
    lang: 'en',
    release: 'v90'
  }, {
    id: 'BSOJ/ar_avd',
    title: 'الكتاب المقدس باللغة العربية، فان دايك',
    subject: 'Aligned Bible',
    lang: 'ar',
    dir: 'rtl',
    release: 'v6.9'
  }, {
    id: 'translationCore-Create-BCS/hi_glt',
    title: 'हिन्दी भाषा शाब्दिक पाठ',
    subject: 'Aligned Bible',
    lang: 'hi',
    release: 'v8'
  }, {
    id: 'es-419_gl/es-419_glt',
    title: 'Texto Puente Literal',
    subject: 'Aligned Bible',
    lang: 'es-419',
    release: 'v42'
  }, {
    id: 'Door43-Catalog/sw_tn',
    title: 'translationNotes',
    subject: 'Translation Notes',
    lang: 'sw',
    release: 'v7.2'
  }],
  languages: [['en', 'English', 'English', 'ltr', 'United Kingdom, United States', 'aaaa', true, true], ['es-419', 'Español', 'Spanish (Latin America)', 'ltr', 'Latin America', 'aaai', true, true], ['fr', 'Français', 'French', 'ltr', 'France, West Africa', 'aaaa', true, true], ['hi', 'हिन्दी', 'Hindi', 'ltr', 'India', 'aaai', true, true], ['ar', 'العربية', 'Arabic', 'rtl', 'Middle East, North Africa', 'aaaa', true, true], ['sw', 'Kiswahili', 'Swahili', 'ltr', 'Tanzania, Kenya', 'aaii', true, true], ['ne', 'नेपाली', 'Nepali', 'ltr', 'Nepal', 'aiin', true, false], ['tpi', 'Tok Pisin', 'Tok Pisin', 'ltr', 'Papua New Guinea', 'aain', true, false], ['gu', 'ગુજરાતી', 'Gujarati', 'ltr', 'India', 'aaan', false, false], ['fa', 'فارسی', 'Persian', 'rtl', 'Iran, Afghanistan', 'niin', false, false], ['km', 'ខ្មែរ', 'Khmer', 'ltr', 'Cambodia', 'nnnn', false, false]].map(([code, autonym, english, dir, region, coverage, gateway, localized]) => ({
    code,
    autonym,
    english,
    dir,
    region,
    coverage,
    gateway,
    localized
  })),
  progress: [{
    book: 'Ruth',
    chapters: ['done', 'done', 'revise', 'translate']
  }, {
    book: 'Jonah',
    chapters: ['done', 'revise', 'understand', 'understand']
  }, {
    book: 'Mark',
    chapters: ['revise', 'translate', 'translate', 'understand', 'understand', null, null, null, null, null, null, null, null, null, null, null]
  }]
};
window.GG_NS = () => window.GenerativeGlassDesignSystem_1a4c8e || window.GenerativeGlass || {};

// Boot: prefer the compiled bundle; fall back to components-loader.js (in-browser transpile) while the bundle is absent.
window.GG_boot = async function (src, base = '../../') {
  if (!window.GenerativeGlassDesignSystem_1a4c8e) {
    const base = document.currentScript ? '' : '';
    const s = document.createElement('script');
    s.src = base + 'components-loader.js';
    document.head.appendChild(s);
    await new Promise(r => {
      const t = () => window.ggComponentsReady ? window.ggComponentsReady.then(r) : setTimeout(t, 60);
      t();
    });
  }
  const code = await (await fetch(src)).text();
  const out = Babel.transform(code, {
    presets: ['react'],
    filename: src
  }).code;
  const el = document.createElement('script');
  el.textContent = out;
  document.body.appendChild(el);
};
// Template embed: load a kit app as a global React component. Returns a promise for the component.
window.GG_loadApp = function (kit, globalName, base) {
  window.GG_EMBED = true;
  window.__ggApps = window.__ggApps || {};
  if (!window.__ggApps[globalName]) window.__ggApps[globalName] = window.GG_boot(base + 'ui_kits/' + kit + '/app.jsx', base).then(() => window[globalName]);
  return window.__ggApps[globalName];
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/kit-base.js", error: String((e && e.message) || e) }); }

// world-outline.js
try { (() => {
// <gg-world-outline>: hairline world outline (Natural Earth 110m via world-atlas, public domain) in a fixed 1000x600 viewBox,
// projected with d3.geoNaturalEarth1().fitSize([1000,600]) — the same projection the constellation uses to place orbs.
// Requires window.d3 and window.topojson (pinned tags in the page head). Stroke uses currentColor.
(function () {
  const W = 1000,
    H = 600,
    URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';
  let geo = null;
  function load() {
    if (geo) return geo;
    geo = fetch(URL).then(r => r.json());
    return geo;
  }
  function ready() {
    return new Promise(res => {
      const t = () => window.d3 && window.topojson ? res() : setTimeout(t, 60);
      t();
    });
  }
  class GGWorldOutline extends HTMLElement {
    async connectedCallback() {
      if (this._done) return;
      this._done = true;
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      await ready();
      const topo = await load();
      const d3 = window.d3,
        countries = window.topojson.feature(topo, topo.objects.countries);
      const proj = d3.geoNaturalEarth1().fitSize([W, H], {
        type: 'Sphere'
      });
      const path = d3.geoPath(proj);
      const ns = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none';
      const sphere = document.createElementNS(ns, 'path');
      sphere.setAttribute('d', path({
        type: 'Sphere'
      }));
      sphere.setAttribute('fill', 'none');
      sphere.setAttribute('stroke', 'currentColor');
      sphere.setAttribute('stroke-width', '.6');
      sphere.setAttribute('opacity', '.35');
      const land = document.createElementNS(ns, 'path');
      land.setAttribute('d', path(countries));
      land.setAttribute('fill', 'currentColor');
      land.setAttribute('fill-opacity', '.06');
      land.setAttribute('stroke', 'currentColor');
      land.setAttribute('stroke-width', '.5');
      land.setAttribute('stroke-linejoin', 'round');
      land.setAttribute('vector-effect', 'non-scaling-stroke');
      const grat = document.createElementNS(ns, 'path');
      grat.setAttribute('d', path(d3.geoGraticule().step([30, 30])()));
      grat.setAttribute('fill', 'none');
      grat.setAttribute('stroke', 'currentColor');
      grat.setAttribute('stroke-width', '.4');
      grat.setAttribute('opacity', '.18');
      svg.append(grat, land, sphere);
      this.append(svg);
      this.dispatchEvent(new CustomEvent('gg-world-ready', {
        bubbles: true
      }));
    }
  }
  if (!customElements.get('gg-world-outline')) customElements.define('gg-world-outline', GGWorldOutline);
  // Shared helper for callers that place points on the same projection.
  window.ggProject = function (lon, lat) {
    if (!window.d3) return null;
    const p = window.d3.geoNaturalEarth1().fitSize([W, H], {
      type: 'Sphere'
    })([lon, lat]);
    return p ? {
      x: p[0] / W * 100,
      y: p[1] / H * 100
    } : null;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "world-outline.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectConstellation = __ds_scope.ProjectConstellation;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.GlassField = __ds_scope.GlassField;

__ds_ns.GlassSearch = __ds_scope.GlassSearch;

__ds_ns.GlassSegmented = __ds_scope.GlassSegmented;

__ds_ns.GlassSelect = __ds_scope.GlassSelect;

__ds_ns.GlassToggle = __ds_scope.GlassToggle;

__ds_ns.AuroraField = __ds_scope.AuroraField;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.DotRing = __ds_scope.DotRing;

__ds_ns.Filament = __ds_scope.Filament;

__ds_ns.GlassButton = __ds_scope.GlassButton;

__ds_ns.GlassChip = __ds_scope.GlassChip;

__ds_ns.GlassIconButton = __ds_scope.GlassIconButton;

__ds_ns.GlassInput = __ds_scope.GlassInput;

__ds_ns.GlassSurface = __ds_scope.GlassSurface;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.iconNames = __ds_scope.iconNames;

__ds_ns.LanguagePicker = __ds_scope.LanguagePicker;

__ds_ns.DesktopShell = __ds_scope.DesktopShell;

__ds_ns.GlassSheet = __ds_scope.GlassSheet;

__ds_ns.GlassTabBar = __ds_scope.GlassTabBar;

__ds_ns.ProgressGrid = __ds_scope.ProgressGrid;

__ds_ns.CatalogRow = __ds_scope.CatalogRow;

__ds_ns.ResourceCard = __ds_scope.ResourceCard;

__ds_ns.ResourceStack = __ds_scope.ResourceStack;

__ds_ns.ReviewThread = __ds_scope.ReviewThread;

__ds_ns.KeyTermPopover = __ds_scope.KeyTermPopover;

__ds_ns.ScripturePassage = __ds_scope.ScripturePassage;

__ds_ns.SyncBadge = __ds_scope.SyncBadge;

__ds_ns.SurveyQuestion = __ds_scope.SurveyQuestion;

})();
