'use client';
import axios from 'axios';
import { useState } from 'react';

export default function HomePage() {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<{ [key: string]: string }>({});

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setIsLoading(true);

    try {
      const res = await axios.post('/api/generate', { idea });

      const contentResponse: string = res.data.content || '';

      setContent((prev) => ({
        ...prev,
        'LinkedIn Post': contentResponse.slice(0, 500),
        'Bluesky Post': contentResponse.slice(501, 1000),
        'Blog Title': contentResponse.slice(1001, 1200),
        'Blog Body': contentResponse.slice(1201, 2000),
        'Meta Description': contentResponse.slice(2001, 3500).split('\n')[0],
        'Thumbnail Prompt': contentResponse.slice(3501, 4000),
      }));
    } catch (error: any) {
      console.error(error.response?.data || error.message);
    }

    setIsLoading(false);
  };

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Content Flow</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Transform your idea in multi-platform content.
        </p>
      </div>
      {/* Input Section */}
      <div className="mb-8">
        <label htmlFor="idea" className="block text-sm font-medium mb-2">
          Your Idea
        </label>
        <textarea
          id="idea"
          name="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your content idea here..."
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          rows={6}
        />

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {idea.length} characters
          </span>
          <button
            onClick={handleGenerate}
            disabled={isLoading || idea.trim() === ''}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {isLoading ? 'Generating...' : 'Generate Content'}
          </button>
        </div>
      </div>
      {/* Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(content).map((key) => (
          <PreviewBlock
            key={key}
            title={key}
            content={content[key]}
            className={key === 'Blog Body' ? 'md:col-span-2' : ''}
          />
        ))}
      </div>
    </main>
  );
}

function PreviewBlock({
  title,
  content,
  className = '',
}: {
  title: string;
  content: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-gray-300 dark:border-gray-700 rounded-lg p-4 ${className}`}
    >
      <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <div className="min-h-[100px] text-gray-600 dark:text-gray-400">
        {content || (
          <span className="text-gray-400 dark:text-gray-600 italic">
            No content generated yet
          </span>
        )}
      </div>
    </div>
  );
}
('use client');

export default function HomePage() {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    // Phase 2: Will connect OpenAI API
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Content Flow</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Transform your idea in multi-platform content.
        </p>
      </div>
      {/* Input Section */}
      <div className="mb-8">
        <label htmlFor="idea" className="block text-sm font-medium mb-2">
          Your Idea
        </label>
        <textarea
          id="idea"
          name="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Enter your content idea here..."
          className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          rows={6}
        />

        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {idea.length} characters
          </span>
          <button
            onClick={handleGenerate}
            disabled={isLoading || idea.trim() === ''}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {isLoading ? 'Generating...' : 'Generate Content'}
          </button>
        </div>
      </div>
      {/* Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PreviewBlock title="LinkedIn Post" content="" />
        <PreviewBlock title="Bluesky Post" content="" />
        <PreviewBlock title="Blog Title" content="" />
        <PreviewBlock title="Blog Body" content="" className="md:col-span-2" />
        <PreviewBlock title="Meta Description" content="" />
        <PreviewBlock title="Thumbnail Prompt" content="" />
      </div>
    </main>
  );
}

function PreviewBlock({
  title,
  content,
  className = '',
}: {
  title: string;
  content: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-gray-300 dark:border-gray-700 rounded-lg p-4 ${className}`}
    >
      <h3 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <div className="min-h-[100px] text-gray-600 dark:text-gray-400">
        {content || (
          <span className="text-gray-400 dark:text-gray-600 italic">
            No content generated yet
          </span>
        )}
      </div>
    </div>
  );
}
