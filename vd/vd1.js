let person = {
    cccd: 123123123,
    ho: "Hoang",
    tendem: "",
    ten: "Ha",
    email: "hhnvenom@gmail.com",
    getFullName: function(){
        let fullName = this.ho + " " + this.tendem + " " + this.ten;
        return fullName;
    }

};
//person.ho = "Tran";

// access to the object' attributes
//console.log(person.ho + " " + person.tendem + " " + person.ten);
console.log(person.getFullName());

//creat a class
class Sinhvien {
    construstor(masv, hosv, tensv, email, sdt, note) {
        this.masv = masv;
        this.hosv = hosv;
        this.tensv = tensv;
        this.email = email;
        this.sdt = sdt;
        this.note = note;

    }
    getFullName(){
        return this.hosv + " " + this.tensv;

    }
    //tinh tuoi
    getAge(){
        let date = new Date();
        let year = date.getFullYear();
        let age = currentYear - thisnameSinh;
        return age;
    }
}

let sv1 = new Sinhvien('PD0001','Tran','Thanh','thanh@gmail.com','0123456789','2000');
console.log(sv1.masv);
console.log(sv1.getFullName()+" "+ sv1.getAge()+"years old.");