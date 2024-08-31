import imgPH from '../../../../public/img/hidraulica.webp';
import imgO from '../../../../public/img/oblea.webp';

export const Services = () => {
  return (
    <div className='mx-4 my-4'>
        <h2 className="font-bold text-lg mt-4 mb-2 text-gray-100">SERVICIOS</h2>
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 rounded-r-lg mb-4">
            <img className="w-full" src={imgO} alt="Sunset in the mountains"/>
                <div className="px-6 py-4 bg-gray-100">
                    <h3 className="font-bold text-xl mb-2">Renovar la oblea</h3>
                    <p className="text-gray-700 text-base leading-5">
                       La renovación de la Oblea es anual. Sin ella no puede cargar GNC en ninguna estación.
                    </p>
                </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 rounded-r-lg mb-2">
            <img className="w-full" src={imgPH} alt="Sunset in the mountains"/>
                <div className="px-6 py-4 bg-gray-100">
                    <h3 className="font-bold text-xl mb-2">Prueba hidraulica</h3>
                    <p className="text-gray-700 text-base leading-5">
                      Los cilindros y la valvula son sometidos a alta presión a fin de comprobar que no exista fatiga en los materiales. En tal caso, el centro de Reprueba debe destruirlo, y devolver el certificado de destrucción para ser asentado en el registro.
                    </p>
                </div>
        </div>
    </div>
  )
}
