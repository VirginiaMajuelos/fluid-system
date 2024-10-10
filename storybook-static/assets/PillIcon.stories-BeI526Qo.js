import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{P as e}from"./index-C1dzxQ9A.js";import{G as k,a as v,b as x}from"./index-bnTqyAtF.js";function S(r){return k({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"},child:[]},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"},child:[]}]})(r)}const c=({status:r,shape:t,showIcon:q,backgroundColor:b,fontColor:l})=>{const w=()=>{switch(r){case"correct":return o.jsx(x,{});case"warning":return o.jsx(v,{});case"alert":return o.jsx(S,{});default:return null}},I={backgroundColor:b||"transparent",color:l||"inherit"},y={correct:"#15be77",warning:"#ffa100",alert:"#ff005c"};return o.jsx("span",{className:`fs-icon fs-icon--${r} fs-icon--${t}`,style:{...I,backgroundColor:y[r],color:l},children:q&&(t==="circle"||t==="square")&&w()})};c.propTypes={status:e.oneOf(["correct","warning","alert"]).isRequired,shape:e.oneOf(["circle","square"]).isRequired,showIcon:e.bool,backgroundColor:e.string,fontColor:e.string};c.__docgenInfo={description:"",methods:[],displayName:"PillIcon",props:{status:{description:"",type:{name:"enum",value:[{value:'"correct"',computed:!1},{value:'"warning"',computed:!1},{value:'"alert"',computed:!1}]},required:!0},shape:{description:"",type:{name:"enum",value:[{value:'"circle"',computed:!1},{value:'"square"',computed:!1}]},required:!0},showIcon:{description:"",type:{name:"bool"},required:!1},backgroundColor:{description:"",type:{name:"string"},required:!1},fontColor:{description:"",type:{name:"string"},required:!1}}};const _={title:"Atoms/PillIcon",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["correct","warning","alert"]},shape:{control:"select",options:["circle","square"]},showIcon:{control:"boolean"}}},a={args:{status:"correct",shape:"circle",showIcon:!0,backgroundColor:"#15be77",fontColor:"#fff"}},n={args:{status:"warning",shape:"square",showIcon:!0,backgroundColor:"#ffa100",fontColor:"#fff"}},s={args:{status:"alert",shape:"square",showIcon:!0,backgroundColor:"#ff005c",fontColor:"#fff"}};var i,u,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: "correct",
    shape: "circle",
    showIcon: true,
    backgroundColor: "#15be77",
    fontColor: "#fff"
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,d,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: "warning",
    shape: "square",
    showIcon: true,
    backgroundColor: "#ffa100",
    fontColor: "#fff"
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,h,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: "alert",
    shape: "square",
    showIcon: true,
    backgroundColor: "#ff005c",
    fontColor: "#fff"
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const z=["CircleCorrect","SquareWarning","SquareAlert"];export{a as CircleCorrect,s as SquareAlert,n as SquareWarning,z as __namedExportsOrder,_ as default};
