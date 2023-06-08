use("Cluster0")
db.createCollection("Utility")
db.createCollection("Users")
db.createCollection("Transactions")

db.Utility.find()
db.Users.find()
db.Transactions.find()

// db.Transactions.remove({ })
 
db.Utility.insertMany( [
    {"Name":"Sample Electricity Bill","Desc":"Late fee is high", "Frequency":"M","ExpectedPayDD": 8, "ExpectedPayAmount": 2000},
    {"Name":"Sample School Fees","Desc":"My School Fee","Frequency":"Y","ExpectedPayDD": 10, "ExpectedPayMM": 06,"ExpectedPayAmount": 200000},
    {"Name":"Sample Internet Bill","Desc":"Wifi Bill(You Broadband)","Frequency":"Q","ExpectedPayDD":15,"ExpectedPayMM": 03, "ExpectedPayAmount": 1500}
]
)

db.Users.insertMany( [
    {"UserId":"Alex","Password": "Alex@123","Name":"Alex", "Phone":"0891-2526370"},
    {"UserId":"John","Password": "John@123","Name":"John", "Phone":"0803678597"},
    {"UserId":"Mary","Password": "Mary@123","Name":"Marry", "Phone":"0908765436"}
   
]
)

db.Transactions.insertMany( [
    {"UtilityId":ObjectId("648257126569829a77c14606"),"ActualPaidDate": "09-06-2023","MMPaidFor": 06,"ActualPaidAmount":2000},
    {"UtilityId":ObjectId("648257126569829a77c14607"),"ActualPaidDate": "10-06-2023","YYPaidFor": 2023,"ActualPaidAmount":200000}
]
)
