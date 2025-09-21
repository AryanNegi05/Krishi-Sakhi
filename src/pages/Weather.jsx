import { 
  Sun, 
  CloudRain, 
  Cloud, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye,
  Sunrise,
  Sunset,
  Calendar,
  AlertTriangle,
  Sprout,
  Clock
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const Weather = () => {
  const currentWeather = {
    location: 'Thrissur, Kerala',
    temperature: 32,
    condition: 'Partly Cloudy',
    humidity: 78,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 7,
    sunrise: '6:12 AM',
    sunset: '6:45 PM',
    lastUpdated: '15 minutes ago'
  }

  const weeklyForecast = [
    { day: 'Today', date: 'Jan 15', icon: Sun, high: 34, low: 24, rain: 10, condition: 'Sunny' },
    { day: 'Tomorrow', date: 'Jan 16', icon: CloudRain, high: 29, low: 23, rain: 85, condition: 'Heavy Rain' },
    { day: 'Wed', date: 'Jan 17', icon: CloudRain, high: 27, low: 22, rain: 90, condition: 'Heavy Rain' },
    { day: 'Thu', date: 'Jan 18', icon: Cloud, high: 30, low: 24, rain: 40, condition: 'Cloudy' },
    { day: 'Fri', date: 'Jan 19', icon: Sun, high: 33, low: 25, rain: 5, condition: 'Sunny' },
    { day: 'Sat', date: 'Jan 20', icon: Sun, high: 35, low: 26, rain: 15, condition: 'Sunny' },
    { day: 'Sun', date: 'Jan 21', icon: CloudRain, high: 28, low: 23, rain: 70, condition: 'Moderate Rain' }
  ]

  const irrigationSchedule = [
    {
      crop: 'Rice Field A',
      nextIrrigation: 'Tomorrow 6:00 AM',
      amount: '5-8 cm flooding',
      reason: 'Panicle initiation stage',
      status: 'scheduled',
      priority: 'high'
    },
    {
      crop: 'Vegetable Plot',
      nextIrrigation: 'Today 7:00 PM',
      amount: '25-30 mm',
      reason: 'Soil moisture low',
      status: 'due',
      priority: 'urgent'
    },
    {
      crop: 'Coconut Grove',
      nextIrrigation: 'Jan 18, 6:00 AM',
      amount: '200 L per tree',
      reason: 'Weekly schedule',
      status: 'upcoming',
      priority: 'medium'
    },
    {
      crop: 'Pepper Vines',
      nextIrrigation: 'Skip next 2 days',
      amount: 'Rain expected',
      reason: 'Heavy rain forecast',
      status: 'adjusted',
      priority: 'low'
    }
  ]

  const weatherAlerts = [
    {
      type: 'Heavy Rain Warning',
      severity: 'high',
      message: 'Very heavy rainfall (115-204 mm) expected in Thrissur district for next 2 days',
      action: 'Ensure proper drainage, avoid fertilizer application',
      validUntil: 'Jan 18, 6:00 AM'
    },
    {
      type: 'High Humidity Alert',
      severity: 'medium',
      message: 'High humidity levels may increase fungal disease risk in crops',
      action: 'Monitor crops closely, apply preventive fungicides if needed',
      validUntil: 'Jan 20, 12:00 PM'
    }
  ]

  const farmingAdvice = [
    {
      category: 'Rice Cultivation',
      icon: Sprout,
      advice: 'Due to heavy rain forecast, postpone nitrogen fertilizer application. Ensure good drainage to prevent waterlogging.',
      urgency: 'high'
    },
    {
      category: 'Vegetable Crops',
      icon: Sprout,
      advice: 'Cover tomato and bean plants. Remove stagnant water immediately after rain to prevent root rot.',
      urgency: 'high'
    },
    {
      category: 'Spice Crops',
      icon: Sprout,
      advice: 'Black pepper vines are sensitive to waterlogging. Ensure proper drainage around support trees.',
      urgency: 'medium'
    },
    {
      category: 'General Farming',
      icon: Sprout,
      advice: 'Good time for land preparation after rain. Plan for post-rain pest monitoring activities.',
      urgency: 'low'
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'text-red-700 bg-red-100 border-red-200'
      case 'high': return 'text-orange-700 bg-orange-100 border-orange-200'
      case 'medium': return 'text-blue-700 bg-blue-100 border-blue-200'
      case 'low': return 'text-green-700 bg-green-100 border-green-200'
      default: return 'text-gray-700 bg-gray-100 border-gray-200'
    }
  }

  const getAlertColor = (severity) => {
    switch (severity) {
      case 'high': return 'border-red-200 bg-red-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      case 'low': return 'border-blue-200 bg-blue-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Weather & Irrigation</h1>
          <p className="text-gray-600">Real-time weather data and irrigation planning</p>
        </div>

        {/* Weather Alerts */}
        <div className="space-y-4 mb-6">
          {weatherAlerts.map((alert, index) => (
            <Card key={index} className={`border ${getAlertColor(alert.severity)}`}>
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertTriangle className={`w-5 h-5 mt-1 mr-3 ${
                    alert.severity === 'high' ? 'text-red-600' : 
                    alert.severity === 'medium' ? 'text-yellow-600' : 
                    'text-blue-600'
                  }`} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{alert.type}</h3>
                      <span className="text-xs text-gray-500">Valid until {alert.validUntil}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{alert.message}</p>
                    <p className="text-sm font-medium text-gray-900">
                      <strong>Action:</strong> {alert.action}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Current Weather */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Current Weather
              </CardTitle>
              <p className="text-sm text-gray-600">{currentWeather.location}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sun className="w-16 h-16 text-yellow-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {currentWeather.temperature}°C
                </div>
                <p className="text-gray-600">{currentWeather.condition}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                  <div>
                    <p className="text-gray-500">Humidity</p>
                    <p className="font-medium">{currentWeather.humidity}%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wind className="w-4 h-4 text-gray-500 mr-2" />
                  <div>
                    <p className="text-gray-500">Wind Speed</p>
                    <p className="font-medium">{currentWeather.windSpeed} km/h</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-green-500 mr-2" />
                  <div>
                    <p className="text-gray-500">Visibility</p>
                    <p className="font-medium">{currentWeather.visibility} km</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Sun className="w-4 h-4 text-orange-500 mr-2" />
                  <div>
                    <p className="text-gray-500">UV Index</p>
                    <p className="font-medium">{currentWeather.uvIndex}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t text-sm">
                <div className="flex items-center">
                  <Sunrise className="w-4 h-4 text-orange-400 mr-1" />
                  <span>{currentWeather.sunrise}</span>
                </div>
                <div className="flex items-center">
                  <Sunset className="w-4 h-4 text-orange-600 mr-1" />
                  <span>{currentWeather.sunset}</span>
                </div>
              </div>

              <div className="text-center text-xs text-gray-500 pt-2 border-t">
                Last updated: {currentWeather.lastUpdated}
              </div>
            </CardContent>
          </Card>

          {/* 7-Day Forecast */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                7-Day Forecast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyForecast.map((day, index) => {
                  const WeatherIcon = day.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="min-w-[80px]">
                          <p className="font-medium">{day.day}</p>
                          <p className="text-sm text-gray-500">{day.date}</p>
                        </div>
                        <WeatherIcon className={`w-8 h-8 ${
                          day.icon === Sun ? 'text-yellow-500' : 
                          day.icon === CloudRain ? 'text-blue-500' : 
                          'text-gray-500'
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium">{day.condition}</p>
                          <p className="text-sm text-blue-600">{day.rain}% rain</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{day.high}°</p>
                        <p className="text-gray-500 text-sm">{day.low}°</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Irrigation Planner */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Droplets className="w-5 h-5 mr-2" />
              Smart Irrigation Planner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {irrigationSchedule.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(item.priority)}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.crop}</h4>
                      <p className="text-sm opacity-75">{item.reason}</p>
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-white bg-opacity-50">
                      {item.priority}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{item.nextIrrigation}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplets className="w-4 h-4 mr-2" />
                      <span>{item.amount}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white border-opacity-30">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      item.status === 'due' ? 'bg-red-200 text-red-800' :
                      item.status === 'scheduled' ? 'bg-blue-200 text-blue-800' :
                      item.status === 'adjusted' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather-Based Farming Advice */}
        <Card>
          <CardHeader>
            <CardTitle>Weather-Based Farming Advice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farmingAdvice.map((advice, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  advice.urgency === 'high' ? 'border-red-200 bg-red-50' :
                  advice.urgency === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                  'border-green-200 bg-green-50'
                }`}>
                  <div className="flex items-start">
                    <advice.icon className={`w-5 h-5 mr-3 mt-1 ${
                      advice.urgency === 'high' ? 'text-red-600' :
                      advice.urgency === 'medium' ? 'text-yellow-600' :
                      'text-green-600'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{advice.category}</h4>
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          advice.urgency === 'high' ? 'bg-red-200 text-red-800' :
                          advice.urgency === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                          'bg-green-200 text-green-800'
                        }`}>
                          {advice.urgency} priority
                        </span>
                      </div>
                      <p className="text-gray-700">{advice.advice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Weather