import{r as i,c as t,h as l}from"./p-8d66a717.js";const o=class{constructor(l){i(this,l),this.clicked=t(this,"clicked",7),this.iconPosition="left",this.color="inherit",this.preventClick=!1}onClick(i){this.preventClick&&i.preventDefault(),this.clicked.emit(i)}render(){const i=[];return-1===["left","right","",void 0,null].indexOf(this.iconPosition)?console.warn(`sk-link (iconPosition): Unknown value: ${this.iconPosition} - Allowed values: left (default) and right`):i.push("icon-position-"+this.iconPosition),-1===["inherit","yellow","black","light-black","white","",void 0,null].indexOf(this.color)?console.warn(`sk-link (color): Unknown value: ${this.color} - Allowed values: inherit (default), yellow, black, light-black and white`):i.push("color-"+this.color),l("a",{href:this.href,target:this.target,rel:this.rel,class:i.join(" "),onClick:this.onClick.bind(this)},"right"!==this.iconPosition?this.icon:"",l("sk-typography",{class:"text"},l("slot",null)),"right"==this.iconPosition?this.icon:"")}};o.style="*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;vertical-align:middle}a{display:inline-flex;align-items:center;color:inherit;text-decoration:none}a:hover{opacity:0.5}a.color-yellow{color:#ffcc00}a.color-black{color:#222}a.color-light-black{color:#444}a.color-white{color:#fff5cc}a.icon-position-right .text{margin-left:0;margin-right:0.5rem}.text{display:inline-block;margin-left:0.5rem;text-decoration:underline}";export{o as sk_link}