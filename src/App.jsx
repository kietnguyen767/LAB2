import React from 'react';
import { Calendar, Bell, Settings, MessageCircle, Users, Briefcase, Clock, HelpCircle, House } from 'lucide-react';

const Dashboard = () => {
  const menuItems = [
    { icon:  <House size={16} />, text: 'Dashboard', active: true },
    { icon: <House size={16} />, text: 'Messages', badge: 1 },
    { icon: <House size={16} />, text: 'Company Profile' },
    { icon: <House size={16} />, text: 'All Applicants' },
    { icon: <House size={16} />, text: 'Job Listing' },
    { icon: <House size={16} />, text: 'My Schedule' },
  ];

  const settingsItems = [
    { icon: <Settings size={16} />, text: 'Settings' },
    { icon: <HelpCircle size={16} />, text: 'Help Center' },
  ];

  const jobs = [
    {
      company: 'Nomad',
      logo: <div className="w-8 h-8 bg-emerald-500 rounded-lg" />,
      title: 'Social Media Assistant',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10
    },
    {
      company: 'Dropbox',
      logo: <div className="w-8 h-8 bg-blue-500 rounded-lg" />,
      title: 'Brand Designer',
      location: 'Paris, France',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      applied: 5,
      capacity: 10
    },
    {
      company: 'Terraform',
      logo: <div className="w-8 h-8 bg-cyan-500 rounded-lg" />,
      title: 'Interactive Developer',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10
    },
    {
      company: 'ClassPass',
      logo: <div className="w-8 h-8 bg-blue-600 rounded-lg" />,
      title: 'Product Designer',
      location: 'Berlin, Germany',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      applied: 5,
      capacity: 10
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6">
        <div className="flex items-center mb-8">
          <div className="w-6 h-6 bg-green-500 rounded-full mr-2" />
          <span className="font-semibold">Job Finder</span>
        </div>

        <div className="space-y-6">
          <div>
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-3 p-2 rounded-lg ${
                  item.active ? 'text-green-500 bg-green-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.text}</span>
                {item.badge && (
                  <span className="ml-auto bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="text-xs text-gray-400 mb-4">SETTINGS</div>
            {settingsItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="ml-3">
              <div className="text-sm font-medium">Maria Kelly</div>
              <div className="text-xs text-gray-400">MariaK@email.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Good morning, Maria</h1>
            <p className="text-gray-500">Here is your job listings statistic report from July 19 - July 25</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Bell className="text-gray-400" />
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
              + Post a job
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-600 text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">76</div>
            <div className="flex justify-between items-center">
              <span>New candidates to review</span>
              <span className="text-xl">&gt;</span>
            </div>
          </div>
          
          <div className="bg-emerald-500 text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="flex justify-between items-center">
              <span>Schedule for today</span>
              <span className="text-xl">&gt;</span>
            </div>
          </div>
          
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2">24</div>
            <div className="flex justify-between items-center">
              <span>Messages received</span>
              <span className="text-xl">&gt;</span>
            </div>
          </div>
        </div>

        {/* Job Updates */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Job Updates</h2>
            <button className="text-blue-500 text-sm">View All →</button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  {job.logo}
                  <span className="text-xs text-emerald-500 bg-emerald-50 px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{job.company} • {job.location}</p>
                <div className="flex gap-2 mb-4">
                  {job.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className={`text-xs px-2 py-1 rounded ${
                        tag === 'Marketing' ? 'bg-orange-50 text-orange-500' :
                        tag === 'Design' ? 'bg-indigo-50 text-indigo-500' :
                        'bg-emerald-50 text-emerald-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  {job.applied} applied of {job.capacity} capacity
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
