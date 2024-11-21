export default function Settings({ accent, setAccent, voice, setVoice }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Voice Settings</h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <label htmlFor="accent" className="block text-sm font-medium text-gray-700 mb-2">
            Select Accent
          </label>
          <select
            id="accent"
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-3 shadow-sm"
          >
            <option value="en-US">American</option>
            <option value="en-GB">British</option>
            <option value="en-AU">Australian</option>
            <option value="en-IN">Indian</option>
          </select>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <label htmlFor="voice" className="block text-sm font-medium text-gray-700 mb-2">
            Select Voice
          </label>
          <select
            id="voice"
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-3 shadow-sm"
          >
            <option value="Matthew">Matthew (Male)</option>
            <option value="Joanna">Joanna (Female)</option>
            <option value="Amy">Amy (Female)</option>
            <option value="Brian">Brian (Male)</option>
          </select>
        </div>
      </div>
    </div>
  );
}