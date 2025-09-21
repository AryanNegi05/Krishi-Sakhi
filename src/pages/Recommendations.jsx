import { 
  Lightbulb, 
  Sprout, 
  DollarSign, 
  Calendar, 
  Droplets, 
  Sun,
  TrendingUp,
  MapPin,
  Clock,
  Leaf
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const Recommendations = () => {
  const recommendedCrops = [
    {
      name: 'Basmati Rice',
      malayalam: 'ബാസ്മതി അരി',
      season: 'Kharif',
      suitability: 95,
      expectedYield: '3.2 tons/acre',
      profitability: 'High',
      duration: '120-130 days',
      investment: '₹25,000/acre',
      expectedReturn: '₹45,000/acre',
      benefits: ['High market demand', 'Premium prices', 'Export potential'],
      requirements: ['Well-drained soil', 'Adequate water', 'Pest management']
    },
    {
      name: 'Tomato (Hybrid)',
      malayalam: 'തക്കാളി',
      season: 'Rabi',
      suitability: 88,
      expectedYield: '8-10 tons/acre',
      profitability: 'Very High',
      duration: '90-120 days',
      investment: '₹35,000/acre',
      expectedReturn: '₹80,000/acre',
      benefits: ['Quick returns', 'High demand', 'Multiple harvests'],
      requirements: ['Greenhouse/polyhouse', 'Drip irrigation', 'Disease control']
    },
    {
      name: 'Black Pepper',
      malayalam: 'കുരുമുളക്',
      season: 'Perennial',
      suitability: 92,
      expectedYield: '2-3 kg/vine',
      profitability: 'Very High',
      duration: '3-4 years to mature',
      investment: '₹40,000/acre',
      expectedReturn: '₹150,000/acre (annual)',
      benefits: ['Spice export', 'Long-term income', 'Traditional crop'],
      requirements: ['Support trees', 'Shade', 'Organic matter']
    }
  ]

  const bestPractices = [
    {
      category: 'Soil Health',
      icon: Leaf,
      practices: [
        'Test soil pH every 6 months',
        'Add organic compost regularly',
        'Practice crop rotation',
        'Maintain soil moisture'
      ]
    },
    {
      category: 'Water Management',
      icon: Droplets,
      practices: [
        'Install drip irrigation systems',
        'Harvest rainwater effectively',
        'Monitor soil moisture levels',
        'Use mulching to retain moisture'
      ]
    },
    {
      category: 'Pest Control',
      icon: Sprout,
      practices: [
        'Implement IPM strategies',
        'Use beneficial insects',
        'Apply neem-based pesticides',
        'Regular crop monitoring'
      ]
    },
    {
      category: 'Fertilization',
      icon: TrendingUp,
      practices: [
        'Follow soil test recommendations',
        'Use organic fertilizers',
        'Apply at right time',
        'Balance NPK ratios'
      ]
    }
  ]

  const irrigationSchedule = [
    {
      crop: 'Rice',
      stage: 'Vegetative',
      frequency: 'Daily flooding',
      amount: '5-10 cm water depth',
      timing: 'Morning'
    },
    {
      crop: 'Tomato',
      stage: 'Flowering',
      frequency: 'Every 2-3 days',
      amount: '25-30 mm',
      timing: 'Early morning'
    },
    {
      crop: 'Pepper',
      stage: 'Growing',
      frequency: 'Twice weekly',
      amount: '15-20 mm',
      timing: 'Evening'
    },
    {
      crop: 'Coconut',
      stage: 'Year-round',
      frequency: 'Weekly',
      amount: '200-250 liters/tree',
      timing: 'Morning'
    }
  ]

  const getSuitabilityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 80) return 'text-yellow-600 bg-yellow-100'
    return 'text-orange-600 bg-orange-100'
  }

  const getProfitabilityColor = (level) => {
    switch (level) {
      case 'Very High': return 'text-green-700 bg-green-100'
      case 'High': return 'text-blue-700 bg-blue-100'
      case 'Medium': return 'text-yellow-700 bg-yellow-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Crop Recommendations</h1>
          <p className="text-gray-600">AI-powered suggestions based on your soil, climate, and market conditions</p>
        </div>

        <Tabs defaultValue="crops" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="crops">Recommended Crops</TabsTrigger>
            <TabsTrigger value="practices">Best Practices</TabsTrigger>
            <TabsTrigger value="irrigation">Irrigation Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="crops" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {recommendedCrops.map((crop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{crop.name}</CardTitle>
                        <p className="text-sm text-gray-600">{crop.malayalam}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSuitabilityColor(crop.suitability)}`}>
                          {crop.suitability}% suitable
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Season:</span>
                        <p className="font-medium">{crop.season}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <p className="font-medium">{crop.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Expected Yield:</span>
                        <p className="font-medium text-green-600">{crop.expectedYield}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Profitability:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getProfitabilityColor(crop.profitability)}`}>
                          {crop.profitability}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-500">Investment:</span>
                          <p className="font-medium text-red-600">{crop.investment}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Expected Return:</span>
                          <p className="font-medium text-green-600">{crop.expectedReturn}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Benefits</h4>
                        <ul className="space-y-1">
                          {crop.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {crop.requirements.map((req, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Market Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Market Trends & Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">High Demand</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Organic vegetables</li>
                      <li>• Export quality spices</li>
                      <li>• Premium rice varieties</li>
                      <li>• Traditional medicinal plants</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Government Support</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Subsidy for drip irrigation</li>
                      <li>• Organic farming incentives</li>
                      <li>• Export promotion schemes</li>
                      <li>• Crop insurance programs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Emerging Opportunities</h3>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Contract farming</li>
                      <li>• Direct marketing</li>
                      <li>• Value-added products</li>
                      <li>• Agri-tourism potential</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <practice.icon className="w-5 h-5 mr-2 text-green-600" />
                      {practice.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {practice.practices.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Seasonal Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Kerala Seasonal Crop Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-3">Kharif Season (Jun-Oct)</h3>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div><strong>Rice:</strong> Transplanting in June-July</div>
                      <div><strong>Coconut:</strong> Peak growing season</div>
                      <div><strong>Spices:</strong> Pepper, cardamom planting</div>
                      <div><strong>Activities:</strong> Monsoon preparation, pest control</div>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-3">Rabi Season (Nov-Feb)</h3>
                    <div className="space-y-2 text-sm text-orange-700">
                      <div><strong>Vegetables:</strong> Tomato, beans, cabbage</div>
                      <div><strong>Cash crops:</strong> Groundnut, sesame</div>
                      <div><strong>Fruits:</strong> Mango flowering</div>
                      <div><strong>Activities:</strong> Harvest, post-harvest management</div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-3">Summer Season (Mar-May)</h3>
                    <div className="space-y-2 text-sm text-green-700">
                      <div><strong>Irrigation crops:</strong> Vegetables, fodder</div>
                      <div><strong>Tree crops:</strong> Coconut, arecanut care</div>
                      <div><strong>Preparation:</strong> Land preparation</div>
                      <div><strong>Activities:</strong> Water conservation, soil preparation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="irrigation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="w-5 h-5 mr-2" />
                  Irrigation Schedule Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Crop</th>
                        <th className="text-left p-3 font-semibold">Growth Stage</th>
                        <th className="text-left p-3 font-semibold">Frequency</th>
                        <th className="text-left p-3 font-semibold">Amount</th>
                        <th className="text-left p-3 font-semibold">Best Timing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {irrigationSchedule.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{item.crop}</td>
                          <td className="p-3 text-gray-600">{item.stage}</td>
                          <td className="p-3">{item.frequency}</td>
                          <td className="p-3 text-blue-600 font-medium">{item.amount}</td>
                          <td className="p-3 text-green-600">{item.timing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="w-5 h-5 mr-2" />
                    Water-Saving Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                      <h4 className="font-medium text-blue-900">Drip Irrigation</h4>
                      <p className="text-sm text-blue-700 mt-1">Save 30-50% water, deliver directly to roots</p>
                    </div>
                    <div className="p-3 bg-green-50 border-l-4 border-green-400">
                      <h4 className="font-medium text-green-900">Mulching</h4>
                      <p className="text-sm text-green-700 mt-1">Reduces evaporation by 60-70%</p>
                    </div>
                    <div className="p-3 bg-purple-50 border-l-4 border-purple-400">
                      <h4 className="font-medium text-purple-900">Rainwater Harvesting</h4>
                      <p className="text-sm text-purple-700 mt-1">Collect and store monsoon water</p>
                    </div>
                    <div className="p-3 bg-orange-50 border-l-4 border-orange-400">
                      <h4 className="font-medium text-orange-900">Soil Moisture Sensors</h4>
                      <p className="text-sm text-orange-700 mt-1">Irrigate only when needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Irrigation Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Early Morning Watering</p>
                        <p className="text-sm text-gray-600">Best time: 5-7 AM, less evaporation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Deep, Less Frequent</p>
                        <p className="text-sm text-gray-600">Encourages deep root growth</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Monitor Soil Moisture</p>
                        <p className="text-sm text-gray-600">Check 6-8 inches deep before watering</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Adjust for Weather</p>
                        <p className="text-sm text-gray-600">Reduce during rainy periods</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Recommendations