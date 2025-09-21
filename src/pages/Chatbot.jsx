import { useState } from 'react'
import { 
  MessageCircle, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  User,
  Bot,
  Clock,
  Trash2
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI farming assistant. How can I help you today?',
      malayalam: 'നമസ്കാരം! ഞാൻ നിങ്ങളുടെ AI കാർഷിക സഹായിയാണ്. ഇന്ന് എനിക്ക് എങ്ങനെ നിങ്ങളെ സഹായിക്കാം?',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      type: 'user',
      content: 'My rice plants are showing yellow leaves. What should I do?',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      type: 'bot',
      content: 'Yellow leaves in rice can indicate several issues:\n\n1. **Nitrogen deficiency** - Most common cause\n2. **Overwatering** - Root damage from excess water\n3. **Pest issues** - Check for stem borer or leaf folder\n\nRecommended actions:\n• Apply urea fertilizer (25kg per acre)\n• Ensure proper drainage\n• Check for pest damage\n\nWould you like me to update your crop status?',
      malayalam: 'അരിയിലെ മഞ്ഞ ഇലകൾ പല കാരണങ്ങൾ സൂചിപ്പിക്കാം:\n\n1. **നൈട്രജൻ കുറവ് ** - ഏറ്റവും സാധാരണ കാരണം\n2. **അധിക വെള്ളം** - വേരുകൾക്ക് കേടുപാടുകൾ\n3. **കീട പ്രശ്നങ്ങൾ** - തണ്ട് തുരപ്പൻ അല്ലെങ്കിൽ ഇല മടക്കൻ പരിശോധിക്കുക',
      timestamp: new Date(Date.now() - 180000),
      actions: ['Update Crop Status', 'Get Fertilizer Info', 'Schedule Inspection']
    }
  ])

  const [newMessage, setNewMessage] = useState('')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [language, setLanguage] = useState('EN')

  const [conversationHistory] = useState([
    { date: '2024-01-15', topic: 'Rice Disease Management', messages: 8 },
    { date: '2024-01-12', topic: 'Fertilizer Application', messages: 5 },
    { date: '2024-01-10', topic: 'Weather Impact Discussion', messages: 12 },
    { date: '2024-01-08', topic: 'Market Price Inquiry', messages: 6 }
  ])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        content: newMessage,
        timestamp: new Date()
      }

      setMessages([...messages, userMessage])
      setNewMessage('')

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: getBotResponse(newMessage),
          malayalam: getBotResponseMalayalam(newMessage),
          timestamp: new Date(),
          actions: getBotActions(newMessage)
        }
        setMessages(prev => [...prev, botResponse])
      }, 1500)
    }
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('pest') || lowerMessage.includes('insect')) {
      return 'For pest management, I recommend:\n\n• **Integrated Pest Management (IPM)** approach\n• Use neem-based pesticides first\n• Install pheromone traps\n• Encourage beneficial insects\n\nWhich specific pest are you dealing with?'
    }
    
    if (lowerMessage.includes('fertilizer') || lowerMessage.includes('nutrient')) {
      return 'Based on your soil type (Laterite), here\'s the fertilizer schedule:\n\n**Basal application:**\n• NPK 20:20:0 - 100kg/acre\n• Organic compost - 5 tons/acre\n\n**Top dressing:**\n• Urea - 25kg at 30 days\n• Urea - 25kg at 60 days\n\nWould you like me to set reminders?'
    }
    
    if (lowerMessage.includes('weather') || lowerMessage.includes('rain')) {
      return 'Current weather analysis for Thrissur:\n\n• **Next 3 days:** Heavy rain expected\n• **Recommendation:** Provide drainage, avoid fertilizer application\n• **Pest alert:** Increased fungal disease risk\n\nShall I send you weather alerts?'
    }

    return 'I understand your concern. Could you provide more details about:\n\n• Which crop is affected?\n• What symptoms are you seeing?\n• When did you first notice this?\n\nThis will help me give you better recommendations.'
  }

  const getBotResponseMalayalam = (message) => {
    return 'എനിക്ക് നിങ്ങളുടെ ആശങ്ക മനസ്സിലായി. കൂടുതൽ വിശദാംശങ്ങൾ നൽകാമോ?'
  }

  const getBotActions = (message) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes('fertilizer')) {
      return ['Set Fertilizer Reminder', 'Find Suppliers', 'View Application Guide']
    }
    if (lowerMessage.includes('pest')) {
      return ['Schedule Inspection', 'Find Pest Control', 'Get Expert Help']
    }
    return ['Update Crop Status', 'Get More Info', 'Talk to Expert']
  }

  const toggleVoice = () => {
    setIsListening(!isListening)
    // Placeholder for voice recognition
  }

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking)
    // Placeholder for text-to-speech
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">AI Assistant</h1>
            <p className="text-gray-600">Get instant farming advice and support</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={() => setLanguage(language === 'EN' ? 'ML' : 'EN')}>
              {language}
            </Button>
            <Button variant="outline" size="sm" onClick={toggleSpeech}>
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with AI Assistant
                </CardTitle>
              </CardHeader>
              
              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-1' : 'order-2'}`}>
                      <div className={`rounded-lg p-4 ${
                        message.type === 'user' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-white border border-gray-200'
                      }`}>
                        <div className="flex items-center mb-2">
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 mr-2" />
                          ) : (
                            <Bot className="w-4 h-4 mr-2 text-green-600" />
                          )}
                          <span className="text-xs opacity-75">{formatTime(message.timestamp)}</span>
                        </div>
                        
                        <div className="whitespace-pre-line">
                          {language === 'ML' && message.malayalam ? message.malayalam : message.content}
                        </div>

                        {message.actions && (
                          <div className="mt-3 space-y-2">
                            {message.actions.map((action, index) => (
                              <Button 
                                key={index} 
                                variant="outline" 
                                size="sm" 
                                className="mr-2 mb-2"
                                onClick={() => {
                                  setNewMessage(`Help me with: ${action}`)
                                }}
                              >
                                {action}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t bg-gray-50 flex-shrink-0">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your farming question..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <Button
                    variant={isListening ? "default" : "outline"}
                    size="icon"
                    onClick={toggleVoice}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button onClick={handleSendMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setNewMessage('Check my crop health status')}
                >
                  Check Crop Status
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setNewMessage('What is the weather forecast?')}
                >
                  Weather Forecast
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setNewMessage('Show me market prices')}
                >
                  Market Prices
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => setNewMessage('Fertilizer application schedule')}
                >
                  Fertilizer Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Conversation History */}
            <Card>
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle className="text-lg">Chat History</CardTitle>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {conversationHistory.map((convo, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{convo.topic}</span>
                      <Clock className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{convo.date}</span>
                      <span>{convo.messages} messages</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Real-time crop monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Weather-based recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    <span>Market price alerts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span>Pest & disease identification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Voice support (coming soon)</span>
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

export default Chatbot