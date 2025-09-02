import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Save } from "lucide-react";

interface DashboardProps {
  onClose: () => void;
}

const Dashboard = ({ onClose }: DashboardProps) => {
  const [data, setData] = useState({
    heroTitle: "Gram Panchayat Rampur",
    heroDescription: "Serving our community with dedication and transparency",
    contactPhone: "+91 12345 67890",
    contactEmail: "grampanchayat@rampur.gov.in",
    population: "5,247",
    households: "1,156",
    literacyRate: "78.5%"
  });

  const handleSave = () => {
    // In a real application, this would save to a database
    localStorage.setItem('panchayatData', JSON.stringify(data));
    alert('Data saved successfully!');
  };

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-government-blue">Admin Dashboard</h1>
          <Button onClick={onClose} variant="outline" size="sm">
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Hero Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-government-blue">Hero Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  value={data.heroTitle}
                  onChange={(e) => handleChange('heroTitle', e.target.value)}
                  placeholder="Enter hero title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={data.heroDescription}
                  onChange={(e) => handleChange('heroDescription', e.target.value)}
                  placeholder="Enter hero description"
                  rows={3}
                />
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-government-blue">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  value={data.contactPhone}
                  onChange={(e) => handleChange('contactPhone', e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  value={data.contactEmail}
                  onChange={(e) => handleChange('contactEmail', e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </Card>

          {/* Statistics */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-government-blue">Village Statistics</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Population</label>
                <Input
                  value={data.population}
                  onChange={(e) => handleChange('population', e.target.value)}
                  placeholder="Enter population"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Households</label>
                <Input
                  value={data.households}
                  onChange={(e) => handleChange('households', e.target.value)}
                  placeholder="Enter number of households"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Literacy Rate</label>
                <Input
                  value={data.literacyRate}
                  onChange={(e) => handleChange('literacyRate', e.target.value)}
                  placeholder="Enter literacy rate"
                />
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button onClick={handleSave} size="lg" className="bg-government-blue hover:bg-government-blue/90">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;