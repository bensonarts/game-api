let sqlFixtures = require('sql-fixtures');
let mysql = require('mysql');

let conn = mysql.createConnection({
    host: process.env.DW_DB_HOST,
    user: process.env.DW_DB_USER,
    password: process.env.DW_DB_PASSWORD,
    database: process.env.DW_DB_NAME
});

conn.connect(function(err) {
    if (err) throw err;
    const sql = "CREATE TABLE VIP (CIFNO int(11) NOT NULL,CIFNumber varchar(25) DEFAULT NULL,principaladvanced decimal(19,4) DEFAULT NULL,principalpaid decimal(19,4) DEFAULT NULL,interestpaid decimal(19,4) DEFAULT NULL,Count int(11) DEFAULT NULL,VIPStatus int(11) DEFAULT NULL,PorfolioCode int(11) DEFAULT NULL,UNIQUE KEY CIFNumber (CIFNumber)) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
    conn.query(sql, function(err, result) {
        if (err) throw err;
        console.log('table created');
    })
});

let dbConfig = {
    client: 'mysql',
    connection: {
        host: process.env.DW_DB_HOST,
        user: process.env.DW_DB_USER,
        password: process.env.DW_DB_PASSWORD,
        database: process.env.DW_DB_NAME,
        port: 3306
    }
};

let dataSpec = {
    VIP: [
        {
            CIFNO: 1,
            CIFNumber: '111220000',
            principaladvanced: 500.00,
            principalpaid: 500.00,
            interestpaid: 402.50,
            Count: 2,
            VIPStatus: 2,
            PorfolioCode: 2
        }, {
            CIFNO: 25070,
            CIFNumber: '123456789',
            principaladvanced: 500.00,
            principalpaid: 426.35,
            interestpaid: 226.02,
            Count: 1,
            VIPStatus: 1,
            PorfolioCode: 2
        }, {
            CIFNO: 619,
            CIFNumber: '111229999',
            principaladvanced: 450.00,
            principalpaid: 450.00,
            interestpaid: 604.05,
            Count: 1,
            VIPStatus: 1,
            PorfolioCode: 1
        }, {
            CIFNO: 25324,
            CIFNumber: '140720000',
            principaladvanced: 0.00,
            principalpaid: 0.00,
            interestpaid: 0.00,
            Count: 1,
            VIPStatus: 0,
            PorfolioCode: 3
        }
    ]
};

sqlFixtures.create(dbConfig, dataSpec, function(err, result) {
    if (result) {
        console.log('VIP records created');
    } else if (err) {
        console.error(err);
    }
});
