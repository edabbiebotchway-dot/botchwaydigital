import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, certificate }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setImageError(false);
      setImageLoading(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Certificate Header */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 pr-12">
            {certificate.name}
          </h3>
          <p className="text-gray-600 mt-1">
            {certificate.provider} • {certificate.date}
          </p>
        </div>

        {/* Certificate Image */}
        <div className="p-6">
          {!imageError ? (
            <div className="relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg min-h-[400px]">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading certificate...</p>
                  </div>
                </div>
              )}
              <img
                src={certificate.image}
                alt={`${certificate.name} Certificate`}
                className={`w-full h-auto rounded-lg shadow-md ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => {
                  console.log('Certificate image loaded successfully:', certificate.image);
                  setImageLoading(false);
                }}
                onError={(e) => {
                  console.error('Failed to load certificate image:', certificate.image);
                  console.error('Attempted URL:', e.target.src);
                  setImageError(true);
                  setImageLoading(false);
                }}
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-md p-8 min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-red-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Certificate Image Not Found
                </h4>
                <p className="text-gray-600 mb-4">
                  Could not load: <code className="text-sm bg-red-100 px-2 py-1 rounded">{certificate.image}</code>
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-lg">
                  <p className="text-sm text-blue-900 font-semibold mb-2">Troubleshooting:</p>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                    <li>Check if file exists at: <code className="bg-blue-100 px-1 rounded text-xs">public{certificate.image}</code></li>
                    <li>Verify the filename matches exactly (case-sensitive)</li>
                    <li>Check file extension (.jpg, .png, .jpeg)</li>
                    <li>Try refreshing the page (Ctrl+R or Cmd+R)</li>
                    <li>Check browser console (F12) for errors</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm max-w-2xl mt-4">
                <h5 className="font-semibold text-gray-900 mb-2">Certificate Details:</h5>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Name:</strong> {certificate.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Provider:</strong> {certificate.provider}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Date:</strong> {certificate.date}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {certificate.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Click outside or press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
}