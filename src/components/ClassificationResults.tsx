
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

const ClassificationResults = () => {
  // Simulated classification results
  const results = [
    { cellType: "Neutrophil", confidence: 87.3, color: "bg-blue-500", description: "Most abundant white blood cell" },
    { cellType: "Lymphocyte", confidence: 8.2, color: "bg-green-500", description: "Key immune system cell" },
    { cellType: "Monocyte", confidence: 3.1, color: "bg-purple-500", description: "Largest white blood cell" },
    { cellType: "Eosinophil", confidence: 1.4, color: "bg-orange-500", description: "Fights parasites and allergies" }
  ];

  const topPrediction = results[0];
  const isHighConfidence = topPrediction.confidence > 80;

  return (
    <div className="space-y-6">
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="h-5 w-5" />
            <span>Analysis Complete</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-green-900">
                  {topPrediction.cellType}
                </h3>
                <p className="text-sm text-green-700">
                  {topPrediction.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-800">
                  {topPrediction.confidence}%
                </div>
                <Badge variant={isHighConfidence ? "default" : "secondary"}>
                  {isHighConfidence ? "High Confidence" : "Medium Confidence"}
                </Badge>
              </div>
            </div>
            
            {!isHighConfidence && (
              <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium">Review Recommended</p>
                  <p>Consider additional analysis or expert review for optimal accuracy.</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Detailed Predictions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {results.map((result, index) => (
            <div key={result.cellType} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${result.color}`}></div>
                  <span className="font-medium">{result.cellType}</span>
                </div>
                <span className="text-sm font-mono">{result.confidence}%</span>
              </div>
              <Progress value={result.confidence} className="h-2" />
              <p className="text-xs text-gray-600">{result.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clinical Significance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Neutrophil Functions:</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• First responders to bacterial infections</li>
                <li>• Comprise 50-70% of white blood cells</li>
                <li>• Essential for innate immune response</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Normal Ranges:</h4>
              <p className="text-gray-700">
                Neutrophils: 50-70% of WBCs (2,000-7,500 cells/μL)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassificationResults;
