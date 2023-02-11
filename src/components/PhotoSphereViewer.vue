<template>
  <div id="viewer" style="width: 80vw; height: 90vh"></div>
</template>

<script>
import { Viewer } from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";
import { markers, photos } from "@/components/data.js";

export default {
  props: {
    "hasAnimate":{
      type:Boolean,
      default:false
    }
  },
  components: {},
  data() {
    return {
      viewer: "",
      markersPlugin: "",
      autorotatePlugin: "",
      galleryPlugin:"",
      animatedValues: {},
      imgurl1: require("../assets/1.jpg"),
      imgurl2: require("../assets/2.jpg"),
      imgurl3: require("../assets/3.jpg"),
    };
  },
  created() {},
  mounted() {

    this.initViewer();
    this.handelListenerViewerClick();
  },
  watch:{
    'viewer.dynamics.config.panorama'(newUrl, oldUrl){
      console.log(oldUrl);
      console.log(newUrl);
      if(oldUrl){
        
        this.clearMarker();
      }
      
    }
  },
  methods: {
    initViewer() {
      const _this = this;
      const animatedValues = {
        pitch: { start: -Math.PI / 2, end: 0.2 },
        yaw: { start: Math.PI, end: 0 },
        zoom: { start: 0, end: 50 },
        fisheye: { start: 2, end: 0 },
      };
      this.animatedValues = animatedValues;
      this.viewer = new Viewer({
        container: "viewer",
        panorama: _this.imgurl3, //"https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg",
        caption: "江西憶源多媒体科技有限公司",
        loadingImg: require("../assets/loader.gif"),
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: false,
 /*     defaultPitch: animatedValues.pitch.start,
        defaultYaw: animatedValues.yaw.start,
        defaultZoomLvl: animatedValues.zoom.start,
        fisheye: animatedValues.fisheye.start, */
        navbar: [
          "autorotate",
          "zoom",
          "markers",
          "move",
          "download",
          "gallery",
          {
            title: "Change points",
            content: "🔄",
            onClick: _this.randomPoints,
          },
          "caption",
          "fullscreen",
        ],
        plugins: [
          [
            GalleryPlugin,
            {
              visibleOnLoad: true,
              hideOnClick: false,
            },
          ],
          [
            AutorotatePlugin,
            {
              autostartDelay: 0,
              autorotatePitch: animatedValues.pitch.end,
              autostartOnIdle: false,
            },
          ],
          [
            MarkersPlugin,
            {
              markers: [],
            },
          ],
        ],
      });
      _this.markersPlugin = _this.viewer.getPlugin(MarkersPlugin);
      _this.autorotatePlugin = _this.viewer.getPlugin(AutorotatePlugin);
      _this.galleryPlugin=_this.viewer.getPlugin(GalleryPlugin);
      console.log(_this.viewer);
     
      _this.galleryPlugin.setItems(photos);//设置图库
      _this.viewer.addEventListener("ready", _this.handleViewerReady, { once: true });
    },
    handleViewerReady(){
      this.markersPlugin.setMarkers(markers);//设置标签
      if(this.hasAnimate){
        animateFun()
      }
    },
    //动画效果
    animateFun() {
      const _this = this;
       /* _this.autorotatePlugin.stop() */
      _this.viewer
        .animate({
          yaw: 0,
          pitch: 0.5,
          speed: 1000,
        })
        .then(() => {
          /* _this.viewer.setOption("fisheye", _this.animatedValues.fisheye); */
/*           _this.viewer.rotate({
            yaw: _this.animatedValues.yaw,
            pitch: _this.animatedValues.pitch,
          }); */
        /*   _this.viewer.zoom(_this.animatedValues.zoom); */
           /* _this.autorotatePlugin.start() */
        });
    },
    //更新标记
    clearMarker(){
      this.markersPlugin.clearMarkers()
    },
    //viewer点击时间监听
    handelListenerViewerClick() {
      const _this = this;
      this.viewer.addEventListener("click", ({ data }) => {
        if (!data.rightclick) {
          _this.markersPlugin.addMarker({
            id: "#" + Math.random(),
            position: { yaw: data.yaw, pitch: data.pitch },
            image: require("./../assets/local.png"),
            size: { width: 32, height: 32 },
            anchor: "bottom center",
            tooltip: "新增标记",
            data: {
              generated: true,
            },
          });
        }
      });
    },
    randomPoints() {
      this.markersPlugin.showMarkerTooltip("new-marker3");
      /* markersPlugin.toggleMarker(); */
    },
  },
};
</script>
<style lang="scss" scoped>
</style>