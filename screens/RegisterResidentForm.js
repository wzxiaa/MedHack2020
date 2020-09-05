import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormik, Formik } from 'formik';
import Input from '../FormElement/Input';
import Button from '../FormElement/Button';
import Select from '../FormElement/Select';

const ResidentRegisterForm = () => {
  return (
    <Formik
      initialValues={{
        first_name:'', 
        last_name:'',
        age:'',
        gender:'',
        medical_history:'',
        prescribed_med:''
      }}
      onSubmit={(values) => console.log('submitted', values)}
    >
      {({handleChange, handleSubmit, values}) => (
        <View>
          <Input label="First name" value={values.first_name} onChangeText={handleChange('first_name')}/>
          <Input label="Last name" value={values.last_name} onChangeText={handleChange('last_name')}/>
          <Input label="Age" value={values.age} onChangeText={handleChange('age')}/>
          <Select 
            onValueChange={(value) => {
              console.log(value);
              handleChange('gender');
            }}
            items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
            ]}
          />
          {/* midical history section */}
          <View>

          </View>
          <Button text="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ResidentRegisterForm;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    header: {
      fontSize: 22
    },
    subHeader: {
      fontSize: 15
    }
  });