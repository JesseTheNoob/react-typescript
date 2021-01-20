import {useState, useEffect} from 'react';

class StudentInformation {
  firstname: string = '';
  lastname: string = '';
  course: string = '';
  yearLevel: number = 0;
}

function App() {
  const [studentDataForm, setStudentDataForm] = useState<StudentInformation>(new StudentInformation());
  const [studentData, setStudentData] = useState<StudentInformation[]>([]);
  const addToForm = (): void => {
    setStudentData([...studentData, {...studentDataForm}]);
    setStudentDataForm(new StudentInformation());
  }
  const deleteItem = (index: number): void => {
    setStudentData(studentData.filter((item, i) => index !== i))
  }
  return (
    <div className="App">
      <label>firstname</label>
      <input type='text' value={studentDataForm.firstname} onChange={(e) => setStudentDataForm({...studentDataForm, firstname: e.target.value})} /> <br />
      <label>lastname</label>
      <input type='text' value={studentDataForm.lastname} onChange={(e) => setStudentDataForm({...studentDataForm, lastname: e.target.value})} /><br />
      <label>course</label>
      <input type='text' value={studentDataForm.course} onChange={(e) => setStudentDataForm({...studentDataForm, course: e.target.value})} /><br />
      <label>year level</label>
      <input type='number' value={studentDataForm.yearLevel} onChange={(e) => setStudentDataForm({...studentDataForm, yearLevel: Number(e.target.value)})} /><br />
      <button onClick={addToForm}>add</button>
      <hr />
      <table>
          <tr>
            <th>
              firstname
            </th>
            <th>
              lastname
            </th>
            <th>
              course
            </th>
            <th>
              year level
            </th>
            <th>
              actions
            </th>
          </tr>
          {studentData.map((item, index) => (
            <tr>
              <td>
                {item.firstname}
              </td>
              <td>
                {item.lastname}
              </td>
              <td>
                {item.course}
              </td>
              <td>
                {item.yearLevel}
              </td>
              <td>
                <button onClick={() => deleteItem(index)}>delete</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default App;
