
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Zap, Target } from "lucide-react";

const BloodCellInfo = () => {
  const cellTypes = [
    {
      name: "Neutrophil",
      percentage: "50-70%",
      icon: Shield,
      color: "bg-blue-100 text-blue-800",
      description: "The most abundant white blood cells, serving as the first line of defense against bacterial infections.",
      functions: [
        "Phagocytosis of bacteria",
        "Release of antimicrobial substances",
        "Formation of neutrophil extracellular traps (NETs)"
      ],
      morphology: "Multi-lobed nucleus, granular cytoplasm",
      normalRange: "2,000-7,500 cells/μL"
    },
    {
      name: "Lymphocyte", 
      percentage: "20-40%",
      icon: Users,
      color: "bg-green-100 text-green-800",
      description: "Key players in adaptive immunity, including T cells, B cells, and NK cells.",
      functions: [
        "Antibody production (B cells)",
        "Cell-mediated immunity (T cells)",
        "Immune memory formation"
      ],
      morphology: "Large nucleus, minimal cytoplasm",
      normalRange: "1,000-4,000 cells/μL"
    },
    {
      name: "Monocyte",
      percentage: "2-8%",
      icon: Zap,
      color: "bg-purple-100 text-purple-800", 
      description: "Largest white blood cells that differentiate into macrophages and dendritic cells.",
      functions: [
        "Differentiation into macrophages",
        "Antigen presentation",
        "Tissue repair and remodeling"
      ],
      morphology: "Kidney-shaped nucleus, abundant cytoplasm",
      normalRange: "200-800 cells/μL"
    },
    {
      name: "Eosinophil",
      percentage: "1-4%",
      icon: Target,
      color: "bg-orange-100 text-orange-800",
      description: "Specialized cells that combat parasitic infections and mediate allergic reactions.",
      functions: [
        "Parasitic infection defense",
        "Allergic reaction mediation",
        "Anti-inflammatory role"
      ],
      morphology: "Bi-lobed nucleus, eosinophilic granules",
      normalRange: "50-400 cells/μL"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Blood Cell Classification Guide</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={cellTypes[0].name.toLowerCase()} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {cellTypes.map((cell) => (
              <TabsTrigger 
                key={cell.name} 
                value={cell.name.toLowerCase()}
                className="text-xs"
              >
                {cell.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {cellTypes.map((cell) => {
            const IconComponent = cell.icon;
            return (
              <TabsContent key={cell.name} value={cell.name.toLowerCase()} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{cell.name}</h3>
                      <Badge className={cell.color}>{cell.percentage} of WBCs</Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {cell.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Functions:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cell.functions.map((func, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {func}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-xs text-gray-500">MORPHOLOGY</span>
                      <p className="text-sm">{cell.morphology}</p>
                    </div>
                    <div>
                      <span className="font-medium text-xs text-gray-500">NORMAL RANGE</span>
                      <p className="text-sm">{cell.normalRange}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BloodCellInfo;
