import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const CarbonCalculatorForm = () => {
  const [formData, setFormData] = useState({
    electricity: '',
    carMileage: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto ">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-800">Carbon Calculator</h2>
        </div>
        <p className="text-sm text-gray-500">Calculate your carbon footprint</p>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="electricity" className="text-sm font-medium">
              Electricity Usage (kWh)
            </Label>
            <Input
              id="electricity"
              name="electricity"
              type="number"
              placeholder="Enter your monthly usage"
              value={formData.electricity}
              onChange={handleChange}
              className="w-full"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="carMileage" className="text-sm font-medium">
              Car Mileage (km)
            </Label>
            <Input
              id="carMileage"
              name="carMileage"
              type="number"
              placeholder="Enter distance traveled"
              value={formData.carMileage}
              onChange={handleChange}
              className="w-full"
              required
              min="0"
              step="0.01"
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Calculate Footprint
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CarbonCalculatorForm;