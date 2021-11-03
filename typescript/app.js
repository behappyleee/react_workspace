"use strict";
console.log("Hellooo 12121");
var a = 5;
// a = '34343'; 에러가 발생 함 재할당도 number 로 할당을 하여야 함 
var sa = 5;
var student = {
    name: 'jake',
    course: 'Getting Started with TypeScript',
    codingIQ: 80,
    code: function () {
        console.log('brain is working hard');
    }
};
// 타입 명시를 해주어야함 - 연산자는 숫자이므로 숫자를 명시해주어여함 string 일 시 오류가 발생 함
function calculate(lostPoints) {
    return 100 - lostPoints;
}
var studentID = 1234;
var studentName = 'lee';
function getStudentDetails(studentID) {
    studentID: Number;
    studentName: String;
}
{
    ;
    ;
}
// Type Interface
