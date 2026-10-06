const form = document.querySelector("#searchForm");
const resetDemo = document.querySelector(".reset-btn");
const notificationButton = document.querySelector("#notificationButton");
const notificationPanel = document.querySelector("#notificationPanel");
const notificationCount = document.querySelector("#notificationCount");
const notificationSummary = document.querySelector("#notificationSummary");
const markNotificationsRead = document.querySelector("#markNotificationsRead");
const navViewLinks = document.querySelectorAll("[data-view-link]");
const viewPanels = document.querySelectorAll("[data-view]");
const helpSupportNavLink = document.querySelector('[data-view-link="help-support"]');
const helpSupportViewPanel = document.querySelector('[data-view="help-support"]');
const helpSupportVisibilityToggle = document.querySelector("#helpSupportVisibilityToggle");
const pageTitle = document.querySelector(".top-title h1");
const applicationSearch = document.querySelector("#applicationSearch");
const programmeFilter = document.querySelector("#programmeFilter");
const applicantTypeFilter = document.querySelector("#applicantTypeFilter");
const nationalityFilter = document.querySelector("#nationalityFilter");
const applicantsPerPage = document.querySelector("#applicantsPerPage");
const downloadApplicationsList = document.querySelector("#downloadApplicationsList");
const applicationExportModal = document.querySelector("#applicationExportModal");
const closeApplicationExport = document.querySelector("#closeApplicationExport");
const cancelApplicationExport = document.querySelector("#cancelApplicationExport");
const confirmApplicationExport = document.querySelector("#confirmApplicationExport");
const applicationExportNationality = document.querySelector("#applicationExportNationality");
const applicationExportStatusToggles = document.querySelectorAll("[data-export-status]");
const applicationExportColumns = document.querySelectorAll("[data-export-column]");
const programmePublicStatusFilter = document.querySelector("#programmePublicStatusFilter");
const programmeCategoryFilter = document.querySelector("#programmeCategoryFilter");
const programmesPerPage = document.querySelector("#programmesPerPage");
const programmesSummary = document.querySelector("#programmesSummary");
const dashboardProgrammeReportFilterToggle = document.querySelector("#dashboardProgrammeReportFilterToggle");
const dashboardProgrammeReportFilterMenu = document.querySelector("#dashboardProgrammeReportFilterMenu");
const dashboardProgrammeReportOptions = document.querySelector("#dashboardProgrammeReportOptions");
const dashboardApplicationsByProgramme = document.querySelector("#dashboardApplicationsByProgramme");
const dashboardTopCountries = document.querySelector("#dashboardTopCountries");
const dashboardTopCountriesTotal = document.querySelector("#dashboardTopCountriesTotal");
const dashboardProgrammePipelineTotal = document.querySelector("#dashboardProgrammePipelineTotal");
const dashboardProgrammePipelineStages = document.querySelector("#dashboardProgrammePipelineStages");
const dashboardProgrammePipelineStack = document.querySelector("#dashboardProgrammePipelineStack");
const reportSearch = document.querySelector("#reportSearch");
const reportProgrammeFilter = document.querySelector("#reportProgrammeFilter");
const reportStatusFilter = document.querySelector("#reportStatusFilter");
const reportNationalityFilter = document.querySelector("#reportNationalityFilter");
const reportDateFilter = document.querySelector("#reportDateFilter");
const reportPageSize = document.querySelector("#reportPageSize");
const downloadReportsList = document.querySelector("#downloadReportsList");
const reportResetFilters = document.querySelector("#reportResetFilters");
const reportTableBody = document.querySelector("#reportTableBody");
const reportTotalCount = document.querySelector("#reportTotalCount");
const reportPaginationSummary = document.querySelector("#reportPaginationSummary");
const reportPageIndicator = document.querySelector("#reportPageIndicator");
const prevReportPage = document.querySelector("#prevReportPage");
const nextReportPage = document.querySelector("#nextReportPage");
let dashboardProgrammeReportMode = "top";
let dashboardSelectedProgrammes = new Set();
const programmesTableBody = document.querySelector(".programmes-table tbody");
let programmeRows = document.querySelectorAll(".programmes-table tbody tr");
const programmeSortButtons = document.querySelectorAll(".programmes-table [data-sort-key]");
const programmePaginationSummary = document.querySelector("#programmePaginationSummary");
const programmePageIndicator = document.querySelector("#programmePageIndicator");
const prevProgrammePage = document.querySelector("#prevProgrammePage");
const nextProgrammePage = document.querySelector("#nextProgrammePage");
const createProgramme = document.querySelector("#createProgramme");
const programmeCreatePanel = document.querySelector("#programmeCreatePanel");
const programmeDetail = document.querySelector("#programmeDetail");
const cancelProgrammeCreate = document.querySelector("#cancelProgrammeCreate");
const backToProgrammes = document.querySelector("#backToProgrammes");
const backToProgrammesFromDetail = document.querySelector("#backToProgrammesFromDetail");
const programmeManagementActions = document.querySelector("#programmeManagementActions");
const programmeDetailLiveLink = document.querySelector("#programmeDetailLiveLink");
const programmeDetailTabButtons = document.querySelectorAll("[data-programme-tab]");
const programmeDetailPanels = document.querySelectorAll("[data-programme-panel]");
const programmeApplicationsRows = document.querySelector("#programmeApplicationsRows");
const editProgrammeDetails = document.querySelector("#editProgrammeDetails");
const cancelProgrammeDetailsEdit = document.querySelector("#cancelProgrammeDetailsEdit");
const saveProgrammeDetails = document.querySelector("#saveProgrammeDetails");
const programmeEditWarning = document.querySelector("#programmeEditWarning");
const confirmProgrammeChanges = document.querySelector("#confirmProgrammeChanges");
const programmeChangesModal = document.querySelector("#programmeChangesModal");
const closeProgrammeChanges = document.querySelector("#closeProgrammeChanges");
const cancelProgrammeChanges = document.querySelector("#cancelProgrammeChanges");
const proceedProgrammeChanges = document.querySelector("#proceedProgrammeChanges");
const programmeStatusNoticeAction = document.querySelector("#programmeStatusNoticeAction");
const requestedChangesModal = document.querySelector("#requestedChangesModal");
const closeRequestedChanges = document.querySelector("#closeRequestedChanges");
const cancelRequestedChanges = document.querySelector("#cancelRequestedChanges");
const submitRequestedChanges = document.querySelector("#submitRequestedChanges");
const requestedProgrammeLearning = document.querySelector("#requestedProgrammeLearning");
const requestedProgrammeTarget = document.querySelector("#requestedProgrammeTarget");
const requestedProgrammeFeeNote = document.querySelector("#requestedProgrammeFeeNote");
const requestedProgrammeLearningNote = document.querySelector("#requestedProgrammeLearningNote");
const requestedProgrammeTargetNote = document.querySelector("#requestedProgrammeTargetNote");
const requestedProgrammeDurationNote = document.querySelector("#requestedProgrammeDurationNote");
const requestedProgrammeParticipantsNote = document.querySelector("#requestedProgrammeParticipantsNote");
const requestedProgrammeDurationCompound = document.querySelector("#requestedProgrammeDurationCompound");
const requestedProgrammeDurationDisplay = document.querySelector("#requestedProgrammeDurationDisplay");
const requestedProgrammeFeeCompound = document.querySelector("#requestedProgrammeFeeCompound");
const requestedProgrammeFeeDisplay = document.querySelector("#requestedProgrammeFeeDisplay");
const requestedProgrammeParticipantsCompound = document.querySelector("#requestedProgrammeParticipantsCompound");
const requestedProgrammeParticipantsLimitDisplay = document.querySelector("#requestedProgrammeParticipantsLimitDisplay");
const requestedProgrammeParticipantsWaiverDisplay = document.querySelector("#requestedProgrammeParticipantsWaiverDisplay");
const requestedChangesTitle = document.querySelector("#requestedChangesTitle");
const kptNoticeModal = document.querySelector("#kptNoticeModal");
const kptNoticeTitle = document.querySelector("#kptNoticeTitle");
const kptNoticeBody = document.querySelector("#kptNoticeBody");
const closeKptNotice = document.querySelector("#closeKptNotice");
const doneKptNotice = document.querySelector("#doneKptNotice");
const programmesControlPanel = document.querySelector(".programmes-control-panel");
const programmesTableWrap = document.querySelector(".programmes-table-wrap");
const programmePaginationRow = document.querySelector(".programme-pagination-row");
const programmeActivities = document.querySelector("#programmeActivities");
const addProgrammeActivity = document.querySelector("#addProgrammeActivity");
const programmeConditionalQuestions = document.querySelector("#programmeConditionalQuestions");
const addProgrammeConditionalQuestion = document.querySelector("#addProgrammeConditionalQuestion");
const programmeLearningScopes = document.querySelector("#programmeLearningScopes");
const addProgrammeLearningScope = document.querySelector("#addProgrammeLearningScope");
const programmeCreateHeading = document.querySelector("#programmeCreateHeading");
const programmeCreateSubheading = document.querySelector("#programmeCreateSubheading");
const createProgrammeName = document.querySelector("#createProgrammeName");
const createProgrammeOverview = document.querySelector("#createProgrammeOverview");
const createProgrammeCategory = document.querySelector("#createProgrammeCategory");
const createProgrammeDurationType = document.querySelector("#createProgrammeDurationType");
const createProgrammeDuration = document.querySelector("#createProgrammeDuration");
const createProgrammeDurationUnit = document.querySelector("#createProgrammeDurationUnit");
const createProgrammeDurationRangeFields = document.querySelector("#createProgrammeDurationRangeFields");
const createProgrammeDurationMin = document.querySelector("#createProgrammeDurationMin");
const createProgrammeDurationMax = document.querySelector("#createProgrammeDurationMax");
const createProgrammeDurationRangeUnit = document.querySelector("#createProgrammeDurationRangeUnit");
const createProgrammeFeeType = document.querySelector("#createProgrammeFeeType");
const createProgrammeFee = document.querySelector("#createProgrammeFee");
const createProgrammeFeeRangeFields = document.querySelector("#createProgrammeFeeRangeFields");
const createProgrammeFeeMin = document.querySelector("#createProgrammeFeeMin");
const createProgrammeFeeMax = document.querySelector("#createProgrammeFeeMax");
const createProgrammeLanguage = document.querySelector("#createProgrammeLanguage");
const createProgrammeCredit = document.querySelector("#createProgrammeCredit");
const createProgrammeCreditOther = document.querySelector("#createProgrammeCreditOther");
const createProgrammeTarget = document.querySelector("#createProgrammeTarget");
const createProgrammeTargetOtherField = document.querySelector("#createProgrammeTargetOtherField");
const createProgrammeTargetOther = document.querySelector("#createProgrammeTargetOther");
const createProgrammeTravelTour = document.querySelector("#createProgrammeTravelTour");
const createProgrammeTravelAgencyField = document.querySelector("#createProgrammeTravelAgencyField");
const createProgrammeTravelAgency = document.querySelector("#createProgrammeTravelAgency");
const createProgrammeCertificateType = document.querySelector("#createProgrammeCertificateType");
const createProgrammeCertificateOtherField = document.querySelector("#createProgrammeCertificateOtherField");
const createProgrammeCertificateOther = document.querySelector("#createProgrammeCertificateOther");
const createProgrammePicName = document.querySelector("#createProgrammePicName");
const createProgrammePicPhone = document.querySelector("#createProgrammePicPhone");
const createProgrammePicEmail = document.querySelector("#createProgrammePicEmail");
const createProgrammePicDefault = document.querySelector("#createProgrammePicDefault");
const createProgrammeParticipantLimitType = document.querySelector("#createProgrammeParticipantLimitType");
const createProgrammeParticipantLimitFields = document.querySelector("#createProgrammeParticipantLimitFields");
const createProgrammeMinParticipants = document.querySelector("#createProgrammeMinParticipants");
const createProgrammeMaxParticipants = document.querySelector("#createProgrammeMaxParticipants");
const createProgrammeWaiverType = document.querySelector("#createProgrammeWaiverType");
const createProgrammeWaiverFields = document.querySelector("#createProgrammeWaiverFields");
const createProgrammeWaivedParticipants = document.querySelector("#createProgrammeWaivedParticipants");
const createProgrammeWaiverEveryParticipants = document.querySelector("#createProgrammeWaiverEveryParticipants");
const createProgrammeWaiverPreview = document.querySelector("#createProgrammeWaiverPreview");
const programmeInclusions = document.querySelector("#programmeInclusions");
const addProgrammeInclusion = document.querySelector("#addProgrammeInclusion");
const createProgrammeGallery = document.querySelector("#createProgrammeGallery");
const browseProgrammeGallery = document.querySelector("#browseProgrammeGallery");
const programmeGalleryCount = document.querySelector("#programmeGalleryCount");
const programmeGalleryPreview = document.querySelector("#programmeGalleryPreview");
const programmeDetailsGalleryGrid = document.querySelector("#programmeDetailsGalleryGrid");
const addProgrammeDetailsGalleryImage = document.querySelector("#addProgrammeDetailsGalleryImage");
const programmeDetailsGalleryInput = document.querySelector("#programmeDetailsGalleryInput");
const saveProgrammeDraft = document.querySelector("#saveProgrammeDraft");
const submitProgrammeKpt = document.querySelector("#submitProgrammeKpt");
const columnToggles = document.querySelectorAll("[data-column-toggle]");
const statusGroupToggles = document.querySelectorAll("[data-status-group]");
const allStatusFilters = document.querySelector("#allStatusFilters");
const clearStatusFilters = document.querySelector("#clearStatusFilters");
let applicationRows = document.querySelectorAll("[data-application-status]");
generateAdditionalDemoApplications();
generateAdditionalDemoProgrammes();
applicationRows = document.querySelectorAll(".applications-table tbody [data-application-status]");
programmeRows = document.querySelectorAll(".programmes-table tbody tr");
const applicationSortButtons = document.querySelectorAll(".applications-table [data-sort-key]");
const paginationSummary = document.querySelector("#paginationSummary");
const pageIndicator = document.querySelector("#pageIndicator");
const prevPage = document.querySelector("#prevPage");
const nextPage = document.querySelector("#nextPage");
const tooltipTriggers = document.querySelectorAll("[data-tooltip-trigger]");
const sectionTooltipTriggers = document.querySelectorAll(".section-tooltip");
const applicantDetail = document.querySelector("#applicantDetail");
const profileSaveButtons = document.querySelectorAll("[data-profile-save]");
const profileTabButtons = document.querySelectorAll("[data-profile-tab]");
const profileTabPanels = document.querySelectorAll("[data-profile-panel]");
const editUniversityProfile = document.querySelector("#editUniversityProfile");
const cancelUniversityProfile = document.querySelector("#cancelUniversityProfile");
const changeUniversityLogo = document.querySelector("#changeUniversityLogo");
const universityLogoUpload = document.querySelector("#universityLogoUpload");
const profileLogoImage = document.querySelector("#profileLogoImage");
const brandLogo = document.querySelector(".brand-logo");
const editProfileContact = document.querySelector("#editProfileContact");
const cancelProfileContact = document.querySelector("#cancelProfileContact");
const profileContactName = document.querySelector("#profileContactName");
const profileContactEmail = document.querySelector("#profileContactEmail");
const profileContactPhone = document.querySelector("#profileContactPhone");
const kptComplianceReplyModal = document.querySelector("#kptComplianceReplyModal");
const closeKptComplianceReply = document.querySelector("#closeKptComplianceReply");
const cancelKptComplianceReply = document.querySelector("#cancelKptComplianceReply");
const sendKptComplianceReply = document.querySelector("#sendKptComplianceReply");
const kptComplianceReplyMessage = document.querySelector("#kptComplianceReplyMessage");
const kptComplianceReplyFile = document.querySelector("#kptComplianceReplyFile");
const openKptRequestCount = document.querySelector("#openKptRequestCount");
const universityComplianceStatus = document.querySelector("#universityComplianceStatus");
const addUserButton = document.querySelector("#addUserButton");
const currentUserRole = document.querySelector("#currentUserRole");
const superAdminOnlyLinks = document.querySelectorAll("[data-superadmin-only]");
const addUserModal = document.querySelector("#addUserModal");
const closeAddUser = document.querySelector("#closeAddUser");
const cancelAddUser = document.querySelector("#cancelAddUser");
const submitAddUser = document.querySelector("#submitAddUser");
const userTableBody = document.querySelector("#userTableBody");
const auditTableBody = document.querySelector("#auditTableBody");
const kptRequestRows = document.querySelector("#kptRequestRows");
const auditSearch = document.querySelector("#auditSearch");
const auditUserFilter = document.querySelector("#auditUserFilter");
const auditActionFilter = document.querySelector("#auditActionFilter");
const auditEntityFilter = document.querySelector("#auditEntityFilter");
const auditDateFilter = document.querySelector("#auditDateFilter");
const auditApply = document.querySelector("#auditApply");
const helpTabButtons = document.querySelectorAll("[data-help-tab]");
const helpPanels = document.querySelectorAll("[data-help-panel]");
const supportIssueType = document.querySelector("#supportIssueType");
const supportPriority = document.querySelector("#supportPriority");
const supportSubject = document.querySelector("#supportSubject");
const supportMessage = document.querySelector("#supportMessage");
const submitSupportRequest = document.querySelector("#submitSupportRequest");
const settingsTabButtons = document.querySelectorAll("[data-settings-tab]");
const settingsPanels = document.querySelectorAll("[data-settings-panel]");
const settingsToggles = document.querySelectorAll(".settings-page input[type='checkbox']:not(#helpSupportVisibilityToggle)");
const settingsPasswordInputs = document.querySelectorAll(".settings-password-grid input");
const updatePasswordButton = document.querySelector("#updatePasswordButton");
const sessionList = document.querySelector(".session-list");
const newUserName = document.querySelector("#newUserName");
const newUserEmail = document.querySelector("#newUserEmail");
const newUserLogin = document.querySelector("#newUserLogin");
const newUserPassword = document.querySelector("#newUserPassword");
const newUserRole = document.querySelector("#newUserRole");
const newUserStatus = document.querySelector("#newUserStatus");
const backToApplications = document.querySelector("#backToApplications");
const applicationsPage = document.querySelector(".applications-page");
const applicationsFilterPanel = document.querySelector(".applications-filter-panel");
const applicationTableWrap = document.querySelector(".applications-table-wrap");
const applicationSidePanel = document.querySelector("#applicationSidePanel");
const applicationSideBackdrop = document.querySelector("#applicationSideBackdrop");
const programmeSidePanel = document.querySelector("#programmeSidePanel");
const programmeSideBackdrop = document.querySelector("#programmeSideBackdrop");
const paginationRow = document.querySelector(".pagination-row");
const tableOptionsPanel = document.querySelector(".table-options-panel");
const detailTabButtons = document.querySelectorAll("[data-detail-tab]");
const detailTabPanels = document.querySelectorAll("[data-detail-panel]");
let activeReviewStage = "";
let activeKptComplianceRow = null;
const documentRequestModal = document.querySelector("#documentRequestModal");
const documentRequestTitle = document.querySelector("#documentRequestTitle");
const documentRequestLabel = document.querySelector("#documentRequestLabel");
const documentRequestMessage = document.querySelector("#documentRequestMessage");
const sendDocumentRequest = document.querySelector("#sendDocumentRequest");
const closeDocumentRequest = document.querySelector("#closeDocumentRequest");
const cancelDocumentRequest = document.querySelector("#cancelDocumentRequest");
const statusConfirmModal = document.querySelector("#statusConfirmModal");
const statusConfirmTitle = document.querySelector("#statusConfirmTitle");
const statusConfirmMessage = document.querySelector("#statusConfirmMessage");
const applyStatusConfirm = document.querySelector("#applyStatusConfirm");
const closeStatusConfirm = document.querySelector("#closeStatusConfirm");
const cancelStatusConfirm = document.querySelector("#cancelStatusConfirm");
const offerLetterModal = document.querySelector("#offerLetterModal");
const offerLetterFile = document.querySelector("#offerLetterFile");
const offerLetterMessage = document.querySelector("#offerLetterMessage");
const sendOfferLetter = document.querySelector("#sendOfferLetter");
const closeOfferLetter = document.querySelector("#closeOfferLetter");
const cancelOfferLetter = document.querySelector("#cancelOfferLetter");
const previewModal = document.querySelector("#previewModal");
const previewTitle = document.querySelector("#previewTitle");
const previewBody = document.querySelector("#previewBody");
const closePreview = document.querySelector("#closePreview");
const donePreview = document.querySelector("#donePreview");
let applicationSort = { key: "", direction: "asc" };
let programmeSort = { key: "", direction: "asc" };
let currentApplicationPage = 1;
let currentProgrammePage = 1;
let currentReportPage = 1;
let currentReportRows = [];
let activeApplicantRow = null;
let applicationSidePanelCloseTimer = null;
let currentApplicationOrder = [];
let editingDraftRow = null;
let activeProgrammeRow = null;
let programmeSidePanelCloseTimer = null;
const programmeGalleryImages = new Map();
let pendingProgrammeGalleryImages = [];
let pendingProgrammeDetailsGalleryImages = [];
let programmeDetailsGalleryReplaceIndex = null;
const DEFAULT_PROGRAMME_GALLERY_LABELS = ["Programme cover image", "Activity image", "Campus image"];
const initialProgrammeTableHtml = programmesTableBody?.innerHTML || "";
const initialUserTableHtml = userTableBody?.innerHTML || "";
const initialAuditTableHtml = auditTableBody?.innerHTML || "";
const initialKptRequestRowsHtml = kptRequestRows?.innerHTML || "";
const initialSettingsToggles = [...settingsToggles].map((toggle) => toggle.checked);
const initialSessionListHtml = sessionList?.innerHTML || "";
const initialProgrammeCreateFields = {
  activities: programmeActivities?.innerHTML || "",
  conditionalQuestions: programmeConditionalQuestions?.innerHTML || "",
  learningScopes: programmeLearningScopes?.innerHTML || "",
  inclusions: programmeInclusions?.innerHTML || ""
};
let pendingProgrammeStatusChange = null;
let pendingProgrammeDelete = null;
let pendingProgrammeAction = null;
let pendingProgrammeActionAudit = null;

function generateAdditionalDemoApplications() {
  const tbody = document.querySelector(".applications-table tbody");
  if (!tbody || tbody.querySelector("[data-demo-applicant]") || !tbody.children.length) return;

  const names = [
    "Amara Okafor", "Lucas Meyer", "Nhi Nguyen", "Camila Santos", "Hugo Laurent",
    "Zanele Dlamini", "Rafael Torres", "Priyanka Sen", "Omar Haddad", "Elena Rossi",
    "Mateo Garcia", "Sofia Petrova", "Noah Williams", "Fatima Zahra", "Ethan Wilson",
    "Mina Park", "Diego Alvarez", "Amina Yusuf", "Chloe Martin", "Tariq Rahman",
    "Isabella Costa", "Jun Ho Kim", "Grace Mensah", "Nour El-Sayed", "Liam O'Brien",
    "Ananya Iyer", "Marco Bianchi", "Leila Benali", "Samuel Adeyemi", "Hana Suzuki",
    "Victoria Chen", "Andrei Popescu", "Mariam Bello", "Thomas Nguyen", "Aya Hassan",
    "Benjamin Clark", "Lina Haddad", "Kofi Boateng", "Clara Dubois", "Adrian Silva",
    "Sakura Watanabe", "Yasmin Ali", "Felix Schneider", "Maya Patel", "Daniel Kim",
    "Ana Maria Cruz", "Oliver Jensen", "Siti Nurhaliza", "Youssef Karim", "Emily Brown"
  ];
  const countries = [
    "Brazil", "Germany", "Vietnam", "France", "Philippines", "South Africa", "Mexico", "Bangladesh", "Turkey", "Italy",
    "Canada", "Nepal", "United Arab Emirates", "Ghana", "Portugal", "South Korea", "Egypt", "New Zealand", "Nigeria", "Spain"
  ];
  const programmes = [
    "Digital Entrepreneurship Bootcamp", "Malaysian Heritage Experience", "Applied AI for Tourism", "Marine Conservation Lab",
    "Fintech Innovation Studio", "Smart Mobility Lab", "AI Heritage Storytelling Lab", "Rainforest Research Field School", "Borneo Culture Immersion", "Malay Language & Culture"
  ];
  const statuses = ["submitted", "approved", "documents required", "documents submitted", "approved", "rejected", "withdrawn", "submitted", "documents required", "documents submitted"];
  const applicantTypes = ["International - Visitor/Tourist", "International - Existing Student Pass", "International - Student Pass Required"];
  const statusLabels = {
    submitted: ["New Application", "blue"],
    approved: ["Approved", "green"],
    "documents required": ["Documents Required", "amber"],
    "documents submitted": ["Req Documents Submitted", "blue"],
    rejected: ["Rejected", "red"],
    withdrawn: ["Withdrawn", "neutral"]
  };

  names.forEach((name, index) => {
    const status = statuses[index % statuses.length];
    const country = countries[index % countries.length];
    const programme = programmes[index % programmes.length];
    const code = `EDT-2026-${String(1901 + index).padStart(6, "0")}`;
    const appliedDate = `${String((index % 28) + 1).padStart(2, "0")} Aug 2026`;
    const updatedDate = `${String(13 - (index % 5)).padStart(2, "0")} Aug 2026`;
    const applicantType = applicantTypes[index % applicantTypes.length];
    const [statusLabel, chipClass] = statusLabels[status];
    const row = document.createElement("tr");
    row.dataset.demoApplicant = "true";
    row.dataset.applicationStatus = status;
    row.dataset.programme = programme.toLowerCase();
    row.dataset.applicantType = applicantType.toLowerCase();
    row.dataset.nationality = country.toLowerCase();
    row.innerHTML = `<td><a class="applicant-link" href="#"><span class="applicant-name">${escapeAttribute(name)}</span><small>${code}</small></a></td><td>${escapeAttribute(country)}</td><td><span class="programme-name">${escapeAttribute(programme)}</span></td><td>${appliedDate}</td><td><span class="status-chip ${chipClass}">${statusLabel}</span></td><td><button class="submission-view-btn" type="button" aria-label="View application">View</button></td><td>${updatedDate}</td>`;
    tbody.appendChild(row);
  });
}

function generateAdditionalDemoProgrammes() {
  const tbody = document.querySelector(".programmes-table tbody");
  if (!tbody || tbody.querySelector("[data-demo-programme]") || !tbody.children.length) return;

  const programmes = [
    { name: "Coastal Resilience & Blue Economy", category: "Environmental and Health Science (EAH)", status: "published", duration: "18 Days", fee: "RM 3,900", overview: "A field-based programme exploring coastal resilience, marine livelihoods, and blue economy solutions through community projects.", language: "English: Intermediate", target: "General Public (including student)", credit: "Eligible", participants: "15 - 30 participants; No participant waiver", inclusions: "Field equipment, Local transport, Meals", activities: "Coastal mapping, Mangrove restoration, Blue economy workshop, Community presentation", outcome: "Participants can describe coastal risks and propose a practical blue economy initiative.", travelTour: "Coastal Discovery Malaysia", certificate: "Certificate of Completion", picName: "Dr. Nur Hidayah Karim", picPhone: "+60 12-456 7821", picEmail: "nurhidayah@university.demo" },
    { name: "Sustainable Food Innovation Lab", category: "Culinary and Hospitality (CAH)", status: "published", duration: "14 Days", fee: "RM 3,200", overview: "A practical lab covering sustainable food systems, product development, and responsible hospitality operations.", language: "English: Advanced", target: "Student only", credit: "Eligible", participants: "10 - 25 participants; 1 participant waived for every 15 participants", inclusions: "Kitchen access, Ingredients, Course materials", activities: "Food systems seminar, Product design sprint, Kitchen practicum, Tasting showcase", outcome: "Participants can design a sustainable food product and explain its market and environmental impact.", travelTour: "N/A", certificate: "Certificate of Achievement", picName: "Chef Daniel Wong", picPhone: "+60 13-778 4201", picEmail: "daniel.wong@university.demo" },
    { name: "Digital Media & Creative Industries", category: "Arts & Social Science (ANS)", status: "published", duration: "21 Days", fee: "RM 3,800", overview: "Participants develop digital media concepts for creative industries through storytelling, production, and audience strategy.", language: "English: Intermediate", target: "General Public (including student)", credit: "Not eligible", participants: "12 - 24 participants; No participant waiver", inclusions: "Studio access, Software licences, Production materials", activities: "Story development, Content production, Audience research, Showcase screening", outcome: "Participants can create and pitch a digital media project for a defined audience.", travelTour: "Creative City Tours", certificate: "Certificate of Completion", picName: "Ms. Alicia Tan", picPhone: "+60 17-432 1198", picEmail: "alicia.tan@university.demo" },
    { name: "Global Public Health Fieldwork", category: "Environmental and Health Science (EAH)", status: "published", duration: "20 Days", fee: "RM 4,600", overview: "An applied public health field school focused on community health assessment, prevention, and health communication.", language: "English: Advanced", target: "Student only", credit: "Eligible", participants: "8 - 20 participants; No participant waiver", inclusions: "Field kits, Accommodation, Meals", activities: "Community health survey, Prevention workshop, Data analysis, Health campaign design", outcome: "Participants can conduct a basic health assessment and design an evidence-informed campaign.", travelTour: "Community Health Partners", certificate: "Certificate of Participation", picName: "Dr. Farah Ismail", picPhone: "+60 19-228 7740", picEmail: "farah.ismail@university.demo" },
    { name: "Renewable Energy Systems Workshop", category: "Science and Technology (SAT)", status: "published", duration: "16 Days", fee: "RM 4,100", overview: "A hands-on workshop introducing renewable energy systems, energy efficiency, and small-scale project planning.", language: "English: Intermediate", target: "Group", credit: "Eligible", participants: "10 - 25 participants; 1 participant waived for every 20 participants", inclusions: "Lab access, Measurement equipment, Materials", activities: "Solar systems lab, Energy audit, Microgrid simulation, Project pitch", outcome: "Participants can compare renewable energy options and prepare a basic implementation plan.", travelTour: "Eco Engineering Tours", certificate: "Certificate of Completion", picName: "Ir. Jason Lim", picPhone: "+60 12-903 6612", picEmail: "jason.lim@university.demo" },
    { name: "Intercultural Leadership Exchange", category: "Leadership and Management (LAM)", status: "published", duration: "12 Days", fee: "RM 2,900", overview: "A collaborative leadership exchange using Malaysian community and industry settings to develop intercultural teamwork skills.", language: "English: Intermediate", target: "General Public (including student)", credit: "Not eligible", participants: "15 - 35 participants; No participant waiver", inclusions: "Workshop materials, Local transport, Cultural activities", activities: "Leadership labs, Community dialogue, Team challenge, Reflection showcase", outcome: "Participants can lead a diverse team through a structured project and reflection process.", travelTour: "Cultural Exchange Network", certificate: "Certificate of Attendance", picName: "Pn. Aina Rahman", picPhone: "+60 16-220 4718", picEmail: "aina.rahman@university.demo" },
    { name: "Community Heritage Documentation", category: "Food, Culture & Heritage (FCH)", status: "unpublish", duration: "10 Days", fee: "RM 2,300", overview: "Participants document local heritage stories through interviews, photography, archival research, and community collaboration.", language: "English: Intermediate", target: "Student only", credit: "Eligible", participants: "8 - 18 participants; No participant waiver", inclusions: "Recording equipment, Local transport, Archive access", activities: "Oral history interview, Archive visit, Photo documentation, Community exhibit", outcome: "Participants can create a respectful community heritage documentation project.", travelTour: "Heritage Trails Malaysia", certificate: "Certificate of Participation", picName: "Mr. Hafiz Salleh", picPhone: "+60 11-339 5520", picEmail: "hafiz.salleh@university.demo" },
    { name: "Applied Robotics for Industry", category: "Science and Technology (SAT)", status: "unpublish", duration: "18 Days", fee: "RM 4,900", overview: "An applied robotics programme covering automation concepts, robot programming, and industry process improvement.", language: "English: Advanced", target: "Group", credit: "Eligible", participants: "10 - 20 participants; No participant waiver", inclusions: "Robotics lab, Components, Safety equipment", activities: "Robot programming, Automation simulation, Process mapping, Industry demo", outcome: "Participants can design a basic automation workflow for an industry use case.", travelTour: "Industry Innovation Hub", certificate: "Certificate of Achievement", picName: "Dr. Kelvin Ong", picPhone: "+60 18-661 0388", picEmail: "kelvin.ong@university.demo" },
    { name: "Tourism Data Analytics Studio", category: "Business and Entrepreneurship (BAE)", status: "unpublish", duration: "15 Days", fee: "RM 3,600", overview: "A data studio where participants analyse tourism behaviour, destination demand, and visitor experience opportunities.", language: "English: Intermediate", target: "General Public (including student)", credit: "Not eligible", participants: "12 - 25 participants; 1 participant waived for every 20 participants", inclusions: "Software access, Dataset collection, Workshop materials", activities: "Tourism data lab, Dashboard design, Visitor segmentation, Insight presentation", outcome: "Participants can turn tourism data into a clear destination or visitor experience recommendation.", travelTour: "Destination Analytics Partners", certificate: "Certificate of Completion", picName: "Ms. Nurul Huda", picPhone: "+60 14-770 2251", picEmail: "nurul.huda@university.demo" },
    { name: "Advanced Malay Communication", category: "Language and Communication (LAC)", status: "draft", duration: "14 Days", fee: "RM 2,000", overview: "An advanced Malay communication programme focused on professional interaction, presentations, and workplace language.", language: "Malay: Advanced", target: "Student only", credit: "Pending review", participants: "10 - 25 participants; No participant waiver", inclusions: "Course materials, Language lab", activities: "Presentation practice, Workplace role-play, Media analysis, Assessment interview", outcome: "Participants can communicate confidently in common professional situations in Malay.", travelTour: "N/A", certificate: "Certificate of Attendance", picName: "Pn. Nur Farhana", picPhone: "+60 12-881 3400", picEmail: "nur.farhana@university.demo" },
    { name: "Climate Policy & Governance", category: "Leadership and Management (LAM)", status: "draft", duration: "17 Days", fee: "RM 3,700", overview: "A policy-focused programme examining climate governance, public decision-making, and practical transition planning.", language: "English: Advanced", target: "General Public (including student)", credit: "Pending review", participants: "12 - 24 participants; No participant waiver", inclusions: "Policy casebooks, Workshop materials, Site visits", activities: "Policy lab, Stakeholder mapping, Climate negotiation, Action plan", outcome: "Participants can evaluate a climate policy challenge and propose a governance response.", travelTour: "Sustainability Policy Network", certificate: "Certificate of Completion", picName: "Dr. Arif Hamdan", picPhone: "+60 13-990 4417", picEmail: "arif.hamdan@university.demo" },
    { name: "Biomedical Research Methods", category: "Environmental and Health Science (EAH)", status: "pending kpt approval", duration: "22 Days", fee: "RM 5,200", overview: "An introductory biomedical research methods programme covering study design, laboratory practice, and research ethics.", language: "English: Advanced", target: "Student only", credit: "Eligible", participants: "8 - 16 participants; No participant waiver", inclusions: "Laboratory access, Safety equipment, Research materials", activities: "Study design lab, Research ethics seminar, Data methods, Poster presentation", outcome: "Participants can outline a compliant biomedical research project and communicate its methods.", travelTour: "N/A", certificate: "Certificate of Achievement", picName: "Dr. Mei Ling Tan", picPhone: "+60 17-540 8821", picEmail: "meiling.tan@university.demo" },
    { name: "Social Enterprise Incubator", category: "Business and Entrepreneurship (BAE)", status: "pending kpt approval", duration: "20 Days", fee: "RM 3,900", overview: "An incubator helping participants turn community challenges into sustainable social enterprise concepts.", language: "English: Intermediate", target: "Group", credit: "Eligible", participants: "15 - 30 participants; 1 participant waived for every 15 participants", inclusions: "Mentoring sessions, Co-working space, Pitch materials", activities: "Problem discovery, Business model lab, Impact measurement, Demo day", outcome: "Participants can develop a viable social enterprise concept with a measurable impact plan.", travelTour: "Social Innovation Partners", certificate: "Certificate of Completion", picName: "Mr. Adam Yusuf", picPhone: "+60 16-704 1186", picEmail: "adam.yusuf@university.demo" },
    { name: "Hospitality Operations Lab", category: "Culinary and Hospitality (CAH)", status: "changes requested", duration: "13 Days", fee: "RM 2,800", overview: "A practical hospitality lab covering guest experience, service operations, and responsible accommodation management.", language: "English: Intermediate", target: "Student only", credit: "Pending review", participants: "10 - 20 participants; No participant waiver", inclusions: "Training kitchen, Hotel simulation, Course materials", activities: "Front office simulation, Service design, Operations audit, Guest experience project", outcome: "Participants can map a hospitality operation and recommend service improvements.", travelTour: "Hospitality Learning Partners", certificate: "Certificate of Attendance", picName: "Ms. Farah Lee", picPhone: "+60 12-667 9044", picEmail: "farah.lee@university.demo" },
    { name: "Urban Design Futures", category: "Arts and Social Science (ANS)", status: "rejected", duration: "19 Days", fee: "RM 3,400", overview: "A design studio exploring future cities, inclusive public spaces, and community-led urban planning.", language: "English: Advanced", target: "General Public (including student)", credit: "Pending review", participants: "10 - 20 participants; No participant waiver", inclusions: "Studio access, Mapping materials, Site visit", activities: "Urban observation, Design sprint, Community consultation, Final concept review", outcome: "Participants can propose an inclusive urban design concept for a real community setting.", travelTour: "Urban Futures Lab", certificate: "Certificate of Participation", picName: "Ar. Nadia Karim", picPhone: "+60 19-443 7200", picEmail: "nadia.karim@university.demo" }
  ];
  const statusLabels = {
    published: ["Published", "green"],
    unpublish: ["Unpublish", "neutral"],
    draft: ["Draft", "neutral"],
    "pending kpt approval": ["Pending KPT Approval", "amber"],
    "changes requested": ["Changes Requested", "purple"],
    rejected: ["Rejected", "red"]
  };
  const activeAdditionalProgrammes = programmes.filter((programme) => ["published", "unpublish"].includes(programme.status));

  programmes.forEach((programme) => {
    const row = document.createElement("tr");
    const [statusLabel, chipClass] = statusLabels[programme.status];
    row.dataset.demoProgramme = "true";
    row.dataset.programmeCategory = programme.category.toLowerCase();
    row.dataset.publicStatus = programme.status;
    row.dataset.overview = programme.overview;
    row.dataset.language = programme.language;
    row.dataset.target = programme.target;
    row.dataset.credit = programme.credit;
    row.dataset.participants = programme.participants;
    row.dataset.inclusions = programme.inclusions;
    row.dataset.activities = programme.activities;
    row.dataset.outcome = programme.outcome;
    row.dataset.travelTour = programme.travelTour;
    row.dataset.certificate = programme.certificate;
    row.dataset.picName = programme.picName;
    row.dataset.picPhone = programme.picPhone;
    row.dataset.picEmail = programme.picEmail;
    row.dataset.picFax = "Not specified";
    row.innerHTML = `<td><span class="programme-name">${escapeAttribute(programme.name)}</span></td><td>${escapeAttribute(programme.category)}</td><td>${programme.duration}</td><td>${programme.fee}</td><td>${shouldShowProgrammeApplicants(programme.status) ? "0" : "-"}</td><td><span class="status-chip ${chipClass}">${statusLabel}</span></td><td><button class="submission-view-btn" type="button" aria-label="View programme">View</button></td>`;
    tbody.appendChild(row);
  });

  const generatedApplicants = [...document.querySelectorAll(".applications-table tbody [data-demo-applicant]")];
  activeAdditionalProgrammes.forEach((programme, programmeIndex) => {
    generatedApplicants.slice(programmeIndex * 3, programmeIndex * 3 + 3).forEach((row) => {
      row.dataset.programme = programme.name.toLowerCase();
      const programmeName = row.querySelector(".programme-name");
      if (programmeName) programmeName.textContent = programme.name;
    });
  });

  const activeProgrammeNames = [...tbody.querySelectorAll("tr")]
    .filter((row) => shouldShowProgrammeApplicants(row.dataset.publicStatus || ""))
    .map((row) => row.querySelector(".programme-name")?.textContent.trim().toLowerCase())
    .filter(Boolean);
  const applicationRowsForProgrammeSync = [...document.querySelectorAll(".applications-table tbody [data-application-status]")];
  let reassignmentIndex = 0;
  applicationRowsForProgrammeSync.forEach((row) => {
    if (activeProgrammeNames.includes(row.dataset.programme)) return;
    const replacement = activeProgrammeNames[reassignmentIndex % activeProgrammeNames.length];
    reassignmentIndex += 1;
    row.dataset.programme = replacement;
    const programmeName = row.querySelector(".programme-name");
    const programmeRow = [...tbody.querySelectorAll("tr")].find((item) => item.querySelector(".programme-name")?.textContent.trim().toLowerCase() === replacement);
    if (programmeName && programmeRow) programmeName.textContent = programmeRow.querySelector(".programme-name").textContent.trim();
  });
}

let pendingDocumentAction = "";
let pendingStatusChange = null;
let pendingReminderAction = null;
let editingUserRow = null;

[
  documentRequestModal,
  offerLetterModal,
  previewModal
].forEach((modal) => {
  if (modal && modal.parentElement !== document.body) {
    document.body.appendChild(modal);
  }
});

[applicationSideBackdrop, applicationSidePanel, programmeSideBackdrop, programmeSidePanel].forEach((element) => {
  if (element && element.parentElement !== document.body) {
    document.body.appendChild(element);
  }
});

function getSearchableItems() {
  return [...document.querySelectorAll(".view-panel.active [data-keywords]")];
}

function setActiveView(viewName) {
  closeProgrammeSidePanel();
  navViewLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.viewLink === viewName);
  });
  viewPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.view === viewName);
  });
  if (pageTitle) {
    pageTitle.textContent = viewName === "applications" ? "Applications" : viewName === "programmes" ? "Programmes" : viewName === "reports" ? "Reports" : viewName === "university-profile" ? "University Profile" : viewName === "user-management" ? "User Management" : viewName === "audit-log" ? "Audit Log" : viewName === "help-support" ? "Help & Support" : viewName === "settings" ? "Settings" : "Dashboard";
  }
}

function applyHelpSupportVisibility() {
  const isVisible = helpSupportVisibilityToggle?.checked ?? true;
  if (helpSupportNavLink) helpSupportNavLink.hidden = !isVisible;
  if (helpSupportViewPanel) helpSupportViewPanel.hidden = !isVisible;

  if (!isVisible && helpSupportViewPanel?.classList.contains("active")) {
    setActiveView("dashboard");
    history.replaceState(null, "", "#dashboard");
    scrollWorkspaceToTop();
  }
}

function scrollWorkspaceToTop() {
  document.querySelector(".workspace")?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function updateNotificationCount() {
  const unreadCount = document.querySelectorAll(".notification-item.unread").length;
  if (notificationCount) {
    notificationCount.textContent = String(unreadCount);
    notificationCount.hidden = unreadCount === 0;
  }
  if (notificationSummary) {
    notificationSummary.textContent = unreadCount ? `${unreadCount} unread updates` : "All caught up";
  }
}

function closeNotificationsPanel() {
  if (notificationPanel) notificationPanel.hidden = true;
  if (notificationButton) notificationButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("notification-open");
}

function toggleNotificationsPanel() {
  if (!notificationPanel || !notificationButton) return;
  const shouldOpen = notificationPanel.hidden;
  notificationPanel.hidden = !shouldOpen;
  notificationButton.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("notification-open", shouldOpen);
}

function markNotificationsAsRead() {
  document.querySelectorAll(".notification-item.unread").forEach((item) => {
    item.classList.remove("unread");
  });
  updateNotificationCount();
}

function resetNotificationsDemoState() {
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.classList.toggle("unread", item.dataset.defaultUnread === "true");
  });
  closeNotificationsPanel();
  updateNotificationCount();
}

function openNotificationTarget(target) {
  if (!target) return;
  setActiveView(target);
  if (target === "applications") {
    showApplicationsList();
  }
  if (target === "programmes") {
    showProgrammesList();
  }
  history.replaceState(null, "", `#${target}`);
  scrollWorkspaceToTop();
}

function showApplicationsList() {
  if (applicantDetail) applicantDetail.hidden = true;
  closeApplicationSidePanel();
  if (applicationTableWrap) applicationTableWrap.hidden = false;
  if (paginationRow) paginationRow.hidden = false;
  if (tableOptionsPanel) tableOptionsPanel.hidden = false;
  if (applicationsFilterPanel) applicationsFilterPanel.hidden = false;
  applicationsPage?.classList.remove("detail-mode");
}

function openProgrammeApplications(row) {
  if (!row) return;
  const programmeName = row.querySelector(".programme-name")?.textContent.trim() || "";
  if (!programmeName || !programmeFilter) return;
  let option = [...programmeFilter.options].find((item) => item.value.toLowerCase() === programmeName.toLowerCase());
  if (!option) {
    option = document.createElement("option");
    option.textContent = programmeName;
    programmeFilter.appendChild(option);
  }
  programmeFilter.value = option.value;
  if (applicationSearch) applicationSearch.value = "";
  if (applicantTypeFilter) applicantTypeFilter.value = "All applicant types";
  if (nationalityFilter) nationalityFilter.value = "Any nationality";
  statusGroupToggles.forEach((toggle) => { toggle.checked = true; });
  syncAllStatusFilter();
  setActiveView("applications");
  showApplicationsList();
  resetApplicationPage();
  history.replaceState(null, "", "#applications");
  scrollWorkspaceToTop();
}

function applyCurrentUserRole() {
  const isSuperAdmin = (currentUserRole?.value || "superadmin") === "superadmin";
  if (addUserButton) {
    addUserButton.hidden = !isSuperAdmin;
    addUserButton.dataset.currentRole = isSuperAdmin ? "superadmin" : "restricted";
  }
  document.querySelectorAll("[data-user-action]").forEach((button) => {
    button.disabled = !isSuperAdmin;
    button.title = isSuperAdmin ? "" : "Only Super Admin users can edit roles or change account access.";
  });
  superAdminOnlyLinks.forEach((link) => {
    link.hidden = !isSuperAdmin;
  });
  if (!isSuperAdmin && document.querySelector('[data-view="reports"]')?.classList.contains("active")) {
    setActiveView("dashboard");
    history.replaceState(null, "", "#dashboard");
    scrollWorkspaceToTop();
  }
}

function resetUserManagementDemoState() {
  if (userTableBody) userTableBody.innerHTML = initialUserTableHtml;
  if (currentUserRole) currentUserRole.value = "superadmin";
  closeAddUserModal();
  applyCurrentUserRole();
}

function updateAuditRows() {
  if (!auditTableBody) return;
  const query = (auditSearch?.value || "").trim().toLowerCase();
  const user = auditUserFilter?.value || "All users";
  const action = auditActionFilter?.value || "All actions";
  const entity = auditEntityFilter?.value || "All entities";
  const date = auditDateFilter?.value || "Any date";
  [...auditTableBody.rows].forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const rowDate = row.children[0]?.textContent || "";
    const rowUser = row.children[1]?.textContent || "";
    const rowAction = row.children[2]?.textContent || "";
    const rowEntity = row.children[3]?.textContent || "";
    const matchesQuery = !query || rowText.includes(query);
    const matchesUser = user === "All users" || rowUser === user;
    const matchesAction = action === "All actions" || rowAction.toLowerCase().includes(action.toLowerCase());
    const matchesEntity = entity === "All entities" || rowEntity === entity;
    const matchesDate = date === "Any date" || rowDate.includes(date);
    row.hidden = !(matchesQuery && matchesUser && matchesAction && matchesEntity && matchesDate);
  });
}

function resetAuditDemoState() {
  if (auditTableBody) auditTableBody.innerHTML = initialAuditTableHtml;
  if (auditSearch) auditSearch.value = "";
  if (auditUserFilter) auditUserFilter.value = "All users";
  if (auditActionFilter) auditActionFilter.value = "All actions";
  if (auditEntityFilter) auditEntityFilter.value = "All entities";
  if (auditDateFilter) auditDateFilter.value = "Any date";
  updateAuditRows();
}

function resetKptComplianceState() {
  if (kptRequestRows) kptRequestRows.innerHTML = initialKptRequestRowsHtml;
  attachKptRequestActions();
  activeKptComplianceRow = null;
  closeKptComplianceReplyModal();
  updateKptRequestSummary();
}

function setActiveSettingsTab(tabName = "notifications") {
  settingsTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.settingsTab === tabName);
  });
  settingsPanels.forEach((panel) => {
    panel.hidden = panel.dataset.settingsPanel !== tabName;
  });
}

function setActiveHelpTab(tabName = "overview") {
  helpTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.helpTab === tabName);
  });
  helpPanels.forEach((panel) => {
    panel.hidden = panel.dataset.helpPanel !== tabName;
  });
}

function resetHelpDemoState() {
  setActiveHelpTab("overview");
  if (supportIssueType) supportIssueType.value = "Application workflow";
  if (supportPriority) supportPriority.value = "Normal";
  if (supportSubject) supportSubject.value = "";
  if (supportMessage) supportMessage.value = "";
}

function resetSettingsDemoState() {
  if (sessionList) sessionList.innerHTML = initialSessionListHtml;
  settingsToggles.forEach((toggle, index) => {
    toggle.checked = initialSettingsToggles[index];
  });
  settingsPasswordInputs.forEach((input) => {
    input.value = "";
  });
  setActiveSettingsTab("notifications");
}

function getCurrentAuditTimestamp() {
  const now = new Date();
  const date = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return `${date}, ${time}`;
}

function addAuditRecord({ user = "Nur Aisyah Rahman", action, entity }) {
  if (!auditTableBody) return;
  const row = document.createElement("tr");
  row.innerHTML = `<td>${getCurrentAuditTimestamp()}</td><td>${user}</td><td>${action}</td><td>${entity}</td>`;
  auditTableBody.prepend(row);
  updateAuditRows();
}

function updateKptRequestSummary() {
  const openRows = [...document.querySelectorAll("#kptRequestRows tr")].filter((row) => /pending reply/i.test(row.children[3]?.textContent || ""));
  if (openKptRequestCount) openKptRequestCount.textContent = String(openRows.length);
  if (universityComplianceStatus) {
    universityComplianceStatus.textContent = openRows.length ? "Action Required" : "Clear";
    universityComplianceStatus.className = openRows.length ? "status-chip amber" : "status-chip green";
  }
}

function openKptComplianceReply(row) {
  activeKptComplianceRow = row;
  if (kptComplianceReplyMessage) kptComplianceReplyMessage.value = "";
  if (kptComplianceReplyFile) kptComplianceReplyFile.value = "";
  if (kptComplianceReplyModal) kptComplianceReplyModal.hidden = false;
}

function closeKptComplianceReplyModal() {
  activeKptComplianceRow = null;
  if (kptComplianceReplyModal) kptComplianceReplyModal.hidden = true;
}

function sendKptComplianceReplyToKpt() {
  if (!activeKptComplianceRow) return;
  const requestName = activeKptComplianceRow.querySelector("strong")?.textContent.trim() || "KPT request";
  const message = kptComplianceReplyMessage?.value.trim() || "Updated document and clarification submitted for KPT review.";
  activeKptComplianceRow.children[3].innerHTML = '<span class="status-chip blue">Submitted to KPT</span>';
  activeKptComplianceRow.children[4].innerHTML = '<button class="submission-view-btn" type="button" data-kpt-request-action="view">View Reply</button>';
  activeKptComplianceRow.children[0].querySelector("small").textContent = "Submitted to KPT just now";
  addAuditRecord({ action: `Replied to KPT compliance request: ${requestName}`, entity: "University Profile" });
  addActivity(null, "KPT compliance reply sent", message);
  updateKptRequestSummary();
  closeKptComplianceReplyModal();
}

function getProgrammeAuditName() {
  return document.querySelector("#programmeDetailName")?.textContent.trim() || activeProgrammeRow?.children[0]?.textContent.trim() || "programme";
}

function getApplicationAuditName(row = activeApplicantRow) {
  const code = getRowCode(row);
  const name = getRowName(row);
  return code ? `${name} (${code})` : name;
}

function inferActionAudit(title = "") {
  const text = title.toLowerCase();
  if (text.includes("super admin required")) return null;
  if (text.includes("save profile")) return { entity: "University Profile", action: "Updated university profile details" };
  if (text.includes("submit support")) return { entity: "Support", action: "Submitted support request" };
  if (text.includes("update password")) return { entity: "Security", action: "Updated account password" };
  if (text.includes("revoke previous session")) return { entity: "Security", action: "Revoked previous login session" };
  if (text.includes("submit changes to kpt")) return { entity: "Programme", action: `Submitted requested changes for ${getProgrammeAuditName()} to KPT` };
  if (text.includes("save draft changes")) return { entity: "Programme", action: `Saved draft changes for ${getProgrammeAuditName()}` };
  if (text.includes("submit draft to kpt")) return { entity: "Programme", action: `Submitted draft programme ${getProgrammeAuditName()} to KPT` };
  if (text.includes("save this programme as draft") || text.includes("submit this programme to kpt")) return null;
  if (text.includes("save user changes") || text.includes("add this user")) return null;
  return null;
}

function setUniversityProfileEditing(isEditing, scope = "university") {
  const fieldSelector = scope === "contact" ? "#profileContactFields input" : "#universityProfileFields input, #universityProfileFields textarea";
  document.querySelectorAll(fieldSelector).forEach((field) => {
    field.disabled = !isEditing;
  });
  document.querySelectorAll(`[data-profile-actions="${scope}"]`).forEach((actions) => {
    actions.hidden = !isEditing;
  });
  if (scope === "contact") {
    if (editProfileContact) editProfileContact.hidden = isEditing;
    return;
  }
  if (editUniversityProfile) editUniversityProfile.hidden = isEditing;
  if (changeUniversityLogo) changeUniversityLogo.hidden = !isEditing;
}

function setCreateProgrammeDefaultContact(isDefault, clearValuesWhenUnchecking = false) {
  const fields = [createProgrammePicName, createProgrammePicEmail, createProgrammePicPhone];
  if (isDefault) {
    if (createProgrammePicName) createProgrammePicName.value = profileContactName?.value.trim() || "";
    if (createProgrammePicEmail) createProgrammePicEmail.value = profileContactEmail?.value.trim() || "";
    if (createProgrammePicPhone) createProgrammePicPhone.value = profileContactPhone?.value.trim() || "";
  } else if (clearValuesWhenUnchecking) {
    fields.forEach((field) => {
      if (field) field.value = "";
    });
  }
  fields.forEach((field) => {
    if (field) field.disabled = isDefault;
  });
}

function openAddUserModal() {
  if (addUserButton?.dataset.currentRole !== "superadmin") {
    openProgrammeActionConfirm("Super Admin required", "Only Super Admin users can add new staff accounts.", () => {}, "OK");
    return;
  }
  editingUserRow = null;
  document.querySelector("#addUserTitle").textContent = "Add User";
  if (submitAddUser) submitAddUser.textContent = "Add User";
  if (newUserName) newUserName.value = "";
  if (newUserEmail) newUserEmail.value = "";
  if (newUserLogin) newUserLogin.value = "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserRole) newUserRole.value = "University Admin";
  if (newUserStatus) newUserStatus.value = "Active";
  if (addUserModal) addUserModal.hidden = false;
}

function closeAddUserModal() {
  if (addUserModal) addUserModal.hidden = true;
  editingUserRow = null;
}

function getUserRowStatus(row) {
  return row?.children[3]?.textContent.trim() || "Active";
}

function setUserRowValues(row, { name, email, role, status }) {
  if (!row) return;
  row.children[0].innerHTML = `<strong>${name}</strong>`;
  row.children[1].textContent = email;
  row.children[2].textContent = role;
  row.children[3].innerHTML = status === "Active" ? '<span class="status-chip green">Active</span>' : '<span class="status-chip neutral">Inactive</span>';
  row.children[6].innerHTML = '<button type="button" data-user-action="edit">Edit</button>';
  applyCurrentUserRole();
}

function openEditUserModal(row) {
  if (!row) return;
  editingUserRow = row;
  document.querySelector("#addUserTitle").textContent = "Edit User";
  if (submitAddUser) submitAddUser.textContent = "Save Changes";
  if (newUserName) newUserName.value = row.children[0]?.textContent.trim() || "";
  if (newUserEmail) newUserEmail.value = row.children[1]?.textContent.trim() || "";
  if (newUserLogin) newUserLogin.value = (row.children[1]?.textContent.trim() || "").split("@")[0] || "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserRole) newUserRole.value = row.children[2]?.textContent.trim() || "University Admin";
  if (newUserStatus) newUserStatus.value = getUserRowStatus(row);
  if (addUserModal) addUserModal.hidden = false;
}

function addUserRow() {
  if (!userTableBody) return;
  const name = newUserName?.value.trim() || "New Staff User";
  const email = newUserEmail?.value.trim() || "staff@cyberjaya.edu.my";
  const role = newUserRole?.value || "University Admin";
  const status = newUserStatus?.value || "Active";
  if (editingUserRow) {
    const previousRole = editingUserRow.children[2]?.textContent.trim() || "";
    const previousStatus = getUserRowStatus(editingUserRow);
    setUserRowValues(editingUserRow, { name, email, role, status });
    addAuditRecord({
      action: `Edited ${name}: ${previousRole} / ${previousStatus} -> ${role} / ${status}`,
      entity: "User"
    });
    closeAddUserModal();
    return;
  }
  const row = document.createElement("tr");
  row.innerHTML = `<td><strong>${name}</strong></td><td>${email}</td><td>${role}</td><td>${status === "Active" ? '<span class="status-chip green">Active</span>' : '<span class="status-chip neutral">Inactive</span>'}</td><td>Never</td><td>16 Aug 2026</td><td><button type="button" data-user-action="edit">Edit</button></td>`;
  userTableBody.prepend(row);
  addAuditRecord({
    action: `Added ${name} as ${role} / ${status}`,
    entity: "User"
  });
  applyCurrentUserRole();
  if (newUserName) newUserName.value = "";
  if (newUserEmail) newUserEmail.value = "";
  if (newUserLogin) newUserLogin.value = "";
  if (newUserPassword) newUserPassword.value = "";
  if (newUserStatus) newUserStatus.value = "Active";
  closeAddUserModal();
}

navViewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.viewLink);
    if (link.dataset.viewLink === "applications") {
      showApplicationsList();
    }
    if (link.dataset.viewLink === "programmes") {
      showProgrammesList();
    }
    scrollWorkspaceToTop();
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

notificationButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleNotificationsPanel();
});

notificationPanel?.addEventListener("click", (event) => {
  event.stopPropagation();
  const item = event.target.closest(".notification-item");
  if (!item) return;
  item.classList.remove("unread");
  updateNotificationCount();
  closeNotificationsPanel();
  openNotificationTarget(item.dataset.notificationTarget);
});

markNotificationsRead?.addEventListener("click", (event) => {
  event.stopPropagation();
  markNotificationsAsRead();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".notification-wrap")) {
    closeNotificationsPanel();
  }
});

if (location.hash === "#applications" || location.hash === "#programmes" || location.hash === "#reports" || location.hash === "#university-profile" || location.hash === "#user-management" || location.hash === "#audit-log" || location.hash === "#help-support" || location.hash === "#settings") {
  setActiveView(location.hash.slice(1));
  scrollWorkspaceToTop();
}
try {
  if (helpSupportVisibilityToggle) {
    helpSupportVisibilityToggle.checked = localStorage.getItem("universityDashboard.helpSupportVisible") !== "false";
  }
} catch (error) {
  // Use the default checked state when browser storage is unavailable.
}
applyHelpSupportVisibility();
applyCurrentUserRole();
updateAuditRows();
setActiveHelpTab("overview");
setActiveSettingsTab("notifications");
updateNotificationCount();

function getProgrammeApplicantCount(programmeName) {
  const targetProgramme = programmeName.toLowerCase();
  return [...applicationRows].filter((row) => row.dataset.programme === targetProgramme).length;
}

function shouldShowProgrammeApplicants(status) {
  return ["published", "unpublish"].includes(status);
}

function syncProgrammeApplicantCounts() {
  programmeRows.forEach((row) => {
    const programmeName = row.querySelector(".programme-name")?.textContent.trim() || "";
    const status = row.dataset.publicStatus || "";
    const applicantCell = row.children[4];
    if (!applicantCell) return;
    applicantCell.textContent = shouldShowProgrammeApplicants(status) ? String(getProgrammeApplicantCount(programmeName)) : "-";
  });
}

function updateProgrammeRows() {
  syncProgrammeApplicantCounts();
  const status = programmePublicStatusFilter?.value.toLowerCase() || "all statuses";
  const category = programmeCategoryFilter?.value.toLowerCase() || "all categories";
  const pageSize = programmesPerPage?.value || "10";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  const matchedRows = [];

  programmeRows.forEach((row) => {
    const publicStatus = row.dataset.publicStatus || "";
    const programmeCategory = row.dataset.programmeCategory || "";
    const matchesStatus =
      status === "all statuses" ||
      publicStatus === status;
    const matchesCategory =
      category === "all categories" ||
      programmeCategory === category;
    row.hidden = true;
    if (matchesStatus && matchesCategory) matchedRows.push(row);
  });

  const totalPages = limit === Infinity ? 1 : Math.max(1, Math.ceil(matchedRows.length / limit));
  currentProgrammePage = Math.min(currentProgrammePage, totalPages);
  const start = limit === Infinity ? 0 : (currentProgrammePage - 1) * limit;
  const end = limit === Infinity ? matchedRows.length : start + limit;

  matchedRows.slice(start, end).forEach((row) => {
    row.hidden = false;
  });

  if (programmesSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    programmesSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length} programmes`;
  }
  if (programmePaginationSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    programmePaginationSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length}`;
  }
  if (programmePageIndicator) {
    programmePageIndicator.textContent = `Page ${currentProgrammePage} of ${totalPages}`;
  }
  if (prevProgrammePage) {
    prevProgrammePage.disabled = currentProgrammePage <= 1;
  }
  if (nextProgrammePage) {
    nextProgrammePage.disabled = currentProgrammePage >= totalPages;
  }
  updateDashboardMetrics();
}

function resetProgrammeCreateForm() {
  if (createProgrammeName) createProgrammeName.value = "";
  if (createProgrammeOverview) createProgrammeOverview.value = "";
  if (createProgrammeCategory) createProgrammeCategory.value = "Select programme category";
  if (createProgrammeDurationType) createProgrammeDurationType.value = "Fixed days";
  if (createProgrammeDuration) createProgrammeDuration.value = "";
  if (createProgrammeDurationUnit) createProgrammeDurationUnit.value = "Day(s)";
  if (createProgrammeDurationMin) createProgrammeDurationMin.value = "";
  if (createProgrammeDurationMax) createProgrammeDurationMax.value = "";
  if (createProgrammeDurationRangeUnit) createProgrammeDurationRangeUnit.value = "Day(s)";
  if (createProgrammeFeeType) createProgrammeFeeType.value = "Fixed fee";
  if (createProgrammeFee) createProgrammeFee.value = "";
  if (createProgrammeFeeMin) createProgrammeFeeMin.value = "";
  if (createProgrammeFeeMax) createProgrammeFeeMax.value = "";
  if (createProgrammeLanguage) createProgrammeLanguage.value = "";
  createProgrammeCredit?.querySelector('input[value="No"]')?.click();
  if (createProgrammeCreditOther) createProgrammeCreditOther.value = "";
  if (createProgrammeTarget) createProgrammeTarget.value = "General Public (including student)";
  if (createProgrammeTargetOther) createProgrammeTargetOther.value = "";
  if (createProgrammeTravelTour) createProgrammeTravelTour.value = "TBC";
  if (createProgrammeTravelAgency) createProgrammeTravelAgency.value = "";
  if (createProgrammeCertificateType) createProgrammeCertificateType.value = "Certificate of Completion";
  if (createProgrammeCertificateOther) createProgrammeCertificateOther.value = "";
  if (createProgrammePicName) createProgrammePicName.value = "";
  if (createProgrammePicPhone) createProgrammePicPhone.value = "";
  if (createProgrammePicEmail) createProgrammePicEmail.value = "";
  if (createProgrammePicDefault) {
    createProgrammePicDefault.checked = false;
    setCreateProgrammeDefaultContact(false);
  }
  if (createProgrammeParticipantLimitType) createProgrammeParticipantLimitType.value = "No limit";
  if (createProgrammeMinParticipants) createProgrammeMinParticipants.value = "";
  if (createProgrammeMaxParticipants) createProgrammeMaxParticipants.value = "";
  if (createProgrammeWaiverType) createProgrammeWaiverType.value = "No waiver";
  if (createProgrammeWaivedParticipants) createProgrammeWaivedParticipants.value = "";
  if (createProgrammeWaiverEveryParticipants) createProgrammeWaiverEveryParticipants.value = "";
  updateProgrammeWaiverPreview();
  if (createProgrammeGallery) createProgrammeGallery.value = "";
  pendingProgrammeGalleryImages.forEach((image) => URL.revokeObjectURL(image.url));
  pendingProgrammeGalleryImages = [];
  renderCreateProgrammeGallery();
  if (programmeActivities) programmeActivities.innerHTML = initialProgrammeCreateFields.activities;
  if (programmeConditionalQuestions) programmeConditionalQuestions.innerHTML = initialProgrammeCreateFields.conditionalQuestions;
  if (programmeLearningScopes) programmeLearningScopes.innerHTML = initialProgrammeCreateFields.learningScopes;
  if (programmeInclusions) programmeInclusions.innerHTML = initialProgrammeCreateFields.inclusions;
  syncProgrammeCreateConditionalFields();
}

function escapeAttribute(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderCreateProgrammeGallery() {
  if (programmeGalleryCount) {
    const count = pendingProgrammeGalleryImages.length;
    programmeGalleryCount.textContent = count ? `${count} image${count === 1 ? "" : "s"} selected` : "No images selected";
  }
  if (!programmeGalleryPreview) return;
  programmeGalleryPreview.innerHTML = pendingProgrammeGalleryImages.map((image, index) => `
    <div class="gallery-preview-item">
      <img src="${image.url}" alt="${escapeAttribute(image.name)}">
      <button type="button" data-gallery-remove="${index}" aria-label="Remove ${escapeAttribute(image.name)}">X</button>
      <label>
        <span>Image Context</span>
        <input type="text" value="${escapeAttribute(image.context)}" data-gallery-context="${index}" placeholder="e.g., Programme cover image" aria-label="Image context for ${escapeAttribute(image.name)}">
      </label>
    </div>
  `).join("");
}

function resetProgrammesDemoState() {
  const activeProgrammeName = programmeDetail?.hidden ? "" : document.querySelector("#programmeDetailName")?.textContent.trim();
  if (programmesTableBody) {
    programmesTableBody.innerHTML = initialProgrammeTableHtml;
  }
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  programmeRows.forEach((row) => {
    attachProgrammeRowActions(row);
    row.hidden = false;
  });
  programmeGalleryImages.clear();
  pendingProgrammeGalleryImages.forEach((image) => URL.revokeObjectURL(image.url));
  pendingProgrammeGalleryImages = [];
  pendingProgrammeDelete = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = null;
  pendingProgrammeStatusChange = null;
  resetProgrammeCreateForm();
  if (programmePublicStatusFilter) programmePublicStatusFilter.value = "All statuses";
  if (programmeCategoryFilter) programmeCategoryFilter.value = "All categories";
  if (programmesPerPage) programmesPerPage.value = "10";
  currentProgrammePage = 1;
  updateProgrammeRows();

  if (activeProgrammeName && programmeDetail && !programmeDetail.hidden) {
    const restoredRow = [...programmeRows].find((row) => row.querySelector(".programme-name")?.textContent.trim() === activeProgrammeName);
    if (restoredRow) {
      showProgrammeDetail(restoredRow);
      return;
    }
  }
  activeProgrammeRow = null;
  showProgrammesList();
}

function showProgrammeCreateForm() {
  closeProgrammeSidePanel();
  if (programmesControlPanel) programmesControlPanel.hidden = true;
  if (programmesTableWrap) programmesTableWrap.hidden = true;
  if (programmePaginationRow) programmePaginationRow.hidden = true;
  if (programmeDetail) programmeDetail.hidden = true;
  if (programmeCreatePanel) programmeCreatePanel.hidden = false;
}

function populateStackedInputsFromCsv(container, labelPrefix, csvValue, fallbackCsv) {
  if (!container) return;
  const items = String(csvValue || fallbackCsv || "").split(",").map((item) => item.trim()).filter(Boolean);
  container.innerHTML = "";
  (items.length ? items : [""]).forEach((value) => {
    addStackedInput(container, labelPrefix);
    const lastInput = container.querySelector("label:last-child input");
    if (lastInput) lastInput.value = value;
  });
}

function populateCreateFormFromRow(row) {
  const cells = row.children;
  const name = row.querySelector(".programme-name")?.textContent.trim() || "";
  const category = cells[1]?.textContent.trim() || "";
  const durationText = cells[2]?.textContent.trim() || "";
  const feeText = cells[3]?.textContent.trim() || "";

  if (createProgrammeName) createProgrammeName.value = name;
  if (createProgrammeOverview) createProgrammeOverview.value = row.dataset.overview || "";
  if (createProgrammeCategory) createProgrammeCategory.value = category || "Select programme category";
  if (createProgrammeLanguage) createProgrammeLanguage.value = row.dataset.language || "";

  const durationData = parseDurationValue(durationText);
  if (createProgrammeDurationType) createProgrammeDurationType.value = durationData.type;
  if (durationData.type === "Date range") {
    if (createProgrammeDurationMin) createProgrammeDurationMin.value = durationData.min;
    if (createProgrammeDurationMax) createProgrammeDurationMax.value = durationData.max;
    if (createProgrammeDurationRangeUnit) createProgrammeDurationRangeUnit.value = durationData.unit;
  } else {
    if (createProgrammeDuration) createProgrammeDuration.value = durationData.value;
    if (createProgrammeDurationUnit) createProgrammeDurationUnit.value = durationData.unit;
  }

  const feeData = parseFeeValue(feeText);
  if (createProgrammeFeeType) createProgrammeFeeType.value = feeData.type;
  if (feeData.type === "Fee range") {
    if (createProgrammeFeeMin) createProgrammeFeeMin.value = feeData.min;
    if (createProgrammeFeeMax) createProgrammeFeeMax.value = feeData.max;
  } else {
    if (createProgrammeFee) createProgrammeFee.value = feeData.value;
  }

  const creditValue = row.dataset.credit || "Not eligible";
  let creditRadioValue = "No";
  let creditOtherText = "";
  if (/^eligible$/i.test(creditValue)) {
    creditRadioValue = "Yes";
  } else if (/^not eligible$/i.test(creditValue)) {
    creditRadioValue = "No";
  } else {
    creditRadioValue = "Others";
    creditOtherText = creditValue.startsWith("Others: ") ? creditValue.slice(8) : creditValue;
  }
  createProgrammeCredit?.querySelector(`input[value="${creditRadioValue}"]`)?.click();
  if (createProgrammeCreditOther) createProgrammeCreditOther.value = creditOtherText;

  const targetValue = row.dataset.target || "General Public (including student)";
  const normalizedTargetValue = targetValue === "Student only" ? "Students" : targetValue;
  const targetPresets = ["General Public (including student)", "Students"];
  if (createProgrammeTarget) {
    if (targetPresets.includes(normalizedTargetValue)) {
      createProgrammeTarget.value = normalizedTargetValue;
      if (createProgrammeTargetOther) createProgrammeTargetOther.value = "";
    } else {
      createProgrammeTarget.value = "General Public (including student)";
      if (createProgrammeTargetOther) createProgrammeTargetOther.value = "";
    }
  }

  const participantsText = row.dataset.participants || "";
  const [limitPart, waiverPart] = participantsText.includes(";")
    ? participantsText.split(";").map((part) => part.trim())
    : [participantsText, ""];
  const limitData = parseParticipantsLimit(limitPart);
  const waiverData = parseParticipantsWaiver(waiverPart);
  if (createProgrammeParticipantLimitType) createProgrammeParticipantLimitType.value = limitData.limitType;
  if (createProgrammeMinParticipants) createProgrammeMinParticipants.value = limitData.min;
  if (createProgrammeMaxParticipants) createProgrammeMaxParticipants.value = limitData.max;
  if (createProgrammeWaiverType) createProgrammeWaiverType.value = waiverData.waiverType;
  if (createProgrammeWaivedParticipants) createProgrammeWaivedParticipants.value = waiverData.waived;
  if (createProgrammeWaiverEveryParticipants) createProgrammeWaiverEveryParticipants.value = waiverData.every;
  updateProgrammeWaiverPreview();

  const travelValue = row.dataset.travelTour || "TBC";
  if (createProgrammeTravelTour) {
    if (["TBC", "N/A"].includes(travelValue)) {
      createProgrammeTravelTour.value = travelValue;
      if (createProgrammeTravelAgency) createProgrammeTravelAgency.value = "";
    } else {
      createProgrammeTravelTour.value = "Registered Travel Agency";
      if (createProgrammeTravelAgency) createProgrammeTravelAgency.value = travelValue;
    }
  }

  const certificateValue = row.dataset.certificate || "Certificate of Completion";
  const certificatePresets = ["Certificate of Completion", "Certificate of Attendance", "Certificate of Participation", "Certificate of Achievement", "None"];
  if (createProgrammeCertificateType) {
    if (certificatePresets.includes(certificateValue)) {
      createProgrammeCertificateType.value = certificateValue;
      if (createProgrammeCertificateOther) createProgrammeCertificateOther.value = "";
    } else {
      createProgrammeCertificateType.value = "Others";
      if (createProgrammeCertificateOther) createProgrammeCertificateOther.value = certificateValue;
    }
  }

  if (createProgrammePicName) createProgrammePicName.value = row.dataset.picName === "Not specified" ? "" : (row.dataset.picName || "");
  if (createProgrammePicPhone) createProgrammePicPhone.value = row.dataset.picPhone === "Not specified" ? "" : (row.dataset.picPhone || "");
  if (createProgrammePicEmail) createProgrammePicEmail.value = row.dataset.picEmail === "Not specified" ? "" : (row.dataset.picEmail || "");
  if (createProgrammePicDefault) {
    createProgrammePicDefault.checked = false;
    setCreateProgrammeDefaultContact(false);
  }

  populateStackedInputsFromCsv(programmeInclusions, "Included item", row.dataset.inclusions, "");
  populateStackedInputsFromCsv(programmeActivities, "Activity", row.dataset.activities, "Activity 1, Activity 2");
  populateStackedInputsFromCsv(programmeConditionalQuestions, "Conditional question", row.dataset.conditionalQuestions, "");
  populateStackedInputsFromCsv(programmeLearningScopes, "Learning outcome", row.dataset.outcome, "Learning outcome 1");

  pendingProgrammeGalleryImages.forEach((image) => URL.revokeObjectURL(image.url));
  pendingProgrammeGalleryImages = (programmeGalleryImages.get(name) || []).map((image) => (
    typeof image === "string"
      ? { url: image, context: "Uploaded image", name: "image" }
      : { ...image, name: image.context || "image" }
  ));
  renderCreateProgrammeGallery();

  syncProgrammeCreateConditionalFields();
}

function openDraftProgrammeEditor(row) {
  if (!row) return;
  resetProgrammeCreateForm();
  editingDraftRow = row;
  populateCreateFormFromRow(row);
  if (programmeCreateHeading) programmeCreateHeading.textContent = "Edit Draft Programme";
  if (programmeCreateSubheading) programmeCreateSubheading.textContent = "Update the draft details before saving or submitting to KPT.";
  if (saveProgrammeDraft) saveProgrammeDraft.textContent = "Save Changes";
  showProgrammeCreateForm();
}

function showProgrammesList() {
  closeProgrammeSidePanel();
  if (programmesControlPanel) programmesControlPanel.hidden = false;
  if (programmesTableWrap) programmesTableWrap.hidden = false;
  if (programmePaginationRow) programmePaginationRow.hidden = false;
  if (programmeCreatePanel) programmeCreatePanel.hidden = true;
  if (programmeDetail) programmeDetail.hidden = true;
}

function attachProgrammeRowActions(row) {
  row.querySelector('[aria-label="View programme"]')?.addEventListener("click", () => {
    openProgrammeSidePanel(row);
  });
}

function getProgrammeSideProgress(status) {
  const normalized = String(status || "").toLowerCase();
  let stages = ["Draft", "KPT review", "Published"];
  let currentIndex = normalized === "published" ? 2 : normalized === "pending kpt approval" ? 1 : 0;
  let stageLabel = stages[currentIndex];
  let tone = currentIndex === 2 ? "complete" : currentIndex === 0 ? "current" : "waiting";
  if (normalized === "changes requested") {
    stages = ["Draft", "Changes Requested", "KPT review", "Published"];
    currentIndex = 1;
    stageLabel = "Changes Requested";
    tone = "waiting";
  } else if (normalized === "rejected") {
    stages = ["Draft", "KPT review", "Rejected"];
    currentIndex = 2;
    stageLabel = "Rejected";
    tone = "closed";
  } else if (normalized === "resubmitted") {
    stages = ["Published", "KPT review", "Published"];
    currentIndex = 1;
    stageLabel = "KPT review";
    tone = "waiting";
  } else if (normalized === "unpublish") {
    stages = ["Draft", "KPT review", "Published", "Unpublished"];
    currentIndex = 3;
    stageLabel = "Unpublished";
    tone = "waiting";
  }
  const summary = normalized === "draft"
    ? "Complete the programme details before submitting it to KPT."
    : normalized === "pending kpt approval"
      ? "The programme has been submitted and is waiting for KPT review."
      : normalized === "changes requested"
        ? "Update the requested fields before the programme returns to KPT review."
        : normalized === "rejected"
          ? "The programme is closed for this approval cycle. Review the outcome and update it if needed."
          : normalized === "resubmitted"
            ? "Changes to the published programme have been sent back to KPT for review."
          : normalized === "unpublish"
            ? "The programme was unpublished after approval and is currently unavailable on the public listing."
            : "The programme is approved and available on the public listing.";
  return { stages, currentIndex, stageLabel, tone, summary };
}

function renderProgrammeSideList(value, fallback) {
  const items = String(value || fallback || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return `<ul class="programme-detail-list">${(items.length ? items : [fallback || "Not specified"]).map((item) => `<li>${escapeAttribute(item)}</li>`).join("")}</ul>`;
}

function renderProgrammeSideGallery(images) {
  if (!images.length) return '<p class="programme-gallery-empty">No images uploaded.</p>';
  return `<div class="programme-gallery-grid">${images.map((image, index) => `
    <div>
      <span class="gallery-thumb" aria-hidden="true" style="${image.url ? `background-image:url('${escapeAttribute(image.url)}');background-size:cover;background-position:center;` : ""}"></span>
      <strong>${escapeAttribute(image.context || `Image ${index + 1}`)}</strong>
      <small>${image.url ? "Uploaded image" : "Placeholder image"}</small>
    </div>
  `).join("")}</div>`;
}

function getProgrammeSideTabMarkup(activeTab, tab, content) {
  return `<div data-programme-side-panel="${tab}" ${activeTab === tab ? "" : "hidden"}>${content}</div>`;
}

function getActiveProgrammeSideTab() {
  return programmeSidePanel?.querySelector("[data-programme-side-tab].active")?.dataset.programmeSideTab || "overview";
}

function closeProgrammeSidePanel() {
  document.documentElement.classList.remove("application-modal-open");
  document.body.classList.remove("application-modal-open");
  programmeSideBackdrop?.classList.remove("is-visible");
  if (programmeSidePanel) {
    window.clearTimeout(programmeSidePanelCloseTimer);
    if (!programmeSidePanel.hidden) {
      programmeSidePanel.classList.remove("is-open");
      programmeSidePanel.classList.add("is-closing");
      programmeSidePanelCloseTimer = window.setTimeout(() => {
        programmeSidePanel.hidden = true;
        if (programmeSideBackdrop) programmeSideBackdrop.hidden = true;
        programmeSidePanel.classList.remove("is-closing");
        programmeSidePanelCloseTimer = null;
      }, 280);
    } else {
      programmeSidePanel.hidden = true;
      if (programmeSideBackdrop) programmeSideBackdrop.hidden = true;
      programmeSidePanel.classList.remove("is-open", "is-closing");
      programmeSidePanelCloseTimer = null;
    }
  }
  programmeRows.forEach((row) => row.classList.remove("selected-row"));
}

function renderProgrammeSidePanel(row, preferredTab = getActiveProgrammeSideTab()) {
  if (!row || !programmeSidePanel) return;
  activeProgrammeRow = row;
  programmeRows.forEach((item) => item.classList.toggle("selected-row", item === row));
  const cells = row.children;
  const name = row.querySelector(".programme-name")?.textContent.trim() || "Programme";
  const category = cells[1]?.textContent.trim() || "Not specified";
  const duration = cells[2]?.textContent.trim() || "Not specified";
  const fee = cells[3]?.textContent.trim() || "Not specified";
  const applicants = String(getProgrammeApplicantCount(name));
  const statusChip = cells[5]?.querySelector(".status-chip");
  const status = statusChip?.textContent.trim() || "Draft";
  const chip = statusChip?.className.split(" ").pop() || "neutral";
  const normalizedStatus = status.toLowerCase();
  const progress = getProgrammeSideProgress(status);
  const activeTab = ["overview", "details", "approval"].includes(preferredTab) ? preferredTab : "overview";
  const statusUpdates = {
    draft: "This programme remains a draft and has not been submitted to KPT.",
    "pending kpt approval": "The programme was submitted to KPT and is awaiting an approval decision.",
    "changes requested": "KPT requested updates before the programme can be approved.",
    published: "The programme has been approved and is currently published.",
    rejected: "KPT rejected this submission. Review the programme details before making another submission.",
    unpublish: "The programme is approved, but its public listing is currently unpublished."
  };
  const approvalChangeItem = normalizedStatus === "changes requested"
    ? getProgrammeApprovalTimelineItems(normalizedStatus, name).find((item) => item.title === "KPT requested changes")
    : null;
  const approvalUpdate = ["draft", "unpublish"].includes(normalizedStatus)
    ? ""
    : `<div><span>Update</span><strong>${escapeAttribute(normalizedStatus === "published" ? "Approved by KPT and published for applications." : (statusUpdates[normalizedStatus] || "Programme status update is available for review."))}</strong></div>`;
  const approvalNextStep = ["draft", "pending kpt approval", "published", "rejected"].includes(normalizedStatus)
    ? ""
    : `<div><span>Next step</span><strong>${escapeAttribute(normalizedStatus === "unpublish" ? "This programme is not available to the public. To republish it, submit it to KPT for approval." : progress.summary)}</strong></div>`;
  const overviewContent = `
    <div class="application-side-card-grid">
      <article class="application-side-card applicant-card">
        <h4>Basic Information</h4>
        <div class="application-side-fields">
          <div><span>Category</span><strong>${escapeAttribute(category)}</strong></div>
          <div><span>Language</span><strong>${escapeAttribute(row.dataset.language || "Not specified")}</strong></div>
          <div><span>Total applicants</span><strong>${escapeAttribute(applicants === "-" ? "0" : applicants)}</strong></div>
        </div>
      </article>
      <article class="application-side-card programme-card">
        <h4>Audience, Duration &amp; Fees</h4>
        <div class="application-side-fields">
          <div><span>Target group</span><strong>${escapeAttribute(row.dataset.target || "General Public (including student)")}</strong></div>
          <div><span>Duration</span><strong>${escapeAttribute(duration)}</strong></div>
          <div><span>Fee</span><strong>${escapeAttribute(fee)}</strong></div>
          <div><span>Credit transfer</span><strong>${escapeAttribute(row.dataset.credit || "Not specified")}</strong></div>
        </div>
      </article>
      <article class="application-side-card summary-card">
        <h4>Travel, Certification &amp; PIC Details</h4>
        <div class="application-side-fields">
          <div><span>Travel / tour</span><strong>${escapeAttribute(row.dataset.travelTour || "Not specified")}</strong></div>
          <div><span>Certificate</span><strong>${escapeAttribute(row.dataset.certificate || "Not specified")}</strong></div>
          <div><span>PIC</span><strong>${escapeAttribute(row.dataset.picName || "Not specified")}</strong></div>
          <div><span>Phone</span><strong>${escapeAttribute(row.dataset.picPhone || "Not specified")}</strong></div>
          <div><span>Email</span><strong>${escapeAttribute(row.dataset.picEmail || "Not specified")}</strong></div>
        </div>
      </article>
    </div>`;
  const detailsContent = `
    <div class="application-side-card-grid">
      <article class="application-side-card summary-card">
        <h4>Programme Content</h4>
        <p class="application-side-post-note">${escapeAttribute(row.dataset.overview || "Programme overview appears here.")}</p>
        <div class="programme-scope-list">
          <div class="programme-scope-list-wide"><span>Learning Outcome</span>${renderProgrammeSideList(row.dataset.outcome, "Learning outcome 1")}</div>
          <div class="programme-scope-list-wide"><span>What Is Included</span>${renderProgrammeSideList(row.dataset.inclusions, "No included items added")}</div>
          <div class="programme-scope-list-wide"><span>Activities</span>${renderProgrammeSideList(row.dataset.activities, "Activity 1, Activity 2, guided site visit")}</div>
        </div>
      </article>
      <article class="application-side-card programme-card">
        <h4>Conditional Questions</h4>
        <div class="programme-scope-list">
          <div class="programme-scope-list-wide">${row.dataset.conditionalQuestions ? renderProgrammeSideList(row.dataset.conditionalQuestions, "No conditional questions added") : '<p class="programme-gallery-empty">No conditional questions added.</p>'}</div>
        </div>
      </article>
      <article class="application-side-card applicant-card">
        <h4>Gallery</h4>
        ${renderProgrammeSideGallery(getProgrammeGalleryImages(name))}
      </article>
    </div>`;
  const approvalContent = `
    <div class="application-side-card-grid">
      ${approvalChangeItem?.sections?.length ? `
      <article class="application-side-card summary-card">
        <h4>Changes Requested</h4>
        <p class="application-side-post-note">${escapeAttribute(approvalChangeItem.body)}</p>
        <div class="programme-scope-list">
          ${approvalChangeItem.sections.map((section) => `<div class="programme-scope-list-wide"><span>${escapeAttribute(section.label)}</span><ul class="programme-detail-list"><li>${escapeAttribute(section.note)}</li></ul></div>`).join("")}
        </div>
      </article>` : ""}
      <article class="application-side-card applicant-card">
        <h4>Approval &amp; Updates</h4>
        <div class="application-side-fields">
          <div><span>Current status</span><strong>${escapeAttribute(status)}</strong></div>
          <div><span>${normalizedStatus === "published" ? "Published / approved" : "Last updated"}</span><strong>13 Aug 2026</strong></div>
          ${approvalUpdate}
          ${approvalNextStep}
        </div>
      </article>
    </div>`;
  const progressItems = progress.stages.map((stage, index) => `
    <li class="${index < progress.currentIndex ? "complete" : index === progress.currentIndex ? "current" : "upcoming"}">
      <span class="application-progress-step-node">${index < progress.currentIndex ? "&#10003;" : ""}</span>
      <strong>${stage}</strong>
    </li>`).join("");

  window.clearTimeout(programmeSidePanelCloseTimer);
  programmeSidePanel.classList.remove("is-closing");
  document.documentElement.classList.add("application-modal-open");
  document.body.classList.add("application-modal-open");
  if (programmeSideBackdrop) {
    programmeSideBackdrop.hidden = false;
    programmeSideBackdrop.classList.remove("is-visible");
  }
  programmeSidePanel.hidden = false;
  programmeSidePanel.innerHTML = `
    <div class="application-side-head programme-side-head">
      <div>
        <small>Programme quick view</small>
        <h3>${escapeAttribute(name)}</h3>
        <p>${escapeAttribute(category)} ${createStatusChip(status, chip).outerHTML}</p>
      </div>
      <div class="application-side-head-actions">
        <button type="button" data-close-programme-side aria-label="Close programme quick view">X</button>
      </div>
    </div>
    <div class="application-side-status programme-side-summary">
      <span class="soft-pill">${escapeAttribute(duration)}</span>
      <span class="soft-pill">${escapeAttribute(fee)}</span>
      <span class="soft-pill">${escapeAttribute(applicants === "-" ? "0" : applicants)} applicants</span>
    </div>
    <div class="application-side-layout programme-side-layout">
      <div>
        <div class="detail-tabs application-side-tabs programme-side-tabs" aria-label="Programme quick view tabs">
          <button class="${activeTab === "overview" ? "active" : ""}" type="button" data-programme-side-tab="overview">Overview</button>
          <button class="${activeTab === "details" ? "active" : ""}" type="button" data-programme-side-tab="details">Other details</button>
          <button class="${activeTab === "approval" ? "active" : ""}" type="button" data-programme-side-tab="approval">Approval &amp; Updates</button>
        </div>
        ${getProgrammeSideTabMarkup(activeTab, "overview", overviewContent)}
        ${getProgrammeSideTabMarkup(activeTab, "details", detailsContent)}
        ${getProgrammeSideTabMarkup(activeTab, "approval", approvalContent)}
      </div>
      <div class="application-side-stage-column">
        <section class="application-current-stage-box ${progress.tone}">
          <span class="application-current-stage-label">Programme progress</span>
          <h4>${escapeAttribute(progress.stageLabel)}</h4>
          <p>${escapeAttribute(progress.summary)}</p>
          <div class="application-current-stage-summary programme-side-count">
            <strong>${escapeAttribute(applicants === "-" ? "0" : applicants)}</strong>
            <span>Total applicants</span>
          </div>
          <div class="application-current-stage-progress">
            <h5>Approval pathway</h5>
            <ol>${progressItems}</ol>
          </div>
          <div class="application-current-stage-actions programme-side-actions">
            <button type="button" data-programme-side-action="full-page">View full page</button>
            ${normalizedStatus === "published" ? '<button class="secondary" type="button" data-programme-side-action="view-applicants">View all applicants</button>' : ""}
            ${normalizedStatus === "unpublish" ? '<button class="secondary" type="button" data-programme-side-action="resubmit">Resubmit to KPT</button>' : ""}
            <button class="secondary" type="button" data-programme-side-action="edit">Edit programme</button>
          </div>
        </section>
      </div>
    </div>`;
  window.requestAnimationFrame(() => {
    programmeSideBackdrop?.classList.add("is-visible");
    programmeSidePanel?.classList.add("is-open");
  });
}

function openProgrammeSidePanel(row) {
  renderProgrammeSidePanel(row);
}

function getCreateProgrammeCreditValue() {
  const selected = createProgrammeCredit?.querySelector('input[name="createProgrammeCredit"]:checked')?.value || "No";
  if (selected !== "Others") return selected;
  const otherValue = createProgrammeCreditOther?.value.trim();
  return otherValue ? `Others: ${otherValue}` : "Others";
}

function getCreateProgrammeTargetValue() {
  const selected = createProgrammeTarget?.value || "General Public (including student)";
  return ["General Public (including student)", "Students"].includes(selected)
    ? selected
    : "General Public (including student)";
}

function getCreateProgrammeTravelTourValue() {
  const selected = createProgrammeTravelTour?.value || "TBC";
  if (selected !== "Registered Travel Agency") return selected;
  const agencyValue = createProgrammeTravelAgency?.value.trim();
  return agencyValue || "Registered Travel Agency";
}

function getCreateProgrammeCertificateValue() {
  const selected = createProgrammeCertificateType?.value || "Certificate of Completion";
  if (selected !== "Others") return selected;
  const otherValue = createProgrammeCertificateOther?.value.trim();
  return otherValue || "Others";
}

function getCreateProgrammeParticipantValue() {
  const participantLimit = createProgrammeParticipantLimitType?.value === "Set min/max"
    ? `${createProgrammeMinParticipants?.value || "10"} - ${createProgrammeMaxParticipants?.value || "40"} participants`
    : "No participant limit";
  const participantWaiver = getCreateProgrammeWaiverValue();
  return `${participantLimit}; ${participantWaiver}`;
}

function getCreateProgrammeWaiverValue() {
  if (createProgrammeWaiverType?.value !== "Set waiver") return "No participant waiver";
  const waivedCount = Number(createProgrammeWaivedParticipants?.value) || 1;
  const everyCount = Number(createProgrammeWaiverEveryParticipants?.value) || 20;
  const participantLabel = waivedCount === 1 ? "participant" : "participants";
  return `${waivedCount} ${participantLabel} waived for every ${everyCount} participants`;
}

function updateProgrammeWaiverPreview() {
  if (!createProgrammeWaiverPreview) return;
  const waivedCount = Number(createProgrammeWaivedParticipants?.value) || 1;
  const everyCount = Number(createProgrammeWaiverEveryParticipants?.value) || 20;
  const participantLabel = waivedCount === 1 ? "participant" : "participants";
  createProgrammeWaiverPreview.textContent = `Waiver for ${waivedCount} ${participantLabel} for every ${everyCount} participants.`;
}

function formatProgrammeDuration(value, unit) {
  const amount = Number(value) || 1;
  const normalizedUnit = unit === "Month(s)" ? "month" : unit === "Week(s)" ? "week" : "day";
  return `${amount} ${normalizedUnit}${amount === 1 ? "" : "s"}`;
}

function getCreateProgrammeData(status) {
  const feeValue = createProgrammeFee?.value || "0";
  const feeType = createProgrammeFeeType?.value || "Fixed fee";
  const durationType = createProgrammeDurationType?.value || "Fixed days";
  const durationMin = createProgrammeDurationMin?.value || "10";
  const durationMax = createProgrammeDurationMax?.value || "20";
  const feeMin = createProgrammeFeeMin?.value || "1000";
  const feeMax = createProgrammeFeeMax?.value || "1500";
  const activities = [...(programmeActivities?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  const conditionalQuestions = [...(programmeConditionalQuestions?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  const outcomes = [...(programmeLearningScopes?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  const inclusions = [...(programmeInclusions?.querySelectorAll("input") || [])].map((input) => input.value.trim()).filter(Boolean);
  const duration = durationType === "Date range"
    ? `${formatProgrammeDuration(durationMin, createProgrammeDurationRangeUnit?.value)} - ${formatProgrammeDuration(durationMax, createProgrammeDurationRangeUnit?.value)}`
    : formatProgrammeDuration(createProgrammeDuration?.value || "14", createProgrammeDurationUnit?.value);
  const fee = feeType === "Fee range"
    ? `USD ${feeMin} - USD ${feeMax}`
    : `USD ${feeValue}`;
  return {
    name: createProgrammeName?.value.trim() || "Untitled Programme",
    overview: createProgrammeOverview?.value.trim() || "Programme overview appears here.",
    category: createProgrammeCategory?.value === "Select programme category" ? "Science and Technology (SAT)" : createProgrammeCategory?.value || "Science and Technology (SAT)",
    duration,
    fee,
    language: createProgrammeLanguage?.value || "English",
    credit: getCreateProgrammeCreditValue(),
    target: getCreateProgrammeTargetValue(),
    participants: getCreateProgrammeParticipantValue(),
    travelTour: getCreateProgrammeTravelTourValue(),
    certificate: getCreateProgrammeCertificateValue(),
    picName: createProgrammePicName?.value.trim() || "Not specified",
    picPhone: createProgrammePicPhone?.value.trim() || "Not specified",
    picEmail: createProgrammePicEmail?.value.trim() || "Not specified",
    inclusions: inclusions.length ? inclusions.join(", ") : "No included items added",
    activities: activities.length ? activities.join(", ") : "Activity 1, Activity 2",
    conditionalQuestions: conditionalQuestions.join(", "),
    outcome: outcomes.length ? outcomes.join(", ") : "Learning outcome 1",
    status
  };
}

function applyProgrammeDataToRow(row, data, status) {
  const normalizedStatus = status.toLowerCase();
  const chipClass = normalizedStatus === "draft" ? "status-chip neutral" : "status-chip amber";
  row.dataset.programmeCategory = data.category.toLowerCase();
  row.dataset.publicStatus = normalizedStatus;
  row.dataset.overview = data.overview;
  row.dataset.language = data.language;
  row.dataset.credit = data.credit;
  row.dataset.target = data.target;
  row.dataset.participants = data.participants;
  row.dataset.inclusions = data.inclusions;
  row.dataset.activities = data.activities;
  row.dataset.conditionalQuestions = data.conditionalQuestions;
  row.dataset.outcome = data.outcome;
  row.dataset.travelTour = data.travelTour;
  row.dataset.certificate = data.certificate;
  row.dataset.picName = data.picName;
  row.dataset.picPhone = data.picPhone;
  row.dataset.picEmail = data.picEmail;
  row.dataset.picFax = row.dataset.picFax || "Not specified";
  row.innerHTML = `<td><span class="programme-name">${data.name}</span></td><td>${data.category}</td><td>${data.duration}</td><td>${data.fee}</td><td>-</td><td><span class="${chipClass}">${status}</span></td><td><button class="submission-view-btn" type="button" aria-label="View programme">View</button></td>`;
}

function createProgrammeRow(status) {
  const data = getCreateProgrammeData(status);
  const tbody = document.querySelector(".programmes-table tbody");
  if (!tbody) return;
  const row = document.createElement("tr");
  applyProgrammeDataToRow(row, data, status);
  tbody.prepend(row);
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  attachProgrammeRowActions(row);
  if (pendingProgrammeGalleryImages.length) {
    programmeGalleryImages.set(data.name, pendingProgrammeGalleryImages.map((image) => ({ ...image })));
    pendingProgrammeGalleryImages = [];
  }
  updateProgrammeRows();
  addAuditRecord({ action: `${status === "Draft" ? "Created draft programme" : "Submitted programme to KPT"}: ${data.name}`, entity: "Programme" });
  showProgrammesList();
}

function updateProgrammeRowFromForm(row, status) {
  const previousName = row.querySelector(".programme-name")?.textContent.trim() || "";
  const data = getCreateProgrammeData(status);
  applyProgrammeDataToRow(row, data, status);
  attachProgrammeRowActions(row);
  if (pendingProgrammeGalleryImages.length) {
    if (previousName && previousName !== data.name) programmeGalleryImages.delete(previousName);
    programmeGalleryImages.set(data.name, pendingProgrammeGalleryImages.map((image) => ({ ...image })));
    pendingProgrammeGalleryImages = [];
  } else if (previousName && previousName !== data.name && programmeGalleryImages.has(previousName)) {
    programmeGalleryImages.set(data.name, programmeGalleryImages.get(previousName));
    programmeGalleryImages.delete(previousName);
  }
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  updateProgrammeRows();
  addAuditRecord({ action: `${status === "Draft" ? "Updated draft programme" : "Submitted draft programme to KPT"}: ${data.name}`, entity: "Programme" });
  activeProgrammeRow = row;
  showProgrammeDetail(row);
}

function showProgrammeDetail(row) {
  if (!row) return;
  closeProgrammeSidePanel();
  activeProgrammeRow = row;
  const cells = row.children;
  const name = row.querySelector(".programme-name")?.textContent.trim() || "Programme";
  const category = cells[1]?.textContent.trim() || "";
  const duration = cells[2]?.textContent.trim() || "";
  const fee = cells[3]?.textContent.trim() || "";
  const applicants = cells[4]?.textContent.trim() || "0";
  const statusChip = cells[5]?.querySelector(".status-chip");
  const status = statusChip?.textContent.trim() || "";
  const chipClass = statusChip?.className || "status-chip neutral";
  const normalizedStatus = status.toLowerCase();
  const summaries = {
    "Tropical Biodiversity Programme": "Tropical Biodiversity Programme introduces participants to Malaysian academic, cultural, and industry learning through a structured short programme.",
    "Malay Language & Culture": "Malay Language & Culture builds practical language confidence through cultural activities, guided lessons, and local engagement.",
    "Digital Entrepreneurship Bootcamp": "Digital Entrepreneurship Bootcamp helps participants develop business ideas, validate markets, and present a digital venture concept.",
    "Malaysian Heritage Experience": "Malaysian Heritage Experience combines museum visits, community learning, and reflective cultural study.",
    "Sustainable Cities Programme": "Sustainable Cities Programme explores urban planning, smart mobility, and sustainability challenges in Malaysian cities."
  };
  const customOverview = row.dataset.overview;
  const overview = customOverview || summaries[name] || `${name} introduces participants to academic, cultural, and industry learning through a structured short programme.`;
  setText("#programmeDetailName", name);
  setText("#programmeDetailMeta", `${duration}   ${fee}`);
  setText("#programmeDetailSummary", overview);
  setText("#programmeDetailOverviewName", name);
  setText("#programmeDetailOverview", overview);
  setText("#programmeDetailCategory", category);
  setText("#programmeDetailDuration", duration);
  setText("#programmeDetailFee", fee);
  setText("#programmeDetailStatusText", status);
  setText("#programmeDetailTarget", row.dataset.target || (applicants === "0" ? "Group" : "General Public (including student)"));
  renderProgrammeParticipants(row.dataset.participants);
  setText("#programmeDetailCredit", row.dataset.credit || (category.toLowerCase().includes("business") ? "Not eligible" : "Eligible"));
  setText("#programmeDetailLanguage", row.dataset.language || (category.toLowerCase().includes("language") ? "Malay" : "English"));
  setText("#programmeDetailTravelTour", row.dataset.travelTour || "TBC");
  setText("#programmeDetailCertificate", row.dataset.certificate || "Certificate of Completion");
  setText("#programmeDetailPicName", row.dataset.picName || "Not specified");
  setText("#programmeDetailPicPhone", row.dataset.picPhone || "Not specified");
  setText("#programmeDetailPicEmail", row.dataset.picEmail || "Not specified");
  setText("#programmeDetailPicFax", row.dataset.picFax || "Not specified");
  setListField("#programmeDetailsOutcome", row.dataset.outcome, "Learning outcome 1");
  setListField("#programmeDetailsInclusions", row.dataset.inclusions, "No included items added");
  setListField("#programmeDetailsActivities", row.dataset.activities, "Activity 1, Activity 2, guided site visit");
  renderProgrammeGallery(name);
  setText("#programmeApplicationsStatus", normalizedStatus === "published" ? "Accepting applications" : "Historical applications only");
  const detailStatus = document.querySelector("#programmeDetailStatus");
  if (detailStatus) {
    detailStatus.className = chipClass;
    detailStatus.textContent = status;
  }
  renderProgrammeStatusNotice(normalizedStatus);
  renderProgrammeFieldIssues(normalizedStatus);
  renderProgrammeDetailTabs(normalizedStatus);
  renderProgrammeApplications(name);
  renderProgrammeHistoryTimeline(normalizedStatus);
  renderProgrammeManagementActions(normalizedStatus);
  if (programmeDetailLiveLink) programmeDetailLiveLink.hidden = normalizedStatus !== "published";
  setProgrammeDetailsEditing(false, normalizedStatus);
  setActiveProgrammeTab("overview");
  if (programmesControlPanel) programmesControlPanel.hidden = true;
  if (programmesTableWrap) programmesTableWrap.hidden = true;
  if (programmePaginationRow) programmePaginationRow.hidden = true;
  if (programmeCreatePanel) programmeCreatePanel.hidden = true;
  if (programmeDetail) programmeDetail.hidden = false;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function renderProgrammeManagementActions(status) {
  if (!programmeManagementActions) return;
  const actions = {
    live: [
      { label: "Archive programme", status: "Archived", chipClass: "status-chip neutral", title: "Archive this programme?", message: "This will archive the programme and keep its historical applications available for review.", tone: "danger" }
    ],
    draft: [
      { label: "Delete draft", delete: true, title: "Delete this draft?", message: "This will remove the draft programme from the prototype table.", tone: "danger" }
    ]
  }[status] || [];

  programmeManagementActions.innerHTML = "";
  actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action.label;
    if (action.tone) button.dataset.tone = action.tone;
    button.addEventListener("click", () => {
      if (action.delete) {
        openProgrammeDeleteConfirm(action.title, action.message);
        return;
      }
      openProgrammeStatusConfirm(action.status, action.chipClass, action.title, action.message);
    });
    programmeManagementActions.appendChild(button);
  });
  programmeManagementActions.hidden = actions.length === 0;
}

function updateActiveProgrammeStatus(status, chipClass = "status-chip amber") {
  if (!activeProgrammeRow) return;
  const normalizedStatus = status.toLowerCase();
  const statusCell = activeProgrammeRow.children[5];
  activeProgrammeRow.dataset.publicStatus = normalizedStatus;
  if (statusCell) {
    statusCell.innerHTML = `<span class="${chipClass}">${status}</span>`;
  }
  const detailStatus = document.querySelector("#programmeDetailStatus");
  if (detailStatus) {
    detailStatus.className = chipClass;
    detailStatus.textContent = status;
  }
  setText("#programmeDetailStatusText", status);
  renderProgrammeStatusNotice(normalizedStatus);
  renderProgrammeFieldIssues(normalizedStatus);
  renderProgrammeDetailTabs(normalizedStatus);
  renderProgrammeHistoryTimeline(normalizedStatus);
  renderProgrammeManagementActions(normalizedStatus);
  if (programmeDetailLiveLink) programmeDetailLiveLink.hidden = normalizedStatus !== "published";
  setProgrammeDetailsEditing(false, normalizedStatus);
  updateProgrammeRows();
}

function openProgrammeStatusConfirm(status, chipClass, title, message) {
  pendingProgrammeStatusChange = { status, chipClass };
  pendingProgrammeDelete = null;
  pendingProgrammeActionAudit = { entity: "Programme", action: `Changed ${getProgrammeAuditName()} status to ${status}` };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Confirm";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function openProgrammeDeleteConfirm(title, message) {
  pendingProgrammeDelete = activeProgrammeRow;
  pendingProgrammeStatusChange = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = { entity: "Programme", action: `Deleted draft programme ${getProgrammeAuditName()}` };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Delete";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function openProgrammeActionConfirm(title, message, action, confirmLabel = "Confirm") {
  pendingProgrammeAction = action;
  pendingProgrammeActionAudit = inferActionAudit(title);
  pendingProgrammeDelete = null;
  pendingProgrammeStatusChange = null;
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = message;
  if (applyStatusConfirm) applyStatusConfirm.textContent = confirmLabel;
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function deleteActiveProgrammeDraft() {
  if (!pendingProgrammeDelete) return;
  pendingProgrammeDelete.remove();
  pendingProgrammeDelete = null;
  activeProgrammeRow = null;
  programmeRows = document.querySelectorAll(".programmes-table tbody tr");
  updateProgrammeRows();
  showProgrammesList();
}

function applyRequestedProgrammeChanges() {
  if (requestedProgrammeDurationCompound && requestedProgrammeDurationDisplay) {
    commitDurationCompound(requestedProgrammeDurationCompound, requestedProgrammeDurationDisplay);
    setText("#programmeDetailDuration", requestedProgrammeDurationDisplay.textContent);
  }
  if (requestedProgrammeFeeCompound && requestedProgrammeFeeDisplay) {
    commitFeeCompound(requestedProgrammeFeeCompound, requestedProgrammeFeeDisplay);
    setText("#programmeDetailFee", requestedProgrammeFeeDisplay.textContent);
  }
  if (requestedProgrammeParticipantsCompound && requestedProgrammeParticipantsLimitDisplay && requestedProgrammeParticipantsWaiverDisplay) {
    commitParticipantsCompound(requestedProgrammeParticipantsCompound, requestedProgrammeParticipantsLimitDisplay, requestedProgrammeParticipantsWaiverDisplay);
    setText("#programmeDetailParticipantsLimit", requestedProgrammeParticipantsLimitDisplay.textContent);
    setText("#programmeDetailParticipantsWaiver", requestedProgrammeParticipantsWaiverDisplay.textContent);
  }
  setListField("#programmeDetailsOutcome", requestedProgrammeLearning?.value.trim(), "Participants complete guided activities, site visits, and a reflective project assessed by university facilitators.");
  setText("#programmeDetailTarget", requestedProgrammeTarget?.value || "General Public (including student)");
  closeRequestedChangesModal();
  updateActiveProgrammeStatus("Pending KPT Approval", "status-chip amber");
}

function renderProgrammeApplications(programmeName) {
  if (!programmeApplicationsRows) return;
  const targetProgramme = programmeName.toLowerCase();
  const matchedRows = [...applicationRows].filter((row) => row.dataset.programme === targetProgramme);
  setText("#programmeApplicationsTotal", `Showing ${matchedRows.length} related applicant${matchedRows.length === 1 ? "" : "s"}`);
  if (!matchedRows.length) {
    programmeApplicationsRows.innerHTML = `
      <tr>
        <td colspan="6">No applicants found for this programme.</td>
      </tr>
    `;
    return;
  }
  programmeApplicationsRows.innerHTML = matchedRows.map((row, index) => {
    const cells = row.children;
    return `
      <tr data-source-index="${[...applicationRows].indexOf(row)}">
        <td>${cells[0]?.innerHTML || ""}</td>
        <td>${cells[1]?.innerHTML || ""}</td>
        <td>${cells[2]?.innerHTML || ""}</td>
        <td>${cells[3]?.innerHTML || ""}</td>
        <td>${cells[4]?.innerHTML || ""}</td>
        <td>${cells[6]?.innerHTML || ""}</td>
      </tr>
    `;
  }).join("");
  programmeApplicationsRows.querySelectorAll("tr").forEach((tableRow) => {
    const sourceRow = applicationRows[Number(tableRow.dataset.sourceIndex)];
    tableRow.querySelector(".applicant-link")?.addEventListener("click", (event) => {
      event.preventDefault();
      showApplicantDetail(sourceRow);
    });
  });
}

function getProgrammeGalleryImages(programmeName) {
  const stored = programmeGalleryImages.get(programmeName);
  if (stored && stored.length) {
    return stored.map((image) => (typeof image === "string" ? { url: image, context: "Uploaded image" } : { ...image }));
  }
  return DEFAULT_PROGRAMME_GALLERY_LABELS.map((label) => ({ url: null, context: label }));
}

function renderProgrammeDetailsGalleryGrid(images, isEditing) {
  if (!programmeDetailsGalleryGrid) return;
  if (!images.length) {
    programmeDetailsGalleryGrid.innerHTML = '<p class="programme-gallery-empty">No images uploaded</p>';
    return;
  }
  programmeDetailsGalleryGrid.innerHTML = images.map((image, index) => `
    <div>
      <span class="gallery-thumb" aria-hidden="true" style="${image.url ? `background-image:url('${escapeAttribute(image.url)}');background-size:cover;background-position:center;` : ""}"></span>
      <strong>${escapeAttribute(image.context || `Image ${index + 1}`)}</strong>
      <small>${image.url ? "Uploaded image" : "Placeholder image"}</small>
      <button type="button" data-gallery-action="view" data-index="${index}">View</button>
      <button type="button" data-gallery-action="replace" data-index="${index}" ${isEditing ? "" : "hidden"}>Replace</button>
      <button type="button" data-gallery-action="remove" data-index="${index}" ${isEditing ? "" : "hidden"}>Remove</button>
    </div>
  `).join("");
}

function renderProgrammeGallery(programmeName) {
  renderProgrammeDetailsGalleryGrid(getProgrammeGalleryImages(programmeName), false);
}

function canEditProgrammeDetails(status) {
  return ["changes requested", "published", "unpublish", "draft"].includes(status);
}

function getEditableProgrammePanels() {
  return document.querySelectorAll(
    "#programmeDetail .programme-tab-panel[data-programme-panel='overview'], #programmeDetail .programme-tab-panel[data-programme-panel='details']"
  );
}

function syncEditableOtherSelect(select, display) {
  const displayText = display.textContent.trim();
  const triggerValue = select.dataset.editableOtherTrigger;
  const otherInput = select.dataset.editableOther ? document.getElementById(select.dataset.editableOther) : null;
  const rawFormat = select.dataset.editableOtherFormat === "raw";
  const presetValues = [...select.options].map((option) => option.value);
  if (presetValues.includes(displayText)) {
    select.value = displayText;
    if (otherInput) {
      otherInput.value = "";
      otherInput.hidden = true;
    }
    return;
  }
  select.value = triggerValue;
  if (otherInput) {
    if (rawFormat) {
      otherInput.value = displayText;
    } else {
      const prefix = "Others: ";
      otherInput.value = displayText.startsWith(prefix) ? displayText.slice(prefix.length) : (displayText === "Others" ? "" : displayText);
    }
    otherInput.hidden = false;
  }
}

function computeEditableOtherValue(select) {
  const triggerValue = select.dataset.editableOtherTrigger;
  const otherInput = select.dataset.editableOther ? document.getElementById(select.dataset.editableOther) : null;
  const rawFormat = select.dataset.editableOtherFormat === "raw";
  if (select.value === triggerValue && otherInput) {
    const otherValue = otherInput.value.trim();
    return rawFormat ? (otherValue || triggerValue) : (otherValue ? `Others: ${otherValue}` : "Others");
  }
  return select.value;
}

function commitEditableOtherSelect(select, display) {
  display.textContent = computeEditableOtherValue(select);
}

function getCompoundRole(wrapper, role) {
  return wrapper.querySelector(`[data-role="${role}"]`);
}

function formatDurationPart(value, unit) {
  const amount = Number(value) || 1;
  const normalizedUnitText = String(unit || "Day(s)").toLowerCase();
  const normalizedUnit = normalizedUnitText.startsWith("month") ? "Month" : normalizedUnitText.startsWith("week") ? "Week" : "Day";
  return `${amount} ${normalizedUnit}${amount === 1 ? "" : "s"}`;
}

function parseDurationUnit(text) {
  if (/month/i.test(text || "")) return "Month(s)";
  if (/week/i.test(text || "")) return "Week(s)";
  return "Day(s)";
}

function parseDurationValue(text) {
  const value = String(text || "").trim();
  const rangeMatch = value.match(/(\d+)\s*(day|days|week|weeks|month|months)?\s*-\s*(\d+)\s*(day|days|week|weeks|month|months)?/i);
  if (rangeMatch) {
    const unit = parseDurationUnit(rangeMatch[2] || rangeMatch[4]);
    return { type: "Date range", min: rangeMatch[1], max: rangeMatch[3], unit };
  }
  const fixedMatch = value.match(/(\d+)\s*(day|days|week|weeks|month|months)?/i);
  const unit = parseDurationUnit(fixedMatch?.[2]);
  return { type: "Fixed days", value: fixedMatch?.[1] || "14", unit };
}

function toggleDurationRows(wrapper) {
  const isRange = getCompoundRole(wrapper, "durationType").value === "Date range";
  wrapper.querySelectorAll('[data-visibility="fixed"]').forEach((el) => { el.hidden = isRange; });
  wrapper.querySelectorAll('[data-visibility="range"]').forEach((el) => { el.hidden = !isRange; });
}

function syncDurationCompound(wrapper, display) {
  const data = parseDurationValue(display.textContent);
  getCompoundRole(wrapper, "durationType").value = data.type;
  if (data.type === "Date range") {
    getCompoundRole(wrapper, "durationMin").value = data.min;
    getCompoundRole(wrapper, "durationMax").value = data.max;
    getCompoundRole(wrapper, "durationRangeUnit").value = data.unit;
  } else {
    getCompoundRole(wrapper, "durationValue").value = data.value;
    getCompoundRole(wrapper, "durationUnit").value = data.unit;
  }
  toggleDurationRows(wrapper);
}

function computeDurationValue(wrapper) {
  const isRange = getCompoundRole(wrapper, "durationType").value === "Date range";
  if (isRange) {
    const rangeUnit = getCompoundRole(wrapper, "durationRangeUnit").value;
    const min = formatDurationPart(getCompoundRole(wrapper, "durationMin").value, rangeUnit);
    const max = formatDurationPart(getCompoundRole(wrapper, "durationMax").value, rangeUnit);
    return `${min} - ${max}`;
  }
  return formatDurationPart(getCompoundRole(wrapper, "durationValue").value, getCompoundRole(wrapper, "durationUnit").value);
}

function commitDurationCompound(wrapper, display) {
  display.textContent = computeDurationValue(wrapper);
}

function parseFeeValue(text) {
  const value = String(text || "").trim();
  const matches = [...value.matchAll(/([A-Za-z]{2,4})\s*([\d,]+(?:\.\d+)?)/g)];
  const currency = matches[0]?.[1] || "RM";
  if (matches.length >= 2) {
    return { type: "Fee range", min: matches[0][2].replace(/,/g, ""), max: matches[1][2].replace(/,/g, ""), currency };
  }
  return { type: "Fixed fee", value: matches[0]?.[2].replace(/,/g, "") || "0", currency };
}

function toggleFeeRows(wrapper) {
  const isRange = getCompoundRole(wrapper, "feeType").value === "Fee range";
  wrapper.querySelectorAll('[data-visibility="fixed"]').forEach((el) => { el.hidden = isRange; });
  wrapper.querySelectorAll('[data-visibility="range"]').forEach((el) => { el.hidden = !isRange; });
}

function syncFeeCompound(wrapper, display) {
  const data = parseFeeValue(display.textContent);
  wrapper.dataset.currency = data.currency;
  getCompoundRole(wrapper, "feeType").value = data.type;
  if (data.type === "Fee range") {
    getCompoundRole(wrapper, "feeMin").value = data.min;
    getCompoundRole(wrapper, "feeMax").value = data.max;
  } else {
    getCompoundRole(wrapper, "feeValue").value = data.value;
  }
  toggleFeeRows(wrapper);
}

function computeFeeValue(wrapper) {
  const currency = wrapper.dataset.currency || "RM";
  const isRange = getCompoundRole(wrapper, "feeType").value === "Fee range";
  if (isRange) {
    const min = Number(getCompoundRole(wrapper, "feeMin").value) || 0;
    const max = Number(getCompoundRole(wrapper, "feeMax").value) || 0;
    return `${currency} ${min.toLocaleString()} - ${currency} ${max.toLocaleString()}`;
  }
  const amount = Number(getCompoundRole(wrapper, "feeValue").value) || 0;
  return `${currency} ${amount.toLocaleString()}`;
}

function commitFeeCompound(wrapper, display) {
  display.textContent = computeFeeValue(wrapper);
}

function parseParticipantsLimit(text) {
  const match = String(text || "").match(/(\d+)\s*-\s*(\d+)\s*participants/i);
  return match ? { limitType: "Set min/max", min: match[1], max: match[2] } : { limitType: "No limit", min: "10", max: "40" };
}

function parseParticipantsWaiver(text) {
  const match = String(text || "").match(/(\d+)\s*participants?\s*waived\s*for\s*every\s*(\d+)\s*participants/i);
  return match ? { waiverType: "Set waiver", waived: match[1], every: match[2] } : { waiverType: "No waiver", waived: "1", every: "20" };
}

function toggleParticipantsRows(wrapper) {
  const showLimit = getCompoundRole(wrapper, "participantLimitType").value === "Set min/max";
  const showWaiver = getCompoundRole(wrapper, "participantWaiverType").value === "Set waiver";
  wrapper.querySelectorAll('[data-visibility="limit"]').forEach((el) => { el.hidden = !showLimit; });
  wrapper.querySelectorAll('[data-visibility="waiver"]').forEach((el) => { el.hidden = !showWaiver; });
}

function syncParticipantsCompound(wrapper, limitDisplay, waiverDisplay) {
  const limitData = parseParticipantsLimit(limitDisplay.textContent);
  const waiverData = parseParticipantsWaiver(waiverDisplay.textContent);
  getCompoundRole(wrapper, "participantLimitType").value = limitData.limitType;
  getCompoundRole(wrapper, "participantMin").value = limitData.min;
  getCompoundRole(wrapper, "participantMax").value = limitData.max;
  getCompoundRole(wrapper, "participantWaiverType").value = waiverData.waiverType;
  getCompoundRole(wrapper, "participantWaived").value = waiverData.waived;
  getCompoundRole(wrapper, "participantEvery").value = waiverData.every;
  toggleParticipantsRows(wrapper);
}

function computeParticipantsLimitValue(wrapper) {
  const limitType = getCompoundRole(wrapper, "participantLimitType").value;
  return limitType === "Set min/max"
    ? `${getCompoundRole(wrapper, "participantMin").value || "10"} - ${getCompoundRole(wrapper, "participantMax").value || "40"} participants`
    : "No participant limit";
}

function computeParticipantsWaiverValue(wrapper) {
  const waiverType = getCompoundRole(wrapper, "participantWaiverType").value;
  if (waiverType !== "Set waiver") return "No participant waiver";
  const waived = Number(getCompoundRole(wrapper, "participantWaived").value) || 1;
  const every = Number(getCompoundRole(wrapper, "participantEvery").value) || 20;
  return `${waived} participant${waived === 1 ? "" : "s"} waived for every ${every} participants`;
}

function commitParticipantsCompound(wrapper, limitDisplay, waiverDisplay) {
  limitDisplay.textContent = computeParticipantsLimitValue(wrapper);
  waiverDisplay.textContent = computeParticipantsWaiverValue(wrapper);
}

function syncListCompound(wrapper, display) {
  const container = getCompoundRole(wrapper, "listInputs");
  if (!container) return;
  const label = wrapper.dataset.listLabel || "Item";
  const items = String(display.dataset.value || "").split(",").map((item) => item.trim()).filter(Boolean);
  container.innerHTML = "";
  (items.length ? items : [""]).forEach((value) => {
    addStackedInput(container, label);
    const lastInput = container.querySelector("label:last-child input");
    if (lastInput) lastInput.value = value;
  });
}

function computeListValue(wrapper) {
  const container = getCompoundRole(wrapper, "listInputs");
  if (!container) return "";
  return [...container.querySelectorAll("input")].map((input) => input.value.trim()).filter(Boolean).join(", ");
}

function commitListCompound(wrapper, display) {
  setListField(`#${display.id}`, computeListValue(wrapper), "");
}

const PROGRAMME_COMPOUND_FIELD_HANDLERS = {
  duration: { sync: syncDurationCompound, commit: commitDurationCompound, toggle: toggleDurationRows },
  fee: { sync: syncFeeCompound, commit: commitFeeCompound, toggle: toggleFeeRows },
  list: { sync: syncListCompound, commit: commitListCompound }
};

function hasProgrammeEditsChanged() {
  let changed = false;
  const differs = (a, b) => String(a || "").trim().toLowerCase() !== String(b || "").trim().toLowerCase();
  getEditableProgrammePanels().forEach((panel) => {
    panel.querySelectorAll("[data-editable-target]").forEach((input) => {
      const display = document.getElementById(input.dataset.editableTarget);
      if (!display) return;
      const newValue = input.dataset.editableOther ? computeEditableOtherValue(input) : input.value.trim();
      if (differs(newValue, display.textContent)) changed = true;
    });
    panel.querySelectorAll("[data-editable-compound]").forEach((wrapper) => {
      const type = wrapper.dataset.editableCompound;
      if (type === "participants") {
        const limitDisplay = document.getElementById(wrapper.dataset.editableDisplayLimit);
        const waiverDisplay = document.getElementById(wrapper.dataset.editableDisplayWaiver);
        if (!limitDisplay || !waiverDisplay) return;
        if (differs(computeParticipantsLimitValue(wrapper), limitDisplay.textContent)) changed = true;
        if (differs(computeParticipantsWaiverValue(wrapper), waiverDisplay.textContent)) changed = true;
        return;
      }
      const display = document.getElementById(wrapper.dataset.editableDisplay);
      if (!display) return;
      if (type === "list") {
        if (differs(computeListValue(wrapper), display.dataset.value)) changed = true;
        return;
      }
      if (type === "duration" && differs(computeDurationValue(wrapper), display.textContent)) changed = true;
      if (type === "fee" && differs(computeFeeValue(wrapper), display.textContent)) changed = true;
    });
  });
  return changed;
}

function syncProgrammeEditableFields(panel) {
  panel.querySelectorAll("[data-editable-target]").forEach((input) => {
    const display = document.getElementById(input.dataset.editableTarget);
    if (!display) return;
    if (input.dataset.editableOther) {
      syncEditableOtherSelect(input, display);
    } else {
      input.value = display.textContent.trim();
    }
    display.hidden = true;
    input.hidden = false;
  });
  panel.querySelectorAll("[data-editable-compound]").forEach((wrapper) => {
    if (wrapper.dataset.editableCompound === "participants") {
      const limitDisplay = document.getElementById(wrapper.dataset.editableDisplayLimit);
      const waiverDisplay = document.getElementById(wrapper.dataset.editableDisplayWaiver);
      if (!limitDisplay || !waiverDisplay) return;
      syncParticipantsCompound(wrapper, limitDisplay, waiverDisplay);
      limitDisplay.hidden = true;
      waiverDisplay.hidden = true;
      wrapper.hidden = false;
      return;
    }
    const display = document.getElementById(wrapper.dataset.editableDisplay);
    const handler = PROGRAMME_COMPOUND_FIELD_HANDLERS[wrapper.dataset.editableCompound];
    if (!display || !handler) return;
    handler.sync(wrapper, display);
    display.hidden = true;
    wrapper.hidden = false;
  });
}

function commitProgrammeEditableFields(panel) {
  panel.querySelectorAll("[data-editable-target]").forEach((input) => {
    const display = document.getElementById(input.dataset.editableTarget);
    if (!display) return;
    if (input.dataset.editableOther) {
      commitEditableOtherSelect(input, display);
    } else {
      display.textContent = input.value.trim();
    }
  });
  panel.querySelectorAll("[data-editable-compound]").forEach((wrapper) => {
    if (wrapper.dataset.editableCompound === "participants") {
      const limitDisplay = document.getElementById(wrapper.dataset.editableDisplayLimit);
      const waiverDisplay = document.getElementById(wrapper.dataset.editableDisplayWaiver);
      if (!limitDisplay || !waiverDisplay) return;
      commitParticipantsCompound(wrapper, limitDisplay, waiverDisplay);
      return;
    }
    const display = document.getElementById(wrapper.dataset.editableDisplay);
    const handler = PROGRAMME_COMPOUND_FIELD_HANDLERS[wrapper.dataset.editableCompound];
    if (!display || !handler) return;
    handler.commit(wrapper, display);
  });
}

function resetProgrammeEditableFields(panel) {
  panel.querySelectorAll("[data-editable-target]").forEach((input) => {
    const display = document.getElementById(input.dataset.editableTarget);
    input.hidden = true;
    if (display) display.hidden = false;
  });
  panel.querySelectorAll(".editable-other-input").forEach((otherInput) => {
    otherInput.hidden = true;
  });
  panel.querySelectorAll("[data-editable-compound]").forEach((wrapper) => {
    wrapper.hidden = true;
    if (wrapper.dataset.editableCompound === "participants") {
      const limitDisplay = document.getElementById(wrapper.dataset.editableDisplayLimit);
      const waiverDisplay = document.getElementById(wrapper.dataset.editableDisplayWaiver);
      if (limitDisplay) limitDisplay.hidden = false;
      if (waiverDisplay) waiverDisplay.hidden = false;
      return;
    }
    const display = document.getElementById(wrapper.dataset.editableDisplay);
    if (display) display.hidden = false;
  });
}

function setProgrammeDetailsEditing(isEditing, status = programmeDetail?.dataset.programmeStatus || "") {
  const editable = canEditProgrammeDetails(status);
  const editablePanels = getEditableProgrammePanels();
  const activeEditing = editable && isEditing;
  if (programmeDetail) {
    programmeDetail.dataset.programmeStatus = status;
    programmeDetail.classList.toggle("is-editing", activeEditing);
  }
  programmeDetailTabButtons.forEach((button) => {
    const lockedDuringEdit = ["applications", "history"].includes(button.dataset.programmeTab);
    button.disabled = activeEditing && lockedDuringEdit;
    if (button.disabled) button.setAttribute("aria-disabled", "true");
    else button.removeAttribute("aria-disabled");
  });
  editablePanels.forEach((panel) => {
    panel.classList.toggle("is-editing", activeEditing);
    panel.querySelectorAll(".detail-fields strong:not(.editable-display), .programme-scope-list strong").forEach((field) => {
      if (field.closest(".programme-approval-panel")) return;
      field.contentEditable = activeEditing ? "true" : "false";
      field.spellcheck = activeEditing;
    });
    if (activeEditing) {
      syncProgrammeEditableFields(panel);
    } else {
      resetProgrammeEditableFields(panel);
    }
  });
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "";
  if (activeEditing) {
    pendingProgrammeDetailsGalleryImages = getProgrammeGalleryImages(programmeName);
    renderProgrammeDetailsGalleryGrid(pendingProgrammeDetailsGalleryImages, true);
  } else {
    renderProgrammeDetailsGalleryGrid(getProgrammeGalleryImages(programmeName), false);
  }
  if (addProgrammeDetailsGalleryImage) addProgrammeDetailsGalleryImage.hidden = !activeEditing;
  if (editProgrammeDetails) editProgrammeDetails.hidden = !editable || activeEditing || status === "draft";
  if (cancelProgrammeDetailsEdit) cancelProgrammeDetailsEdit.hidden = !activeEditing;
  if (saveProgrammeDetails) saveProgrammeDetails.hidden = !activeEditing;
}

function commitProgrammeDetailsGallery() {
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "";
  programmeGalleryImages.set(programmeName, pendingProgrammeDetailsGalleryImages.map((image) => ({ ...image })));
}

function syncActiveProgrammeRowFromDetailPage() {
  if (!activeProgrammeRow) return;
  const row = activeProgrammeRow;
  const readDetail = (id, fallback = "") => document.getElementById(id)?.textContent.trim() || fallback;
  const category = readDetail("programmeDetailCategory", row.children[1]?.textContent.trim() || "");
  const duration = readDetail("programmeDetailDuration", row.children[2]?.textContent.trim() || "");
  const fee = readDetail("programmeDetailFee", row.children[3]?.textContent.trim() || "");
  row.dataset.programmeCategory = category.toLowerCase();
  row.dataset.language = readDetail("programmeDetailLanguage", row.dataset.language || "");
  row.dataset.target = readDetail("programmeDetailTarget", row.dataset.target || "");
  row.dataset.credit = readDetail("programmeDetailCredit", row.dataset.credit || "");
  row.dataset.participants = `${readDetail("programmeDetailParticipantsLimit", "Not specified")}; ${readDetail("programmeDetailParticipantsWaiver", "No participant waiver")}`;
  row.dataset.travelTour = readDetail("programmeDetailTravelTour", row.dataset.travelTour || "");
  row.dataset.certificate = readDetail("programmeDetailCertificate", row.dataset.certificate || "");
  row.dataset.picName = readDetail("programmeDetailPicName", row.dataset.picName || "");
  row.dataset.picPhone = readDetail("programmeDetailPicPhone", row.dataset.picPhone || "");
  row.dataset.picEmail = readDetail("programmeDetailPicEmail", row.dataset.picEmail || "");
  row.dataset.picFax = readDetail("programmeDetailPicFax", row.dataset.picFax || "");
  row.dataset.outcome = document.querySelector("#programmeDetailsOutcome")?.dataset.value || row.dataset.outcome || "";
  row.dataset.inclusions = document.querySelector("#programmeDetailsInclusions")?.dataset.value || row.dataset.inclusions || "";
  row.dataset.activities = document.querySelector("#programmeDetailsActivities")?.dataset.value || row.dataset.activities || "";
  if (row.children[1]) row.children[1].textContent = category;
  if (row.children[2]) row.children[2].textContent = duration;
  if (row.children[3]) row.children[3].textContent = fee;
}

function hasProgrammeGalleryChanged() {
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "";
  const original = getProgrammeGalleryImages(programmeName);
  if (original.length !== pendingProgrammeDetailsGalleryImages.length) return true;
  return original.some((image, index) => {
    const current = pendingProgrammeDetailsGalleryImages[index];
    return !current || image.url !== current.url || image.context !== current.context;
  });
}

let programmeChangesCountdownTimer = null;

function startProgrammeChangesCountdown() {
  if (!proceedProgrammeChanges) return;
  clearInterval(programmeChangesCountdownTimer);
  let remaining = 10;
  proceedProgrammeChanges.disabled = true;
  proceedProgrammeChanges.textContent = `Please wait (${remaining}s)`;
  programmeChangesCountdownTimer = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(programmeChangesCountdownTimer);
      programmeChangesCountdownTimer = null;
      proceedProgrammeChanges.disabled = false;
      proceedProgrammeChanges.textContent = "Proceed with changes";
      return;
    }
    proceedProgrammeChanges.textContent = `Please wait (${remaining}s)`;
  }, 1000);
}

function stopProgrammeChangesCountdown() {
  clearInterval(programmeChangesCountdownTimer);
  programmeChangesCountdownTimer = null;
  if (proceedProgrammeChanges) {
    proceedProgrammeChanges.disabled = false;
    proceedProgrammeChanges.textContent = "Proceed with changes";
  }
}

function openProgrammeChangesModal() {
  if (programmeChangesModal) programmeChangesModal.hidden = false;
  startProgrammeChangesCountdown();
}

function closeProgrammeChangesModal() {
  if (programmeChangesModal) programmeChangesModal.hidden = true;
  stopProgrammeChangesCountdown();
}

const PROGRAMME_FIELD_ISSUES = [
  {
    key: "target",
    displayId: "programmeDetailTargetIssue",
    default: "Target group must match the programme audience submitted to KPT.",
    rejected: "Rejected reason: Target group and activities were not aligned with the programme objectives."
  },
  {
    key: "duration",
    displayId: "programmeDetailDurationIssue",
    default: "Duration needs clarification. KPT requested a clearer programme duration.",
    rejected: "Rejected reason: Duration did not match the approved programme scope."
  },
  {
    key: "fee",
    displayId: "programmeDetailFeeIssue",
    default: "Fee needs clarification. KPT requested a clearer fee amount and currency.",
    rejected: "Rejected reason: Fee justification was not strong enough for the submitted scope."
  },
  {
    key: "participants",
    displayId: "programmeDetailParticipantsIssue",
    default: "Participant limits and waivers must match what KPT reviewed.",
    rejected: "Rejected reason: Participant limits and waivers were not clearly justified."
  },
  {
    key: "learning",
    displayId: "programmeDetailsOutcomeIssue",
    default: "Learning outcomes are too broad. Add a measurable outcome for participants.",
    rejected: "Rejected reason: Learning outcomes did not show measurable academic value."
  }
];

function getProgrammeFieldIssueText(key, rejected) {
  const issue = PROGRAMME_FIELD_ISSUES.find((item) => item.key === key);
  if (!issue) return "";
  return rejected ? issue.rejected : issue.default;
}

function renderProgrammeFieldIssues(status) {
  const active = ["changes requested", "rejected"].includes(status);
  const rejected = status === "rejected";
  PROGRAMME_FIELD_ISSUES.forEach((issue) => {
    const el = document.getElementById(issue.displayId);
    if (!el) return;
    el.hidden = !active;
    if (active) el.textContent = rejected ? issue.rejected : issue.default;
  });
}

const PROGRAMME_FIELD_ISSUE_LABELS = {
  target: "Target Group",
  duration: "Duration",
  fee: "Fee",
  participants: "Participants",
  learning: "Learning Outcome"
};

function getUnresolvedProgrammeFieldIssues(status) {
  if (!["changes requested", "rejected"].includes(status)) return [];
  const differs = (a, b) => String(a || "").trim().toLowerCase() !== String(b || "").trim().toLowerCase();
  const unresolved = [];

  const targetSelect = document.querySelector('#programmeDetail [data-editable-target="programmeDetailTarget"]');
  const targetDisplay = document.getElementById("programmeDetailTarget");
  if (targetSelect && targetDisplay && !differs(computeEditableOtherValue(targetSelect), targetDisplay.textContent)) {
    unresolved.push("target");
  }

  const durationWrapper = document.querySelector('#programmeDetail [data-editable-compound="duration"]');
  const durationDisplay = document.getElementById("programmeDetailDuration");
  if (durationWrapper && durationDisplay && !differs(computeDurationValue(durationWrapper), durationDisplay.textContent)) {
    unresolved.push("duration");
  }

  const feeWrapper = document.querySelector('#programmeDetail [data-editable-compound="fee"]');
  const feeDisplay = document.getElementById("programmeDetailFee");
  if (feeWrapper && feeDisplay && !differs(computeFeeValue(feeWrapper), feeDisplay.textContent)) {
    unresolved.push("fee");
  }

  const participantsWrapper = document.querySelector('#programmeDetail [data-editable-compound="participants"]');
  const limitDisplay = document.getElementById("programmeDetailParticipantsLimit");
  const waiverDisplay = document.getElementById("programmeDetailParticipantsWaiver");
  if (participantsWrapper && limitDisplay && waiverDisplay) {
    const limitChanged = differs(computeParticipantsLimitValue(participantsWrapper), limitDisplay.textContent);
    const waiverChanged = differs(computeParticipantsWaiverValue(participantsWrapper), waiverDisplay.textContent);
    if (!limitChanged && !waiverChanged) unresolved.push("participants");
  }

  const learningWrapper = document.querySelector('#programmeDetail [data-editable-compound="list"][data-editable-display="programmeDetailsOutcome"]');
  const learningDisplay = document.getElementById("programmeDetailsOutcome");
  if (learningWrapper && learningDisplay && !differs(computeListValue(learningWrapper), learningDisplay.dataset.value)) {
    unresolved.push("learning");
  }

  return unresolved;
}

function openProgrammeRequiredChangesWarning(unresolvedKeys) {
  const list = unresolvedKeys.map((key) => PROGRAMME_FIELD_ISSUE_LABELS[key] || key).join(", ");
  openProgrammeActionConfirm(
    "Required changes not made",
    `KPT requested changes to: ${list}. Please update ${unresolvedKeys.length === 1 ? "this field" : "these fields"} before it can be sent back to KPT.`,
    () => {},
    "Got it"
  );
}

function openRequestedChangesModal(mode = "changes requested") {
  const rejected = mode === "rejected";
  if (requestedChangesTitle) requestedChangesTitle.textContent = rejected ? "Edit rejected programme" : "Edit requested changes";
  if (requestedProgrammeFeeNote) requestedProgrammeFeeNote.textContent = getProgrammeFieldIssueText("fee", rejected);
  if (requestedProgrammeLearningNote) requestedProgrammeLearningNote.textContent = getProgrammeFieldIssueText("learning", rejected);
  if (requestedProgrammeTargetNote) requestedProgrammeTargetNote.textContent = getProgrammeFieldIssueText("target", rejected);
  if (requestedProgrammeDurationNote) requestedProgrammeDurationNote.textContent = getProgrammeFieldIssueText("duration", rejected);
  if (requestedProgrammeParticipantsNote) requestedProgrammeParticipantsNote.textContent = getProgrammeFieldIssueText("participants", rejected);
  if (requestedProgrammeDurationCompound && requestedProgrammeDurationDisplay) {
    requestedProgrammeDurationDisplay.textContent = document.querySelector("#programmeDetailDuration")?.textContent.trim() || "";
    syncDurationCompound(requestedProgrammeDurationCompound, requestedProgrammeDurationDisplay);
  }
  if (requestedProgrammeFeeCompound && requestedProgrammeFeeDisplay) {
    requestedProgrammeFeeDisplay.textContent = document.querySelector("#programmeDetailFee")?.textContent.trim() || "";
    syncFeeCompound(requestedProgrammeFeeCompound, requestedProgrammeFeeDisplay);
  }
  if (requestedProgrammeParticipantsCompound && requestedProgrammeParticipantsLimitDisplay && requestedProgrammeParticipantsWaiverDisplay) {
    requestedProgrammeParticipantsLimitDisplay.textContent = document.querySelector("#programmeDetailParticipantsLimit")?.textContent.trim() || "";
    requestedProgrammeParticipantsWaiverDisplay.textContent = document.querySelector("#programmeDetailParticipantsWaiver")?.textContent.trim() || "";
    syncParticipantsCompound(requestedProgrammeParticipantsCompound, requestedProgrammeParticipantsLimitDisplay, requestedProgrammeParticipantsWaiverDisplay);
  }
  if (requestedProgrammeLearning) requestedProgrammeLearning.value = document.querySelector("#programmeDetailsOutcome")?.dataset.value || "";
  if (requestedProgrammeTarget) requestedProgrammeTarget.value = document.querySelector("#programmeDetailTarget")?.textContent.trim() || "General Public (including student)";
  if (requestedChangesModal) requestedChangesModal.dataset.mode = mode;
  if (requestedChangesModal) requestedChangesModal.hidden = false;
}

function closeRequestedChangesModal() {
  if (requestedChangesModal) requestedChangesModal.hidden = true;
}

function openKptNoticeModal(status) {
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const details = {
    "pending kpt approval": {
      title: "Submission sent to KPT",
      rows: [
        ["Programme", programmeName],
        ["Submitted", "10 Aug 2026 by University Admin"],
        ["Current KPT state", "Waiting for KPT review"],
        ["Submitted items", "Overview, fees, learning scope, activities, gallery, target group"],
        ["KPT note", "Submission received. KPT review is pending before this programme can open for applications."]
      ]
    },
    resubmitted: {
      title: "Post-approval changes resubmitted",
      rows: [
        ["Programme", programmeName],
        ["First approved", "13 Aug 2026 by KPT Demo"],
        ["Resubmitted", "17 Aug 2026 by University Admin"],
        ["Changed items", "Fee display, programme overview, and learning scope"],
        ["KPT note", "Post-approval changes are being reviewed. Existing application history remains available."]
      ]
    },
    rejected: {
      title: "KPT rejection details",
      rows: [
        ["Programme", programmeName],
        ["Rejected", "13 Aug 2026 by KPT Demo"],
        ["Reason", "Programme scope and assessment evidence did not meet approval requirements."],
        ["KPT note", "This rejected submission cannot be edited. The university must prepare a new programme submission."],
        ["Next suggested action", "Create a new programme with clearer learning outcomes, fee justification, and activity evidence."]
      ]
    },
    draft: {
      title: "Draft submission checklist",
      rows: [
        ["Programme", programmeName],
        ["Draft created", "13 Aug 2026 by University Admin"],
        ["Missing before submission", "Complete overview, fee, learning scope, gallery, target group, and activities."],
        ["KPT note", "This programme has not been submitted to KPT yet."],
        ["Next suggested action", "Complete the required fields and submit to KPT for approval."]
      ]
    }
  };
  const item = details[status] || {
    title: "Programme status details",
    rows: [
      ["Programme", programmeName],
      ["Status", status || "Not available"],
      ["Note", "No additional KPT message has been added for this prototype status."]
    ]
  };
  if (kptNoticeTitle) kptNoticeTitle.textContent = item.title;
  if (kptNoticeBody) {
    kptNoticeBody.innerHTML = item.rows.map(([label, value]) => `
      <div>
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `).join("");
  }
  if (kptNoticeModal) kptNoticeModal.hidden = false;
}

function closeKptNoticeModal() {
  if (kptNoticeModal) kptNoticeModal.hidden = true;
}

function setActiveProgrammeTab(tabName = "overview") {
  programmeDetailTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.programmeTab === tabName);
  });
  programmeDetailPanels.forEach((panel) => {
    const active = panel.dataset.programmePanel === tabName;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
}

function renderProgrammeDetailTabs(status) {
  const postApproval = ["published", "unpublish"].includes(status);
  programmeDetailTabButtons.forEach((button) => {
    const tab = button.dataset.programmeTab;
    const visible = tab === "overview" || tab === "details" || (status === "resubmitted" ? ["approval", "applications", "history"].includes(tab) : (postApproval ? ["applications", "history"].includes(tab) : tab === "approval"));
    button.hidden = !visible;
  });
  renderProgrammeApprovalTimeline(status);
}

function renderProgrammeHistoryTimeline(status) {
  const timeline = document.querySelector("#programmeHistoryTimeline");
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const baseItems = [
    {
      title: "Programme created",
      date: "8 Aug 2026 by University Admin",
      body: `${programmeName} was created as a university programme draft.`
    },
    {
      title: "Programme submitted to KPT",
      date: "10 Aug 2026 by University Admin",
      body: "Programme details, fees, learning scope, activities, and gallery were submitted for KPT review."
    },
    {
      title: "KPT approved the programme",
      date: "13 Aug 2026 by KPT Demo",
      body: "The programme received KPT approval and became eligible for publishing."
    }
  ];
  const statusItems = {
    resubmitted: [
      {
        title: "Programme details edited after approval",
        date: "16 Aug 2026 by University Admin",
        body: "The university updated approved programme details and prepared the changes for KPT confirmation."
      },
      {
        title: "Changes resubmitted to KPT",
        date: "17 Aug 2026 by University Admin",
        body: "The post-approval changes were submitted to KPT while historical applications remain available."
      }
    ],
    approved: [
      {
        title: "KPT approval granted",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme is approved. KPT will launch it when it is ready to open for public applications."
      }
    ],
    live: [
      {
        title: "Programme launched",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT launched the programme and applications were opened."
      }
    ],
    archived: [
      {
        title: "Programme launched",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT launched the programme and applications were opened."
      },
      {
        title: "Programme archived",
        date: "17 Aug 2026 by University Admin",
        body: "The programme was archived after its intake period. Historical applicant records remain available."
      }
    ]
  };
  const items = [...baseItems, ...(statusItems[status] || [])];
  if (!timeline) return;
  timeline.innerHTML = [...items].reverse().map((item) => `
    <div class="activity-item">
      <strong>${item.title}</strong>
      <span>${item.date}</span>
      <p>${item.body}</p>
    </div>
  `).join("");
}

function getProgrammeApprovalTimelineItems(status, programmeName = "Programme") {
  const submittedItem = {
    title: "Programme submitted to KPT",
    date: "10 Aug 2026 by University Admin",
    body: `${programmeName} was submitted for KPT approval with programme overview, fees, learning scope, activities, and gallery details.`
  };
  const timelineItems = {
    "pending kpt approval": [
      submittedItem,
      {
        title: "Waiting for KPT review",
        date: "13 Aug 2026 by KPT Demo",
        body: "KPT has received the submission. No public applications can open until approval is granted."
      }
    ],
    "changes requested": [
      submittedItem,
      {
        title: "KPT requested changes",
        date: "13 Aug 2026 by KPT Demo",
        body: "Clarify the programme duration and fee, add learning outcomes, and update target group details before resubmission.",
        sections: [
          { label: "Duration", note: "Clarify the programme duration before resubmission." },
          { label: "Fees", note: "Clarify the programme fee and supporting details." },
          { label: "Learning Outcome", note: "Add measurable learning outcomes for participants." },
          { label: "Target Group", note: "Update the target group details to match the programme scope." }
        ]
      }
    ],
    resubmitted: [
      {
        title: "Post-approval changes resubmitted to KPT",
        date: "17 Aug 2026 by University Admin",
        body: `${programmeName} has approved history. The latest edited programme details were resubmitted to KPT for confirmation.`
      },
      {
        title: "Waiting for KPT confirmation",
        date: "17 Aug 2026 by KPT Demo",
        body: "KPT confirmation is pending for the post-approval changes."
      }
    ],
    rejected: [
      submittedItem,
      {
        title: "KPT rejected the submission",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme was declined at this stage. Review the rejection reason before preparing a revised submission."
      }
    ],
    draft: [
      {
        title: "Draft programme created",
        date: "13 Aug 2026 by University Admin",
        body: "The programme is still being prepared and has not been submitted to KPT."
      }
    ],
    approved: [
      submittedItem,
      {
        title: "KPT approved the programme",
        date: "13 Aug 2026 by KPT Demo",
        body: "The programme is approved and can be prepared for publishing."
      }
    ]
  };
  return timelineItems[status] || [
    {
      title: "No approval updates",
      date: "13 Aug 2026",
      body: "No KPT approval timeline is available for this programme status."
    }
  ];
}

function renderProgrammeApprovalTimeline(status) {
  const timeline = document.querySelector("#programmeApprovalTimeline");
  const programmeName = document.querySelector("#programmeDetailName")?.textContent.trim() || "Programme";
  const items = getProgrammeApprovalTimelineItems(status, programmeName);
  if (!timeline) return;
  timeline.innerHTML = [...items].reverse().map((item) => `
    <div class="activity-item">
      <strong>${item.title}</strong>
      <span>${item.date}</span>
      <p>${item.body}</p>
    </div>
  `).join("");
}

function renderProgrammeStatusNotice(status) {
  const notice = document.querySelector("#programmeStatusNotice");
  const title = document.querySelector("#programmeStatusNoticeTitle");
  const body = document.querySelector("#programmeStatusNoticeBody");
  const action = document.querySelector("#programmeStatusNoticeAction");
  const notices = {
    "pending kpt approval": {
      title: "This programme is waiting for KPT approval.",
      body: "No applicant applications can open until KPT has approved this programme."
    },
    "changes requested": {
      title: "KPT has requested changes before this programme can be approved.",
      body: "Requested changes: clarify programme duration and fee, add learning outcomes, and update target group details.",
      action: "Edit requested changes"
    },
    resubmitted: {
      title: "This programme has been resubmitted to KPT.",
      body: "The requested changes were sent back to KPT. Wait for the next KPT decision before publishing.",
      action: "View resubmission"
    },
    rejected: {
      title: "KPT rejected this programme submission.",
      body: "Review the rejection reason before creating a revised programme or preparing a new submission.",
      action: "View rejection details"
    },
    draft: {
      title: "This programme is still a draft.",
      body: "Complete the required programme details, then save or submit it to KPT for approval.",
      action: "Continue editing"
    }
  };
  const item = notices[status];
  if (!notice || !title || !body || !action) return;
  notice.hidden = !item;
  if (!item) return;
  title.textContent = item.title;
  body.textContent = item.body;
  action.hidden = !item.action;
  if (item.action) {
    action.textContent = item.action;
    action.dataset.noticeAction = ["changes requested", "draft"].includes(status) ? status : "";
    action.dataset.noticeStatus = status;
  }
}

function cancelProgrammeCreateForm() {
  const row = editingDraftRow;
  editingDraftRow = null;
  if (row) {
    showProgrammeDetail(row);
    return;
  }
  showProgrammesList();
}
createProgramme?.addEventListener("click", () => {
  editingDraftRow = null;
  resetProgrammeCreateForm();
  if (programmeCreateHeading) programmeCreateHeading.textContent = "Create New Programme";
  if (programmeCreateSubheading) programmeCreateSubheading.textContent = "Add a new Edutourism programme for international students.";
  if (saveProgrammeDraft) saveProgrammeDraft.textContent = "Save Draft";
  showProgrammeCreateForm();
});
cancelProgrammeCreate?.addEventListener("click", cancelProgrammeCreateForm);
backToProgrammes?.addEventListener("click", cancelProgrammeCreateForm);
backToProgrammesFromDetail?.addEventListener("click", showProgrammesList);
programmeDetailTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveProgrammeTab(button.dataset.programmeTab));
});
editUniversityProfile?.addEventListener("click", () => {
  setUniversityProfileEditing(true, "university");
});
cancelUniversityProfile?.addEventListener("click", () => {
  setUniversityProfileEditing(false, "university");
});
changeUniversityLogo?.addEventListener("click", () => {
  universityLogoUpload?.click();
});
universityLogoUpload?.addEventListener("change", () => {
  const file = universityLogoUpload.files?.[0];
  if (!file) return;
  const logoUrl = URL.createObjectURL(file);
  if (profileLogoImage) profileLogoImage.src = logoUrl;
  if (brandLogo) brandLogo.src = logoUrl;
});
editProfileContact?.addEventListener("click", () => {
  setUniversityProfileEditing(true, "contact");
});
cancelProfileContact?.addEventListener("click", () => {
  setUniversityProfileEditing(false, "contact");
});
createProgrammePicDefault?.addEventListener("change", () => {
  setCreateProgrammeDefaultContact(createProgrammePicDefault.checked, !createProgrammePicDefault.checked);
});
profileSaveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const scope = button.dataset.profileSave || "university";
    openProgrammeActionConfirm(
      "Save profile changes?",
      "This will update the university profile details in the demo.",
      () => setUniversityProfileEditing(false, scope),
      "Save"
    );
  });
});
function attachKptRequestActions() {
  document.querySelectorAll("[data-kpt-request-action]").forEach((button) => {
    button.onclick = () => {
    const row = button.closest("tr");
    const action = button.dataset.kptRequestAction;
    const requestName = row?.querySelector("strong")?.textContent.trim() || "KPT request";
    if (action === "reply") {
      openKptComplianceReply(row);
      return;
    }
    if (kptNoticeTitle) kptNoticeTitle.textContent = requestName;
    if (kptNoticeBody) {
      kptNoticeBody.innerHTML = `
        <div class="notice-detail-grid">
          <div><span>Request</span><strong>${requestName}</strong></div>
          <div><span>Status</span><strong>${row?.children[3]?.textContent.trim() || "Recorded"}</strong></div>
          <div><span>KPT message</span><strong>${row?.children[1]?.textContent.trim() || "No action required."}</strong></div>
          <div><span>Due Date</span><strong>${row?.children[2]?.textContent.trim() || "-"}</strong></div>
        </div>
      `;
    }
    if (kptNoticeModal) kptNoticeModal.hidden = false;
    };
  });
}
attachKptRequestActions();
closeKptComplianceReply?.addEventListener("click", closeKptComplianceReplyModal);
cancelKptComplianceReply?.addEventListener("click", closeKptComplianceReplyModal);
sendKptComplianceReply?.addEventListener("click", sendKptComplianceReplyToKpt);
addUserButton?.addEventListener("click", openAddUserModal);
currentUserRole?.addEventListener("change", applyCurrentUserRole);
[auditUserFilter, auditActionFilter, auditEntityFilter, auditDateFilter].forEach((control) => {
  control?.addEventListener("change", updateAuditRows);
});
auditSearch?.addEventListener("input", updateAuditRows);
auditApply?.addEventListener("click", updateAuditRows);
helpTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveHelpTab(button.dataset.helpTab));
});
profileTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.profileTab;
    profileTabButtons.forEach((item) => item.classList.toggle("active", item === button));
    profileTabPanels.forEach((panel) => {
      const isActive = panel.dataset.profilePanel === tab;
      panel.hidden = !isActive;
      panel.classList.toggle("active", isActive);
    });
  });
});
submitSupportRequest?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit support request?",
    "This will send the support request in the demo and clear the form.",
    () => {
      if (supportSubject) supportSubject.value = "";
      if (supportMessage) supportMessage.value = "";
    },
    "Submit"
  );
});
settingsTabButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveSettingsTab(button.dataset.settingsTab));
});
settingsToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const label = toggle.closest(".settings-toggle-row")?.querySelector("strong")?.textContent.trim() || "setting";
    addAuditRecord({ action: `${toggle.checked ? "Enabled" : "Disabled"} ${label}`, entity: "Settings" });
  });
});
helpSupportVisibilityToggle?.addEventListener("change", () => {
  const isVisible = helpSupportVisibilityToggle.checked;
  try {
    localStorage.setItem("universityDashboard.helpSupportVisible", String(isVisible));
  } catch (error) {
    // Keep the setting functional when browser storage is unavailable.
  }
  applyHelpSupportVisibility();
  addAuditRecord({ action: `${isVisible ? "Enabled" : "Disabled"} Help & Support menu`, entity: "Settings" });
});
updatePasswordButton?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Update password?",
    "This will update your account password in the demo.",
    () => {
      settingsPasswordInputs.forEach((input) => {
        input.value = "";
      });
    },
    "Update"
  );
});
sessionList?.addEventListener("click", (event) => {
  const revokeButton = event.target.closest("#revokeSessionButton");
  if (!revokeButton) return;
  openProgrammeActionConfirm(
    "Revoke previous session?",
    "This will remove the previous login session from this account.",
    () => {
      revokeButton.closest(".session-row")?.remove();
    },
    "Revoke"
  );
});
closeAddUser?.addEventListener("click", closeAddUserModal);
cancelAddUser?.addEventListener("click", closeAddUserModal);
addUserModal?.addEventListener("click", (event) => {
  if (event.target === addUserModal) event.stopPropagation();
});
submitAddUser?.addEventListener("click", () => {
  const isEditingUser = Boolean(editingUserRow);
  openProgrammeActionConfirm(
    isEditingUser ? "Save user changes?" : "Add this user?",
    isEditingUser ? "This will update the selected user's role and account status." : "This will create a new staff login with the selected role and temporary password.",
    addUserRow,
    isEditingUser ? "Save Changes" : "Add User"
  );
});
userTableBody?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-user-action]");
  if (!button) return;
  if ((currentUserRole?.value || "superadmin") !== "superadmin") {
    openProgrammeActionConfirm("Super Admin required", "Only Super Admin users can edit roles or change account access.", () => {}, "OK");
    return;
  }
  const row = button.closest("tr");
  const action = button.dataset.userAction;
  if (action === "edit") {
    openEditUserModal(row);
  }
});
editProgrammeDetails?.addEventListener("click", () => {
  setActiveProgrammeTab("overview");
  setProgrammeDetailsEditing(true);
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
function handleCompoundToggleChange(event) {
  const select = event.target.closest("select[data-editable-other]");
  if (select) {
    const otherInput = document.getElementById(select.dataset.editableOther);
    if (otherInput) otherInput.hidden = select.value !== select.dataset.editableOtherTrigger;
    return;
  }
  const compoundWrapper = event.target.closest("[data-editable-compound]");
  if (compoundWrapper) {
    if (compoundWrapper.dataset.editableCompound === "participants") {
      toggleParticipantsRows(compoundWrapper);
      return;
    }
    PROGRAMME_COMPOUND_FIELD_HANDLERS[compoundWrapper.dataset.editableCompound]?.toggle?.(compoundWrapper);
  }
}
programmeDetail?.addEventListener("change", handleCompoundToggleChange);
requestedChangesModal?.addEventListener("change", handleCompoundToggleChange);
programmeDetail?.addEventListener("click", (event) => {
  const addButton = event.target.closest('[data-role="listAddButton"]');
  if (addButton) {
    const wrapper = addButton.closest("[data-editable-compound]");
    const container = wrapper ? getCompoundRole(wrapper, "listInputs") : null;
    if (container) addStackedInput(container, wrapper.dataset.listLabel || "Item");
    return;
  }
  removeStackedInput(event);
});
cancelProgrammeDetailsEdit?.addEventListener("click", () => {
  setProgrammeDetailsEditing(false);
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
saveProgrammeDetails?.addEventListener("click", () => {
  const status = programmeDetail?.dataset.programmeStatus || "";
  const unresolvedIssues = getUnresolvedProgrammeFieldIssues(status);
  if (unresolvedIssues.length) {
    openProgrammeRequiredChangesWarning(unresolvedIssues);
    return;
  }
  if (!hasProgrammeEditsChanged() && !hasProgrammeGalleryChanged()) {
    setProgrammeDetailsEditing(false);
    return;
  }
  openProgrammeChangesModal();
});
closeProgrammeChanges?.addEventListener("click", closeProgrammeChangesModal);
cancelProgrammeChanges?.addEventListener("click", closeProgrammeChangesModal);
proceedProgrammeChanges?.addEventListener("click", () => {
  closeProgrammeChangesModal();
  const applyProgrammeEdits = () => {
    getEditableProgrammePanels().forEach((panel) => commitProgrammeEditableFields(panel));
    commitProgrammeDetailsGallery();
    syncActiveProgrammeRowFromDetailPage();
    setProgrammeDetailsEditing(false);
    if (programmeEditWarning) programmeEditWarning.hidden = false;
    updateActiveProgrammeStatus("Resubmitted", "status-chip blue");
    addAuditRecord({ action: `Edited approved programme details for ${getProgrammeAuditName()}`, entity: "Programme" });
  };
  const normalizedStatus = programmeDetail?.dataset.programmeStatus || "";
  if (["published", "unpublish"].includes(normalizedStatus)) {
    openProgrammeActionConfirm(
      "Confirm submission to KPT?",
      "This programme will be taken off the public listing until KPT reviews and re-approves these changes. Are you sure you want to continue?",
      applyProgrammeEdits,
      "Yes, submit for approval"
    );
    return;
  }
  applyProgrammeEdits();
});
confirmProgrammeChanges?.addEventListener("click", () => {
  if (programmeEditWarning) programmeEditWarning.hidden = true;
});
programmeStatusNoticeAction?.addEventListener("click", () => {
  const action = programmeStatusNoticeAction.dataset.noticeAction;
  if (action === "changes requested") {
    openRequestedChangesModal(action);
    return;
  }
  if (action === "draft") {
    openDraftProgrammeEditor(activeProgrammeRow);
    return;
  }
  openKptNoticeModal(programmeStatusNoticeAction.dataset.noticeStatus || "");
});
closeRequestedChanges?.addEventListener("click", closeRequestedChangesModal);
cancelRequestedChanges?.addEventListener("click", closeRequestedChangesModal);
submitRequestedChanges?.addEventListener("click", () => {
  openProgrammeActionConfirm(
    "Submit changes to KPT?",
    "This will update the programme details and move the programme back to Pending KPT Approval.",
    applyRequestedProgrammeChanges,
    "Submit"
  );
});
closeKptNotice?.addEventListener("click", closeKptNoticeModal);
doneKptNotice?.addEventListener("click", closeKptNoticeModal);

programmeDetailsGalleryGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-gallery-action]");
  if (!button) return;
  const index = Number(button.dataset.index);
  const action = button.dataset.galleryAction;
  if (action === "view") {
    const title = pendingProgrammeDetailsGalleryImages[index]?.context || "Programme image";
    openPreviewModal(title, "programme gallery");
    return;
  }
  if (action === "replace") {
    programmeDetailsGalleryReplaceIndex = index;
    if (programmeDetailsGalleryInput) {
      programmeDetailsGalleryInput.multiple = false;
      programmeDetailsGalleryInput.click();
    }
    return;
  }
  if (action === "remove") {
    const image = pendingProgrammeDetailsGalleryImages[index];
    if (image?.url) URL.revokeObjectURL(image.url);
    pendingProgrammeDetailsGalleryImages.splice(index, 1);
    renderProgrammeDetailsGalleryGrid(pendingProgrammeDetailsGalleryImages, true);
  }
});
addProgrammeDetailsGalleryImage?.addEventListener("click", () => {
  programmeDetailsGalleryReplaceIndex = null;
  if (programmeDetailsGalleryInput) {
    programmeDetailsGalleryInput.multiple = true;
    programmeDetailsGalleryInput.click();
  }
});
programmeDetailsGalleryInput?.addEventListener("change", () => {
  const files = [...(programmeDetailsGalleryInput.files || [])];
  if (!files.length) return;
  if (programmeDetailsGalleryReplaceIndex !== null) {
    const index = programmeDetailsGalleryReplaceIndex;
    const previous = pendingProgrammeDetailsGalleryImages[index];
    if (previous?.url) URL.revokeObjectURL(previous.url);
    pendingProgrammeDetailsGalleryImages[index] = { url: URL.createObjectURL(files[0]), context: files[0].name };
    programmeDetailsGalleryReplaceIndex = null;
  } else {
    const availableSlots = Math.max(0, 10 - pendingProgrammeDetailsGalleryImages.length);
    files.slice(0, availableSlots).forEach((file) => {
      pendingProgrammeDetailsGalleryImages.push({ url: URL.createObjectURL(file), context: file.name });
    });
  }
  programmeDetailsGalleryInput.value = "";
  renderProgrammeDetailsGalleryGrid(pendingProgrammeDetailsGalleryImages, true);
});

function addStackedInput(container, labelPrefix) {
  if (!container) return;
  const nextNumber = container.querySelectorAll("label").length + 1;
  const label = document.createElement("label");
  const input = document.createElement("input");
  const button = document.createElement("button");
  input.type = "text";
  input.placeholder = labelPrefix === "Conditional question"
    ? "e.g., Type a question for applicants"
    : `${labelPrefix} ${nextNumber}`;
  input.setAttribute("aria-label", `${labelPrefix} ${nextNumber}`);
  button.type = "button";
  button.textContent = "X";
  button.dataset.removeItem = "";
  button.setAttribute("aria-label", `Remove ${labelPrefix.toLowerCase()}`);
  label.append(input, button);
  container.appendChild(label);
}

function addBlankStackedInput(container, labelPrefix) {
  if (!container) return;
  const nextNumber = container.querySelectorAll("label").length + 1;
  const label = document.createElement("label");
  const input = document.createElement("input");
  const button = document.createElement("button");
  input.type = "text";
  input.placeholder = `${labelPrefix} ${nextNumber}`;
  input.setAttribute("aria-label", `${labelPrefix} ${nextNumber}`);
  button.type = "button";
  button.textContent = "X";
  button.dataset.removeItem = "";
  button.setAttribute("aria-label", `Remove ${labelPrefix.toLowerCase()}`);
  label.append(input, button);
  container.appendChild(label);
}

function syncProgrammeCreateConditionalFields() {
  const usesDurationRange = createProgrammeDurationType?.value === "Date range";
  const usesFeeRange = createProgrammeFeeType?.value === "Fee range";
  const usesOtherTarget = createProgrammeTarget?.value === "Others";
  const usesParticipantLimit = createProgrammeParticipantLimitType?.value === "Set min/max";
  const usesParticipantWaiver = createProgrammeWaiverType?.value === "Set waiver";
  const usesOtherCredit = createProgrammeCredit?.querySelector('input[name="createProgrammeCredit"]:checked')?.value === "Others";
  const usesTravelAgency = createProgrammeTravelTour?.value === "Registered Travel Agency";
  const usesOtherCertificate = createProgrammeCertificateType?.value === "Others";
  if (createProgrammeDuration) {
    createProgrammeDuration.closest(".request-textbox").hidden = usesDurationRange;
  }
  if (createProgrammeDurationRangeFields) createProgrammeDurationRangeFields.hidden = !usesDurationRange;
  if (createProgrammeFee) {
    createProgrammeFee.closest(".request-textbox").hidden = usesFeeRange;
  }
  if (createProgrammeFeeRangeFields) createProgrammeFeeRangeFields.hidden = !usesFeeRange;
  if (createProgrammeTargetOtherField) createProgrammeTargetOtherField.hidden = !usesOtherTarget;
  if (createProgrammeParticipantLimitFields) createProgrammeParticipantLimitFields.hidden = !usesParticipantLimit;
  if (createProgrammeWaiverFields) createProgrammeWaiverFields.hidden = !usesParticipantWaiver;
  if (createProgrammeCreditOther) createProgrammeCreditOther.hidden = !usesOtherCredit;
  if (createProgrammeTravelAgencyField) createProgrammeTravelAgencyField.hidden = !usesTravelAgency;
  if (createProgrammeCertificateOtherField) createProgrammeCertificateOtherField.hidden = !usesOtherCertificate;
  updateProgrammeWaiverPreview();
}

function removeStackedInput(event) {
  const button = event.target.closest("[data-remove-item]");
  if (!button) return;
  const container = button.closest(".stacked-inputs");
  const minimumItems = Number(container?.dataset.minimumItems || "1");
  if (container?.querySelectorAll("label").length > minimumItems) {
    button.closest("label")?.remove();
  }
}

addProgrammeActivity?.addEventListener("click", () => addStackedInput(programmeActivities, "Activity"));
addProgrammeConditionalQuestion?.addEventListener("click", () => addStackedInput(programmeConditionalQuestions, "Conditional question"));
addProgrammeLearningScope?.addEventListener("click", () => addStackedInput(programmeLearningScopes, "Learning outcome"));
addProgrammeInclusion?.addEventListener("click", () => addBlankStackedInput(programmeInclusions, "Included item"));
programmeActivities?.addEventListener("click", removeStackedInput);
programmeConditionalQuestions?.addEventListener("click", removeStackedInput);
programmeLearningScopes?.addEventListener("click", removeStackedInput);
programmeInclusions?.addEventListener("click", removeStackedInput);
createProgrammeDurationType?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeFeeType?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeTarget?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeParticipantLimitType?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeWaiverType?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeWaivedParticipants?.addEventListener("input", updateProgrammeWaiverPreview);
createProgrammeWaiverEveryParticipants?.addEventListener("input", updateProgrammeWaiverPreview);
createProgrammeCredit?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeTravelTour?.addEventListener("change", syncProgrammeCreateConditionalFields);
createProgrammeCertificateType?.addEventListener("change", syncProgrammeCreateConditionalFields);
browseProgrammeGallery?.addEventListener("click", () => createProgrammeGallery?.click());
createProgrammeGallery?.addEventListener("change", () => {
  const files = [...(createProgrammeGallery.files || [])];
  const availableSlots = Math.max(0, 10 - pendingProgrammeGalleryImages.length);
  files.slice(0, availableSlots).forEach((file) => {
    pendingProgrammeGalleryImages.push({
      name: file.name,
      url: URL.createObjectURL(file),
      context: ""
    });
  });
  createProgrammeGallery.value = "";
  renderCreateProgrammeGallery();
});
programmeGalleryPreview?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-remove]");
  if (!button) return;
  const index = Number(button.dataset.galleryRemove);
  const [removed] = pendingProgrammeGalleryImages.splice(index, 1);
  if (removed) URL.revokeObjectURL(removed.url);
  renderCreateProgrammeGallery();
});
programmeGalleryPreview?.addEventListener("input", (event) => {
  const input = event.target.closest("[data-gallery-context]");
  if (!input) return;
  const image = pendingProgrammeGalleryImages[Number(input.dataset.galleryContext)];
  if (image) image.context = input.value;
});
saveProgrammeDraft?.addEventListener("click", () => {
  if (editingDraftRow) {
    const row = editingDraftRow;
    openProgrammeActionConfirm(
      "Save changes to this draft?",
      "This will update the draft programme with your changes. It will not be submitted to KPT yet.",
      () => {
        updateProgrammeRowFromForm(row, "Draft");
        editingDraftRow = null;
      },
      "Save"
    );
    return;
  }
  openProgrammeActionConfirm(
    "Save this programme as draft?",
    "This will add the programme to the table as a draft. It will not be submitted to KPT yet.",
    () => createProgrammeRow("Draft"),
    "Save"
  );
});
submitProgrammeKpt?.addEventListener("click", () => {
  if (editingDraftRow) {
    const row = editingDraftRow;
    openProgrammeActionConfirm(
      "Submit this draft to KPT?",
      "This will submit the programme and mark it as Pending KPT Approval.",
      () => {
        updateProgrammeRowFromForm(row, "Pending KPT Approval");
        editingDraftRow = null;
      },
      "Submit"
    );
    return;
  }
  openProgrammeActionConfirm(
    "Submit this programme to KPT?",
    "This will add the programme to the table and mark it as Pending KPT Approval.",
    () => createProgrammeRow("Pending KPT Approval"),
    "Submit"
  );
});

programmeRows.forEach((row) => {
  attachProgrammeRowActions(row);
});

function resetProgrammePage() {
  currentProgrammePage = 1;
  updateProgrammeRows();
}

[programmePublicStatusFilter, programmeCategoryFilter, programmesPerPage].forEach((control) => {
  control?.addEventListener("change", resetProgrammePage);
});

prevProgrammePage?.addEventListener("click", () => {
  currentProgrammePage = Math.max(1, currentProgrammePage - 1);
  updateProgrammeRows();
});

nextProgrammePage?.addEventListener("click", () => {
  currentProgrammePage += 1;
  updateProgrammeRows();
});

function updateApplicationRows() {
  const selectedStatusGroups = new Set(
    [...statusGroupToggles].filter((toggle) => toggle.checked).map((toggle) => toggle.dataset.statusGroup)
  );
  const programme = programmeFilter?.value.toLowerCase() || "all programmes";
  const applicantType = applicantTypeFilter?.value.toLowerCase() || "all applicant types";
  const nationality = nationalityFilter?.value.toLowerCase() || "any nationality";
  const query = applicationSearch?.value.trim().toLowerCase() || "";
  const pageSize = applicantsPerPage?.value || "25";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  const tableRows = document.querySelectorAll(".applications-table tbody [data-application-status]");
  const matchedRows = [];

  tableRows.forEach((row) => {
    const matchesStatusGroup = !statusGroupToggles.length || selectedStatusGroups.has(row.dataset.applicationStatus) || (row.dataset.escalated === "true" && selectedStatusGroups.has("escalated"));
    const matchesProgramme = programme === "all programmes" || row.dataset.programme === programme;
    const matchesApplicantType = applicantType === "all applicant types" || row.dataset.applicantType === applicantType;
    const matchesNationality = nationality === "any nationality" || row.dataset.nationality === nationality;
    const matchesSearch = !query || row.textContent.toLowerCase().includes(query);
    const matchesFilters = matchesStatusGroup && matchesProgramme && matchesApplicantType && matchesNationality && matchesSearch;
    row.hidden = true;
    if (matchesFilters) matchedRows.push(row);
  });
  currentApplicationOrder = matchedRows;

  const totalPages = limit === Infinity ? 1 : Math.max(1, Math.ceil(matchedRows.length / limit));
  currentApplicationPage = Math.min(currentApplicationPage, totalPages);
  const start = limit === Infinity ? 0 : (currentApplicationPage - 1) * limit;
  const end = limit === Infinity ? matchedRows.length : start + limit;
  matchedRows.slice(start, end).forEach((row) => {
    row.hidden = false;
  });

  if (paginationSummary) {
    const shownStart = matchedRows.length ? start + 1 : 0;
    const shownEnd = Math.min(end, matchedRows.length);
    paginationSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length}`;
  }
  if (pageIndicator) {
    pageIndicator.textContent = `Page ${currentApplicationPage} of ${totalPages}`;
  }
  if (prevPage) {
    prevPage.disabled = currentApplicationPage <= 1;
  }
  if (nextPage) {
    nextPage.disabled = currentApplicationPage >= totalPages;
  }
  updateDashboardMetrics();
}

function escapeXmlValue(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function formatApplicationExportNationality(value) {
  return String(value)
    .split(" ")
    .map((part) => part ? `${part.charAt(0).toUpperCase()}${part.slice(1)}` : part)
    .join(" ");
}

function populateApplicationExportNationalities() {
  if (!applicationExportNationality) return;
  const currentValue = applicationExportNationality.value;
  const nationalities = [...new Set(
    [...document.querySelectorAll(".applications-table tbody tr[data-application-status]")]
      .map((row) => row.dataset.nationality)
      .filter(Boolean)
  )].sort((a, b) => a.localeCompare(b));
  applicationExportNationality.replaceChildren(new Option("Any nationality", ""));
  nationalities.forEach((value) => {
    applicationExportNationality.append(new Option(formatApplicationExportNationality(value), value));
  });
  applicationExportNationality.value = nationalities.includes(currentValue) ? currentValue : "";
}

function syncApplicationExportColumnSelection() {
  if (confirmApplicationExport) {
    confirmApplicationExport.disabled = ![...applicationExportColumns].some((column) => column.checked)
      || ![...applicationExportStatusToggles].some((status) => status.checked);
  }
}

function openApplicationExportModal() {
  populateApplicationExportNationalities();
  syncApplicationExportColumnSelection();
  if (applicationExportModal) applicationExportModal.hidden = false;
}

function closeApplicationExportModal() {
  if (applicationExportModal) applicationExportModal.hidden = true;
}

function getExcelColumnName(index) {
  let columnName = "";
  let columnNumber = index + 1;
  while (columnNumber > 0) {
    const remainder = (columnNumber - 1) % 26;
    columnName = String.fromCharCode(65 + remainder) + columnName;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  return columnName;
}

function buildApplicationsWorksheetXml(headers, rows, tableRef) {
  const widths = headers.map((header, index) => {
    const longestValue = Math.max(header.length, ...rows.map((row) => String(row[index] || "").length));
    return Math.min(42, Math.max(12, longestValue + 2));
  });
  const columnsXml = widths.map((width, index) => `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`).join("");
  const headerXml = headers.map((header, index) => {
    const cellRef = `${getExcelColumnName(index)}1`;
    return `<c r="${cellRef}" s="1" t="inlineStr"><is><t xml:space="preserve">${escapeXmlValue(header)}</t></is></c>`;
  }).join("");
  const rowsXml = rows.map((row, rowIndex) => {
    const excelRow = rowIndex + 2;
    const cellsXml = row.map((value, columnIndex) => {
      const cellRef = `${getExcelColumnName(columnIndex)}${excelRow}`;
      return `<c r="${cellRef}" t="inlineStr"><is><t xml:space="preserve">${escapeXmlValue(value)}</t></is></c>`;
    }).join("");
    return `<row r="${excelRow}">${cellsXml}</row>`;
  }).join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>${columnsXml}</cols>
  <sheetData><row r="1" ht="26" customHeight="1">${headerXml}</row>${rowsXml}</sheetData>
  <autoFilter ref="${tableRef}"/>
  <tableParts count="1"><tablePart r:id="rId1"/></tableParts>
</worksheet>`;
}

function writeZipUint16(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
}

function writeZipUint32(target, offset, value) {
  target[offset] = value & 0xff;
  target[offset + 1] = (value >>> 8) & 0xff;
  target[offset + 2] = (value >>> 16) & 0xff;
  target[offset + 3] = (value >>> 24) & 0xff;
}

const CRC32_TABLE = Array.from({ length: 256 }, (_, value) => {
  let crc = value;
  for (let bit = 0; bit < 8; bit += 1) crc = (crc & 1) ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
  return crc >>> 0;
});

function calculateCrc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = (crc >>> 8) ^ CRC32_TABLE[(crc ^ byte) & 0xff];
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function createStoredZip(entries) {
  const encoder = new TextEncoder();
  const parts = [];
  const centralDirectory = [];
  let offset = 0;

  entries.forEach(([name, content]) => {
    const nameBytes = encoder.encode(name);
    const dataBytes = encoder.encode(content);
    const crc = calculateCrc32(dataBytes);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    writeZipUint32(localHeader, 0, 0x04034b50);
    writeZipUint16(localHeader, 4, 20);
    writeZipUint16(localHeader, 6, 0);
    writeZipUint16(localHeader, 8, 0);
    writeZipUint16(localHeader, 10, 0);
    writeZipUint16(localHeader, 12, 0);
    writeZipUint32(localHeader, 14, crc);
    writeZipUint32(localHeader, 18, dataBytes.length);
    writeZipUint32(localHeader, 22, dataBytes.length);
    writeZipUint16(localHeader, 26, nameBytes.length);
    writeZipUint16(localHeader, 28, 0);
    localHeader.set(nameBytes, 30);
    parts.push(localHeader, dataBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    writeZipUint32(centralHeader, 0, 0x02014b50);
    writeZipUint16(centralHeader, 4, 20);
    writeZipUint16(centralHeader, 6, 20);
    writeZipUint16(centralHeader, 8, 0);
    writeZipUint16(centralHeader, 10, 0);
    writeZipUint16(centralHeader, 12, 0);
    writeZipUint16(centralHeader, 14, 0);
    writeZipUint32(centralHeader, 16, crc);
    writeZipUint32(centralHeader, 20, dataBytes.length);
    writeZipUint32(centralHeader, 24, dataBytes.length);
    writeZipUint16(centralHeader, 28, nameBytes.length);
    writeZipUint16(centralHeader, 30, 0);
    writeZipUint16(centralHeader, 32, 0);
    writeZipUint16(centralHeader, 34, 0);
    writeZipUint16(centralHeader, 36, 0);
    writeZipUint32(centralHeader, 38, 0);
    writeZipUint32(centralHeader, 42, offset);
    centralHeader.set(nameBytes, 46);
    centralDirectory.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  });

  const centralOffset = offset;
  const centralSize = centralDirectory.reduce((total, item) => total + item.length, 0);
  const endRecord = new Uint8Array(22);
  writeZipUint32(endRecord, 0, 0x06054b50);
  writeZipUint16(endRecord, 4, 0);
  writeZipUint16(endRecord, 6, 0);
  writeZipUint16(endRecord, 8, entries.length);
  writeZipUint16(endRecord, 10, entries.length);
  writeZipUint32(endRecord, 12, centralSize);
  writeZipUint32(endRecord, 16, centralOffset);
  writeZipUint16(endRecord, 20, 0);
  return new Blob([...parts, ...centralDirectory, endRecord], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

function buildApplicationsWorkbook(headers, rows, sheetName = "Applications", tableName = "ApplicationsTable") {
  const lastColumn = getExcelColumnName(Math.max(0, headers.length - 1));
  const lastRow = Math.max(1, rows.length + 1);
  const tableRef = `A1:${lastColumn}${lastRow}`;
  const tableColumns = headers.map((header, index) => `<tableColumn id="${index + 1}" name="${escapeXmlValue(header)}"/>`).join("");
  const now = new Date().toISOString();
  const entries = [
    ["[Content_Types].xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/tables/table1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`],
    ["_rels/.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`],
    ["docProps/core.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>University Dashboard</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created></cp:coreProperties>`],
    ["docProps/app.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>University Dashboard</Application></Properties>`],
    ["xl/workbook.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><bookViews><workbookView activeTab="0"/></bookViews><sheets><sheet name="${escapeXmlValue(sheetName)}" sheetId="1" r:id="rId1"/></sheets></workbook>`],
    ["xl/_rels/workbook.xml.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`],
    ["xl/styles.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/><bgColor rgb="FF1F4E78"/></patternFill></fill></fills><borders count="2"><border/><border><left style="thin"><color rgb="FFD9E2F3"/></left><right style="thin"><color rgb="FFD9E2F3"/></right><top style="thin"><color rgb="FFD9E2F3"/></top><bottom style="thin"><color rgb="FFD9E2F3"/></bottom></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyAlignment="1"><alignment vertical="center"/></xf><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9"/></styleSheet>`],
    ["xl/worksheets/sheet1.xml", buildApplicationsWorksheetXml(headers, rows, tableRef)],
    ["xl/worksheets/_rels/sheet1.xml.rels", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/table" Target="../tables/table1.xml"/></Relationships>`],
    ["xl/tables/table1.xml", `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" id="1" name="${escapeXmlValue(tableName)}" displayName="${escapeXmlValue(tableName)}" ref="${tableRef}" totalsRowShown="0"><autoFilter ref="${tableRef}"/><tableColumns count="${headers.length}">${tableColumns}</tableColumns><tableStyleInfo name="TableStyleMedium2" showFirstColumn="0" showLastColumn="0" showRowStripes="1" showColumnStripes="0"/></table>`]
  ];
  return createStoredZip(entries);
}

function downloadFullApplicationsList() {
  const table = document.querySelector(".applications-table");
  if (!table) return;
  const nationality = applicationExportNationality?.value || "";
  const selectedStatuses = new Set(
    [...applicationExportStatusToggles].filter((status) => status.checked).map((status) => status.dataset.exportStatus)
  );
  const selectedColumns = [...applicationExportColumns]
    .filter((column) => column.checked)
    .map((column) => Number(column.dataset.exportColumn));
  if (!selectedColumns.length || !selectedStatuses.size) return;

  const allHeaders = [...table.querySelectorAll("thead th")].map((cell) => cell.textContent.replace(/\s+/g, " ").trim());
  const headers = selectedColumns.map((index) => allHeaders[index]);
  const rows = [...table.querySelectorAll("tbody tr[data-application-status]")]
    .filter((row) => {
      const rowStatus = row.dataset.applicationStatus;
      return selectedStatuses.has(rowStatus)
        && (!nationality || row.dataset.nationality === nationality);
    })
    .map((row) => selectedColumns.map((index) => row.cells[index]?.textContent.replace(/\s+/g, " ").trim() || ""));
  const blob = buildApplicationsWorkbook(headers, rows);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "applications-full-list.xlsx";
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  closeApplicationExportModal();
}

function downloadFullReportsList() {
  const table = document.querySelector(".reports-table");
  if (!table || !currentReportRows.length) return;

  const headers = [...table.querySelectorAll("thead th")].map((cell) => cell.textContent.replace(/\s+/g, " ").trim());
  const rows = currentReportRows.map((row) => {
    const applicant = row.querySelector(".applicant-name")?.textContent.trim() || "";
    const trackingCode = row.querySelector(".applicant-link small")?.textContent.trim() || "";
    return [
      [applicant, trackingCode].filter(Boolean).join(" "),
      row.children[1]?.textContent.replace(/\s+/g, " ").trim() || "",
      row.querySelector(".programme-name")?.textContent.trim() || "",
      row.children[3]?.textContent.replace(/\s+/g, " ").trim() || "",
      row.querySelector(".status-chip")?.textContent.replace(/\s+/g, " ").trim() || row.dataset.applicationStatus || "",
      row.children[6]?.textContent.replace(/\s+/g, " ").trim() || ""
    ];
  });
  const blob = buildApplicationsWorkbook(headers, rows, "Reports", "ReportsTable");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "reports-full-list.xlsx";
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

function updateDashboardMetrics() {
  const programmes = [...document.querySelectorAll(".programmes-table tbody tr")];
  const applications = [...document.querySelectorAll(".applications-table tbody [data-application-status]")];
  const activeProgrammes = programmes.filter((row) => row.dataset.publicStatus === "published").length;
  const programmesUnderKptReview = programmes.filter((row) => row.dataset.publicStatus === "pending kpt approval").length;
  const pendingReviews = applications.filter((row) => ["submitted", "documents submitted"].includes(row.dataset.applicationStatus)).length;
  const awaitingApplicantDocuments = applications.filter((row) => row.dataset.applicationStatus === "documents required").length;
  const approvedApplicants = applications.filter((row) => row.dataset.applicationStatus === "approved").length;
  const offersIssued = applications.filter((row) => row.dataset.applicationStatus === "approved").length;
  const withdrawnOrRejected = applications.filter((row) => ["withdrawn", "rejected"].includes(row.dataset.applicationStatus)).length;

  const values = {
    "active-programmes": activeProgrammes,
    "total-applications": applications.length,
    "pending-reviews": pendingReviews,
    "offers-issued": offersIssued
  };
  const notes = {
    "active-programmes": `${programmesUnderKptReview} under KPT review`,
    "total-applications": `${approvedApplicants} approved applicants`,
    "pending-reviews": `${awaitingApplicantDocuments} awaiting applicant documents`,
    "offers-issued": `${withdrawnOrRejected} withdrawn or rejected applications`
  };

  document.querySelectorAll("[data-dashboard-metric]").forEach((metric) => {
    metric.textContent = String(values[metric.dataset.dashboardMetric] ?? 0);
  });
  document.querySelectorAll("[data-dashboard-note]").forEach((note) => {
    note.textContent = notes[note.dataset.dashboardNote] || "";
  });
  updateDashboardReports();
  updateDashboardProgrammePipeline();
  updateReportsTable();
  updateApplicationChart(document.querySelector("#applicationRange")?.value || "All time");
}

function updateDashboardProgrammePipeline() {
  const programmes = [...document.querySelectorAll(".programmes-table tbody tr")];
  const stageConfig = [
    { key: "draft", label: "Draft", className: "draft" },
    { key: "pending kpt approval", label: "KPT review", className: "review" },
    { key: "changes requested", label: "Changes", className: "changes" },
    { key: "published", label: "Published", className: "live" },
    { key: "unpublish", label: "Unpublish", className: "unpublish" },
    { key: "rejected", label: "Rejected", className: "rejected" }
  ];
  const counts = stageConfig.map((stage) => programmes.filter((row) => row.dataset.publicStatus === stage.key).length);
  const total = programmes.length;
  const percentages = counts.map((count) => total ? Math.round((count / total) * 100) : 0);

  if (dashboardProgrammePipelineTotal) dashboardProgrammePipelineTotal.textContent = `${total} total`;
  if (dashboardProgrammePipelineStages) {
    dashboardProgrammePipelineStages.innerHTML = stageConfig.map((stage, index) => `<div><span><i class="${stage.className}"></i>${stage.label}</span><strong>${counts[index]}</strong><small>${percentages[index]}%</small></div>`).join("");
  }
  if (dashboardProgrammePipelineStack) {
    dashboardProgrammePipelineStack.style.gridTemplateColumns = counts.map((count) => `${count}fr`).join(" ");
    dashboardProgrammePipelineStack.innerHTML = stageConfig.map((stage) => `<i class="${stage.className}"></i>`).join("");
  }
}

function updateReportsTable() {
  if (!reportTableBody) return;

  const sourceRows = [...document.querySelectorAll(".applications-table tbody [data-application-status]")];
  const populateFilter = (select, values, emptyLabel) => {
    if (!select) return;
    const currentValue = select.value;
    select.innerHTML = `<option value="">${emptyLabel}</option>${values.map((item) => `<option value="${escapeAttribute(item.value)}">${escapeAttribute(item.label)}</option>`).join("")}`;
    select.value = values.some((item) => item.value === currentValue) ? currentValue : "";
  };
  const programmeValues = [...new Map(sourceRows.map((row) => [row.dataset.programme, row.querySelector(".programme-name")?.textContent.trim() || row.dataset.programme])).entries()]
    .filter(([value]) => value)
    .sort((first, second) => first[1].localeCompare(second[1]))
    .map(([value, label]) => ({ value, label }));
  const nationalityValues = [...new Map(sourceRows.map((row) => [row.dataset.nationality, row.children[1]?.textContent.trim() || row.dataset.nationality])).entries()]
    .filter(([value]) => value)
    .sort((first, second) => first[1].localeCompare(second[1]))
    .map(([value, label]) => ({ value, label }));
  populateFilter(reportProgrammeFilter, programmeValues, "All programmes");
  populateFilter(reportNationalityFilter, nationalityValues, "All nationalities");

  const query = reportSearch?.value.trim().toLowerCase() || "";
  const programme = reportProgrammeFilter?.value || "";
  const status = reportStatusFilter?.value || "";
  const nationality = reportNationalityFilter?.value || "";
  const dateRange = reportDateFilter?.value || "All time";
  const rangeDays = {
    "Last 7 days": 7,
    "Last 30 days": 30,
    "Last 3 months": 90,
    "Last 6 months": 180,
    "All time": null
  }[dateRange] ?? null;
  const datedRows = sourceRows.map((row) => ({ row, date: parseApplicationDate(row.children[3]?.textContent) }));
  const datedValues = datedRows.filter((item) => item.date).map((item) => item.date.getTime());
  const latestDate = datedValues.length ? new Date(Math.max(...datedValues)) : null;
  const startDate = latestDate && rangeDays ? new Date(latestDate) : null;
  if (startDate) startDate.setDate(startDate.getDate() - (rangeDays - 1));

  const matchedRows = datedRows.filter(({ row, date }) => {
    const matchesQuery = !query || row.textContent.toLowerCase().includes(query);
    const matchesProgramme = !programme || row.dataset.programme === programme;
    const matchesStatus = !status || row.dataset.applicationStatus === status;
    const matchesNationality = !nationality || row.dataset.nationality === nationality;
    const matchesDate = !startDate || (date && date >= startDate && date <= latestDate);
    return matchesQuery && matchesProgramme && matchesStatus && matchesNationality && matchesDate;
  }).map(({ row }) => row);
  currentReportRows = matchedRows;

  const pageSizeValue = reportPageSize?.value || "25";
  const limit = pageSizeValue === "all" ? Infinity : Number(pageSizeValue);
  const totalPages = limit === Infinity ? 1 : Math.max(1, Math.ceil(matchedRows.length / limit));
  currentReportPage = Math.min(currentReportPage, totalPages);
  const start = limit === Infinity ? 0 : (currentReportPage - 1) * limit;
  const end = limit === Infinity ? matchedRows.length : start + limit;
  const statusChipClasses = {
    submitted: "blue",
    "documents required": "amber",
    "documents submitted": "blue",
    approved: "green",
    rejected: "red",
    withdrawn: "neutral"
  };

  reportTableBody.innerHTML = matchedRows.slice(start, end).map((row) => {
    const applicant = row.querySelector(".applicant-name")?.textContent.trim() || "—";
    const trackingCode = row.querySelector(".applicant-link small")?.textContent.trim() || "—";
    const rowProgramme = row.querySelector(".programme-name")?.textContent.trim() || "—";
    const rowStatus = row.dataset.applicationStatus || "";
    const statusLabel = row.querySelector(".status-chip")?.textContent.trim() || rowStatus;
    const chipClass = statusChipClasses[rowStatus] || "neutral";
    return `<tr><td><span class="applicant-name">${escapeAttribute(applicant)}</span><small>${escapeAttribute(trackingCode)}</small></td><td>${escapeAttribute(row.children[1]?.textContent.trim() || "—")}</td><td><span class="programme-name">${escapeAttribute(rowProgramme)}</span></td><td>${escapeAttribute(row.children[3]?.textContent.trim() || "—")}</td><td><span class="status-chip ${chipClass}">${escapeAttribute(statusLabel)}</span></td><td>${escapeAttribute(row.children[6]?.textContent.trim() || "—")}</td></tr>`;
  }).join("");

  const shownStart = matchedRows.length ? start + 1 : 0;
  const shownEnd = Math.min(end, matchedRows.length);
  if (reportTotalCount) reportTotalCount.textContent = `${matchedRows.length} record${matchedRows.length === 1 ? "" : "s"}`;
  if (reportPaginationSummary) reportPaginationSummary.textContent = `Showing ${shownStart}-${shownEnd} of ${matchedRows.length}`;
  if (reportPageIndicator) reportPageIndicator.textContent = `Page ${currentReportPage} of ${totalPages}`;
  if (prevReportPage) prevReportPage.disabled = currentReportPage <= 1;
  if (nextReportPage) nextReportPage.disabled = currentReportPage >= totalPages;
}

function updateDashboardReports() {
  const programmes = [...document.querySelectorAll(".programmes-table tbody tr")];
  const applications = [...document.querySelectorAll(".applications-table tbody [data-application-status]")];
  const programmeNames = [...new Set([
    ...programmes.map((row) => row.querySelector(".programme-name")?.textContent.trim()).filter(Boolean),
    ...applications.map((row) => row.querySelector(".programme-name")?.textContent.trim()).filter(Boolean)
  ])].sort((first, second) => first.localeCompare(second));
  const getProgrammeName = (row) => row.querySelector(".programme-name")?.textContent.trim() || "Unknown programme";
  const getStatus = (row) => row.dataset.applicationStatus || "";
  const getStats = (name) => {
    const rows = applications.filter((row) => getProgrammeName(row) === name);
    const approved = rows.filter((row) => getStatus(row) === "approved").length;
    const pending = rows.filter((row) => ["submitted", "documents required", "documents submitted"].includes(getStatus(row))).length;
    const closed = rows.filter((row) => ["rejected", "withdrawn"].includes(getStatus(row))).length;
    const processingDays = rows.map((row) => {
      const applied = Date.parse(row.children[3]?.textContent.trim() || "");
      const updated = Date.parse(row.children[6]?.textContent.trim() || "");
      return Number.isFinite(applied) && Number.isFinite(updated) ? Math.max(0, Math.round((updated - applied) / 86400000)) : null;
    }).filter((value) => value !== null);
    return {
      total: rows.length,
      approved,
      pending,
      closed,
      acceptanceRate: rows.length ? Math.round((approved / rows.length) * 100) : 0,
      averageProcessing: processingDays.length ? `${Math.round(processingDays.reduce((sum, value) => sum + value, 0) / processingDays.length)} days` : "—"
    };
  };

  dashboardSelectedProgrammes = new Set([...dashboardSelectedProgrammes].filter((name) => programmeNames.includes(name)));
  const programmesByVolume = programmeNames
    .filter((name) => getStats(name).total > 0)
    .sort((first, second) => getStats(second).total - getStats(first).total);
  const topProgrammeNames = programmesByVolume.slice(0, 10);
  const reportNames = dashboardProgrammeReportMode === "all"
    ? programmesByVolume
    : dashboardProgrammeReportMode === "selected" && dashboardSelectedProgrammes.size
      ? [...dashboardSelectedProgrammes]
      : topProgrammeNames;
  const reportStats = new Map(reportNames.map((name) => [name, getStats(name)]));
  const maxBarValue = Math.max(1, ...[...reportStats.values()].flatMap((stats) => [stats.approved, stats.pending, stats.closed]));

  if (dashboardProgrammeReportOptions) {
    dashboardProgrammeReportOptions.innerHTML = programmeNames.length
      ? programmeNames.map((name) => `<label><input type="checkbox" data-dashboard-programme-option="${escapeAttribute(name)}" ${dashboardSelectedProgrammes.has(name) ? "checked" : ""}><span>${escapeAttribute(name)}</span></label>`).join("")
      : "<small>No programmes available.</small>";
  }
  if (dashboardProgrammeReportFilterToggle) {
    const selectionLabel = dashboardProgrammeReportMode === "all"
      ? "All programmes"
      : dashboardProgrammeReportMode === "selected" && dashboardSelectedProgrammes.size
        ? `${dashboardSelectedProgrammes.size} programmes selected`
        : "Top 10 programmes";
    dashboardProgrammeReportFilterToggle.textContent = selectionLabel;
  }

  if (dashboardApplicationsByProgramme) {
    dashboardApplicationsByProgramme.style.setProperty("--dashboard-bar-unit", `${Math.min(16, 250 / maxBarValue)}px`);
    dashboardApplicationsByProgramme.innerHTML = reportNames.length
      ? reportNames.map((name) => {
        const stats = reportStats.get(name);
        return `<div><i style="--accepted: ${stats.approved}; --pending: ${stats.pending}; --rejected: ${stats.closed}"></i><span class="bar-values"><b>${stats.approved}</b><b>${stats.pending}</b><b>${stats.closed}</b></span><span>${escapeAttribute(name)}</span></div>`;
      }).join("")
      : "<p>No application data available.</p>";
  }

  if (dashboardTopCountries) {
    const countryCounts = new Map();
    if (dashboardTopCountriesTotal) dashboardTopCountriesTotal.textContent = `${applications.length} total`;
    applications.forEach((row) => {
      const country = row.children[1]?.textContent.trim() || "Unknown";
      const countryKey = country.toLowerCase();
      const countryEntry = countryCounts.get(countryKey) || { label: country, count: 0 };
      countryEntry.count += 1;
      countryCounts.set(countryKey, countryEntry);
    });
    const countries = [...countryCounts.values()].sort((first, second) => second.count - first.count || first.label.localeCompare(second.label));
    const maxCountryCount = countries[0]?.count || 1;
    dashboardTopCountries.innerHTML = countries.length
      ? countries.map(({ label, count }) => `<div style="--bar: ${(count / maxCountryCount) * 100}%"><span>${escapeAttribute(label)}</span><i></i><strong>${count}</strong></div>`).join("")
      : "<p>No application data available.</p>";
  }

}

dashboardProgrammeReportFilterToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = dashboardProgrammeReportFilterMenu?.hidden === false;
  if (dashboardProgrammeReportFilterMenu) dashboardProgrammeReportFilterMenu.hidden = isOpen;
  dashboardProgrammeReportFilterToggle.setAttribute("aria-expanded", String(!isOpen));
});

dashboardProgrammeReportFilterMenu?.addEventListener("click", (event) => {
  event.stopPropagation();
  const selectionButton = event.target.closest("[data-dashboard-programme-selection]");
  if (selectionButton) {
    const selection = selectionButton.dataset.dashboardProgrammeSelection;
    dashboardProgrammeReportMode = selection === "all" ? "all" : selection === "clear" ? "top" : "top";
    dashboardSelectedProgrammes.clear();
    updateDashboardReports();
    return;
  }
  const option = event.target.closest("[data-dashboard-programme-option]") || event.target.closest("label")?.querySelector("[data-dashboard-programme-option]");
  if (option) {
    if (option.checked) {
      dashboardSelectedProgrammes.add(option.dataset.dashboardProgrammeOption);
      dashboardProgrammeReportMode = "selected";
    } else {
      dashboardSelectedProgrammes.delete(option.dataset.dashboardProgrammeOption);
      if (!dashboardSelectedProgrammes.size) dashboardProgrammeReportMode = "top";
    }
    updateDashboardReports();
  }
});

document.addEventListener("click", () => {
  if (dashboardProgrammeReportFilterMenu) dashboardProgrammeReportFilterMenu.hidden = true;
  dashboardProgrammeReportFilterToggle?.setAttribute("aria-expanded", "false");
});

reportSearch?.addEventListener("input", () => {
  currentReportPage = 1;
  updateReportsTable();
});
[reportProgrammeFilter, reportStatusFilter, reportNationalityFilter, reportDateFilter, reportPageSize].forEach((control) => {
  control?.addEventListener("change", () => {
    currentReportPage = 1;
    updateReportsTable();
  });
});
reportResetFilters?.addEventListener("click", () => {
  if (reportSearch) reportSearch.value = "";
  if (reportProgrammeFilter) reportProgrammeFilter.value = "";
  if (reportStatusFilter) reportStatusFilter.value = "";
  if (reportNationalityFilter) reportNationalityFilter.value = "";
  if (reportDateFilter) reportDateFilter.value = "All time";
  if (reportPageSize) reportPageSize.value = "25";
  currentReportPage = 1;
  updateReportsTable();
});
prevReportPage?.addEventListener("click", () => {
  currentReportPage = Math.max(1, currentReportPage - 1);
  updateReportsTable();
});
nextReportPage?.addEventListener("click", () => {
  currentReportPage += 1;
  updateReportsTable();
});

function resetApplicationPage() {
  currentApplicationPage = 1;
  updateApplicationRows();
}

function syncAllStatusFilter() {
  if (!allStatusFilters) return;
  allStatusFilters.checked = [...statusGroupToggles].every((toggle) => toggle.checked);
}

function updateVisibleColumns() {
  const table = document.querySelector(".applications-table");
  if (!table) return;

  columnToggles.forEach((toggle) => {
    const column = Number(toggle.dataset.columnToggle);
    const cells = table.querySelectorAll(`th:nth-child(${column}), td:nth-child(${column})`);
    cells.forEach((cell) => {
      cell.hidden = !toggle.checked;
    });
  });
}

if (applicationSearch) {
  applicationSearch.addEventListener("input", resetApplicationPage);
}

if (programmeFilter) {
  programmeFilter.addEventListener("change", resetApplicationPage);
}

if (applicantTypeFilter) {
  applicantTypeFilter.addEventListener("change", resetApplicationPage);
}

if (nationalityFilter) {
  nationalityFilter.addEventListener("change", resetApplicationPage);
}

if (applicantsPerPage) {
  applicantsPerPage.addEventListener("change", resetApplicationPage);
}

downloadApplicationsList?.addEventListener("click", openApplicationExportModal);
downloadReportsList?.addEventListener("click", downloadFullReportsList);
closeApplicationExport?.addEventListener("click", closeApplicationExportModal);
cancelApplicationExport?.addEventListener("click", closeApplicationExportModal);
confirmApplicationExport?.addEventListener("click", downloadFullApplicationsList);
applicationExportColumns.forEach((column) => {
  column.addEventListener("change", syncApplicationExportColumnSelection);
});
applicationExportStatusToggles.forEach((status) => {
  status.addEventListener("change", syncApplicationExportColumnSelection);
});
applicationExportModal?.addEventListener("click", (event) => {
  if (event.target === applicationExportModal) closeApplicationExportModal();
});

columnToggles.forEach((toggle) => {
  toggle.addEventListener("change", updateVisibleColumns);
});

statusGroupToggles.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    syncAllStatusFilter();
    resetApplicationPage();
  });
});

allStatusFilters?.addEventListener("change", () => {
  statusGroupToggles.forEach((toggle) => {
    toggle.checked = allStatusFilters.checked;
  });
  resetApplicationPage();
});

clearStatusFilters?.addEventListener("click", () => {
  statusGroupToggles.forEach((toggle) => {
    toggle.checked = false;
  });
  syncAllStatusFilter();
  resetApplicationPage();
});

if (prevPage) {
  prevPage.addEventListener("click", () => {
    currentApplicationPage = Math.max(1, currentApplicationPage - 1);
    updateApplicationRows();
  });
}

if (nextPage) {
  nextPage.addEventListener("click", () => {
    currentApplicationPage += 1;
    updateApplicationRows();
  });
}

function getSortValue(row, key) {
  if (key === "applicant") return row.querySelector(".applicant-name")?.textContent.trim().toLowerCase() || "";
  if (key === "nationality") return row.dataset.nationality || "";
  if (key === "programme") return row.dataset.programme || "";
  if (key === "applied") return Date.parse(row.children[3]?.textContent.trim() || "") || 0;
  if (key === "status") return row.dataset.applicationStatus || "";
  if (key === "action") return row.querySelector(".mark-btn.yes") ? "yes" : "no";
  if (key === "updated") return Date.parse(row.children[6]?.textContent.trim() || "") || 0;
  return "";
}

applicationSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.sortKey;
    const direction = applicationSort.key === key && applicationSort.direction === "asc" ? "desc" : "asc";
    const tbody = button.closest("table")?.querySelector("tbody");
    if (!tbody) return;

    applicationSort = { key, direction };
    currentApplicationPage = 1;
    const rows = [...tbody.querySelectorAll("[data-application-status]")];
    rows.sort((first, second) => {
      const firstValue = getSortValue(first, key);
      const secondValue = getSortValue(second, key);
      if (typeof firstValue === "number" && typeof secondValue === "number") {
        return direction === "asc" ? firstValue - secondValue : secondValue - firstValue;
      }
      return direction === "asc"
        ? firstValue.localeCompare(secondValue)
        : secondValue.localeCompare(firstValue);
    });
    rows.forEach((row) => tbody.appendChild(row));
    updateApplicationRows();
  });
});

function getProgrammeSortValue(row, key) {
  if (key === "category") return row.dataset.programmeCategory || "";
  if (key === "status") return row.dataset.publicStatus || "";
  return "";
}

programmeSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.sortKey;
    const direction = programmeSort.key === key && programmeSort.direction === "asc" ? "desc" : "asc";
    const tbody = button.closest("table")?.querySelector("tbody");
    if (!tbody) return;

    programmeSort = { key, direction };
    currentProgrammePage = 1;
    const rows = [...tbody.querySelectorAll("tr")];
    rows.sort((first, second) => {
      const firstValue = getProgrammeSortValue(first, key);
      const secondValue = getProgrammeSortValue(second, key);
      return direction === "asc"
        ? firstValue.localeCompare(secondValue)
        : secondValue.localeCompare(firstValue);
    });
    rows.forEach((row) => tbody.appendChild(row));
    programmeRows = document.querySelectorAll(".programmes-table tbody tr");
    updateProgrammeRows();
  });
});

updateApplicationRows();
updateVisibleColumns();
updateProgrammeRows();

const statusMeta = {
  submitted: { label: "New Application", chip: "blue" },
  "documents required": { label: "Documents Required", chip: "amber" },
  "documents submitted": { label: "Req Documents Submitted", chip: "blue" },
  "pre-approved": { label: "Pre-Approved", chip: "green" },
  "final documents required": { label: "Final Documents Required", chip: "amber" },
  "final documents submitted": { label: "Final Documents Submitted", chip: "purple" },
  approved: { label: "Approved", chip: "green" },
  rejected: { label: "Rejected", chip: "red" },
  "on hold": { label: "On Hold", chip: "neutral" },
  withdrawn: { label: "Withdrawn", chip: "neutral" }
};

const initialApplicationState = new Map();

applicationRows.forEach((row) => {
  initialApplicationState.set(row, {
    status: row.dataset.applicationStatus,
    updated: row.children[6]?.textContent.trim() || "",
    statusHtml: row.children[4]?.innerHTML || "",
    finalDocsSubmitted: row.dataset.applicationStatus === "final documents submitted" ? "true" : "",
    activity: []
  });
  row.demoActivity = [];
  row.demoDocumentRequests = [];
  row.demoUploadedDocuments = [];
  row.demoPostApprovalFiles = [];
  row.demoPendingPostApprovalFiles = [];
  row.dataset.documentRequest = "";
  row.dataset.documentRequestMessage = "";
  row.dataset.offerLetterFile = "";
  row.dataset.offerLetterMessage = "";
  if (row.dataset.applicationStatus === "final documents submitted") {
    row.dataset.finalDocsSubmitted = "true";
  } else {
    row.dataset.finalDocsSubmitted = "";
  }
  if (row.dataset.applicationStatus === "final documents required") {
    const requestMessage = "Proof of payment is unclear. Please upload a clearer copy and confirm the signed offer letter.";
    row.demoDocumentRequests.push({ id: `${getRowCode(row)}-final-request`, title: "Final document / correction requested", message: requestMessage, stage: "final" });
    row.dataset.documentRequest = "Final document / correction requested";
    row.dataset.documentRequestMessage = requestMessage;
  }
  row.demoDocRequestedAt = row.dataset.applicationStatus === "documents required" ? Date.parse(row.children[6]?.textContent.trim() || "") : null;
  row.demoLastReminderAt = null;
});

const programmeMeta = {
  "digital entrepreneurship bootcamp": { category: "Business and Entrepreneurship (BAE)", fee: "RM 4,200" },
  "malaysian heritage experience": { category: "Food, Culture & Heritage (FCH)", fee: "RM 2,100" },
  "applied ai for tourism": { category: "Science and Technology (SAT)", fee: "RM 4,800" },
  "marine conservation lab": { category: "Environmental and Health Science (EAH)", fee: "RM 3,700" },
  "bahasa for healthcare professionals": { category: "Environmental and Health Science (EAH)", fee: "RM 2,400" },
  "fintech innovation studio": { category: "Business and Entrepreneurship (BAE)", fee: "RM 4,500" },
  "smart mobility lab": { category: "Sports (SPT)", fee: "RM 3,300" },
  "ai heritage storytelling lab": { category: "Science and Technology (SAT)", fee: "RM 3,800" },
  "rainforest research field school": { category: "Nature and Adventure (NAA)", fee: "RM 4,100" },
  "borneo culture immersion": { category: "Arts & Social Science (ANS)", fee: "RM 2,700" },
  "coastal resilience & blue economy": { category: "Environmental and Health Science (EAH)", fee: "RM 3,900" },
  "sustainable food innovation lab": { category: "Culinary and Hospitality (CAH)", fee: "RM 3,200" },
  "digital media & creative industries": { category: "Arts & Social Science (ANS)", fee: "RM 3,800" },
  "global public health fieldwork": { category: "Environmental and Health Science (EAH)", fee: "RM 4,600" },
  "renewable energy systems workshop": { category: "Science and Technology (SAT)", fee: "RM 4,100" },
  "intercultural leadership exchange": { category: "Leadership and Management (LAM)", fee: "RM 2,900" },
  "community heritage documentation": { category: "Food, Culture & Heritage (FCH)", fee: "RM 2,300" },
  "applied robotics for industry": { category: "Science and Technology (SAT)", fee: "RM 4,900" },
  "tourism data analytics studio": { category: "Business and Entrepreneurship (BAE)", fee: "RM 3,600" }
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderProgrammeParticipants(participantsText) {
  const value = String(participantsText || "").trim();
  const [limitPart, waiverPart] = value.includes(";") ? value.split(";").map((part) => part.trim()) : [value, ""];
  setText("#programmeDetailParticipantsLimit", limitPart || "Not specified");
  setText("#programmeDetailParticipantsWaiver", waiverPart || "No participant waiver");
}

function setListField(selector, value, fallback) {
  const element = document.querySelector(selector);
  if (!element) return;
  const items = String(value || fallback || "").split(",").map((item) => item.trim()).filter(Boolean);
  const finalItems = items.length ? items : [fallback || ""];
  element.dataset.value = finalItems.join(", ");
  element.innerHTML = finalItems.map((item) => `<li>${escapeAttribute(item)}</li>`).join("");
}

function getDemoDate() {
  return "16 Aug 2026";
}

function getRowName(row) {
  return row?.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
}

function getRowCode(row) {
  return row?.querySelector(".applicant-link small")?.textContent.trim() || "";
}

function addActivity(row, title, note, actor = "University Admin") {
  if (!row) return;
  row.demoActivity = row.demoActivity || [];
  row.demoActivity.unshift({
    title: `${getRowCode(row)} - ${title}`,
    time: `${getDemoDate()}, 10:30 AM by ${actor}`,
    note
  });
}

function getStatusConfirmation(status) {
  const confirmations = {
    "documents submitted": { title: "Confirm documents verified", message: "Mark documents as verified and move this application to the offer letter step?" },
    "pre-approved": { title: "Send pre-approval offer letter?", message: "Verify the documents and send the automatic offer letter generated from the university template?" },
    "final documents submitted": { title: "Confirm final documents submitted", message: "Mark final documents as submitted and ready for university approval review?" },
    approved: { title: "Confirm approval", message: "Approve this application? An offer letter will also be sent to the participant." },
    rejected: { title: "Confirm rejection", message: "Reject this application? It will be closed and will not continue in the application process." },
    "on hold": { title: "Confirm hold", message: "Put this application on hold? Use this when places are filled or a decision is pending." }
  };
  return confirmations[status];
}

function openStatusConfirmModal(change) {
  const confirmation = getStatusConfirmation(change.status);
  if (!confirmation) return false;
  pendingStatusChange = change;
  if (statusConfirmTitle) statusConfirmTitle.textContent = confirmation.title;
  if (statusConfirmMessage) statusConfirmMessage.textContent = confirmation.message;
  if (statusConfirmModal) statusConfirmModal.hidden = false;
  return true;
}

const DOCUMENT_REMINDER_COOLDOWN_DAYS = 7;

function getDocumentReminderState(row) {
  const referenceTime = row?.demoLastReminderAt ?? row?.demoDocRequestedAt ?? null;
  const today = Date.parse(getDemoDate());
  if (!Number.isFinite(referenceTime) || !Number.isFinite(today)) {
    return { canRemind: false, daysPassed: 0 };
  }
  const daysPassed = Math.max(0, Math.round((today - referenceTime) / (24 * 60 * 60 * 1000)));
  const canRemind = daysPassed >= DOCUMENT_REMINDER_COOLDOWN_DAYS;
  return { canRemind, daysPassed };
}

function buildDocumentReminderActionHtml(row) {
  const { canRemind, daysPassed } = getDocumentReminderState(row);
  const button = `<button type="button" data-side-action="remind"${canRemind ? "" : " disabled"}>Send reminder</button>`;
  const hint = canRemind
    ? `<p class="application-reminder-hint active">It has been ${daysPassed} day${daysPassed === 1 ? "" : "s"} since the applicant was notified, with no response.</p>`
    : `<p class="application-reminder-hint">Send reminder becomes available once there is no response from the applicant for ${DOCUMENT_REMINDER_COOLDOWN_DAYS} days.</p>`;
  return `${button}${hint}`;
}

function openReminderConfirmModal(row, type = "document") {
  if (!row) return;
  pendingReminderAction = { row, type };
  pendingStatusChange = null;
  if (statusConfirmTitle) statusConfirmTitle.textContent = type === "final" ? "Send final document reminder?" : "Send document reminder?";
  if (statusConfirmMessage) {
    statusConfirmMessage.textContent = type === "final"
      ? "Send a reminder to the applicant to upload the requested final approval document or correction? The application status will not change."
      : "Send a reminder to the applicant to upload the requested document or correction? The application status will not change.";
  }
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Send reminder";
  if (statusConfirmModal) statusConfirmModal.hidden = false;
}

function closeStatusConfirmModal() {
  pendingStatusChange = null;
  pendingReminderAction = null;
  pendingProgrammeStatusChange = null;
  pendingProgrammeDelete = null;
  pendingProgrammeAction = null;
  pendingProgrammeActionAudit = null;
  if (applyStatusConfirm) applyStatusConfirm.textContent = "Confirm";
  if (statusConfirmModal) statusConfirmModal.hidden = true;
}

function updateRowStatus(row, status, activityTitle, activityNote, options = {}) {
  if (!options.confirmed && openStatusConfirmModal({ row, status, activityTitle, activityNote })) return;
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const previousStatus = statusMeta[row.dataset.applicationStatus]?.label || row.dataset.applicationStatus || "Application";
  row.dataset.applicationStatus = status;
  if (status === "pre-approved") {
    row.dataset.offerLetterFile = row.dataset.offerLetterFile || "Automatic pre-approval offer letter";
    row.dataset.offerLetterMessage = row.dataset.offerLetterMessage || "Generated from university offer letter template.";
  }
  row.children[4].innerHTML = "";
  row.children[4].appendChild(createStatusChip(statusInfo.label, statusInfo.chip));
  row.children[6].textContent = getDemoDate();
  if (activityTitle) addActivity(row, activityTitle, activityNote || `${statusInfo.label} recorded.`);
  addAuditRecord({
    user: options.auditUser || "Nur Aisyah Rahman",
    action: `${getApplicationAuditName(row)}: ${previousStatus} -> ${statusInfo.label}`,
    entity: "Application"
  });
  updateApplicationRows();
  if (row === activeApplicantRow && applicationSidePanel && !applicationSidePanel.hidden) renderApplicationSidePanel(row);
  if (row === activeApplicantRow && applicantDetail && !applicantDetail.hidden) showApplicantDetail(row, { keepTab: true });
}

function getApplicationProgressSteps(row, status) {
  const hasDocumentPath = ["documents required", "documents submitted"].includes(status) || Boolean(row?.demoDocumentRequests?.length);
  let steps = hasDocumentPath
    ? ["Application Submitted", "Documents Required", "Req Documents Submitted", "Approved"]
    : ["Application Submitted", "Approved"];
  if (["rejected", "withdrawn"].includes(status)) {
    steps = steps
      .map((step) => step === "Approved" ? (status === "withdrawn" ? "Withdrawn" : "Rejected") : step);
  }
  const currentStep = status === "submitted"
    ? "Application Submitted"
    : status === "documents required"
      ? "Documents Required"
      : status === "documents submitted"
        ? "Req Documents Submitted"
        : ["rejected", "withdrawn"].includes(status)
          ? (status === "withdrawn" ? "Withdrawn" : "Rejected")
        : status === "approved"
          ? "Approved"
          : "";
  const currentIndex = steps.indexOf(currentStep);
  const isClosed = ["rejected", "withdrawn"].includes(status);

  return `
    <div class="application-current-stage-progress">
      <h5>Application Progress</h5>
      <ol>
        ${steps.map((step, index) => {
          const state = isClosed ? (index < currentIndex ? "complete" : index === currentIndex ? "current" : "skipped") : index < currentIndex ? "complete" : index === currentIndex ? "current" : "upcoming";
          return `<li class="${state}"><span class="application-progress-step-node" aria-hidden="true">${state === "complete" ? "✓" : ""}</span><span><strong>${step}</strong>${state === "current" ? "<small>Current stage</small>" : ""}</span></li>`;
        }).join("")}
      </ol>
    </div>`;
}

function buildCurrentApplicationStagePanel(row, status, variant, title, note, actions, summary = "", label = "Current stage") {
  return `<section class="application-current-stage-box ${variant}">
    <span class="application-current-stage-label">${label}</span>
    <h4>${title}</h4>
    <p>${note}</p>
    <div class="application-current-stage-actions">${actions}</div>
    ${getApplicationProgressSteps(row, status)}
    ${summary}
  </section>`;
}

function getCurrentApplicationStagePanel(status, row, summary = "") {
  if (status === "submitted") {
    return buildCurrentApplicationStagePanel(row, status, "current", "New Application", "Review the application and submitted documents, then decide the next step.", `<button type="button" data-doc-action="request-document">Request documents</button><div class="application-current-stage-secondary-actions"><button class="secondary" type="button" data-decision-status="approved">Approve</button><button class="secondary danger" type="button" data-decision-status="rejected">Reject</button></div>`, summary);
  }
  if (status === "documents required") {
    return buildCurrentApplicationStagePanel(row, status, "waiting", "Documents Required", "Waiting for the applicant to submit the requested documents.", buildDocumentReminderActionHtml(row), summary);
  }
  if (status === "documents submitted") {
    return buildCurrentApplicationStagePanel(row, status, "current", "Req Documents Submitted", "Review the documents submitted in response to the request.", `<button type="button" data-doc-action="request-document">Request another correction</button><div class="application-current-stage-secondary-actions"><button class="secondary" type="button" data-decision-status="approved">Approve</button><button class="secondary danger" type="button" data-decision-status="rejected">Reject</button></div>`, summary);
  }
  if (status === "approved") {
    return buildCurrentApplicationStagePanel(row, status, "complete", "Approved", "The application is approved. Follow-up records can be added now.", `<button type="button" data-side-tab="post-approval">Open post-approval records</button>`, summary);
  }
  if (["rejected", "withdrawn"].includes(status)) {
    return buildCurrentApplicationStagePanel(row, status, "closed", statusMeta[status]?.label || "Application closed", "This application is no longer in the active workflow.", `<button class="secondary" type="button" data-side-tab="activity">View activity log</button>`, summary, "Closed status");
  }
  return buildCurrentApplicationStagePanel(row, status, "waiting", statusMeta[status]?.label || "Application", "Review the current application details and activity.", `<button class="secondary" type="button" data-side-tab="activity">View activity log</button>`, summary);
}

function buildSideActivity(row, status, statusInfo, applied, updated) {
  const base = [
    { title: "Application submitted", actor: "Applicant", note: `Submitted on ${applied}.` }
  ];
  if (["documents required", "documents submitted", "approved"].includes(status)) {
    base.push({ title: "Documents requested", actor: "University", note: "University requested missing documents or corrections." });
  }
  if (["documents submitted", "approved"].includes(status)) {
    base.push({ title: "Requested documents submitted", actor: "Applicant", note: "Applicant uploaded the requested documents." });
  }
  if (["approved", "rejected", "withdrawn"].includes(status)) {
    base.push({ title: statusInfo.label, actor: status === "withdrawn" ? "Applicant" : "University", note: `Recorded on ${updated}.` });
  }
  (row.demoActivity || []).forEach((activity) => base.push({ title: activity.title, actor: activity.time, note: activity.note }));
  return base;
}

function buildSideReviewContent(row, status, applicantType, code) {
  const requestState = row?.dataset.documentRequest || "";
  const requestHistory = row?.demoDocumentRequests || [];
  const uploadedDocuments = row?.demoUploadedDocuments || [];
  const documentVerified = ["documents submitted", "approved"].includes(status);
  const documentRows = [
    { name: "Passport copy", note: `Applicant - ${code}`, chipLabel: documentVerified ? "Verified" : status === "documents required" ? "Action needed" : "Submitted", chip: documentVerified ? "green" : status === "documents required" ? "amber" : "blue", actions: ["View", "Download"] }
  ];
  requestHistory.forEach((request, index) => {
    documentRows.push({ name: `Request ${index + 1}: ${request.title}`, note: `University - ${request.message}`, chipLabel: "Requested", chip: "amber", actions: [] });
    uploadedDocuments
      .filter((documentItem) => documentItem.requestId === request.id)
      .forEach((documentItem) => {
        documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"] });
      });
  });
  if (status === "documents required" && !requestHistory.length) {
    documentRows.push({ name: requestState || "Additional documents or correction", note: "University request - applicant response pending", chipLabel: "Requested", chip: "amber", actions: [] });
  }

  const renderRow = (item) => `
    <div class="application-side-doc-row">
      <div>
        <strong>${item.name}</strong>
        <small>${item.note}</small>
      </div>
      <div>
        ${item.chipLabel === "Submitted" && item.actions.length ? "" : createStatusChip(item.chipLabel, item.chip).outerHTML}
        ${item.actions.map((action) => `<button type="button" data-doc-action="${action.toLowerCase()}" data-preview-title="${item.name}" data-preview-section="document">${action}</button>`).join("")}
      </div>
    </div>`;
  const offerLetterContent = status === "approved" ? `
    <div class="application-side-offer-letter">
      <div>
        <strong>Offer letter</strong>
        <small>Generated and sent to the participant after approval.</small>
      </div>
      <div>
        ${createStatusChip("Sent", "green").outerHTML}
        <button type="button" data-doc-action="view" data-preview-title="Offer letter" data-preview-section="offer letter">View</button>
        <button type="button" data-doc-action="download" data-preview-title="Offer letter" data-preview-section="offer letter">Download</button>
      </div>
    </div>` : "";

  return `
    <section class="application-side-review-block documents-card" data-side-section="documents">
      <h4>Documents</h4>
      ${documentRows.map(renderRow).join("")}
      ${offerLetterContent}
    </section>
  `;
}

function buildSidePostApprovalContent(status, row = null) {
  const available = status === "approved";
  const savedFiles = row?.demoPostApprovalFiles || [];
  const pendingFiles = row?.demoPendingPostApprovalFiles || [];
  const renderFileRows = (files, stateLabel) => files.map((file) => `
        <div class="application-side-post-file-row">
          <strong>${escapeAttribute(file.name)}</strong>
          <small>${stateLabel}</small>
        </div>`).join("");
  return `
    <h4 class="application-side-subtitle">Post-Approval Records</h4>
    <section class="application-side-review-block${available ? "" : " muted"}">
      <p class="application-side-post-note">${available ? "Optional record storage for documents shared after approval." : "Available after the application is approved."}</p>
      <div class="application-side-post-records">
        <div class="application-side-post-record">
          <strong>Applicant records</strong>
          <small>Visa / pass proof and payment proof</small>
        </div>
        <div class="application-side-post-record">
          <strong>University records</strong>
          <small>Certificate and attendance confirmation</small>
        </div>
      </div>
      <div class="application-side-post-file-list">
        <strong>Uploaded records</strong>
        ${savedFiles.length ? renderFileRows(savedFiles, "Saved record") : "<small class=\"application-side-post-empty\">No documents saved yet.</small>"}
        ${pendingFiles.length ? `<div class="application-side-post-pending"><strong>Ready to save</strong>${renderFileRows(pendingFiles, "Pending confirmation")}</div>` : ""}
      </div>
      <div class="application-side-post-actions">
        <button type="button" data-post-approval-upload ${available ? "" : "disabled"}>Upload document</button>
        <button type="button" data-post-approval-confirm ${available && pendingFiles.length ? "" : "disabled"}>Confirm upload</button>
        <button type="button" data-post-approval-download ${available ? "" : "disabled"}>Download all documents</button>
        <input type="file" data-post-approval-file multiple hidden>
      </div>
    </section>`;
}

function closeApplicationSidePanel() {
  document.documentElement.classList.remove("application-modal-open");
  document.body.classList.remove("application-modal-open");
  applicationSideBackdrop?.classList.remove("is-visible");
  if (applicationSidePanel) {
    window.clearTimeout(applicationSidePanelCloseTimer);
    if (!applicationSidePanel.hidden) {
      applicationSidePanel.classList.remove("is-open");
      applicationSidePanel.classList.add("is-closing");
      applicationSidePanelCloseTimer = window.setTimeout(() => {
        applicationSidePanel.hidden = true;
        if (applicationSideBackdrop) applicationSideBackdrop.hidden = true;
        applicationSidePanel.classList.remove("is-closing");
        applicationSidePanelCloseTimer = null;
      }, 280);
    } else {
      applicationSidePanel.hidden = true;
      if (applicationSideBackdrop) applicationSideBackdrop.hidden = true;
      applicationSidePanel.classList.remove("is-open", "is-closing");
      applicationSidePanelCloseTimer = null;
    }
  }
  applicationRows.forEach((row) => row.classList.remove("selected-row"));
}

function getApplicationSideOrder() {
  if (!currentApplicationOrder.length) updateApplicationRows();
  return currentApplicationOrder.length ? currentApplicationOrder : [...applicationRows].filter((row) => !row.hidden);
}

function goToAdjacentApplication(direction) {
  if (!activeApplicantRow) return;
  const order = getApplicationSideOrder();
  const currentIndex = order.indexOf(activeApplicantRow);
  const nextRow = order[currentIndex + direction];
  if (!nextRow) return;
  const activeSideTab = getActiveApplicationSideTab();
  const pageSize = applicantsPerPage?.value || "25";
  const limit = pageSize === "all" ? Infinity : Number(pageSize);
  if (limit !== Infinity) {
    currentApplicationPage = Math.floor((currentIndex + direction) / limit) + 1;
    updateApplicationRows();
  }
  renderApplicationSidePanel(nextRow, activeSideTab);
}

function getActiveApplicationSideTab() {
  return applicationSidePanel?.querySelector("[data-side-tab].active")?.dataset.sideTab || "overview";
}

function renderApplicationSidePanel(row, preferredTab = getActiveApplicationSideTab()) {
  if (!row || !applicationSidePanel) return;
  activeApplicantRow = row;
  applicationRows.forEach((item) => item.classList.toggle("selected-row", item === row));
  const name = row.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = row.querySelector(".applicant-link small")?.textContent.trim() || "";
  const nationality = row.children[1]?.textContent.trim() || "";
  const programme = row.querySelector(".programme-name")?.textContent.trim() || "";
  const applied = row.children[3]?.textContent.trim() || "";
  const updated = row.children[6]?.textContent.trim() || "";
  const status = row.dataset.applicationStatus || "submitted";
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const applicantType = getApplicantType(row);
  const programmeInfo = programmeMeta[row.dataset.programme] || { category: "Science and Technology (SAT)", fee: "RM 3,000" };
  const requiresStudentPass = applicantType.toLowerCase().includes("student pass");
  const applicationSummary = `
    <div class="application-current-stage-summary">
      <div class="application-current-stage-summary-divider" aria-hidden="true"></div>
      <h5>Application Summary</h5>
      <div class="application-current-stage-summary-fields">
        <div><span>Applied Date</span><strong>${applied}</strong></div>
        <div><span>Current Status</span><strong>${statusInfo.label}</strong></div>
        <div><span>Last Updated</span><strong>${updated}</strong></div>
        <div><span>Immigration</span><strong>${requiresStudentPass ? "Student Pass Required" : "Not required"}</strong></div>
      </div>
    </div>`;
  const currentStagePanel = getCurrentApplicationStagePanel(status, row, applicationSummary);
  const activityItems = buildSideActivity(row, status, statusInfo, applied, updated);
  const documentsContent = buildSideReviewContent(row, status, applicantType, code);
  const postApprovalContent = buildSidePostApprovalContent(status, row);
  const validSideTabs = ["overview", "activity", "post-approval"];
  const activeSideTab = validSideTabs.includes(preferredTab) ? preferredTab : "overview";
  const orderedRows = getApplicationSideOrder();
  const sideIndex = orderedRows.indexOf(row);
  const hasPrevious = sideIndex > 0;
  const hasNext = sideIndex >= 0 && sideIndex < orderedRows.length - 1;
  window.clearTimeout(applicationSidePanelCloseTimer);
  applicationSidePanel.classList.remove("is-closing");
  document.documentElement.classList.add("application-modal-open");
  document.body.classList.add("application-modal-open");
  if (applicationSideBackdrop) {
    applicationSideBackdrop.hidden = false;
    applicationSideBackdrop.classList.remove("is-visible");
  }
  applicationSidePanel.hidden = false;
  window.requestAnimationFrame(() => {
    applicationSideBackdrop?.classList.add("is-visible");
    applicationSidePanel?.classList.add("is-open");
  });
  applicationSidePanel.innerHTML = `
    <div class="application-side-head">
      <div>
        <small>${code}</small>
        <h3>${name}</h3>
        <p>${programme} ${createStatusChip(statusInfo.label, statusInfo.chip).outerHTML}</p>
      </div>
      <div class="application-side-head-actions">
        <button type="button" data-application-side-nav="previous" ${hasPrevious ? "" : "disabled"} aria-label="Previous applicant">Prev</button>
        <button type="button" data-application-side-nav="next" ${hasNext ? "" : "disabled"} aria-label="Next applicant">Next</button>
        <button type="button" data-close-application-side aria-label="Close application quick view">X</button>
      </div>
    </div>
    <div class="application-side-layout">
      <div class="application-side-main">
        <div class="detail-tabs application-side-tabs" aria-label="Application quick view tabs">
          <button class="${activeSideTab === "overview" ? "active" : ""}" type="button" data-side-tab="overview">Overview</button>
          <button class="${activeSideTab === "activity" ? "active" : ""}" type="button" data-side-tab="activity">Activity Log</button>
          <button class="${activeSideTab === "post-approval" ? "active" : ""}" type="button" data-side-tab="post-approval">Post-Approval Records</button>
        </div>
        <div class="application-side-tab-panel${activeSideTab === "overview" ? " active" : ""}" data-side-panel="overview"${activeSideTab === "overview" ? "" : " hidden"}>
          <div class="application-side-card-grid">
            <article class="application-side-card applicant-card">
              <h4>Applicant Details</h4>
              <div class="application-side-fields">
                <div><span>Full Name</span><strong>${name}</strong></div>
                <div><span>Nationality</span><strong>${nationality}</strong></div>
                <div><span>Phone</span><strong>+60 11-555 ${code.slice(-4)}</strong></div>
                <div><span>Applicant Type</span><strong>${applicantType}</strong></div>
                <div><span>Email</span><strong>${code.toLowerCase().replace(/[^a-z0-9]+/g, ".")}@student.demo</strong></div>
                <div><span>Identification Type</span><strong>Passport</strong></div>
              </div>
            </article>
            <article class="application-side-card programme-card">
              <h4>Programme Details</h4>
              <div class="application-side-fields">
                <div><span>Programme</span><strong>${programme}</strong></div>
                <div><span>Category</span><strong>${programmeInfo.category}</strong></div>
                <div><span>Duration</span><strong>30 Days</strong></div>
                <div><span>Fee</span><strong>${programmeInfo.fee}</strong></div>
              </div>
            </article>
            ${documentsContent}
          </div>
        </div>
        <div class="application-side-tab-panel${activeSideTab === "activity" ? " active" : ""}" data-side-panel="activity"${activeSideTab === "activity" ? "" : " hidden"}>
          <h4 class="application-side-subtitle">Activity</h4>
          <div class="application-side-activity">
            ${activityItems.map((item) => `<div><strong>${item.title}</strong><small>${item.actor}</small><p>${item.note}</p></div>`).join("")}
          </div>
        </div>
        <div class="application-side-tab-panel${activeSideTab === "post-approval" ? " active" : ""}" data-side-panel="post-approval"${activeSideTab === "post-approval" ? "" : " hidden"}>
          ${postApprovalContent}
        </div>
      </div>
      <aside class="application-side-stage-column" aria-label="Current application stage">
        ${currentStagePanel}
        <div class="application-side-actions application-side-bottom-actions">
          <button type="button" data-expand-application-detail>Expand full view</button>
          <button type="button" data-download-application>Download application</button>
        </div>
      </aside>
    </div>
  `;
}

function handleApplicationAction(row, action) {
  if (!row) return;
  const normalized = action.toLowerCase();
  if (normalized === "pre-approve") {
    updateRowStatus(row, "pre-approved", "Pre-approved application", "University pre-approved the application.");
  } else if (normalized === "approve") {
    updateRowStatus(row, "approved", "Approved application", "University approved the application.");
  } else if (normalized === "reject") {
    updateRowStatus(row, "rejected", "Rejected application", "University rejected the application.");
  } else if (normalized === "open documents") {
    setActiveDetailTab("review");
    setReviewStage("documents");
  } else if (normalized === "send reminder") {
    openReminderConfirmModal(row, "document");
  }
}

function sendApplicationReminder(row, type = "document") {
  if (!row) return;
  const isFinal = type === "final";
  const title = isFinal ? "Sent final document reminder" : "Sent document reminder";
  const note = isFinal ? "University sent a reminder for pending final approval documents." : "University sent a reminder for pending documents.";
  addActivity(row, title, note);
  addAuditRecord({ action: `${title} for ${getApplicationAuditName(row)}`, entity: "Application" });
  row.children[6].textContent = getDemoDate();
  if (!isFinal) row.demoLastReminderAt = Date.parse(getDemoDate());
  updateApplicationRows();
  if (row === activeApplicantRow && applicationSidePanel && !applicationSidePanel.hidden) renderApplicationSidePanel(row, "documents");
  if (row === activeApplicantRow && applicantDetail && !applicantDetail.hidden) showApplicantDetail(row, { keepTab: true });
}

function handleDocumentAction(action, button = null) {
  if (!activeApplicantRow) return;
  if (action === "request-document") {
    openDocumentRequestModal();
  } else if (action === "request-final-document") {
    openDocumentRequestModal("final");
  } else if (action === "view") {
    openPreviewModal(button?.dataset.previewTitle || "Document", button?.dataset.previewSection || "document");
    addActivity(activeApplicantRow, "Viewed document", "University opened a submitted document for review.");
    addAuditRecord({ action: `Viewed document for ${getApplicationAuditName()}`, entity: "Application" });
    activeApplicantRow.children[6].textContent = getDemoDate();
  } else if (action === "download") {
    addActivity(activeApplicantRow, "Downloaded document", "University downloaded a submitted document.");
    addAuditRecord({ action: `Downloaded document for ${getApplicationAuditName()}`, entity: "Application" });
    activeApplicantRow.children[6].textContent = getDemoDate();
    updateApplicationRows();
    showDownloadedNotice(button);
  } else if (action === "verify") {
    activeApplicantRow.dataset.documentRequest = "";
    sendAutomaticOfferLetter();
  } else if (action === "send-offer") {
    sendAutomaticOfferLetter();
  } else if (action === "offer-email-preview") {
    openOfferEmailPreview(activeApplicantRow);
  } else if (action === "send-final-reminder") {
    openReminderConfirmModal(activeApplicantRow, "final");
  }
}

function sendAutomaticOfferLetter() {
  if (!activeApplicantRow) return;
  activeApplicantRow.dataset.documentRequest = "";
  updateRowStatus(activeApplicantRow, "pre-approved", "Verified documents and sent offer letter", "University verified documents and sent the automatic pre-approval offer letter generated from the template.");
}

function buildOfferEmailPreview(row) {
  const name = row?.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = getRowCode(row);
  const programme = row?.querySelector(".programme-name")?.textContent.trim() || "Programme";
  const applicantType = getApplicantType(row);
  const programmeInfo = programmeMeta[row?.dataset.programme] || { fee: "RM 3,000" };
  const isMalaysian = applicantType.toLowerCase().includes("malaysian");
  return `
    <div class="offer-email-preview">
      <div class="offer-email-logos">
        <img src="./MEG_2.png" alt="Malaysia EduTourism Gateway">
        <img src="./Logo.png" alt="University of Cyberjaya">
      </div>
      <h4>Pre-Approval Offer Letter</h4>
      <p><strong>Dear ${name},</strong></p>
      <p>We are pleased to confirm that ${name} has been pre-approved for ${programme} at University of Cyberjaya.</p>
      <div class="offer-programme-summary">
        <div><span>Programme</span><strong>${programme}</strong></div>
        <div><span>Duration</span><strong>30 Days</strong></div>
        <div><span>Fee</span><strong>${programmeInfo.fee}</strong></div>
        <div><span>Reference</span><strong>${code}</strong></div>
      </div>
      <p class="preview-visa-note">${isMalaysian ? "Malaysian applicant version: visa or student pass wording is omitted." : "International applicant version: this letter may be used to support visa or student pass related arrangements."}</p>
      <p>Regards,<br><strong>EduTourism Office<br>University of Cyberjaya</strong></p>
    </div>`;
}

function openOfferEmailPreview(row) {
  if (previewTitle) previewTitle.textContent = "Offer email preview";
  if (previewBody) previewBody.innerHTML = buildOfferEmailPreview(row);
  if (previewModal) previewModal.hidden = false;
}

function showDownloadedNotice(anchor) {
  document.querySelectorAll(".download-toast").forEach((toast) => toast.remove());
  const toast = document.createElement("span");
  toast.className = "download-toast";
  toast.textContent = "Downloaded";
  const target = anchor || document.body;
  target.insertAdjacentElement("afterend", toast);
  window.setTimeout(() => toast.remove(), 1400);
}

function downloadApplicationSummary(row, anchor) {
  if (!row) return;
  const name = row.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = row.querySelector(".applicant-link small")?.textContent.trim() || "";
  const nationality = row.children[1]?.textContent.trim() || "";
  const programme = row.querySelector(".programme-name")?.textContent.trim() || "";
  const applied = row.children[3]?.textContent.trim() || "";
  const updated = row.children[6]?.textContent.trim() || "";
  const status = statusMeta[row.dataset.applicationStatus || "submitted"]?.label || "Application";
  const applicantType = getApplicantType(row);
  const requiresStudentPass = applicantType.toLowerCase().includes("student pass");
  const summary = [
    "Application summary",
    "",
    `Applicant: ${name}`,
    `Tracking code: ${code}`,
    `Nationality: ${nationality}`,
    `Applicant type: ${applicantType}`,
    `Programme: ${programme}`,
    `Applied date: ${applied}`,
    `Current status: ${status}`,
    `Last updated: ${updated}`,
    `Immigration: ${requiresStudentPass ? "Student Pass Required" : "Not required"}`
  ].join("\n");
  const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${code || "application"}-summary.txt`;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  showDownloadedNotice(anchor);
  addActivity(row, "Downloaded application summary", "University downloaded the application summary from quick view.");
  addAuditRecord({ action: `Downloaded application summary for ${getApplicationAuditName(row)}`, entity: "Application" });
}

function downloadPostApprovalDocuments(row, anchor) {
  const files = row?.demoPostApprovalFiles || [];
  files.forEach((file) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.hidden = true;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  });
  showDownloadedNotice(anchor);
  addActivity(row, "Downloaded post-approval records", files.length ? `University downloaded all ${files.length} uploaded post-approval document${files.length === 1 ? "" : "s"}.` : "University downloaded the post-approval records.");
  addAuditRecord({ action: `Downloaded all post-approval records for ${getApplicationAuditName(row)}`, entity: "Application" });
}

function openPreviewModal(title, section) {
  if (previewTitle) previewTitle.textContent = title;
  if (previewBody) {
    previewBody.innerHTML = "";
    previewBody.textContent = `Temporary preview placeholder for ${title}. In the full system, this area would show the uploaded ${section.toLowerCase()} file, metadata, and review notes.`;
  }
  if (previewModal) previewModal.hidden = false;
}

function closePreviewModal() {
  if (previewModal) previewModal.hidden = true;
}

function openDocumentRequestModal(mode = "document") {
  pendingDocumentAction = mode === "final" ? "request-final-document" : "request-document";
  if (documentRequestTitle) {
    documentRequestTitle.textContent = mode === "final" ? "Request final document / correction" : "Request new document / correction";
  }
  if (documentRequestLabel) {
    documentRequestLabel.textContent = "Message to applicant";
  }
  if (documentRequestMessage) {
    documentRequestMessage.value = "";
    documentRequestMessage.placeholder = mode === "final" ? "Tell the applicant which final document needs to be corrected or uploaded" : "Tell the applicant which document is needed or what needs to be corrected";
  }
  if (documentRequestModal) documentRequestModal.hidden = false;
  documentRequestMessage?.focus();
}

function closeDocumentRequestModal() {
  pendingDocumentAction = "";
  if (documentRequestModal) documentRequestModal.hidden = true;
}

function submitDocumentRequest() {
  if (!activeApplicantRow || !pendingDocumentAction) return;
  const message = documentRequestMessage?.value.trim();
  const isFinalRequest = pendingDocumentAction === "request-final-document";
  const requestTitle = isFinalRequest ? "Final document / correction requested" : "New document / correction requested";
  const requestMessage = message || (isFinalRequest ? "University requested a final approval document or correction from the applicant." : "University requested a new document or correction from the applicant.");
  activeApplicantRow.demoDocumentRequests = activeApplicantRow.demoDocumentRequests || [];
  activeApplicantRow.demoDocumentRequests.push({ id: Date.now().toString(), title: requestTitle, message: requestMessage, stage: isFinalRequest ? "final" : "documents" });
  activeApplicantRow.dataset.documentRequest = requestTitle;
  activeApplicantRow.dataset.documentRequestMessage = requestMessage;
  if (isFinalRequest) {
    activeApplicantRow.dataset.finalDocsSubmitted = "";
  } else {
    activeApplicantRow.demoDocRequestedAt = Date.parse(getDemoDate());
    activeApplicantRow.demoLastReminderAt = null;
  }
  updateRowStatus(activeApplicantRow, isFinalRequest ? "final documents required" : "documents required", requestTitle, requestMessage);
  closeDocumentRequestModal();
}

function openOfferLetterModal() {
  if (offerLetterFile) offerLetterFile.value = "";
  if (offerLetterMessage) offerLetterMessage.value = "";
  if (offerLetterModal) offerLetterModal.hidden = false;
  offerLetterMessage?.focus();
}

function closeOfferLetterModal() {
  if (offerLetterModal) offerLetterModal.hidden = true;
}

function submitOfferLetter() {
  if (!activeApplicantRow) return;
  const message = offerLetterMessage?.value.trim();
  const fileName = offerLetterFile?.files?.[0]?.name || "Offer letter";
  activeApplicantRow.dataset.offerLetterFile = fileName;
  activeApplicantRow.dataset.offerLetterMessage = message || "";
  closeOfferLetterModal();
  updateRowStatus(activeApplicantRow, "pre-approved", "Verified documents and sent offer letter", message || `University verified documents, uploaded ${fileName}, and sent it to the applicant.`);
}

function simulateApplicantDocumentSubmission() {
  if (!activeApplicantRow) return;
  activeApplicantRow.demoUploadedDocuments = activeApplicantRow.demoUploadedDocuments || [];
  const nextNumber = activeApplicantRow.demoUploadedDocuments.length + 1;
  const request = activeApplicantRow.demoDocumentRequests?.at(-1);
  activeApplicantRow.demoUploadedDocuments.push({
    name: nextNumber === 1 ? "Corrected / additional document" : `Corrected / additional document ${nextNumber}`,
    note: request?.message || "Applicant uploaded the requested document.",
    requestId: request?.id || ""
  });
  activeApplicantRow.dataset.documentRequest = "";
  activeApplicantRow.dataset.documentRequestMessage = "";
  updateRowStatus(activeApplicantRow, "documents submitted", "Applicant submitted requested document", "Applicant uploaded the requested document for university review.", { confirmed: true, auditUser: "Applicant" });
}

function simulateApplicantFinalDocuments() {
  if (!activeApplicantRow) return;
  activeApplicantRow.dataset.finalDocsSubmitted = "true";
  addActivity(activeApplicantRow, "Applicant submitted final documents", "Applicant uploaded proof of payment, signed offer letter, and visa document.");
  addAuditRecord({ user: "Applicant", action: `Submitted final documents for ${getApplicationAuditName()}`, entity: "Application" });
  updateRowStatus(activeApplicantRow, "final documents submitted", "Applicant submitted final documents", "Applicant uploaded proof of payment, signed offer letter, and visa document.", { confirmed: true, auditUser: "Applicant" });
}

function getApplicantType(row) {
  const value = row.dataset.applicantType || "";
  return value
    .split(" ")
    .map((word) => word ? word[0].toUpperCase() + word.slice(1) : "")
    .join(" ")
    .replace("Visitor/tourist", "Visitor/Tourist");
}

function setActiveDetailTab(tabName = "overview") {
  let targetButton = document.querySelector(`[data-detail-tab="${tabName}"]`);
  if (!targetButton) {
    tabName = "overview";
    targetButton = document.querySelector(`[data-detail-tab="${tabName}"]`);
  }
  if (targetButton?.disabled) return;
  detailTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.detailTab === tabName);
  });
  detailTabPanels.forEach((panel) => {
    const isActive = panel.dataset.detailPanel === tabName;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });
}

function updateDetailTabAvailability(status) {
  detailTabButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("disabled");
  });
}

function createStatusChip(label, chip = "neutral") {
  const span = document.createElement("span");
  span.className = `status-chip ${chip}`;
  span.textContent = label;
  return span;
}

function renderDocuments(row, status, applicantType, code) {
  const requestState = row?.dataset.documentRequest || "";
  const requestHistory = row?.demoDocumentRequests || [];
  const uploadedDocuments = row?.demoUploadedDocuments || [];
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const documentVerified = ["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const offerFile = row?.dataset.offerLetterFile || "Offer letter";
  const documentRows = [
    { name: "Passport copy", note: `Applicant - ${code}`, chipLabel: documentVerified ? "Verified" : status === "documents required" ? (requestState || "Action needed") : "Submitted", chip: documentVerified ? "green" : status === "documents required" ? "amber" : "blue", actions: ["View", "Download"] }
  ];
  requestHistory.filter((request) => request.stage !== "final").forEach((request, index) => {
    documentRows.push({ name: `Request ${index + 1}: ${request.title}`, note: `University - ${request.message}`, chipLabel: "Requested", chip: "amber", actions: [], type: "request" });
    uploadedDocuments
      .filter((documentItem) => documentItem.requestId === request.id)
      .forEach((documentItem) => {
        documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"], type: "reply" });
      });
  });
  uploadedDocuments
    .filter((documentItem) => !documentItem.requestId)
    .forEach((documentItem) => {
      documentRows.push({ name: documentItem.name, note: `Applicant - ${documentItem.note}`, chipLabel: "Submitted", chip: "blue", actions: ["View", "Download"], type: "reply" });
    });

  const reviewItems = [
    {
      section: "Document Review & Offer Letter",
      locked: false,
      rows: [
        ...documentRows,
        { name: offerSent ? offerFile : "Offer letter not uploaded", note: offerSent ? `University - ${code}` : "Offer letter will appear here after upload.", chipLabel: offerSent ? "Sent" : documentVerified ? "Ready" : "Locked", chip: offerSent ? "green" : documentVerified ? "blue" : "neutral", actions: offerSent ? ["View", "Download"] : [] }
      ]
    }
  ];

  const list = document.querySelector("#detailDocuments");
  if (!list) return;
  list.innerHTML = "";
  reviewItems.forEach((section) => {
    const sectionWrap = document.createElement("div");
    sectionWrap.className = `review-section${section.locked ? " muted" : ""}`;
    sectionWrap.innerHTML = `<h4>${section.section}</h4>`;
    if (section.locked) {
      const lockedNote = document.createElement("p");
      lockedNote.className = "locked-note";
      lockedNote.textContent = section.lockedMessage;
      sectionWrap.appendChild(lockedNote);
    }
    section.rows.forEach((documentItem) => {
      const row = document.createElement("div");
      row.className = `document-row${documentItem.type ? ` ${documentItem.type}` : ""}`;
      const content = document.createElement("div");
      content.innerHTML = `<strong>${documentItem.name}</strong><small>${documentItem.note}</small>`;
      const meta = document.createElement("div");
      meta.className = "document-meta";
      documentItem.actions.forEach((action) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = action;
        if (action === "View") {
          button.dataset.docAction = "view";
          button.dataset.previewTitle = documentItem.name;
          button.dataset.previewSection = section.section;
        }
        if (action === "Download") button.dataset.docAction = "download";
        meta.appendChild(button);
      });
      row.append(content, meta);
      sectionWrap.appendChild(row);
    });
    list.appendChild(sectionWrap);
  });

  renderUniversityActions(status);
}

function getUniversityActions(status) {
  const states = {
    submitted: {
      title: "Document decision",
      note: "A new applicant submission is ready for university review.",
      actions: [{ label: "Verify documents & send offer letter", action: "verify", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "documents required": {
      title: "Waiting for applicant",
      note: "A document request was sent. You can send another request while waiting.",
      actions: [{ label: "Simulate applicant submitted", status: "submitted", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "documents submitted": {
      title: "Offer letter required",
      note: "Documents are verified. Send the automatic offer letter to move this application to pre-approved.",
      actions: [{ label: "Verify documents & send offer letter", action: "send-offer", primary: true }, { label: "Request new document / correction", action: "request-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "pre-approved": {
      title: "Waiting for final documents",
      note: "Offer letter has been sent. Wait for the applicant to submit proof of payment and signed documents.",
      actions: [{ label: "Simulate applicant sent all necessary documents", status: "final documents submitted", primary: true }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "final documents required": {
      title: "Waiting for final correction",
      note: "A final document request was sent. Wait for the applicant to upload the corrected final documents.",
      actions: [{ label: "Simulate applicant sent all necessary documents", status: "final documents submitted", primary: true }, { label: "Request another correction", action: "request-final-document" }, { label: "Send reminder", action: "send-final-reminder" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    "final documents submitted": {
      title: "Final decision",
      note: "Final documents have been submitted. Check proof of payment before approving or rejecting.",
      actions: [{ label: "Approve", status: "approved", primary: true }, { label: "Request final document / correction", action: "request-final-document" }, { label: "Put on hold", status: "on hold" }, { label: "Reject", status: "rejected" }]
    },
    approved: {
      title: "Application approved",
      note: "Final university approval has been recorded.",
      result: "approved",
      actions: []
    },
    rejected: {
      title: "Application rejected",
      note: "Final university rejection has been recorded.",
      result: "rejected",
      actions: []
    },
    "on hold": {
      title: "Application on hold",
      note: "Application is paused, for example because places are filled or a decision is pending.",
      result: "hold",
      actions: [{ label: "Continue review", status: "submitted", primary: true }, { label: "Reject", status: "rejected" }]
    },
    withdrawn: {
      title: "Application withdrawn",
      note: "The applicant removed this application from consideration.",
      actions: []
    }
  };
  return states[status] || states.submitted;
}

function getProcessStageLabel(status) {
  const stages = {
    submitted: "Document review & offer letter",
    "documents required": "Document review & offer letter",
    "documents submitted": "Document review & offer letter",
    "pre-approved": "Final approval",
    "final documents required": "Final approval",
    "final documents submitted": "Final approval",
    approved: "Final approved",
    rejected: "Rejected",
    "on hold": "On hold",
    withdrawn: "Withdrawn"
  };
  return stages[status] || "Document review & offer letter";
}

function getDefaultReviewStage(status = activeApplicantRow?.dataset.applicationStatus || "submitted") {
  return ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status) ? "approval" : "documents";
}

function setReviewStage(stage = "") {
  activeReviewStage = stage;
  const home = document.querySelector("#reviewStageHome");
  const documentDetail = document.querySelector("#documentReviewDetail");
  const approvalDetail = document.querySelector("#approvalReviewDetail");
  if (home) home.hidden = true;
  if (documentDetail) documentDetail.hidden = stage !== "documents";
  if (approvalDetail) approvalDetail.hidden = stage !== "approval";
}

function renderReviewStageCards(status) {
  const documentVerified = ["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const finalDone = ["approved", "rejected"].includes(status);
  const documentCard = document.querySelector('[data-review-stage="documents"]');
  const approvalCard = document.querySelector('[data-review-stage="approval"]');
  const toFinalApproval = document.querySelector("#toFinalApproval");
  setText("#documentStageTitle", documentVerified ? "Documents reviewed and offer letter sent" : "Review documents and send offer letter");
  setText("#documentStageNote", offerSent ? "Offer letter has been sent. You can still view the document record." : "Check uploaded documents, request corrections, or send the automatic offer letter.");
  setText("#approvalStageTitle", finalDone ? "Final decision recorded" : offerSent ? "Ready for final approval" : "Proof of payment review");
  setText("#approvalStageNote", offerSent ? "Review proof of payment and record the final university decision." : "Available after the offer letter is sent.");
  documentCard?.classList.toggle("current", !offerSent && !finalDone);
  documentCard?.classList.toggle("complete", offerSent || finalDone);
  approvalCard?.classList.toggle("current", offerSent && !finalDone);
  approvalCard?.classList.toggle("complete", status === "approved");
  approvalCard?.classList.toggle("locked", !offerSent);
  if (approvalCard) approvalCard.disabled = !offerSent;
  if (toFinalApproval) {
    toFinalApproval.disabled = !offerSent;
    toFinalApproval.classList.toggle("disabled", !offerSent);
  }
  if (activeReviewStage === "approval" && !offerSent) activeReviewStage = "";
  if (!activeReviewStage) setReviewStage(getDefaultReviewStage(status));
}

function renderUniversityActions(status) {
  const actionsWrap = document.querySelector("#detailActions");
  const documentRiskActionsWrap = document.querySelector("#documentRiskActions");
  const approvalRiskActionsWrap = document.querySelector("#approvalRiskActions");
  const documentActionsWrap = document.querySelector("#documentHeaderActions");
  const approvalActionsWrap = document.querySelector("#approvalHeaderActions");
  if (!actionsWrap) return;
  const state = getUniversityActions(status);
  const finalDocsSubmitted = activeApplicantRow?.dataset.finalDocsSubmitted === "true" || ["final documents submitted", "approved"].includes(status);
  actionsWrap.innerHTML = "";
  if (documentRiskActionsWrap) documentRiskActionsWrap.innerHTML = "";
  if (approvalRiskActionsWrap) approvalRiskActionsWrap.innerHTML = "";
  if (documentActionsWrap) documentActionsWrap.innerHTML = "";
  if (approvalActionsWrap) approvalActionsWrap.innerHTML = "";

  const riskActions = state.actions.filter((item) => item.status === "on hold" || item.status === "rejected");
  const documentActions = state.actions.filter((item) => (item.action && item.action !== "request-final-document") || item.status === "submitted");
  const approvalActions = state.actions.filter((item) => item.status === "approved" || item.status === "final documents submitted" || item.action === "request-final-document");

  const stage = document.createElement("div");
  stage.className = "detail-stage-status";
  stage.innerHTML = `<span>Status:</span><strong>${getProcessStageLabel(status)}</strong>`;
  actionsWrap.appendChild(stage);

  documentActions.forEach((item) => {
    if (!documentActionsWrap) return;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    if (item.primary) button.className = "primary";
    if (item.action) button.dataset.docAction = item.action;
    if (item.status) button.dataset.decisionStatus = item.status;
    documentActionsWrap.appendChild(button);
  });

  approvalActions.forEach((item) => {
    if (!approvalActionsWrap) return;
    if (item.status === "approved" && !finalDocsSubmitted) {
      const simulateButton = document.createElement("button");
      simulateButton.type = "button";
      simulateButton.textContent = "Simulate applicant sent all necessary documents";
      simulateButton.dataset.finalDocAction = "simulate";
      approvalActionsWrap.appendChild(simulateButton);
    }
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    if (item.primary) button.className = "primary";
    if (item.action) button.dataset.docAction = item.action;
    if (item.status) button.dataset.decisionStatus = item.status;
    if (item.status === "final documents submitted") button.dataset.finalDocAction = "simulate";
    button.disabled = item.status === "approved" && !finalDocsSubmitted;
    button.classList.toggle("disabled", button.disabled);
    approvalActionsWrap.appendChild(button);
  });

  riskActions.forEach((item) => {
    const riskActionsWrap = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status) ? approvalRiskActionsWrap : documentRiskActionsWrap;
    if (!riskActionsWrap) return;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.dataset.actionLabel = item.label;
    button.dataset.decisionStatus = item.status;
    riskActionsWrap.appendChild(button);
  });

}

function renderFinalApproval(row, status, code) {
  const panel = document.querySelector("#finalApprovalPanel");
  if (!panel) return;
  const offerSent = ["pre-approved", "final documents required", "final documents submitted", "approved"].includes(status);
  const finalDocsSubmitted = row?.dataset.finalDocsSubmitted === "true" || ["final documents submitted", "approved"].includes(status);
  panel.innerHTML = "";
  const sectionWrap = document.createElement("div");
  sectionWrap.className = `review-section${!offerSent ? " muted" : ""}`;
  sectionWrap.innerHTML = "<h4>Final Approval</h4>";
  if (!offerSent) {
    const lockedNote = document.createElement("p");
    lockedNote.className = "locked-note";
    lockedNote.textContent = "Send the offer letter before final approval.";
    sectionWrap.appendChild(lockedNote);
  }
  const finalItems = finalDocsSubmitted
    ? [
      { name: "Proof of payment", note: `Applicant - ${code}`, actions: ["View", "Download"] },
      { name: "Signed offer letter", note: `Applicant - ${code}`, actions: ["View", "Download"] },
      { name: "Visa document", note: `Applicant - ${code}`, actions: ["View", "Download"] }
    ]
    : [
      { name: "Proof of payment pending", note: offerSent ? "Waiting for applicant to submit proof of payment." : "Available after the offer letter is sent.", actions: [] },
      { name: "Signed offer letter pending", note: offerSent ? "Waiting for applicant to return the signed offer letter." : "Available after the offer letter is sent.", actions: [] },
      { name: "Visa document pending", note: offerSent ? "Waiting for applicant to submit visa document if required." : "Available after the offer letter is sent.", actions: [] }
    ];
  (row?.demoDocumentRequests || [])
    .filter((request) => request.stage === "final")
    .forEach((request, index) => {
      sectionWrap.appendChild(createReviewRow({
        name: `Final request ${index + 1}: ${request.title}`,
        note: `University - ${request.message}`,
        actions: []
      }, "Final Approval"));
    });
  finalItems.forEach((item) => {
    sectionWrap.appendChild(createReviewRow(item, "Final Approval"));
  });
  panel.appendChild(sectionWrap);
}

function createReviewRow(documentItem, sectionName) {
  const row = document.createElement("div");
  row.className = "document-row";
  const content = document.createElement("div");
  content.innerHTML = `<strong>${documentItem.name}</strong><small>${documentItem.note}</small>`;
  const meta = document.createElement("div");
  meta.className = "document-meta";
  documentItem.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = action;
    if (action === "View") {
      button.dataset.docAction = "view";
      button.dataset.previewTitle = documentItem.name;
      button.dataset.previewSection = sectionName;
    }
    if (action === "Download") button.dataset.docAction = "download";
    meta.appendChild(button);
  });
  row.append(content, meta);
  return row;
}

function renderActivity(row, status, statusInfo, name, code, applied, updated) {
  const activities = [
    { title: `${code} - New application received`, time: `${applied}, 9:20 AM by Applicant`, note: `${name} submitted a new application.` }
  ];

  if (["documents required", "documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved", "rejected", "on hold"].includes(status)) {
    activities.push({ title: `${code} - University decision step`, time: `${updated}, 10:15 AM by University Admin`, note: `${statusInfo.label} recorded.` });
  }
  if (["documents submitted", "pre-approved", "final documents required", "final documents submitted", "approved"].includes(status)) {
    activities.push({ title: `${code} - Uploaded document`, time: `${updated}, 11:05 AM by Applicant`, note: "Requested document uploaded for verification." });
  }
  if (status === "withdrawn") {
    activities.push({ title: `${code} - Application withdrawn`, time: `${updated}, 3:10 PM by Applicant`, note: "Applicant withdrew the application." });
  }
  if (row?.demoActivity?.length) {
    activities.push(...row.demoActivity);
  }

  const list = document.querySelector("#detailActivity");
  if (!list) return;
  list.innerHTML = "";
  const exportRow = document.createElement("div");
  exportRow.className = "request-row activity-export";
  const exportContent = document.createElement("div");
  exportContent.innerHTML = "<strong>Audit trail</strong><small>Read-only record for university review and compliance.</small>";
  const exportMeta = document.createElement("div");
  exportMeta.className = "request-meta";
  const exportButton = document.createElement("button");
  exportButton.type = "button";
  exportButton.textContent = "Export log";
  exportButton.dataset.auditAction = "export";
  exportMeta.appendChild(exportButton);
  exportRow.append(exportContent, exportMeta);
  list.appendChild(exportRow);
  activities.reverse().forEach((activity) => {
    const item = document.createElement("div");
    item.className = "activity-item";
    item.innerHTML = `<strong>${activity.title}</strong><span>${activity.time}</span><p>${activity.note}</p>`;
    list.appendChild(item);
  });
  setText("#activitySummary", `${activities.length} events`);
}

function showApplicantDetail(row, options = {}) {
  const currentTab = document.querySelector("[data-detail-tab].active")?.dataset.detailTab || "overview";
  const currentReviewStage = activeReviewStage;
  activeApplicantRow = row;
  const name = row.querySelector(".applicant-name")?.textContent.trim() || "Applicant";
  const code = row.querySelector(".applicant-link small")?.textContent.trim() || "";
  const email = `${getRowCode(row).toLowerCase().replace(/[^a-z0-9]+/g, ".")}@student.demo`;
  const nationality = row.children[1]?.textContent.trim() || "";
  const programme = row.querySelector(".programme-name")?.textContent.trim() || "";
  const applied = row.children[3]?.textContent.trim() || "";
  const updated = row.children[6]?.textContent.trim() || "";
  const status = row.dataset.applicationStatus || "submitted";
  const statusInfo = statusMeta[status] || statusMeta.submitted;
  const programmeInfo = programmeMeta[row.dataset.programme] || { category: "Science and Technology (SAT)", fee: "RM 3,000" };
  const applicantType = getApplicantType(row);
  const requiresStudentPass = applicantType.toLowerCase().includes("student pass");

  closeApplicationSidePanel();

  setText("#detailName", name);
  setText("#detailCode", code);
  setText("#detailProgramme", programme);
  setText("#detailNationality", nationality);
  setText("#detailType", applicantType);
  setText("#detailFullName", name);
  setText("#detailNationalityCard", nationality);
  setText("#detailEmail", email);
  setText("#detailPhone", "+60 11-555 " + code.slice(-4));
  setText("#detailApplicantTypeCard", applicantType);
  setText("#detailProgrammeCard", programme);
  setText("#detailCategory", programmeInfo.category);
  setText("#detailFee", programmeInfo.fee);
  setText("#detailApplied", applied);
  setText("#detailStatusText", statusInfo.label);
  setText("#detailUpdated", updated);
  setText("#detailTracking", code);
  setText("#detailImmigration", requiresStudentPass ? "Student Pass Required" : "Not required");
  setText("#detailVisitor", applicantType.toLowerCase().includes("visitor") ? "Visitor/Tourist eligible" : "Not applicable");

  const detailStatus = document.querySelector("#detailStatus");
  if (detailStatus) {
    detailStatus.className = `status-chip ${statusInfo.chip}`;
    detailStatus.textContent = statusInfo.label;
  }

  updateDetailTabAvailability(status);
  renderUniversityActions(status);
  renderDocuments(row, status, applicantType, code);
  renderFinalApproval(row, status, code);
  renderReviewStageCards(status);
  renderActivity(row, status, statusInfo, name, code, applied, updated);
  setActiveDetailTab(options.keepTab ? currentTab : "overview");
  if (options.keepTab && currentTab === "review") setReviewStage(currentReviewStage);
  if (!options.keepTab) setReviewStage(getDefaultReviewStage(status));

  if (applicationTableWrap) applicationTableWrap.hidden = true;
  if (paginationRow) paginationRow.hidden = true;
  if (tableOptionsPanel) tableOptionsPanel.hidden = true;
  if (applicationsFilterPanel) applicationsFilterPanel.hidden = true;
  if (applicantDetail) applicantDetail.hidden = false;
  applicationsPage?.classList.add("detail-mode");
  if (!options.keepTab) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

detailTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveDetailTab(button.dataset.detailTab);
    if (button.dataset.detailTab === "review") setReviewStage(getDefaultReviewStage());
  });
});

document.querySelector("#detailDocuments")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-doc-action]");
  if (!button) return;
  handleDocumentAction(button.dataset.docAction, button);
});

document.querySelector("#finalApprovalPanel")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-doc-action]");
  if (!button) return;
  handleDocumentAction(button.dataset.docAction, button);
});

document.querySelector("#documentHeaderActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  const status = button.dataset.decisionStatus;
  if (status === "submitted") {
    simulateApplicantDocumentSubmission();
    return;
  }
  if (status === "final documents submitted") {
    simulateApplicantFinalDocuments();
    return;
  }
  const label = button.textContent.trim();
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

document.querySelector("#approvalHeaderActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-final-doc-action], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  if (button.dataset.finalDocAction === "simulate") {
    simulateApplicantFinalDocuments();
    return;
  }
  const status = button.dataset.decisionStatus;
  if (button.disabled) return;
  const label = button.textContent.trim();
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

document.querySelector("#toFinalApproval")?.addEventListener("click", () => {
  if (document.querySelector("#toFinalApproval")?.disabled) return;
  setReviewStage("approval");
});

document.querySelector("#detailActions")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-decision-status], [data-doc-action]");
  if (!button) return;
  if (button.dataset.docAction) {
    handleDocumentAction(button.dataset.docAction, button);
    return;
  }
  const status = button.dataset.decisionStatus;
  const label = button.textContent.trim();
  if (status === "final documents submitted") {
    simulateApplicantFinalDocuments();
    return;
  }
  updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
});

["#documentRiskActions", "#approvalRiskActions"].forEach((selector) => {
  document.querySelector(selector)?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-decision-status]");
    if (!button) return;
    const status = button.dataset.decisionStatus;
    const label = button.dataset.actionLabel || button.textContent.trim();
    updateRowStatus(activeApplicantRow, status, `${label} application`, `University selected ${label.toLowerCase()} for this application.`);
  });
});

document.querySelector("#detailActivity")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-audit-action='export']");
  if (!button || !activeApplicantRow) return;
  addActivity(activeApplicantRow, "Exported activity log", "University exported the audit trail for this application.");
  activeApplicantRow.children[6].textContent = getDemoDate();
  showApplicantDetail(activeApplicantRow, { keepTab: true });
});

sendDocumentRequest?.addEventListener("click", submitDocumentRequest);
closeDocumentRequest?.addEventListener("click", closeDocumentRequestModal);
cancelDocumentRequest?.addEventListener("click", closeDocumentRequestModal);
documentRequestModal?.addEventListener("click", (event) => {
  if (event.target === documentRequestModal) event.stopPropagation();
});

sendOfferLetter?.addEventListener("click", (event) => {
  event.preventDefault();
  submitOfferLetter();
});
closeOfferLetter?.addEventListener("click", closeOfferLetterModal);
cancelOfferLetter?.addEventListener("click", closeOfferLetterModal);
offerLetterModal?.addEventListener("click", (event) => {
  if (event.target === offerLetterModal) event.stopPropagation();
});

closePreview?.addEventListener("click", closePreviewModal);
donePreview?.addEventListener("click", closePreviewModal);
previewModal?.addEventListener("click", (event) => {
  if (event.target === previewModal) event.stopPropagation();
});

applyStatusConfirm?.addEventListener("click", () => {
  if (pendingReminderAction) {
    const action = pendingReminderAction;
    closeStatusConfirmModal();
    sendApplicationReminder(action.row, action.type);
    return;
  }
  if (pendingProgrammeAction) {
    const action = pendingProgrammeAction;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeAction = null;
    pendingProgrammeActionAudit = null;
    closeStatusConfirmModal();
    action();
    if (audit) addAuditRecord(audit);
    return;
  }
  if (pendingProgrammeDelete) {
    const row = pendingProgrammeDelete;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeDelete = null;
    pendingProgrammeStatusChange = null;
    pendingProgrammeAction = null;
    pendingProgrammeActionAudit = null;
    if (statusConfirmModal) statusConfirmModal.hidden = true;
    row.remove();
    if (audit) addAuditRecord(audit);
    activeProgrammeRow = null;
    programmeRows = document.querySelectorAll(".programmes-table tbody tr");
    updateProgrammeRows();
    showProgrammesList();
    return;
  }
  if (pendingProgrammeStatusChange) {
    const change = pendingProgrammeStatusChange;
    const audit = pendingProgrammeActionAudit;
    pendingProgrammeStatusChange = null;
    pendingProgrammeActionAudit = null;
    closeStatusConfirmModal();
    updateActiveProgrammeStatus(change.status, change.chipClass);
    if (audit) addAuditRecord(audit);
    return;
  }
  if (!pendingStatusChange) return;
  const change = pendingStatusChange;
  closeStatusConfirmModal();
  updateRowStatus(change.row, change.status, change.activityTitle, change.activityNote, { confirmed: true });
});

closeStatusConfirm?.addEventListener("click", closeStatusConfirmModal);
cancelStatusConfirm?.addEventListener("click", closeStatusConfirmModal);
statusConfirmModal?.addEventListener("click", (event) => {
  if (event.target === statusConfirmModal) event.stopPropagation();
});

applicationRows.forEach((row) => {
  row.querySelector(".applicant-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    renderApplicationSidePanel(row);
  });
  row.querySelector('[aria-label="View application"]')?.addEventListener("click", () => {
    renderApplicationSidePanel(row);
  });
});

applicationSidePanel?.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-application-side-nav]");
  if (navButton && !navButton.disabled) {
    goToAdjacentApplication(navButton.dataset.applicationSideNav === "next" ? 1 : -1);
    return;
  }
  if (event.target.closest("[data-close-application-side]")) {
    closeApplicationSidePanel();
    return;
  }
  const sideTab = event.target.closest("[data-side-tab]");
  if (sideTab) {
    applicationSidePanel.querySelectorAll(".application-side-tabs [data-side-tab]").forEach((button) => button.classList.toggle("active", button.dataset.sideTab === sideTab.dataset.sideTab));
    applicationSidePanel.querySelectorAll("[data-side-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.sidePanel !== sideTab.dataset.sideTab;
      panel.classList.toggle("active", !panel.hidden);
    });
    if (sideTab.dataset.sideFocus) {
      applicationSidePanel.querySelector(`[data-side-section="${sideTab.dataset.sideFocus}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }
  const postApprovalUpload = event.target.closest("[data-post-approval-upload]");
  if (postApprovalUpload && activeApplicantRow) {
    applicationSidePanel.querySelector("[data-post-approval-file]")?.click();
    return;
  }
  const postApprovalConfirm = event.target.closest("[data-post-approval-confirm]");
  if (postApprovalConfirm && activeApplicantRow) {
    const pendingFiles = activeApplicantRow.demoPendingPostApprovalFiles || [];
    if (!pendingFiles.length) return;
    activeApplicantRow.demoPostApprovalFiles = activeApplicantRow.demoPostApprovalFiles || [];
    pendingFiles.forEach((file) => {
      const duplicate = activeApplicantRow.demoPostApprovalFiles.some((item) => item.name === file.name && item.lastModified === file.lastModified);
      if (!duplicate) activeApplicantRow.demoPostApprovalFiles.push(file);
    });
    activeApplicantRow.demoPendingPostApprovalFiles = [];
    const fileNames = pendingFiles.map((file) => file.name).join(", ");
    addActivity(activeApplicantRow, "Saved post-approval record", `University confirmed ${fileNames} for optional record keeping.`);
    addAuditRecord({ action: `Saved post-approval record for ${getApplicationAuditName()}`, entity: "Application" });
    activeApplicantRow.children[6].textContent = getDemoDate();
    updateApplicationRows();
    renderApplicationSidePanel(activeApplicantRow, "post-approval");
    return;
  }
  const postApprovalDownload = event.target.closest("[data-post-approval-download]");
  if (postApprovalDownload && activeApplicantRow) {
    downloadPostApprovalDocuments(activeApplicantRow, postApprovalDownload);
    return;
  }
  const applicationDownload = event.target.closest("[data-download-application]");
  if (applicationDownload && activeApplicantRow) {
    downloadApplicationSummary(activeApplicantRow, applicationDownload);
    return;
  }
  const docAction = event.target.closest("[data-doc-action]");
  if (docAction) {
    handleDocumentAction(docAction.dataset.docAction, docAction);
    return;
  }
  const decisionButton = event.target.closest("[data-decision-status]");
  if (decisionButton && activeApplicantRow) {
    updateRowStatus(activeApplicantRow, decisionButton.dataset.decisionStatus, `${statusMeta[decisionButton.dataset.decisionStatus]?.label || "Status"} recorded`, "University updated the application from the quick view.");
    return;
  }
  const sideAction = event.target.closest("[data-side-action]");
  if (sideAction && activeApplicantRow) {
    if (sideAction.dataset.sideAction === "simulate-final") {
      simulateApplicantFinalDocuments();
    } else if (sideAction.dataset.sideAction === "simulate-documents") {
      simulateApplicantDocumentSubmission();
    } else if (sideAction.dataset.sideAction === "remind") {
      const isFinal = activeApplicantRow.dataset.applicationStatus === "final documents required";
      if (!isFinal && !getDocumentReminderState(activeApplicantRow).canRemind) return;
      openReminderConfirmModal(activeApplicantRow, isFinal ? "final" : "document");
    }
    return;
  }
  if (event.target.closest("[data-expand-application-detail]") && activeApplicantRow) {
    showApplicantDetail(activeApplicantRow);
  }
});

applicationSidePanel?.addEventListener("change", (event) => {
  const fileInput = event.target.closest("[data-post-approval-file]");
  if (!fileInput || !activeApplicantRow || !fileInput.files?.length) return;
  activeApplicantRow.demoPendingPostApprovalFiles = activeApplicantRow.demoPendingPostApprovalFiles || [];
  [...fileInput.files].forEach((file) => {
    const duplicate = [...(activeApplicantRow.demoPostApprovalFiles || []), ...activeApplicantRow.demoPendingPostApprovalFiles].some((item) => item.name === file.name && item.lastModified === file.lastModified);
    if (!duplicate) activeApplicantRow.demoPendingPostApprovalFiles.push(file);
  });
  renderApplicationSidePanel(activeApplicantRow, "post-approval");
});

applicationSideBackdrop?.addEventListener("click", closeApplicationSidePanel);

programmeSidePanel?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-programme-side]")) {
    closeProgrammeSidePanel();
    return;
  }
  const sideTab = event.target.closest("[data-programme-side-tab]");
  if (sideTab) {
    programmeSidePanel.querySelectorAll("[data-programme-side-tab]").forEach((button) => button.classList.toggle("active", button.dataset.programmeSideTab === sideTab.dataset.programmeSideTab));
    programmeSidePanel.querySelectorAll("[data-programme-side-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.programmeSidePanel !== sideTab.dataset.programmeSideTab;
    });
    return;
  }
  const action = event.target.closest("[data-programme-side-action]");
  if (!action || !activeProgrammeRow) return;
  if (action.dataset.programmeSideAction === "view-applicants") {
    openProgrammeApplications(activeProgrammeRow);
    return;
  }
  if (action.dataset.programmeSideAction === "resubmit") {
    const row = activeProgrammeRow;
    openProgrammeActionConfirm(
      "Resubmit programme to KPT?",
      "This will send the existing programme back to KPT for review without changing its details. It will remain off the public listing until it is approved again.",
      () => {
        activeProgrammeRow = row;
        updateActiveProgrammeStatus("Pending KPT Approval", "status-chip amber");
        renderProgrammeSidePanel(row, "approval");
      },
      "Resubmit to KPT"
    );
    pendingProgrammeActionAudit = { entity: "Programme", action: `Resubmitted ${getProgrammeAuditName()} to KPT` };
    return;
  }
  if (action.dataset.programmeSideAction === "full-page") {
    const row = activeProgrammeRow;
    closeProgrammeSidePanel();
    showProgrammeDetail(row);
    return;
  }
  if (action.dataset.programmeSideAction === "edit") {
    const row = activeProgrammeRow;
    closeProgrammeSidePanel();
    showProgrammeDetail(row);
    window.requestAnimationFrame(() => editProgrammeDetails?.click());
  }
});

programmeSideBackdrop?.addEventListener("click", closeProgrammeSidePanel);

if (resetDemo) {
  resetDemo.addEventListener("click", () => {
    initialApplicationState.forEach((state, row) => {
      row.dataset.applicationStatus = state.status;
      row.dataset.documentRequest = "";
      row.dataset.documentRequestMessage = "";
      row.dataset.offerLetterFile = "";
      row.dataset.offerLetterMessage = "";
      row.dataset.finalDocsSubmitted = state.finalDocsSubmitted;
      row.demoActivity = [];
      row.demoDocumentRequests = [];
      row.demoUploadedDocuments = [];
      row.demoPostApprovalFiles = [];
      row.demoPendingPostApprovalFiles = [];
      if (state.status === "final documents required") {
        const requestMessage = "Proof of payment is unclear. Please upload a clearer copy and confirm the signed offer letter.";
        row.demoDocumentRequests.push({ id: `${getRowCode(row)}-final-request`, title: "Final document / correction requested", message: requestMessage, stage: "final" });
        row.dataset.documentRequest = "Final document / correction requested";
        row.dataset.documentRequestMessage = requestMessage;
      }
      row.demoDocRequestedAt = state.status === "documents required" ? Date.parse(state.updated || "") : null;
      row.demoLastReminderAt = null;
      row.children[4].innerHTML = state.statusHtml;
      row.children[6].textContent = state.updated;
      row.hidden = false;
    });
    if (programmeFilter) programmeFilter.value = "All programmes";
    if (applicantTypeFilter) applicantTypeFilter.value = "All applicant types";
    if (nationalityFilter) nationalityFilter.value = "Any nationality";
    if (applicationSearch) applicationSearch.value = "";
    if (applicantsPerPage) applicantsPerPage.value = "25";
    columnToggles.forEach((toggle) => {
      toggle.checked = true;
    });
    statusGroupToggles.forEach((toggle) => {
      toggle.checked = true;
    });
    syncAllStatusFilter();
    currentApplicationPage = 1;
    updateVisibleColumns();
    updateApplicationRows();
    resetProgrammesDemoState();
    resetUserManagementDemoState();
    resetAuditDemoState();
    resetKptComplianceState();
    resetHelpDemoState();
    resetSettingsDemoState();
    resetNotificationsDemoState();
    if (activeApplicantRow && !applicantDetail?.hidden) {
      showApplicantDetail(activeApplicantRow, { keepTab: true });
    }
    closeDocumentRequestModal();
    closeOfferLetterModal();
    closePreviewModal();
    closeStatusConfirmModal();
    closeProgrammeChangesModal();
    closeRequestedChangesModal();
    closeKptNoticeModal();
    closeNotificationsPanel();
  });
}

if (backToApplications) {
  backToApplications.addEventListener("click", () => {
    showApplicationsList();
  });
}

tooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    tooltipTriggers.forEach((item) => {
      if (item !== trigger) item.classList.remove("tooltip-open");
    });
    trigger.classList.toggle("tooltip-open");
  });
});

sectionTooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    sectionTooltipTriggers.forEach((item) => {
      if (item !== trigger) item.classList.remove("tooltip-open");
    });
    trigger.classList.toggle("tooltip-open");
  });
});

document.addEventListener("click", () => {
  tooltipTriggers.forEach((trigger) => trigger.classList.remove("tooltip-open"));
  sectionTooltipTriggers.forEach((trigger) => trigger.classList.remove("tooltip-open"));
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(form).get("query").trim().toLowerCase();
    const searchable = getSearchableItems();
    searchable.forEach((item) => item.classList.remove("highlight"));
    if (!query) return;

    const match = searchable.find((item) => item.dataset.keywords.includes(query));
    if (match) {
      match.classList.add("highlight");
      match.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

const applicationRange = document.querySelector("#applicationRange");
const applicationDonut = document.querySelector("#applicationDonut");
const applicationTotal = document.querySelector("#applicationTotal");
const trendInterval = document.querySelector("#trendInterval");
const trendBars = document.querySelectorAll("#trendChart > div");

function parseApplicationDate(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return null;
  const parsed = new Date(`${match[2]} ${match[1]}, ${match[3]} 00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function updateApplicationChart(range) {
  const donut = document.querySelector("#applicationDonut");
  const totalLabel = document.querySelector("#applicationTotal");
  const countLabels = document.querySelectorAll("[data-status-count]");
  if (!donut || !totalLabel) return;

  const rows = [...document.querySelectorAll(".applications-table tbody [data-application-status]")];
  const datedRows = rows.map((row) => ({
    row,
    date: parseApplicationDate(row.children[3]?.textContent)
  })).filter((item) => item.date);
  const latestDate = datedRows.length ? new Date(Math.max(...datedRows.map((item) => item.date.getTime()))) : null;
  const rangeDays = {
    "Last 7 days": 7,
    "Last 30 days": 30,
    "Last 3 months": 90,
    "Last 6 months": 180,
    "All time": null
  }[range] ?? null;
  const startDate = latestDate && rangeDays ? new Date(latestDate) : null;
  if (startDate) startDate.setDate(startDate.getDate() - (rangeDays - 1));

  const data = { submitted: 0, review: 0, approved: 0, other: 0 };
  datedRows.forEach(({ row, date }) => {
    if (startDate && (date < startDate || date > latestDate)) return;
    const status = row.dataset.applicationStatus;
    if (status === "submitted") data.submitted += 1;
    else if (["documents required", "documents submitted"].includes(status)) data.review += 1;
    else if (status === "approved") data.approved += 1;
    else data.other += 1;
  });

  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  const submittedEnd = total ? (data.submitted / total) * 100 : 0;
  const reviewEnd = total ? submittedEnd + (data.review / total) * 100 : 0;
  const approvedEnd = total ? reviewEnd + (data.approved / total) * 100 : 0;

  totalLabel.textContent = `${total} total`;
  donut.style.setProperty("--submitted-end", `${submittedEnd}%`);
  donut.style.setProperty("--review-end", `${reviewEnd}%`);
  donut.style.setProperty("--approved-end", `${approvedEnd}%`);
  countLabels.forEach((item) => {
    item.textContent = String(data[item.dataset.statusCount] ?? 0);
  });
}

if (applicationRange && applicationDonut && applicationTotal) {
  updateApplicationChart(applicationRange.value);
  applicationRange.addEventListener("change", () => updateApplicationChart(applicationRange.value));
}

const trendData = {
  Daily: [
    ["10 Aug", 14],
    ["11 Aug", 18],
    ["12 Aug", 24],
    ["13 Aug", 21],
    ["14 Aug", 31],
    ["15 Aug", 27],
    ["16 Aug", 36]
  ],
  Monthly: [
    ["Sep", 88],
    ["Oct", 94],
    ["Nov", 101],
    ["Dec", 97],
    ["Jan", 116],
    ["Feb", 124],
    ["Mar", 104],
    ["Apr", 128],
    ["May", 119],
    ["Jun", 146],
    ["Jul", 157],
    ["Aug", 172]
  ]
};

function updateTrendChart(interval) {
  const data = trendData[interval] || trendData.Daily;
  const max = Math.max(...data.map((item) => item[1]));
  document.querySelector("#trendChart")?.style.setProperty("--bar-count", data.length);

  trendBars.forEach((bar, index) => {
    if (!data[index]) {
      bar.hidden = true;
      return;
    }
    bar.hidden = false;
    const [label, value] = data[index];
    const height = Math.max(18, Math.round((value / max) * 100));
    const graphic = bar.querySelector("i");
    const caption = bar.querySelector("span");
    graphic.style.height = `${height}%`;
    graphic.dataset.value = value;
    graphic.setAttribute("aria-label", `${label}: ${value} applications`);
    caption.textContent = label;
  });
}

if (trendInterval && trendBars.length) {
  updateTrendChart(trendInterval.value);
  trendInterval.addEventListener("change", () => updateTrendChart(trendInterval.value));
}

