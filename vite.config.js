import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  devServer: {
    proxy: {
      /*
      '/v1':{
        target: 'https://dictionary-api-4rbqr7xcwq-de.a.run.app',
        pathRewrite: {'^/v1':''},
        changeOrigin: true,
        ws: true
      },*/
      
      '/v1': {
        target: 'https://dictionary-api-4rbqr7xcwq-de.a.run.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
      configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, options.target + proxyReq.path);
          });

          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Receiving Response from the Target:', req.method, options.target + req.url);
          });

          proxy.on('error', (err, req, res) => {
            console.log('Error Occurred:', err);
          });
      }
    }
  }
})
