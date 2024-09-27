import React from "react";
import CardHeader from "./components/hv/CardHeader";
import CardBody from "./components/hv/CardBody";
import CardInit from "./components/hv/CardInit";
import TablaGeneral from "./components/hv/TablaGeneral";

const Hv = () => {
  
  const dataPerson = [
    {id:1, nombre:'Diego Armando Herrera',telefono:'123456',correo:'diego@correo.com',cargo:'Web Developer'}
  ]
  const dataInformation = [
    { id: 1, title: "Info 1", value: "Value 1" },
    { id: 2, title: "Info 2", value: "Value 2" }
  ];

  const dataDescripcion =[
    {descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem neque quia atque ratione eaque vero doloremque eius quo numquam temporibus, architecto sit sapiente hic! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio voluptate temporibus eaque adipisci iste labore, facere sequi quod, fugiat quaerat optio. Magnam hic, earum quasi dolores aliquam alias vel at? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quasi odio labore quibusdam quam adipisci nam! Ea consequatur minima accusantium ducimus quo dicta sed similique eius, sapiente numquam expedita aperiam."}
  ];

  

  const experienciaLaboral =[
    {id: 1, empresa: "Industrias Fibratank", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 2, empresa: "Sistemas Insepet", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 3, empresa: "Velez Caicedo Publicidad", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 4, empresa: "Instituto Humboldt", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"}
  ];

  const competenciaLaboral =[
    {id: 1, campo: "HTML", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 2, campo: "CSS", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 3, campo: "Javascript", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"},
    {id: 4, campo: "Node", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi fuga necessitatibus suscipit voluptatibus dolorem"}
  ];

  const studies = [{study: 'Estudio1'},{study: 'Experiencia 2'},{study: 'Experiencia 2'}];

  return (
    <>
      
      <div className="contenedor">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Fhollow-knight-silksong-release-date-trailer-and-gameplay-what-we-know-so-far%2Fl-intro-1609943776.jpg&f=1&nofb=1&ipt=1b7332f7792da50b451419a0a603800b3386f3ed415984585a07ffd52795a56f&ipo=images" alt="imagen silksong" width="150" height="100" style={{display:'block', margin:'auto'}} />
          <CardInit data= {dataPerson} />

          <CardHeader  data2= {dataDescripcion} />

          <TablaGeneral data = {experienciaLaboral} data2 = {competenciaLaboral} />

          
      </div>


    </>
  );
};

export default Hv;
