export interface SafetyReport {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  description: string;
  files?: File[];
  submittedAt: string;
  status: 'pending' | 'investigating' | 'resolved';
}

export interface MSDS {
  id: string;
  name: string;
  category: string;
  hazardLevel: string;
  safetyMeasures: string[];
  firstAid: string[];
  storageRequirements: string;
  disposalInstructions: string;
}