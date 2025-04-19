
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "PowerWatch AI has reduced our non-technical losses by 14.3% in the first six months, with an estimated annual savings of $3.2 million.",
    name: "Sarah Johnson",
    title: "Chief Operations Officer",
    company: "Western Grid Solutions"
  },
  {
    quote: "The machine learning algorithms continuously improve, giving us better theft detection accuracy each month. Our field teams are now 3x more efficient.",
    name: "Michael Chen",
    title: "Head of Smart Grid Technologies",
    company: "Metropolitan Power"
  },
  {
    quote: "Implementation was seamless with our existing smart meter infrastructure. The dashboard gives us unprecedented visibility into usage patterns.",
    name: "Amelia Rodriguez",
    title: "IT Director",
    company: "Coastal Energy Cooperative"
  }
];

const caseStudies = [
  {
    title: "Metro Regional Utility",
    description: "Detected 126 instances of electricity theft in first quarter, resulting in $1.4M recovered revenue",
    metric: "$1.4M",
    metricLabel: "Recovered Revenue"
  },
  {
    title: "Rural Cooperative",
    description: "Reduced non-technical losses from 7.2% to 2.1% within eight months of implementation",
    metric: "71%",
    metricLabel: "Reduction in Losses"
  },
  {
    title: "Industrial Zone Management",
    description: "Identified anomalous usage patterns in manufacturing district, preventing potential grid failure",
    metric: "24h",
    metricLabel: "Outage Prevention"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how utilities across the world have transformed their operations and reduced 
            losses with our AI-powered detection system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="italic mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-electric-600">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-electric-600 to-energy-500 rounded-xl p-1">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Case Studies & Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center p-6 border border-border rounded-lg bg-background">
                  <h4 className="font-semibold mb-2">{study.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-3xl font-bold text-electric-600">{study.metric}</p>
                    <p className="text-sm text-muted-foreground">{study.metricLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
