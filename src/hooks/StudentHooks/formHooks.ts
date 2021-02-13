import {useState, useEffect} from 'react';
class StudentInformation {
    firstname: string = '';
    lastname: string = '';
    course: string = '';
    yearLevel: number = 0;
  }

export const useFormHooks = () => {
    const [studentDataForm, setStudentDataForm] = useState<StudentInformation>(new StudentInformation());
    const [studentData, setStudentData] = useState<StudentInformation[]>([]);
    const [message, setMessage] = useState<string>('');
    const addToForm = (): void => {
      setStudentData([...studentData, {...studentDataForm}]);
      setStudentDataForm(new StudentInformation());
    }
    const deleteItem = (index: number): void => {
      setStudentData(studentData.filter((item, i) => index !== i))
    }
    useEffect(() => {
      console.log(studentData)
    }, [studentData])
    // same ra ni sa componentDidMount
    useEffect(() => {
      setMessage('you are typing');
  
      const timedExecution = setTimeout(() => {
        setMessage('you are not typing');
      }, 1000);
  
      return () => clearTimeout(timedExecution);
    }, [studentDataForm])
  
    // same ra ni sa componentDidMount
    useEffect(() => {
      setMessage('componentDidMount');
      
      // same ni sa componentWillUnmount
      return () => console.log('component unmount');
    }, [])

    return {addToForm, message, deleteItem, studentData, studentDataForm, setStudentDataForm, setStudentData}
}