import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Keep only Wi-Fi in the printed Network URLs (excluding virtual adapters like Ethernet 2 & 3)
const filterNetworkUrls = (): Plugin => ({
  name: 'filter-network-urls',
  configureServer(server) {
    const origPrint = server.printUrls
    server.printUrls = () => {
      if (server.resolvedUrls) {
        const names = server.resolvedUrls.networkInterfaceNames || []
        const wifiIndex = names.findIndex((name) => /wi-fi|wlan/i.test(name || ''))
        if (wifiIndex !== -1 && server.resolvedUrls.network[wifiIndex]) {
          server.resolvedUrls.network = [server.resolvedUrls.network[wifiIndex]]
          server.resolvedUrls.networkInterfaceNames = [names[wifiIndex]]
        }
      }
      origPrint.call(server)
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), filterNetworkUrls()],
  server: {
    host: true, // Listen on all network addresses (0.0.0.0) so Localhost & Network both work
  },
})
