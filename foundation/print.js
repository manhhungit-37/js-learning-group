//In ra bang html

//Start EXE

const salaries = {
    tri: 200,
    truong: 300,
    minh: 1000
};


function printOut(obj) {
    document.write("<table>");
    for (let i = 1; i <= Object.keys(obj).length; i++) {
        document.write("<tr>")
        document.write("<td colspan=\"2\">List" + i);
        document.write("</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>" + Object.keys(obj)[i - 1]);
        document.write("</td>");
        document.write("<td>" + Object.values(obj)[i - 1]);
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

printOut(salaries);

function printOut2(obj) {
    let i = 1;
    document.write("<table>");
    for (let key in obj) {
        document.write("<tr>")
        document.write("<td colspan=\"2\">List" + i);
        document.write("</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>" + key);
        document.write("</td>");
        document.write("<td>" + obj[key]);
        document.write("</td>");
        document.write("</tr>");
        i++;
    }
    document.write("</table>");
}

printOut2(salaries);

//End EXE