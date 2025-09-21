import { 
  Sun, 
  CloudRain, 
  Thermometer, 
  Camera, 
  MessageCircle, 
  DollarSign,
  Sprout,
  AlertTriangle,
  TrendingUp,
  Calendar
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto p-4">
        {/* Welcome Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Ravi!</h1>
          <p className="text-gray-600">Let's check on your crops today</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Link to="/crop-health">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-blue-50 border-blue-200">
              <CardContent className="flex items-center p-6">
                <Camera className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-blue-900">Check Crop Health</h3>
                  <p className="text-sm text-blue-700">Upload crop image</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/chatbot">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-green-50 border-green-200">
              <CardContent className="flex items-center p-6">
                <MessageCircle className="w-8 h-8 text-green-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-green-900">AI Assistant</h3>
                  <p className="text-sm text-green-700">Ask farming questions</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/market">
            <Card className="hover:shadow-md transition-shadow cursor-pointer bg-orange-50 border-orange-200">
              <CardContent className="flex items-center p-6">
                <DollarSign className="w-8 h-8 text-orange-600 mr-4" />
                <div>
                  <h3 className="font-semibold text-orange-900">Market Prices</h3>
                  <p className="text-sm text-orange-700">Check current rates</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Alerts & Notifications */}
        <Card className="mb-6 border-yellow-200 bg-yellow-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-yellow-800">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-white rounded-lg border">
                <CloudRain className="w-5 h-5 text-blue-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Heavy rain expected</p>
                  <p className="text-sm text-gray-600">Next 2 days - protect crops</p>
                </div>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg border">
                <Sprout className="w-5 h-5 text-green-500 mr-3" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Fertilizer reminder</p>
                  <p className="text-sm text-gray-600">Rice field needs NPK application</p>
                </div>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weather Snapshot */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center">
              <Sun className="w-5 h-5 mr-2 text-yellow-500" />
              Weather Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {[
                { day: 'Mon', icon: Sun, temp: '32°', rain: '10%' },
                { day: 'Tue', icon: CloudRain, temp: '28°', rain: '80%' },
                { day: 'Wed', icon: CloudRain, temp: '26°', rain: '90%' },
                { day: 'Thu', icon: Sun, temp: '30°', rain: '20%' },
                { day: 'Fri', icon: Sun, temp: '33°', rain: '5%' },
                { day: 'Sat', icon: Sun, temp: '31°', rain: '15%' },
                { day: 'Sun', icon: CloudRain, temp: '27°', rain: '70%' }
              ].map((weather, index) => {
                const WeatherIcon = weather.icon
                return (
                  <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-700">{weather.day}</p>
                    <WeatherIcon className="w-6 h-6 mx-auto my-2 text-gray-600" />
                    <p className="text-sm font-semibold">{weather.temp}</p>
                    <p className="text-xs text-blue-600">{weather.rain}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Crop Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <Sprout className="w-5 h-5 mr-2 text-green-500" />
                My Crops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium">Rice Field A</p>
                    <p className="text-sm text-gray-600">Flowering stage</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">Healthy</p>
                    <p className="text-xs text-gray-500">2.5 acres</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium">Vegetable Plot</p>
                    <p className="text-sm text-gray-600">Tomato & Beans</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-yellow-600">Monitor</p>
                    <p className="text-xs text-gray-500">0.5 acres</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium">Coconut Grove</p>
                    <p className="text-sm text-gray-600">Mature trees</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-blue-600">Stable</p>
                    <p className="text-xs text-gray-500">1.0 acre</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Land</span>
                  <span className="font-semibold">4.0 acres</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Crops</span>
                  <span className="font-semibold">3 types</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Health Checks</span>
                  <span className="font-semibold">12 this month</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">AI Chats</span>
                  <span className="font-semibold">8 conversations</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Task</span>
                    <span className="text-sm text-orange-600 font-medium">Fertilizer application</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">Tomorrow, 6:00 AM</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home