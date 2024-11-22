import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
        <div className="relative h-full">
          <svg
            className="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-white/10" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-white/10" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-16 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="rounded-full bg-white/10 p-2 ring-1 ring-white/20">
                <SpeakerWaveIcon className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Audio Accent</span>
              <span className="block text-indigo-200">Converter</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-indigo-100 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Transform your audio into different accents instantly. Upload a file or paste a YouTube URL to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}