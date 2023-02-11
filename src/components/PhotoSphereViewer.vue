<template>
  <div id="viewer" >
    <!-- <div class="gallery-wrap">
      <ul>
        <li></li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { Viewer } from "@photo-sphere-viewer/core";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";


export default {
  props: {
    hasAnimate: {
      type: Boolean,
      default: false,
    },
    imgList: [],
    hasGallery:{
      type:Boolean,
      default:true
    }
  },
  components: {},
  data() {
    return {
      viewer: "",
      panoramaUrl:'',
      markersPlugin: "",
      autorotatePlugin: "",
      galleryPlugin: "",
      currIndex:0,
      animatedValues: {
        pitch: { start: -Math.PI / 2, end: 0.2 },
        yaw: { start: Math.PI, end: 0 },
        zoom: { start: 0, end: 50 },
        fisheye: { start: 2, end: 0 },
      },
      defaultUrl: require("../assets/3.jpg"),
    };
  },
  created() {},
  mounted() {
   
    this.panoramaUrl=this.imgList[0].panorama||this.defaultUrl;
    this.initViewer();
    this.handelListenerViewerClick();
    this.handleSelectMarker();
    this.handleHoverMarker();
    this.handleLeaveMarker();
    this.$nextTick(()=>{
      this.handleGalleryChange()
    })
  },
  watch: {
    
   /*  galleryPlugin:{
      handler(newUrl, oldUrl) {
      console.log(oldUrl);
      console.log(newUrl);
      
    },
    deep: true
    }, */
  },
  methods: {
    initViewer() {
      const _this = this;
      this.viewer = new Viewer({
        container: "viewer",
        panorama:this.panoramaUrl||this.defaultUrl,
        caption: "江西憶源多媒体科技有限公司",
        loadingImg: require("../assets/loader.gif"),
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: false,
        /*     defaultPitch: _this.animatedValues.pitch.start,
        defaultYaw:  _this.animatedValues.yaw.start,
        defaultZoomLvl:  _this.animatedValues.zoom.start,
        fisheye:  _this.animatedValues.fisheye.start, */
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
              autorotatePitch: _this.animatedValues.pitch.end,
              autostartOnIdle: false,
              autorotateSpeed: '3rpm',
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
      _this.autorotatePlugin.stop();
      _this.galleryPlugin = _this.viewer.getPlugin(GalleryPlugin);
      if(_this.hasGallery){
         _this.galleryPlugin.setItems(_this.imgList); //设置图库
      }
      _this.viewer.addEventListener("ready", _this.handleViewerReady, {
        once: true,
      });
    },
    handleViewerReady() {
      this.markersPlugin.setMarkers(this.imgList[this.currIndex].markers); //设置标签
     /*  if (this.hasAnimate) {
        animateFun();
      } */
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
    //清除标记
    clearMarker() {
      this.markersPlugin.clearMarkers();
    },
    //更新标记
    updateMarker(id,imgUrl){
       this.markersPlugin.updateMarker({
            id: id,
            image:imgUrl,
          });
          
    },
    updateIndex(index){
      this.currIndex=index;
      this.panoramaUrl=this.imgList[index].panorama;
    },
    //选择标记事件
    handleSelectMarker() {
      const _this = this;
      this.markersPlugin.addEventListener("select-marker", ({ marker }) => {
        this.$emit("selectMarker", marker);
        
         
      });
    },
    //标记悬停事件
    handleHoverMarker() {
      this.markersPlugin.addEventListener("enter-marker", ({ marker }) => {
        console.log("enter");
      });
    },
    handleLeaveMarker() {
      this.markersPlugin.addEventListener("leave-marker", ({ marker }) => {
        console.log("leave");
      });
    },
    //gallery图库列表切换
    handleGalleryChange(){
            const _this=this;
       document.addEventListener('click',function(e){
        console.log(e);
        var element=document.elementFromPoint(e.clientX,e.clientY);
        if(element.dataset&&element.dataset.psvGalleryItem){
          const id=element.dataset.psvGalleryItem;
          const _sindex=_this.imgList.findIndex((data)=>{
            return data.id==id
          })
          _this.currIndex=_sindex;
          _this.panoramaUrl=_this.imgList[_sindex].panorama;
          _this.handelChangeViewer();
        }

      })
    },
    //viewer 切换场景
    handelChangeViewer() {
      const _this = this;
      if (_this.viewer) {
        _this.clearMarker();
        _this.viewer.setPanorama(_this.panoramaUrl).then(() =>{
          _this.markersPlugin.setMarkers(_this.imgList[_this.currIndex].markers);
        });
      }
    },
    //viewer点击事件监听
    handelListenerViewerClick() {
      const _this = this;
      this.viewer.addEventListener("click", ({ data }) => {
        if (!data.rightclick) {
          _this.$emit("viewerClick", data);
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
#viewer{
  width: 100%;
  height: 100%;
}
</style>