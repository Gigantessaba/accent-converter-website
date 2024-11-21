import { useDropzone } from 'react-dropzone';

export default function AudioUpload({ onDrop, isDragActive }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'audio/*': ['.mp3', '.wav', '.m4a', '.webm'] },
    maxFiles: 1,
    onDrop
  });

  return (
    <div 
      {...getRootProps()} 
      className={`bg-white rounded-lg p-8 shadow-sm border-2 border-dashed ${
        isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
      } hover:border-indigo-500 transition-colors cursor-pointer text-center`}
    >
      <input {...getInputProps()} />
      <div className="space-y-2">
        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="text-gray-600">
          <p className="text-sm font-medium">
            {isDragActive ? 'Drop the audio file here' : 'Drag & drop an audio file, or click to select'}
          </p>
          <p className="text-xs mt-1">MP3, WAV, M4A, or WebM</p>
        </div>
      </div>
    </div>
  );
}