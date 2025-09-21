import { useState } from 'react'
import { 
  Camera, 
  Upload, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Leaf,
  Bug,
  Droplets,
  Sun,
  Calendar
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const CropHealth = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const [healthHistory] = useState([
    {
      id: 1,
      date: '2024-01-15',
      crop: 'Rice',
      image: 'rice_leaf.jpg',
      diagnosis: 'Healthy',
      confidence: 95,
      recommendations: ['Continue current care routine', 'Monitor for pests'],
      status: 'healthy'
    },
    {
      id: 2,
      date: '2024-01-12',
      crop: 'Tomato',
      image: 'tomato_plant.jpg',
      diagnosis: 'Early Blight',
      confidence: 87,
      recommendations: ['Apply fungicide', 'Improve air circulation', 'Remove affected leaves'],
      status: 'disease'
    },
    {
      id: 3,
      date: '2024-01-10',
      crop: 'Bean',
      image: 'bean_leaf.jpg',
      diagnosis: 'Nutrient Deficiency',
      confidence: 78,
      recommendations: ['Apply nitrogen fertilizer', 'Check soil pH', 'Increase watering'],
      status: 'deficiency'
    }
  ])

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target.result)
        setAnalysisResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        diagnosis: 'Bacterial Leaf Spot',
        confidence: 89,
        severity: 'Moderate',
        recommendations: [
          'Apply copper-based fungicide immediately',
          'Remove and destroy affected leaves',
          'Improve air circulation around plants',
          'Avoid overhead watering',
          'Monitor daily for spread'
        ],
        treatmentPlan: {
          immediate: 'Apply fungicide spray this evening',
          weekly: 'Monitor and repeat treatment if necessary',
          prevention: 'Implement proper spacing and drainage'
        }
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'disease':
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      case 'deficiency':
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return <Eye className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'disease':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'deficiency':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Crop Health Check</h1>
          <p className="text-gray-600">Upload crop images for AI-powered disease detection</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Image Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                Upload Crop Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {selectedImage ? (
                  <div>
                    <img 
                      src={selectedImage} 
                      alt="Selected crop" 
                      className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <p className="mt-4 text-sm text-gray-600">Image uploaded successfully</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Upload crop image</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Take a clear photo of affected leaves or plants
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button variant="outline" className="cursor-pointer">
                    {selectedImage ? 'Change Image' : 'Choose Image'}
                  </Button>
                </label>
              </div>

              {selectedImage && (
                <Button 
                  onClick={handleAnalyze} 
                  className="w-full"
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    'Analyze Crop Health'
                  )}
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {analysisResult ? (
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-yellow-900">{analysisResult.diagnosis}</h3>
                      <span className="text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                        {analysisResult.confidence}% confidence
                      </span>
                    </div>
                    <p className="text-sm text-yellow-700">Severity: {analysisResult.severity}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Immediate Recommendations</h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-1">Immediate Action</h5>
                      <p className="text-sm text-blue-700">{analysisResult.treatmentPlan.immediate}</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-1">Weekly Follow-up</h5>
                      <p className="text-sm text-green-700">{analysisResult.treatmentPlan.weekly}</p>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <h5 className="font-medium text-purple-900 mb-1">Prevention</h5>
                      <p className="text-sm text-purple-700">{analysisResult.treatmentPlan.prevention}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Upload an image to see analysis results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Health Progress Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Health Check History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {healthHistory.map((record) => (
                <div key={record.id} className={`p-4 rounded-lg border ${getStatusColor(record.status)}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(record.status)}
                      <div>
                        <h4 className="font-medium">{record.crop} - {record.diagnosis}</h4>
                        <p className="text-sm opacity-75">{record.date}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{record.confidence}% confident</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="space-y-2">
                      <h5 className="font-medium flex items-center">
                        <Leaf className="w-4 h-4 mr-1" />
                        Top Recommendations
                      </h5>
                      <ul className="text-sm space-y-1">
                        {record.recommendations.slice(0, 2).map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 mr-2 flex-shrink-0"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium flex items-center">
                        <Bug className="w-4 h-4 mr-1" />
                        Symptoms
                      </h5>
                      <div className="text-sm">
                        {record.status === 'disease' && 'Spotted leaves, discoloration'}
                        {record.status === 'deficiency' && 'Yellowing, stunted growth'}
                        {record.status === 'healthy' && 'No symptoms detected'}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium flex items-center">
                        <Droplets className="w-4 h-4 mr-1" />
                        Treatment Status
                      </h5>
                      <div className="text-sm">
                        {record.status === 'disease' && 'Treatment applied'}
                        {record.status === 'deficiency' && 'Nutrients supplemented'}
                        {record.status === 'healthy' && 'Monitoring continued'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {healthHistory.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No health check history yet</p>
                <p className="text-sm">Upload your first crop image to get started</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CropHealth