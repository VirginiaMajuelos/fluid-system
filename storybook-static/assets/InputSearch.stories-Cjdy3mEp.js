import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as u}from"./index-DJO9vBfz.js";import{d as _}from"./debounce-C1X4Slh7.js";import{P as d}from"./index-C1dzxQ9A.js";import"./isSymbol-CmA4VMiP.js";const c=({onSearchChange:e,labelColor:g="fs-txt--light"})=>{const[h,l]=u.useState(""),s=u.useCallback(_(a=>{e(a)},300),[e]),I=a=>{const S=a.target.value;l(S),s(S)},j=a=>{a.preventDefault()};return o.jsxs("form",{onSubmit:j,children:[o.jsx("label",{className:g,children:"Component name:"}),o.jsx("input",{type:"text",placeholder:"Search...",className:"fs-inputSearch","aria-label":"Buscar",onChange:I,value:h})]})};c.propTypes={onSearchChange:d.func.isRequired,labelColor:d.string};c.__docgenInfo={description:"",methods:[],displayName:"InputSearch",props:{labelColor:{defaultValue:{value:'"fs-txt--light"',computed:!1},description:"",type:{name:"string"},required:!1},onSearchChange:{description:"",type:{name:"func"},required:!0}}};const E={title:"Atoms/InputSearch",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{onSearchChange:{action:"onSearchChange"},labelColor:{control:{type:"select",options:["fs-txt--light","fs-txt--dark"]}}}},p=e=>{const[g,h]=u.useState(""),l=s=>{h(s),e.onSearchChange(s)};return o.jsx(c,{...e,onSearchChange:l})},r=p.bind({});r.args={onSearchChange:e=>console.log("Search text:",e),labelColor:"fs-txt--dark"};const t=p.bind({});t.args={onSearchChange:e=>console.log("Search text:",e),labelColor:"fs-txt--light"};const n=p.bind({});n.args={onSearchChange:e=>console.log("Search text:",e),placeholder:"Buscar componente...",labelColor:"fs-txt--dark"};var i,m,C;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = value => {
    setSearchText(value);
    args.onSearchChange(value);
  };
  return <InputSearch {...args} onSearchChange={handleSearchChange} />;
}`,...(C=(m=r.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var x,f,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = value => {
    setSearchText(value);
    args.onSearchChange(value);
  };
  return <InputSearch {...args} onSearchChange={handleSearchChange} />;
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,v,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = value => {
    setSearchText(value);
    args.onSearchChange(value);
  };
  return <InputSearch {...args} onSearchChange={handleSearchChange} />;
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const N=["Default","LightLabel","CustomPlaceholder"];export{n as CustomPlaceholder,r as Default,t as LightLabel,N as __namedExportsOrder,E as default};
