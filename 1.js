function Biodata(Nama,Umur){
    let Data = {
        name : Nama,
        age : Umur,
        address : "Kp. Kadugajah RT 06 RW 08 Pandeglang, Pandeglang Banten",
        hobbies : ['Swimming','Browsing','Reading'],
        is_married : false,
        list_school : [
            {
                "name" : "Universitas Serang Raya",
                "year_in" : "2015",
                "year_out" : "2019",
                "major" : "Teknik Informatika"
            },
            {
                "name" : "SMKN 1 Pandeglang",
                "year_in" : "2012",
                "year_out" : "2015",
                "major" : "Akuntansi"
            }
        ],
        skill : {
            "PHP" : "Beginner",
            "Mysql" : "Beginner",
            "Java" : "Beginner",
            "JavaScrpt" : "Beginner"
        },
        interest_in_coding : true
    }
    return JSON.stringify(Data);
}
Biodata("Lukman Hadi",22);