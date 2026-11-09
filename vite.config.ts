import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Keep only Wi-Fi in the printed Network URLs (excluding virtual adapters like Ethernet 2 & 3)
const filterNetworkUrls = (): Plugin => ({
  name: 'filter-network-urls',
  configureServer(server) {
    const origPrint = server.printUrls
    server.printUrls = () => {
      const resolvedUrls = server.resolvedUrls as (typeof server.resolvedUrls & { networkInterfaceNames?: string[] }) | null
      if (resolvedUrls) {
        const names = resolvedUrls.networkInterfaceNames || []
        const wifiIndex = names.findIndex((name: string) => /wi-fi|wlan/i.test(name || ''))
        if (wifiIndex !== -1 && resolvedUrls.network[wifiIndex]) {
          resolvedUrls.network = [resolvedUrls.network[wifiIndex]]
          resolvedUrls.networkInterfaceNames = [names[wifiIndex]]
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
