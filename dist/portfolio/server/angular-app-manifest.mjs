
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 70887, hash: 'c12026797e7b818898a7cb5e0feca6d7846270460123af7f9e8e200335f7f4ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 66750, hash: '3c6c2a8c53c5b1cf108859f176d2bcc01943dc3995c21636ffa973f386c9d7be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 87693, hash: '93d26946bf158cac528aea2852b6403c74f7d9a9b5374dde66ee6cfe6ec2be27', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 89376, hash: '94b2c38fd629b8dee456eddd49b5fb2a4686a60db5d7eef9e2ed3b736d840e43', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87824, hash: '8c6c5d53508f67f9111c893967628d565efc232d5c7a2921aa733b40c22d89d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 102575, hash: '19f203e1bf6197690929bf11a3b91341de335b15dd46d1786453629d5ffef9c8', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 78268, hash: 'd18ae9d4f9441702f01b63219713e077d91d00174a2a300b8733a768c5918227', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 125351, hash: '53d599c2c93b99fd17b3c03c9d2b5d2f8d373a0357df60372d5d214e879d46e3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-J7X66F4K.css': {size: 341524, hash: 'RHYTB/Ir6gQ', text: () => import('./assets-chunks/styles-J7X66F4K_css.mjs').then(m => m.default)}
  },
};
