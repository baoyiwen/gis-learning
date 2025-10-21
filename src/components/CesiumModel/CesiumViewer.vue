<template>
    <div ref="cesiumElement" class="cesium-element-layout"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Viewer, Cartesian3, Color, VerticalOrigin } from "cesium"; 
const cesiumElement = ref<HTMLDivElement | null>(null);
let viewer: Viewer | null = null;
onMounted(() => {
    if(!cesiumElement.value) {
        return
    }
    // 如果你打算使用 Cesium Ion 的地形/影像，请在这里设置 token：
    // Cesium.Ion.defaultAccessToken = 'YOUR_ION_TOKEN'

    // 不使用地形（避免需要 token），只用默认影像
    viewer = new Viewer(cesiumElement.value, {
        animation: false,
        timeline: false,
        // 若需要地形，请启用下面一行（确保有 Ion token）：
        // terrainProvider: Cesium.createWorldTerrain()
    })
    // 添加测试实体（北京点）
    viewer.entities.add({
        position: Cartesian3.fromDegrees(116.391, 39.906, 0),
        point: { pixelSize: 10, color: Color.RED },
        label: { text: '测试点（北京）', font: '14px sans-serif', verticalOrigin: VerticalOrigin.BOTTOM }
    })

    viewer.zoomTo(viewer.entities)
}) 

onBeforeUnmount(() => {
    if(viewer) {
        viewer.destroy();
        viewer = null;
    }
})
</script>
<style lang="less">
.cesium-element-layout {
    width: 100%;
    height: 100%;
}
</style>