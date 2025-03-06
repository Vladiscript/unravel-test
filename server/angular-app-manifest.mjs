
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-PXZBIHQV.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 979, hash: '3eb1389592eb811441287a5d8132c70d96388a7b5ad6480fcc092b97b7f1939d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: '41dc83815c35655e1b6feaa9a5886cfbc1f34b80ffa51e51b7d4638fcda7766e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CLA6ATDD.css': {size: 339, hash: 'bZAZ9rxenQM', text: () => import('./assets-chunks/styles-CLA6ATDD_css.mjs').then(m => m.default)}
  },
};
