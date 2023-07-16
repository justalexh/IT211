var gradeData = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";
var students = gradeData.split(", ");
var totalStudents = students.length;
var lowestScore = Infinity;
var highestScore = -Infinity;
var totalScore = 0;

// Create an empty array to store student objects
var studentDataArray = [];

// Iterate over each student in the array.
for (var i = 0; i < students.length; i++) {
  
  var studentData = students[i].split("|");
  var studentName = studentData[0];
  var studentScore = parseInt(studentData[1]);

  // Showcase Lowest and Highest Score
  lowestScore = Math.min(lowestScore, studentScore);
  highestScore = Math.max(highestScore, studentScore);

  // Total Score of Students
  totalScore += studentScore;

  // Capitalizing Student Name with Upper Method
  var capitalizedStudentName = studentName.charAt(0).toUpperCase() + studentName.slice(1);

  // Create students name & score
  var studentObject = {
    name: capitalizedStudentName,
    score: studentScore
  };

  // Add the student object to the array
  studentDataArray.push(studentObject);
}

// Sort the student objects array alphabetically based on student names
studentDataArray.sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

// Display the student name and score
studentDataArray.forEach(function(studentData) {
  var listItem = document.createElement("li");
  var studentNameSpan = document.createElement("span");
  var studentScoreSpan = document.createElement("span");

  studentNameSpan.textContent = studentData.name;
  studentNameSpan.classList.add("student-name");

  studentScoreSpan.textContent = studentData.score;
  studentScoreSpan.classList.add("student-score");

  listItem.appendChild(studentNameSpan);
  listItem.appendChild(document.createTextNode(" - "));
  listItem.appendChild(studentScoreSpan);

  document.querySelector(".student-list").appendChild(listItem);
});

// Average Score Calculation
var averageScore = totalScore / totalStudents;

var statisticsDiv = document.querySelector(".statistics");

var totalStudentsParagraph = document.createElement("p");
totalStudentsParagraph.textContent = "Total number of students: " + totalStudents;

var lowestScoreParagraph = document.createElement("p");
lowestScoreParagraph.textContent = "Lowest score: " + lowestScore;

var highestScoreParagraph = document.createElement("p");
highestScoreParagraph.textContent = "Highest score: " + highestScore;

var averageScoreParagraph = document.createElement("p");
averageScoreParagraph.textContent = "Average score: " + averageScore.toFixed(2);

statisticsDiv.appendChild(totalStudentsParagraph);
statisticsDiv.appendChild(lowestScoreParagraph);
statisticsDiv.appendChild(highestScoreParagraph);
statisticsDiv.appendChild(averageScoreParagraph);