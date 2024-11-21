export default function AudioOutput({ status, audioUrl }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Output</h2>
      
      <div className="bg-gray-50 rounded-xl p-6 min-h-[300px] flex items-center justify-center">
        {status === 'processing' && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 font-medium">Processing your audio...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <p className="text-red-600 font-medium">Processing failed. Please try again.</p>
          </div>
        )}

        {status === 'success' && audioUrl && (
          <div className="w-full space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <audio controls className="w-full" src={audioUrl}>
                Your browser does not support the audio element.
              </audio>
            </div>
            <a
              href={audioUrl}
              download="converted-audio.mp3"
              className="block w-full text-center bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors shadow-sm"
            >
              Download Converted Audio
            </a>
          </div>
        )}

        {status === 'idle' && (
          <div className="text-center text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V4"></path>
            </svg>
            <p className="font-medium">Upload an audio file or paste a YouTube URL to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}