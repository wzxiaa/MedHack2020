import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormik, Formik } from 'formik';
import Input from '../FormElement/Input';
import Button from '../FormElement/Button';
import Select from '../FormElement/Select';
import Check from '../FormElement/CheckBox';

const genderOptions = 
  [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]

const ResidentRegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name:'', 
        age:'',
        gender:'',
        medical_history:'',
        prescribed_med:'',
        test:''
      }}
      onSubmit={(values) => console.log('submitted', values)}
    >
      {({handleChange, handleSubmit, values}) => (
        <View>
          <Input label="Name" value={values.name} onChangeText={handleChange('name')}/>
          <Input label="Age" value={values.age} onChangeText={handleChange('age')}/>
          <Select 
            label="Gender"
            placeholder={{label:"Select gender ...", value: null}}
            onValueChange={(value) => {
              console.log(value);
              handleChange('gender');
            }}
            items={genderOptions}
          />
          {/* midical history section */}
          <View>
            <Check label="test" onValueChange={handleChange('test')} 
                      value={false} disabled={false}
            />
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