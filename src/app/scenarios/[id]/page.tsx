'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MicrophoneIcon,
  StopIcon,
  PlayIcon,
  PauseIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

interface Scenario {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  category: string;
}

export default function ScenarioPage({ params }: { params: { id: string } }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(0);
  const [scenario, setScenario] = useState<Scenario | null>(null);

  useEffect(() => {
    // TODO: Fetch scenario details from API
    setScenario({
      id: params.id,
      title: 'Cardiology Consultation',
      description: 'Practice taking a cardiac history and performing a focused examination',
      duration: '15 min',
      difficulty: 'Intermediate',
      category: 'Cardiology',
    });
  }, [params.id]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartRecording = async () => {
    try {
      // TODO: Implement voice recording with Web Speech API
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const handleStopRecording = async () => {
    try {
      // TODO: Stop recording and process audio
      setIsRecording(false);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  const handlePlayResponse = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement text-to-speech for AI response
  };

  if (!scenario) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/scenarios"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Scenarios
            </Link>
            <div className="text-sm text-gray-500">
              Time: {formatTime(timer)}
            </div>
          </div>

          {/* Scenario Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow rounded-lg p-6 mb-8"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{scenario.title}</h1>
            <p className="text-gray-600 mb-4">{scenario.description}</p>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {scenario.difficulty}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {scenario.duration}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {scenario.category}
              </span>
            </div>
          </motion.div>

          {/* Interaction Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white shadow rounded-lg p-6"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4">Your Response</h2>
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={isRecording ? handleStopRecording : handleStartRecording}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                      isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <StopIcon className="mr-2 h-5 w-5" />
                        Stop Recording
                      </>
                    ) : (
                      <>
                        <MicrophoneIcon className="mr-2 h-5 w-5" />
                        Start Recording
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  placeholder="Your response will appear here..."
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </motion.div>

            {/* AI Response */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white shadow rounded-lg p-6"
            >
              <h2 className="text-lg font-medium text-gray-900 mb-4">Patient Response</h2>
              <div className="mb-4">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={handlePlayResponse}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    {isPlaying ? (
                      <>
                        <PauseIcon className="mr-2 h-5 w-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <PlayIcon className="mr-2 h-5 w-5" />
                        Play Response
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                  <p className="text-gray-600">
                    "I've been experiencing chest pain for the past few days. It's a sharp pain that comes and goes..."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feedback Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 bg-white shadow rounded-lg p-6"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-4">Feedback</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-medium">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">
                    Good job asking about the nature and location of the chest pain. Consider also asking about:
                  </p>
                  <ul className="mt-2 list-disc list-inside text-sm text-gray-600">
                    <li>Duration of symptoms</li>
                    <li>Associated symptoms</li>
                    <li>Previous medical history</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 