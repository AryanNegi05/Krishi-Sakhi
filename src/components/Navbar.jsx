import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  User, 
  Stethoscope, 
  Lightbulb, 
  MessageCircle, 
  DollarSign, 
  Users, 
  CloudRain,
  Menu,
  X,
  Languages
} from 'lucide-react'
import { Button } from './ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('EN')
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home', malayalam: 'വീട്' },
    { path: '/profile', icon: User, label: 'Profile', malayalam: 'പ്രൊഫൈൽ' },
    { path: '/crop-health', icon: Stethoscope, label: 'Health', malayalam: 'ആരോഗ്യം' },
    { path: '/recommendations', icon: Lightbulb, label: 'Tips', malayalam: 'നുറുങ്ങുകൾ' },
    { path: '/chatbot', icon: MessageCircle, label: 'Chat', malayalam: 'ചാറ്റ്' },
    { path: '/market', icon: DollarSign, label: 'Market', malayalam: 'മാർക്കറ്റ്' },
    { path: '/weather', icon: CloudRain, label: 'Weather', malayalam: 'കാലാവസ്ഥ' },
    { path: '/community', icon: Users, label: 'Community', malayalam: 'സമൂഹം' }
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ML' : 'EN')
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-lg font-bold text-green-600">FarmAssist Kerala</div>
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="ml-4">
                <Languages className="w-4 h-4 mr-2" />
                {language}
              </Button>
            </div>
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-green-100 text-green-600' 
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-xs mt-1">
                      {language === 'EN' ? item.label : item.malayalam}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="flex justify-between items-center p-4">
            <div className="text-lg font-bold text-green-600">FarmAssist Kerala</div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={toggleLanguage}>
                <Languages className="w-4 h-4 mr-1" />
                {language}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="grid grid-cols-4 gap-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-green-100 text-green-600' 
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon size={24} />
                    <span className="text-xs mt-1 text-center">
                      {language === 'EN' ? item.label : item.malayalam}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
          <div className="flex">
            {navItems.slice(0, 5).map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors ${
                    isActive 
                      ? 'bg-green-100 text-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs mt-1">
                    {language === 'EN' ? item.label : item.malayalam}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar