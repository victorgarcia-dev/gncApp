import imgO from '../../../../public/img/oblea.webp';
import imgPH from '../../../../public/img/hidraulica.webp';

const informationServices = [
    {
      id: 1,
      name: 'Renovar la Oblea',
      imageSrc: `${imgO}`,
      imageAlt: "oblea",
      description: 'La renovación de la Oblea es anual. Sin ella no puede cargar GNC en ninguna estación.',
    },
    {
        id: 2,
        name: 'Prueba Hidraulica',
        imageSrc: `${imgPH}`,
        imageAlt: "prueba hidraulica",
        description: ' Los cilindros y la valvula son sometidos a alta presión a fin de comprobar que no exista fatiga en los materiales. En tal caso, el centro de Reprueba debe destruirlo, y devolver el certificado de destrucción para ser asentado en el registro.',
      }
]

export const CardService = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">Servicios</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {informationServices.map((informationService) => (
            <div key={informationService.id} className="group relative bg-gray-200 rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={informationService.imageAlt}
                  src={informationService.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className='px-3 pb-2'>
                  <h3 className="text-sm text-gray-700 font-semibold">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {informationService.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{informationService.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

