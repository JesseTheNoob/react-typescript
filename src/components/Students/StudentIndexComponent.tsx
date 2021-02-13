import { Grid, TextField, Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import { useFormHooks } from "../../hooks/StudentHooks/formHooks";
const StudentIndexComponent = () => {
  const {studentDataForm, setStudentDataForm, addToForm, studentData, deleteItem} = useFormHooks()
  return (
    <Grid container={true}>
      <Grid item={true} xs={12}>
        <Grid container={true}>
          <Grid item={true} xs={12} md={3}>
            <TextField 
              type='text'
              name='firstName'
              label='first name'
              variant='outlined'
              fullWidth
              onChange={(e) => setStudentDataForm({...studentDataForm, firstname: e.target.value})}
              value={studentDataForm.firstname}
            />
          </Grid>
          <Grid item={true} xs={12} md={3}>
            <TextField 
              type='text'
              name='lastName'
              label='last name'
              variant='outlined'
              fullWidth
              onChange={(e) => setStudentDataForm({...studentDataForm, lastname: e.target.value})}
              value={studentDataForm.lastname}
            />
          </Grid>
          <Grid item={true} xs={12} md={3}>
            <TextField 
              type='text'
              name='course'
              label='course'
              variant='outlined'
              fullWidth
              onChange={(e) => setStudentDataForm({...studentDataForm, course: e.target.value})}
              value={studentDataForm.course}
            />
          </Grid>
          <Grid item={true} xs={12} md={3}>
            <TextField 
              type='number'
              name='year'
              label='year'
              variant='outlined'
              fullWidth
              onChange={(e) => setStudentDataForm({...studentDataForm, yearLevel: Number(e.target.value)})}
              value={studentDataForm.yearLevel}
            />
          </Grid>
            <Grid container={true} justify='center'>
              <Grid item={true}>
                <Box my={2}>
                  <Button variant="contained" color="primary" onClick={() => addToForm()}>
                    Add
                  </Button>
                </Box>
              </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Grid container={true}>
        <Grid item={true} xs={12}>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Course</TableCell>
                    <TableCell align="right">Year Level</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {studentData.map((row, index) => (
                    <TableRow>
                        <TableCell align="right">{row.firstname}</TableCell>
                        <TableCell align="right">{row.lastname}</TableCell>
                        <TableCell align="right">{row.course}</TableCell>
                        <TableCell align="right">{row.yearLevel}</TableCell>
                        <TableCell align="right"><Button onClick={() => deleteItem(index)} color='secondary' variant='contained'>Delete</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default StudentIndexComponent;
