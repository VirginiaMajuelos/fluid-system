import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{P as t}from"./index-C1dzxQ9A.js";const i=({variant:n="dots",size:x="medium",color:j="primary"})=>e.jsx("div",{className:`fs-spinner fs-spinner--${n} fs-spinner--${x} fs-spinner--${j} fs-m4`,children:n==="dots"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fs-spinner__dot"}),e.jsx("div",{className:"fs-spinner__dot"}),e.jsx("div",{className:"fs-spinner__dot"})]}):e.jsx("div",{className:"fs-spinner__circle"})});i.propTypes={variant:t.oneOf(["dots","circle"]).isRequired,size:t.oneOf(["medium","large"]),color:t.oneOf(["primary","secondary","tertiary"])};i.defaultProps={size:"medium",color:"primary"};i.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{variant:{defaultValue:{value:'"dots"',computed:!1},description:"",type:{name:"enum",value:[{value:'"dots"',computed:!1},{value:'"circle"',computed:!1}]},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]},required:!1}}};const T={title:"Atoms/Spinner",component:i,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["dots","circle"],description:"Tipo de spinner a mostrar: dots o circle."},size:{control:{type:"select"},options:["medium","large"],description:"Tamaño del spinner: medium o large."},color:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Color del spinner: primary, secondary o tertiary."}},tags:["autodocs"]},r={args:{variant:"dots",size:"medium",color:"primary"}},s={args:{variant:"circle",size:"medium",color:"secondary"}},a={args:{variant:"dots",size:"large",color:"tertiary"}},o={args:{variant:"circle",size:"large",color:"primary"}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "dots",
    size: "medium",
    color: "primary"
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    size: "medium",
    color: "secondary"
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,f,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "dots",
    size: "large",
    color: "tertiary"
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,_,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "circle",
    size: "large",
    color: "primary"
  }
}`,...(z=(_=o.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};const q=["Dots","Circle","LargeDots","LargeCircle"];export{s as Circle,r as Dots,o as LargeCircle,a as LargeDots,q as __namedExportsOrder,T as default};
