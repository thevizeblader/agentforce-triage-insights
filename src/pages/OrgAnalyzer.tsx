
import React from "react";
import AgentforceAnalyzer from "./AgentforceAnalyzer";

const OrgAnalyzer = () => {
  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Original Org Analyzer content */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Organization Analyzer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Organization Details</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Org ID:</span> ORG-12345</p>
              <p><span className="font-medium">Name:</span> Acme Corporation</p>
              <p><span className="font-medium">Instance:</span> NA99</p>
              <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Resource Summary</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">CPU Usage:</span> 45%</p>
              <p><span className="font-medium">Memory:</span> 3.2GB / 8GB</p>
              <p><span className="font-medium">Storage:</span> 128GB / 500GB</p>
              <p><span className="font-medium">API Calls:</span> 28,453 / day</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-medium text-lg mb-2">Health Status</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p><span className="font-medium">Overall:</span> <span className="text-green-600 font-medium">Healthy</span></p>
              <p><span className="font-medium">Last Check:</span> 5 minutes ago</p>
              <p><span className="font-medium">Incidents:</span> 0 active</p>
              <p><span className="font-medium">Uptime:</span> 99.98%</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* AgentForce Analyzer content */}
      <section className="border-t pt-8">
        <h2 className="text-xl font-bold mb-6">AgentForce Performance Insights</h2>
        <AgentforceAnalyzer embeddedView={true} />
      </section>
    </div>
  );
};

export default OrgAnalyzer;
