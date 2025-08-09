:root{--red:#E60000;--muted:#6b7280}
body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial; background:#f8fafc;color:#111}
.container{max-width:980px;margin:32px auto;padding:20px}
.hero{display:flex;gap:20px;background:#fff;padding:20px;border-radius:12px;align-items:center}
.left{flex:1}
.avatar img{width:96px;height:96px;border-radius:12px;object-fit:cover}
.cta a{display:inline-block;margin-top:10px;padding:8px 12px;background:var(--red);color:#fff;border-radius:8px;text-decoration:none}
.right{width:220px}
.about, .projects{margin-top:18px;padding:18px;background:#fff;border-radius:12px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.card{padding:12px;border-radius:8px;border:1px solid #eef2f7;background:#fff}
.card h3{margin:0 0 6px 0}
.meta{color:var(--muted);font-size:13px}
footer{margin-top:20px;text-align:center;color:var(--muted)}