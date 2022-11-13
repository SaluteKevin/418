<script lang="js">
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
    const box = ref(null);

      onMounted(()=>{
      const orbitCtrl = renderer?.value?.three.cameraCtrl;
        orbitCtrl.enableZoom = false;


     });



    function onReady(e) {


      console.log("Render is ready", e);
    }






    return { onReady,renderer ,box};
  },
  data(){
    return{
      resize:true,

    }
  },



});
</script>

<template>
  <Renderer ref="renderer" resize="true" orbitCtrl alpha>
    <Camera :position="{ x: 14, y: 12, z: 5 }" />
    <Scene>
      <AmbientLight />
      <PointLight color="white" :intensity="1" />

      <GltfModel
        src="@/dog.glb"
        @load="onReady"
        ref="box"
        :rotation="{ x: 0, y: 0.5, z: 0.06 }"
        :scale="{ x: 1, y: 1, z: 1 }"
      />
    </Scene>
  </Renderer>
</template>

<style lang="scss" scoped></style>
