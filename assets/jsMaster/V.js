var param={},judul={},slider=Array(),informasi=Array(),infoSupport=Array(),infoSupport1=Array(),infoSupport2=Array(),viewWebsite=""
  ,chart=Array(),form={},dropdonw={},navBar={},menuSupport=[],header={},list=[],navList=[],_={},
  color=Array(),icon=Array(),pjudulRincian=Array(),duplikat=Array();

var img={
  size :15000000 //2 MB
  ,data:Array()
  ,fileName:["jpg","jpeg","png","bmp"]
  ,maxUpload:2
  ,idView:"images"
},
_file={
  size :15000000 //2 MB
  ,data:Array()
  ,fileName:["application/pdf","pdf"]
  ,maxUpload:2
  ,idView:"files"
},
_pageLength=25,
_notif=false,
_vmaxTabel=3;
var uang = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD',
      minimumFractionDigits: 3 });
var date            = new Date();
var _tamp1="",_tamp2="";
var _judulExpJS="Laporan_";


// for editorTiny 
var KTAppOptions = {
  "colors": {
      "state": {
          "brand": "#5d78ff",
          "dark": "#282a3c",
          "light": "#ffffff",
          "primary": "#5867dd",
          "success": "#34bfa3",
          "info": "#36a3f7",
          "warning": "#ffb822",
          "danger": "#fd3995"
      },
      "base": {
          "label": [
              "#c5cbe3",
              "#a1a8c3",
              "#3d4465",
              "#3e4466"
          ],
          "shape": [
              "#f0f3ff",
              "#d9dffa",
              "#afb4d4",
              "#646c9a"
          ]
      }
  }
};