
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Microscope, Brain, Users, FileText, Activity } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import ClassificationResults from "@/components/ClassificationResults";
import BloodCellInfo from "@/components/BloodCellInfo";
import UseCases from "@/components/UseCases";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setShowResults(false);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const resetAnalysis = () => {
    setSelectedImage(null);
    setShowResults(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HematoVision</h1>
                <p className="text-sm text-gray-600">Advanced Blood Cell Classification AI</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              System Active
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Blood Cell Classification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizing advanced transfer learning techniques to classify blood cells with 
              95%+ accuracy. Supporting healthcare professionals with reliable, fast diagnostics.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">12K+</div>
                <div className="text-sm text-gray-600">Training Images</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-sm text-gray-600">Cell Types</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">&lt;3s</div>
                <div className="text-sm text-gray-600">Analysis Time</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Analysis Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Image Upload & Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <ImageUpload onImageUpload={handleImageUpload} />
                {selectedImage && !showResults && (
                  <div className="mt-6">
                    <Button 
                      onClick={handleAnalyze} 
                      disabled={isAnalyzing}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {isAnalyzing ? (
                        <>
                          <Brain className="h-4 w-4 mr-2 animate-pulse" />
                          Analyzing with AI...
                        </>
                      ) : (
                        <>
                          <Microscope className="h-4 w-4 mr-2" />
                          Analyze Blood Cells
                        </>
                      )}
                    </Button>
                  </div>
                )}
                {showResults && (
                  <div className="mt-6">
                    <Button 
                      onClick={resetAnalysis} 
                      variant="outline"
                      className="w-full"
                    >
                      Upload New Image
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div>
              {showResults ? (
                <ClassificationResults />
              ) : (
                <BloodCellInfo />
              )}
            </div>
          </div>

          {/* Use Cases Section */}
          <UseCases />
        </div>
      </section>
    </div>
  );
};

export default Index;
