'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  AcademicCapIcon,
  ClockIcon,
  ChartBarIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BeakerIcon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  AcademicCapIcon as BrainIcon,
  BookmarkIcon,
  DocumentDuplicateIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subItems?: NavItem[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Practice Scenarios', href: '/scenarios', icon: AcademicCapIcon },
  { name: 'Mock Exams', href: '/mock-exam', icon: ClockIcon },
  {
    name: 'Study Guides',
    href: '/resources',
    icon: BookOpenIcon,
    subItems: [
      {
        name: 'PLAB 2 Guide',
        href: '/resources/plab2-guide',
        icon: DocumentTextIcon,
      },
      {
        name: 'Clinical Skills',
        href: '/resources/clinical-skills',
        icon: BeakerIcon,
      },
      {
        name: 'OSCE Preparation',
        href: '/resources/osce',
        icon: ClipboardDocumentListIcon,
      },
      {
        name: 'Communication',
        href: '/resources/communication',
        icon: ChatBubbleLeftRightIcon,
      },
      {
        name: 'Clinical Reasoning',
        href: '/resources/clinical-reasoning',
        icon: BrainIcon,
      },
      {
        name: 'Study Materials',
        href: '/resources/materials',
        icon: DocumentDuplicateIcon,
      },
      {
        name: 'Quick References',
        href: '/resources/quick-ref',
        icon: BookmarkIcon,
      },
      {
        name: 'Progress Tracking',
        href: '/resources/progress',
        icon: DocumentChartBarIcon,
      }
    ],
  },
  { name: 'Community', href: '/community', icon: UserGroupIcon },
  { name: 'Progress', href: '/progress', icon: ChartBarIcon },
  { name: 'Profile', href: '/profile', icon: UserCircleIcon },
];

const Navigation: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpand = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderNavItem = (item: NavItem) => {
    const isActive = pathname === item.href;
    const isExpanded = expandedItems.includes(item.name);
    const Icon = item.icon;

    return (
      <div key={item.name}>
        <Link
          href={item.href}
          className={`flex items-center px-2 py-2 text-sm font-medium rounded-md mb-1 ${
            isActive || (item.subItems && item.subItems.some(subItem => pathname === subItem.href))
              ? 'text-indigo-600 bg-indigo-50'
              : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
          }`}
          onClick={(e) => {
            if (item.subItems) {
              e.preventDefault();
              toggleExpand(item.name);
            }
          }}
        >
          <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
          {item.name}
          {item.subItems && (
            <ChevronDownIcon
              className={`ml-auto h-4 w-4 transition-transform ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          )}
        </Link>
        {item.subItems && isExpanded && (
          <div className="ml-4 mt-1 space-y-1">
            {item.subItems.map((subItem) => {
              const SubIcon = subItem.icon;
              return (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    pathname === subItem.href
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  <SubIcon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {subItem.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href="/dashboard" className="text-xl font-bold text-indigo-600">
              MedCoach AI
            </Link>
            <button onClick={() => setSidebarOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <nav className="px-4 py-4">
            {navigation.map(renderNavItem)}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white">
          <div className="flex h-16 items-center px-6">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              MedCoach AI
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-4 py-4">
            {navigation.map(renderNavItem)}
          </nav>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 lg:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>
        <Link href="/dashboard" className="text-xl font-bold text-indigo-600">
          MedCoach AI
        </Link>
      </div>
    </>
  );
};

export default Navigation; 