import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";
import { AlertMessage } from "./AlertMessage";



export const ShowDataUser= () => {
	const title = 'Estado de Vencimiento de la Oblea';
	const title2 = 'Estado de Vencimiento de la Prueba Hidraulica';
	const subTitle1 = 'por favor renueve su oblea';
	const subTitle2 = 'por favor realice su prueba hidraulica';
	const subTitle3= 'sin novedades'
	const stateNegative = {
		bg:'bg-red-300',
		border:'border-red-600',
		text:'text-red-600'
	}
	const statePositive = {
		bg:'bg-blue-300',
		border:'border-blue-600',
		text:'text-blue-600'
	}

	const {usuario}= useContext(UserDataContext);

  return(
      <div className=" flex flex-col">
		<h2 className='font-extrabold mb-2 text-center text-white pl-6'>REPORTE DEL EQUIPO CONSULTADO</h2>
			<section className='rounded-lg  text-sm border-2 p-2 text-white'>
				<div className='font-bold px-4 flex flex-col'>
					<h3 className="text-center">DATOS DE LA OBLEA</h3>
					<p className='font-normal bg-gainsboro'>Oblea anterior: {usuario.Oblea_anterior} </p>
					<p className='font-normal'>Fecha de Habilitación: {usuario.Fecha_de_habilitación}</p>
					<p className='font-normal bg-gainsboro'>Fecha de Oblea anterior: {usuario.Fecha_Oblea_anterior}</p>
					<p className='font-bold text-white bg-black p-1'>Operación: {usuario.Tipo_de_Operación}</p>
				</div>
				<div className='font-bold px-4 flex flex-col'>
					<h3 className="text-center mb-2 mt-2">DATOS DEL VEHICULO</h3>
					<p className='font-normal bg-gainsboro'>Marca: {usuario.Vehículo_Marca}</p>
					<p className='font-normal'>Modelo: {usuario.Modelo}</p>
					<p className='font-normal bg-gainsboro'>Año: {usuario.Año}</p>
					<p className='font-bold text-white bg-black p-1'>Dominio: {usuario.Dominio}</p>
					<p className='font-normal bg-gainsboro'>Inyección: {usuario.Inyección}</p>
					<p className='font-normal'>Tipo de Vehículo: {usuario.Tipo_de_Vehículo}</p>
				</div>
			</section>		
			<section className='rounded-lg  text-sm border-2 p-2 text-white mt-4'>
		            <div className="font-bold px-4 flex flex-col">
						<h3 className='font-bold text-center mb-2'>CILINDROS</h3>
						<p className=' bg-gainsboro'>Código: {usuario.Codigo}</p>
						<p>Serie:{usuario.Nro_Serie}</p>
						<p>Nuevo: {usuario.Nuevo}</p>
						<p className='bg-gainsboro'>Usado: {usuario.Usado}</p>
						<p className='bg-gainsboro'>Fab. Mes: {usuario.Fabricado_Mes}</p>
						<p>Fab. Año: {usuario.Fabricado_Año}</p>
						</div>
					<div className="font-bold px-4 flex flex-col">
						<h3 className='font-bold text-center mb-2 mt-2'>VALVULA</h3>						
						<p>Código: {usuario.Codigo_Valvula}</p>							
						<p className=' bg-gainsboro'>Serie: {usuario.Nro_Serie_Valvula}</p>
						<p>Operación: {usuario.OP_V}</p>
					</div>
					<div className="font-bold px-4 flex flex-col">
						<h3 className='font-bold text-center mb-2 mt-2'>PRUEBA HIDRAULICA</h3>	
						<p className=' bg-gainsboro'>Mes: {usuario.Revisado_Mes}</p>
						<p className='font-bold text-white bg-black p-1'>Año: {usuario.Revisado_Ano}</p>							
					<p className=' bg-gainsboro'>P. H.: {usuario.CRPC}</p>
					</div>
					
			</section>
			{usuario.oblea ? <AlertMessage title= {title} subTitle= {subTitle1} status={stateNegative}/> : <AlertMessage title={title} subTitle={subTitle3} status={statePositive}/>}
			{usuario.ph ? <AlertMessage title= {title2} subTitle= {subTitle2} status={stateNegative}/> : <AlertMessage title={title2} subTitle={subTitle3} status={statePositive}/>}
      </div>
    );
  };
