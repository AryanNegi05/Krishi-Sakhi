import { useState } from 'react'
import { 
  Users, 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Plus,
  Search,
  Filter,
  Award,
  Phone,
  Clock,
  MapPin,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('discussions')

  const discussions = [
    {
      id: 1,
      author: 'Rajesh Kumar',
      location: 'Thrissur',
      avatar: 'R',
      question: 'Best organic fertilizer for rice during monsoon season?',
      description: 'My rice crop is in vegetative stage and monsoon has started. What organic fertilizers work best during this period? Looking for cost-effective solutions.',
      category: 'Rice Cultivation',
      likes: 23,
      replies: 8,
      timeAgo: '2 hours ago',
      tags: ['rice', 'organic', 'monsoon', 'fertilizer']
    },
    {
      id: 2,
      author: 'Priya Menon',
      location: 'Kochi',
      avatar: 'P',
      question: 'Tomato plants showing yellow spots - disease identification help needed',
      description: 'Noticed small yellow spots on tomato leaves that are spreading. Plants are 45 days old. Can someone help identify the disease and suggest treatment?',
      category: 'Disease Management',
      likes: 15,
      replies: 12,
      timeAgo: '5 hours ago',
      tags: ['tomato', 'disease', 'yellow-spots', 'help']
    },
    {
      id: 3,
      author: 'Mohammed Ali',
      location: 'Kozhikode',
      avatar: 'M',
      question: 'Pepper prices dropping - when to harvest for better returns?',
      description: 'Black pepper prices have dropped 15% in the last month. Should I wait for prices to recover or harvest now? What are others doing in this situation?',
      category: 'Market Discussion',
      likes: 31,
      replies: 18,
      timeAgo: '1 day ago',
      tags: ['pepper', 'pricing', 'harvest', 'market']
    }
  ]

  const successStories = [
    {
      id: 1,
      farmer: 'Suresh Nair',
      location: 'Thrissur',
      title: 'Doubled Rice Yield with Organic Methods',
      story: 'Switched to organic farming 3 years ago. Using cow dung manure, green manure, and bio-fertilizers increased my rice yield from 2.5 to 5.2 tons per hectare.',
      achievement: '108% yield increase',
      investment: '₹15,000 saved annually',
      likes: 89,
      image: 'rice-field.jpg'
    },
    {
      id: 2,
      farmer: 'Lakshmi Devi',
      location: 'Palakkad',
      title: 'Successful Vegetable Export Business',
      story: 'Started with 0.5 acre vegetable cultivation. Now exporting organic vegetables to Middle East. Key was getting organic certification and finding right buyers.',
      achievement: '₹8 lakh annual income',
      investment: 'From ₹25,000 to ₹8,00,000',
      likes: 156,
      image: 'vegetables.jpg'
    },
    {
      id: 3,
      farmer: 'Ravi Krishnan',
      location: 'Idukki',
      title: 'Spice Farming Success with Value Addition',
      story: 'Added value to cardamom and pepper by direct processing and branding. Created own brand "Kerala Spice Heritage" and selling online across India.',
      achievement: '300% profit margin',
      investment: '₹50,000 processing unit',
      likes: 203,
      image: 'spices.jpg'
    }
  ]

  const helplineContacts = [
    {
      service: 'Agricultural Emergency',
      number: '1800-180-1551',
      description: 'Kisan Call Centre - 24/7 farming assistance',
      availability: '24 hours',
      languages: 'Hindi, English, Malayalam'
    },
    {
      service: 'Crop Insurance Claims',
      number: '1800-266-0001',
      description: 'Agricultural Insurance Company helpline',
      availability: '9 AM - 6 PM',
      languages: 'Multiple languages'
    },
    {
      service: 'Pest Control Expert',
      number: '0487-2421046',
      description: 'Kerala Agricultural Department',
      availability: '9 AM - 5 PM',
      languages: 'Malayalam, English'
    },
    {
      service: 'Market Price Information',
      number: '1800-270-0224',
      description: 'National Agriculture Market',
      availability: '6 AM - 10 PM',
      languages: 'Regional languages'
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Rice Cultivation': return 'bg-green-100 text-green-800'
      case 'Disease Management': return 'bg-red-100 text-red-800'
      case 'Market Discussion': return 'bg-blue-100 text-blue-800'
      case 'Technology': return 'bg-purple-100 text-purple-800'
      case 'Organic Farming': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Community & Help</h1>
            <p className="text-gray-600">Connect, learn, and grow with fellow farmers</p>
          </div>
          <Button className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Ask Question
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTab('discussions')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'discussions' 
                ? 'bg-white text-green-600 shadow-sm' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Q&A Forum
          </button>
          <button
            onClick={() => setSelectedTab('stories')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'stories' 
                ? 'bg-white text-green-600 shadow-sm' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Success Stories
          </button>
          <button
            onClick={() => setSelectedTab('help')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'help' 
                ? 'bg-white text-green-600 shadow-sm' 
                : 'text-gray-700 hover:text-green-600'
            }`}
          >
            Emergency Help
          </button>
        </div>

        {selectedTab === 'discussions' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Discussion List */}
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-700 font-semibold">{discussion.avatar}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{discussion.question}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <span>{discussion.author}</span>
                              <span>•</span>
                              <MapPin className="w-3 h-3" />
                              <span>{discussion.location}</span>
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              <span>{discussion.timeAgo}</span>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(discussion.category)}`}>
                            {discussion.category}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 mb-3 line-clamp-2">{discussion.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {discussion.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              <span>{discussion.likes}</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              <span>{discussion.replies}</span>
                            </div>
                            <Share2 className="w-4 h-4 cursor-pointer hover:text-green-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'stories' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-1">{story.title}</CardTitle>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="font-medium">{story.farmer}</span>
                          <span className="mx-2">•</span>
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{story.location}</span>
                        </div>
                      </div>
                      <Award className="w-6 h-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">{story.story}</p>
                    
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Key Achievement</p>
                        <p className="font-semibold text-green-600">{story.achievement}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Investment Impact</p>
                        <p className="font-semibold text-blue-600">{story.investment}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{story.likes} farmers inspired</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Contact Farmer
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Inspire Others Section */}
            <Card className="border-2 border-dashed border-green-300 bg-green-50">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">Share Your Success Story</h3>
                <p className="text-green-700 mb-4">
                  Inspire fellow farmers by sharing your farming journey, challenges overcome, and achievements.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Submit Your Story
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'help' && (
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Helplines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {helplineContacts.map((contact, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{contact.service}</h4>
                        <Phone className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-2xl font-bold text-green-600 mb-2">{contact.number}</p>
                      <p className="text-sm text-gray-700 mb-2">{contact.description}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>⏰ {contact.availability}</span>
                        <span>🌐 {contact.languages}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="w-full mt-3"
                        onClick={() => window.open(`tel:${contact.number}`)}
                      >
                        Call Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Help Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-blue-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900 mb-2">Technical Support</h3>
                  <p className="text-sm text-blue-700 mb-4">Get help with farming techniques, crop issues, and best practices</p>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-600">
                    Get Technical Help
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer border-green-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-900 mb-2">Community Support</h3>
                  <p className="text-sm text-green-700 mb-4">Connect with local farmers and agricultural experts</p>
                  <Button variant="outline" size="sm" className="border-green-300 text-green-600">
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer border-orange-200">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-orange-900 mb-2">Expert Consultation</h3>
                  <p className="text-sm text-orange-700 mb-4">Schedule calls with agricultural scientists and experts</p>
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-600">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Local Support Centers */}
            <Card>
              <CardHeader>
                <CardTitle>Local Agricultural Support Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Krishi Bhavan - Thrissur</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                          <span>Civil Station Road, Thrissur</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 text-gray-400 mr-1" />
                          <span>0487-2442125</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-gray-400 mr-1" />
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">KAU Extension Center</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                          <span>Vellanikkara, Thrissur</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 text-gray-400 mr-1" />
                          <span>0487-2438011</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-gray-400 mr-1" />
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Soil Testing Lab</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                          <span>Mannuthy, Thrissur</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 text-gray-400 mr-1" />
                          <span>0487-2370080</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-gray-400 mr-1" />
                          <span>9:00 AM - 4:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community