import { useState } from 'react'
import { 
  User, 
  Phone, 
  MapPin, 
  Ruler, 
  Mountain, 
  Calendar, 
  Settings,
  Languages,
  Volume2,
  Wifi
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Ravi Krishnan',
    phone: '+91 9876543210',
    location: 'Thrissur, Kerala',
    landSize: '4.0 acres',
    soilType: 'Laterite',
    experience: '15 years',
    language: 'English',
    units: 'Metric',
    voiceEnabled: true,
    offlineMode: false
  })

  const [croppingHistory] = useState([
    { season: 'Kharif 2024', crop: 'Rice', yield: '2.5 tons/acre', status: 'Harvested' },
    { season: 'Rabi 2023', crop: 'Vegetables', yield: '1.8 tons/acre', status: 'Sold' },
    { season: 'Kharif 2023', crop: 'Rice', yield: '2.2 tons/acre', status: 'Harvested' },
    { season: 'Summer 2023', crop: 'Groundnut', yield: '1.5 tons/acre', status: 'Harvested' }
  ])

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a database
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600">Manage your farm details and preferences</p>
          </div>
          <Button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.location}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Land Size
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.landSize}
                        onChange={(e) => setProfile({...profile, landSize: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Ruler className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.landSize}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Soil Type
                    </label>
                    {isEditing ? (
                      <select
                        value={profile.soilType}
                        onChange={(e) => setProfile({...profile, soilType: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="Laterite">Laterite</option>
                        <option value="Alluvial">Alluvial</option>
                        <option value="Black">Black Cotton</option>
                        <option value="Red">Red Soil</option>
                        <option value="Sandy">Sandy</option>
                      </select>
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Mountain className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.soilType} Soil</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Farming Experience
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.experience}
                        onChange={(e) => setProfile({...profile, experience: e.target.value})}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    ) : (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                        <span>{profile.experience}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cropping History */}
            <Card>
              <CardHeader>
                <CardTitle>Cropping History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {croppingHistory.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{record.season}</h4>
                        <p className="text-sm text-gray-600">{record.crop}</p>
                      </div>
                      <div className="text-center mx-4">
                        <p className="text-sm font-medium">{record.yield}</p>
                        <p className="text-xs text-gray-500">Yield</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          record.status === 'Harvested' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {record.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings & Preferences */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Languages className="w-5 h-5 text-gray-400 mr-3" />
                    <select
                      value={profile.language}
                      onChange={(e) => setProfile({...profile, language: e.target.value})}
                      className="bg-transparent border-none outline-none flex-1"
                      disabled={!isEditing}
                    >
                      <option value="English">English</option>
                      <option value="Malayalam">മലയാളം</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Measurement Units
                  </label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Ruler className="w-5 h-5 text-gray-400 mr-3" />
                    <select
                      value={profile.units}
                      onChange={(e) => setProfile({...profile, units: e.target.value})}
                      className="bg-transparent border-none outline-none flex-1"
                      disabled={!isEditing}
                    >
                      <option value="Metric">Metric (kg, L)</option>
                      <option value="Imperial">Imperial (lb, gal)</option>
                      <option value="Local">Local Units</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Volume2 className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Voice Support</span>
                    </span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={profile.voiceEnabled}
                        onChange={(e) => setProfile({...profile, voiceEnabled: e.target.checked})}
                        disabled={!isEditing}
                        className="sr-only"
                      />
                      <div className={`block w-12 h-6 rounded-full ${profile.voiceEnabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${profile.voiceEnabled ? 'transform translate-x-6' : ''}`}></div>
                      </div>
                    </div>
                  </label>
                  <p className="text-xs text-gray-500 mt-1 ml-8">Enable voice commands and responses</p>
                </div>

                <div>
                  <label className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Wifi className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-700">Offline Mode</span>
                    </span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={profile.offlineMode}
                        onChange={(e) => setProfile({...profile, offlineMode: e.target.checked})}
                        disabled={!isEditing}
                        className="sr-only"
                      />
                      <div className={`block w-12 h-6 rounded-full ${profile.offlineMode ? 'bg-green-500' : 'bg-gray-300'}`}>
                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${profile.offlineMode ? 'transform translate-x-6' : ''}`}></div>
                      </div>
                    </div>
                  </label>
                  <p className="text-xs text-gray-500 mt-1 ml-8">Cache data for offline access</p>
                </div>

                <div className="pt-4 border-t">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-700">Account Stats</h4>
                    <div className="text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Member since:</span>
                        <span>January 2023</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span>Health checks:</span>
                        <span>47 total</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span>AI conversations:</span>
                        <span>23 chats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile