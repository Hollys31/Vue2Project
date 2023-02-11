import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
Vue.use(Router)
export const routes = [
 
  {
    path: 'index',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: '/index',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
    ]
  },
  {
    path:"",
    component:Layout,
    children:[
      {
        path:"/photoSphereViewer",
        name:"photoSphereViewer",
        component:()=>import('@/views/photoSphereViewer/index'),
      }
    ]
  },
  {
    path:"",
    component:Layout,
    children:[
      {
        path:"/handsontable",
        name:"handsontable",
        component:()=>import('@/views/handsontable/index'),
      }
    ]
  },
  
  {
    path:'/wordToHtmlIndex',
    name:'wordToHtmlIndex',
    component:Layout,
    children:[
      {
        path:"previewWord",
        name:'perviewWord',
        component:()=>import('@/views/wordToHtml/previewWord')
      },
      {
        path:"wordToHtml",
        name:'wordToHtml',
        component:()=>import('@/views/wordToHtml/wordToHtml')
      }
    ]
  },
  {
    path:"",
    component:Layout,
    children:[
      {
        path:"/time",
        name:"time",
        component:()=>import('@/views/time/index'),
      },
      {
        path:"/datePicker",
        name:"datePicker",
        component:()=>import('@/views/time/datePicker'),
      }
    ]
  },  
]



export default new Router({ 
    routes
  })