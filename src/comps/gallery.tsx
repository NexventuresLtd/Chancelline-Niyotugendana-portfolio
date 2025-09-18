import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SimpleGallery() {
    // Sample images - replace with your actual image paths
    const images = [
        '/logos/chance.jpeg',
        '/logos/chance1.png',
        '/logos/chance2.png',
        '/logos/chance3.jpeg',
        '/logos/chance5.jpeg',
        '/logos/chance6.jpeg',
        '/logos/chance7.jpeg',
        '/logos/chance8.jpeg',
        '/logos/chance9.jpeg',
        '/logos/chance11.jpeg',
        '/logos/chance12.jpeg',
        '/logos/chance13.jpeg',
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openPopup = (image: any, index: any) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
    };

    const handleKeyDown = (e: any) => {
        if (e.key === 'Escape') closePopup();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    };

    return (
        <div className="max-w-full md:max-w-11/12 mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-400 text-center mb-8">
                My Gallery
            </h1>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={() => openPopup(image, index)}
                    >
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-48 md:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/30 bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={closePopup}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                    >
                        <X size={32} />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 text-white hover:text-gray-300 z-10"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 z-10"
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Image */}
                    <div className="max-w-4xl max-h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt={`Gallery image ${currentIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}