export const TABLES = [
  // ── Endpoint (MDE) ───────────────────────────────────────────────────────────
  { id: "DeviceInfo",                             domain: "endpoint",  desc: "Machine info, OS version, active users, internet exposure" },
  { id: "DeviceProcessEvents",                    domain: "endpoint",  desc: "Process creation and related events" },
  { id: "DeviceNetworkEvents",                    domain: "endpoint",  desc: "Network connections from endpoints" },
  { id: "DeviceFileEvents",                       domain: "endpoint",  desc: "File create / modify / delete events" },
  { id: "DeviceRegistryEvents",                   domain: "endpoint",  desc: "Registry key creates and modifications" },
  { id: "DeviceLogonEvents",                      domain: "endpoint",  desc: "Sign-ins and auth events on devices" },
  { id: "DeviceEvents",                           domain: "endpoint",  desc: "Misc: AV, exploit protection, ASR events" },
  { id: "DeviceImageLoadEvents",                  domain: "endpoint",  desc: "DLL / module load events" },
  { id: "DeviceFileCertificateInfo",              domain: "endpoint",  desc: "Cert info of signed files on endpoints" },
  { id: "DeviceNetworkInfo",                      domain: "endpoint",  desc: "NIC info, IPs, MACs, connected networks" },

  // ── Identity (MDI / Entra) ────────────────────────────────────────────────────
  { id: "IdentityInfo",                           domain: "identity",  desc: "Account info from Entra ID and other sources" },
  { id: "IdentityLogonEvents",                    domain: "identity",  desc: "Auth events on AD and Microsoft online services" },
  { id: "IdentityDirectoryEvents",                domain: "identity",  desc: "AD DC events: queries, object modifications" },
  { id: "IdentityQueryEvents",                    domain: "identity",  desc: "LDAP / AD object queries" },
  { id: "EntraIdSignInEvents",                    domain: "identity",  desc: "Entra interactive and non-interactive sign-ins (replaces AADSignInEventsBeta)", linkableIds: true, linkableIdCols: [{ col: "SessionId (SID — session-level)" }, { col: "AccountObjectId", highlight: true }] },
  { id: "EntraIdSpnSignInEvents",                 domain: "identity",  desc: "Service principal and managed identity sign-ins" },
  { id: "AADSignInEventsBeta",                    domain: "identity",  desc: "Legacy Entra interactive and non-interactive sign-in events.", deprecated: true, replacedBy: "EntraIdSignInEvents" },
  { id: "GraphApiAuditEvents",                    domain: "identity",  extraDomains: ["cloud", "endpoint"], desc: "Graph API calls made against the tenant — also surfaces VM Run Command and remote device execution via ARM/Graph API", linkableIds: true, linkableIdCols: [{ col: "SessionId (SID — session-level)" }, { col: "SignInActivityId (UTI — per-token)" }] },
  { id: "IdentityAccountInfo",                    domain: "identity",  desc: "Account info with link to owning identity" },
  { id: "IdentityEvents",                         domain: "identity",  desc: "Identity events from third-party cloud identity providers", preview: true },

  // ── Email (MDO) ───────────────────────────────────────────────────────────────
  { id: "EmailEvents",                            domain: "email",     desc: "M365 email delivery and blocking events" },
  { id: "EmailAttachmentInfo",                    domain: "email",     desc: "File attachments associated with emails" },
  { id: "EmailUrlInfo",                           domain: "email",     desc: "URLs extracted from email bodies" },
  { id: "EmailPostDeliveryEvents",                domain: "email",     desc: "Post-delivery security events on emails" },
  { id: "UrlClickEvents",                         domain: "email",     desc: "Safe Links clicks from email, Teams, O365" },
  { id: "CampaignInfo",                           domain: "email",     desc: "Email campaigns identified by MDO", preview: true },
  { id: "FileMaliciousContentInfo",               domain: "email",     desc: "Files processed by MDO in SharePoint, OneDrive, and Teams — malicious content detections", preview: true },

  // ── Teams (MDO) ───────────────────────────────────────────────────────────────
  { id: "MessageEvents",                          domain: "teams",     desc: "Teams messages at time of delivery — Teams equivalent of EmailEvents" },
  { id: "MessagePostDeliveryEvents",              domain: "teams",     desc: "Post-delivery security actions on Teams messages (ZAP etc.)" },
  { id: "MessageUrlInfo",                         domain: "teams",     desc: "URLs extracted from Teams messages" },

  // ── Cloud (MDCA / Defender for Cloud) ─────────────────────────────────────────
  { id: "CloudAppEvents",                         domain: "cloud",     desc: "Activity in O365 and other cloud apps", linkableIds: true, linkableIdCols: [{ col: "AppAccessContext → AADSessionId (SID)" }, { col: "AppAccessContext → UniqueTokenId (UTI)" }, { col: "AccountObjectId", highlight: true }] },
  { id: "CloudAuditEvents",                       domain: "cloud",     desc: "Cloud platform audit events (Defender for Cloud)", preview: true },
  { id: "CloudProcessEvents",                     domain: "cloud",     desc: "Process events in cloud container workloads (AKS/EKS/GKE)", preview: true },
  { id: "CloudDnsEvents",                         domain: "cloud",     desc: "DNS activity in cloud infrastructure", preview: true },
  { id: "CloudPolicyEnforcementEvents",           domain: "cloud",     desc: "Policy enforcement and security gating decisions for Defender for Cloud workloads", preview: true },
  { id: "CloudStorageAggregatedEvents",           domain: "cloud",     desc: "Cloud storage activity and related events", preview: true },
  { id: "OAuthAppInfo",                           domain: "cloud",     desc: "OAuth apps registered in Entra ID via MDCA app governance", preview: true },
  { id: "AgentsInfo",                             domain: "cloud",     desc: "AI agents and their properties from various platforms", preview: true },
  { id: "AIAgentsInfo",                           domain: "cloud",     desc: "AI agents created with Microsoft Copilot Studio — configuration and ownership. Deprecated July 1 2026.", preview: true, deprecated: true, replacedBy: "AgentsInfo" },

  // ── Alerts ────────────────────────────────────────────────────────────────────
  { id: "AlertInfo",                              domain: "alerts",    desc: "Alerts from MDE, MDO, MDCA, MDI with severity" },
  { id: "AlertEvidence",                          domain: "alerts",    desc: "Files, IPs, URLs, users, devices linked to alerts" },
  { id: "DisruptionAndResponseEvents",            domain: "alerts",    desc: "Automatic attack disruption and predictive shielding events — containment blocks, policy enforcement, and safe boot guard actions", preview: true },

  // ── Vulnerability Management (TVM) ───────────────────────────────────────────
  { id: "DeviceTvmSoftwareInventory",             domain: "tvm",       desc: "Installed software and version info" },
  { id: "DeviceTvmSoftwareVulnerabilities",       domain: "tvm",       desc: "CVEs found on devices" },
  { id: "DeviceTvmSecureConfigurationAssessment", domain: "tvm",       desc: "Security config status on devices" },
  { id: "DeviceTvmHardwareFirmware",              domain: "tvm",       desc: "Hardware and firmware inventory for supply chain risk" },
  { id: "DeviceTvmBrowserExtensions",             domain: "tvm",       desc: "Browser extension inventory — malicious extension persistence", preview: true },
  { id: "DeviceTvmCertificateInfo",               domain: "tvm",       desc: "Certificate inventory from TVM", preview: true },
  { id: "DeviceTvmBrowserExtensionsKB",           domain: "tvm",       desc: "Browser extension details and permission info — KB companion to DeviceTvmBrowserExtensions", preview: true },
  { id: "DeviceBaselineComplianceAssessment",     domain: "tvm",       desc: "Baseline security config compliance snapshot per device", preview: true },
  { id: "DeviceBaselineComplianceAssessmentKB",   domain: "tvm",       desc: "KB of security configurations used for baseline compliance assessment", preview: true },
  { id: "DeviceBaselineComplianceProfiles",       domain: "tvm",       desc: "Baseline profiles used for device compliance monitoring", preview: true },

  // ── Purview (IRM / DLP) ───────────────────────────────────────────────────────
  { id: "DataSecurityEvents",                     domain: "purview",   desc: "User activities violating Purview DLP / IRM policies", preview: true },
  { id: "DataSecurityBehaviors",                  domain: "purview",   desc: "Suspicious behaviors violating Purview policies — behavioral analytics layer above DataSecurityEvents", preview: true },

  // ── Behaviors / UEBA ─────────────────────────────────────────────────────────
  { id: "BehaviorInfo",                           domain: "behaviors", desc: "UEBA anomaly behaviors — correlated across multiple signals", preview: true },
  { id: "BehaviorEntities",                       domain: "behaviors", desc: "Entities (devices, users, files) linked to UEBA behaviors", preview: true },

  // ── Security Exposure Management ──────────────────────────────────────────────
  { id: "ExposureGraphNodes",                     domain: "exposure",  desc: "Attack surface entity nodes — devices, identities, cloud assets" },
  { id: "ExposureGraphEdges",                     domain: "exposure",  desc: "Attack path relationships between exposure graph entities" },

  // ── Azure Sentinel / Log Analytics ────────────────────────────────────────
  { id: "SigninLogs",                             domain: "azure",     azure: true, desc: "Entra ID sign-ins via Azure Monitor. AuthenticationProtocol == 'deviceCode' is the primary filter for device code phishing hunts." },
  { id: "OfficeActivity",                         domain: "azure",     azure: true, desc: "Exchange, SharePoint, OneDrive, and Teams audit logs from Azure Monitor. Pre-migration equivalent of CloudAppEvents for Sentinel-based environments.", linkableIds: true, linkableIdCols: [{ col: "AppAccessContext → AADSessionId (SID)" }, { col: "AppAccessContext → UniqueTokenId (UTI)" }] },
];
