import { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  Calendar, 
  Award,
  AlertCircle,
  FileText,
  Shield,
  Phone
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const Market = () => {
  const [selectedLocation, setSelectedLocation] = useState('Thrissur')

  const marketPrices = [
    {
      crop: 'Rice (Common)',
      malayalam: 'അരി',
      currentPrice: 2850,
      previousPrice: 2800,
      unit: 'per quintal',
      change: 1.8,
      market: 'Thrissur',
      lastUpdated: '2 hours ago',
      demand: 'High',
      quality: 'FAQ'
    },
    {
      crop: 'Rice (Basmati)',
      malayalam: 'ബാസ്മതി',
      currentPrice: 4200,
      previousPrice: 4350,
      unit: 'per quintal',
      change: -3.4,
      market: 'Kochi',
      lastUpdated: '1 hour ago',
      demand: 'Very High',
      quality: 'Premium'
    },
    {
      crop: 'Coconut',
      malayalam: 'തേങ്ങ',
      currentPrice: 25,
      previousPrice: 23,
      unit: 'per piece',
      change: 8.7,
      market: 'Thrissur',
      lastUpdated: '3 hours ago',
      demand: 'High',
      quality: 'Medium'
    },
    {
      crop: 'Black Pepper',
      malayalam: 'കുരുമുളക്',
      currentPrice: 65000,
      previousPrice: 62000,
      unit: 'per quintal',
      change: 4.8,
      market: 'Kochi',
      lastUpdated: '1 hour ago',
      demand: 'Very High',
      quality: 'Export'
    },
    {
      crop: 'Cardamom',
      malayalam: 'ഏലം',
      currentPrice: 155000,
      previousPrice: 152000,
      unit: 'per quintal',
      change: 2.0,
      market: 'Kumily',
      lastUpdated: '4 hours ago',
      demand: 'High',
      quality: 'Premium'
    },
    {
      crop: 'Tomato',
      malayalam: 'തക്കാളി',
      currentPrice: 3200,
      previousPrice: 4100,
      unit: 'per quintal',
      change: -22.0,
      market: 'Thrissur',
      lastUpdated: '30 min ago',
      demand: 'Medium',
      quality: 'Grade A'
    }
  ]

  const govtSchemes = [
    {
      name: 'PM-KISAN Samman Nidhi',
      malayalam: 'പിഎം കിസാൻ സമ്മാൻ നിധി',
      amount: '₹6,000 per year',
      description: 'Direct income support to farmer families',
      eligibility: 'All landholding farmers',
      status: 'Active',
      lastPayment: 'Dec 2023',
      nextPayment: 'Apr 2024'
    },
    {
      name: 'Crop Insurance (PMFBY)',
      malayalam: 'വിള ഇൻഷുറൻസ്',
      amount: '2% premium for Kharif',
      description: 'Comprehensive crop insurance coverage',
      eligibility: 'All farmers with crop loans',
      status: 'Available',
      coverage: 'Up to Sum Insured'
    },
    {
      name: 'Soil Health Card',
      malayalam: 'മണ്ണിന്റെ ആരോഗ്യ കാർഡ്',
      amount: 'Free service',
      description: 'Soil testing and nutrient recommendations',
      eligibility: 'All farmers',
      status: 'Available',
      validity: '3 years'
    },
    {
      name: 'Drip Irrigation Subsidy',
      malayalam: 'ഡ്രിപ്പ് ഇറിഗേഷൻ സബ്സിഡി',
      amount: '50-90% subsidy',
      description: 'Micro irrigation system support',
      eligibility: 'Small & marginal farmers',
      status: 'Application Open',
      deadline: 'Mar 31, 2024'
    }
  ]

  const insuranceInfo = [
    {
      type: 'Weather-Based Crop Insurance',
      coverage: 'Rainfall, temperature, humidity variations',
      premium: '₹500-2000 per acre',
      claim: 'Automatic trigger based on weather data',
      provider: 'IFFCO Tokio, HDFC ERGO'
    },
    {
      type: 'Yield-Based Insurance',
      coverage: 'Crop yield shortfall protection',
      premium: '2% of sum insured for Kharif',
      claim: 'Based on actual yield vs threshold',
      provider: 'AIC, IFFCO Tokio'
    },
    {
      type: 'Revenue Insurance',
      coverage: 'Price and yield risk protection',
      premium: '3-5% of sum insured',
      claim: 'Revenue shortfall compensation',
      provider: 'HDFC ERGO, ICICI Lombard'
    }
  ]

  const getDemandColor = (demand) => {
    switch (demand) {
      case 'Very High': return 'text-green-700 bg-green-100'
      case 'High': return 'text-blue-700 bg-blue-100'
      case 'Medium': return 'text-yellow-700 bg-yellow-100'
      case 'Low': return 'text-red-700 bg-red-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  const getQualityColor = (quality) => {
    switch (quality) {
      case 'Premium': case 'Export': return 'text-purple-700 bg-purple-100'
      case 'Grade A': return 'text-green-700 bg-green-100'
      case 'FAQ': case 'Medium': return 'text-blue-700 bg-blue-100'
      default: return 'text-gray-700 bg-gray-100'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Market & Government Info</h1>
            <p className="text-gray-600">Live prices, schemes, and support information</p>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-green-500"
            >
              <option value="Thrissur">Thrissur</option>
              <option value="Kochi">Kochi</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Trivandrum">Trivandrum</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="prices" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prices">Market Prices</TabsTrigger>
            <TabsTrigger value="schemes">Govt. Schemes</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
          </TabsList>

          <TabsContent value="prices" className="space-y-6">
            {/* Price Alert */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-medium text-orange-900">Price Alert</p>
                    <p className="text-sm text-orange-700">Tomato prices dropped 22% due to bumper harvest. Consider storage or processing.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Prices Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Live Market Prices - {selectedLocation}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Crop</th>
                        <th className="text-left p-3 font-semibold">Current Price</th>
                        <th className="text-left p-3 font-semibold">Change</th>
                        <th className="text-left p-3 font-semibold">Demand</th>
                        <th className="text-left p-3 font-semibold">Quality</th>
                        <th className="text-left p-3 font-semibold">Updated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketPrices.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{item.crop}</p>
                              <p className="text-sm text-gray-500">{item.malayalam}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div>
                              <p className="font-semibold">₹{item.currentPrice.toLocaleString()}</p>
                              <p className="text-sm text-gray-500">{item.unit}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className={`flex items-center ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {item.change >= 0 ? (
                                <TrendingUp className="w-4 h-4 mr-1" />
                              ) : (
                                <TrendingDown className="w-4 h-4 mr-1" />
                              )}
                              <span className="font-medium">{Math.abs(item.change)}%</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(item.demand)}`}>
                              {item.demand}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(item.quality)}`}>
                              {item.quality}
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-500">{item.lastUpdated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-green-600">Best Selling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Black Pepper</span>
                      <span className="font-semibold text-green-600">+4.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Coconut</span>
                      <span className="font-semibold text-green-600">+8.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cardamom</span>
                      <span className="font-semibold text-green-600">+2.0%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-blue-600">Export Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Black Pepper - Middle East</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Cardamom - European Union</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Basmati Rice - Gulf Countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-orange-600">Price Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Spices</p>
                      <p className="text-orange-600">Upward trend expected</p>
                    </div>
                    <div>
                      <p className="font-medium">Vegetables</p>
                      <p className="text-red-600">Seasonal price drop</p>
                    </div>
                    <div>
                      <p className="font-medium">Cereals</p>
                      <p className="text-green-600">Stable demand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schemes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {govtSchemes.map((scheme, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{scheme.name}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{scheme.malayalam}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        scheme.status === 'Active' ? 'bg-green-100 text-green-700' :
                        scheme.status === 'Available' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {scheme.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-green-600">{scheme.amount}</p>
                      <p className="text-gray-700 mt-2">{scheme.description}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Eligibility:</span>
                        <p className="font-medium">{scheme.eligibility}</p>
                      </div>

                      {scheme.lastPayment && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Last Payment:</span>
                          <span className="font-medium">{scheme.lastPayment}</span>
                        </div>
                      )}

                      {scheme.nextPayment && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Next Payment:</span>
                          <span className="font-medium text-green-600">{scheme.nextPayment}</span>
                        </div>
                      )}

                      {scheme.coverage && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Coverage:</span>
                          <span className="font-medium">{scheme.coverage}</span>
                        </div>
                      )}

                      {scheme.validity && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Validity:</span>
                          <span className="font-medium">{scheme.validity}</span>
                        </div>
                      )}

                      {scheme.deadline && (
                        <div className="flex justify-between">
                          <span className="text-gray-500">Deadline:</span>
                          <span className="font-medium text-red-600">{scheme.deadline}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2 pt-3 border-t">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Important Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Agricultural Department</h4>
                    <div className="space-y-1 text-sm">
                      <p>Director: 0471-2301283</p>
                      <p>Thrissur Office: 0487-2421046</p>
                      <p>Email: agridept.kerala@gov.in</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Krishi Bhavan</h4>
                    <div className="space-y-1 text-sm">
                      <p>Thrissur: 0487-2442125</p>
                      <p>Kochi: 0484-2396244</p>
                      <p>Kozhikode: 0495-2720197</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Kisan Call Centre</h4>
                    <div className="space-y-1 text-sm">
                      <p className="font-medium text-green-600">Toll Free: 1800-180-1551</p>
                      <p>Available 24/7</p>
                      <p>Multi-language support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insurance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {insuranceInfo.map((insurance, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="w-5 h-5 mr-2 text-blue-600" />
                      {insurance.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Coverage</h4>
                      <p className="text-sm text-gray-700">{insurance.coverage}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Premium:</span>
                        <p className="font-medium text-blue-600">{insurance.premium}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Claim Process:</span>
                        <p className="font-medium">{insurance.claim}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Providers:</span>
                        <p className="font-medium">{insurance.provider}</p>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Quote
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Insurance Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Why Get Crop Insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                        <span>Protection against natural disasters</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span>Coverage for yield losses</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                        <span>Loan repayment security</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                        <span>Financial stability for families</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">How to Apply</h4>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                        <span>Visit your local bank or insurance office</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                        <span>Carry land documents and Aadhaar card</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                        <span>Choose appropriate coverage plan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                        <span>Pay premium and get policy document</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Market