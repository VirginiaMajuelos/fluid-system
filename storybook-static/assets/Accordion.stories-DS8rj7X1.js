import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as m}from"./index-DJO9vBfz.js";import{P as i}from"./index-C1dzxQ9A.js";import{A as f}from"./index-M4bq2I6V.js";const n=({variant:o="light",children:t,...a})=>{const[r,c]=m.useState(!1),h=()=>{c(u=>!u)};return e.jsxs("div",{className:`fs-accordion fs-accordion--${o}`,children:[e.jsxs("div",{className:`fs-accordion--header fs-accordion--header--${o}`,onClick:h,...a,children:[e.jsx("p",{className:"fs-body",children:"Accordion"}),e.jsx(f,{className:`fs-accordion--icon ${r?"fs-accordion--icon__rotate":""}`})]}),e.jsx("div",{className:`fs-accordion-body ${r?"fs-accordion-body__show":""} fs-accordion-body--${o}`,children:e.jsx("p",{className:"fs-body",children:t||"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})})]})};n.propTypes={variant:i.oneOf(["light","inverse"]),children:i.node.isRequired};n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{variant:{defaultValue:{value:'"light"',computed:!1},description:"",type:{name:"enum",value:[{value:'"light"',computed:!1},{value:'"inverse"',computed:!1}]},required:!1},children:{description:"",type:{name:"node"},required:!0}}};const S={title:"Molecules/Accordion",component:n,decorators:[o=>e.jsx("div",{style:{margin:"3rem"},children:e.jsx(o,{})})],tags:["autodocs"],parameters:{layout:"padded"}},y=o=>{const[t,a]=m.useState(!1),r=()=>{a(c=>!c)};return e.jsx(n,{...o,show:t,onShow:r,children:o.children})},s=y.bind({});s.args={variant:"inverse",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."};var d,l,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(prev => !prev);
  };
  return <Accordion {...args} show={show} onShow={handleShow}>
      {args.children}
    </Accordion>;
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Default"];export{s as Default,j as __namedExportsOrder,S as default};
