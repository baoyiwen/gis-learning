import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'cesium/Build/Cesium/Widgets/widgets.css'; // 引入样式（vite-plugin-cesium 会处理静态资源）

createApp(App).mount('#app')
