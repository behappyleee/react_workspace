console.log("Hellooo 12121" );

let a = 5;
// a = '34343'; 에러가 발생 함 재할당도 number 로 할당을 하여야 함 
let sa:number = 5;

let student = {
    name: 'jake',
    course : 'Getting Started with TypeScript',
    codingIQ: 80,
    code : function() {
        console.log('brain is working hard');
    }

}

// 타입 명시를 해주어야함 - 연산자는 숫자이므로 숫자를 명시해주어여함 string 일 시 오류가 발생 함
function calculate(lostPoints:number) {
    return 100 - lostPoints;
} 

let studentID : number = 1234;
let studentName: string = 'lee';

function getStudentDetails(studentID: number):String
{
    studentID : Number;
    studentName: String; 
    return 'lee' ;
    // return null;
} 

// Type Interface 
// interface 타입으로 사용위해서 먼저 만들어 줌
// 보통 인터페이스 앞에는 i 를 붙이는 것이 컨벤션 이지만 타입스크립트에서는 붙이지 않음
interface Student  {
    studentID : Number;
    studentName: String;
    age ? : number;
    gender: string
}

let student_01 = {
    studentID : 1234,
    studentName: 'kim',
    age : 45,
    gender: 'Guy'
}

// interface 를 리턴값으로 지정 시 리턴값을 반드시 인터페이스 상수값을 가져야함
// interface 에 정의된 프로퍼티에 물음표를 붙일 시 ? 를 붙이면 있어도 되고 없어도 되는 옵션임
function getStudentDetail(studentID :number):Student {
    return {
        studentID : 1234,
        studentName: 'kim',
        // age : 24,
        gender: 'park'
    }
}
// interface 사용은 반복 사용되는 코드를 피함 (좋은 코딩의 예시임)
function saveStudentDetail(student: Student):void {

}

saveStudentDetail({
    studentID : 1234,
    studentName: 'kim',
    // age : 24,
    gender: 'park'
})

// interface 대신 오브젝트를 넣어야함 대신 interface 맞는것을 넣어주어야 함
saveStudentDetail(student_01);

interface sample {
    // readonly 속성을 추가 시 프로퍼티 값은 읽기 전용이므로 새로운 값은 할당이 안됨
    readonly studentID : number;
    studentName: string;
    // interface 내의 메서드 정의 방식은 2가지임 아래 2개 똑같은 방식임
    // comment string 매개 변수 string 값을 반환하는 메서드
    addComment(comment:string):string;
    addComment: (comment: string) => string;
    addComment1? : (Comment:string) => string;
}

// interface 는 컴파일 될 떄 아무런 영향이 없기에 javascript 로 인터페이스는 컴파일이 안됨

// Enum 과 Literal 
// Enum 사용 (Enum 은 컴파일 되어 JavaScript 에 나타남 )
// Enum --> 연관된 아이템들을 묶어서 표현할 수 있는 수단
// Enum 사용 위하여서는 Enum 을 먼저 선언
enum GeneralType {
    Male,
    Female,
    GenderNeutral
}

// 이러면 자바스크립트로 컴파일 시 숫자가 아닌 옆에 string 이 나타남 
enum GeneralType01 {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'genderNeutral'
}


interface StudentSample  {
    studentID : Number;
    studentName: String;
    age ? : number;
    gender: GeneralType
}

// interface 사용은 반복 사용되는 코드를 피함 (좋은 코딩의 예시임)
function saveStudentDetail01(student: StudentSample):void {

}


saveStudentDetail01({
    studentID : 1234,
    studentName: 'kim',
    // age : 24,
    // enum 사용위하여서는 밑에 처럼 enum 을 사용하여 준다
    gender: GeneralType.Male
})

// 리터럴 타입
// Enum 과 달리 구분자를 | 자로 주어 사용
interface StudentSample01  {
    studentID : Number;
    studentName: String;
    age ? : number;
    gender: 'male' | 'female' | 'genderNeutral'
}

// interface 사용은 반복 사용되는 코드를 피함 (좋은 코딩의 예시임)
function saveStudentDetail02(student: StudentSample01):void {

}

saveStudentDetail02({
    studentID : 1234,
    studentName: 'kim',
    // age : 24,
    // enum 사용위하여서는 밑에 처럼 enum 을 사용하여 준다
    // 리터럴 타입은 반드시 선언된 리터럴에 속하는 값을 가져야 한다.
    gender: 'male'
})





