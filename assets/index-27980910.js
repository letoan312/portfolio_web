import{j as e,r as c,R as C}from"./react-e38afb93.js";import{a as D}from"./react-dom-2b1100be.js";import{L as I,B}from"./react-router-dom-2ffb8f56.js";import{u as M,H as z,C as x,O as g,P as A,a as w,b as T,F,D as P,c as Q,d as G,e as J}from"./@react-three-4278e28f.js";import{i as H}from"./maath-29fa0221.js";import{m as l}from"./framer-motion-85c1ace6.js";import{T as N}from"./react-tilt-65388038.js";import{d as S}from"./react-vertical-timeline-component-f2406e5f.js";import{e as V}from"./@emailjs-a704afdc.js";import"./@chevrotain-3c9a3002.js";import"./scheduler-765c72db.js";import"./react-router-f031ffac.js";import"./@remix-run-8cf5b07a.js";import"./@babel-98964cd2.js";import"./three-032c3317.js";import"./react-use-measure-cf2030b3.js";import"./debounce-a451ab00.js";import"./its-fine-d813af8c.js";import"./react-reconciler-9074a65d.js";import"./zustand-47653c63.js";import"./three-stdlib-0b5b799d.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-4f9dedb1.js";import"./prop-types-387d7a00.js";import"./classnames-63c61219.js";import"./react-intersection-observer-fef8cb24.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const j=()=>{const{progress:t}=M();return e.jsxs(z,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},Z=()=>{const t=w("../portfolio/planet/scene.gltf");return e.jsx("primitive",{object:t.scene,scale:2.5,"position-y":0,"rotation-y":0})},Y=()=>e.jsx(x,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(c.Suspense,{fallback:e.jsx(j,{}),children:[e.jsx(g,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(Z,{}),e.jsx(A,{all:!0})]})}),R=t=>{const[s]=T([t.imgUrl]);return e.jsxs(F,{speed:1.75,rotationIntensity:1,floatIntensity:2,children:[e.jsx("ambientLight",{intensity:.25}),e.jsx("directionalLight",{position:[0,0,.05]}),e.jsxs("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75,children:[e.jsx("icosahedronGeometry",{args:[1,1]}),e.jsx("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),e.jsx(P,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:s,flatShading:!0})]})]})},q=({icon:t})=>e.jsxs(x,{frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},children:[e.jsxs(c.Suspense,{fallback:e.jsx(j,{}),children:[e.jsx(g,{enableZoom:!1}),e.jsx(R,{imgUrl:t})]}),e.jsx(A,{all:!0})]}),L=({isMobile:t})=>{const s=w("../portfolio/desktop_pc/scene.gltf");return e.jsxs("mesh",{children:[e.jsx("hemisphereLight",{intensity:.15,groundColor:"black"}),e.jsx("spotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,castShadow:!0,"shadow-mapSize":1024}),e.jsx("pointLight",{intensity:1}),e.jsx("primitive",{object:s.scene,scale:t?.5:.75,position:t?[-1.5,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]})]})},W=()=>{const[t,s]=c.useState(!1);return c.useEffect(()=>{const n=window.matchMedia("(max-width: 500px)");s(n.matches);const o=a=>{s(a.matches)};return n.addEventListener("change",o),()=>{n.removeEventListener("change",o)}},[]),e.jsxs(x,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[20,3,5],fov:25},gl:{preserveDrawingBuffer:!0},children:[e.jsxs(c.Suspense,{fallback:e.jsx(j,{}),children:[e.jsx(g,{enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(L,{isMobile:t})]}),e.jsx(A,{all:!0})]})},O=t=>{const s=c.useRef(),[n]=c.useState(()=>H(new Float32Array(5e3),{radius:1.2}));return Q((o,a)=>{s.current.rotation.x-=a/10,s.current.rotation.y-=a/15}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(G,{ref:s,positions:n,stride:3,frustumCulled:!0,...t,children:e.jsx(J,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},U=()=>e.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:e.jsxs(x,{camera:{position:[0,0,1]},children:[e.jsx(c.Suspense,{fallback:null,children:e.jsx(O,{})}),e.jsx(A,{all:!0})]})}),r={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},K=()=>e.jsxs("section",{className:"relative w-full h-screen mx-auto",children:[e.jsxs("div",{className:`${r.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`,children:[e.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-[#915eff]"}),e.jsx("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:`${r.heroHeadText} text-white`,children:["Hi, I'm ",e.jsx("span",{className:"text-[#915eff]",children:" Le Toan"})]}),e.jsxs("p",{className:`${r.heroSubText} mt-2 text-white-100`,children:["An ",e.jsx("span",{className:"text-[#915eff]",children:"Art Enthusiast"})," ",e.jsx("br",{className:"sm:block hidden"})," with a passion for ",e.jsx("span",{className:"text-[#915eff]",children:" 3D and UI-UX Design"}),"."]})]})]}),e.jsx(W,{}),e.jsx("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",children:e.jsx("a",{href:"#about",children:e.jsx("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e.jsx(l.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]}),X="/portfolio/assets/logo-ea54b630.svg",$="/portfolio/assets/backend-565fc01f.png",_="/portfolio/assets/creator-dbbffaec.png",ee="/portfolio/assets/mobile-896ef2f5.png",te="/portfolio/assets/web-0d05165f.png",se="/portfolio/assets/drive-513516e6.png",ae="/portfolio/assets/menu-242d80a8.svg",ne="/portfolio/assets/close-ad0e0ca6.svg",oe="/portfolio/assets/css-79a7f026.png",ie="/portfolio/assets/blender-153554a2.png",re="/portfolio/assets/figma-184a11e6.png",le="data:image/png;base64,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",ce="/portfolio/assets/html-92b76a73.png",de="data:image/png;base64,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",me="/portfolio/assets/ae-7c49fa4b.png",pe="/portfolio/assets/pr-626bca7e.png",xe="/portfolio/assets/reactjs-966214a8.png",Ae="/portfolio/assets/ai-0d9e02a6.png",he="/portfolio/assets/tailwind-6ece120d.png",fe="/portfolio/assets/pts-e15e559b.png",ue="/portfolio/assets/threejs-1d0654a8.svg",ge="/portfolio/assets/ecofr-35e616cf.png",je="/portfolio/assets/tec-072d8d14.png",ve="/portfolio/assets/sags-644309e0.png",be="/portfolio/assets/allblue02-bea02250.png",ye="/portfolio/assets/kbs-7928c76f.png",we="/portfolio/assets/ksf-9f956593.png",Ne="/portfolio/assets/ecofr-7c949f39.png",Se="/portfolio/assets/upyouth-f7af16d2.png",Ee="/portfolio/assets/junctionvn-c6aafded.png",ke="/portfolio/assets/web3space-23929fdc.png",Ce="/portfolio/assets/myself-09c46b0f.png",v=[{id:"about",title:"About"},{id:"work",title:"Work"},{id:"contact",title:"Contact"}],b=[{image:Ce}],De=[{title:"Graphic Designer",icon:te},{title:"3D Designer",icon:ee},{title:"UI/UX Designer",icon:$},{title:"Web Developer",icon:_}],Ie=[{name:"Blender",icon:ie},{name:"Adobe Photoshop",icon:fe},{name:"Adobe Illustrator",icon:Ae},{name:"Adobe Premiere Pro",icon:pe},{name:"Adobe After Effects",icon:me},{name:"HTML 5",icon:ce},{name:"CSS 3",icon:oe},{name:"JavaScript",icon:de},{name:"React JS",icon:xe},{name:"Tailwind CSS",icon:he},{name:"Three JS",icon:ue},{name:"git",icon:le},{name:"figma",icon:re}],Be=[{title:"Head of Design Department",company_name:"Studying Abroad for Gifted Students",icon:ve,iconBg:"#383E56",date:"Sep 2018 -  Aug 2020",points:["Designed the official uniform of SAGS which is proudly worn by SAGSers today.","Lead a team of 5 to market the club's brand and attract more students.","Organized U-Talk 2020, a debating contest with over 40 million VND worth of prize.","Participated in design reviews and provided constructive feedback to other designers."]},{title:"Co-Founder / Head of Design Department",company_name:"All Blue Project",icon:be,iconBg:"#E6DEDD",date:"Jun 2021 - Mar 2022",points:["Sold 319 sets of environmental goods and raised over 15 million VND.","Organized and monitored an online webinar to educate over 100 participants about water pollution.","Organized a charity event to educate 150 students about the danger of intoxicated effluents to marine life."]},{title:"Member of Communications Department",company_name:"Tommorow Entrepreneurs Club (TEC FTU)",icon:je,iconBg:"#383E56",date:"Oct 2022 - Present",points:["Developed and moderated 06 websites owned by TEC FTU.","Moderated the club's social media channels, which held over 300,000 followers and 250,000 likes.","Actively participating in branding Kawai Business Startup, a nationwide-scale startup idea competition held annually by TEC FTU to thousands of audience.","Created the 3D branding kits of Kawai Business Startup 2023's 2nd Round and Kawai Startup Fair 2023, which were record-holding in terms of online reach and engagement.","Lead 33 members to organize and a team of 12 to advertize the Grand Finale of Kawai Business Startup 2023, which accumulated over 10,000 viewers."]},{title:"Co-Founder / UI-UX Designer",company_name:"EcoFrenzy Startup/RiseUp Squad",icon:ge,iconBg:"#E6DEDD",date:"Jan 2023 - Present",points:["Founded EcoFrenzy, a startup that aims to promote Sustainablity through a social media application.","Participated in a team of 12 talents from HUST, UEH, FPT, and FTU to develop the product to the Prototype stage, and continuously improving it to adapt to the needs and problems of the market.","Validated the idea through several contests and achieved Top 01 in two Hackathons, where the team extensively worked to plan and build the product.","Connected with several successful individuals for advice."]}],Me=[{testimonial:"Winner of Sustainability Challenge by VinaCapital Ventures",name:"HackYouth 2023",designation:"Hackathon",company:"UpYouth - VinUni",image:Se},{testimonial:"Winner of Track Cloud - Cloud Application for Community",name:"JunctionX Hanoi 2023",designation:"Hackathon",company:"Junction Vietnam",image:Ee},{testimonial:"Top 14 Blockchain Application",name:"Road to Grizzlython 2023",designation:"Hackathon",company:"Web3 Space",image:ke}],ze=[{name:"KBS 2023 - 2nd Round Branding Kit",description:"A 3D representation of the Kawai Business Startup's logo as a crystal. The 3D model was created using Blender 3D.",tags:[{name:"blender",color:"green-text-gradient"},{name:"photoshop",color:"blue-text-gradient"},{name:"illustrator",color:"pink-text-gradient"}],image:ye,source_code_link:"https://drive.google.com/drive/folders/1svvSX66Y8hHdYZb5z3wAlGD2MqMs2g5a?usp=sharing"},{name:"Kawai Startup Fair 2023 Branding Kit",description:"Kawai Startup Fair 2023's name designed with a Y2K/Aespa vibe.",tags:[{name:"blender",color:"green-text-gradient"},{name:"photoshop",color:"blue-text-gradient"},{name:"illustrator",color:"pink-text-gradient"}],image:we,source_code_link:"https://drive.google.com/drive/folders/1hOZlCqUMeJeepF6tJ0lcbAiBCus3iopB?usp=drive_link"},{name:"EcoFrenzy",description:"A social media platform that promotes sustainable lifestyle through personalized and engaging daily challenges with the application of Cloud technology.",tags:[{name:"sustainability",color:"green-text-gradient"},{name:"social-media",color:"blue-text-gradient"},{name:"startup",color:"pink-text-gradient"}],image:Ne,source_code_link:"https://drive.google.com/file/d/1HdD2S2nDzn2EmbDwchYKKbQTqDy3bm7u/view?usp=sharing"}],Te=()=>{const[t,s]=c.useState(""),[n,o]=c.useState(!1);return e.jsx("nav",{className:`${r.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`,children:e.jsxs("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[e.jsxs(I,{to:"/",className:"flex items-center gap-2",onClick:()=>{s(""),window.scrollTo(0,0)},children:[e.jsx("img",{src:X,alt:"logo",className:"w-9 h-9 object-contain"}),e.jsxs("p",{className:"text-white text-[18px] font-bold cursor-pointer flex",children:["Le Toan ",e.jsx("span",{className:"sm:block hidden",children:"| Portfolio"})]})]}),e.jsx("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:v.map(a=>e.jsx("li",{className:`${t===a.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>s(a.title),children:e.jsx("a",{href:`#${a.id}`,children:a.title})},a.id))}),e.jsxs("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[e.jsx("img",{src:n?ne:ae,alt:"menu",className:"w-[28px] h-[28px] object-contain cursor-pointer",onClick:()=>o(!n)}),e.jsx("div",{className:`${n?"flex":"hidden"} p-6 bg-slate-950/75 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:e.jsx("ul",{className:"list-none flex justify-end items-start flex-col gap-4",children:v.map(a=>e.jsx("li",{className:`${t===a.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,onClick:()=>{o(!n),s(a.title)},children:e.jsx("a",{href:`#${a.id}`,children:a.title})},a.id))})})]})]})})},h=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),m=(t,s,n,o)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:s,delay:n,duration:o,ease:"easeOut"}}}),y=(t,s,n,o)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:s,delay:n,duration:o,ease:"easeOut"}}}),Fe=(t,s)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:s||0}}}),p=(t,s)=>function(){return e.jsxs(l.section,{variants:Fe(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${r.padding} max-w-7xl mx-auto relative z-0`,children:[e.jsx("span",{className:"hash-span",id:s,children:" "}),e.jsx(t,{})]})},Pe=({image:t})=>e.jsx(l.div,{variants:m("","",.1,1),className:"xs:w-[20%] md:w-[30%] flex justify-center w-full",children:e.jsx("img",{src:t,alt:"myself",className:"xs:w-auto xs:max-h-[357px] w-[50%]"})}),Qe=({index:t,title:s,icon:n})=>e.jsx(N,{className:"xs:w-[250px] w-full",children:e.jsx(l.div,{variants:m("right","spring",t*.5,.75),className:"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card",children:e.jsxs("div",{options:{max:45,scale:1,speed:450},className:"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",children:[e.jsx("img",{src:n,alt:s,className:"w-16 h-16 object-contain"}),e.jsx("h3",{className:"text-white text-[20px] font-bold text-center",children:s})]})})}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex xs:flex-row flex-col justify-between content-end",children:[e.jsxs("div",{className:"xs:w-[50%] w-full",children:[e.jsxs(l.div,{variants:h(),children:[e.jsx("p",{className:r.sectionSubText,children:"Introduction"}),e.jsx("h2",{className:r.sectionHeadText,children:"Overview."})]}),e.jsxs(l.p,{variants:m("","",.1,1),className:"mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]",children:["I'm a skilled designer with experience in 2D and 3D Graphic Design, and expertise in softwares like Blender, Photoshop, and Illustrator. I also have huge interests in UI-UX Designing and Web Development and constantly looking for opportunities to try out this new field. I'm a quick learner that can adapt to any situation to create the most magnificent, efficient, and user-friendly products that solve your problems. ",e.jsx("br",{})," Let's work together to bring your ideas to life!"]})]}),b.map((t,s)=>e.jsx(Pe,{index:s,...t},b.name))]}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-10",children:De.map((t,s)=>e.jsx(Qe,{index:s,...t},t.title))})]}),Je=p(Ge,"about"),He=()=>e.jsx("div",{className:"flex flex-row flex-wrap justify-center gap-10",children:Ie.map(t=>e.jsx("div",{className:"w-28 h-28",children:e.jsx(q,{icon:t.icon})},t.name))}),Ve=p(He,""),Ze=({experience:t})=>e.jsxs(S.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid #232631"},date:t.date,iconStyle:{background:t.iconBg},icon:e.jsx("div",{className:"flex justify-center items-center w-full h-full",children:e.jsx("img",{src:t.icon,alt:t.company_name,className:"w-[60%] h-[60%] object-contain"})}),children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-[24px] font-bold",children:t.title}),e.jsx("p",{className:"text-secondary text-[16px] font-semibold",style:{margin:0},children:t.company_name})]}),e.jsx("ul",{className:"mt-5 list-disc ml-5 space-y-2",children:t.points.map((s,n)=>e.jsx("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:s},`experience-point-${n}`))})]}),Ye=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l.div,{variants:h(),children:[e.jsx("p",{className:r.sectionSubText,children:"What I have done so far"}),e.jsx("h2",{className:r.sectionHeadText,children:"Work Experience."})]}),e.jsx("div",{className:"mt-20 flex flex-col",children:e.jsx(S.VerticalTimeline,{children:Be.map((t,s)=>e.jsx(Ze,{experience:t},s))})})]}),Re=p(Ye,"work"),qe=({index:t,name:s,description:n,tags:o,image:a,source_code_link:i})=>e.jsx(l.div,{variants:m("up","spring",t*.5,.75),children:e.jsxs(N,{options:{max:45,scale:1,speed:450},className:"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full",children:[e.jsxs("div",{className:"relative w-full h-[230px]",children:[e.jsx("img",{src:a,alt:"project_image",className:"w-full h-full object-cover rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex justify-end m-3 card-img_hover",children:e.jsx("div",{onClick:()=>window.open(i,"_blank"),className:"bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e.jsx("img",{src:se,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-white font-bold text-[24px]",children:s}),e.jsx("p",{className:"mt-2 text-secondary text-[14px]",children:n})]}),e.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:o.map(d=>e.jsxs("p",{className:`text-[14px] ${d.color}`,children:["#",d.name]},`${s}-${d.name}`))})]})}),Le=()=>e.jsxs(e.Fragment,{children:[e.jsxs(l.div,{variants:h(),children:[e.jsx("p",{className:`${r.sectionSubText} `,children:"My work"}),e.jsx("h2",{className:`${r.sectionHeadText}`,children:"Projects."})]}),e.jsx("div",{className:"w-full flex",children:e.jsx(l.p,{variants:m("","",.1,1),className:"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]",children:"Following projects showcases my skills and experience through real-world examples of my work. Each project has a brief description with links to related files. It reflects my ability to solve complex problems, work with different technologies, and use tools effectively."})}),e.jsx("div",{className:"mt-20 flex flex-wrap gap-7",children:ze.map((t,s)=>e.jsx(qe,{index:s,...t},`project-${s}`))})]}),We=p(Le,""),Oe=({index:t,testimonial:s,name:n,designation:o,company:a,image:i})=>e.jsxs(l.div,{variants:m("","spring",t*.5,.75),className:"bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full",children:[e.jsxs("p",{className:"text-white font-black text-[48px]",children:["0",t+1]}),e.jsxs("div",{className:"mt-1",children:[e.jsx("p",{className:"text-white tracking-wider text-[18px]",children:s}),e.jsxs("div",{className:"mt-7 flex justify-between items-center gap-1",children:[e.jsxs("div",{className:"flex-1 flex flex-col",children:[e.jsxs("p",{className:"text-white font-medium text-[16px]",children:[e.jsx("span",{className:"blue-text-gradient",children:"@"})," ",n]}),e.jsxs("p",{className:"mt-1 text-secondary text-[12px]",children:[o," at ",a]})]}),e.jsx("img",{src:i,alt:`feedback-by${n}`,className:"w-10 h-10 rounded-full object-cover"})]})]})]}),Ue=()=>e.jsxs("div",{className:"mt-12 bg-black-100 rounded-[20px]",children:[e.jsx("div",{className:`${r.padding} bg-tertiary rounded-2xl min-h-[300px]`,children:e.jsxs(l.div,{variants:h(),children:[e.jsx("p",{className:r.sectionSubText,children:"What I achieved"}),e.jsx("h2",{className:r.sectionHeadText,children:"Accomplishments."})]})}),e.jsx("div",{className:`${r.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`,children:Me.map((t,s)=>e.jsx(Oe,{index:s,...t},t.name))})]}),Ke=p(Ue,""),Xe=()=>{const t=c.useRef(),[s,n]=c.useState({name:"",email:"",message:""}),[o,a]=c.useState(!1),i=f=>{const{target:u}=f,{name:E,value:k}=u;n({...s,[E]:k})},d=f=>{f.preventDefault(),a(!0),V.send("service_b14akz8","template_r21kwqp",{from_name:s.name,to_name:"Le Toan",from_email:s.email,to_email:"levuanhtoan@gmail.com",message:s.message},"8peec6vCfbBbGqtXs").then(()=>{a(!1),alert("Thank you. I will get back to you as soon as possible."),n({name:"",email:"",message:""})},u=>{a(!1),console.error(u),alert("Ahh, something went wrong. Please try again.")})};return e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(l.div,{variants:y("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:r.sectionSubText,children:"Get in touch"}),e.jsx("h3",{className:r.sectionHeadText,children:"Contact."}),e.jsxs("form",{ref:t,onSubmit:d,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:i,placeholder:"What's your good name?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:i,placeholder:"What's your web address?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Your Message"}),e.jsx("textarea",{rows:7,name:"message",value:s.message,onChange:i,placeholder:"What you want to say?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:o?"Sending...":"Send"})]})]}),e.jsx(l.div,{variants:y("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(Y,{})})]})},$e=p(Xe,"contact"),_e=()=>e.jsx(B,{children:e.jsxs("div",{className:"relative z-0 bg-primary",children:[e.jsxs("div",{className:"bg-hero-pattern bg-cover bg-no-repeat bg-center",children:[e.jsx(Te,{}),e.jsx(K,{})]}),e.jsx(Je,{}),e.jsx(Re,{}),e.jsx(Ve,{}),e.jsx(We,{}),e.jsx(Ke,{}),e.jsxs("div",{className:"relative z-0",children:[e.jsx($e,{}),e.jsx(U,{})]})]})});D.createRoot(document.getElementById("root")).render(e.jsx(C.StrictMode,{children:e.jsx(_e,{})}));
