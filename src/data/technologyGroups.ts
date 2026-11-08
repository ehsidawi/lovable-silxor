export const technologyGroups = [
 { id:"cloud",label:"Cloud",description:"Hosting, compute and platform services",names:["Microsoft (Azure, Entra ID, Microsoft 365)","Google Cloud","AWS","Oracle Cloud","IBM","VMware"] },
 { id:"identity",label:"Identity",description:"Workforce, customer and identity governance",names:["Microsoft (Azure, Entra ID, Microsoft 365)","Okta","Auth0","Ping Identity","ForgeRock","SailPoint","Saviynt"] },
 { id:"privileged-access",label:"Privileged access",description:"Credentials, secrets and elevated access",names:["CyberArk","BeyondTrust","Delinea","HashiCorp"] },
 { id:"security",label:"Security",description:"Detection, access controls and threat defense",names:["Palo Alto Networks","Fortinet","CrowdStrike","Zscaler","Cloudflare","Splunk"] },
 { id:"network",label:"Network",description:"Connectivity, segmentation and edge services",names:["Cisco","Palo Alto Networks","Fortinet","Cloudflare","Zscaler"] },
 { id:"devops",label:"DevOps",description:"Platforms, containers and infrastructure automation",names:["Red Hat","Kubernetes","Docker","Terraform","HashiCorp","VMware"] },
 { id:"itsm",label:"ITSM",description:"Service management and operational workflows",names:["ServiceNow"] },
 { id:"enterprise-apps",label:"Enterprise apps",description:"Workplace and business applications",names:["Microsoft (Azure, Entra ID, Microsoft 365)","Salesforce","SAP"] },
];
export const technologyAnchor=(name:string)=>`platform-${name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/g,"")}`;
