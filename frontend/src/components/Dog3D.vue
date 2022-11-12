<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import {
  Renderer,
  Scene,
  Camera,
  PointLight,
  AmbientLight,
  GltfModel,
} from "troisjs";

export default defineComponent({
  components: {
    Renderer,
    Scene,
    Camera,
    PointLight,
    AmbientLight,
    GltfModel,
  },
  setup() {
    // const orbitCtrl = this.$ref.renderer.three.cameraCtrl;
    const renderer = ref(null);

    function onReady(e) {
      console.log("Render is ready", e);
    }

    return { onReady };
  },
});
</script>

<template>
  <div class="container-fluid box-container">
    <Renderer ref="renderer" resize="window" orbitCtrl alpha>
      <Camera :position="{ x: 14, y: 12, z: 10 }" />
      <Scene>
        <AmbientLight />
        <PointLight color="white" :intensity="1" />

        <GltfModel
          src="/assets/3D/Dog/dog.glb"
          @load="onReady"
          ref="box"
          :rotation="{ x: 0, y: 0.5, z: 0.06 }"
          :scale="{ x: 0.8, y: 0.8, z: 0.8 }"
        />
      </Scene>
    </Renderer>
  </div>
</template>

<style lang="scss" scoped></style>
