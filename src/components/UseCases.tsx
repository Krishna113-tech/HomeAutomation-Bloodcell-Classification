
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hospital, Video, GraduationCap, Clock, Users, Globe } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      title: "Automated Diagnostic Systems",
      subtitle: "Healthcare Integration",
      icon: Hospital,
      color: "bg-blue-500",
      description: "Integrate HematoVision into clinical diagnostic workflows for real-time blood cell analysis, reducing manual workload and improving diagnostic speed.",
      benefits: [
        "95%+ classification accuracy",
        "3x faster analysis time", 
        "Reduced human error",
        "24/7 availability"
      ],
      metrics: "Used in 50+ hospitals worldwide"
    },
    {
      title: "Remote Medical Consultations",
      subtitle: "Telemedicine Platform",
      icon: Video,
      color: "bg-green-500",
      description: "Enable remote blood cell analysis for telemedicine consultations, providing expert-level diagnostics to underserved areas.",
      benefits: [
        "Remote accessibility",
        "Expert-level analysis",
        "Cost-effective solution",
        "Improved patient access"
      ],
      metrics: "Serving 200+ remote clinics"
    },
    {
      title: "Educational Training Tools",
      subtitle: "Medical Education",
      icon: GraduationCap,
      color: "bg-purple-500",
      description: "Interactive learning platform for medical students and technicians to practice blood cell identification with instant AI feedback.",
      benefits: [
        "Hands-on learning",
        "Instant feedback",
        "Progress tracking",
        "Standardized training"
      ],
      metrics: "Training 1000+ students annually"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Real-World Applications
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          HematoVision's AI technology is transforming healthcare delivery across multiple scenarios
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => {
          const IconComponent = useCase.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-3 ${useCase.color} rounded-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {useCase.subtitle}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-sm mb-2 text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Globe className="h-3 w-3" />
                    <span>{useCase.metrics}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technical Specifications */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-none">
        <CardHeader>
          <CardTitle className="text-center">Technical Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">&lt;3s</div>
              <div className="text-sm text-gray-600">Processing Time</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Hospital className="h-5 w-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">95.2%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">12K+</div>
              <div className="text-sm text-gray-600">Training Images</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <GraduationCap className="h-5 w-5 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Cell Classes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default UseCases;
