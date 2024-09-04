import React, { useState, ChangeEvent } from 'react';

const ImagenUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Manejar el cambio de archivo
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };


  //subir imagen al servidor
  /*const handleSubmit = async () => {
    if (!file) return;
  
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log('Imagen subida con éxito:', data);
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };*/

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      
      {/* Vista previa de la imagen */}
      {selectedImage && (
        <div>
          <img
            src={selectedImage}
            alt="Preview"
            className="w-64 h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImagenUpload;