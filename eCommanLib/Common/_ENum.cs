using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

//namespace IndentSystem
//{
//    public class ENum
//    {
//    }
//}

public enum enConnectionFor
{
    CONFIG = 1,
    TRANSACTION = 2
}
public enum enShiftGroupDetailListBy
{
    SDL_SHIFT_ID = 0,
    SDL_SHIFTGROUP_ID = 1
}

public enum MessageBoxButtonsToDisplay
{
    OkOnly = 1,
    YesNo = 2
}
public enum enSelectionBy
{
    SELECTBY_CODE = 0,
    SELECTBY_NAME = 1
}


public enum enSearchBy
{
    SEARCHBY_CODE = 0,
    SEARCHBY_NAME = 1,
    SEARCHBY_NUMBER = 2
}

public enum enTerminal
{
    Serial = 1,
    Ethernet = 2
}

public enum enDeviceType
{
    BLACK_AND_WHITE = 0,
    IFACE = 1,
    TFT = 2
}

public enum enCommonCheck
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enCommonForComboBox
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enCommonSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enChargeSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
    SB_CHARGE_TYPE = 2
}


public enum enCarrierSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1
}

public enum enLoadTypeSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}


public enum enDescriptionSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enDepotSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enProductSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enCurrencySearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
}

public enum enCountrySearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
    SB_CURRENCY = 2,
}

public enum enAddress_Type
{
    ADDRESS_TYPE_NONE = 0,
    ADDRESS_TYPE_SENDER = 1,
    ADDRESS_TYPE_RECEIVER = 2,
    ADDRESS_TYPE_COLLECTION = 3,
    ADDRESS_TYPE_DELIVERY = 4,
}

public enum enAddressSearchBy
{
    SB_CODE = 0,
    SB_NAME = 1,
    SB_ACCOUNTNUMBER = 2,
    SB_COMPANYNAME = 3,
    SB_CONTACTPERSON = 4,
    SB_ADDRESS1 = 5,
    SB_ADDRESS2 = 6,
    SB_ADDRESS3 = 7,
    SB_CITY = 8,
    SB_STATE = 9,
    SB_COUNTRY = 10,
    SB_ZIP = 11,
    SB_EMAIL = 12,
    SB_PHONENUMBER = 13,
    SB_FAXNUMBER = 14,
    SB_TELEX = 15,
    SB_VATCODE = 16,
    SB_REFERENCE = 17,
    SB_DEPOT = 18
}

public enum enLoadStatus
{
    LOADED = 0,
    UNLOADED = 1
}

public enum enConsignmentSearchBy
{
    SEARCHBY_CONSIGNMENT_NUMBER = 0,
    SEARCHBY_CONSIGNMENT_NUMBER_ALTERNATE = 1,
    SEARCHBY_CONSIGNMENT_DATE = 2,
    SEARCHBY_CONSIGNMENT_ID = 3
}

public enum enLoadSearchBy
{
    SEARCHBY_LOAD_NUMBER = 0,
    SEARCHBY_UNLOAD_NUMBER = 1,
    SEARCHBY_LOAD_DATE = 2,
    SEARCHBY_LOAD_ID = 3
}

public enum enMaritalStatus
{
    All = 0,
    Married = 1,
    Unmarried = 2
}
public enum enGender
{
    All = 0,
    Male = 1,
    Female = 2
}

public enum enFullHalfDay
{
    FullDay = 1,
    HalfDay = 2
}
public enum enSectorSearchBy
{
    SECTORID = 0,
    SECTORNUMBER = 1,
    GENERATEDSECTORNUMBER = 2,
    SECTORDATE = 3,
    SECTORBILLTYPE = 4,
    SECTORBILLTYPENUMBER = 5,
    ORIGINDEPOT = 6,
    DESTINATIONDEPOT = 7,
    CARRIER = 8,
    MODEOFTRANSPORT = 9,
    GENERATEDMANIFESTNUMBER = 10
}

public enum enUnitSearchBy
{
    UNITID = 0,
    UNITNUMBER = 1,
    UNITDATE = 2,
    CONTENTTYPE = 3,
    VALUE = 4,
    ORIGINDEPOT = 5,
    DESTINATIONDEPOT = 6
}

public enum enUnitType
{
    AIRCRAFT = 0,
    TRAILER = 1,
    SWAPBODY = 2,
    VAN = 3,
    PALLET = 4,
    ULD = 5,
    CAGE = 6,
    MBAG = 7,
    BELLYCART = 8,
    OBAG = 9,
    TBAG = 10
}


public enum enDeliveryAllocationSearchBy
{
    SB_DELIVERY_ALLOCATION_NUMBER = 0,
    SB_CONSIGNMENTS = 1,
    SB_ROUND = 2,
    SB_DRIVER = 3
}



public enum enInvoiceSearchBy
{
    SEARCHBY_INVOICE_NUMBER = 0,
    SEARCHBY_INVOICE_DATE = 1,
    SEARCHBY_INVOICE_ID = 2
}


public enum enChartofAccountSearchBy
{
    SEARCHBY_COA_CODE = 0,
    SEARCHBY_COA_NAME = 1,
    SEARCHBY_COA_ACCOUNT_NUMBER = 2,
    SEARCHBY_COA_ID = 3
}

public enum enOperation
{
    ADD_RECORD = 0,
    MODIFY_RECORD = 1,
    DELETE_RECORD = 2,
    VIEW_RECORD = 3,
    PRINT_RECORD = 4
}

public enum enCharges_Type
{
    CT_INCOME = 0,
    CT_TAX = 1
}

public enum enRisk
{
    RISK_CR = 0,
    RISK_OR = 1
}

public enum enAccount_Group
{
    AG_Assets = 0,
    AG_Liabilities = 1,
    AG_Equity = 2,
    AG_Revenue = 3,
    AG_Expenses = 4
}

public enum enPaymentTerm
{
    PT_Payment_By_Sender = 0,
    PT_Payment_By_Receiver = 1
}

public enum enReceipt_Status
{
    RS_PENDING = 0,
    RS_PART_PENDING = 1,
    RS_FULL_PAYMENT = 2,
    RS_PAYMENT_DISC = 3
}

public enum enManifestMode
{
    MF_ROAD = 0,
    MF_AIR = 1
}


public enum enModeOfTransport
{
    MOF_TRUCK = 0,
    MOF_AIR_FRIEGHT = 1,
    MOF_COURIER = 2,
    MOF_DOMESTIC_DELIVERY = 3,
    MOF_UNACCOUMPANIED = 4
}

public enum enSectorBillType
{
    SBT_CBV = 0,
    SBT_MAWB = 1,
    SBT_SDO = 2
}

public enum enSectorStatus
{
    CREATED = 0,
    DISPATCHED = 1,
    INWARDED = 2
}
public enum enEmployeeImage
{
    EI_CAPTURE_IMAGE = 0,
    EI_UPLOAD_IMAGE = 1
}


public enum enShiftDetailListBy
{
    SDL_SHIFT_ID = 0,
    SDL_EMPPLOYEE_ID = 1
}

public enum enYesNo
{
    YN_YES = 0,
    YN_NO = 1
}
public enum enDay_Name
{
    DN_SUNDAY = 1,
    DN_MONDAY = 2,
    DN_TUESDAY = 3,
    DN_WEDNESDAY = 4,
    DN_THURSDAY = 5,
    DN_FRIDAY = 6,
    DN_SATURDAY = 7
}

public enum enEmployee_Type
{
    ET_PERMANENT = 0,
    ET_TEMPORARY = 1
}
public enum enWorking_Status
{
    WS_WORKING = 0,
    WS_RESIGN = 1,
    WS_TERMINATED = 2
}
//public enum enActive_Status
//{ 
//    AS_TRUE=0,
//    AS_FALSE=1
//}
public enum enLowLevelMasterType
{
    LLM_NONE = 0,
    LLM_YES_NO = 1,
    LLM_DAYS_NAME = 2,
    LLM_OT_FORMULA = 3,
    LLM_ABSENT_TYPE = 4,
    LLM_EMPLOYEE_STATUS = 5,
    LLM_ATTENDANCE_STATUS = 6,
    LLM_EMPLOYEE_TYPE = 7,
    LLM_SCALE_GRADE = 8,
    LLM_WORKING_STATUS = 9,
    LLM_ACTIVE_STATUS = 10,
    LLM_WEEKLY_OFF_OPTION_DAYS = 11,
    LLM_PAYHEAD_TYPE = 12,
    LLM_SHIFT_CONSIDERATION = 13,
    LLM_LEAVE_CONSIDERATION = 14,
    LLM_HOLYDAY_TYPE = 15,
    LLM_USER_ROLE = 16,
    LLM_PAY_STRUCTURE_TYPE = 17,
    LLM_MONTH = 18,
    LLM_PAYMENT_TYPE = 19,
    LLM_EXTRA_BENIFIT_TYPE = 20,
    LLM_DAY_ATTENDANCE_STATUS = 21,
    LLM_APPLIED_SHIFT_OF = 22,
    LLM_USER_LEVEL = 23,
    LLM_USER_LEVEL_TYPE = 24,
    LLM_COMPANY_TYPE = 25,
    LLM_ROTATION_TYPE = 26
}
public enum enScale_Grade
{
    SG_ONE = 1,
    SG_TWO = 2,
    SG_THREE = 3,
    SG_FOUR = 4,
    SG_FIVE = 5
}

public enum enExportType
{
    NoFormat = 0,
    CrystalReport = 1,
    RichText = 2,
    WordForWindows = 3,
    Excel = 4,
    PortableDocFormat = 5,
    HTML32 = 6,
    HTML40 = 7,
    ExcelRecord = 8,
    Text = 9,
    CharacterSeparatedValues = 10,
    TabSeperatedText = 11,
    EditableRTF = 12,
    Xml = 13,
    RPTR = 14,
    ExcelWorkbook = 15,
}

public enum enPayHeadType
{
    Addition = 1,
    Deduction = 2
}
public enum enShiftconsideration
{
    PriviouslyAssigned = 1,
    AutoAssigned = 2
}
public enum enLeaveConsideration
{
    LeaveWithoutPay = 1,
    LeaveWithPay = 2
}
public enum enHolidayType
{
    Public = 1,
    WeeklyOff = 2
}
public enum enUserRole
{
    Manager = 1,
    SuperViser = 2
}

public enum enPayStructureType
{
    Gross = 1,
    Additional = 2,
    Deduction = 3
}

public enum en_MONTH
{
    JANUARY = 0,
    FEBRUARY = 1,
    MARCH = 2,
    APRIL = 3,
    MAY = 4,
    JUNE = 5,
    JULY = 6,
    AUGUST = 7,
    SEPTEMBER = 8,
    OCTOBER = 9,
    NOVEMBER = 10,
    DECEMBER = 11
}
public enum enPaymentType
{
    Salary = 1,
    Cheque = 2,
    Cash = 3
}
public enum enExtraBenifitType
{
    Mobile = 1,
    Petrol = 2,
    Travel = 3
}
public enum enAttendanceStatus
{
    Present = 1,
    Absent = 2,
    Leave = 3,
    HalfDay = 4,
    HoliDay = 5,
    WeeklyOff = 6,
    WeeklyOffPresent = 7,
    OutDoorPresent = 8
}
public enum enAppliedShift
{
    EmployeeShift = 1,
    DepartmentShift = 2,
    ShiftGroup = 3,
    ShiftRotation = 4,
    MasterShift = 5
}
public enum enSubMenu
{

    //File Menu
    Users = 1,
    Group = 2,
    Menu = 3,
    SubMenu = 4,
    ChangePassword = 5,
    ImagePath = 6,
    Company = 7,
    Branch = 8,
    ChangeBranch = 9,
    BackupDatabase = 10,
    RestoreDatabase = 11,
    Logoff = 12,
    Exit = 13,


    //GenralMaintain
    Employee = 14,
    EmployeeRule = 15,
    EmployeeLeaveAssignment = 16,
    EmployeeGreeting = 17,

    Department = 18,
    Designation = 19,
    Location = 20,
    WorkCode = 21,

    LeaveType = 22,
    LeaveMap = 23,
    PublicHoliday = 24,

    Shift = 25,
    ShiftGroup = 26,
    ShiftRoaster = 27,
    EmployeeShift = 28,
    DepartmentShift = 29,
    MasterConfigration = 30,

    SMSSetting = 31,
    MailSetting = 32,

    //Activity
    OutdoorEntries = 33,
    LogRecord = 34,
    AttendanceLog = 35,
    AttendanceRegister = 36,
    OverTimeRegister = 37,


    //Utilities
    ImportEmployee = 38,
    ImportEmployeeDetail = 39,
    ExportEmployee = 40,
    ExportEmployeeDetail = 41,
    ExportEmployeeLeaveSummary = 42,

    //Device
    DeviceManagement = 43,
    DeviceStatusLog = 44,
    DeviceGreeting = 45,

    //PayRoll
    PaySlip = 46,
    PaySlipGeneration = 47,
    PayHead = 48,
    PayStructure = 49,
    Bonus = 50,
    Incentive = 51,
    ExtraBenifit = 52,
    ExtraBenifitDetail = 53,
    ExtraDeductions = 54,
    LoanType = 55,
    Loan = 56,
    LoanRequest = 57
}
public class _Enum_Common
{
    public static string[] _Payment_Term = { "Pay By Sender", "Pay By Receiver", };
    public static string[] _Receipt = { "PENDING", "PART PAYMENT", "FULL PAYMENT", "PAYMENT(DISC.)" };
    public static string[] _Invoice = { "Invoice Number", "Invoice Date" };
    public static string[] _Consignment = { "Consignment Number", "Consignment Number Alternate", "Consignment Date", "Consignment Id" };
    public static string[] _Load_Status = { "Loaded", "Unloaded" };
    public static string[] _Manifest = { "Road", "Air" };
    public static string[] _SectorBillType = { "Courrier Bag Voucher Number", "Master Airway Bill Number", "Shippers Dispatch Order Number" };
    public static string[] _ModeOfTransport = { "Truck", "Air Frieght", "Courrier", "Domestic Delivery", "Unaccoumpanied" };
    public static string[] _Address = { "CODE", "NAME", "ACCOUNTNUMBER", "COMPANYNAME", "CONTACTPERSON", "ADDRESS1", "ADDRESS2", "ADDRESS3", "CITY", "STATE", "COUNTRY", "ZIP", "EMAIL", "PHONENUMBER", "FAXNUMBER", "TELEX", "VATCODE", "REFERENCE", "DEPOT" };
    public static string[] _Country = { "CODE", "NAME", "CURRENCY" };
    public static string[] _Currency = { "CODE", "NAME" };
    public static string[] _Depot = { "CODE", "NAME" };
    public static string[] _Product = { "CODE", "NAME" };
    public static string[] _Description = { "CODE", "NAME" };
    public static string[] _LoadType = { "CODE", "NAME" };
    public static string[] _Common = { "CODE", "NAME" };
    public static string[] _ChargeType = { "INCOME", "TAX" };
    public static string[] _SectorStatus = { "CREATED", "DISPATCHED", "INWARDED" };
    public static string[] _Sector = { "SECTOR ID", "SECTOR NUMBER", "GENERATED SECTORNUMBER", "SECTOR DATE", "SECTOR BILL TYPE NUMBER", "SECTOR TYPE", "ORIGIN DEPOT", "DESTINATION DEPOT", "CARRIER", "MODE OF TRANSPORT", "GENERATED MANIFEST NUMBER" };
    public static string[] _Unit_Type = { "AIRCRAFT ", "TRAILER", "SWAPBODY", "VAN", "PALLET", "ULD", "CAGE", "MBAG", "BELLYCART", "OBAG", "TBAG" };
    public static string[] _UnitSearchBy = { "UNIT ID ", "UNIT NUMBER", "UNIT DATE", "CONTENT TYPE", "VALUE", "ORIGIN DEPOT", "DESTINATION DEPOT" };    //enDeliveryAllocationSearchBy
    public static string[] _DeliveryAllocationSearchBy = { "DELIVERY ALLOCATION NUMBER", "CONSIGNMENTS", "ROUND", "DRIVER" };
    public static string[] _DeviceType = { "BLACK AND WHITE", "I FACE", "TFT" };
    public static string[] _LowLevelMasterType = { "NONE", "YES/NO", "DAYS NAME", "OT FORMULA", "ABSENT TYPE", "EMPLOYEE STATUS", "ATTENDANCE STATUS", "EMPLOYEE TYPE", "SCALE_GRADE", "WORKING_STATUS", "ACTIVE_STATUS", "", "PAY HEAD TYPE", "SHIFT CONSIDERATION", "LEAVE CONSIDERATION", "HOLYDAY TYPE", "USER ROLE", "PAY STRUCTURE TYPE", "MONTH", "PAYMENT TYPE", "EXTRA BENIFIT TYPE", "DAY ATTENDANCE STATUS", "APPLIED SHIFT OF", "USER LEVEL", "USER LEVEL TYPE", "Company Type" };//, "ACTIVE_STATUS" };
    public static string[] _PayHeadType = { "ADDITION", "DEDUCTION" };
    public static string[] _ShiftConsideration = { "PREVIOUSLY ASSIGNED", "AUTO ASSIGNED" };
    public static string[] _LeaveConsideration = { "LEAVE WITHOUT PAY", "LEAVE WITH PAY" };
    public static string[] _HolidayType = { "PUBLIC", "WEEKLY OFF" };
    public static string[] _UserRoleType = { "MANAGER", "SUPER VISER" };
    public static string[] _PayStructireType = { "GROSS", "ADDITIONAL", "DEDUCTION" };
    public static string[] _HR_MONTHS = { "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" };
    public static string[] _PaymentType = { "SALARY", "CHEQUE", "CASH" };
    public static string[] _ExtraBenifitType = { "MOBILE", "PETROL", "TRAVEL" };
    public static string[] _AttendanceStatus = { "PRESENT", "ABSENT", "LEAVE", "HALFDAY", "HOLIDAY", "WEEKLYOFF", "WEEKLYOFFPRESENT", "OUTDOORPRESENT" };
    public static string[] _AppliedShiftOf = { "EMPLOYEESHIFT", "DEPARTMENTSHIFT", "SHIFTGROUP", "SHIFTROTATION", "MASTERSHIFT" };
    public static string[] _USER_LEVEL = { "I", "II", "III", "IV", "V" };
    public static string[] _USER_LEVEL_TYPE = { "USERLEVELTYPE1", "USERLEVELTYPE2", "USERLEVELTYPE3", "USERLEVELTYPE4", "USERLEVELTYPE5", "USERLEVELTYPE6", "USERLEVELTYPE7", "USERLEVELTYPE8", "USERLEVELTYPE9", "USERLEVELTYPE10" };
    public static string[] _CompnayType = { "Service", "Manufacturing", "Trading" };
}