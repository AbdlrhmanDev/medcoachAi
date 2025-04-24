import ScenarioClient from '@/components/scenarios/ScenarioClient';

interface Scenario {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  category: string;
}

// Add generateStaticParams function
export async function generateStaticParams() {
  // TODO: Replace with actual scenario IDs from your data source
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

async function getScenario(id: string): Promise<Scenario> {
  // TODO: Replace with actual API call to fetch scenario data
  return {
    id,
    title: 'Cardiology Consultation',
    description: 'Practice taking a cardiac history and performing a focused examination',
    duration: '15 min',
    difficulty: 'Intermediate',
    category: 'Cardiology',
  };
}

export default async function ScenarioPage({ params }: { params: { id: string } }) {
  const scenario = await getScenario(params.id);
  return <ScenarioClient scenario={scenario} />;
} 