import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { config } from './config';
import Settings from './components/Settings';
import AudioUpload from './components/AudioUpload';
import AudioOutput from './components/AudioOutput';
import YouTubeInput from './components/YouTubeInput';
import Header from './components/Header.jsx';

export default function App() {
  const [accent, setAccent] = useState('en-US');
  const [voice, setVoice] = useState('Matthew');
  const [status, setStatus] = useState('idle');
  const [audioUrl, setAudioUrl] = useState(null);

  const { isDragActive } = useDropzone({
    accept: { 'audio/*': ['.mp3', '.wav', '.m4a', '.webm'] },
    maxFiles: 1,
    onDrop: handleFileDrop
  });

  async function handleFileDrop(acceptedFiles) {
    if (acceptedFiles.length === 0) return;
    await processAudio(acceptedFiles[0]);
  }

  async function handleYouTubeUrl(url) {
    try {
      setStatus('processing');
      const response = await fetch(`${config.API_ENDPOINT}/process-youtube`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          accent,
          voice,
        }),
      });

      if (!response.ok) {
        throw new Error('Processing failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  }

  async function processAudio(file) {
    try {
      setStatus('processing');
      
      const formData = new FormData();
      formData.append('audio', file);
      formData.append('accent', accent);
      formData.append('voice', voice);

      const response = await fetch(`${config.API_ENDPOINT}/process-audio`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Processing failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
      setStatus('success');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <Settings 
                accent={accent}
                setAccent={setAccent}
                voice={voice}
                setVoice={setVoice}
              />
              <div className="mt-8">
                <YouTubeInput 
                  onSubmit={handleYouTubeUrl}
                  isProcessing={status === 'processing'}
                />
              </div>
            </div>
            <AudioUpload 
              onDrop={handleFileDrop}
              isDragActive={isDragActive}
            />
          </div>

          <AudioOutput 
            status={status}
            audioUrl={audioUrl}
          />
        </div>
      </main>
    </div>
  );
}