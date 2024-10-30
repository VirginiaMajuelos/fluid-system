import{j as g}from"./jsx-runtime-CkxqCPlQ.js";import{P as o}from"./index-C1dzxQ9A.js";import"./index-DJO9vBfz.js";const a=({status:s,children:x})=>{const T={primary:"#ffa294",secondary:"#a3a3f9",tertiary:"#545fe7"},f={dark:"#151321",light:"#f4f4f4"};return g.jsx("span",{className:`fs-text fs-text--${s}`,style:{backgroundColor:T[s],color:f.light},children:x})};a.propTypes={status:o.oneOf(["primary","secondary","tertiary"]).isRequired,children:o.node.isRequired};a.__docgenInfo={description:"",methods:[],displayName:"PillText",props:{status:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"tertiary"',computed:!1}]},required:!0},children:{description:"",type:{name:"node"},required:!0}}};const _={title:"Atoms/PillText",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{status:"primary",children:"Primary Text"}},e={args:{status:"secondary",children:"Secondary Text"}},t={args:{status:"tertiary",children:"Tertiary Text"}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    status: "primary",
    children: "Primary Text"
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "secondary",
    children: "Secondary Text"
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,y,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: "tertiary",
    children: "Tertiary Text"
  }
}`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const q=["PrimaryText","SecondaryText","TertiaryText"];export{r as PrimaryText,e as SecondaryText,t as TertiaryText,q as __namedExportsOrder,_ as default};
